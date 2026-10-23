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

# <u>SUPERSET</u>

[![LICENSE](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/license/apache-2-0)
[![LATEST RELEASE ON GITHUB](https://img.shields.io/github/v/release/apache/superset?sort=semver)](https://github.com/apache/superset/releases/latest)
[![BUILD STATUS](https://github.com/apache/superset/actions/workflows/superset-python-unittest.yml/badge.svg)](https://github.com/apache/superset/actions)
[![PYPI VERSION](https://badge.fury.io/py/apache_superset.svg)](https://badge.fury.io/py/apache_superset)
[![PYPI](https://img.shields.io/pypi/pyversions/apache_superset.svg?maxAge=2592000)](https://pypi.python.org/pypi/apache_superset)
[![GITHUB STARS](https://img.shields.io/github/stars/apache/superset?style=social)](https://github.com/apache/superset/stargazers)
[![CONTRIBUTORS](https://img.shields.io/github/contributors/apache/superset)](https://github.com/apache/superset/graphs/contributors)
[![LAST COMMIT](https://img.shields.io/github/last-commit/apache/superset)](https://github.com/apache/superset/commits/master)
[![OPEN ISSUES](https://img.shields.io/github/issues/apache/superset)](https://github.com/apache/superset/issues)
[![OPEN PRS](https://img.shields.io/github/issues-pr/apache/superset)](https://github.com/apache/superset/pulls)
[![GET ON SLACK](https://img.shields.io/badge/slack-join-orange.svg)](https://bit.ly/join-superset-slack)
[![DOCUMENTATION](https://img.shields.io/badge/docs-apache.org-blue.svg)](https://superset.apache.org)
[![STORYBOOK](https://img.shields.io/badge/storybook-live-ff4785.svg)](https://superset-storybook.netlify.app)
[![BUNDLE ANALYZER](https://img.shields.io/badge/bundle%20analyzer-nightly-8dd6f9.svg)](https://superset-bundle-analyzer.netlify.app)

<picture width="500">
  <source
    width="600"
    media="(prefers-color-scheme: dark)"
    src="https://superset.apache.org/img/superset-logo-horiz-dark.svg"
    alt="Superset logo (dark)"
  />
  <img
    width="600"
    src="https://superset.apache.org/img/superset-logo-horiz-apache.svg"
    alt="Superset logo (light)"
  />
</picture>

A MODERN, ENTERPRISE-READY BUSINESS INTELLIGENCE WEB APPLICATION.

### <u>DOCUMENTATION</u>

- **[USER GUIDE](https://superset.apache.org/user-docs/)** — FOR ANALYSTS AND BUSINESS USERS. EXPLORE DATA, BUILD CHARTS, CREATE DASHBOARDS, AND CONNECT DATABASES.
- **[ADMINISTRATOR GUIDE](https://superset.apache.org/admin-docs/)** — INSTALL, CONFIGURE, AND OPERATE SUPERSET. COVERS SECURITY, SCALING, AND DATABASE DRIVERS.
- **[DEVELOPER GUIDE](https://superset.apache.org/developer-docs/)** — CONTRIBUTE TO SUPERSET OR BUILD ON ITS REST API AND EXTENSION FRAMEWORK.

[**WHY SUPERSET?**](#why-superset) |
[**SUPPORTED DATABASES**](#supported-databases) |
[**RELEASE NOTES**](https://github.com/apache/superset/releases) |
[**GET INVOLVED**](#get-involved) |
[**RESOURCES**](#resources) |
[**ORGANIZATIONS USING SUPERSET**](https://superset.apache.org/inTheWild)

## <u>WHY SUPERSET?</u>

SUPERSET IS A MODERN DATA EXPLORATION AND DATA VISUALIZATION PLATFORM. SUPERSET CAN REPLACE OR AUGMENT PROPRIETARY BUSINESS INTELLIGENCE TOOLS FOR MANY TEAMS. SUPERSET INTEGRATES WELL WITH A VARIETY OF DATA SOURCES.

SUPERSET PROVIDES:

- A **NO-CODE INTERFACE** FOR BUILDING CHARTS QUICKLY
- A POWERFUL, WEB-BASED **SQL EDITOR** FOR ADVANCED QUERYING
- A **LIGHTWEIGHT SEMANTIC LAYER** FOR QUICKLY DEFINING CUSTOM DIMENSIONS AND METRICS
- OUT OF THE BOX SUPPORT FOR **NEARLY ANY SQL** DATABASE OR DATA ENGINE
- A WIDE ARRAY OF **BEAUTIFUL VISUALIZATIONS** TO SHOWCASE YOUR DATA, RANGING FROM SIMPLE BAR CHARTS TO GEOSPATIAL VISUALIZATIONS
- LIGHTWEIGHT, CONFIGURABLE **CACHING LAYER** TO HELP EASE DATABASE LOAD
- HIGHLY EXTENSIBLE **SECURITY ROLES AND AUTHENTICATION** OPTIONS
- AN **API** FOR PROGRAMMATIC CUSTOMIZATION
- A **CLOUD-NATIVE ARCHITECTURE** DESIGNED FROM THE GROUND UP FOR SCALE

## <u>SCREENSHOTS & GIFS</u>

**VIDEO OVERVIEW**

<!-- File hosted here https://github.com/apache/superset-site/raw/lfs/superset-video-4k.mp4 -->

[SUPERSET-VIDEO-1080P.WEBM](https://github.com/user-attachments/assets/b37388f7-a971-409c-96a7-90c4e31322e6)

<br/>

**LARGE GALLERY OF VISUALIZATIONS**

<kbd><img title="Gallery" src="https://superset.apache.org/img/screenshots/gallery.jpg"/></kbd><br/>

**CRAFT BEAUTIFUL, DYNAMIC DASHBOARDS**

<kbd><img title="View Dashboards" src="https://superset.apache.org/img/screenshots/dashboard.jpg"/></kbd><br/>

**NO-CODE CHART BUILDER**

<kbd><img title="Slice & dice your data" src="https://superset.apache.org/img/screenshots/explore.jpg"/></kbd><br/>

**POWERFUL SQL EDITOR**

<kbd><img title="SQL Lab" src="https://superset.apache.org/img/screenshots/sql_lab.jpg"/></kbd><br/>

## <u>SUPPORTED DATABASES</u>

SUPERSET CAN QUERY DATA FROM ANY SQL-SPEAKING DATASTORE OR DATA ENGINE (PRESTO, TRINO, ATHENA, [AND MORE](https://superset.apache.org/docs/databases)) THAT HAS A PYTHON DB-API DRIVER AND A SQLALCHEMY DIALECT.

HERE ARE SOME OF THE MAJOR DATABASE SOLUTIONS THAT ARE SUPPORTED:

<!-- SUPPORTED_DATABASES_START -->
<p align="center">
  <a href="https://superset.apache.org/docs/databases/supported/amazon-athena" title="Amazon Athena"><img src="docs/static/img/databases/amazon-athena.jpg" alt="Amazon Athena" width="76" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/amazon-dynamodb" title="Amazon DynamoDB"><img src="docs/static/img/databases/aws.png" alt="Amazon DynamoDB" width="40" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/amazon-redshift" title="Amazon Redshift"><img src="docs/static/img/databases/redshift.png" alt="Amazon Redshift" width="100" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/apache-doris" title="Apache Doris"><img src="docs/static/img/databases/doris.png" alt="Apache Doris" width="103" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/apache-drill" title="Apache Drill"><img src="docs/static/img/databases/apache-drill.png" alt="Apache Drill" width="81" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/apache-druid" title="Apache Druid"><img src="docs/static/img/databases/druid.png" alt="Apache Druid" width="117" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/apache-hive" title="Apache Hive"><img src="docs/static/img/databases/apache-hive.svg" alt="Apache Hive" width="44" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/apache-impala" title="Apache Impala"><img src="docs/static/img/databases/apache-impala.png" alt="Apache Impala" width="21" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/apache-kylin" title="Apache Kylin"><img src="docs/static/img/databases/apache-kylin.png" alt="Apache Kylin" width="44" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/apache-pinot" title="Apache Pinot"><img src="docs/static/img/databases/apache-pinot.svg" alt="Apache Pinot" width="76" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/apache-solr" title="Apache Solr"><img src="docs/static/img/databases/apache-solr.png" alt="Apache Solr" width="79" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/apache-spark-sql" title="Apache Spark SQL"><img src="docs/static/img/databases/apache-spark.png" alt="Apache Spark SQL" width="75" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/ascend" title="Ascend"><img src="docs/static/img/databases/ascend.webp" alt="Ascend" width="117" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/aurora-mysql-data-api" title="Aurora MySQL (Data API)"><img src="docs/static/img/databases/mysql.png" alt="Aurora MySQL (Data API)" width="77" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/aurora-postgresql-data-api" title="Aurora PostgreSQL (Data API)"><img src="docs/static/img/databases/postgresql.svg" alt="Aurora PostgreSQL (Data API)" width="76" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/azure-data-explorer" title="Azure Data Explorer"><img src="docs/static/img/databases/kusto.png" alt="Azure Data Explorer" width="40" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/azure-synapse" title="Azure Synapse"><img src="docs/static/img/databases/azure.svg" alt="Azure Synapse" width="40" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/clickhouse" title="ClickHouse"><img src="docs/static/img/databases/clickhouse.png" alt="ClickHouse" width="150" height="37" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/cloudflare-d1" title="Cloudflare D1"><img src="docs/static/img/databases/cloudflare.png" alt="Cloudflare D1" width="40" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/cockroachdb" title="CockroachDB"><img src="docs/static/img/databases/cockroachdb.png" alt="CockroachDB" width="150" height="24" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/couchbase" title="Couchbase"><img src="docs/static/img/databases/couchbase.svg" alt="Couchbase" width="150" height="35" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/cratedb" title="CrateDB"><img src="docs/static/img/databases/cratedb.svg" alt="CrateDB" width="180" height="24" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/databend" title="Databend"><img src="docs/static/img/databases/databend.png" alt="Databend" width="100" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/databricks" title="Databricks"><img src="docs/static/img/databases/databricks.png" alt="Databricks" width="152" height="24" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/denodo" title="Denodo"><img src="docs/static/img/databases/denodo.png" alt="Denodo" width="138" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/dremio" title="Dremio"><img src="docs/static/img/databases/dremio.png" alt="Dremio" width="126" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/duckdb" title="DuckDB"><img src="docs/static/img/databases/duckdb.png" alt="DuckDB" width="52" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/elasticsearch" title="Elasticsearch"><img src="docs/static/img/databases/elasticsearch.png" alt="Elasticsearch" width="40" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/exasol" title="Exasol"><img src="docs/static/img/databases/exasol.png" alt="Exasol" width="72" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/firebird" title="Firebird"><img src="docs/static/img/databases/firebird.png" alt="Firebird" width="100" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/firebolt" title="Firebolt"><img src="docs/static/img/databases/firebolt.png" alt="Firebolt" width="100" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/google-bigquery" title="Google BigQuery"><img src="docs/static/img/databases/google-big-query.svg" alt="Google BigQuery" width="76" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/google-sheets" title="Google Sheets"><img src="docs/static/img/databases/google-sheets.svg" alt="Google Sheets" width="76" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/greenplum" title="Greenplum"><img src="docs/static/img/databases/greenplum.png" alt="Greenplum" width="124" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/hologres" title="Hologres"><img src="docs/static/img/databases/hologres.png" alt="Hologres" width="44" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/ibm-db2" title="IBM Db2"><img src="docs/static/img/databases/ibm-db2.svg" alt="IBM Db2" width="91" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/ibm-netezza-performance-server" title="IBM Netezza Performance Server"><img src="docs/static/img/databases/netezza.png" alt="IBM Netezza Performance Server" width="40" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/mariadb" title="MariaDB"><img src="docs/static/img/databases/mariadb.png" alt="MariaDB" width="150" height="37" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/microsoft-sql-server" title="Microsoft SQL Server"><img src="docs/static/img/databases/msql.png" alt="Microsoft SQL Server" width="50" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/monetdb" title="MonetDB"><img src="docs/static/img/databases/monet-db.png" alt="MonetDB" width="100" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/mongodb" title="MongoDB"><img src="docs/static/img/databases/mongodb.png" alt="MongoDB" width="150" height="38" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/motherduck" title="MotherDuck"><img src="docs/static/img/databases/motherduck.png" alt="MotherDuck" width="40" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/oceanbase" title="OceanBase"><img src="docs/static/img/databases/oceanbase.svg" alt="OceanBase" width="175" height="24" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/oracle" title="Oracle"><img src="docs/static/img/databases/oraclelogo.png" alt="Oracle" width="111" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/presto" title="Presto"><img src="docs/static/img/databases/presto-og.png" alt="Presto" width="127" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/risingwave" title="RisingWave"><img src="docs/static/img/databases/risingwave.svg" alt="RisingWave" width="147" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/sap-hana" title="SAP HANA"><img src="docs/static/img/databases/sap-hana.png" alt="SAP HANA" width="137" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/sap-sybase" title="SAP Sybase"><img src="docs/static/img/databases/sybase.png" alt="SAP Sybase" width="100" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/shillelagh" title="Shillelagh"><img src="docs/static/img/databases/shillelagh.png" alt="Shillelagh" width="40" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/singlestore" title="SingleStore"><img src="docs/static/img/databases/singlestore.png" alt="SingleStore" width="150" height="31" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/snowflake" title="Snowflake"><img src="docs/static/img/databases/snowflake.svg" alt="Snowflake" width="76" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/sqlite" title="SQLite"><img src="docs/static/img/databases/sqlite.png" alt="SQLite" width="84" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/starrocks" title="StarRocks"><img src="docs/static/img/databases/starrocks.png" alt="StarRocks" width="149" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/superset-meta-database" title="Superset meta database"><img src="docs/static/img/databases/superset.svg" alt="Superset meta database" width="150" height="39" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/tdengine" title="TDengine"><img src="docs/static/img/databases/tdengine.png" alt="TDengine" width="140" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/teradata" title="Teradata"><img src="docs/static/img/databases/teradata.png" alt="Teradata" width="124" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/timescaledb" title="TimescaleDB"><img src="docs/static/img/databases/timescale.png" alt="TimescaleDB" width="150" height="36" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/trino" title="Trino"><img src="docs/static/img/databases/trino.png" alt="Trino" width="89" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/vertica" title="Vertica"><img src="docs/static/img/databases/vertica.png" alt="Vertica" width="128" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/ydb" title="YDB"><img src="docs/static/img/databases/ydb.svg" alt="YDB" width="110" height="40" /></a> &nbsp;
  <a href="https://superset.apache.org/docs/databases/supported/yugabytedb" title="YugabyteDB"><img src="docs/static/img/databases/yugabyte.png" alt="YugabyteDB" width="150" height="26" /></a>
</p>
<!-- SUPPORTED_DATABASES_END -->

**A MORE COMPREHENSIVE LIST OF SUPPORTED DATABASES** ALONG WITH THE CONFIGURATION INSTRUCTIONS CAN BE FOUND [HERE](https://superset.apache.org/docs/databases).

WANT TO ADD SUPPORT FOR YOUR DATASTORE OR DATA ENGINE? READ MORE [HERE](https://superset.apache.org/docs/frequently-asked-questions#does-superset-work-with-insert-database-engine-here) ABOUT THE TECHNICAL REQUIREMENTS.

## <u>INSTALLATION AND CONFIGURATION</u>

TRY OUT SUPERSET'S [QUICKSTART](https://superset.apache.org/docs/quickstart/) GUIDE OR LEARN ABOUT [THE OPTIONS FOR PRODUCTION DEPLOYMENTS](https://superset.apache.org/docs/installation/architecture/).

## <u>GET INVOLVED</u>

- ASK AND ANSWER QUESTIONS ON [STACKOVERFLOW](https://stackoverflow.com/questions/tagged/apache-superset) USING THE **APACHE-SUPERSET** TAG
- [JOIN OUR COMMUNITY'S SLACK](https://bit.ly/join-superset-slack)
  AND PLEASE READ OUR [SLACK COMMUNITY GUIDELINES](https://github.com/apache/superset/blob/master/CODE_OF_CONDUCT.md#slack-community-guidelines)
- [JOIN OUR dev@superset.apache.org MAILING LIST](https://lists.apache.org/list.html?dev@superset.apache.org). TO JOIN, SIMPLY SEND AN EMAIL TO [dev-subscribe@superset.apache.org](mailto:dev-subscribe@superset.apache.org)
- FOLLOW US ON SOCIAL MEDIA:
  [X](https://x.com/apachesuperset) |
  [LINKEDIN](https://www.linkedin.com/company/apache-superset) |
  [BLUESKY](https://bsky.app/profile/apachesuperset.bsky.social) |
  [REDDIT](https://reddit.com/r/apache-superset)
- IF YOU WANT TO HELP TROUBLESHOOT GITHUB ISSUES INVOLVING THE NUMEROUS DATABASE DRIVERS THAT SUPERSET SUPPORTS, PLEASE CONSIDER ADDING YOUR NAME AND THE DATABASES YOU HAVE ACCESS TO ON THE [SUPERSET DATABASE FAMILIARITY ROLODEX](https://docs.google.com/spreadsheets/d/1U1qxiLvOX0kBTUGME1AHHi6Ywel6ECF8xk_Qy-V9R8c/edit#gid=0)
- JOIN SUPERSET'S TOWN HALL AND [OPERATIONAL MODEL](https://preset.io/blog/the-superset-operational-model-wants-you/) RECURRING MEETINGS. MEETING INFO IS AVAILABLE ON THE [SUPERSET COMMUNITY CALENDAR](https://superset.apache.org/community)

## <u>CONTRIBUTOR GUIDE</u>

INTERESTED IN CONTRIBUTING? CHECK OUT OUR
[DEVELOPER GUIDE](https://superset.apache.org/developer-docs/)
TO FIND RESOURCES AROUND CONTRIBUTING ALONG WITH A DETAILED GUIDE ON
HOW TO SET UP A DEVELOPMENT ENVIRONMENT.

## <u>RESOURCES</u>

- [SUPERSET "IN THE WILD"](https://superset.apache.org/inTheWild) - SEE WHO'S USING SUPERSET, AND [ADD YOUR ORGANIZATION](https://github.com/apache/superset/edit/master/RESOURCES/INTHEWILD.yaml) TO THE LIST!
- [FEATURE FLAGS](https://superset.apache.org/docs/configuration/feature-flags) - THE STATUS OF SUPERSET'S FEATURE FLAGS.
- [STANDARD ROLES](https://github.com/apache/superset/blob/master/RESOURCES/STANDARD_ROLES.md) - HOW RBAC PERMISSIONS MAP TO ROLES.
- [SUPERSET WIKI](https://github.com/apache/superset/wiki) - TONS OF ADDITIONAL COMMUNITY RESOURCES: BEST PRACTICES, COMMUNITY CONTENT AND OTHER INFORMATION.
- [SUPERSET SIPS](https://github.com/orgs/apache/projects/170) - THE STATUS OF SUPERSET'S SIPS (SUPERSET IMPROVEMENT PROPOSALS) FOR BOTH CONSENSUS AND IMPLEMENTATION STATUS.

UNDERSTANDING THE SUPERSET POINTS OF VIEW

- [THE CASE FOR DATASET-CENTRIC VISUALIZATION](https://preset.io/blog/dataset-centric-visualization/)
- [UNDERSTANDING THE SUPERSET SEMANTIC LAYER](https://preset.io/blog/understanding-superset-semantic-layer/)

- GETTING STARTED WITH SUPERSET
  - [SUPERSET IN 2 MINUTES USING DOCKER COMPOSE](https://superset.apache.org/docs/installation/docker-compose#installing-superset-locally-using-docker-compose)
  - [INSTALLING DATABASE DRIVERS](https://superset.apache.org/docs/configuration/databases#installing-database-drivers)
  - [BUILDING NEW DATABASE CONNECTORS](https://preset.io/blog/building-database-connector/)
  - [CREATE YOUR FIRST DASHBOARD](https://superset.apache.org/docs/using-superset/creating-your-first-dashboard/)
  - [COMPREHENSIVE TUTORIAL FOR CONTRIBUTING CODE TO APACHE SUPERSET
    ](https://preset.io/blog/tutorial-contributing-code-to-apache-superset/)
- [RESOURCES TO MASTER SUPERSET BY PRESET](https://preset.io/resources/)

- DEPLOYING SUPERSET

  - [OFFICIAL DOCKER IMAGE](https://hub.docker.com/r/apache/superset)
  - [HELM CHART](https://github.com/apache/superset/tree/master/helm/superset)

- RECORDINGS OF PAST [SUPERSET COMMUNITY EVENTS](https://preset.io/events)

  - [MIXED TIME SERIES CHARTS](https://preset.io/events/mixed-time-series-visualization-in-superset-workshop/)
  - [HOW THE BING TEAM CUSTOMIZED SUPERSET FOR THE INTERNAL SELF-SERVE DATA & ANALYTICS PLATFORM](https://preset.io/events/how-the-bing-team-heavily-customized-superset-for-their-internal-data/)
  - [LIVE DEMO: VISUALIZING MONGODB AND PINOT DATA USING TRINO](https://preset.io/events/2021-04-13-visualizing-mongodb-and-pinot-data-using-trino/)
  - [INTRODUCTION TO THE SUPERSET API](https://preset.io/events/introduction-to-the-superset-api/)
  - [BUILDING A DATABASE CONNECTOR FOR SUPERSET](https://preset.io/events/2021-02-16-building-a-database-connector-for-superset/)

- VISUALIZATIONS

  - [CREATING VIZ PLUGINS](https://superset.apache.org/docs/contributing/creating-viz-plugins/)
  - [MANAGING AND DEPLOYING CUSTOM VIZ PLUGINS](https://medium.com/nmc-techblog/apache-superset-manage-custom-viz-plugins-in-production-9fde1a708e55)
  - [WHY APACHE SUPERSET IS BETTING ON APACHE ECHARTS](https://preset.io/blog/2021-4-1-why-echarts/)

- [SUPERSET API](https://superset.apache.org/docs/rest-api)

<!--
  The OSS Insight "Repo Activity" widget (https://next.ossinsight.io/) was
  intentionally removed. This README is rendered on the ASF-hosted website
  (superset.apache.org), so its contents are subject to ASF's third-party
  content and CSP rules. OSS Insight has no Data Processing Agreement (DPA)
  with the ASF, so we cannot embed its images/widgets here. Do not re-add it.
-->

<!-- telemetry/analytics pixel: -->
<img referrerpolicy="no-referrer-when-downgrade" src="https://static.scarf.sh/a.png?x-pxid=bc1c90cd-bc04-4e11-8c7b-289fb2839492" />
