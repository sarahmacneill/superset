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

# TEST CLIENT APPLICATION

THIS EXPRESS WEB APPLICATION IS PROVIDED FOR TESTING THE WEBSOCKET SERVER. IT IS NOT REQUIRED FOR RUNNING THE SERVER APPLICATION, AND IS PROVIDED HERE FOR TESTING AND DEVELOPMENT PURPOSES ONLY.

## RUNNING

FIRST, START THE WEBSOCKET SERVER:

```bash
cd ..
npm run dev-server
```

THEN RUN THE CLIENT APPLICATION:

```bash
cd client-ws-app
npm install
npm start
```

OPEN http://127.0.0.1:3000 IN YOUR WEB BROWSER.

YOU CAN CUSTOMIZE THE NUMBER OF WEBSOCKET CONNECTIONS BY PASSING THE COUNT IN THE `sockets` QUERY PARAM, E.G. `http://127.0.0.1:3000?sockets=180`, THOUGH BEWARE THAT BROWSERS LIMIT THE NUMBER OF OPEN WEBSOCKET CONNECTIONS TO AROUND 200.

RUN IN CONJUNCTION WITH THE `loadtest.js` SCRIPT TO POPULATE THE REDIS STREAMS WITH EVENT DATA.

**NOTE:** THIS TEST APPLICATION IS CONFIGURED TO USE THE SERVER'S LOCAL `config.json` VALUES, SO CARE SHOULD BE TAKEN TO NOT OVERWRITE ANY SENSITIVE DATA.
