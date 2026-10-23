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

# <u>UTILITY SCRIPT TO RUN TESTS FASTER</u>

BY DEFAULT TESTS WILL BE RUN USING THE POSTGRES CONTAINER DEFINED AT THE `docker compose` FILE (`docker-compose.yml`) ON THE ROOT OF THE REPO,
SO PRIOR TO USING THIS SCRIPT MAKE SURE TO LAUNCH THE DEV CONTAINERS.

YOU CAN USE A DIFFERENT DB BACKEND BY DEFINING `SUPERSET__SQLALCHEMY_DATABASE_URI` ENV VAR.

THIS SCRIPT WILL NOT INSTALL ANY DEPENDENCIES FOR YOU, SO YOU MUST BE ON AN ALREADY SET VIRTUALENV

## <u>USAGE</u>

TO SHOW ALL SUPPORTED SWITCHES:

```bash
scripts/tests/run.sh --help
```

FROM THE SUPERSET REPO ROOT DIRECTORY:

- EXAMPLE RUN ALL TESTS:

```bash
scripts/tests/run.sh
```

- EXAMPLE RUN A SINGLE TEST MODULE:

```bash
scripts/tests/run.sh --module tests/charts/api_tests.py
```

- EXAMPLE RUN A SINGLE TEST:

```bash
scripts/tests/run.sh --module tests/charts/api_tests.py::TestChartApi::test_get_charts
```

- EXAMPLE RUN A SINGLE TEST, WITHOUT ANY INIT PROCEDURES. INIT PROCEDURES INCLUDE:
  RESETTING TEST DATABASE, DB UPGRADE, SUPERSET INIT, LOADING EXAMPLE DATA. IF YOUR TESTS
  ARE IDEMPOTENT, AFTER THE FIRST RUN, SUBSEQUENT RUNS ARE REALLY FAST

```bash
scripts/tests/run.sh --module tests/charts/api_tests.py::TestChartApi::test_get_charts --no-init
```

- EXAMPLE FOR NOT RECREATING THE TEST DB (WILL STILL RUN ALL THE TESTS INIT PROCEDURES)

```bash
scripts/tests/run.sh --module tests/charts/api_tests.py::TestChartApi::test_get_charts --no-reset-db
```

- EXAMPLE FOR NOT RUNNING TESTS JUST INITIALIZE THE TEST DB (DROP/CREATE, UPGRADE AND LOAD EXAMPLES)

```bash
scripts/tests/run.sh --no-tests
```

- EXAMPLE FOR JUST RESETTING THE TESTS DB

```bash
scripts/tests/run.sh --reset-db --no-tests
```
