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

# SUPERSET MCP SERVICE

> **WHAT IS THIS?** THE MCP SERVICE ALLOWS AN AI AGENT TO DIRECTLY INTERACT WITH APACHE SUPERSET, ENABLING NATURAL LANGUAGE QUERIES AND COMMANDS FOR DATA VISUALIZATION.

> **HOW DOES IT WORK?** THIS SERVICE IS PART OF THE APACHE SUPERSET CODEBASE. YOU NEED TO:
> 1. HAVE APACHE SUPERSET INSTALLED AND RUNNING
> 2. CONNECT AN AGENT SUCH AS CLAUDE DESKTOP TO YOUR SUPERSET INSTANCE USING THIS MCP SERVICE
> 3. THEN CLAUDE CAN CREATE CHARTS, QUERY DATA, AND MANAGE DASHBOARDS

THE SUPERSET MODEL CONTEXT PROTOCOL (MCP) SERVICE PROVIDES A MODULAR, SCHEMA-DRIVEN INTERFACE FOR PROGRAMMATIC ACCESS TO SUPERSET DASHBOARDS, CHARTS, DATASETS, AND INSTANCE METADATA. IT IS DESIGNED FOR LLM AGENTS AND AUTOMATION TOOLS, AND IS BUILT ON THE FASTMCP PROTOCOL.

## 🚀 QUICKSTART

### OPTION 1: DOCKER SETUP (RECOMMENDED) 🎯

THE FASTEST WAY TO GET EVERYTHING RUNNING WITH DOCKER:

**PREREQUISITES:** DOCKER AND DOCKER COMPOSE INSTALLED

```bash
# 1. Clone the repository
git clone https://github.com/apache/superset.git
cd superset

# 2. Start Superset and MCP service with docker-compose-light
docker-compose -f docker-compose-light.yml --profile mcp build
docker-compose -f docker-compose-light.yml --profile mcp up -d

# 3. Initialize Superset (first time only)
docker exec -it superset-superset-light-1 superset fab create-admin \
  --username admin \
  --firstname Admin \
  --lastname Admin \
  --email admin@localhost \
  --password admin

docker exec -it superset-superset-light-1 superset db upgrade
docker exec -it superset-superset-light-1 superset init
```

**THAT'S IT!** ✨
- SUPERSET FRONTEND IS RUNNING AT http://localhost:9001 (LOGIN: ADMIN/ADMIN)
- MCP SERVICE IS RUNNING ON PORT 5008
- NOW CONFIGURE CLAUDE DESKTOP (SEE STEP 2 BELOW)

#### WHAT DOCKER COMPOSE DOES:
- SETS UP POSTGRESQL DATABASE
- BUILDS AND RUNS SUPERSET CONTAINERS
- STARTS THE MCP SERVICE (WITH `--profile mcp`)
- HANDLES ALL NETWORKING AND DEPENDENCIES
- PROVIDES HOT-RELOAD FOR DEVELOPMENT

#### CUSTOMIZING PORTS:
```bash
# Use different ports if defaults are in use
NODE_PORT=9002 MCP_PORT=5009 docker-compose -f docker-compose-light.yml --profile mcp up -d
```

### OPTION 2: MANUAL SETUP

IF DOCKER IS NOT AVAILABLE, YOU CAN SET UP MANUALLY:

