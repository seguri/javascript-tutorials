# `require` vs `import`

I'm trying to use a globally installed:

    npm i -g dotenv dotenv-expand

Results:

    node script.MJS    require    ReferenceError: require is not defined in ES module scope, you can use import instead
    node script.MJS    import     Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'dotenv' imported from
    node script.JS     import     SyntaxError: Cannot use import statement outside a module
    node script.JS     require    OK

Please note that the only working scenario works thanks to this line in my shell profile:

    export NODE_PATH="$(npm root -g)"

