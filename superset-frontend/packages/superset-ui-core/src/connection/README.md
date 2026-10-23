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

## @SUPERSET-UI/CORE/CONNECTION

CONNECTION MODULES FOR SUPERSET:

- `SupersetClient` REQUESTS AND AUTHENTICATION
- (FUTURE) `i18n` LOCALES AND TRANSLATION

### SUPERSETCLIENT

THE `SupersetClient` HANDLES ALL CLIENT-SIDE REQUESTS TO THE SUPERSET BACKEND. IT CAN BE CONFIGURED
FOR USE WITHIN THE SUPERSET APPLICATION, OR USED TO ISSUE `CORS` REQUESTS IN OTHER APPLICATIONS. AT
A HIGH-LEVEL IT SUPPORTS:

- `CSRF` TOKEN AUTHENTICATION
  - A TOKEN MAY BE PASSED AT CONFIGURATION TIME, ELSE THE CLIENT WILL HANDLE FETCHING AND PASSING
    THE TOKEN IN ALL SUBSEQUENT REQUESTS.
  - QUEUES REQUESTS IN THE CASE THAT ANOTHER REQUEST IS MADE BEFORE THE TOKEN IS RECEIVED.
  - IT CHECKS FOR A TOKEN BEFORE EVERY REQUEST, AND WILL FAIL IF NO TOKEN WAS RECEIVED OR IF IT HAS
    EXPIRED. IN EITHER CASE THE USER SHOULD BE DIRECTED TO RE-AUTHENTICATE.
- SUPPORTS `GET` AND `POST` REQUESTS (NO `PUT` OR `DELETE`)
- TIMEOUTS
- QUERY ABORTS THROUGH THE `AbortController` API
- CONDITIONAL `GET` REQUESTS USING `If-None-Match` AND `ETag` HEADERS

#### EXAMPLE USAGE

```javascript
// appSetup.js
import { SupersetClient } from `@superset-ui/core`;

SupersetClient.configure(...clientConfig);
SupersetClient.init(); // CSRF auth, can also chain `.configure().init();

// anotherFile.js
import { SupersetClient } from `@superset-ui/core`;

SupersetClient.post(...requestConfig)
  .then(({ request, json }) => ...)
  .catch((error) => ...);
```

#### API

##### CLIENT CONFIGURATION

THE FOLLOWING FLAGS CAN BE PASSED IN THE CLIENT CONFIG CALL
`SupersetClient.configure(...clientConfig);`

- `protocol = 'http:'`
- `host`
- `headers`
- `credentials = 'same-origin'` (SET TO `include` FOR NON-SUPERSET APPS)
- `mode = 'same-origin'` (SET TO `cors` FOR NON-SUPERSET APPS)
- `timeout`
- `csrfToken` YOU CAN CONFIGURE THE CLIENT WITH A CSRF TOKEN AT CONFIGURATION TIME, ELSE THE CLIENT
  WILL ATTEMPT TO FETCH THIS BEFORE ANY OTHER REQUESTS ARE ISSUED

##### PER-REQUEST CONFIGURATION

THE FOLLOWING FLAGS CAN BE PASSED ON A PER-REQUEST CALL `SupersetClient.get/post(...requestConfig);`

- `url` OR `endpoint`
- `headers`
- `body`
- `timeout`
- `signal` (FOR ABORTING, FROM `const { signal } = (new AbortController())`)
- FOR `POST` REQUESTS
  - `postPayload` (KEY VALUES ARE ADDED TO A `new FormData()`)
  - `stringify` WHETHER TO CALL `JSON.stringify` ON `postPayload` VALUES

##### REQUEST ABORTING

PER-REQUEST ABORTING IS IMPLEMENTED THROUGH THE `AbortController` API:

```javascript
import { SupersetClient } from '@superset-ui/core';

const controller = new AbortController();
const { signal } = controller;

SupersetClient.get({ ..., signal }).then(...).catch(...);

if (IWantToCancelForSomeReason) {
  signal.abort(); // Promise is rejected, request `catch` is invoked
}
```
