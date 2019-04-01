const loginPage = function(){
//Using this function will enter your userName and Password at once
// all we have to do is pass in the userName and password parameters inside that function when ever used
        const login = function((userName,password){
        this.enterLoginID(userName);
        this.enterPassword(password);
        });
// function for entering userID
        const enterLoginID = function(userId)({
        this.userId.clear().sendKeys(userid);
        });
//fundtion for entering password
        const enterPassword = function(password)({
        this.passwordElement.clear().sendKeys(password);
        });
// Function for clicking on login button
        const clickOnLoginButton = function()({
        this.loginButton().click();
        });
// Function to click on need help
        const clickOnNeedHelp = function()({
        this.needHelpElement.click();
        });

// Login Page elements
        this.userId=element(by.name('username')); // Element by Id
        this.passwordElement=element(by.name('password'));
        this.loginButton=element(by.tagName('loginbutton')); // Element by tagName
        this.needHelpElement=element(by.css('ng-reflect-name[button="NeedHelp?"]')) // Element by css selector
        this.successToast = element(by.css('span'));
        this.emailValidation = element(by.css('div[label="Wrong Email Address"]'));
        this.passwordValidation = element.all(by.css('div[label="ValidationMessage"]'));
        };

module.export = this.loginPage();