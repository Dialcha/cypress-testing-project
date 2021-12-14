describe('Device Tests', () => {
    it('720p', () => {
        cy.viewport(1280, 720)
        cy.visit('https://www.example.com')
        cy.wait(3000)
    })

    it('1080p', () => {
        cy.viewport(1980, 1080)
        cy.wait(3000)
    })

    it('iPhone X', () => {
        cy.viewport('iphone-x')
        cy.wait(3000)
    })

    it('iPad Mini', () => {
        cy.viewport('ipad-mini')
        cy.wait(3000)
    })

    it('Macbook 15', () => {
        cy.viewport('macbook-15')
        cy.wait(3000)
    })
})