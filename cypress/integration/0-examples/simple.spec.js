describe('Browser Actions', () => {
	it('should load books website', () => {
		cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 })
		cy.url().should('include', 'index.html')
        cy.log('Before Reload!!')
        cy.reload()
        cy.log('After Reload')
	})

	it('should click on Travel category', () => {
		cy.get('a').contains('Travel').click()
		cy.get('h1').contains('Travel')
	})

    it('should display correct number of books', () => {
        cy.get('.product_pod').its('length').should('eq', 11)
    })

    it('should click on Poetry Category', () => {
        cy.get('a').contains('Poetry').click()
        cy.get('h1').contains('Poetry')
    })

    it('should enter on Olio book and check price', () => {
        cy.get('.product_pod').contains('Olio').click()
        cy.get('p').contains('23.88')
    })

})

// Another commands
// it('Should load correct url', ()=>{
//     cy.visit('https://example.com/', {timeout: 10000})
// })

// it('should check correct url', () => {
//     cy.url().should('include', 'example.com')
// })

// it('shuld wait for 3 seconds', () => {
//     cy.wait(3000)
// })

// it('should pause the execution', () => {
//     cy.pause()
// })

// it('should check for correct elemets on the page', () => {
//     cy.get('h1').should('be.visible')
// })
