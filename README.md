# 🍓 Fresa Cream Café

Sitio web para Fresa Cream Café, enfocado en la venta de fresas con crema, frappés y café, con pedidos personalizados enviados por WhatsApp.

---

## 🚀 Tecnologías

- React
- TypeScript
- Vite
- Tailwind CSS
- Git / GitHub

---

## Estructura de ramas
Principales
master → producción
develop → integración y pruebas
Temporales
feature/* → nuevas funcionalidades
fix/* → corrección de errores
docs/* → documentación
style/* → cambios visuales
refactor/* → mejora de código
chore/* → tareas técnicas

### Flujo de trabajo
1. Actualizar develop
git checkout develop
git pull

2. Crear una rama

git checkout -b feature (otra)/nombre-del-cambio

3. Guardar cambios
git add .
git commit -m "tipo: descripción del cambio"
git push origin nombre-de-la-rama

4. Integrar a develop

git checkout develop
git pull
git merge nombre-de-la-rama
git push

5. Pasar a producción

git checkout master
git pull
git merge develop
git push

6. Eliminar rama

git branch -d nombre-de-la-rama
git push origin --delete nombre-de-la-rama