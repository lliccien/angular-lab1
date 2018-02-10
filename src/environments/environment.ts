// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDX-vOlipB1q80phuoiWUBzzBdM0PXMzTc',
    authDomain: 'lab-directory-company.firebaseapp.com',
    databaseURL: 'https://lab-directory-company.firebaseio.com',
    projectId: 'lab-directory-company',
    storageBucket: 'lab-directory-company.appspot.com',
    messagingSenderId: '868366619270'
  }
};
