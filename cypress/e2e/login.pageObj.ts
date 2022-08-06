import { PageObj } from "./pageObj";

class LoginPageObj implements PageObj {
    
    private usernameSelector = 'input[name="username"]';
    private passwordSelector = 'input[type="password"]';
    private buttonSelector = 'button';

    visit() {
        cy.visit('/')
    }
    

    get username() {
        return cy.get(this.usernameSelector);
    }

    set username(val : any) {
        const element = this.username;

        element.type(val);
    }

    get password() {
        return cy.get(this.passwordSelector);
    }

    set password(val : any) {
        const element = this.password;

        element.type(val);
    }

    get button() {
        return cy.get(this.buttonSelector);
    }

    buttonClick() {
        this.button.click();
    }

    get msgErrorUserOrPass() {
        return cy.get('.MuiFormHelperText-root')
    }

}
export { LoginPageObj }