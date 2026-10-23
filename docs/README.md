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

THIS IS THE PUBLIC DOCUMENTATION SITE FOR SUPERSET, BUILT USING
[DOCUSAURUS 3](https://docusaurus.io/). SEE THE
[DEVELOPER DOCS](https://superset.apache.org/developer-docs/contributing/development-setup#documentation)
FOR DOCUMENTATION ON CONTRIBUTING TO DOCUMENTATION.

## <u>VERSION MANAGEMENT</u>

THE SUPERSET DOCUMENTATION SITE USES DOCUSAURUS VERSIONING WITH FOUR INDEPENDENT SECTIONS:

- **USER DOCUMENTATION** (`/user-docs/`) - END-USER GUIDES AND TUTORIALS
- **ADMIN DOCUMENTATION** (`/admin-docs/`) - INSTALLATION, CONFIGURATION, AND SECURITY
- **DEVELOPER DOCS** (`/developer-docs/`) - DEVELOPER GUIDES, CONTRIBUTING, AND EXTENSIONS
- **COMPONENT PLAYGROUND** (`/components/`) - INTERACTIVE COMPONENT EXAMPLES (CURRENTLY DISABLED)

EACH SECTION MAINTAINS ITS OWN VERSION HISTORY AND CAN BE VERSIONED INDEPENDENTLY.

### <u>CREATING A NEW VERSION</u>

TO CREATE A NEW VERSION FOR ANY SECTION, USE THE DOCUSAURUS VERSION COMMAND WITH THE APPROPRIATE PLUGIN ID OR USE OUR AUTOMATED SCRIPTS:

#### <u>BEFORE YOU CUT</u>

THE CUT SNAPSHOTS WHATEVER'S ON DISK INTO A FROZEN HISTORICAL VERSION, INCLUDING AUTO-GENERATED CONTENT (DATABASE PAGES FROM `superset/db_engine_specs/`, API REFERENCE FROM `static/resources/openapi.json`, COMPONENT PAGES FROM STORYBOOK STORIES). THE CUT SCRIPT REFRESHES THESE VIA `generate:smart` BEFORE SNAPSHOTTING, BUT THE **`databases.json` DIAGNOSTICS FILE** NEEDS SPECIAL CARE TO CAPTURE FULL DETAIL:

1. **CANONICAL RELEASE CUT**: DOWNLOAD THE `database-diagnostics` ARTIFACT FROM A GREEN `Python-Integration` RUN ON MASTER, PLACE IT AT `docs/src/data/databases.json`, THEN RUN THE CUT SCRIPT WITH `--skip-generate` TO PRESERVE IT. THIS IS WHAT THE PRODUCTION DEPLOY USES AND INCLUDES FULL FLASK-CONTEXT DIAGNOSTICS (DRIVER VERSIONS, FEATURE SUPPORT MATRIX, ETC.).
2. **LOCAL DEV CUT**: JUST RUN THE SCRIPT NORMALLY. `generate:smart` WILL REGENERATE `databases.json` USING YOUR LOCAL FLASK ENVIRONMENT — ACCURATE TO WHATEVER DRIVERS/EXTRAS YOU HAVE INSTALLED, BUT TYPICALLY LESS COMPLETE THAN THE CI ARTIFACT.
3. **NO FLASK AVAILABLE**: ALSO FINE — THE DATABASE GENERATOR FALLS BACK TO AST PARSING OF ENGINE SPEC FILES. THE MDX PAGES ARE STILL CORRECT; ONLY THE DIAGNOSTICS JSON IS LEANER.

ALSO: CONFIRM `master` CI IS GREEN, AND THAT YOUR LOCAL CHECKOUT MATCHES THE SHA YOU INTEND TO CUT FROM.

#### <u>USING AUTOMATED SCRIPTS (REQUIRED)</u>

**⚠️ IMPORTANT:** ALWAYS USE THESE CUSTOM COMMANDS INSTEAD OF THE NATIVE DOCUSAURUS COMMANDS. THESE SCRIPTS ENSURE THAT BOTH THE DOCUSAURUS VERSIONING SYSTEM AND THE `versions-config.json` FILE ARE UPDATED CORRECTLY, AND THAT AUTO-GENERATED CONTENT IS REFRESHED BEFORE SNAPSHOTTING.

```bash
# Main Documentation
yarn version:add:user_docs 1.2.0

# Admin Docs
yarn version:add:admin_docs 1.2.0

# Developer Docs
yarn version:add:developer_docs 1.2.0

# Component Playground
yarn version:add:components 1.2.0
```

WHAT THE SCRIPT DOES:

1. REFRESHES AUTO-GENERATED CONTENT VIA `generate:smart` (DATABASE PAGES, API REFERENCE, COMPONENT PAGES).
2. CALLS `yarn docusaurus docs:version` (OR THE PER-SECTION EQUIVALENT) TO SNAPSHOT THE SECTION.
3. FREEZES ANY DATA-FILE IMPORTS (`@site/static/*.json`, `../../data/*.json`) INTO A SNAPSHOT-LOCAL `_versioned_data/` DIR SO THE HISTORICAL VERSION DOESN'T SILENTLY MUTATE WHEN THE SOURCE FILES CHANGE.
4. ADJUSTS RELATIVE IMPORT PATHS (`../../src/...` → `../../../src/...`) FOR FILES NOW ONE DIRECTORY DEEPER.
5. UPDATES `versions-config.json` AND `<section>_versions.json`.

**DO NOT USE** THE NATIVE DOCUSAURUS COMMANDS DIRECTLY (`yarn docusaurus docs:version`), AS THEY WILL:

- ❌ CREATE VERSION FILES BUT NOT UPDATE `versions-config.json`
- ❌ SKIP AUTO-GEN REFRESH, FREEZING WHATEVER WAS ON DISK
- ❌ SKIP DATA-IMPORT FREEZING, LEAVING THE SNAPSHOT POINTED AT LIVE DATA
- ❌ CAUSE VERSIONS TO NOT APPEAR IN DROPDOWN MENUS
- ❌ REQUIRE MANUAL FIXES TO SYNCHRONIZE THE CONFIGURATION

### <u>MANAGING VERSIONS</u>

#### <u>WITH AUTOMATED SCRIPTS</u>

THE AUTOMATED SCRIPTS HANDLE ALL CONFIGURATION UPDATES AUTOMATICALLY. NO MANUAL EDITING REQUIRED!

#### <u>MANUAL CONFIGURATION</u>

IF CREATING VERSIONS MANUALLY, YOU'LL NEED TO:

1. **UPDATE `versions-config.json`** (OR `docusaurus.config.ts` IF NOT USING DYNAMIC CONFIG):
   - ADD VERSION TO `onlyIncludeVersions` ARRAY
   - ADD VERSION METADATA TO `versions` OBJECT
   - UPDATE `lastVersion` IF NEEDED

2. **FILES CREATED BY VERSIONING**:
   WHEN A NEW VERSION IS CREATED, DOCUSAURUS GENERATES:
   - **VERSIONED DOCS FOLDER**: `[section]_versioned_docs/version-X.X.X/`
   - **VERSIONED SIDEBARS**: `[section]_versioned_sidebars/version-X.X.X-sidebars.json`
   - **VERSIONS LIST**: `[section]_versions.json`

   ALL FOUR SECTIONS (`user_docs`, `admin_docs`, `developer_docs`, `components`) FOLLOW THIS NAMING PATTERN UNIFORMLY.

3. **IMPORTANT**: AFTER ADDING A VERSION, RESTART THE DEVELOPMENT SERVER TO SEE CHANGES:
   ```bash
   yarn stop
   yarn start
   ```

### <u>REMOVING A VERSION</u>

#### <u>USING AUTOMATED SCRIPTS (RECOMMENDED)</u>

```bash
# Main Documentation
yarn version:remove:user_docs 1.0.0

# Admin Docs
yarn version:remove:admin_docs 1.0.0

# Developer Docs
yarn version:remove:developer_docs 1.0.0

# Component Playground
yarn version:remove:components 1.0.0
```

#### <u>MANUAL REMOVAL</u>

TO MANUALLY REMOVE A VERSION:

1. **DELETE THE VERSION FOLDER** FROM THE APPROPRIATE LOCATION:
   - USER DOCS: `user_docs_versioned_docs/version-X.X.X/`
   - ADMIN DOCS: `admin_docs_versioned_docs/version-X.X.X/`
   - DEVELOPER DOCS: `developer_docs_versioned_docs/version-X.X.X/`
   - COMPONENTS: `components_versioned_docs/version-X.X.X/`

2. **DELETE THE VERSION METADATA FILE**:
   - USER DOCS: `user_docs_versioned_sidebars/version-X.X.X-sidebars.json`
   - ADMIN DOCS: `admin_docs_versioned_sidebars/version-X.X.X-sidebars.json`
   - DEVELOPER DOCS: `developer_docs_versioned_sidebars/version-X.X.X-sidebars.json`
   - COMPONENTS: `components_versioned_sidebars/version-X.X.X-sidebars.json`

3. **UPDATE THE VERSIONS LIST FILE**:
   - USER DOCS: `user_docs_versions.json`
   - ADMIN DOCS: `admin_docs_versions.json`
   - DEVELOPER DOCS: `developer_docs_versions.json`
   - COMPONENTS: `components_versions.json`

4. **UPDATE CONFIGURATION**:
   - IF USING DYNAMIC CONFIG: UPDATE `versions-config.json`
   - IF USING STATIC CONFIG: UPDATE `docusaurus.config.ts`

5. **RESTART THE SERVER** TO SEE CHANGES

### <u>VERSION CONFIGURATION EXAMPLES</u>

#### <u>MAIN DOCUMENTATION (DEFAULT PLUGIN)</u>

```typescript
docs: {
  includeCurrentVersion: true,
  lastVersion: 'current',  // Makes /docs/ show Next version
  onlyIncludeVersions: ['current', '1.1.0', '1.0.0'],
  versions: {
    current: {
      label: 'Next',
      path: '',  // Empty path for default routing
      banner: 'unreleased',
    },
    '1.1.0': {
      label: '1.1.0',
      path: '1.1.0',
      banner: 'none',
    },
  },
}
```

#### <u>DEVELOPER DOCS & COMPONENTS (CUSTOM PLUGINS)</u>

```typescript
{
  id: 'developer_docs',
  path: 'developer_docs',
  routeBasePath: 'developer-docs',
  includeCurrentVersion: true,
  lastVersion: '1.1.0',  // Default version
  onlyIncludeVersions: ['current', '1.1.0', '1.0.0'],
  versions: {
    current: {
      label: 'Next',
      path: 'next',
      banner: 'unreleased',
    },
    '1.1.0': {
      label: '1.1.0',
      path: '1.1.0',
      banner: 'none',
    },
  },
}
```

### <u>BEST PRACTICES</u>

1. **VERSION NAMING**: USE SEMANTIC VERSIONING (E.G., 1.0.0, 1.1.0, 2.0.0)
2. **VERSION BANNERS**: USE `'unreleased'` FOR DEVELOPMENT VERSIONS, `'none'` FOR STABLE RELEASES
3. **LIMIT DISPLAYED VERSIONS**: USE `onlyIncludeVersions` TO SHOW ONLY RELEVANT VERSIONS
4. **TEST LOCALLY**: ALWAYS TEST VERSION CHANGES LOCALLY BEFORE DEPLOYING
5. **INDEPENDENT VERSIONING**: EACH SECTION CAN HAVE DIFFERENT VERSION NUMBERS AND RELEASE CYCLES

### <u>TROUBLESHOOTING</u>

#### <u>VERSION NOT SHOWING AFTER CREATION</u>

IF YOU ACCIDENTALLY USED `yarn docusaurus docs:version` INSTEAD OF `yarn version:add`:

1. **PROBLEM**: THE VERSION FILES WERE CREATED BUT `versions-config.json` WASN'T UPDATED
2. **SOLUTION**: EITHER:
   - REVERT THE CHANGES: `git restore user_docs_versions.json && rm -rf user_docs_versioned_docs/ user_docs_versioned_sidebars/`
   - THEN USE THE CORRECT COMMAND: `yarn version:add:user_docs <version>`

FOR OTHER ISSUES:

- **RESTART THE SERVER**: CHANGES TO VERSION CONFIGURATION REQUIRE A SERVER RESTART
- **CHECK CONFIG FILE**: ENSURE `versions-config.json` INCLUDES THE NEW VERSION
- **VERIFY FILES EXIST**: CHECK THAT VERSIONED DOCS FOLDER WAS CREATED

#### <u>BROKEN LINKS IN VERSIONED DOCUMENTATION</u>

WHEN CREATING A NEW VERSION, LINKS IN THE DOCUMENTATION ARE PRESERVED AS-IS. COMMON ISSUES:

- **CROSS-SECTION LINKS**: LINKS BETWEEN SECTIONS (E.G., FROM DEVELOPER_DOCS TO DOCS) NEED TO BE VERSION-AWARE
- **ABSOLUTE VS RELATIVE PATHS**: USE RELATIVE PATHS WITHIN THE SAME SECTION
- **VERSION-SPECIFIC URLS**: UPDATE HARDCODED URLS TO USE VERSION VARIABLES

TO FIX BROKEN LINKS:

1. USE `type: 'doc'` WITH `docId` FOR VERSION-AWARE NAVIGATION IN NAVBAR
2. USE RELATIVE PATHS WITHIN THE SAME DOCUMENTATION SECTION
3. TEST ALL VERSIONS AFTER CREATION TO IDENTIFY BROKEN LINKS
