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

# <u>LICENSED TO THE APACHE SOFTWARE FOUNDATION (ASF) UNDER ONE</u>

# <u>OR MORE CONTRIBUTOR LICENSE AGREEMENTS. SEE THE NOTICE FILE</u>

# <u>DISTRIBUTED WITH THIS WORK FOR ADDITIONAL INFORMATION</u>

# <u>REGARDING COPYRIGHT OWNERSHIP. THE ASF LICENSES THIS FILE</u>

# <u>TO YOU UNDER THE APACHE LICENSE, VERSION 2.0 (THE</u>

# <u>"LICENSE"); YOU MAY NOT USE THIS FILE EXCEPT IN COMPLIANCE</u>

# <u>WITH THE LICENSE. YOU MAY OBTAIN A COPY OF THE LICENSE AT</u>

#

# <u>http://www.apache.org/licenses/LICENSE-2.0</u>

#

# <u>UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING,</u>

# <u>SOFTWARE DISTRIBUTED UNDER THE LICENSE IS DISTRIBUTED ON AN</u>

# <u>"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY</u>

# <u>KIND, EITHER EXPRESS OR IMPLIED. SEE THE LICENSE FOR THE</u>

# <u>SPECIFIC LANGUAGE GOVERNING PERMISSIONS AND LIMITATIONS</u>

# <u>UNDER THE LICENSE.</u>

# <u>SUPERSET CLI TESTS</u>

THIS DIRECTORY CONTAINS TESTS FOR THE SUPERSET-EXTENSIONS-CLI PACKAGE, FOCUSING ON THE `init` COMMAND AND OTHER CLI FUNCTIONALITY.

## <u>TEST STRUCTURE</u>

### <u>CORE TEST FILES</u>

- **`test_cli_init.py`**: COMPREHENSIVE TESTS FOR THE `init` COMMAND SCAFFOLDER
- **`test_templates.py`**: UNIT TESTS FOR JINJA2 TEMPLATE RENDERING
- **`conftest.py`**: PYTEST FIXTURES AND CONFIGURATION
- **`utils.py`**: REUSABLE TESTING UTILITIES AND HELPERS

### <u>TEST CATEGORIES</u>

#### <u>UNIT TESTS (`@pytest.mark.unit`)</u>

- TEMPLATE RENDERING FUNCTIONALITY
- INDIVIDUAL FUNCTION TESTING
- INPUT VALIDATION LOGIC

#### <u>INTEGRATION TESTS (`@pytest.mark.integration`)</u>

- COMPLETE CLI COMMAND WORKFLOWS
- END-TO-END SCAFFOLDING PROCESSES

#### <u>CLI TESTS (`@pytest.mark.cli`)</u>

- CLICK COMMAND INTERFACE TESTING
- USER INPUT SIMULATION
- COMMAND OUTPUT VERIFICATION

## <u>TESTING APPROACH FOR SCAFFOLDERS/GENERATORS</u>

THE TESTS USE THESE PATTERNS FOR TESTING CODE GENERATORS:

### <u>1. ISOLATED ENVIRONMENT TESTING</u>

```python
@pytest.fixture
def isolated_filesystem(tmp_path):
    """Provide isolated temporary directory for each test."""
```

### <u>2. CLICK CLI TESTING FRAMEWORK</u>

```python
from click.testing import CliRunner
runner = CliRunner()
result = runner.invoke(app, ["init"], input="...")
```

### <u>3. FILE STRUCTURE VALIDATION</u>

```python
from tests.utils import assert_file_structure, assert_directory_structure
assert_file_structure(extension_path, expected_files)
```

### <u>4. TEMPLATE CONTENT VERIFICATION</u>

```python
from tests.utils import assert_json_content
assert_json_content(json_path, {"name": "expected_value"})
```

### <u>5. PARAMETRIZED TESTING</u>

```python
@pytest.mark.parametrize("include_frontend,include_backend", [
    (True, True), (True, False), (False, True), (False, False)
])
```

## <u>KEY TEST CASES</u>

