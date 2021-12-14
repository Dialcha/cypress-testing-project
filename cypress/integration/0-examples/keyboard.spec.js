describe('Keyboard press simulation',() => {
    it('should submit searchbox with pressig enter', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#searchTerm').type('just some text {enter}')
    })
})