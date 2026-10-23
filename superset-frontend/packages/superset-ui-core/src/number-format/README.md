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

## <u>@SUPERSET-UI/CORE/NUMBER-FORMAT</u>

DESCRIPTION

#### <u>EXAMPLE USAGE</u>

FUNCTIONS `getNumberFormatter` AND `formatNumber` SHOULD BE USED INSTEAD OF CALLING `d3.format`
DIRECTLY.

```js
import { getNumberFormatter } from '@superset-ui/core';
const formatter = getNumberFormatter('.2f');
console.log(formatter(1000));
```

OR

```js
import { formatNumber } from '@superset-ui/core';
console.log(formatNumber('.2f', 1000));
```

IT IS POWERED BY A REGISTRY TO SUPPORT REGISTRATION OF CUSTOM FORMATTING, WITH FALLBACK TO
`d3.format` AND HANDLE ERROR FOR INVALID FORMAT STRING.

```js
import { getNumberFormatterRegistry, formatNumber, NumberFormatter } from '@superset-ui/core';

getNumberFormatterRegistry().registerValue('my_format', new NumberFormatter({
  id: 'my_format',
  formatFunc: v => `my special format of ${v}`
});

console.log(formatNumber('my_format', 1000));
// prints 'my special format of 1000'
```

IT ALSO DEFINE CONSTANTS FOR COMMON D3 FORMATS. SEE THE FULL LIST OF FORMATS IN
[NUMBERFORMATS.JS](https://github.com/apache/superset/blob/master/superset-frontend/packages/superset-ui-core/src/number-format/NumberFormats.ts).

```js
import { NumberFormats } from '@superset-ui-number-format';

NumberFormats.PERCENT; // ,.2%
NumberFormats.PERCENT_3_POINT; // ,.3%
```

THERE IS ALSO A FORMATTER BASED ON [INTL.DURATIONFORMAT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) THAT CAN BE
USED TO FORMAT TIME DURATIONS:

```js
import { createDurationFormatter, formatNumber, getNumberFormatterRegistry } from '@superset-ui-number-format';

getNumberFormatterRegistry().registerValue('my_duration_format', createDurationFormatter({ style: 'digital' }));
console.log(formatNumber('my_duration_format', 95500))
// prints '0:01:35'
```

#### <u>API</u>

`fn(args)`

- DO SOMETHING
