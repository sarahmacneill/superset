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

## <u>@SUPERSET-UI/PLUGIN-CHART-CARTODIAGRAM</u>

THIS PLUGIN ALLOWS VISUALIZING CHARTS ON A MAP. TO DO SO, THE PLUGIN MAKES USE OF EXISTING CHARTS AND RENDERS THEM ON THE
PROVIDED LOCATIONS.

CONFIGURING THE CHARTS: CHARTS WILL BE CONFIGURED IN THEIR RESPECTIVE EDITORS. SO ALL CONFIGURATION OPTIONS OF ANY CHART ARE SUPPORTED.

CONFIGURING THE MAP: FOR THE MAP, AN ARBITRARY NUMBER OF BACKGROUND LAYERS (WMS, WFS, XYZ), THE INITIAL MAP EXTENT, THE CHART BACKGROUND COLOR AND BORDER RADIUS, AS WELL AS THE CHART SIZE (PER ZOOM LEVEL) CAN BE CONFIGURED.

### <u>USAGE</u>

THE PLUGIN IS CONFIGURED IN `superset-frontend/src/visualizations/presets/MainPreset.js`.

```js
import { CartodiagramPlugin } from '@superset-ui/plugin-chart-cartodiagram';

new CartodiagramPlugin().configure({ key: 'cartodiagram' }).register();
```

DEFAULT LAYERS CAN BE ADDED TO THE CONSTRUCTOR. THESE LAYERS WILL BE ADDED TO EACH CHART BY DEFAULT (BUT CAN BE REMOVED BY EDITORS). SEE ALSO `./src/types.ts` FOR THE DEFINITIONS OF TYPES `WmsLayerConf`, `WfsLayerConf` AND `XyzLayerConf`.

EXAMPLE FOR AN XYZ DEFAULT LAYER:

```js
import { CartodiagramPlugin } from '@superset-ui/plugin-chart-cartodiagram';

const opts = {
  defaultLayers: [
    {
      type: 'XYZ',
      url: 'example.com/path/to/xyz/layer',
      title: 'my default layer title',
      attribution: 'my default layer attribution',
    },
  ],
};

new CartodiagramPlugin(opts).configure({ key: 'cartodiagram' }).register();
```

PLEASE NOTE THAT BY DEFAULT, SUPERSET REJECTS REQUESTS TO THIRD-PARTY DOMAINS. IF YOU WANT TO INCLUDE
LAYERS FROM THOSE, YOU HAVE TO ADJUST THE CSP SETTINGS. SEE ALSO DOCS/DOCS/SECURITY/SECURITY.MDX.

### <u>GEOMETRY COLUMN</u>

THE PLUGIN REQUIRES THE SELECTION OF A GEOMETRY COLUMN FOR A DATASET.
THIS IS EXPECTED TO BE A GEOJSON-POINT-GEOMETRY STRING IN WGS 84/PSEUDO-MERCATOR (EPSG:3857). OTHER FORMATS AND PROJECTIONS
WILL BE SUPPORTED IN THE FUTURE.
