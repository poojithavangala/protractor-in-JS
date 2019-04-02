const loginPage = require('loginPage.js');

describe('login page', function() {
        browser.get('https://url.path/login');
        it('Navigate to loginPage', function() {

        // Checking the current url
        const currentUrl = browser.getCurrentUrl();
        expect(currentUrl).toMatch('/login');
        });
        // Working Login Button
        it('should sign in', function() {
            loginPage.login('coding@project.com', 'Coding@123');
            expect(userId.getAttribute('value')).toEqual('coding@project.com');
            expect(passwordElement.getAttribute('value')).toEqual('Codin@123');
        // Click to sign in - waiting for Angular as it is manually bootstrapped.
            loginButton.click().then(function() {
            browser.waitForAngular();
            expect(this.successToast().getText()).toBe('You have logged in successfully');
            }, 10000);
        });
        // If you enter wrong email address, Show message ‘Wrong email address’
        it('wrong emailAddress validation', function() {
            loginPage.enterLoginID('coding@prct.com');
            expect(loginPage.emailValidation.getText())).toBe('Wrong email address'));
        });
        // If you enter wrong password, Show message ‘Email address and password doesn’t match’
        it('Password Validation', function() {
        loginPage.login('coding@project.com', 'Coding');
        expect(loginPage.passwordValidation.get(1).getText()).toBe('Email address and password doesnt match'));
        });
        // If you enter wrong password three times
        it('Enter password more than 3times', function() {
        loginPage.login('coding@project.com');
        loginPage.enterPassword('Coding@13');
        loginPage.enterPassword('Coding@1');
        loginPage.enterPassword('Codi23');
        expect(loginPage.passwordValidation.get(1).getText())
        .toBe('Email address and password doesn’t match. You only have one more chance. Please contact RightEye Support at 800-301-0803'));
        });
        // If you enter wrong password four times
        it('Enter password more than 3times', function() {
        loginPage.login('coding@project.com');
        loginPage.enterPassword('Coding@13');
        loginPage.enterPassword('Coding@1');
        loginPage.enterPassword('Codi23');
        loginPage.enterPassword('Cod3');
        expect(loginPage.passwordValidation.get(1).getText())
        .toBe('Your Email address is locked and invalid. Please contact RightEye Support at 800-301-0803'));
        });
        // Need Help
        it('Need Help', function() {
        loginPage.clickOnNeedHelp();
        });
});
