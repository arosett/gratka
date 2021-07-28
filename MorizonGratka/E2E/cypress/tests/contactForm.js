import contactFormPage from '../pages/contactForm.page';

describe('Morizon Gratka - Contact Form', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('morizonGratkaUrl'));
        cy.window().then((win) => {
            cy.spy(win, 'open').as('windowOpen');
          });
          cy.viewport('iphone-x')
    });

    it('should check validation on empty email adress', () => {
        contactFormPage.sendMessage();
        contactFormPage.assertValidationEmailVisibility('Pole "E-mail" jest wymagane');
    });

    it('should check validation on empty phone number', () => {
        contactFormPage.sendMessage();
        contactFormPage.assertValidationPhoneNumberVisibility('Pole "Telefon" jest wymagane');
    });

    it('should check validation on wrong email adress', () => {
        contactFormPage.insertEmailAdress('wrongemail')
        contactFormPage.sendMessage();
        contactFormPage.assertValidationEmailVisibility('Wpisz prawidłowy format adresu e-mail');
    });

    it('should check validation on wrong phone number', () => {
        contactFormPage.insertPhoneNumber('ABCD')
        contactFormPage.sendMessage();
        contactFormPage.assertValidationPhoneNumberVisibility('Nieprawidłowy format numeru telefonu komórkowego');
    });

    it('should check send message with proper data', () => {
        contactFormPage.insertPhoneNumber('796478213')
        contactFormPage.insertEmailAdress('marcel@o2.pl')
        contactFormPage.sendMessage();
        contactFormPage.checkIfMessageWasProperSend('Twoja wiadomość została wysłana');
    });

});
