#  Reto de Automatización Front – SauceDemo

## 📌 Descripción

Este proyecto contiene una suite de pruebas automatizadas para la aplicación web **SauceDemo**, desarrollada utilizando **Playwright + Cucumber + JavaScript**, aplicando el patrón de diseño **Page Object Model (POM)**.

El objetivo es validar los flujos principales de la aplicación, incluyendo autenticación, gestión de carrito y proceso completo de compra.

---

## 🚀 Tecnologías utilizadas

* JavaScript
* Node.js
* Playwright
* Cucumber (BDD)
* Page Object Model (POM)

---

## 🏗️ Estructura del proyecto

```text
features/   → Escenarios en Gherkin
pages/      → Page Objects (interacción con UI)
steps/      → Step Definitions (lógica de negocio)
support/    → Hooks (setup y teardown)
```

---

## ✅ Escenarios cubiertos

### 🔐 Login

* Login exitoso con usuario válido
* Login fallido con credenciales inválidas
* Login fallido con usuario bloqueado

### 🛒 Compra

* Agregar producto al carrito
* Visualizar producto en el carrito
* Completar compra exitosamente

---

##  Patrón de diseño aplicado

Se utilizó el patrón **Page Object Model (POM)** para separar la lógica de interacción con la interfaz de usuario de los pasos definidos en Cucumber.

Esto permite:

* Mayor mantenibilidad
* Reutilización de código
* Mejor legibilidad

---

##  Estrategia de automatización

La automatización se enfocó en cubrir los flujos críticos solicitados:

* Autenticación de usuarios
* Validación de errores de login
* Gestión del carrito de compras
* Proceso completo de compra

Se implementaron escenarios positivos y negativos para validar distintos comportamientos del sistema.

---

## 🔑 Credenciales utilizadas

* **Usuario estándar:** standard_user / secret_sauce
* **Usuario bloqueado:** locked_out_user / secret_sauce

---

## ⚙️ Instalación

```bash
npm install
npx playwright install
```

---

## ▶️ Ejecución de pruebas

```bash
npm test
```

---

## 📊 Reportes

Al ejecutar las pruebas, se generan automáticamente reportes en:

```text
reports/
  cucumber-report.html
  cucumber-report.json
```


---

## 🎉 Resultado esperado

La ejecución debe completar correctamente todos los escenarios automatizados sin errores.
Y generar el reporte 

---

## Autor

Fernando Cuadros - Quality Engineer 