```bash
# 1. Clone the repository
git clone https://github.com/apache/superset.git
cd superset

# 2. Set up Python environment (Python 3.11 or 3.12 required)
python3 -m venv venv
source venv/bin/activate

# 3. Install dependencies
pip install -e .[development,fastmcp]
cd superset-frontend && npm ci && npm run build && cd ..

# 4. Configure Superset manually
# Create superset_config.py in your current directory:
cat > superset_config.py << 'EOF'
# Apache Superset Configuration
SECRET_KEY = '<your secret here - hint: `secrets.token_urlsafe(42)`>'

# Session configuration for local development
SESSION_COOKIE_HTTPONLY = True
SESSION_COOKIE_SECURE = False
SESSION_COOKIE_SAMESITE = 'Lax'
SESSION_COOKIE_NAME = 'superset_session'
PERMANENT_SESSION_LIFETIME = 86400

# CSRF Protection (disable if login loop occurs)
WTF_CSRF_ENABLED = True
WTF_CSRF_TIME_LIMIT = None

# MCP Service Configuration
# REQUIRED: Set this to your actual Superset username
# The service will fail if not configured
MCP_DEV_USERNAME = 'admin'
SUPERSET_WEBSERVER_ADDRESS = 'http://localhost:9001'

# WebDriver Configuration for screenshots
WEBDRIVER_BASEURL = 'http://localhost:9001/'
WEBDRIVER_BASEURL_USER_FRIENDLY = WEBDRIVER_BASEURL

EOF

# 5. Initialize database
export FLASK_APP=superset
superset db upgrade
superset init

# 6. Create admin user
superset fab create-admin \
  --username admin \
  --firstname Admin \
  --lastname Admin \
  --email admin@localhost \
  --password admin

# 7. Start Superset (in one terminal)
superset run -p 9001 --with-threads --reload --debugger

# 8. Start frontend (in another terminal)
cd superset-frontend && npm run dev

# 9. Start MCP service (in another terminal, only if you want MCP features)
source venv/bin/activate
superset mcp run --port 5008 --debug
```

ACCESS SUPERSET AT http://localhost:9001 (LOGIN: ADMIN/ADMIN)

## 🔌 STEP 2: CONNECT CLAUDE DESKTOP

### FOR DOCKER SETUP

SINCE THE MCP SERVICE RUNS INSIDE DOCKER ON PORT 5008, YOU NEED TO CONNECT CLAUDE DESKTOP TO THE HTTP ENDPOINT:

ADD THIS TO YOUR CLAUDE DESKTOP CONFIG FILE:

**MACOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`

SINCE CLAUDE DESKTOP DOESN'T LIKE NON HTTPS MCP SERVERS YOU CAN USE THIS PROXY:
```json
{
  "mcpServers": {
    "Superset MCP Proxy": {
      "command": "/<superset folder>/superset/mcp_service/run_proxy.sh",
      "args": [],
      "env": {}
    }
  }
}
```

### FOR LOCAL SETUP (MAKE/MANUAL)

IF RUNNING MCP LOCALLY (NOT IN DOCKER), USE THE DIRECT CONNECTION:

```json
{
  "mcpServers": {
    "superset": {
      "command": "npx",
      "args": ["/path/to/your/superset/superset/mcp_service"],
      "env": {
        "PYTHONPATH": "/path/to/your/superset"
      }
    }
  }
}
```

THEN RESTART CLAUDE DESKTOP. THAT'S IT! ✨


### ALTERNATIVE CONNECTION METHODS

<details>
<summary>Direct STDIO with npx</summary>

```json
{
  "mcpServers": {
    "superset": {
      "command": "npx",
      "args": ["/absolute/path/to/your/superset/superset/mcp_service", "--stdio"],
      "env": {
        "PYTHONPATH": "/absolute/path/to/your/superset",
        "MCP_DEV_USERNAME": "admin"
      }
    }
  }
}
```
NOTE: REPLACE "ADMIN" WITH YOUR ACTUAL SUPERSET USERNAME. THESE ENVIRONMENT VARIABLES OVERRIDE THE VALUES IN SUPERSET_CONFIG.PY.
</details>

<details>
<summary>Direct STDIO with Python</summary>

```json
{
  "mcpServers": {
    "superset": {
      "command": "/absolute/path/to/your/superset/venv/bin/python",
      "args": ["-m", "superset.mcp_service"],
      "env": {
        "PYTHONPATH": "/absolute/path/to/your/superset"
      }
    }
  }
}
```
</details>

### 📍 CLAUDE DESKTOP CONFIG LOCATION

- **MACOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`

---

## ☸️ KUBERNETES DEPLOYMENT

