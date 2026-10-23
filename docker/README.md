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

# GETTING STARTED WITH SUPERSET USING DOCKER

DOCKER IS AN EASY WAY TO GET STARTED WITH SUPERSET.

## PREREQUISITES

1. [DOCKER](https://www.docker.com/get-started)
2. [DOCKER COMPOSE](https://docs.docker.com/compose/install/)

## CONFIGURATION

THE `/app/pythonpath` FOLDER IS MOUNTED FROM [`./docker/pythonpath_dev`](./pythonpath_dev)
WHICH CONTAINS A BASE CONFIGURATION [`./docker/pythonpath_dev/superset_config.py`](./pythonpath_dev/superset_config.py)
INTENDED FOR USE WITH LOCAL DEVELOPMENT.

### LOCAL OVERRIDES

#### ENVIRONMENT VARIABLES

TO OVERRIDE ENVIRONMENT VARIABLES LOCALLY, CREATE A `./docker/.env-local` FILE (GIT-IGNORED). THIS FILE WILL BE LOADED AFTER `.env` AND CAN OVERRIDE ANY SETTINGS.

#### PYTHON CONFIGURATION

IN ORDER TO OVERRIDE CONFIGURATION SETTINGS LOCALLY, SIMPLY MAKE A COPY OF [`./docker/pythonpath_dev/superset_config_local.example`](./pythonpath_dev/superset_config_local.example)
INTO `./docker/pythonpath_dev/superset_config_docker.py` (GIT-IGNORED) AND FILL IN YOUR OVERRIDES.

#### WEBSOCKET CONFIGURATION

TO CUSTOMIZE THE WEBSOCKET SERVER CONFIGURATION, CREATE `./docker/superset-websocket/config.json` (GIT-IGNORED) BASED ON [`./docker/superset-websocket/config.example.json`](./superset-websocket/config.example.json).

THEN UPDATE THE `superset-websocket`.`volumes` CONFIG TO MOUNT IT.

#### DOCKER COMPOSE OVERRIDES

FOR ADVANCED DOCKER COMPOSE CUSTOMIZATION, CREATE A `docker-compose-override.yml` FILE (GIT-IGNORED) TO OVERRIDE OR EXTEND SERVICES WITHOUT MODIFYING THE MAIN COMPOSE FILE.

### LOCAL PACKAGES

IF YOU WANT TO ADD PYTHON PACKAGES IN ORDER TO TEST THINGS LIKE DATABASES LOCALLY, YOU CAN SIMPLY ADD A LOCAL REQUIREMENTS.TXT (`./docker/requirements-local.txt`)
AND REBUILD YOUR DOCKER STACK.

STEPS:

1. CREATE `./docker/requirements-local.txt`
2. ADD YOUR NEW PACKAGES
3. REBUILD DOCKER COMPOSE
    1. `docker compose down -v`
    2. `docker compose up`

## INITIALIZING DATABASE

THE DATABASE WILL INITIALIZE ITSELF UPON STARTUP VIA THE INIT CONTAINER ([`superset-init`](./docker-init.sh)). THIS MAY TAKE A MINUTE.

## NORMAL OPERATION

TO RUN THE CONTAINER, SIMPLY RUN: `docker compose up`

AFTER WAITING SEVERAL MINUTES FOR SUPERSET INITIALIZATION TO FINISH, YOU CAN OPEN A BROWSER AND VIEW [`http://localhost:8088`](http://localhost:8088)
TO START YOUR JOURNEY.

### RUNNING MULTIPLE INSTANCES

IF YOU NEED TO RUN MULTIPLE SUPERSET INSTANCES SIMULTANEOUSLY (E.G., DIFFERENT BRANCHES OR CLONES), USE THE MAKE TARGETS WHICH AUTOMATICALLY FIND AVAILABLE PORTS:

```bash
make up
```

THIS AUTOMATICALLY:
- GENERATES A UNIQUE PROJECT NAME FROM YOUR DIRECTORY
- FINDS AVAILABLE PORTS (INCREMENTING FROM DEFAULTS IF IN USE)
- DISPLAYS THE ASSIGNED URLS BEFORE STARTING

AVAILABLE COMMANDS (RUN FROM REPO ROOT):

| COMMAND | DESCRIPTION |
|---------|-------------|
| `make up` | START SERVICES (FOREGROUND) |
| `make up-detached` | START SERVICES (BACKGROUND) |
| `make down` | STOP ALL SERVICES |
| `make ps` | SHOW RUNNING CONTAINERS |
| `make logs` | FOLLOW CONTAINER LOGS |
| `make nuke` | STOP, REMOVE VOLUMES & LOCAL IMAGES |

FROM A SUBDIRECTORY, USE: `make -C $(git rev-parse --show-toplevel) up`

**IMPORTANT**: ALWAYS USE THESE COMMANDS INSTEAD OF PLAIN `docker compose down`, WHICH WON'T KNOW THE CORRECT PROJECT NAME.

## DEVELOPING

WHILE RUNNING, THE CONTAINER SERVER WILL RELOAD ON MODIFICATION OF THE SUPERSET PYTHON AND JAVASCRIPT SOURCE CODE.
DON'T FORGET TO RELOAD THE PAGE TO TAKE THE NEW FRONTEND INTO ACCOUNT THOUGH.

## PRODUCTION

IT IS POSSIBLE TO RUN SUPERSET IN NON-DEVELOPMENT MODE BY USING [`docker-compose-non-dev.yml`](../docker-compose-non-dev.yml). THIS FILE EXCLUDES THE VOLUMES NEEDED FOR DEVELOPMENT.

## RESOURCE CONSTRAINTS

IF YOU ARE ATTEMPTING TO BUILD ON MACOS AND IT EXITS WITH 137 YOU NEED TO INCREASE YOUR DOCKER RESOURCES. SEE INSTRUCTIONS [HERE](https://docs.docker.com/docker-for-mac/#advanced) (SEARCH FOR MEMORY)
