window.BENCHMARK_DATA = {
  "lastUpdate": 1755623157881,
  "repoUrl": "https://github.com/haykam821/microsoft-authentication-library-for-js",
  "entries": {
    "msal-node client-credential Regression Test": [
      {
        "commit": {
          "author": {
            "email": "thomas.norling@microsoft.com",
            "name": "Thomas Norling",
            "username": "tnorling"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fbbb9060775198412eead3e844ef6f4d1968cea3",
          "message": "Set TypeScript composite: false (#6494)\n\nThe composite and project references settings in TypeScript are used,\r\namong other things, to speed up build times when the project has already\r\nbeen built previously. Unfortunately, the generated tsbuildinfo file is\r\neither incorrect or outdated and causing subsequent builds to fail. The\r\nonly way to get ourselves out of this state is to delete the tsbuildinfo\r\nfile, which defeats the purpose of the composite/project references\r\nsettings.\r\n\r\nThis PR turns off composite and project references to address the local\r\nbuild issues.",
          "timestamp": "2023-09-19T10:46:53-07:00",
          "tree_id": "c9b7c08cb229e933b52de38ad0b347d217461462",
          "url": "https://github.com/haykam821/microsoft-authentication-library-for-js/commit/fbbb9060775198412eead3e844ef6f4d1968cea3"
        },
        "date": 1695182160888,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 148421,
            "range": "±2.16%",
            "unit": "ops/sec",
            "extra": "225 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 147370,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "222 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "thomas.norling@microsoft.com",
            "name": "Thomas Norling",
            "username": "tnorling"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "787aa62c42de5c275be5f8892ceac798132a8ed3",
          "message": "Bump package versions (#6659)\n\nCo-authored-by: tnorling <tnorling@users.noreply.github.com>",
          "timestamp": "2023-11-06T16:35:46-08:00",
          "tree_id": "1f8fe18f4ede6ae2102ce4a63af5059f367d7c97",
          "url": "https://github.com/haykam821/microsoft-authentication-library-for-js/commit/787aa62c42de5c275be5f8892ceac798132a8ed3"
        },
        "date": 1699333779866,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 114971,
            "range": "±1.82%",
            "unit": "ops/sec",
            "extra": "215 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 120017,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "213 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "travis.walker@microsoft.com",
            "name": "Travis Walker",
            "username": "trwalke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aedda1e187df946e3f2be8f53e25d8b95b28e751",
          "message": "VS Code debugger setup for contributing. (#6671)\n\nAdding section for VS Code debugger setup\r\n\r\n---------\r\n\r\nCo-authored-by: trwalke <trwalke@microsoft.com>",
          "timestamp": "2023-11-13T22:37:37Z",
          "tree_id": "11dcf64b3ed7b5ddd759f838deee75f3772a7162",
          "url": "https://github.com/haykam821/microsoft-authentication-library-for-js/commit/aedda1e187df946e3f2be8f53e25d8b95b28e751"
        },
        "date": 1699927223316,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 184801,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "221 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 204961,
            "range": "±2.09%",
            "unit": "ops/sec",
            "extra": "220 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "thomas.norling@microsoft.com",
            "name": "Thomas Norling",
            "username": "tnorling"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "70ab381446cf45f42b70f2ad3c59560783e6a627",
          "message": "Minor perf optimization when creating hidden iframe (#6705)\n\nUsing `document.body` directly is more performant than searching the\r\ndocument for body tags.\r\n\r\nCurrent P95 for hidden iframe creation is ~70ms which represents a\r\nsignificant portion of the time spent on client-side operations in\r\nssoSilent/ATS",
          "timestamp": "2023-11-17T15:46:30-08:00",
          "tree_id": "c79478c25361003b900f2bc75bc13cd45bcccc24",
          "url": "https://github.com/haykam821/microsoft-authentication-library-for-js/commit/70ab381446cf45f42b70f2ad3c59560783e6a627"
        },
        "date": 1700471540403,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 181009,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "220 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 183298,
            "range": "±2.09%",
            "unit": "ops/sec",
            "extra": "217 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dasau@microsoft.com",
            "name": "Dan Saunders",
            "username": "codexeon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "648501e4d9c65cb39322f97a9e09c5f93e1135b7",
          "message": "Update Nested App Auth internal schema (#6737)\n\nCurrently Nested App Auth uses a schema that contains union types such\r\nas response.body where the body can contain a different structure\r\ndepending on the request type. This works in JavaScript that uses a\r\ndynamic JSON parser, but some native implementations require a strongly\r\ntyped schema. There are workarounds on native, but it is easier for all\r\nplatforms to support Nested App Auth if union types are removed from the\r\nschema.\r\n\r\nAlso remove AccountByHomeIdRequest, AccountByLocalIdRequest, and\r\nAccountByUsernameRequest that are not currently implemented.",
          "timestamp": "2023-12-16T00:04:58-08:00",
          "tree_id": "4ecf19226170fbb86cd9acfceebc689983f6674d",
          "url": "https://github.com/haykam821/microsoft-authentication-library-for-js/commit/648501e4d9c65cb39322f97a9e09c5f93e1135b7"
        },
        "date": 1702769253675,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 186114,
            "range": "±2.13%",
            "unit": "ops/sec",
            "extra": "220 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 180299,
            "range": "±1.98%",
            "unit": "ops/sec",
            "extra": "219 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hemoral@microsoft.com",
            "name": "Hector Morales",
            "username": "hectormmg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "603098e62124b90c13dcd6e57a7d83d95cc07ce8",
          "message": "Fix default sample static file paths (#6786)",
          "timestamp": "2024-01-09T15:37:23-08:00",
          "tree_id": "cb1d11ab2471cb02ae4369e3a3cc53dca4d94e11",
          "url": "https://github.com/haykam821/microsoft-authentication-library-for-js/commit/603098e62124b90c13dcd6e57a7d83d95cc07ce8"
        },
        "date": 1705459019820,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 184648,
            "range": "±2.13%",
            "unit": "ops/sec",
            "extra": "220 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 182486,
            "range": "±1.91%",
            "unit": "ops/sec",
            "extra": "220 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jared@smell.flowers",
            "name": "Jared Miller",
            "username": "shmup"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c9311d91794b7f4b3ae12b82754b1236746e1eb8",
          "message": "Correct the tokenRequest code examples (#7009)\n\nSimple change to example code, `;` becomes `,` and the Object is happy",
          "timestamp": "2024-04-08T16:58:08-07:00",
          "tree_id": "47b750b1623cf6c8046d384871f9d4031cd8e4f2",
          "url": "https://github.com/haykam821/microsoft-authentication-library-for-js/commit/c9311d91794b7f4b3ae12b82754b1236746e1eb8"
        },
        "date": 1712686549857,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 213161,
            "range": "±1.86%",
            "unit": "ops/sec",
            "extra": "222 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 189899,
            "range": "±1.90%",
            "unit": "ops/sec",
            "extra": "223 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3256445db8f05430d9dd0df50a70b49057cbf39b",
          "message": "Bump axios from 0.21.4 to 1.7.2 (#7125)\n\nBumps [axios](https://github.com/axios/axios) from 0.21.4 to 1.7.2.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/axios/axios/releases\">axios's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>Release v1.7.2</h2>\r\n<h2>Release notes:</h2>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li><strong>fetch:</strong> enhance fetch API detection; (<a\r\nhref=\"https://redirect.github.com/axios/axios/issues/6413\">#6413</a>)\r\n(<a\r\nhref=\"https://github.com/axios/axios/commit/4f79aef81b7c4644328365bfc33acf0a9ef595bc\">4f79aef</a>)</li>\r\n</ul>\r\n<h3>Contributors to this release</h3>\r\n<ul>\r\n<li><!-- raw HTML omitted --> <a\r\nhref=\"https://github.com/DigitalBrainJS\" title=\"+3/-3\r\n([#6413](https://github.com/axios/axios/issues/6413) )\">Dmitriy\r\nMozgovoy</a></li>\r\n</ul>\r\n<h2>Release v1.7.1</h2>\r\n<h2>Release notes:</h2>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li><strong>fetch:</strong> fixed ReferenceError issue when TextEncoder\r\nis not available in the environment; (<a\r\nhref=\"https://redirect.github.com/axios/axios/issues/6410\">#6410</a>)\r\n(<a\r\nhref=\"https://github.com/axios/axios/commit/733f15fe5bd2d67e1fadaee82e7913b70d45dc5e\">733f15f</a>)</li>\r\n</ul>\r\n<h3>Contributors to this release</h3>\r\n<ul>\r\n<li><!-- raw HTML omitted --> <a\r\nhref=\"https://github.com/DigitalBrainJS\" title=\"+14/-9\r\n([#6410](https://github.com/axios/axios/issues/6410) )\">Dmitriy\r\nMozgovoy</a></li>\r\n</ul>\r\n<h2>Release v1.7.0</h2>\r\n<h2>Release notes:</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li><strong>adapter:</strong> add fetch adapter; (<a\r\nhref=\"https://redirect.github.com/axios/axios/issues/6371\">#6371</a>)\r\n(<a\r\nhref=\"https://github.com/axios/axios/commit/a3ff99b59d8ec2ab5dd049e68c043617a4072e42\">a3ff99b</a>)</li>\r\n</ul>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li><strong>core/axios:</strong> handle un-writable error stack (<a\r\nhref=\"https://redirect.github.com/axios/axios/issues/6362\">#6362</a>)\r\n(<a\r\nhref=\"https://github.com/axios/axios/commit/81e0455b7b57fbaf2be16a73ebe0e6591cc6d8f9\">81e0455</a>)</li>\r\n</ul>\r\n<h3>Contributors to this release</h3>\r\n<ul>\r\n<li><!-- raw HTML omitted --> <a\r\nhref=\"https://github.com/DigitalBrainJS\" title=\"+1015/-127\r\n([#6371](https://github.com/axios/axios/issues/6371) )\">Dmitriy\r\nMozgovoy</a></li>\r\n<li><!-- raw HTML omitted --> <a href=\"https://github.com/jasonsaayman\"\r\ntitle=\"+30/-14 ()\">Jay</a></li>\r\n<li><!-- raw HTML omitted --> <a\r\nhref=\"https://github.com/alexandre-abrioux\" title=\"+56/-6\r\n([#6362](https://github.com/axios/axios/issues/6362) )\">Alexandre\r\nABRIOUX</a></li>\r\n</ul>\r\n<h2>Release v1.7.0-beta.2</h2>\r\n<h2>Release notes:</h2>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li><strong>fetch:</strong> capitalize HTTP method names; (<a\r\nhref=\"https://redirect.github.com/axios/axios/issues/6395\">#6395</a>)\r\n(<a\r\nhref=\"https://github.com/axios/axios/commit/ad3174a3515c3c2573f4bcb94818d582826f3914\">ad3174a</a>)</li>\r\n<li><strong>fetch:</strong> fix &amp; optimize progress capturing for\r\ncases when the request data has a nullish value or zero data length (<a\r\nhref=\"https://redirect.github.com/axios/axios/issues/6400\">#6400</a>)\r\n(<a\r\nhref=\"https://github.com/axios/axios/commit/95a3e8e346cfd6a5548e171f2341df3235d0e26b\">95a3e8e</a>)</li>\r\n<li><strong>fetch:</strong> fix headers getting from a stream response;\r\n(<a\r\nhref=\"https://redirect.github.com/axios/axios/issues/6401\">#6401</a>)\r\n(<a\r\nhref=\"https://github.com/axios/axios/commit/870e0a76f60d0094774a6a63fa606eec52a381af\">870e0a7</a>)</li>\r\n</ul>\r\n<h3>Contributors to this release</h3>\r\n<ul>\r\n<li><!-- raw HTML omitted --> <a\r\nhref=\"https://github.com/DigitalBrainJS\" title=\"+99/-46\r\n([#6405](https://github.com/axios/axios/issues/6405)\r\n[#6404](https://github.com/axios/axios/issues/6404)\r\n[#6401](https://github.com/axios/axios/issues/6401)\r\n[#6400](https://github.com/axios/axios/issues/6400)\r\n[#6395](https://github.com/axios/axios/issues/6395) )\">Dmitriy\r\nMozgovoy</a></li>\r\n</ul>\r\n<h2>Release v1.7.0-beta.1</h2>\r\n<h2>Release notes:</h2>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/axios/axios/blob/v1.x/CHANGELOG.md\">axios's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2><a\r\nhref=\"https://github.com/axios/axios/compare/v1.7.1...v1.7.2\">1.7.2</a>\r\n(2024-05-21)</h2>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li><strong>fetch:</strong> enhance fetch API detection; (<a\r\nhref=\"https://redirect.github.com/axios/axios/issues/6413\">#6413</a>)\r\n(<a\r\nhref=\"https://github.com/axios/axios/commit/4f79aef81b7c4644328365bfc33acf0a9ef595bc\">4f79aef</a>)</li>\r\n</ul>\r\n<h3>Contributors to this release</h3>\r\n<ul>\r\n<li><!-- raw HTML omitted --> <a\r\nhref=\"https://github.com/DigitalBrainJS\" title=\"+3/-3\r\n([#6413](https://github.com/axios/axios/issues/6413) )\">Dmitriy\r\nMozgovoy</a></li>\r\n</ul>\r\n<h2><a\r\nhref=\"https://github.com/axios/axios/compare/v1.7.0...v1.7.1\">1.7.1</a>\r\n(2024-05-20)</h2>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li><strong>fetch:</strong> fixed ReferenceError issue when TextEncoder\r\nis not available in the environment; (<a\r\nhref=\"https://redirect.github.com/axios/axios/issues/6410\">#6410</a>)\r\n(<a\r\nhref=\"https://github.com/axios/axios/commit/733f15fe5bd2d67e1fadaee82e7913b70d45dc5e\">733f15f</a>)</li>\r\n</ul>\r\n<h3>Contributors to this release</h3>\r\n<ul>\r\n<li><!-- raw HTML omitted --> <a\r\nhref=\"https://github.com/DigitalBrainJS\" title=\"+14/-9\r\n([#6410](https://github.com/axios/axios/issues/6410) )\">Dmitriy\r\nMozgovoy</a></li>\r\n</ul>\r\n<h1><a\r\nhref=\"https://github.com/axios/axios/compare/v1.7.0-beta.2...v1.7.0\">1.7.0</a>\r\n(2024-05-19)</h1>\r\n<h3>Features</h3>\r\n<ul>\r\n<li><strong>adapter:</strong> add fetch adapter; (<a\r\nhref=\"https://redirect.github.com/axios/axios/issues/6371\">#6371</a>)\r\n(<a\r\nhref=\"https://github.com/axios/axios/commit/a3ff99b59d8ec2ab5dd049e68c043617a4072e42\">a3ff99b</a>)</li>\r\n</ul>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li><strong>core/axios:</strong> handle un-writable error stack (<a\r\nhref=\"https://redirect.github.com/axios/axios/issues/6362\">#6362</a>)\r\n(<a\r\nhref=\"https://github.com/axios/axios/commit/81e0455b7b57fbaf2be16a73ebe0e6591cc6d8f9\">81e0455</a>)</li>\r\n</ul>\r\n<h3>Contributors to this release</h3>\r\n<ul>\r\n<li><!-- raw HTML omitted --> <a\r\nhref=\"https://github.com/DigitalBrainJS\" title=\"+1015/-127\r\n([#6371](https://github.com/axios/axios/issues/6371) )\">Dmitriy\r\nMozgovoy</a></li>\r\n<li><!-- raw HTML omitted --> <a href=\"https://github.com/jasonsaayman\"\r\ntitle=\"+30/-14 ()\">Jay</a></li>\r\n<li><!-- raw HTML omitted --> <a\r\nhref=\"https://github.com/alexandre-abrioux\" title=\"+56/-6\r\n([#6362](https://github.com/axios/axios/issues/6362) )\">Alexandre\r\nABRIOUX</a></li>\r\n</ul>\r\n<h1><a\r\nhref=\"https://github.com/axios/axios/compare/v1.7.0-beta.1...v1.7.0-beta.2\">1.7.0-beta.2</a>\r\n(2024-05-19)</h1>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li><strong>fetch:</strong> capitalize HTTP method names; (<a\r\nhref=\"https://redirect.github.com/axios/axios/issues/6395\">#6395</a>)\r\n(<a\r\nhref=\"https://github.com/axios/axios/commit/ad3174a3515c3c2573f4bcb94818d582826f3914\">ad3174a</a>)</li>\r\n<li><strong>fetch:</strong> fix &amp; optimize progress capturing for\r\ncases when the request data has a nullish value or zero data length (<a\r\nhref=\"https://redirect.github.com/axios/axios/issues/6400\">#6400</a>)\r\n(<a\r\nhref=\"https://github.com/axios/axios/commit/95a3e8e346cfd6a5548e171f2341df3235d0e26b\">95a3e8e</a>)</li>\r\n<li><strong>fetch:</strong> fix headers getting from a stream response;\r\n(<a\r\nhref=\"https://redirect.github.com/axios/axios/issues/6401\">#6401</a>)\r\n(<a\r\nhref=\"https://github.com/axios/axios/commit/870e0a76f60d0094774a6a63fa606eec52a381af\">870e0a7</a>)</li>\r\n</ul>\r\n<h3>Contributors to this release</h3>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/axios/axios/commit/0e4f9fa29077ebee4499facea6be1492b42e8a26\"><code>0e4f9fa</code></a>\r\nchore(release): v1.7.2 (<a\r\nhref=\"https://redirect.github.com/axios/axios/issues/6414\">#6414</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/axios/axios/commit/4f79aef81b7c4644328365bfc33acf0a9ef595bc\"><code>4f79aef</code></a>\r\nfix(fetch): enhance fetch API detection; (<a\r\nhref=\"https://redirect.github.com/axios/axios/issues/6413\">#6413</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/axios/axios/commit/67d1373131962d1f1f5b8d91f9a2f80ed3923bc8\"><code>67d1373</code></a>\r\nchore(release): v1.7.1 (<a\r\nhref=\"https://redirect.github.com/axios/axios/issues/6411\">#6411</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/axios/axios/commit/733f15fe5bd2d67e1fadaee82e7913b70d45dc5e\"><code>733f15f</code></a>\r\nfix(fetch): fixed ReferenceError issue when TextEncoder is not available\r\nin t...</li>\r\n<li><a\r\nhref=\"https://github.com/axios/axios/commit/3041c61adaaac6d2c43eba28c134e7f4d43ab012\"><code>3041c61</code></a>\r\n[Release] v1.7.0 (<a\r\nhref=\"https://redirect.github.com/axios/axios/issues/6408\">#6408</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/axios/axios/commit/18b13cbaef66d8c266cf681165afe31787420100\"><code>18b13cb</code></a>\r\nchore(docs): add fetch adapter docs; (<a\r\nhref=\"https://redirect.github.com/axios/axios/issues/6407\">#6407</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/axios/axios/commit/e62099bc8b640acf47fba639366bbcd3bf87f831\"><code>e62099b</code></a>\r\nfix(fetch): fixed a possible memory leak in the AbortController for the\r\nstrea...</li>\r\n<li><a\r\nhref=\"https://github.com/axios/axios/commit/b49aa8e3d837c36e4728a9fa8a5e23a1162e96ec\"><code>b49aa8e</code></a>\r\nchore(release): v1.7.0-beta.2 (<a\r\nhref=\"https://redirect.github.com/axios/axios/issues/6403\">#6403</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/axios/axios/commit/d57f03a77fef1eb3cd9a17e2973c4305e105a42e\"><code>d57f03a</code></a>\r\nchore(ci): bump create-pull-request version to fix a bug; (<a\r\nhref=\"https://redirect.github.com/axios/axios/issues/6405\">#6405</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/axios/axios/commit/097b0d18e93d12c53b77741d6bfdc8a1fc11828b\"><code>097b0d1</code></a>\r\nchore(ci): add tag resolution for npm releases based on package version;\r\n(<a\r\nhref=\"https://redirect.github.com/axios/axios/issues/6404\">#6404</a>)</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/axios/axios/compare/v0.21.4...v1.7.2\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=axios&package-manager=npm_and_yarn&previous-version=0.21.4&new-version=1.7.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\nYou can disable automated security fix PRs for this repo from the\r\n[Security Alerts\r\npage](https://github.com/AzureAD/microsoft-authentication-library-for-js/network/alerts).\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-05-24T14:31:10-07:00",
          "tree_id": "030be7d5b359bf41ac876b3d49c6cf9d818a0839",
          "url": "https://github.com/haykam821/microsoft-authentication-library-for-js/commit/3256445db8f05430d9dd0df50a70b49057cbf39b"
        },
        "date": 1716753454922,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 191958,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "222 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 191004,
            "range": "±1.92%",
            "unit": "ops/sec",
            "extra": "223 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "msaljsbuilds@microsoft.com",
            "name": "MSAL.js Release Automation"
          },
          "committer": {
            "email": "msaljsbuilds@microsoft.com",
            "name": "MSAL.js Release Automation"
          },
          "distinct": true,
          "id": "be05b0571b240c9053ea84dff5551bbce5d1f05b",
          "message": "Bump package versions",
          "timestamp": "2024-07-01T19:19:43Z",
          "tree_id": "76f4d6f65506e08a145fb1261b00073ad570664e",
          "url": "https://github.com/haykam821/microsoft-authentication-library-for-js/commit/be05b0571b240c9053ea84dff5551bbce5d1f05b"
        },
        "date": 1720338093569,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 206937,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "215 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 190432,
            "range": "±2.11%",
            "unit": "ops/sec",
            "extra": "224 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "msaljsbuilds@microsoft.com",
            "name": "MSAL.js Release Automation"
          },
          "committer": {
            "email": "msaljsbuilds@microsoft.com",
            "name": "MSAL.js Release Automation"
          },
          "distinct": true,
          "id": "cba1fe0a48b29f0ac7c6b60a07d7f9f524b92839",
          "message": "Bump package versions",
          "timestamp": "2024-07-23T14:20:49Z",
          "tree_id": "5ad9831715e854d2bfb4b590fa1b34dd33114acd",
          "url": "https://github.com/haykam821/microsoft-authentication-library-for-js/commit/cba1fe0a48b29f0ac7c6b60a07d7f9f524b92839"
        },
        "date": 1722140450398,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 191457,
            "range": "±2.21%",
            "unit": "ops/sec",
            "extra": "223 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 201166,
            "range": "±1.95%",
            "unit": "ops/sec",
            "extra": "222 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "167471362+ejahja@users.noreply.github.com",
            "name": "ejahja",
            "username": "ejahja"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6ac592be2397bedd3f2cea3e3efbbf495c4f3b0",
          "message": "Update roadmap.md (#7223)\n\nRemoved outdated information, and added upcoming angular support",
          "timestamp": "2024-07-31T14:45:57-07:00",
          "tree_id": "bdd9481bd4992d6da9e735df1f807a1c0dad8082",
          "url": "https://github.com/haykam821/microsoft-authentication-library-for-js/commit/f6ac592be2397bedd3f2cea3e3efbbf495c4f3b0"
        },
        "date": 1722477253048,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 197001,
            "range": "±2.17%",
            "unit": "ops/sec",
            "extra": "208 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 189772,
            "range": "±1.94%",
            "unit": "ops/sec",
            "extra": "220 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sameera.gajjarapu@microsoft.com",
            "name": "Sameera Gajjarapu",
            "username": "sameerag"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "866f2da124aa13700cfe9d14d5a78ddda9d2bf53",
          "message": "Add JS platform telemetry params (#7991)\n\n- `isPlatformAuthorizeRequest:boolean` Is set on every request that is\nsent to STS with nativeBroker=1\n- `isPlatformBrokerRequest:boolean` Is set on every request that is sent\nto the platform broker directly, and always set only if\n`nativeAccountId` is in the cache/request\n- `isNativeBroker:boolean` Is set on every successful response from the\nBroker\n- `BrokerErrorName` for intermittent fatal broker errors\n\n---------\n\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>",
          "timestamp": "2025-08-18T14:50:34-07:00",
          "tree_id": "ebfd699a9928d97e95ef27dd84025c86e0d5d919",
          "url": "https://github.com/haykam821/microsoft-authentication-library-for-js/commit/866f2da124aa13700cfe9d14d5a78ddda9d2bf53"
        },
        "date": 1755623156810,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 257455,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "214 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 253535,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "224 samples"
          }
        ]
      }
    ]
  }
}