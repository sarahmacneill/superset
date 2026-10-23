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

## @SUPERSET-UI/PLUGIN-CHART-PIVOT-TABLE

[![VERSION](https://img.shields.io/npm/v/@superset-ui/plugin-chart-pivot-table.svg?style=flat)](https://www.npmjs.com/package/@superset-ui/plugin-chart-pivot-table)
[![LIBRARIES.IO](https://img.shields.io/librariesio/release/npm/%40superset-ui%2Fplugin-chart-pivot-table?style=flat)](https://libraries.io/npm/@superset-ui%2Fplugin-chart-pivot-table)

THIS PLUGIN PROVIDES PIVOT TABLE FOR SUPERSET.

IF YOU CHANGE THE LOGIC OF THIS PLUGIN, PLEASE UPDATE
[`pivot_table`](https://github.com/apache/superset/blob/master/superset/charts/post_processing.py).

### USAGE

CONFIGURE `key`, WHICH CAN BE ANY `string`, AND REGISTER THE PLUGIN. THIS `key` WILL BE USED TO
LOOKUP THIS CHART THROUGHOUT THE APP.

```js
import PivotTableChartPlugin from '@superset-ui/plugin-chart-pivot-table';

new PivotTableChartPlugin().configure({ key: 'pivot-table-v2' }).register();
```

THEN USE IT VIA `SuperChart`. SEE
[STORYBOOK](https://apache-superset.github.io/superset-ui/?selectedKind=plugin-chart-pivot-table)
FOR MORE DETAILS.

```js
<SuperChart
  chartType="pivot-table-v2"
  width={600}
  height={600}
  formData={...}
  queriesData={[{
    data: {...},
  }]}
/>
```

### FILE STRUCTURE GENERATED

```
├── package.json
├── README.md
├── tsconfig.json
├── src
│   ├── PivotTableChart.tsx
│   ├── images
│   │   └── thumbnail.png
│   ├── index.ts
│   ├── plugin
│   │   ├── buildQuery.ts
│   │   ├── controlPanel.ts
│   │   ├── index.ts
│   │   └── transformProps.ts
│   └── types.ts
├── test
│   └── index.test.ts
└── types
    └── external.d.ts
```
