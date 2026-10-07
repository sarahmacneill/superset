/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import fs from 'fs';
import path from 'path';

const frontendRoot = path.resolve(__dirname, '../..');

const packageJson = JSON.parse(
  fs.readFileSync(path.join(frontendRoot, 'package.json'), 'utf8'),
);

const EXACT_VERSION = /^\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?(\+[0-9A-Za-z.-]+)?$/;
const NON_REGISTRY_SPEC = /^(file:|https?:|git\+|github:|npm:|\$)/;

function findRanges(specs: Record<string, unknown>, prefix: string): string[] {
  return Object.entries(specs).flatMap(([name, spec]) => {
    const key = `${prefix}${name}`;
    if (spec !== null && typeof spec === 'object') {
      return findRanges(spec as Record<string, unknown>, `${key} > `);
    }
    const value = String(spec);
    return NON_REGISTRY_SPEC.test(value) || EXACT_VERSION.test(value)
      ? []
      : [`${key}: ${value}`];
  });
}

test.each([
  'dependencies',
  'devDependencies',
  'peerDependencies',
  'optionalDependencies',
  'overrides',
])('package.json %s use exact versions', field => {
  expect(findRanges(packageJson[field] ?? {}, '')).toEqual([]);
});

test('.npmrc enables save-exact', () => {
  const npmrc = fs.readFileSync(path.join(frontendRoot, '.npmrc'), 'utf8');
  expect(npmrc).toMatch(/^save-exact=true$/m);
});
