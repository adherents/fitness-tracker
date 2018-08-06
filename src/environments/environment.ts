// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyANTqc0AIZSMxBIwfxNQLl6utR6VyFw9FQ",
    authDomain: "fitness-tracker-angular5.firebaseapp.com",
    databaseURL: "https://fitness-tracker-angular5.firebaseio.com",
    projectId: "fitness-tracker-angular5",
    storageBucket: "fitness-tracker-angular5.appspot.com",
    messagingSenderId: "1041604391314"
  }
};
