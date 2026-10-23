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

# RELEASE NOTES FOR SUPERSET 0.38

## WHAT'S NEW
- [NEW FEATURES](#new-features)
- [BUGFIXES](#bugfixes)
- [BREAKING CHANGES](#breaking-changes)
- [COMPLETE CHANGELOG](#complete-changelog)

### NEW FEATURES
**DATABASES, DATASETS, QUERIES**

[SIP-40] PROPOSAL FOR CUSTOM ERROR MESSAGES #9194 ([SIP](https://github.com/apache/superset/issues/9194))
- FEAT: IMPROVE PRESTO QUERY PERF  (#[11069](https://github.com/apache/superset/pull/11069))
- FEAT: MORE SPECIFIC PRESTO ERROR MESSAGES  (#[11099](https://github.com/apache/superset/pull/11099))
- FEAT: REFACTOR ERROR COMPONENTS AND ADD DATABASE ISSUE CODE  (#[10473](https://github.com/apache/superset/pull/10473))
- FEAT: WELCOME PRESTO TO THE SUITE OF TESTED DATABASES  (#[10498](https://github.com/apache/superset/pull/10498))


CERTIFICATION OF DATA ENTITIES ([ROADMAP](https://github.com/apache-superset/superset-roadmap/issues/73))
- FEAT: ADD CERTIFICATION TO METRICS  (#[10630](https://github.com/apache/superset/pull/10630))
- FEAT: ADD EXTRA COLUMN TO TABLES AND SQL_METRICS  (#[10592](https://github.com/apache/superset/pull/10592))
- FEAT: BUMP SUPERSET-UI FOR CERTIFIED TAG  (#[10650](https://github.com/apache/superset/pull/10650))


DATABASE CRUD SCREEN REFACTOR/REDESIGN ([ROADMAP](https://github.com/apache-superset/superset-roadmap/issues/14))
- FEAT: ADD/EDIT DATABASE MODAL FORM SECTIONS UI  (#[10745](https://github.com/apache/superset/pull/10745))
- FEAT: BASE TABBED MODAL FOR NEW DATABASE CRUD UI  (#[10668](https://github.com/apache/superset/pull/10668))


DATABASE LIST VIEW REFACTOR/REDESIGN ([ROADMAP](https://github.com/apache-superset/superset-roadmap/issues/55))
- FEAT: DATABASE DELETE WARNING  (#[10800](https://github.com/apache/superset/pull/10800))\
<kbd><img alt="10800" src="media/10800.gif" width="400"/></kbd>
- FEAT: FILTERS FOR DATABASE LIST VIEW  (#[10772](https://github.com/apache/superset/pull/10772))
- FEAT: SIP-34 TABLE LIST VIEW FOR DATABASES  (#[10705](https://github.com/apache/superset/pull/10705))


DATABASE LIST VIEW REFACTOR/REDESIGN #55 ([ROADMAP](https://github.com/apache-superset/superset-roadmap/issues/55))
- FEAT(API): DATABASE SCHEMAS MIGRATION TO NEW API   (#[10436](https://github.com/apache/superset/pull/10436))
- FEAT(DATABASE): POST, PUT, DELETE API ENDPOINTS  (#[10741](https://github.com/apache/superset/pull/10741))
- FEAT(DATABASES): TEST CONNECTION API  (#[10723](https://github.com/apache/superset/pull/10723))


DATASETS CRUD SCREEN REFACTOR/REDESIGN ([ROADMAP](https://github.com/apache-superset/superset-roadmap/issues/13))
- FEAT: DATASET EDITOR IMPROVEMENTS  (#[10444](https://github.com/apache/superset/pull/10444))\
<kbd><img alt="10444" src="media/10444.gif" width="400"/></kbd>


DATASETS CRUD SCREEN REFACTOR/REDESIGN #13 ([ROADMAP](https://github.com/apache-superset/superset-roadmap/issues/13))
- FEAT(DATASOURCE): REMOVE DELETED COLUMNS AND UPDATE COLUMN TYPE ON METADATA REFRESH  (#[10619](https://github.com/apache/superset/pull/10619))\
  <kbd><img alt="10619" src="media/10619.png" width="400"/></kbd>


DATASETS LIST VIEW REFACTOR/REDESIGN #12 ([ROADMAP](https://github.com/apache-superset/superset-roadmap/issues/12))
- FEAT: UPDATE DATASET EDITOR MODAL  (#[10347](https://github.com/apache/superset/pull/10347))\
  <kbd><img alt="10347" src="media/10347.gif" width="400"/></kbd>


- FEAT(DATASETS): REST API BULK DELETE  (#[11237](https://github.com/apache/superset/pull/11237))


SAVED QUERIES CRUD SCREEN + LIST VIEW REFACTOR/REDESIGN #15 ([ROADMAP](https://github.com/apache-superset/superset-roadmap/issues/15))
- FEAT: CRUD REST API FOR SAVED QUERIES  (#[10777](https://github.com/apache/superset/pull/10777))
- FEAT: SAVED QUERY LIST ACTIONS  (#[11109](https://github.com/apache/superset/pull/11109))\
<kbd><img alt="11109" src="media/11109.gif" width="400"/></kbd>

- FEAT: SAVED QUERY LIST VIEW + SORT/FILTERS  (#[11005](https://github.com/apache/superset/pull/11005))
- FEAT: SAVEDQUERY REST API FOR BULK DELETE AND NEW API FIELDS  (#[10793](https://github.com/apache/superset/pull/10793))
- FEAT: UPDATE SAVED QUERY BACKEND ROUTING + ADD SAVEDQUERY LIST  (#[10922](https://github.com/apache/superset/pull/10922))
- FEAT(SAVED_QUERIES): ADD CUSTOM API FILTER FOR ALL STRING & TEXT FIELDS  (#[11031](https://github.com/apache/superset/pull/11031))


OTHER FEATURES
- FEAT: DATASET REST API FOR DISTINCT VALUES  (#[10595](https://github.com/apache/superset/pull/10595))


**EXPLORE, CHARTS, DASHBOARDS**

[SIP-40] PROPOSAL FOR CUSTOM ERROR MESSAGES #9194 ([SIP](https://github.com/apache/superset/issues/9194))
- FEAT: ADD DOWNLOAD AS IMAGE BUTTON TO EXPLORE  (#[10297](https://github.com/apache/superset/pull/10297))\
<kbd><img alt="10297" src="media/10297.gif" width="400"/></kbd>


[SIP-34] PROPOSAL TO ESTABLISH A NEW DESIGN DIRECTION, SYSTEM, AND PROCESS FOR SUPERSET ([SIP](https://github.com/apache/superset/issues/8976))
- FEAT: SIP-34 EXPLORE SAVE MODAL  (#[10355](https://github.com/apache/superset/pull/10355))\
<kbd><img alt="10355" src="media/10355.gif" width="400"/></kbd>


CHARTS LIST VIEW REFACTOR/REDESIGN ([ROADMAP](https://github.com/apache-superset/superset-roadmap/issues/47))
- FEAT(CHARTS): MODIFY CUSTOM API FILTER TO INCLUDE MORE FIELDS  (#[11054](https://github.com/apache/superset/pull/11054))


ECHARTS INTEGRATION ([ROADMAP](https://github.com/apache-superset/superset-roadmap/issues/48))
- FEAT: ADD LINEAR COLOR SCALE TO SUNBURST CHART  (#[10474](https://github.com/apache/superset/pull/10474))\
<kbd><img alt="10474" src="media/10474.gif" width="400"/></kbd>

- FEAT: ADD OPTIONAL PROPHET FORECASTING FUNCTIONALITY TO CHART DATA API  (#[10324](https://github.com/apache/superset/pull/10324))
- FEAT(VIZ): ADD ECHARTS TIMESERIES CHART  (#[10752](https://github.com/apache/superset/pull/10752))\
<kbd><img alt="10752" src="media/10752.gif" width="400"/></kbd>


IMPROVEMENTS TO CACHE HANDLING #74 ([ROADMAP](https://github.com/apache-superset/superset-roadmap/issues/74))
- FEAT: ADD ECHARTS PIE CHART  (#[10966](https://github.com/apache/superset/pull/10966))\
<kbd><img alt="10966" src="media/10966.gif" width="400"/></kbd>

- FEAT: IMPLEMENT CACHE INVALIDATION API  (#[10761](https://github.com/apache/superset/pull/10761))
- FEAT: ADDING EXTRA_FILTERS TO WARM_UP_CACHE  (#[10675](https://github.com/apache/superset/pull/10675))


[SIP-34] PROPOSAL TO ESTABLISH A NEW DESIGN DIRECTION, SYSTEM, AND PROCESS FOR SUPERSET ([SIP](https://github.com/apache/superset/issues/8976))
- FEAT: ADD FAVORITE STAR TO DASHBOARD AND CHART LISTS  (#[10510](https://github.com/apache/superset/pull/10510))\
<kbd><img alt="10510" src="media/10510.png" width="400"/></kbd>

- FEAT: USE SVG FOR CHECKBOX COMPONENT  (#[10799](https://github.com/apache/superset/pull/10799))\
<kbd><img alt="10799" src="media/10799.gif" width="400"/></kbd>


OTHER FEATURES
- FEAT(TABLE-VIZ): TRANSLATION AND METRIC COLUMN HEADER ALIGN RIGHT  (#[10549](https://github.com/apache/superset/pull/10549))


- FEAT: ADDING DASHBOARD TOGGLE FULLSCREEN BUTTON  (#[10840](https://github.com/apache/superset/pull/10840))\
<kbd><img alt="10840" src="media/10840.png" width="400"/></kbd>
- FEAT: ENABLE ETAG HEADER FOR DASHBOARD GET REQUESTS  (#[10963](https://github.com/apache/superset/pull/10963))
- FEAT: MOVE ACE-EDITOR AND MATHJS TO ASYNC MODULES  (#[10837](https://github.com/apache/superset/pull/10837))
- FEAT: SERVER SIDE DASHBOARD CSS FOR LESS REPAINT  (#[10850](https://github.com/apache/superset/pull/10850))
- FEAT: USE SHORTEN URL IN STANDALONE IFRAME  (#[10651](https://github.com/apache/superset/pull/10651))


**SQL LAB**
- FEAT: ADDING TABLE COMMENT AND COLUMNS COMMENT FOR SQLLAB  (#[10844](https://github.com/apache/superset/pull/10844))


**SYSTEM, OTHER**
- FEAT: ADD TXT AS DEFAULT CSV EXTENSION  (#[10371](https://github.com/apache/superset/pull/10371))


[SIP-34] PROPOSAL TO ESTABLISH A NEW DESIGN DIRECTION, SYSTEM, AND PROCESS FOR SUPERSET ([SIP](https://github.com/apache/superset/issues/8976))
- FEAT: CARD VIEW BULK SELECT  (#[10607](https://github.com/apache/superset/pull/10607))
- FEAT: CUSTOM FAVORITE FILTER FOR DASHBOARDS, CHARTS AND SAVED QUERIES  (#[11083](https://github.com/apache/superset/pull/11083))
- FEAT: SIP-34 CARD/GRID VIEWS FOR DASHBOARDS AND CHARTS   (#[10526](https://github.com/apache/superset/pull/10526))
- FEAT(LISTVIEWS): SIP-34 BULK SELECT  (#[10298](https://github.com/apache/superset/pull/10298))
- FEAT(LISTVIEWS): SIP-34 FILTERS FOR CHARTS, DASHBOARDS, DATASETS  (#[10335](https://github.com/apache/superset/pull/10335))


[SIP-40] PROPOSAL FOR CUSTOM ERROR MESSAGES #9194 ([SIP](https://github.com/apache/superset/issues/9194))
- FEAT: UPDATE TIMEOUT ERROR UX  (#[10274](https://github.com/apache/superset/pull/10274))


ALERTS (SEND NOTIFICATION WHEN A CONDITION IS MET) ([ROADMAP](https://github.com/apache-superset/superset-roadmap/issues/54))
- FEAT: ADD TEST EMAIL FUNCTIONALITY TO SQL-BASED EMAIL ALERTS  (#[10476](https://github.com/apache/superset/pull/10476))
- FEAT: REFACTORED SQL-BASED ALERTING FRAMEWORK  (#[10605](https://github.com/apache/superset/pull/10605))


[SIP-34] PROPOSAL TO ESTABLISH A NEW DESIGN DIRECTION, SYSTEM, AND PROCESS FOR SUPERSET ([SIP](https://github.com/apache/superset/issues/8976))
- FEAT: ADDING ALL ICONS FROM THE DESIGN SYSTEM TO THE CODEBASE  (#[11033](https://github.com/apache/superset/pull/11033))
- FEAT: STORYBOOK FOR ICON COMPONENT  (#[10515](https://github.com/apache/superset/pull/10515))


[SIP-48] USING ANT DESIGN AS OUR PRIMARY COMPONENT LIBRARY ([SIP](https://github.com/apache/superset/issues/10254))
- FEAT: ADD ANTD TO THE CODEBASE  (#[10508](https://github.com/apache/superset/pull/10508))


ALERTS (SEND NOTIFICATION WHEN A CONDITION IS MET) ([ROADMAP](https://github.com/apache-superset/superset-roadmap/issues/54))
- FEAT: UPDATED EMAIL FORMAT FOR SQL-BASED EMAIL ALERTS  (#[10512](https://github.com/apache/superset/pull/10512))


SUPERSET COMPONENT LIBRARY - PHASE 1 ([ROADMAP](https://github.com/apache-superset/superset-roadmap/issues/23))
- FEAT: ADDING STORYBOOK TO SUPERSET  (#[10383](https://github.com/apache/superset/pull/10383))


OTHER
- FEAT: ALLOW TESTS FILES IN  /SRC (PLUS LABEL COMPONENT TESTS)  (#[10634](https://github.com/apache/superset/pull/10634))
- FEAT: GETTING FANCIER WITH STORYBOOK  (#[10647](https://github.com/apache/superset/pull/10647))


### BUGFIXES

- FIX(PERMISSIONS): ALPHA ROLE HAS ALL FULL FEATURES  (#[10241](https://github.com/apache/superset/pull/10241))
- FIX: BROKEN GLYPHICONS USED IN REACT-JSON-SCHEMA  (#[10267](https://github.com/apache/superset/pull/10267))
- FIX: ADD ADDITIONAL UI TWEAKS  (#[10275](https://github.com/apache/superset/pull/10275))
- FIX: SAVING CUSTOM CSS CORRECTLY  (#[10289](https://github.com/apache/superset/pull/10289))
- FIX: FETCH DATASETS LIST AFTER DATASET CREATED SUCCESSFULLY  (#[10290](https://github.com/apache/superset/pull/10290))
- FIX: UPDATE COMMUNITY SLACK LINK  (#[10360](https://github.com/apache/superset/pull/10360))
- FIX: ALLOW CREATING TABLE OPTION AND REMOVE SCHEMA REQUIREMENT IN DATASET ADD MODAL  (#[10369](https://github.com/apache/superset/pull/10369))
- FIX(DATASETS): SORT AND HUMANIZED MODIFIED BY  (#[10380](https://github.com/apache/superset/pull/10380))
- FIX(API): FIXES PERF ON CHARTS AND INTRODUCES SORTING BY DATABASE ON DATASETS  (#[10392](https://github.com/apache/superset/pull/10392))
- FIX(API): FIXES OPENAPI SPEC ERRORS AND ADDS A TEST TO VALIDATE ALL SPEC  (#[10393](https://github.com/apache/superset/pull/10393))
- FIX(CHARTS): DISABLE CSRF FOR CHART DATA ENDPOINT  (#[10397](https://github.com/apache/superset/pull/10397))
- FIX: DATASET LIST FILTERS BUG  (#[10398](https://github.com/apache/superset/pull/10398))
- FIX: REMOVE FAB RENDERED MENU IN FAVOR OF REACT BASED ONE  (#[10401](https://github.com/apache/superset/pull/10401))
- FIX: SHOW LABEL FOR FILTERS IN FILTER BOX IN EXPLORE  (#[10412](https://github.com/apache/superset/pull/10412))
- FIX: IMPLEMENT UPDATES TO SQL-BASED EMAIL ALERTS  (#[10454](https://github.com/apache/superset/pull/10454))
- FIX(PRESTO): HANDLE ROW DATA STORED AS STRING  (#[10456](https://github.com/apache/superset/pull/10456))
- FIX: CHANGE "ADD NEW SLICE" COPY TO "ADD NEW CHART"  (#[10457](https://github.com/apache/superset/pull/10457))
- FIX(SQLLAB): BUTTON WIDTH ISN'T WIDE ENOUGH FOR 'RUN SELECTION'  (#[10461](https://github.com/apache/superset/pull/10461))
- FIX: TIMEOUT ERROR MESSAGE  (#[10478](https://github.com/apache/superset/pull/10478))
- FIX: ENFORCE MANDATORY CHART NAME ON SAVE AND EDIT  (#[10482](https://github.com/apache/superset/pull/10482))
- FIX: MORE TWEAKS NEEDED AFTER ADDING DOCTYPE TAG  (#[10504](https://github.com/apache/superset/pull/10504))
- FIX: EXPLORE PANEL MISSING PADDING  (#[10505](https://github.com/apache/superset/pull/10505))
- FIX: REFACTORED SQL-BASED ALERTS TO NOT PASS SQLALCHEMY OBJECTS AS ARGS  (#[10506](https://github.com/apache/superset/pull/10506))
- FIX(SQLLAB): HANDLE LONG TABLE NAMES IN SQL LAB  (#[10518](https://github.com/apache/superset/pull/10518))
- FIX: MAKE SQL-BASED ALERT EMAIL LINKS USER FRIENDLY  (#[10519](https://github.com/apache/superset/pull/10519))
- FIX(DASHBOARD): CHANGING THE CHART TITLE, EXCEPT NOT  (#[10527](https://github.com/apache/superset/pull/10527))
- FIX: MISALIGNED LIMITCONTROL BUTTONS AND PORT JSX->TSX  (#[10529](https://github.com/apache/superset/pull/10529))
- FIX: RESOLVES #10535  (#[10536](https://github.com/apache/superset/pull/10536))
- FIX: ADD RETRY TO SQL-BASED ALERTING CELERY TASK  (#[10542](https://github.com/apache/superset/pull/10542))
- FIX: UPDATING DOCKERFILE TO WORK WITH UPDATED PYTHON REQUIREMENTS.  (#[10550](https://github.com/apache/superset/pull/10550))
- FIX(THUMBNAILS): MISSING FIELD, LOGGING AND NEW CONFIG VAR  (#[10562](https://github.com/apache/superset/pull/10562))
- FIX: ADD TRANSLATE FOR DROPDOWN MENU  (#[10573](https://github.com/apache/superset/pull/10573))
- FIX: ERROR MESSAGE MODAL OVERFLOW  (#[10580](https://github.com/apache/superset/pull/10580))
- FIX: ADD NONE CHECKING TO CAST_TO_NUM  (#[10584](https://github.com/apache/superset/pull/10584))
- FIX: REMOVING UNSUPPORTED MODAL SIZES  (#[10625](https://github.com/apache/superset/pull/10625))
- FIX: REMOVE DUPLICATED PARAMS AND CACHE_TIMEOUT FROM LIST_COLUMNS; ADD VIZ_TYPE TO LIST_COLUMNS  (#[10643](https://github.com/apache/superset/pull/10643))
- FIX: CONTROLS SCROLL ISSUE  (#[10644](https://github.com/apache/superset/pull/10644))
- FIX(DB_ENGINE_SPECS): IMPROVE PRESTO COLUMN TYPE MATCHING  (#[10658](https://github.com/apache/superset/pull/10658))
- FIX(DB_ENGINE_SPECS): MYSQL LONGTEXT TYPE SHOULD NOT BE NUMERIC  (#[10661](https://github.com/apache/superset/pull/10661))
- FIX: CHANGE PUBLIC ROLE LIKE GAMMA PROCEDURE  (#[10674](https://github.com/apache/superset/pull/10674))
- FIX(SQLLAB): LOG EXCEPTIONS CAUSED BY THE USER AS DEBUG AND NOT ERROR  (#[10676](https://github.com/apache/superset/pull/10676))
- FIX: ONLY CALL SIGNAL IF EXECUTING ON THE MAIN THREAD  (#[10677](https://github.com/apache/superset/pull/10677))
- FIX: LAYOUT FLEXINESS  (#[10681](https://github.com/apache/superset/pull/10681))
- FIX: SUBMENU CSS  (#[10682](https://github.com/apache/superset/pull/10682))
- FIX: DASHBOARD EXTRA FILTERS  (#[10692](https://github.com/apache/superset/pull/10692))
- FIX: SHORTEN URL WITH EXTRA REQUEST PARAMETERS  (#[10693](https://github.com/apache/superset/pull/10693))
- FIX: CARD VIEW FAILED CYPRESS TESTS  (#[10699](https://github.com/apache/superset/pull/10699))
- FIX: DEPRECATION WARNINGS DUE TO INVALID ESCAPE SEQUENCES.  (#[10710](https://github.com/apache/superset/pull/10710))
- FIX: MOVE MENU REORG LOGIC FROM CRUD APP INTO MENU COMPONENT  (#[10717](https://github.com/apache/superset/pull/10717))
- FIX: LOCAL DOCKER DEPLOYMENT  (#[10738](https://github.com/apache/superset/pull/10738))
- FIX: REJIGGERING SOME DEPENDENCIES, TRYING TO GET CI TO PASS  (#[10747](https://github.com/apache/superset/pull/10747))
- FIX(PRESTO): DEFAULT UNKNOWN TYPES TO STRING TYPE  (#[10753](https://github.com/apache/superset/pull/10753))
- FIX: ADD VALIDATOR INFORMATION TO EMAIL/SLACK ALERTS  (#[10762](https://github.com/apache/superset/pull/10762))
- FIX: RE-INSTALLING LOCAL SUPERSET IN CACHE IMAGE  (#[10766](https://github.com/apache/superset/pull/10766))
- FIX: CAN NOT TYPE `0.05` IN `TextControl`  (#[10778](https://github.com/apache/superset/pull/10778))
- FIX: MVC SHOW SAVED QUERY  (#[10781](https://github.com/apache/superset/pull/10781))
- FIX: DISABLE DOMAIN SHARDING ON EXPLORE VIEW  (#[10787](https://github.com/apache/superset/pull/10787))
- FIX: DATABASE API MISSING ALLOW NONE ON FIELDS  (#[10795](https://github.com/apache/superset/pull/10795))
- FIX: BUMP NODE VERSION ON DOCKERFILE TO BE ON PAR WITH DOCKER-COMPOSE  (#[10813](https://github.com/apache/superset/pull/10813))
- FIX(TESTS): EXPORT DATASET TESTS FAILS WITH PRESTO  (#[10818](https://github.com/apache/superset/pull/10818))
- FIX: USE NULLPOOL IN THE CELERY WORKERS  (#[10819](https://github.com/apache/superset/pull/10819))
- FIX: MAKING THE DATABASE READ-ONLY  (#[10823](https://github.com/apache/superset/pull/10823))
- FIX(DATABASES): TEST CONNECTION API ENDPOINT  (#[10824](https://github.com/apache/superset/pull/10824))
- FIX: UPDATE THE TIME FILTER FOR 'LAST YEAR' OPTION IN EXPLORE  (#[10829](https://github.com/apache/superset/pull/10829))
- FIX(TEST): MISSING AUTH ON TESTS  (#[10842](https://github.com/apache/superset/pull/10842))
- FIX(CYPRESS): WAIT FOR FILTERVALUES REQUEST  (#[10884](https://github.com/apache/superset/pull/10884))
- FIX: SUPERSET ALERTING MISC FIXES  (#[10891](https://github.com/apache/superset/pull/10891))
- FIX(CYPRESS): PREVENT CI FAILURE ON CODECOV FAILURE  (#[10892](https://github.com/apache/superset/pull/10892))
- FIX:  FRONT END CI TESTS AND TEST RUNNER  (#[10897](https://github.com/apache/superset/pull/10897))
- FIX: BABEL SCRIPT BROKEN BY FORMAT STRING  (#[10902](https://github.com/apache/superset/pull/10902))
- FIX: SEVERAL DISABLED PYLINT RULES IN MODELS/HELPERS.PY  (#[10909](https://github.com/apache/superset/pull/10909))
- FIX: SPELLING IN DOCS HOMEPAGE  (#[10912](https://github.com/apache/superset/pull/10912))
- FIX: ADDRESS ALL DISABLED PYLINT CHECKS IN CHARTS/API.PY  (#[10932](https://github.com/apache/superset/pull/10932))
- FIX: USE NULLPOOL EVEN FOR USER LOOKUP IN THE CELERY  (#[10938](https://github.com/apache/superset/pull/10938))
- FIX: UPDATE PYLINT DISABLED CHECKS IN COMMON/QUERY_CONTEXT.PY  (#[10941](https://github.com/apache/superset/pull/10941))
- FIX: SETTING SPECIFIC EXCEPTIONS COMMON/QUERY_CONTEXT.PY  (#[10942](https://github.com/apache/superset/pull/10942))
- FIX: RE-ENABLING SEVERAL GLOBALLY DISABLED LINT RULES  (#[10957](https://github.com/apache/superset/pull/10957))
- FIX: REMOVED DISABLED LINT RULE `too-many-locals` IN CONNECTORS/BASE/MODELS.PY  (#[10958](https://github.com/apache/superset/pull/10958))
- FIX: TYPO IN PREFER TYPESCRIPT  (#[10959](https://github.com/apache/superset/pull/10959))
- FIX: PYLINT CHECKS IN CONNECTORS/SQLA/MODELS.PY  (#[10974](https://github.com/apache/superset/pull/10974))
- FIX: PYLINT DISABLED RULES IN DASHBOARD/API.PY  (#[10976](https://github.com/apache/superset/pull/10976))
- FIX: CHANGES A PYLINT CHECK IN DASHBOARD MODULE  (#[10978](https://github.com/apache/superset/pull/10978))
- FIX: CHANGED DISABLED RULES IN DATASETS MODULE  (#[10979](https://github.com/apache/superset/pull/10979))
- FIX: ADD ITEM OVERFLOW ON DATASET EDITOR  (#[10983](https://github.com/apache/superset/pull/10983))
- FIX: ENABLE PYLINT RULES IN DB_ENGINE_SPECS MODULE  (#[10998](https://github.com/apache/superset/pull/10998))
- FIX: ENABLE SEVERAL PYLINT RULES PARTIALLY IN DB_ENGINES_SPECS MODULE  (#[11000](https://github.com/apache/superset/pull/11000))
- FIX: UNBREAK CI  (#[11003](https://github.com/apache/superset/pull/11003))
- FIX: TIMER COMPONENT, FIXES #10849, CLOSES #11002  (#[11004](https://github.com/apache/superset/pull/11004))
- FIX: MENU SHOWS A 0 WHEN THERE ARE NOT SETTINGS  (#[11009](https://github.com/apache/superset/pull/11009))
- FIX: REENABLE PYLINT RULE `unused-import` IN CHARTS AND CONNECTORS MODULES  (#[11014](https://github.com/apache/superset/pull/11014))
- FIX: QUERY SEARCH LOW PRIVILEGED USER SEARCH ACCESS DENIED  (#[11017](https://github.com/apache/superset/pull/11017))
- FIX(API): UNABLE TO DELETE VIRTUAL DATASET, WRONG PERMISSION NAME  (#[11019](https://github.com/apache/superset/pull/11019))
- FIX: [DASHBOARD] SHOULD NOT SHOW EDIT BUTTON WHEN USER HAS NO EDIT PERMIT  (#[11024](https://github.com/apache/superset/pull/11024))
- FIX: DASHBOARD EDIT BUTTON (AGAIN)  (#[11029](https://github.com/apache/superset/pull/11029))
- FIX: SQL LAB AUTOCOMPLETE WIDTH  (#[11063](https://github.com/apache/superset/pull/11063))
- FIX: FIX TABLE EXISTENCE VALIDATION FUNCTION  (#[11066](https://github.com/apache/superset/pull/11066))
- FIX: DATABASE LIST CHECKBOXES  (#[11068](https://github.com/apache/superset/pull/11068))
- FIX: ADDING TIMEOUT TO FLAKY CYPRESS TEST, TO WAIT FOR ANIMATION TO COMPLETE  (#[11074](https://github.com/apache/superset/pull/11074))
- FIX: SURFACE CONNECTION ERROR MESSAGES ON THE CLIENT  (#[11077](https://github.com/apache/superset/pull/11077))
- FIX(JEST): USING UTC MOCK DATE  (#[11079](https://github.com/apache/superset/pull/11079))
- FIX: DOUBLE SCROLL BARS ON DATASET EDITOR  (#[11095](https://github.com/apache/superset/pull/11095))
- FIX: ECHARTS TIMESERIES GROUPBY  (#[11103](https://github.com/apache/superset/pull/11103))
- FIX: DISABLING TIMEZONE OF DATAFRAME BEFORE PASSING PROPHET  (#[11107](https://github.com/apache/superset/pull/11107))
- FIX(CHART-DATA-API): IGNORE MISSING FILTERS  (#[11112](https://github.com/apache/superset/pull/11112))
- FIX: ALEMBIC MIGRATION ERROR MSG TRYING TO DELETE CONSTRAINT ON TABLES  (#[11115](https://github.com/apache/superset/pull/11115))
- FIX: REMOVE EXTRA FLASH IMPORT  (#[11121](https://github.com/apache/superset/pull/11121))
- FIX: REVERT "REPLACE REACTABLE WITH DATATABLE FROM SUPERSET-UI IN QUERYTABLE (#10981)"  (#[11125](https://github.com/apache/superset/pull/11125))
- FIX: SPATIALCONTROL POPOVER WON'T OPEN  (#[11127](https://github.com/apache/superset/pull/11127))
- FIX: ALEMBIC MIGRATION 18532D70AB98  (#[11136](https://github.com/apache/superset/pull/11136))
- FIX(EXAMPLES): MISSING EXPRESSIONS IN BIRTH_NAMES  (#[11141](https://github.com/apache/superset/pull/11141))
- FIX: FIX TIME COLUMN DROPDOWN FOR DATE FILTER  (#[11149](https://github.com/apache/superset/pull/11149))
- FIX(DATASET): UPDATE USER LIST ENDPOINT  (#[11221](https://github.com/apache/superset/pull/11221))
- FIX(CRUD): SET DEFAULT EXTRA VALUE  (#[11262](https://github.com/apache/superset/pull/11262))
- FIX(SQLA): ALLOW 'UNKNOWN' TYPE QUERIES IN EXPLORE VIEW  (#[11365](https://github.com/apache/superset/pull/11365))
- FIX: PRIOR NPM FONT SOURCE HAD A GLITCH  (#[11724](https://github.com/apache/superset/pull/11724))


## BREAKING CHANGES
[LIST OF BACKWARDS INCOMPATIBLE CHANGES](https://github.com/apache/superset/blob/master/UPDATING.md#0380)

## COMPLETE CHANGELOG
FOR THE COMPLETE CHANGELOG PLEASE SEE [APACHE/SUPERSET/CHANGELOG.MD](https://github.com/apache/superset/blob/master/CHANGELOG.md)
