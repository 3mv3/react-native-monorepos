# oc-mobile
OC mobile apps - PAR, Delivery, Fixed Assets, Offline

This folder uses yarn workspaces to simply local package management, and yarn constraints to maintain dependency versions across all apps/packages.
To see yarn constraints, check out the yarn.config.cjs at the root level of the repo.

Folder structure should be similar to
oc-mobile
    -apps               self explanatory, this will house our four apps
        -par
        -delivery
        -fixedassets
        -offline
    -libs               this will house any common libs we create i.e ui, db, api etc
        -ui
        -auth
        -db
    .yarnrc.yml         yarn config, nodeLinker can be pnp (default, not suitable for hoisted react native projects), pnpm, or node-modules
    metro.config.js     hoisted config that will be used across apps
    package.json        root level config, will house dependencies
    yarn.config.cjs     constraint enforcement, not disimilar to linting but for dependencies / package.json
    yarn.lock           lock file