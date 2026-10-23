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

[![VERSION](https://img.shields.io/npm/v/%40superset-ui%2Fembedded-sdk?style=flat)](https://www.npmjs.com/package/@superset-ui/embedded-sdk)
[![LIBRARIES.IO](https://img.shields.io/librariesio/release/npm/%40superset-ui%2Fembedded-sdk?style=flat)](https://libraries.io/npm/@superset-ui%2Fembedded-sdk)

# SUPERSET EMBEDDED SDK

THE EMBEDDED SDK ALLOWS YOU TO EMBED DASHBOARDS FROM SUPERSET INTO YOUR OWN APP,
USING YOUR APP'S AUTHENTICATION.

EMBEDDING IS DONE BY INSERTING AN IFRAME, CONTAINING A SUPERSET PAGE, INTO THE HOST APPLICATION.

## PREREQUISITES

- ACTIVATE THE FEATURE FLAG `EMBEDDED_SUPERSET`
- SET A STRONG PASSWORD IN CONFIGURATION VARIABLE `GUEST_TOKEN_JWT_SECRET` (SEE CONFIGURATION FILE CONFIG.PY). BE AWARE THAT ITS DEFAULT VALUE MUST BE CHANGED IN PRODUCTION.

## EMBEDDING A DASHBOARD

USING NPM:

```sh
npm install --save @superset-ui/embedded-sdk
```

```js
import { embedDashboard } from "@superset-ui/embedded-sdk";

embedDashboard({
  id: "abc123", // given by the Superset embedding UI
  supersetDomain: "https://superset.example.com",
  mountPoint: document.getElementById("my-superset-container"), // any html element that can contain an iframe
  fetchGuestToken: () => fetchGuestTokenFromBackend(),
  dashboardUiConfig: {
    // dashboard UI config: hideTitle, hideTab, hideChartControls, filters.visible, filters.expanded (optional), urlParams (optional)
    hideTitle: true,
    filters: {
      expanded: true,
    },
    urlParams: {
      foo: "value1",
      bar: "value2",
      // themeMode: 'dark', // set the initial theme: 'dark' | 'system' | 'default' (default: 'default')
      // ...
    },
  },
  // optional additional iframe sandbox attributes
  iframeSandboxExtras: [
    "allow-top-navigation",
    "allow-popups-to-escape-sandbox",
  ],
  // optional Permissions Policy features
  iframeAllowExtras: ["clipboard-write", "fullscreen"],
  // optional config to enforce a particular referrerPolicy
  referrerPolicy: "same-origin",
  // optional callback to customize permalink URLs
  resolvePermalinkUrl: ({ key }) => `https://my-app.com/analytics/share/${key}`,
});
```

YOU CAN ALSO LOAD THE EMBEDDED SDK FROM A CDN. THE SDK WILL BE AVAILABLE AS `supersetEmbeddedSdk` GLOBALLY:

```html
<script src="https://unpkg.com/@superset-ui/embedded-sdk"></script>

<script>
  supersetEmbeddedSdk.embedDashboard({
    // ... here you supply the same parameters as in the example above
  });
</script>
```

## AUTHENTICATION/AUTHORIZATION WITH GUEST TOKENS

EMBEDDED RESOURCES USE A SPECIAL AUTH TOKEN CALLED A GUEST TOKEN TO GRANT SUPERSET ACCESS TO YOUR USERS,
WITHOUT REQUIRING YOUR USERS TO LOG IN TO SUPERSET DIRECTLY. YOUR BACKEND MUST CREATE A GUEST TOKEN
BY REQUESTING SUPERSET'S `POST /security/guest_token` ENDPOINT, AND PASS THAT GUEST TOKEN TO YOUR FRONTEND.

THE EMBEDDING SDK TAKES THE GUEST TOKEN AND USE IT TO EMBED A DASHBOARD.

### CREATING A GUEST TOKEN

FROM THE BACKEND, HTTP `POST` TO `/security/guest_token` WITH SOME PARAMETERS TO DEFINE WHAT THE GUEST TOKEN WILL GRANT ACCESS TO.
GUEST TOKENS CAN HAVE ROW LEVEL SECURITY RULES WHICH FILTER DATA FOR THE USER CARRYING THE TOKEN.

THE AGENT MAKING THE `POST` REQUEST MUST BE AUTHENTICATED WITH THE `can_grant_guest_token` PERMISSION.

WITHIN YOUR APP, USING THE GUEST TOKEN WILL THEN ALLOW AUTHENTICATION TO YOUR SUPERSET INSTANCE VIA CREATING AN ANONYMOUS USER OBJECT. THIS GUEST ANONYMOUS USER WILL DEFAULT TO THE PUBLIC ROLE AS PER THIS SETTING `GUEST_ROLE_NAME = "Public"`.

THE USER PARAMETERS IN THE EXAMPLE BELOW ARE OPTIONAL AND ARE PROVIDED AS A MEANS OF PASSING USER ATTRIBUTES THAT MAY BE ACCESSED IN JINJA TEMPLATES INSIDE YOUR CHARTS.

EXAMPLE `POST /security/guest_token` PAYLOAD:

```json
{
  "user": {
    "username": "stan_lee",
    "first_name": "Stan",
    "last_name": "Lee"
  },
  "resources": [
    {
      "type": "dashboard",
      "id": "abc123"
    }
  ],
  "rls": [{ "clause": "publisher = 'Nintendo'" }]
}
```

ALTERNATIVELY, A GUEST TOKEN CAN BE CREATED DIRECTLY IN YOUR APP WITHOUT INTERACTING WITH THE SUPERSET API.
TO DO THIS, YOU SHOULD UPDATE THE `GUEST_TOKEN_JWT_SECRET`
IN THE SUPERSET [CONFIG.PY](https://github.com/apache/superset/blob/master/superset/config.py). ALSO SET THE
`GUEST_TOKEN_JWT_AUDIENCE` VARIABLE THAT MATCHES WHAT IS SET FOR THE `aud` IN THE JSON PAYLOAD:

```
{
  "user": {
    "username": "embedded@embedded.fr",
    "first_name": "embedded",
    "last_name": "embedded"
  },
  "resources": [
    {
      "type": "dashboard",
      "id": "d73e7841-9342-4afd-8e29-b4a416a2498c"
    }
  ],
  "rls_rules": [],
  "iat": 1730883214,
  "exp": 1732956814,
  "aud": "superset",
  "type": "guest"
}
```

IN THIS EXAMPLE, THE CONFIGURATION FILE INCLUDES THE FOLLOWING SETTING:

```python
GUEST_TOKEN_JWT_AUDIENCE="superset"
```

### SETTING THE INITIAL THEME MODE

USE THE `themeMode` URL PARAMETER TO CONTROL THE EMBEDDED DASHBOARD'S INITIAL COLOUR SCHEME:

```js
embedDashboard({
  id: "abc123",
  supersetDomain: "https://superset.example.com",
  mountPoint: document.getElementById("my-superset-container"),
  fetchGuestToken: () => fetchGuestTokenFromBackend(),
  dashboardUiConfig: {
    urlParams: {
      themeMode: "dark", // 'dark' | 'system' | 'default' (default: 'default')
    },
  },
});
```

THE SUPPORTED VALUES ARE:

| VALUE     | BEHAVIOUR                                                 |
| --------- | --------------------------------------------------------- |
| `default` | LIGHT THEME (SUPERSET DEFAULT)                            |
| `dark`    | DARK THEME                                                |
| `system`  | FOLLOWS THE USER'S OS PREFERENCE (`prefers-color-scheme`) |

THE THEME CAN ALSO BE CHANGED AT RUNTIME VIA `embeddedDashboard.setThemeMode(mode)`.

### SANDBOX IFRAME

THE EMBEDDED SDK CREATES AN IFRAME WITH [SANDBOX](https://developer.mozilla.org/es/docs/Web/HTML/Element/iframe#sandbox) MODE BY DEFAULT
WHICH APPLIES CERTAIN RESTRICTIONS TO THE IFRAME'S CONTENT.
TO PASS ADDITIONAL SANDBOX ATTRIBUTES YOU CAN USE `iframeSandboxExtras`:

```js
// optional additional iframe sandbox attributes
iframeSandboxExtras: ["allow-top-navigation", "allow-popups-to-escape-sandbox"];
```

### PERMISSIONS POLICY

TO ENABLE SPECIFIC BROWSER FEATURES WITHIN THE EMBEDDED IFRAME, USE `iframeAllowExtras` TO SET THE IFRAME'S [PERMISSIONS POLICY](https://developer.mozilla.org/en-US/docs/Web/HTTP/Permissions_Policy) (THE `allow` ATTRIBUTE):

```js
// optional Permissions Policy features
iframeAllowExtras: ["clipboard-write", "fullscreen"];
```

COMMON PERMISSIONS YOU MIGHT NEED:

- `clipboard-write` - REQUIRED FOR "COPY PERMALINK TO CLIPBOARD" FUNCTIONALITY
- `fullscreen` - REQUIRED FOR FULLSCREEN CHART VIEWING
- `camera`, `microphone` - IF YOUR DASHBOARDS INCLUDE MEDIA CAPTURE FEATURES

### ENFORCING A REFERRERPOLICY ON THE REQUEST TRIGGERED BY THE IFRAME

BY DEFAULT, THE EMBEDDED SDK CREATES AN `iframe` ELEMENT WITHOUT A `referrerPolicy` VALUE ENFORCED. THIS MEANS THAT A POLICY DEFINED FOR `iframe` ELEMENTS AT THE HOST APP LEVEL WOULD REFLECT TO IT.

THIS CAN BE AN ISSUE AS DURING THE EMBEDDED ENABLEMENT FOR A DASHBOARD IT'S POSSIBLE TO SPECIFY WHICH DOMAIN(S) ARE ALLOWED TO EMBED THE DASHBOARD, AND THIS VALIDATION HAPPENS THROUGH THE `Referrer` HEADER. THAT SAID, IN CASE THE HOSTING APP HAS A MORE RESTRICTIVE POLICY THAT WOULD OMIT THIS HEADER, THIS VALIDATION WOULD FAIL.

USE THE `referrerPolicy` PARAMETER IN THE `embedDashboard` METHOD TO SPECIFY [A PARTICULAR POLICY](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy) THAT WORKS FOR YOUR IMPLEMENTATION.

### CUSTOMIZING PERMALINK URLS

WHEN USERS CLICK SHARE BUTTONS INSIDE AN EMBEDDED DASHBOARD, SUPERSET GENERATES PERMALINKS USING SUPERSET'S DOMAIN. IF YOU WANT TO USE YOUR OWN DOMAIN AND URL FORMAT FOR THESE PERMALINKS, YOU CAN PROVIDE A `resolvePermalinkUrl` CALLBACK:

```js
embedDashboard({
  id: "abc123",
  supersetDomain: "https://superset.example.com",
  mountPoint: document.getElementById("my-superset-container"),
  fetchGuestToken: () => fetchGuestTokenFromBackend(),

  // Customize permalink URLs
  resolvePermalinkUrl: ({ key }) => {
    // key: the permalink key (e.g., "xyz789")
    return `https://my-app.com/analytics/share/${key}`;
  },
});
```

TO RESTORE THE DASHBOARD STATE FROM A PERMALINK IN YOUR APP:

```js
// In your route handler for /analytics/share/:key
const permalinkKey = routeParams.key;

embedDashboard({
  id: "abc123",
  supersetDomain: "https://superset.example.com",
  mountPoint: document.getElementById("my-superset-container"),
  fetchGuestToken: () => fetchGuestTokenFromBackend(),
  resolvePermalinkUrl: ({ key }) => `https://my-app.com/analytics/share/${key}`,
  dashboardUiConfig: {
    urlParams: {
      permalink_key: permalinkKey, // Restores filters, tabs, chart states, and scrolls to anchor
    },
  },
});
```