THIS SECTION COVERS DEPLOYING THE MCP SERVICE ON KUBERNETES FOR PRODUCTION ENVIRONMENTS. THE MCP SERVICE RUNS AS A SEPARATE DEPLOYMENT ALONGSIDE SUPERSET, CONNECTED VIA AN API GATEWAY OR INGRESS CONTROLLER.

### ARCHITECTURE OVERVIEW

```mermaid
graph TB
    Client[MCP Client]

    subgraph "Ingress / API Gateway"
        Gateway[Ingress Controller<br/>Route based on URL path]
    end

    subgraph "Superset Web Deployment"
        WebApp[Superset App<br/>Gunicorn<br/>Port: 8088]
        WebHPA[HPA<br/>Auto-scaling]
    end

    subgraph "MCP Service Deployment"
        MCPApp[MCP Service<br/>FastMCP Server<br/>Port: 5008]
        MCPHPA[HPA<br/>2-3 replicas]
    end

    subgraph "Shared Dependencies"
        DB[(PostgreSQL)]
        Redis[(Redis)]
    end

    Client --> Gateway
    Gateway -->|/superset/*| WebApp
    Gateway -->|/mcp/*| MCPApp

    WebHPA -.->|scales| WebApp
    MCPHPA -.->|scales| MCPApp

    WebApp --> DB
    WebApp --> Redis

    MCPApp --> DB

    style Gateway fill:#9c27b0
    style WebApp fill:#42a5f5
    style MCPApp fill:#C76E00
    style WebHPA fill:#66bb6a
    style MCPHPA fill:#66bb6a
    style DB fill:#4db6ac
    style Redis fill:#ef5350
```

### REQUEST FLOW

```mermaid
sequenceDiagram
    participant Client as MCP Client
    participant Ingress as Ingress/Gateway
    participant MCP as MCP Service
    participant Auth as Authentication
    participant Flask as Flask Context
    participant Tools as MCP Tools
    participant DB as PostgreSQL

    Client->>Ingress: MCP Request (/mcp/*)
    Ingress->>MCP: Route to MCP Service
    MCP->>Auth: Validate credentials
    Auth-->>MCP: User authenticated

    MCP->>Flask: Establish Flask app context
    Flask->>DB: Connect to database
    DB-->>Flask: Connection established

    MCP->>Tools: Execute tool (e.g., list_dashboards)
    Tools->>DB: Query data
    DB-->>Tools: Return data
    Tools-->>MCP: Tool result

    MCP-->>Ingress: Response
    Ingress-->>Client: MCP Response

    Note over Auth,Flask: Authentication Layer
    Note over Tools: Tool Execution Layer
```

### PREREQUISITES

- KUBERNETES CLUSTER (1.19+)
- HELM 3.X INSTALLED
- KUBECTL CONFIGURED WITH CLUSTER ACCESS
- POSTGRESQL DATABASE (CAN USE THE BUNDLED CHART OR EXTERNAL)
- REDIS (OPTIONAL, FOR CACHING AND CELERY)

### OPTION 1: USING THE OFFICIAL SUPERSET HELM CHART

THE SIMPLEST APPROACH IS TO EXTEND THE EXISTING SUPERSET HELM CHART TO INCLUDE THE MCP SERVICE AS A SIDECAR OR SEPARATE DEPLOYMENT.

#### STEP 1: ADD THE SUPERSET HELM REPOSITORY

```bash
helm repo add superset http://apache.github.io/superset/
helm repo update
```

#### STEP 2: CREATE A CUSTOM VALUES FILE

CREATE `mcp-values.yaml` WITH MCP-SPECIFIC CONFIGURATION:

