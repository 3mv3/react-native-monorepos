const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

module.exports = function buildConfig(appPath, config) {  
    // Find the project and workspace directories

    // This can be replaced with `find-yarn-workspace-root`
    const workspaceRoot = path.resolve(appPath, '../../../');

    const dfltConfig = getDefaultConfig(appPath);

    // 1. Watch all files within the monorepo
    dfltConfig.watchFolders = [workspaceRoot];
    // 2. Let Metro know where to resolve packages and in what order
    dfltConfig.resolver.nodeModulesPaths = [
        path.resolve(appPath, 'node_modules'),
        path.resolve(workspaceRoot, 'node_modules'),
    ];
    // 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
    dfltConfig.resolver.disableHierarchicalLookup = true;
    dfltConfig.resolver.unstable_enableSymlinks = true;

    return mergeConfig(dfltConfig, config);
}