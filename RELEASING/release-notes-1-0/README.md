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
# <u>RELEASE NOTES FOR SUPERSET 1.0.0</u>

SUPERSET 1.0 IS A ***HUGE MILESTONE*** FOR APACHE SUPERSET. THIS RELEASE HOLDS A HIGHER QUALITY STANDARD THAN ANY PREVIOUS VERSION AND RAISES THE BAR FOR RELEASES TO COME. SUPERSET 1.0 IMPROVES ON USABILITY AND DELIVERS A NEW SET OF LONG AWAITED FEATURES FOCUSED ON FIVE MAJOR THEMES:
- [**USER EXPERIENCE**](#user-experience)
- [**DEVELOPER EXPERIENCE**](#developer-experience)
- [**PERFORMANCE**](#performance)
- [**NEW FEATURES**](#new-features)
- [**FEATURE FLAGS**](#feature-flags)
- [**STABILITY AND BUGFIXES**](#stability-and-bugfixes)

# <u>USER EXPERIENCE</u>
WE HAVE TAKEN THE SUPERSET USER EXPERIENCE TO THE NEXT LEVEL WITH A MUCH SIMPLER, MORE INTUITIVE UI.

LISTS OF CHARTS AND DASHBOARDS CAN BE SHOWN IN A NEW FORMAT USING A **THUMBNAIL GRID**. THIS MAKES IT EASIER TO DISCOVER AND FIND CHARTS AND DASHBOARDS, ESPECIALLY WHEN THERE ARE A LOT OF THEM IN YOUR SUPERSET INSTANCE.

<kbd><img alt="card view" src="media/dashboard_card_view.jpg" width="600"/></kbd>

VISUALIZATION CONTROLS HAVE BEEN UPDATED TO CREATE A MORE CONSISTENT AND MODERNIZED INTERFACE. REFACTORING INCLUDES UPDATES TO THE CONTENT/LABELING/ORDERING OF THESE CONTROLS AS WELL AS UPDATING THEIR STYLING AND SIMPLIFYING THEIR INTERACTIONS AND LAYOUT. THIS WILL LINE US UP FOR FEATURES LIKE DRAG-AND-DROP CONTROLS, AND DYNAMICALLY POPULATED CONTROL INPUTS IN FUTURE RELEASES.

<kbd><img alt="explore ui" src="media/explore_ui.png" width="600"/></kbd>

USERS ALSO NOW HAVE THE ABILITY TO CREATE AND NAME A NEW DATASET OR UPDATE AN EXISTING DATASET WHEN MOVING FROM **SQL LAB** TO **EXPLORE**. WHEN GOING BACK TO SQL LAB, THE UNDERLYING QUERY FOR THE DATASET WILL BE SHOWN, ALLOWING USERS TO EASILY MAKE CHANGES AND UPDATE THEIR DATASET WHEN MOVING BETWEEN SQL LAB AND EXPLORE.

THE [SUPERSET 1.0 DOCUMENTATION](https://superset.apache.org/docs/intro) HAS BEEN UPDATED TO REFLECT THE CURRENT DESIGN AND FUNCTIONALITY.

SEE RELATED PR HIGHLIGHTS [HERE](#user-experience-1).

# <u>DEVELOPER EXPERIENCE</u>
SUPERSET 1.0 MAKES IT EASIER FOR DEVELOPERS TO BUILD, DEPLOY, AND MAINTAIN SUPERSET FUNCTIONALITY. THIS RELEASE IS A MAJOR MILESTONE IN AN ONGOING EFFORT TO **MODERNIZE**, **CONSOLIDATE**, AND **SIMPLIFY** THE INTERFACE ELEMENTS OF SUPERSET. HIGHLY-USED COMPONENTS HAVE BEEN VISUALLY UPDATED, REFACTORED TO MODERN COMPONENT LIBRARIES, AND INTEGRATED WITH REACT STORYBOOK FOR IMMEDIATE VISIBILITY WITH CONSOLIDATED TEST/STYLES. THIS IMPROVES THE DEVELOPER EXPERIENCE AND CREATES A MORE CONSISTENT AND MODERN AESTHETIC FOR THE USER.

THE **REST API** CONTINUES TO SEE IMPROVEMENT AS WELL, WITH NEW ENDPOINTS AND IMPROVEMENTS TO EXISTING ENDPOINTS. MORE DETAILS [HERE](https://superset.apache.org/docs/rest-api).

<kbd><img alt="rest api" src="media/rest_api.png" width="600"/></kbd>

THE SWAGGER INTERFACE CAN BE USED TO EXPLORE AND TRY OUT THESE CHANGES.

<kbd><img alt="rest api swagger" src="media/rest_api_swagger.png" width="600"/></kbd>

SEE RELATED PR HIGHLIGHTS [HERE](#developer-experience-1).

# <u>PERFORMANCE</u>
THIS THE MOST PERFORMANT SUPERSET RELEASE TO DATE, WITH ENHANCED SCALABILITY AND EFFICIENCY. IN ADDITION TO MANY SMALL TWEAKS, **CHARTS** AND **SQL LAB** BOTH NOW SUPPORT **ASYNCHRONOUS DATA LOADING**. USERS WILL **FEEL** THIS IMPROVEMENT WHEN LOADING QUERY RESULTS, ESPECIALLY WHEN THERE ARE MANY CHARTS IN A DASHBOARD OR WHEN QUERIES ARE LONG RUNNING.

SEE RELATED PR HIGHLIGHTS [HERE](#performance-1).

# <u>NEW FEATURES</u>
SUPERSET 1.0 INCLUDES A SLEW OF NEW FEATURES AND OTHER ENHANCEMENTS. **NEW VISUALIZATION PLUGIN ARCHITECTURE** WILL MAKE IT EASIER TO BUILD, TEST, STYLE AND CONFIGURE CUSTOM VISUALIZATIONS FOR SUPERSET. **DYNAMIC VIZ PLUGIN** IMPORTS WILL ALLOW SUPERSET TO LOAD DATA VIZ PLUGINS, ALLOWING DEVELOPERS TO MORE EASILY USE OR SHARE THEIR CUSTOM PLUGINS AND **LOAD CUSTOM PLUGINS ON-DEMAND** FROM ANYWHERE ON THE WEB. SUPERSET HAS ALSO ADOPTED [**APACHE ECHARTS**](https://echarts.apache.org/en/index.html) AS THE CORE LIBRARY FOR NEW VISUALIZATIONS.

<kbd><img alt="timeseries prophet" src="media/echarts_timeseries_prophet.png" width="600"/></kbd>

ALONG WITH THE **ECHARTS INTEGRATION**, WE ARE ALSO INTRODUCING A BETTER SET OF ANNOTATION FEATURES. **FORMULA ANNOTATION**, WHICH ALLOWS USERS TO PLOT ANY MATHEMATICAL FUNCTION ON THE CHART; **INTERVAL AND EVENT ANNOTATIONS**, WHICH ALLOW USERS TO ADD CONTEXT TO THE TREND IN TIME-SERIES; AND **LINE ANNOTATION**, WHICH USE A PREDEFINED CHART AS THE SOURCE OF ANNOTATION.

<kbd><img alt="annotations" src="media/annotations.png" width="600"/></kbd>

A REDESIGNED HOME SCREEN PROVIDES A **PERSONALIZED LANDING PAGE** THAT THE USER SEES WHEN THEY LOG INTO SUPERSET, IMPROVING DISCOVERABILITY. IT SHOWS ITEMS RELEVANT TO THE USER (CHARTS, DASHBOARDS, SAVED QUERIES, ETC) AND SERVES AS A HUB TO DISCOVER CONTENT AND ACCESS RECENT ITEMS QUICKLY.

<kbd><img alt="home screen" src="media/home_screen.png" width="600"/></kbd>

CHARTS ON DASHBOARDS HAVE BEEN UPDATED TO CONCISELY SHOW WHICH **FILTERS** ARE IN SCOPE, HAVE BEEN APPLIED, OR ARE IN ERROR. CONTEXT AROUND FILTER CHANGES HAS BEEN INCREASED BY HIGHLIGHTING SCOPED CHARTS WHEN A FILTER IS SELECTED AND INCREASING VISIBILITY OF CHARTS WITH INCOMPATIBLE FILTERS APPLIED.

<kbd><img alt="filter status" src="media/filter_status.png" width="600"/></kbd>

**ALERTS AND REPORTING** HAVE RECEIVED A ROBUST BACKEND AND UI OVERHAUL.

<kbd><img alt="alerts reports" src="media/alerts_reports_2.png" width="600"/></kbd>

<kbd><img alt="alerts reports edit" src="media/alerts_reports_3.png" width="600"/></kbd>

SEE RELATED PR HIGHLIGHTS [HERE](#new-features-1).

# <u>FEATURE FLAGS</u>

SOME OF THE NEW FEATURES IN THIS RELEASE ARE DISABLED BY DEFAULT. EACH HAS A FEATURE FLAG IN `config.py` AND SOME REQUIRE CONFIGURATION OF ADDITIONAL BACKEND DEPENDENCIES (E.G. CELERY, SMTP SERVER, ETC). THE FOLLOWING TABLE WILL HELP YOU GET STARTED ON THE LIST OF FEATURES AND THEIR ASSOCIATED FLAGS & DEPENDENCIES. FEEL FREE TO CONTRIBUTE AND EXPAND THIS LIST.

| FEATURE | FEATURE FLAG | DEPENDENCIES | DOCUMENTATION
| --- | --- | --- | --- |
| GLOBAL ASYNC QUERIES | `GLOBAL_ASYNC_QUERIES: True` | REDIS 5.0+, CELERY WORKERS CONFIGURED AND RUNNING | [EXTRA DOCUMENTATION](https://superset.apache.org/docs/contributing/misc#async-chart-queries)
| DASHBOARD NATIVE FILTERS | `DASHBOARD_NATIVE_FILTERS: True` | |
| ALERTS & REPORTING | `ALERT_REPORTS: True` | [CELERY WORKERS CONFIGURED & CELERY BEAT PROCESS](https://superset.apache.org/docs/installation/async-queries-celery) |
| HOMESCREEN THUMBNAILS | `THUMBNAILS: TRUE, THUMBNAIL_CACHE_CONFIG: CacheConfig = { "CACHE_TYPE": "null", "CACHE_NO_NULL_WARNING": True}`| SELENIUM, PILLOW 7, CELERY |
| DYNAMIC VIZ PLUGIN IMPORT | `DYNAMIC_PLUGINS: True` | |

# <u>STABILITY AND BUGFIXES</u>
THIS RELEASE INCLUDES **HUNDREDS** OF BUGFIXES AND STABILITY ENHANCEMENTS. FUTURE MAJOR RELEASES WILL HAVE A CONTINUED EMPHASIS ON PROVIDING A STABLE AND BUG-FREE EXPERIENCE FOR THE USER.

# <u>PR HIGHLIGHTS</u>
BELOW IS A HIGHLIGHT OF THE PRS INCLUDED IN THIS UPDATE. THE FULL LIST IS MUCH LONGER, AND CAN BE FOUND [HERE](https://github.com/apache/superset/blob/master/CHANGELOG.md).

## <u>USER EXPERIENCE</u>
- REVERT "REFACTOR: REMOVE USAGES OF REACTABLE FROM TIMETABLE (#11046)" (#[11150](https://github.com/apache/incubator-superset/pull/11150))
- STYLE: RESTORING MENU HIGHLIGHTS (#[12024](https://github.com/apache/incubator-superset/pull/12024))
- STYLE: ESLINT CURLY RULE (#[11913](https://github.com/apache/incubator-superset/pull/11913))
- STYLE: REMOVE REACT BOOTSTRAP FADE COMPONENT (#[11843](https://github.com/apache/incubator-superset/pull/11843))
- STYLE: DARK FILTER POPOVER BACKGROUND (#[11611](https://github.com/apache/incubator-superset/pull/11611))

<!--### Card Layout-->

### <u>EXPLORE CONTROLS</u>
- FEAT: GLOBAL NAV MENUS OPEN ON HOVER (#[12025](https://github.com/apache/incubator-superset/pull/12025))
- FEAT: ADD HOOK FOR DATASET HEALTH CHECK (#[11970](https://github.com/apache/incubator-superset/pull/11970))
- FEAT: ADD MODAL TO IMPORT DASHBOARDS (#[11924](https://github.com/apache/incubator-superset/pull/11924))
- FEAT: ADD MODAL TO IMPORT CHARTS (#[11956](https://github.com/apache/incubator-superset/pull/11956))
- FEAT: ADD MODAL TO IMPORT DATASETS (#[11910](https://github.com/apache/incubator-superset/pull/11910))
- FEAT: ADD MODAL TO IMPORT DATABASES (#[11884](https://github.com/apache/incubator-superset/pull/11884))
- FEAT: RESULTS TABLE ON EXPLORE VIEW (#[11854](https://github.com/apache/incubator-superset/pull/11854))
- FEAT: REPORT/ALERT LIST CRUD VIEW (#[11802](https://github.com/apache/incubator-superset/pull/11802))
- FEAT: FILTER BY ME ON CRUD LIST VIEW (#[11683](https://github.com/apache/incubator-superset/pull/11683))
- FEAT(EXPLORE-DATASOURCE): ADD NEW DATASOURCE TAB TO EXPLORE VIEW (#[12008](https://github.com/apache/incubator-superset/pull/12008))
- FEAT(EXPLORE): TIME PICKER ENHANCEMENT (#[11418](https://github.com/apache/incubator-superset/pull/11418))
- FEAT(EXPLORE): METRICS AND FILTERS CONTROLS REDESIGN (#[12095](https://github.com/apache/incubator-superset/pull/12095))
- FEAT(EXPLORE): CHANGE SAVE BUTTON TEXT WHEN USERS CANNOT OVERRIDE (#[11281](https://github.com/apache/incubator-superset/pull/11281))
- FEAT(EXPLORE): UPDATE THE ORDER OF DATASOURCE DROPDOWN MENU (#[11424](https://github.com/apache/incubator-superset/pull/11424))

### <u>SQL LAB</u>
- FEAT: INITIAL CUSTOM ERROR MESSAGES FOR SQL LAB (#[12080](https://github.com/apache/incubator-superset/pull/12080))
- FEAT: SHOW MISSING PARAMETERS IN QUERY (#[12049](https://github.com/apache/incubator-superset/pull/12049))
- FEAT: SQLLAB TO EXPLORE UX IMPROVEMENTS (#[11755](https://github.com/apache/incubator-superset/pull/11755))
- FEAT: ADD POSTGRES SQL VALIDATOR (#[11538](https://github.com/apache/incubator-superset/pull/11538))
- FEAT: RUN BQ QUERIES AS SINGLE STATEMENT (#[11904](https://github.com/apache/incubator-superset/pull/11904))
- FEAT: ADDING SAVEDATASETMODAL COMPONENT (#[11861](https://github.com/apache/incubator-superset/pull/11861))
- FEAT: LIST VIEW FILTERS FOR QUERY HISTORY  (#[11702](https://github.com/apache/incubator-superset/pull/11702))
- FEAT: SQLLAB TO EXPLORE UX IMPROVEMENTS API CHANGES (#[11836](https://github.com/apache/incubator-superset/pull/11836))
- FEAT: SQL PREVIEW MODAL FOR QUERY HISTORY (#[11634](https://github.com/apache/incubator-superset/pull/11634))
- FEAT: QUERY HISTORY CRUD LIST VIEW (#[11574](https://github.com/apache/incubator-superset/pull/11574))
- FEAT: ADD UUID COLUMN TO SAVED_QUERY FOR EXPORT/IMPORT (#[11397](https://github.com/apache/incubator-superset/pull/11397))
- FEAT: SAVED QUERIES WITH EXECUTION INFO (#[11391](https://github.com/apache/incubator-superset/pull/11391))
- FEAT: SAVED QUERY PREVIEW MODAL (#[11135](https://github.com/apache/incubator-superset/pull/11135))
- FEAT(SAVED QUERIES): SECURITY PERM SIMPLIFICATION (#[11764](https://github.com/apache/incubator-superset/pull/11764))
- FEAT(WELCOME): ADD SQL SNIPPETS TO SAVED QUERIES CARD (#[11678](https://github.com/apache/incubator-superset/pull/11678))

### <u>DOCUMENTATION</u>
- DOCS: RESTORED PAGE ON ROLES IN SECURITY, EXECUTED OTHER TOUCHUPS, AND… (#[11978](https://github.com/apache/incubator-superset/pull/11978))
- DOCS: 0.38.0 CHANGELOG AND UPDATING (#[11809](https://github.com/apache/incubator-superset/pull/11809))
- DOCS: ADD XITE TO USERS LIST (#[11775](https://github.com/apache/incubator-superset/pull/11775))
- DOCS: FIX DOCKER CONFIG PATHS (#[11703](https://github.com/apache/incubator-superset/pull/11703))
- DOCS: ADD SUPPORT FOR GOOGLE ANALYTICS ON SUPERSET.APACHE.ORG (#[11613](https://github.com/apache/incubator-superset/pull/11613))
- DOCS: ADD AVESTA TO USERS LIST (#[11551](https://github.com/apache/incubator-superset/pull/11551))
- DOCS: ADD XENDIT TO USERS LIST (#[11361](https://github.com/apache/incubator-superset/pull/11361))
- DOCS: FIX DB DRIVERS PG AND ES (#[11504](https://github.com/apache/incubator-superset/pull/11504))
- DOCS: IMPROVE DOCS AND UPDATE APACHE RELEASE SCRIPTS (#[11457](https://github.com/apache/incubator-superset/pull/11457))
- DOCS: UPDATE DREMIO DOC WITH ARROW FLIGHT CONNECTION DETAILS (#[11422](https://github.com/apache/incubator-superset/pull/11422))
- DOCS: ADD SEMANTIC PREFIX INFO FOR PR TITLES (#[11398](https://github.com/apache/incubator-superset/pull/11398))
- DOCS: FIX TYPO (#[11129](https://github.com/apache/incubator-superset/pull/11129))
- DOCS: ADD VLMEDIA TO USERS LIST (#[11386](https://github.com/apache/incubator-superset/pull/11386))
- DOCS: FIX TYPO IN INSTALLING FROM SCRATCH (#[11026](https://github.com/apache/incubator-superset/pull/11026))
- DOCS: ADD A ROADMAP PAGE POINTING TO SIP-53 (#[11169](https://github.com/apache/incubator-superset/pull/11169))
- DOCS: ADD NOTE ABOUT MIGRATION IN #11098 TO CHANGELOG (#[11256](https://github.com/apache/incubator-superset/pull/11256))
- DOCS: ADD UTAIR TO LIST OF COMPANIES USING APACHE SUPERSET (#[11261](https://github.com/apache/incubator-superset/pull/11261))
- DOCS: DON'T LINK TO DATABASE ENGINE PAGES (#[11242](https://github.com/apache/incubator-superset/pull/11242))
- DOCS: ADDED DREMIO TO SUPERSET HOME PAGE (#[11231](https://github.com/apache/incubator-superset/pull/11231))
- DOCS: TYPO (#[11152](https://github.com/apache/incubator-superset/pull/11152))
- DOCS: ADD API PAGE TO DOCS USING SWAGGER UI (#[11154](https://github.com/apache/incubator-superset/pull/11154))
- DOCS(RELEASE): SMALL FIXES AND DEPRECATE APACHE DOCS (#[11827](https://github.com/apache/incubator-superset/pull/11827))
- DOCS(RELEASING): UPDATE RELEASE AUTOMATION AND DOCS FOR APACHE GRADUATION (#[12117](https://github.com/apache/incubator-superset/pull/12117))
- FEAT: ADD NEW DEFAULT DASHBOARD (#[12044](https://github.com/apache/incubator-superset/pull/12044))

## <u>DEVELOPER EXPERIENCE</u>
- FEAT: ADD ENDPOINT TO EXPORT SAVED QUERIES USING NEW FORMAT (#[11447](https://github.com/apache/incubator-superset/pull/11447))

### <u>COMPONENT LIBRARY</u>
- BUILD(DEPS-DEV): UPDATE CYPRESS TO 5.5.0, IMPROVEMENTS FOR RUNNING LOCALLY (#[11603](https://github.com/apache/incubator-superset/pull/11603))
- BUILD(DEPS-DEV): BUMP LESS FROM 3.9.0 TO 3.12.2 IN /SUPERSET-FRONTEND (#[11597](https://github.com/apache/incubator-superset/pull/11597))
- BUILD(DEPS-DEV): BUMP @STORYBOOK/ADDON-ESSENTIALS IN /SUPERSET-FRONTEND (#[11573](https://github.com/apache/incubator-superset/pull/11573))
- BUILD(DEPS-DEV): BUMP NODE-FETCH IN /SUPERSET-FRONTEND (#[11485](https://github.com/apache/incubator-superset/pull/11485))
- BUILD(DEPS): BUMP @EMOTION/CORE IN /SUPERSET-FRONTEND (#[11518](https://github.com/apache/incubator-superset/pull/11518))
- BUILD(DEPS): BUMP CORE-JS FROM 3.2.1 TO 3.6.5 IN /SUPERSET-FRONTEND (#[11522](https://github.com/apache/incubator-superset/pull/11522))
- BUILD(DEPS): BUMP OBJECT-PATH FROM 0.11.4 TO 0.11.5 IN /DOCS (#[11484](https://github.com/apache/incubator-superset/pull/11484))
- BUILD(DEPS): BUMP LODASH IN /SUPERSET-FRONTEND/CYPRESS-BASE (#[11483](https://github.com/apache/incubator-superset/pull/11483))
- CHORE: BUMP NVD3 PLUGIN VERSION (#[11947](https://github.com/apache/incubator-superset/pull/11947))
- CHORE: BUMP PYPI CRYPTOGRAPHY FROM 2.4.2 TO 3.2.1 (#[11511](https://github.com/apache/incubator-superset/pull/11511))

## <u>PERFORMANCE</u>
- PERF: CACHE DASHBOARD BOOTSTRAP DATA (#[11234](https://github.com/apache/incubator-superset/pull/11234))
- PERF:  SPEED UP UUID COLUMN GENERATION (#[11209](https://github.com/apache/incubator-superset/pull/11209))
- PERF(API): IMPROVE API INFO PERFORMANCE (#[11346](https://github.com/apache/incubator-superset/pull/11346))

### <u>GLOBAL ASYNC QUERY SUPPORT</u>
- FEAT(SIP-39): ASYNC QUERY SUPPORT FOR CHARTS (#[11499](https://github.com/apache/incubator-superset/pull/11499))
###NEW FEATURES

### <u>IMPROVED DATA VISUALIZATIONS</u>
- FEAT: ADD EVENT AND INTERVAL ANNOTATION SUPPORT TO CHART DATA EP (#[11665](https://github.com/apache/incubator-superset/pull/11665))
- FEAT: ADD ECHARTS BOXPLOT CHART (#[11199](https://github.com/apache/incubator-superset/pull/11199))
- FEAT(SANKEY-VIZ): ALLOW SORT BY METRIC AND BUMP SUPERSET-UI PACKAGES (#[11626](https://github.com/apache/incubator-superset/pull/11626))

### <u>DISCOVERY AND NAVIGATION</u>
- CHORE: ADD HOME LINK TO NAVBAR (#[11851](https://github.com/apache/incubator-superset/pull/11851))
- CHORE(HOME-SCREEN): FIXES FOR LOADING STATES, FLICKER ISSUE, AND REDUCTION OF API CALLS (#[11557](https://github.com/apache/incubator-superset/pull/11557))
- FEAT: ALERT/REPORT EXECUTION LOG LIST VIEW (#[11937](https://github.com/apache/incubator-superset/pull/11937))
- FEAT: HOME SCREEN MVP  (#[11206](https://github.com/apache/incubator-superset/pull/11206))
- STYLE: VARIOUS LITTLE TWEAKS TO HOME SCREEN STYLIN' (#[11650](https://github.com/apache/incubator-superset/pull/11650))

### <u>ALERTS AND REPORTING</u>
- FEAT: UPDATE ALERT/REPORT ICONS AND COLUMN ORDER (#[12081](https://github.com/apache/incubator-superset/pull/12081))
- FEAT: ADD CRON PICKER TO ALERTREPORTMODAL (#[12032](https://github.com/apache/incubator-superset/pull/12032))
- FEAT: ALERTS/REPORTS ADD/EDIT MODAL (#[11770](https://github.com/apache/incubator-superset/pull/11770))
- FEAT: FILTERS FOR ALERTS AND REPORTS LIST VIEW  (#[11900](https://github.com/apache/incubator-superset/pull/11900))
- FEAT(ALERT/REPORT): ADD 'NOT NULL' CONDITION OPTION TO MODAL (#[12077](https://github.com/apache/incubator-superset/pull/12077))
- FEAT(ALERTS/REPORTS): REMOVE SIP_34_UI FEATURE FLAG (#[12085](https://github.com/apache/incubator-superset/pull/12085))
- FEAT(ALERTS/REPORTS): ADD REFRESH ACTION (#[12071](https://github.com/apache/incubator-superset/pull/12071))
- FEAT(ALERTS/REPORTS): DELETE AND BULK DELETE ACTIONS (#[12053](https://github.com/apache/incubator-superset/pull/12053))
- FEAT(RELEASING): SUPPORT CHANGELOG CSV EXPORT (#[11893](https://github.com/apache/incubator-superset/pull/11893))

## <u>COMPLETE CHANGELOG</u>
BACKWARDS INCOMPATIBLE CHANGES AND CAN BE FOUND [HERE](../../UPDATING.md).

TO SEE THE COMPLETE CHANGELOG, SEE [APACHE/SUPERSET/CHANGELOG.MD](https://github.com/apache/superset/blob/master/CHANGELOG.md)
