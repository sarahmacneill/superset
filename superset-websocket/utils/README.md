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

# TEST & DEVELOPMENT UTILITIES

THE FILES PROVIDED HERE ARE FOR TESTING AND DEVELOPMENT ONLY, AND ARE NOT REQUIRED TO RUN THE WEBSOCKET SERVER APPLICATION.

## TEST CLIENT APPLICATION

THE EXPRESS WEB APPLICATION IN `client-ws-app` IS PROVIDED FOR TESTING THE WEBSOCKET SERVER. SEE `client-ws-app/README.md` FOR DETAILS.

## LOAD TESTING SCRIPT

THE `loadtest.js` SCRIPT IS PROVIDED TO PUBLISH REALTIME EVENT DATA TO THE
SERVER'S SINGLE `realtime` REDIS PUB/SUB CHANNEL, USING THE SAME
`{topic, scope, routes, payload}` ENVELOPES AS THE SUPERSET PRODUCER (A BROADCAST
`entity.changed` NUDGE PLUS ONE TARGETED `task.status` MESSAGE PER SIMULATED
CLIENT), SO IT EXERCISES THE SERVER'S REAL BROWSER-DELIVERY PATH.

### RUNNING

```bash
node loadtest.js
```

THE SCRIPT WILL POPULATE DATA CONTINUALLY UNTIL THE SCRIPT IS EXITED USING CTRL-C.

**NOTE:** `loadtest.js` AND TEST CLIENT APPLICATION ARE CONFIGURED TO USE THE SERVER'S LOCAL `config.json` VALUES, SO CARE SHOULD BE TAKEN TO NOT OVERWRITE ANY SENSITIVE DATA.
