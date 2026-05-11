describe('Test sencillo TodoMVC', () => {

beforeEach(() => {
    cy.visit('https://todomvc.com/examples/react/dist/')
})

it('crear una tarea', () => {
    cy.get('.new-todo').type('tarea1{ENTER}')
    cy.get('.todo-list').contains('tarea1')
    })

it('marcar tarea como completada', () => {
    cy.get('.new-todo').type('tarea1{ENTER}')
    cy.get('.toggle').click()
    cy.contains('.todo-list li', 'tarea1').should('have.class', 'completed')
    })

it('desmarcar tarea como completada', () => {
    cy.get('.new-todo').type('tarea1{ENTER}')
    cy.get('.toggle').click()
    cy.contains('.todo-list li', 'tarea1').should('have.class', 'completed')
    cy.get('.toggle').click()
    cy.contains('.todo-list li', 'tarea1').should('have.class', '')
    })

it('editar tarea existente', () => {
    cy.get('.new-todo').type('tarea1{ENTER}') 
    cy.get('.todo-list').contains('tarea1').dblclick()
    cy.get('.todo-list').type(' modificada{enter}')
    cy.get('.todo-list').contains('tarea1 modificada')
    })

it('eliminar tarea', () => {
    cy.get('.new-todo').type('tarea1{ENTER}')
    cy.get('.destroy').click({ force: true })
    cy.get('.todo-list').should('not.exist')
})

it('aplicar los filtros', () => {
    cy.get('.new-todo').type('tarea1{ENTER}')
    cy.get('.new-todo').type('tarea2{ENTER}')
    cy.get('.new-todo').type('tarea3{ENTER}')
    cy.get('.new-todo').type('tarea4{ENTER}')
    cy.contains('.todo-list li', 'tarea3').find('.toggle').click()
    cy.contains('.todo-list li', 'tarea4').find('.toggle').click()
    cy.get('a:contains("Completed")').click()
    cy.get('.todo-list').contains('tarea3')
    cy.get('.todo-list').contains('tarea4')        
    cy.get('a:contains("Active")').click()
    cy.get('.todo-list').contains('tarea1')
    cy.get('.todo-list').contains('tarea2')
    cy.get('a:contains("All")').click()
})

})
