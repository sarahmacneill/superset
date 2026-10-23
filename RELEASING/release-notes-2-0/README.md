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

# <u>RELEASE NOTES FOR SUPERSET 2.0</u>

SUPERSET 2.0 IS A BIG STEP FORWARD. THIS RELEASE CLEANS UP MANY LEGACY CODE PATHS AND FEATURE FLAGS, AND DEPRECATES LOTS OF LEGACY BEHAVIORS IN SUPERSET.

- [**DEVELOPER EXPERIENCE**](#developer-experience)
- [**FEATURES**](#features)
- [**CONFIG AND FEATURE FLAGS**](#config-and-feature-flags)
- [**BREAKING CHANGES**](#breaking-changes)

## <u>DEVELOPER EXPERIENCE</u>

- ADDITION OF A STATSD GAUGE METRIC FOR SLACK AND EMAIL NOTIFICATIONS FOR INCREASED VISIBILITY INTO ERRORS AROUND ALERTS / REPORTS ([#20158](https://github.com/apache/superset/pull/20158))

- HELM CHART NOW SUPPORTS RESOURCE LIMITS AND REQUESTS FOR EACH COMPONENT ([#20052](https://github.com/apache/superset/pull/20052))

- NEW GITHUB WORKFLOW TO TEST STORYBOOK NETLIFY INSTANCE NIGHTLY ([#19852](https://github.com/apache/superset/pull/19852))

- MINIMUM REQUIREMENT FOR SUPERSET IS NOW PYTHON 3.8 ([#19017](https://github.com/apache/superset/pull/19017))

## <u>FEATURES</u>

**CHARTING AND DASHBOARD EXPERIENCE**

SUPPORT FOR HORIZONTAL BAR CHART ADDED ([#19918](https://github.com/apache/superset/pull/19918))

![HORIZONTAL](https://user-images.githubusercontent.com/11830681/166248149-4946388a-5051-4d13-a516-50a81e9b5be3.png)

TIME SERIES CHARTS NOW SUPPORT STACKING OF BOTH NEGATIVE AND POSITIVE VALUES ([#20408](https://github.com/apache/superset/pull/20408))

![NEGATIVE](https://user-images.githubusercontent.com/15073128/174057996-52255bfe-60c3-4727-be99-e328c124e439.png)

- PIE CHARTS NOW DEFAULTS TO A ROW LIMIT OF 100 TO PREVENT CRASHES WHEN A HIGH-CARDINALITY COLUMN IS CHOSEN AS THE DIMENSION ([#20392](https://github.com/apache/superset/pull/20392))

- WORLD MAP CHART NOW SUPPORTS COLORING EITHER BY METRIC OR BY THE COUNTRY COLUMN ([#19881](https://github.com/apache/superset/pull/19881))

- TABLE VISUALIZATION NOW SUPPORTS DRAG AND DROP FOR COLUMNS ([#19381](https://github.com/apache/superset/pull/19381))

- MIXED CHART NOW SUPPORTS ADVANCED ANALYTICS ([#19851](https://github.com/apache/superset/pull/19851))

- ADD SUPPORT FOR GENERIC X-AXIS (NON-TIME-SERIES) IN THE MIXED CHART ([#20097](https://github.com/apache/superset/pull/20097))

![IMAGE](https://user-images.githubusercontent.com/33317356/168807749-b021c04c-8902-4b4f-a7a4-f21544fb678e.png)

- CHARTS CAN NOW BE CREATED IN EDIT DASHBOARD MODE ([#20126](https://github.com/apache/superset/pull/20126))

![IMAGE](https://user-images.githubusercontent.com/15073128/169251205-2c0f36bb-17e0-4549-aa84-66a58a377603.png)

- ADD AGGREGATE TOTAL FOR PIE CHARTS ([#19622](https://github.com/apache/superset/pull/19622))

- LEGEND IS NOW ENABLED BY DEFAULT FOR RELEVANT CHARTS ([#19927](https://github.com/apache/superset/pull/19927))

**VIEW RESULTS EXPERIENCE**

- EXPLORE AND DASHBOARD VIEWS NOW SUPPORT DISPLAYING OF MULTIPLE RESULTS ([#20277](https://github.com/apache/superset/pull/20277))

- RESULTS PANE IN DASHBOARD VIEW NOW MORE CLOSELY MIRRORS RICH FUNCTIONALITY FROM RESULTS PANE IN EXPLORE ([#20144](https://github.com/apache/superset/pull/20144))


**QUALITY OF LIFE**

- EDIT DATASET MODAL NOW DOESN'T CLOSE WHEN YOU CLICK AWAY ([#20278](https://github.com/apache/superset/pull/20278))

- WHEN EDITING THE LABEL IN THE METRICS POPOVER, PRESSING ENTER NOW SAVES WHAT YOU TYPED ([#19898](https://github.com/apache/superset/pull/19898))

- WHEN ADDING NEW CHART FROM THE DASHBOARD VIEW, THE DASHBOARD NAME WILL NOW PRE-FILL ([#20129](https://github.com/apache/superset/pull/20129))

- ANNOTATIONS NOW HAVE AN IMPROVED EMPTY STATE ([#20160](https://github.com/apache/superset/pull/20160))

- CONFIRMATIONAL MODAL IS NOW SHOWN IF USER EXITS EXPLORE WITHOUT SAVING CHANGES ([#19993](https://github.com/apache/superset/pull/19993))

- EXPLORE POPOVERS NOW CLOSE WHEN THE ESCAPE KEY IS PRESSED ([#19902](https://github.com/apache/superset/pull/19902))

- RUN AND SAVE BUTTONS ARE REDESIGNED FOR IMPROVED USABILITY ([#19558](https://github.com/apache/superset/pull/19558))

**DATABASES**

- NATIVE DATABASE DRIVER FOR DATABRICKS ([#20320](https://github.com/apache/superset/pull/20320))

- TIME GRAINS FOR SQLITE ARE NOW SIMPLIFIED ([#19745](https://github.com/apache/superset/pull/19745))

- MULTIPLE UPGRADES TO THE TRINO DATABASE ENGINE ([#20152](https://github.com/apache/superset/pull/20152))

- SWITCH FROM SQLALCHEMY-TRINO TO TRINO-PYTHON-CLIENT ([#19957](https://github.com/apache/superset/pull/19957))

- APACHE PINOT NOW SUPPORTS MORE TIME GRAINS IN SUPERSET ([#19724](https://github.com/apache/superset/pull/19724))

**JINJA**

- NEW JINJA MACRO ENABLES QUERYING / REFERENCING BOTH PHYSICAL AND VIRTUAL DATASETS IN SQL LAB ([#15241](https://github.com/apache/superset/pull/15241))

- NEW JINJA MACRO ADDED TO IMPROVE EXPERIENCE OF INCLUDING MULTIPLE ITEMS ([#19574](https://github.com/apache/superset/pull/19574))

**OTHER**

- DATASETS CAN NOW BE FILTERED BY THEIR CERTIFICATION STATUS ([#20136](https://github.com/apache/superset/pull/20136))


## <u>CONFIG AND FEATURE FLAGS</u>

- INITIAL IMPLEMENTATION OF ADVANCED TYPES ([#18794](https://github.com/apache/superset/pull/18794))
	- FLAG: `ENABLE_ADVANCED_DATA_TYPES`

- CACHING CAN NOW BE ENABLED IN DATABASE SETUPS WHEN USER IMPERSONATION IS ENABLED ([#20114](https://github.com/apache/superset/pull/20114))
	- FLAG: `CACHE_IMPERSONATION`

- CONTROL BEHAVIOR FOR HOW COLOR PALETTES ARE CHOSEN ([#19987](https://github.com/apache/superset/pull/19987))
	- FLAG: `USE_ANALAGOUS_COLORS`

- ENABLING NON-TIME-SERIES X-AXIS IN SOME CHARTS ([#20097](https://github.com/apache/superset/pull/20097))
	- FLAG: `GENERIC_CHART_AXES`

- AS PART OF THE 2.0 CLEANUP EFFORTS, THE FOLLOWING FEATURE FLAGS WERE REMOVED (WHICH MEANS THE BEHAVIOR IS NOW PERMANENTLY ENABLED):
	- `ROW_LEVEL_SECURITY`
	- `ENABLE_REACT_CRUD_VIEWS`
	- `PUBLIC_ROLE_LIKE_GAMMA`

- THE FOLLOWING FEATURE FLAGS ARE NOW TRUE BY DEFAULT, BUT CAN BE TURNED BACK TO FALSE:
	- `ENABLE_EXPLORE_DRAG_AND_DROP`
	- `ENABLE_DND_WITH_CLICK_UX`
	- `DISABLE_LEGACY_DATASOURCE_EDITOR`
	- `SQLLAB_BACKEND_PERSISTENCE`
	- `VERSIONED_EXPORT`

- THE FOLLOWING CONFIG FLAGS WERE REMOVED:
	- `APP_ICON_WIDTH`

- A NUMBER OF LEGACY INTERIM FLAGS WERE REMOVED AROUND SIP-15 ([#18936](https://github.com/apache/superset/pull/18936))

- THE `ENABLE_JAVASCRIPT_CONTROLS` FLAG WAS MOVED FROM AN APP CONFIG TO A FEATURE FLAG

## <u>BREAKING CHANGES</u>

TO LEARN MORE ABOUT THE BREAKING CHANGES IN 2.0, PLEASE READ [UPDATING.MD](https://github.com/apache/superset/blob/master/UPDATING.md)
