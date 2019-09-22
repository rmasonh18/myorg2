//import { getGreeting } from '../support/app.po';
import { getAddTodoButton, getTodos } from'../support/app.po';

describe('TodoApps', () => {
  beforeEach(() => cy.visit('/'));

  it('should display todos', () => {
    //getGreeting().contains('Welcome to todos!');
    getTodos().should(t => expect(t.length).equal(2));
    getAddTodoButton().click();
    getTodos().should(t => expect(t.length).equal(3));
});
});
