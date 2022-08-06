
import { LoginPageObj } from './login.pageObj';

const allUsers = require('./login.fixture.json')

describe('Test case - Login', () => {

  const pageObj = new LoginPageObj();

  beforeEach(() => {
    pageObj.visit();
  })

  expect(allUsers, 'list of users').to.be.an('array')

  allUsers.forEach((user : any) => {
    context(`Login - ${user.testTitle}`, () => { 
      it(`Validate data login ${user.login}`, () => {
        cy.wrap(user).should('have.property', 'testTitle', user.testTitle)
        cy.wrap(user).should('have.property', 'login', user.login)
        cy.wrap(user).should('have.property', 'pass', user.pass)
        cy.wrap(user).should('have.property', 'success', user.success)
      })

      it(`${user.testTitle}`, () => {

        //arrange
        
        //act
        pageObj.username = user.login;
        pageObj.password = user.pass;
        pageObj.buttonClick();

        //assert
        if(user.success) {
          cy.url().should('include', '/login')
        }

        if(!user.success) {
          cy.url().should('include', '/login')
        }
        
      })
    })
  })

  


  

})