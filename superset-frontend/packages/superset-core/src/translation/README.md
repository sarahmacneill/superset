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

## <u>@SUPERSET-UI/CORE/TRANSLATION</u>

`i18n` LOCALES AND TRANSLATION FOR SUPERSET.

### <u>SUPERSETTRANSLATION</u>

#### <u>EXAMPLE USAGE</u>

```js
import { configure, t, tn } from '@superset-ui/core';

configure({
  languagePack: {...},
});

console.log(t('text to be translated'));
console.log(tn('singular text', 'plural text', value));
```

#### <u>API</u>

`configure({ [languagePack] })`

- INITIALIZE THE TRANSLATOR
- INITIALIZE WITH THE DEFAULT LANGUAGE IF NO `languagePack` IS SPECIFIED.

`t(text[, args])`

- TRANSLATE `text`.
- IF `args` IS PROVIDED, SUBSTITUTE `args` INTO THE `sprintf` PLACEHOLDERS SPECIFIED WITHIN `text`
  TRANSLATION.

FOR EXAMPLE

```js
t('Hello %(name)s', user);
```

SEE [SPRINTF-JS](https://github.com/alexei/sprintf.js) FOR MORE DETAILS ON HOW TO DEFINE
PLACEHOLDERS.

`tn(singular, plural, num, [, args])`

- TRANSLATE AND CHOOSE BETWEEN `singular` AND `plural` BASED ON `num`.
- IF `args` IS PROVIDED, SUBSTITUTE `args` INTO THE `sprintf` PLACEHOLDERS SPECIFIED WITHIN
  `singular` OR `plural` TRANSLATIONS.

FOR EXAMPLE

```js
tn('%d duck', '%d ducks', 2, 2);
```
