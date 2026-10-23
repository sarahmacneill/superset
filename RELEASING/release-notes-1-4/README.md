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

# <u>RELEASE NOTES FOR SUPERSET 1.4</u>

SUPERSET 1.4 FOCUSES HEAVILY ON CONTINUING TO POLISH THE CORE SUPERSET EXPERIENCE. THIS RELEASE HAS A VERY LONG LIST OF FIXES FROM ACROSS THE COMMUNITY.

- [**USER EXPERIENCE**](#user-facing-features)
- [**DATABASE EXPERIENCE**](#database-experience)
- [**BREAKING CHANGES AND FULL CHANGELOG**](#breaking-changes-and-full-changelog)

## <u>USER FACING FEATURES</u>

- CHARTS AND DASHBOARDS IN SUPERSET CAN NOW BE CERTIFIED! IN ADDITION, THE EDIT DATASET MODAL MORE ACCURATELY REFLECTS STATE OF CERTIFICATION (ESPECIALLY FOR CALCULATED COLUMNS). ([#17335](https://github.com/apache/superset/pull/17335), [#16454](https://github.com/apache/superset/pull/16454))

![TAB COLUMN](media/calc.png)

- PARQUET FILES CAN NOW BE UPLOADED INTO AN EXISTING CONNECTED DATABASE THAT HAS DATA UPLOAD ENABLED. EVENTUALLY, THE CONTRIBUTOR HOPES THAT THIS FOUNDATION CAN BE USED TO ACCOMMODATE `feather` AND `orc` FILES. ([#14449](https://github.com/apache/superset/pull/14449))

- TABS CAN NOW BE ADDED TO COLUMN ELEMENTS IN DASHBOARDS. ([#16593](https://github.com/apache/superset/pull/16593))

![TAB COLUMN](media/tab_column.jpg)

- THE EXPERIENCE OF USING ALERTS AND REPORTS HAVE IMPROVED IN A FEW MINOR WAYS. ([#16335](https://github.com/apache/superset/pull/16335),[#16281](https://github.com/apache/superset/pull/16281))

- DRAG AND DROP NOW HAS A CLICKABLE GHOST BUTTON FOR AN IMPROVED USER EXPERIENCE. ([#16119](https://github.com/apache/superset/pull/16119))

## <u>DATABASE EXPERIENCE</u>

- APACHE DRILL: SUPERSET CAN NOW CONNECT TO APACHE DRILL (THRU ODBC / JDBC) AND IMPERSONATE THE CURRENTLY LOGGED IN USER. ([#17353](https://github.com/apache/superset/pull/17353/files)).

- FIREBOLT: SUPERSET NOW SUPPORTS THE CLOUD DATA WAREHOUSE FIREBOLT! ([#16903](https://github.com/apache/superset/pull/16903)).

- DATABRICKS: SUPERSET NOW SUPPORTS THE NEW [SQL ENDPOINTS IN DATABRICKS](https://docs.databricks.com/sql/admin/sql-endpoints.html). ([#16862](https://github.com/apache/superset/pull/16862))

- APACHE DRUID: SUPERSET EXPLORE NOW CAN TAKE ADVANTAGE OF SUPPORT FOR JOIN'S IN DRUID (NOTE: THE `DRUID_JOINS` FEATURE FLAG NEEDS TO BE ENABLED). ([#16770](https://github.com/apache/superset/pull/16770))

- AWS AURORA: SUPERSET NOW HAS A SEPARATE DB_ENGINE_SPEC FOR AMAZON AURORA. ([#16535](https://github.com/apache/superset/pull/16535))

- CLICKHOUSE: SUPERSET NOW INCLUDES FUNCTION NAMES IN THE AUTO-COMPLETE FOR SQL LAB. ([#16234](https://github.com/apache/superset/pull/16234))

- GOOGLE SHEETS: BETTER SUPPORT FOR PRIVATE GOOGLE SHEETS WAS ADDED. ([#16228](https://github.com/apache/superset/pull/16628))

## <u>DEVELOPER EXPERIENCE</u>

- THE `Makefile` FOR SUPERSET HAS GONE THROUGH A NUMBER OF IMPROVEMENTS. ([#16327](https://github.com/apache/superset/pull/16327), [#16533](https://github.com/apache/superset/pull/16533))

- ADD PYTHON INSTRUMENTATION TO PAGES, SHOWING METHOD CALLS USED TO BUILD THE PAGE & HOW LONG EACH ONE TOOK. THIS REQUIRES A CONFIGURATION FLAG (SEE PR FOR MORE INFO). ([#16136](https://github.com/apache/superset/pull/16136))

![PYINSTRUMENT](media/pyinstrument.png)

## <u>BREAKING CHANGES AND FULL CHANGELOG</u>

**BREAKING CHANGES**

- [16660](https://github.com/apache/superset/pull/16660): THE `columns` JINJA PARAMETER HAS BEEN RENAMED `table_columns` TO MAKE THE COLUMNS QUERY OBJECT PARAMETER AVAILABLE IN THE JINJA CONTEXT.
- [16711](https://github.com/apache/superset/pull/16711): THE URL_PARAM JINJA FUNCTION WILL NOW BY DEFAULT ESCAPE THE RESULT. FOR INSTANCE, THE VALUE `O'Brien` WILL NOW BE CHANGED TO `O''Brien`. TO DISABLE THIS BEHAVIOR, CALL `url_param` WITH `escape_result` SET TO `False: url_param("my_key", "my default", escape_result=False)`.

**CHANGELOG**

TO SEE THE COMPLETE CHANGELOG IN THIS RELEASE, HEAD TO [CHANGELOG.MD](https://github.com/apache/superset/blob/master/CHANGELOG/1.4.1.md). AS MENTIONED EARLIER, THIS RELEASE HAS A MASSIVE AMOUNT OF BUG FIXES. THE FULL CHANGELOG LISTS ALL OF THEM!
