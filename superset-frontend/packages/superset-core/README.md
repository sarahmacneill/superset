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

# @APACHE-SUPERSET/CORE

[![NPM VERSION](https://badge.fury.io/js/%40apache-superset%2Fcore.svg)](https://badge.fury.io/js/%40apache-superset%2Fcore)
[![LICENSE](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

THE OFFICIAL CORE PACKAGE FOR BUILDING APACHE SUPERSET EXTENSIONS AND INTEGRATIONS. THIS PACKAGE PROVIDES ESSENTIAL BUILDING BLOCKS INCLUDING SHARED UI COMPONENTS, UTILITY FUNCTIONS, APIS, AND TYPE DEFINITIONS FOR BOTH THE HOST APPLICATION AND EXTENSIONS.

## 📦 INSTALLATION

```bash
npm install @apache-superset/core
```

## 🏗️ PACKAGE STRUCTURE

THE SOURCE IS ORGANIZED INTO FOCUSED NAMESPACES, EACH IN ITS OWN DIRECTORY:

```
src/
├── authentication/
├── commands/
├── common/
├── components/
├── contributions/
├── editors/
├── extensions/
├── menus/
├── sqlLab/
├── storage/
├── theme/
├── translation/
├── utils/
├── views/
└── index.ts
```

## 🚀 QUICK START

FRONTEND CONTRIBUTIONS ARE REGISTERED AS MODULE-LEVEL SIDE EFFECTS FROM YOUR EXTENSION'S ENTRY POINT.

### VIEWS

ADD CUSTOM PANELS OR UI COMPONENTS AT SPECIFIC LOCATIONS IN THE APPLICATION:

```tsx
import { views } from '@apache-superset/core';
import MyPanel from './MyPanel';

views.registerView(
  { id: 'my-extension.main', name: 'My Panel Name' },
  'sqllab.panels',
  () => <MyPanel />,
);
```

### COMMANDS

DEFINE NAMED ACTIONS THAT CAN BE TRIGGERED FROM MENUS, KEYBOARD SHORTCUTS, OR CODE:

```typescript
import { commands } from '@apache-superset/core';

commands.registerCommand(
  {
    id: 'my-extension.copy-query',
    title: 'Copy Query',
    icon: 'CopyOutlined',
    description: 'Copy the current query to clipboard',
  },
  () => {
    /* implementation */
  },
);
```

### MENUS

ATTACH COMMANDS TO PRIMARY, SECONDARY, OR CONTEXT MENUS AT A GIVEN LOCATION:

```typescript
import { menus } from '@apache-superset/core';

menus.registerMenuItem(
  { view: 'sqllab.editor', command: 'my-extension.copy-query' },
  'sqllab.editor',
  'primary',
);
```

### EDITORS

REPLACE THE DEFAULT TEXT EDITOR FOR ONE OR MORE LANGUAGES:

```typescript
import { editors } from '@apache-superset/core';
import MonacoSQLEditor from './MonacoSQLEditor';

editors.registerEditor(
  {
    id: 'my-extension.monaco-sql',
    name: 'Monaco SQL Editor',
    languages: ['sql'],
  },
  MonacoSQLEditor,
);
```

## 📄 LICENSE

LICENSED UNDER THE APACHE LICENSE, VERSION 2.0. SEE [LICENSE](https://github.com/apache/superset/blob/master/LICENSE.txt) FOR DETAILS.

## 🔗 LINKS

- [COMMUNITY](https://superset.apache.org/community/)
- [GITHUB REPOSITORY](https://github.com/apache/superset)
- [EXTENSIONS DOCUMENTATION](https://superset.apache.org/developer-docs/extensions/overview)
