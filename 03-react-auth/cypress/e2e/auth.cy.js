describe('Funcionalidad de Login', () => {
  it('Mi aplicación carga leyendo Home en /', () => {
    // 01. Arrange: Setup del estado de mi App
    cy.visit('/')

    // 02. Act: Ejecutar acciones / interactuar con la App
    cy.get('h1')
      .contains('Home') // 03. Assert: Verificar que la App se comporta como esperamos
  })

  it('Probar que funciona Login como CUSTOMER', () => {
    // 01. Arrange: Setup del estado de mi App
    cy.visit('/login')

    // 02. Act: Ejecutar acciones / interactuar con la App
    cy.get('input[type="email"]').type('drstrange@marvel.com')
    cy.get('input[type="password"]').type('multiverso')
    cy.get('button[type="submit"]').click()

    cy.get('h1').contains('Dashboard') // 03. Assert: Verificar que la App se comporta como esperamos
  })
})
