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

# <u>RELEASE NOTES FOR SUPERSET 1.1.0</u>

SUPERSET 1.1.0 CONTINUES TO BUILD ON THE [1.0](https://github.com/apache/superset/blob/master/RELEASING/release-notes-1-0/README.md) RELEASE WITH BIG IMPROVEMENTS TO USER EXPERIENCE, SECURITY, DASHBOARD LEVEL ACCESS, AND DATABASE CONNECTIVITY.

- [**USER EXPERIENCE**](#user-experience)
- [**DASHBOARD LEVEL SECURITY**](#dashboard-level-security)
- [**DATABASE CONNECTIVITY**](#database-connectivity)
- [**PR HIGHLIGHTS**](#pr-highlights)
- [**BREAKING CHANGES AND FULL CHANGELOG**](#breaking-changes-and-full-changelog)

# <u>USER EXPERIENCE</u>

IN GENERAL, THE QUALITY, USABILITY, AND AESTHETICS OF THE SUPERSET USER EXPERIENCE CONTINUES TO DEVELOP IN THE DIRECTION OF [SIP-34](https://github.com/apache/superset/issues/8976) AND MORE TESTS HAVE BEEN ADDED TO UI COMPONENTS TO ENSURE USABILITY IS MAINTAINED.

THE MIGRATION TO APACHE ECHARTS CONTINUES WITH THE ADDITION OF A [NEW FORCE-DIRECTED GRAPH](https://github.com/apache/superset/pull/13111).

![FORCE DIRECTED GRAPH](media/force_directed_graph.jpg)

THE ECHARTS LIBRARY INCLUDED WITH SUPERSET WAS ALSO BUMPED TO 5.0.2, WHICH INCLUDES SOME [FIXES TO PIE CHARTS.](https://github.com/apache/superset/pull/13052) THE OVERALL IMPROVEMENT OF CHART OPTIONS AND QUALITY CAN BE EXPECTED TO CONTINUE IN FUTURE RELEASES. NEW 'SORT BY' CONTROLS HAVE ALSO BEEN [ADDED](https://github.com/apache/superset/pull/13049) TO [MANY CHARTS](https://github.com/apache/superset/pull/13057).

THE DASHBOARD NATIVE FILTER FEATURE, [WHILE STILL BEHIND A FEATURE FLAG IN THIS RELEASE,](https://github.com/apache/superset/blob/master/RELEASING/release-notes-1-0/README.md#feature-flags) HAS BEEN IMPROVED AND IS READY TO TEST OUT.

![NATIVE FILTER](media/native_filters.jpg)

SINCE THE 1.0 RELEASE, WE HAVE SEEN A SURGE OF SUPPORT FROM THE COMMUNITY AROUND UPDATING SUPERSET'S [DOCUMENTATION](https://superset.apache.org/docs/intro) AND ADDING MORE TESTS TO THE UI. THANKS TO ALL WHO CONTRIBUTED IN THIS AREA. THIS IS WHAT OPEN-SOURCE SOFTWARE IS ALL ABOUT!

# <u>DASHBOARD LEVEL SECURITY</u>

DASHBOARD PROVIDERS IN AN ORGANIZATION WITH MANY SUBGROUPS NEED THE ABILITY MANAGE USER ACCESS TO DASHBOARDS AND DIFFERENT LEVELS OF PERMISSIONS (READ, WRITE, GRANTER, OWNER). IMPROVING DASHBOARD LEVEL ACCESS WAS PROPOSED (AND APPROVED) IN [SIP-51](https://github.com/apache/superset/issues/10408).

![SIP 51](media/sip_51.jpg)

IN 1.1, SOME KEY STEPS WERE TAKEN TOWARDS THE VISION LAID OUT IN SIP-51. **NOTE THAT THIS FUNCTIONALITY IS STILL HIDDEN BEHIND FEATURE FLAGS AND IS AN ACTIVE AREA OF DEVELOPMENT.** YOU CAN VIEW A LIST OF RELEVANT PR'S IN [PR HIGHLIGHTS](#pr-highlights)


# <u>DATABASE CONNECTIVITY</u>

SUPERSET IS ONLY AS GOOD AS THE DATABASES IT CAN QUERY. THIS RELEASE SAW THE EXPANDED SUPPORT OF EXISTING DATABASES AND FOUNDATIONAL SUPPORT FOR NEW DATABASES.

- [OPENDISTRO](https://github.com/apache/superset/pull/12602)
- [TRINO](https://github.com/apache/superset/pull/13105)
- [CRATEDB](https://github.com/apache/superset/pull/13152/files)
- [APACHE PINOT](https://github.com/apache/superset/pull/13163)
- [PRESTO](https://github.com/apache/superset/pull/13214)
- [BIGQUERY](https://github.com/apache/superset/pull/12581)
- [POSTGRES](https://github.com/apache/superset/pull/11720)
- [GOOGLE SHEETS](https://github.com/apache/superset/pull/13185)
- [ATHENA](https://github.com/apache/superset/pull/13201)

# <u>PR HIGHLIGHTS</u>

**PROGRESS ON DASHBOARD NATIVE FILTERS**

- FEAT(CHART-DATA): ADD ROWCOUNT, TIMEGRAIN AND COLUMN RESULT TYPES (#[13271](https://github.com/apache/superset/pull/13271))
- FEAT(NATIVE-FILTERS): ENABLE FILTER INDICATOR AND MAKE DATASOURCE OPTIONAL (#[13148](https://github.com/apache/superset/pull/13148))
- FEAT(NATIVE-FILTERS): HIDE FILTERBAR AND TOGGLE ICON WHEN IN EDITMODE (#[13108](https://github.com/apache/superset/pull/13108))
- FEAT(NATIVE-FILTERS): ADD STORYBOOK ENTRY FOR SELECT FILTER (#[13005](https://github.com/apache/superset/pull/13005))
- FEAT(NATIVE-FILTERS): TIME NATIVE FILTER (#[12992](https://github.com/apache/superset/pull/12992))
- FEAT(NATIVE-FILTERS): ADD DEFAULTVALUE FOR NATIVE FILTERS MODAL (#[12199](https://github.com/apache/superset/pull/12199))
- FEAT(NATIVE-FILTERS): APPLY SCOPING OF NATIVE FILTERS TO DASHBOARD (#[12716](https://github.com/apache/superset/pull/12716))

**PROGRESS ON DASHBOARD LEVEL ACCESS**

- FEAT(DASHBOARD-RBAC): DASHBOARD LISTS (#[12680](https://github.com/apache/superset/pull/12680))
- FEAT(DASHBOARD-RBAC): ADD SUPPORT FOR RELATED ROLES (#[13035](https://github.com/apache/superset/pull/13035))
- FEAT(DASHBOARD-RBAC): DASHBOARDS API SUPPORT FOR ROLES CREATE/UPDATE + ROLES VALIDATION (#[12865](https://github.com/apache/superset/pull/12865))
- FEAT(DASHBOARD-RBAC): `dashboard_view` ACCESS ENFORCEMENT (#[12875](https://github.com/apache/superset/pull/12875))

**IMPROVEMENTS TO EXPLORE**

- FEAT: ADD SORT BY METRIC FOR CHARTS WITH MULTIPLE METRICS (#[13057](https://github.com/apache/superset/pull/13057))
- FEAT: ADD SORT_BY_METRIC FOR CHARTS WITH SINGLE METRIC (#[13058](https://github.com/apache/superset/pull/13058))
- FEAT: ADD SORT BY FOR DIST BAR CHART (#[13049](https://github.com/apache/superset/pull/13049))
- FEAT: RESET METRICS ON DATASET CHANGE (#[12782](https://github.com/apache/superset/pull/12782))
- FEAT: CLEAR SEARCH ON DATASET CHANGE (#[12909](https://github.com/apache/superset/pull/12909))
- FEAT: DEFAULT TIMEPICKER TO LAST WEEK WHEN DATASET IS CHANGED (#[12609](https://github.com/apache/superset/pull/12609))

**IMPROVEMENTS TO DEVELOPER EXPERIENCE**

- CHORE: ADD NON-DEV DOCKER-COMPOSE WORKFLOW (#[13143](https://github.com/apache/superset/pull/13143))
- FEAT(STYLE-THEME): ADD SUPPORT FOR CUSTOM SUPERSET THEMES (#[12858](https://github.com/apache/superset/pull/12858))
- FEAT: MOVE SQLALCHEMY URL REFERENCE TO CONFIG (#[13182](https://github.com/apache/superset/pull/13182))
- FEAT(HELM): EVALUATE CONFIGOVERRIDES AS TEMPLATES (#[13130](https://github.com/apache/superset/pull/13130))
- FEAT(HELM): HELM TEMPLATE FOR CELERY BEAT (FOR REPORTING AND ALERTING) (#[13116](https://github.com/apache/superset/pull/13116))
- FEAT: CUSTOM SUPERSET_CONFIG.PY + SECRET ENVS (#[13096](https://github.com/apache/superset/pull/13096))
- FEAT: FORCE POD RESTART ON CONFIG CHANGES (#[13056](https://github.com/apache/superset/pull/13056))
- FEAT: ADD SEPARATE ENDPOINT TO FETCH FUNCTION NAMES FOR AUTOCOMPLETE (#[12840](https://github.com/apache/superset/pull/12840))
- FEAT: REQUEST IDS ON API RELATED ENDPOINTS (#[12663](https://github.com/apache/superset/pull/12663))
- FEAT: ADDING OPTION TO `set_database_uri` CLI COMMAND (#[12740](https://github.com/apache/superset/pull/12740))
- FEAT: ADD DECORATOR TO GUARD PUBLIC APIS (#[12635](https://github.com/apache/superset/pull/12635))

## <u>BREAKING CHANGES AND FULL CHANGELOG</u>

- TO SEE THE COMPLETE CHANGELOG IN THIS RELEASE, HEAD TO [CHANGELOG.MD](https://github.com/apache/superset/blob/master/CHANGELOG.md).
- YOU CAN FIND A LIST OF BACKWARDS INCOMPATIBLE CHANGES [HERE](https://github.com/apache/superset/blob/3d103e66fcaee42a6b4a42b2638e13d5e2208c3b/UPDATING.md).