```yaml
# mcp-values.yaml
# Extend the Superset Helm chart to include MCP service

# Image configuration - ensure fastmcp extra is installed
image:
  repository: apache/superset
  tag: latest
  pullPolicy: IfNotPresent

# MCP Service configuration via extraContainers
supersetNode:
  extraContainers:
    - name: mcp-service
      image: "apache/superset:latest"
      imagePullPolicy: IfNotPresent
      command:
        - "/bin/sh"
        - "-c"
        - |
          pip install fastmcp && \
          superset mcp run --host 0.0.0.0 --port 5008
      ports:
        - name: mcp
          containerPort: 5008
          protocol: TCP
      env:
        - name: FLASK_APP
          value: superset
        - name: PYTHONPATH
          value: /app/pythonpath
        # MCP-specific environment variables
        - name: MCP_DEV_USERNAME
          value: "admin"  # Override with your admin username
      envFrom:
        - secretRef:
            name: '{{ template "superset.fullname" . }}-env'
      volumeMounts:
        - name: superset-config
          mountPath: /app/pythonpath
          readOnly: true
      resources:
        requests:
          cpu: 100m
          memory: 256Mi
        limits:
          cpu: 500m
          memory: 512Mi
      livenessProbe:
        httpGet:
          path: /health
          port: 5008
        initialDelaySeconds: 30
        periodSeconds: 15
      readinessProbe:
        httpGet:
          path: /health
          port: 5008
        initialDelaySeconds: 15
        periodSeconds: 10

# Superset configuration overrides for MCP
configOverrides:
  mcp_config: |
    # MCP Service Configuration
    MCP_DEV_USERNAME = 'admin'
    SUPERSET_WEBSERVER_ADDRESS = 'http://localhost:8088'

    # WebDriver for screenshots (adjust based on your setup)
    WEBDRIVER_BASEURL = 'http://localhost:8088/'
    WEBDRIVER_BASEURL_USER_FRIENDLY = WEBDRIVER_BASEURL

# Secret configuration
extraSecretEnv:
  SUPERSET_SECRET_KEY: 'your-secret-key-here'  # Use a strong secret!

# Database configuration (using bundled PostgreSQL)
postgresql:
  enabled: true
  auth:
    username: superset
    password: superset
    database: superset

# Redis configuration
redis:
  enabled: true
  architecture: standalone
```

#### STEP 3: DEPLOY WITH HELM

```bash
# Create namespace
kubectl create namespace superset

# Install the chart
helm install superset superset/superset \
  --namespace superset \
  --values mcp-values.yaml \
  --wait

# Verify deployment
kubectl get pods -n superset
kubectl get svc -n superset
```

### OPTION 2: DEDICATED MCP SERVICE DEPLOYMENT

FOR PRODUCTION ENVIRONMENTS REQUIRING INDEPENDENT SCALING AND ISOLATION, DEPLOY THE MCP SERVICE AS A SEPARATE KUBERNETES DEPLOYMENT.

#### STEP 1: CREATE MCP DEPLOYMENT MANIFEST

CREATE `mcp-deployment.yaml`:

```yaml
# mcp-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: superset-mcp
  namespace: superset
  labels:
    app: superset-mcp
    component: mcp-service
spec:
  replicas: 2
  selector:
    matchLabels:
      app: superset-mcp
  template:
    metadata:
      labels:
        app: superset-mcp
        component: mcp-service
    spec:
      containers:
        - name: mcp-service
          image: apache/superset:latest
          imagePullPolicy: IfNotPresent
          command:
            - "/bin/sh"
            - "-c"
            - |
              pip install fastmcp && \
              superset mcp run --host 0.0.0.0 --port 5008
          ports:
            - name: mcp
              containerPort: 5008
              protocol: TCP
          env:
            - name: FLASK_APP
              value: superset
            - name: PYTHONPATH
              value: /app/pythonpath
            - name: MCP_DEV_USERNAME
              value: "admin"
            # Database connection (must match Superset's config)
            - name: DATABASE_URI
              valueFrom:
                secretKeyRef:
                  name: superset-env
                  key: DATABASE_URI
          envFrom:
            - secretRef:
                name: superset-env
          volumeMounts:
            - name: superset-config
              mountPath: /app/pythonpath
              readOnly: true
          resources:
            requests:
              cpu: 200m
              memory: 512Mi
            limits:
              cpu: 1000m
              memory: 1Gi
          livenessProbe:
            httpGet:
              path: /health
              port: 5008
            initialDelaySeconds: 30
            timeoutSeconds: 5
            failureThreshold: 3
            periodSeconds: 15
          readinessProbe:
            httpGet:
              path: /health
              port: 5008
            initialDelaySeconds: 15
            timeoutSeconds: 5
            failureThreshold: 3
            periodSeconds: 10
          startupProbe:
            httpGet:
              path: /health
              port: 5008
            initialDelaySeconds: 10
            timeoutSeconds: 5
            failureThreshold: 30
            periodSeconds: 5
      volumes:
        - name: superset-config
          secret:
            secretName: superset-config
---
apiVersion: v1
kind: Service
metadata:
  name: superset-mcp
  namespace: superset
  labels:
    app: superset-mcp
spec:
  type: ClusterIP
  ports:
    - port: 5008
      targetPort: 5008
      protocol: TCP
      name: mcp
  selector:
    app: superset-mcp
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: superset-mcp-hpa
  namespace: superset
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: superset-mcp
  minReplicas: 2
  maxReplicas: 5
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
    - type: Resource
      resource:
        name: memory
        target:
          type: Utilization
          averageUtilization: 80
---
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: superset-mcp-pdb
  namespace: superset
spec:
  minAvailable: 1
  selector:
    matchLabels:
      app: superset-mcp
```

