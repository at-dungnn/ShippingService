// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    apiUrl: 'api',
    defaultApiBasePath: 'http://119.82.130.211:6060',
    session_expiry: 1000,
    originPath: 'http://localhost:4200',
    apiVersion: 'v1',
    application_key: '',
    application_id: '',
    supporterEmail: '',
};
