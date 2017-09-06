export function throwIfAlreadLoaded(parentModule: any, moduleName: string) {
    if (parentModule) {
        throw new Error(`${moduleName} has already bee loaded. Import Core Modules in the AppModule only`);
    }
}
