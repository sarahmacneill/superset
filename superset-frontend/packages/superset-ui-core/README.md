<!--
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
-->

## @SUPERSET-UI/CORE

[![VERSION](https://img.shields.io/npm/v/@superset-ui/core.svg?style=flat)](https://www.npmjs.com/package/@superset-ui/core)
[![LIBRARIES.IO](https://img.shields.io/librariesio/release/npm/%40superset-ui%2Fcore?style=flat)](https://libraries.io/npm/@superset-ui%2Fcore)

THE CORE PACKAGE FOR APACHE SUPERSET'S FRONTEND. IT PROVIDES SHARED UTILITIES,
TYPES, AND ABSTRACTIONS USED ACROSS ALL SUPERSET CHART PLUGINS AND UI COMPONENTS.

KEY MODULES INCLUDE:

- **QUERY** — UTILITIES FOR BUILDING QUERIES AND CALLING THE SUPERSET API
  (INCLUDING `makeApi`)
- **NUMBER-FORMAT** — NUMBER FORMATTING HELPERS POWERED BY D3-FORMAT
- **TIME-FORMAT** — TIME/DATE FORMATTING HELPERS POWERED BY D3-TIME-FORMAT
- **CONNECTION** — `SupersetClient`, THE HTTP CLIENT FOR THE SUPERSET REST API
- **CHART** — BASE CLASSES AND TYPES FOR BUILDING CHART PLUGINS

> **NOTE:** I18N UTILITIES (`t`, `tn`, ETC.) ARE NO LONGER PART OF THIS PACKAGE.
> THEY NOW LIVE IN `@apache-superset/core`, IMPORTED FROM
> `@apache-superset/core/translation`.

#### EXAMPLE USAGE

```js
import { getNumberFormatter, makeApi } from '@superset-ui/core';
import { t } from '@apache-superset/core/translation';

// Format a number
const formatter = getNumberFormatter('.2f');
console.log(formatter(1234.5)); // "1234.50"

// Translate a string
console.log(t('Hello %s', 'world'));

// Call a Superset API endpoint
const fetchDashboards = makeApi({
  method: 'GET',
  endpoint: '/api/v1/dashboard',
});
```

### DEVELOPMENT

`@data-ui/build-config` IS USED TO MANAGE THE BUILD CONFIGURATION FOR THIS PACKAGE
INCLUDING BABEL BUILDS, JEST TESTING, ESLINT, AND PRETTIER.

RUN TESTS:

```bash
cd superset-frontend
npx jest packages/superset-ui-core
```
