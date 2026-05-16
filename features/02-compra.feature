Feature: Comprar en SauceDemo

  Scenario: Agregar producto al carrito
    Given el usuario abre la pagina de SauceDemo
    When inicia sesion con usuario "standard_user" y clave "secret_sauce"
    Then debe visualizar la pagina de productos
    When agrega el producto "Sauce Labs Backpack" al carrito
    Then el icono del carrito debe mostrar 1 producto

  Scenario: Visualizar producto agregado en el carrito
    Given el usuario abre la pagina de SauceDemo
    When inicia sesion con usuario "standard_user" y clave "secret_sauce"
    Then debe visualizar la pagina de productos
    When agrega el producto "Sauce Labs Backpack" al carrito
    And navega al carrito de compras
    Then debe ver el producto "Sauce Labs Backpack" en el carrito

  Scenario: Completar compra exitosamente
    Given el usuario abre la pagina de SauceDemo
    When inicia sesion con usuario "standard_user" y clave "secret_sauce"
    Then debe visualizar la pagina de productos
    When agrega el producto "Sauce Labs Backpack" al carrito
    And navega al carrito de compras
    And inicia el checkout
    And completa sus datos con nombre "Fernando", apellido "Perez" y codigo postal "11001"
    And finaliza la compra
    Then debe visualizar el mensaje de compra exitosa