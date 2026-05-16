Feature: SauceDemo Login

  Scenario: Login exitoso
    Given el usuario abre la pagina de SauceDemo
    When inicia sesion con usuario "standard_user" y clave "secret_sauce"
    Then debe visualizar la pagina de productos

  Scenario: Login fallido con credenciales invalidas
    Given el usuario abre la pagina de SauceDemo
    When inicia sesion con usuario "usuario_invalido" y clave "clave_invalida"
    Then debe visualizar un mensaje de error de login

  Scenario: Login fallido con usuario bloqueado
    Given el usuario abre la pagina de SauceDemo
    When inicia sesion con usuario "locked_out_user" y clave "secret_sauce"
    Then debe visualizar un mensaje de usuario bloqueado