### <u>INIT COMMAND TESTS</u>

- ✅ CREATES EXTENSION WITH BOTH FRONTEND AND BACKEND
- ✅ CREATES FRONTEND-ONLY EXTENSIONS
- ✅ CREATES BACKEND-ONLY EXTENSIONS
- ✅ VALIDATES EXTENSION NAMING (ALPHANUMERIC + UNDERSCORE ONLY)
- ✅ HANDLES EXISTING DIRECTORY CONFLICTS
- ✅ VERIFIES GENERATED FILE CONTENT ACCURACY
- ✅ TESTS CUSTOM VERSION AND LICENSE INPUTS
- ✅ INTEGRATION TEST FOR COMPLETE WORKFLOW

### <u>TEMPLATE RENDERING TESTS</u>

- ✅ EXTENSION.JSON TEMPLATE WITH VARIOUS CONFIGURATIONS
- ✅ PACKAGE.JSON TEMPLATE RENDERING
- ✅ PYPROJECT.TOML TEMPLATE RENDERING
- ✅ TEMPLATE VALIDATION WITH DIFFERENT NAMES/VERSIONS/LICENSES
- ✅ JSON VALIDITY VERIFICATION
- ✅ WHITESPACE AND FORMATTING CHECKS

## <u>RUNNING TESTS</u>

### <u>ALL TESTS</u>

```bash
pytest
```

### <u>SPECIFIC TEST CATEGORIES</u>

```bash
pytest -m unit          # Unit tests only
pytest -m integration   # Integration tests only
pytest -m cli           # CLI tests only
```

### <u>WITH COVERAGE</u>

```bash
pytest --cov=superset_extensions_cli --cov-report=html
```

### <u>SPECIFIC TEST FILES</u>

```bash
pytest tests/test_cli_init.py
pytest tests/test_templates.py
```

## <u>REUSABLE TESTING INFRASTRUCTURE</u>

THE TESTING INFRASTRUCTURE IS DESIGNED FOR REUSABILITY:

### <u>TEST UTILITIES (`tests/utils.py`)</u>

- `assert_file_exists()` / `assert_directory_exists()`
- `assert_file_structure()` / `assert_directory_structure()`
- `assert_json_content()` / `load_json_file()`
- `create_test_extension_structure()` - HELPER FOR EXPECTED STRUCTURES

### <u>FIXTURES (`tests/conftest.py`)</u>

- `cli_runner` - CLICK CLI RUNNER
- `isolated_filesystem` - TEMPORARY DIRECTORY WITH CLEANUP
- `extension_params` - DEFAULT EXTENSION PARAMETERS
- `cli_input_*` - PRE-CONFIGURED USER INPUTS

THIS INFRASTRUCTURE CAN BE EASILY EXTENDED FOR TESTING ADDITIONAL CLI COMMANDS LIKE `build`, `bundle`, `dev`, AND `validate`.

## <u>BEST PRACTICES IMPLEMENTED</u>

1. **ISOLATION**: EACH TEST RUNS IN ITS OWN TEMPORARY DIRECTORY
2. **COMPREHENSIVE COVERAGE**: TESTS COVER HAPPY PATHS, EDGE CASES, AND ERROR CONDITIONS
3. **REALISTIC TESTING**: USES ACTUAL CLICK CLI RUNNER WITH REALISTIC USER INPUT
4. **CONTENT VERIFICATION**: VALIDATES BOTH FILE EXISTENCE AND CONTENT ACCURACY
5. **TEMPLATE TESTING**: SEPARATES TEMPLATE RENDERING LOGIC FROM CLI INTEGRATION
6. **REUSABLE COMPONENTS**: UTILITIES AND FIXTURES DESIGNED FOR EXTENSION
7. **CLEAR DOCUMENTATION**: WELL-DOCUMENTED TEST CASES AND HELPER FUNCTIONS
8. **TYPE SAFETY**: USES MODERN PYTHON TYPE ANNOTATIONS WITH `from __future__ import annotations`
