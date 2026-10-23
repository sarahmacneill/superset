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

# <u>RELEASE NOTES FOR SUPERSET 4.1.0</u>

SUPERSET 4.1.0 BRINGS A RANGE OF NEW FEATURES AND QUALITY OF LIFE IMPROVEMENTS.  THIS RELEASE IS A MINOR VERSION, MEANING IT DOESN'T INCLUDE ANY BREAKING CHANGES. HOWEVER, USERS OF BASIC SUPERSET DOCKER IMAGES LIKE `4.1.0` SHOULD SEE THE NOTE AT THE BOTTOM OF THIS FILE ABOUT [CHANGES TO THOSE BUILDS](/RELEASING/release-notes-4-1/README.md#change-to-docker-image-builds).

## <u>HIGHLIGHTS</u>

HERE ARE SOME OF THE HIGHLIGHTS OF THIS RELEASE.

### <u>BIG NUMBER WITH TIME PERIOD UPDATES</u>

WE RELEASED A [BIG NUMBER WITH TIME PERIOD COMPARISON](https://github.com/apache/superset/pull/26908) CHART AS PART OF SUPERSET 4.0. WITH THE LATEST UPDATE, THERE ARE NOW [COLOR OPTIONS](https://github.com/apache/superset/pull/27524) FOR COMPARISONS. THE CHART NOW ALSO USES [STANDARDIZE CONTROLS](https://github.com/apache/superset/pull/27193) SUCH THAT WHEN SWITCHING CHARTS WILL MAINTAIN THE SELECTED METRICS. TO ENABLE THE NEW CHART, YOU'LL NEED TO ENABLE THE `CHART_PLUGINS_EXPERIMENTAL` FEATURE FLAG.

<div>
    <image src="media/big_number_chart.png" alt="Image" width="100%">
</div>

### <u>TABLE WITH TIME COMPARISON</u>
ADDED FUNCTIONALITY TO DO [TABLE TIME COMPARISONS](https://github.com/apache/superset/pull/28057). THIS WILL HELP IMPROVE AND FACILITATE EFFICIENT DATA ANALYSIS.

<div>
    <image src="media/table_with_time.png" alt="Image" width="100%">
</div>

### <u>NEW ECHARTS VERSIONS</u>

THE NEW ECHARTS [HEATMAP](https://github.com/apache/superset/pull/25353) HAS BEEN ADDED. COMPARED TO THE LEGACY HEATMAP, IT HAS MORE ACCURATE PERCENTAGE CALCULATIONS, SERVER SIDE SORTING TO RESPECT ROW LIMITS, AND A MORE INTERACTIVE LEGEND CONTROL THAT ALLOWS SELECTING A SUBSET OF VALUES.

<div>
    <image src="media/heatmap.png" alt="Image" width="100%">
</div>

WE ALSO ADDED A NEW ECHARTS [HISTOGRAM](https://github.com/apache/superset/pull/28652) CHART. THE NEW CHART WILL HELP VISUALIZE PATTERNS, CLUSTERS, AND OUTLIERS IN THE DATA AND PROVIDES INSIGHTS INTO ITS SHAPE, CENTRAL TENDENCY, AND SPREAD.

<div>
    <image src="media/histogram.png" alt="Image" width="100%">
</div>

A NEW ECHARTS [SANKEY](https://github.com/apache/superset/pull/29329) CHART NOW EXISTS. THE CHART VISUALLY TRACKS THE MOVEMENT AND TRANSFORMATION OF VALUES ACROSS SYSTEM STAGES.

<div>
    <image src="media/sankey.png" alt="Image" width="100%">
</div>

YOU CAN USE THE CLI COMMAND TO MIGRATE AREA, BUBBLE, LINE, SANKEY, [HEATMAP](https://github.com/apache/superset/pull/27771), AND [HISTOGRAM](https://github.com/apache/superset/pull/28780) CHART TYPES BUT WE'LL ADD MORE AS THE ECHARTS MIGRATIONS CONTINUE. NOTE THAT MIGRATIONS FOR DEPRECATED CHARTS MAY BE FORCED IN UPCOMING MAJOR VERSIONS WHEN THE CODE IS REMOVED. RUNNING MIGRATIONS EARLIER WILL ALLOW YOU TO DE-RISK FUTURE UPGRADES WHILE IMPROVING USER EXPERIENCE.

```bash
Usage: superset viz-migrations [OPTIONS] COMMAND [ARGS]...

  Migrates a viz from one type to another.

Commands:
  downgrade  Downgrades a viz to the previous version.
  upgrade    Upgrade a viz to the latest version.
```

NOTE: WHEN MIGRATING DASHBOARDS FROM ONE SUPERSET INSTANCE TO ANOTHER (USING IMPORT/EXPORT FEATURES OR THE SUPERSET CLI), OR RESTORING A BACKUP OF PRIOR CHARTS AND DASHBOARDS, SUPERSET WILL APPLY THE EXISTING MIGRATIONS THAT ARE USED DURING VERSION UPGRADES. THIS WILL ENSURE THAT YOUR CHARTS AND DASHBOARDS ARE USING THE LATEST AND GREATEST CHARTS THAT SUPERSET OFFICIALLY SUPPORTS. FOR ANY MIGRATION ISSUES, FEEL FREE TO [OPEN A NEW ISSUE](https://github.com/apache/superset/issues/new?assignees=&labels=bug&projects=&template=bug-report.yml) IN THE REPO.

### <u>IMPROVED UPLOAD FORMS</u>

WE'VE MADE DESIGN CHANGES TO THE [CSV](https://github.com/apache/superset/pull/27840), [EXCEL](https://github.com/apache/superset/pull/28105), AND [COLUMNAR](https://github.com/apache/superset/pull/28192
) UPLOAD MODALS TO IMPROVE USER EXPERIENCE AND TO BE MORE PERFORMANT. THE NEW DESIGNS HAS THE FOLLOWING GOALS:

- IMPROVED ERROR HANDLING.
- BETTER BACKEND PARAMETER VALIDATION.
- MORE ALIGNED WITH OUR OTHER MODAL DIALOGS

#### <u>CSV</u>
<div>
    <img src="media/csv_modal_1.png" alt="Image" width="25%">
    <img src="media/csv_modal_2.png" alt="Image" width="25%">
    <img src="media/csv_modal_3.png" alt="Image" width="25%">
    <img src="media/csv_modal_4.png" alt="Image" width="25%">
</div>

#### <u>EXCEL</u>
<div>
    <img src="media/excel_modal_1.png" alt="Image" width="25%">
    <img src="media/excel_modal_2.png" alt="Image" width="25%">
    <img src="media/excel_modal_3.png" alt="Image" width="25%">
    <img src="media/excel_modal_4.png" alt="Image" width="25%">
</div>

#### <u>COLUMNAR</u>
<div>
    <img src="media/columnar_modal_1.png" alt="Image" width="33%">
    <img src="media/columnar_modal_2.png" alt="Image" width="33%">
    <img src="media/columnar_modal_3.png" alt="Image" width="33%">
</div>


### <u>OAUTH2 FOR DATABASES</u>

YOU NOW HAVE THE ABILITY TO ENABLE [OAUTH2](https://github.com/apache/superset/pull/27631) FOR DATABASES LIKE BIGQUERY, SNOWFLAKE, DREMIO, DATABRICKS, GOOGLE SHEETS, ETC. WHEN ENABLED, IT WILL ALLOW USERS TO CONNECT TO OAUTH2 ENABLED DATABASES WITH THEIR OWN CREDENTIALS.

### <u>CATALOG SUPPORT FOR DATABASES</u>

ADDED SUPPORT FOR THE [CATALOG HEIRACHY](https://github.com/apache/superset/pull/28317) FOR DATABASES THAT SUPPORT IT, SUCH AS [BIGQUERY (PROJECTS), DATABRICKS, PRESTO, SNOWFLAKE, AND TRINO](https://github.com/apache/superset/pull/28416). ONCE ENABLED, USERS WILL SEE CATALOGS WHEN SELECTING TABLES IN [SQL LAB, DATASETS](https://github.com/apache/superset/pull/28376), AND WHEN SETTING UP DATA ACCESS ROLES

### <u>SLACK UPLOAD FILES V2 API UPDATES</u>
AS PART OF [[SIP-138] PROPOSAL FOR SLACK FILE UPLOAD V2 INTEGRATION FOR ALERTS AND REPORTS](https://github.com/apache/superset/issues/29263) WE NOW HAVE SUPPORT FOR SLACK FILE UPLOAD FILES V2 API CALL. THIS FEATURE IS BEHIND THE FEATURE FLAG `ALERT_REPORT_SLACK_V2` AND ALSO CHANGES THE SLACK CHANNEL TO A SELECTOR. YOU MAY ALSO NEED TO ADD THE FOLLOWING SCOPES (`channels:read`, `group:read`) TO YOUR SLACK BOT TO WORK.

<div>
    <image src="media/slack_modal.png" alt="Image" width="100%">
</div>

### <u>TOTAL AND PERCENTAGES IN TOOLTIPS FOR ECHARTS</u>

USERS CAN NOW SEE BOTH THE [TOTAL AND PERCENTAGE IN TOOLTIPS](https://github.com/apache/superset/pull/27950) FOR ECHARTS.

<div>
    <image src="media/tooltips.png" alt="Image" width="100%">
</div>

### <u>ADDITIONAL METADATA BAR TO DASHBOARDS</u>

THERE IS NOW A [METADATA BAR](https://github.com/apache/superset/pull/27857) ADDED TO THE HEADER OF DASHBOARDS. THIS WILL NOW SHOW VIEWERS OF THE DASHBOARD BOTH THE OWNERS AND LAST MODIFIED TIME OF THE DASHBOARD.


## <u>CHANGE TO DOCKER IMAGE BUILDS</u>

STARTING IN 4.1.0, THE RELEASE'S DOCKER IMAGE DOES NOT SHIP WITH DRIVERS NEEDED TO OPERATE SUPERSET. USERS MAY NEED TO INSTALL A DRIVER FOR THEIR METADATA DATABASE (MYSQL OR POSTGRES) AS WELL AS THE DRIVER FOR THEIR DATA WAREHOUSE. THIS IS A RESULT OF CHANGES TO THE `lean` DOCKER IMAGE THAT OFFICIAL RELEASES COME FROM; SEE [DOCKER BUILD PRESETS](/docs/docs/installation/docker-builds.mdx#build-presets) FOR MORE DETAILS.
