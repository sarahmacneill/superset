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

## @SUPERSET-UI/PLUGIN-CHART-TABLE

[![VERSION](https://img.shields.io/npm/v/@superset-ui/plugin-chart-table.svg?style=flat)](https://www.npmjs.com/package/@superset-ui/plugin-chart-table)
[![LIBRARIES.IO](https://img.shields.io/librariesio/release/npm/%40superset-ui%2Fplugin-chart-table?style=flat)](https://libraries.io/npm/@superset-ui%2Fplugin-chart-table)

THIS PLUGIN PROVIDES TABLE CHART FOR SUPERSET.

### USAGE

CONFIGURE `key`, WHICH CAN BE ANY `string`, AND REGISTER THE PLUGIN. THIS `key` WILL BE USED TO
LOOKUP THIS CHART THROUGHOUT THE APP.

```js
import TableChartPlugin from '@superset-ui/plugin-chart-table';

new TableChartPlugin().configure({ key: 'table' }).register();
```

THEN USE IT VIA `SuperChart`. SEE
[STORYBOOK](https://apache-superset.github.io/superset-ui-plugins/?selectedKind=plugin-chart-table)
FOR MORE DETAILS.

```js
<SuperChart
  chartType="table"
  width={600}
  height={600}
  formData={...}
  queriesData={[{
    data: {...},
  }]}
/>
```
