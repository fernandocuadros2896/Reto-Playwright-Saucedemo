# Reto de Automatización Front – SauceDemo

## Descripción

Este proyecto contiene una suite de pruebas automatizadas para la aplicación web SauceDemo, desarrollada utilizando:

- Playwright
- Cucumber
- JavaScript

Aplicando el patrón de diseño Page Object Model (POM).

## Tecnologías utilizadas

- JavaScript
- Node.js
- Playwright
- Cucumber (BDD)
- Page Object Model (POM)
- IntelliJ IDEA

---

## Estructura del proyecto

```text
features/  -> Escenarios en Gherkin
pages/     -> Page Objects
steps/     -> Step Definitions
support/   -> Hooks
```

---

## Escenarios cubiertos

### Login

- Login exitoso con usuario válido
- Login fallido con credenciales inválidas
- Login fallido con usuario bloqueado

### Compra

- Agregar producto al carrito
- Visualizar producto en el carrito
- Completar compra exitosamente

---

## Patrón de diseño aplicado

Se utilizó el patrón Page Object Model (POM) para separar la lógica de interacción con la interfaz de usuario de los pasos definidos en Cucumber.

---

## Estrategia de automatización

La automatización se enfocó en cubrir los siguientes flujos críticos:

- Autenticación de usuarios
- Validación de errores de login
- Gestión del carrito de compras
- Proceso completo de compra

---

## Instalación

```bash
npm install
npx playwright install
```

---

## Ejecución de pruebas

```bash
npm test
```
