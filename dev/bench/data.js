window.BENCHMARK_DATA = {
  "lastUpdate": 1699927224569,
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
      }
    ]
  }
}