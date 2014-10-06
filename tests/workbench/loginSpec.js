
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
    // all constant vars used in this scenario here
    var executionChain = null;


    var username = 'okarin';
    var password = 'a';

    it ('Workbench is loaded in the browser',function() {
      executionChain = dv.getTitle();

      expect(executionChain).to.eventually.equal('Breeding Management System | Workbench');
    });

    // remember all selenium driver calls are async but flow is controlled via control_flow system
    // see: https://code.google.com/p/selenium/wiki/WebDriverJs#Control_Flows

    it ('Will login using username = ' + username + ', password = ' + password,function() {
        var usernameTxt = dv.findElement(by.id('vaadin-username-txt'));
        var passwordTxt = dv.findElement(by.id('vaadin-password-txt'));
        var loginBtn = dv.findElement(by.id('vaadin-login-btn'));

        usernameTxt.clear();
        usernameTxt.sendKeys(username);

        passwordTxt.clear();
        passwordTxt.sendKeys(password);
        loginBtn.click();

        // waits until vaadin-home-lbl is present
        dv.wait(function() {
             return dv.isElementPresent(by.id('vaadin-home-lbl'));
        },10000);

        var dashboardTitle = dv.findElement(by.id('vaadin-home-lbl')).getText();
        expect(dashboardTitle).to.eventually.equal("HOME");
    });


  });

});
