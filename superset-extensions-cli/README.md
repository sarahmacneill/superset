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

# <u>APACHE-SUPERSET-EXTENSIONS-CLI</u>

[![PYPI VERSION](https://badge.fury.io/py/apache-superset-extensions-cli.svg)](https://badge.fury.io/py/apache-superset-extensions-cli)
[![LICENSE](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![PYTHON 3.11+](https://img.shields.io/badge/python-3.11+-blue.svg)](https://www.python.org/downloads/)

OFFICIAL COMMAND-LINE INTERFACE FOR BUILDING, BUNDLING, AND MANAGING APACHE SUPERSET EXTENSIONS. THIS CLI TOOL PROVIDES DEVELOPERS WITH EVERYTHING NEEDED TO CREATE, DEVELOP, AND PACKAGE EXTENSIONS FOR THE SUPERSET ECOSYSTEM.

## <u>🚀 FEATURES</u>

- **EXTENSION SCAFFOLDING** - GENERATE INITIAL FOLDER STRUCTURE AND SCAFFOLD NEW EXTENSION PROJECTS
- **VALIDATION** - VALIDATE EXTENSION STRUCTURE AND CONFIGURATION BEFORE BUILDING
- **DEVELOPMENT SERVER** - AUTOMATICALLY REBUILD EXTENSIONS AS FILES CHANGE DURING DEVELOPMENT
- **BUILD SYSTEM** - BUILD EXTENSION ASSETS FOR PRODUCTION DEPLOYMENT
- **BUNDLE PACKAGING** - PACKAGE EXTENSIONS INTO DISTRIBUTABLE .SUPX FILES

## <u>📦 INSTALLATION</u>

```bash
pip install apache-superset-extensions-cli
```

## <u>🛠️ QUICK START</u>

### <u>AVAILABLE COMMANDS</u>

```bash
# Scaffold a new extension project (interactive prompts, or pass options directly)
superset-extensions init [--publisher <publisher>] [--name <name>] [--display-name <name>]
                         [--version <version>] [--license <license>]
                         [--frontend/--no-frontend] [--backend/--no-backend]

# Validate extension structure and configuration
superset-extensions validate

# Build extension assets for production (runs validate first)
superset-extensions build

# Package extension into a distributable .supx file (runs build first)
superset-extensions bundle [--output/-o <path>]

# Automatically rebuild extension as files change during development
superset-extensions dev
```

IF A FRONTEND BUILD FAILS, `build` AND `bundle` EXIT NON-ZERO WITHOUT WRITING
A NEW MANIFEST OR BUNDLE. AN EXISTING BUNDLE IS NOT REMOVED; CALLERS MUST CHECK
THE EXIT STATUS BEFORE USING IT. IN `dev` MODE, FAILED FRONTEND REBUILDS ARE
REPORTED AND THE WATCHER REMAINS AVAILABLE FOR SUBSEQUENT CHANGES.

## <u>📋 EXTENSION STRUCTURE</u>

THE CLI SCAFFOLDS EXTENSIONS WITH THE FOLLOWING STRUCTURE:

```
{publisher}.{name}/             # e.g., my-org.dashboard-widgets/
├── extension.json              # Extension configuration and metadata
├── .gitignore
├── frontend/                   # Optional frontend code
│   ├── src/
│   │   └── index.tsx           # Frontend entry point
│   ├── package.json
│   ├── webpack.config.js
│   └── tsconfig.json
└── backend/                    # Optional backend code
    ├── src/
    │   └── {publisher}/        # e.g., my_org/
    │       └── {name}/         # e.g., dashboard_widgets/
    │           └── entrypoint.py
    └── pyproject.toml
```

## <u>📄 LICENSE</u>

LICENSED UNDER THE APACHE LICENSE, VERSION 2.0. SEE [LICENSE](https://github.com/apache/superset/blob/master/LICENSE.txt) FOR DETAILS.

## <u>🔗 LINKS</u>

- [COMMUNITY](https://superset.apache.org/community/)
- [GITHUB REPOSITORY](https://github.com/apache/superset)
- [EXTENSIONS DOCUMENTATION](https://superset.apache.org/developer-docs/extensions/overview)
