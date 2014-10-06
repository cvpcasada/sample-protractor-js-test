
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe ('BMS Workbench Acceptance Tests',function() {

  beforeEach(function() {
    isAngularSite(false);

    // dv is the selenium driver object
    dv.get('http://localhost:18080/ibpworkbench/main');

  });

  describe('BMS Login scenario',function() {

    it ('Workbench is loaded in the browser',function() {
      expect(dv.getTitle()).to.eventually.equal('Breeding Management System | Workbench');
    });

  });

});