#### STEP 2: CREATE INGRESS FOR ROUTING

CREATE `mcp-ingress.yaml` TO ROUTE `/mcp/*` REQUESTS TO THE MCP SERVICE:

```yaml
# mcp-ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: superset-ingress
  namespace: superset
  annotations:
    nginx.ingress.kubernetes.io/proxy-connect-timeout: "300"
    nginx.ingress.kubernetes.io/proxy-read-timeout: "300"
    nginx.ingress.kubernetes.io/proxy-send-timeout: "300"
    # Enable WebSocket support for MCP
    nginx.ingress.kubernetes.io/proxy-http-version: "1.1"
    nginx.ingress.kubernetes.io/proxy-set-header-upgrade: "$http_upgrade"
    nginx.ingress.kubernetes.io/proxy-set-header-connection: "upgrade"
spec:
  ingressClassName: nginx
  rules:
    - host: superset.example.com
      http:
        paths:
          # Route MCP requests to MCP service
          - path: /mcp
            pathType: Prefix
            backend:
              service:
                name: superset-mcp
                port:
                  number: 5008
          # Route all other requests to Superset
          - path: /
            pathType: Prefix
            backend:
              service:
                name: superset
                port:
                  number: 8088
  tls:
    - hosts:
        - superset.example.com
      secretName: superset-tls
```

#### STEP 3: APPLY THE MANIFESTS

```bash
# Apply the deployment
kubectl apply -f mcp-deployment.yaml

# Apply the ingress
kubectl apply -f mcp-ingress.yaml

# Verify
kubectl get pods -n superset -l app=superset-mcp
kubectl get svc -n superset
kubectl get ingress -n superset
```

### CONFIGURATION REFERENCE

#### ENVIRONMENT VARIABLES

| VARIABLE | DESCRIPTION | DEFAULT |
|----------|-------------|---------|
| `MCP_DEV_USERNAME` | SUPERSET USERNAME FOR MCP AUTHENTICATION IN DEV MODE. MUTUALLY EXCLUSIVE WITH `MCP_AUTH_ENABLED = True`: THE SERVER REFUSES TO START IF BOTH ARE SET. | - |
| `MCP_AUTH_ENABLED` | ENABLE/DISABLE AUTHENTICATION | `false` |
| `MCP_JWT_PUBLIC_KEY` | JWT PUBLIC KEY FOR TOKEN VALIDATION | - |
| `SUPERSET_WEBSERVER_ADDRESS` | INTERNAL SUPERSET URL | `http://localhost:8088` |
| `WEBDRIVER_BASEURL` | URL FOR SCREENSHOT GENERATION | SAME AS WEBSERVER |

#### SUPERSET_CONFIG.PY OPTIONS

