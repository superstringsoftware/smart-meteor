Package.describe({
  name: 'aantich:smart-meteor',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  chai: '4.3.4'
});

Package.onUse(function(api) {
  api.versionsFrom('2.2');
  api.use(['ecmascript', 'typescript']);
  api.mainModule('smart-meteor-server.ts','server');
  api.mainModule('smart-meteor-client.ts','client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use(['ecmascript', 'typescript', 'random', 'meteortesting:mocha', 'tmeasday:check-npm-versions']);
  api.use('aantich:smart-meteor');
  api.mainModule('smart-meteor-tests.ts');
});
