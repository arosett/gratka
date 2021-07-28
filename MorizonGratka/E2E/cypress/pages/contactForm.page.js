export default {
    emailInput: '#sender_email',
    phoneNumberInput: '#phone',
    emailInputErrorMessage: '#sender_email-error',
    phoneInputErrorMessage: '#phone-error',
    successValidationMessage: '#form-879678127-status',
    messageContent: '.content',
    messageSubmitButton: '.contactForm__submitBtn',
    defaultMessageHeader: '.defaultMessages__header', 
    informationNote: '.contactForm__informationNote',
    isUpToDateTemplate: '[data-analyticstag="szablony-aktualne"]', 
    morePhotosTemplate: '[data-analyticstag="szablony-zdjecia"]',
    movieTemplate: '[data-analyticstag="szablony-film"]',
    videoChatTemplate: '[data-analyticstag="szablony-film"]', 
    unhidePhoneNumber: '.phoneSmallButton__button',

    insertPhoneNumber(value) {
        cy.get(this.phoneNumberInput)
            .should('be.visible')
            .type(value)
    },

    insertEmailAdress(value) {
        cy.get(this.emailInput)
            .should('be.visible')
            .type(value)
    }, 

    assertValidationEmailVisibility(validationEmail){
        cy.get(this.emailInputErrorMessage)
            .should('be.visible')
            .and('contain.text', validationEmail);
        },
    
    assertValidationPhoneNumberVisibility(validationPhoneNumber) {
        cy.get(this.phoneInputErrorMessage)
            .should('be.visible')
            .and('contain.text', validationPhoneNumber);
    },

    sendMessage() {
        cy.get(this.messageSubmitButton)
            .should('be.visible')
            .click();
    },

    openPrivacyPolice() {
        cy.get(this.informationNote)
            .should('be.visible')
            .click();
    },


    waitForResponseStatus(requestAlias, status){
        cy.wait(`@${requestAlias}`)
            .its('response.statusCode')
            .should('equal', status);
    },

    checkIfMessageWasProperSend(messageValue) {
        cy.get(this.successValidationMessage)
            .should('be.visible')
            .and('contain.text', messageValue);
    }
};