DEV MODE (`MCP_DEV_USERNAME`) AND JWT AUTHENTICATION (`MCP_AUTH_ENABLED`) ARE
MUTUALLY EXCLUSIVE -- THE SERVER RAISES AT STARTUP IF BOTH ARE SET, SINCE A
FIXED DEV-MODE IDENTITY WOULD DEFEAT THE POINT OF REQUIRING REAL AUTH. PICK ONE:

```python
# MCP Service Configuration -- development/testing (no auth)
MCP_DEV_USERNAME = 'admin'                    # Username for development/testing

# Headless browser (Playwright + Chromium) settings for chart screenshots
WEBDRIVER_BASEURL = 'http://superset:8088/'
WEBDRIVER_OPTION_ARGS = ['--headless', '--no-sandbox']
```

```python
# MCP Service Configuration -- production with JWT authentication
MCP_AUTH_ENABLED = True                       # Enable authentication
MCP_JWT_PUBLIC_KEY = 'your-public-key'        # For JWT token validation

# Or, for a fully custom auth setup instead of the built-in JWT verifier:
MCP_AUTH_FACTORY = 'your.custom.auth_factory'
MCP_USER_RESOLVER = 'your.custom.user_resolver'

# Headless browser (Playwright + Chromium) settings for chart screenshots
WEBDRIVER_BASEURL = 'http://superset:8088/'
WEBDRIVER_OPTION_ARGS = ['--headless', '--no-sandbox']
```

### PRODUCTION CONSIDERATIONS

#### SECURITY

1. **AUTHENTICATION**: CONFIGURE PROPER JWT AUTHENTICATION FOR PRODUCTION:
   ```python
   # superset_config.py
   MCP_AUTH_ENABLED = True
   MCP_JWT_PUBLIC_KEY = """-----BEGIN PUBLIC KEY-----
   Your RSA public key here
   -----END PUBLIC KEY-----"""
   ```

2. **NETWORK POLICIES**: RESTRICT MCP SERVICE NETWORK ACCESS:
   ```yaml
   apiVersion: networking.k8s.io/v1
   kind: NetworkPolicy
   metadata:
     name: mcp-network-policy
     namespace: superset
   spec:
     podSelector:
       matchLabels:
         app: superset-mcp
     policyTypes:
       - Ingress
       - Egress
     ingress:
       - from:
           - namespaceSelector:
               matchLabels:
                 name: ingress-nginx
         ports:
           - protocol: TCP
             port: 5008
     egress:
       - to:
           - podSelector:
               matchLabels:
                 app: postgresql
         ports:
           - protocol: TCP
             port: 5432
   ```

3. **TLS**: ALWAYS USE TLS IN PRODUCTION VIA INGRESS OR SERVICE MESH.

#### RESOURCE ALLOCATION

RECOMMENDED RESOURCES FOR PRODUCTION:

```yaml
resources:
  requests:
    cpu: 500m
    memory: 1Gi
  limits:
    cpu: 2000m
    memory: 2Gi
```

#### MONITORING

ADD PROMETHEUS ANNOTATIONS FOR METRICS SCRAPING:

```yaml
metadata:
  annotations:
    prometheus.io/scrape: "true"
    prometheus.io/port: "5008"
    prometheus.io/path: "/metrics"
```

### TROUBLESHOOTING

#### CHECK MCP SERVICE LOGS

```bash
kubectl logs -n superset -l app=superset-mcp -f
```

#### VERIFY SERVICE CONNECTIVITY

```bash
# Port-forward to test locally
kubectl port-forward -n superset svc/superset-mcp 5008:5008

# Test health endpoint
curl http://localhost:5008/health
```

#### COMMON ISSUES

1. **DATABASE CONNECTION ERRORS**: ENSURE THE MCP SERVICE HAS THE SAME DATABASE CREDENTIALS AS SUPERSET
2. **AUTHENTICATION FAILURES**: VERIFY `MCP_DEV_USERNAME` MATCHES AN EXISTING SUPERSET USER
3. **SCREENSHOT GENERATION FAILS**: CHECK WEBDRIVER CONFIGURATION AND ENSURE CHROME/FIREFOX IS AVAILABLE IN THE CONTAINER
