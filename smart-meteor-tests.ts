// Import and rename a variable exported by smart-meteor.js.
import { name as packageName } from "meteor/aantich:smart-meteor";
import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

/*
checkNpmVersions({
  'chai': '4.x.x'
}, 'aantich:smart-meteor');*/

const chai = require('chai');

const should = chai.should();


// Write your tests here!
// Here is an example.
describe('smart-collection', function () {
  it('package has correct name', async function () {
    packageName.should.equal("smart-collection");
  });
});