1. npm init
2. git init
2. crear .gitignore
3. crear index.js
4. instalar express y nodemon
5. creamos el script start
6. creamos el script dev
7. crear servidor (app.listen);
8. crear router de index
9. importar router de index y app.use en index.js
10. instalamos mongoose.
7. crear db.js con la conexión a base de datos
8. importar db.js en index.js y ejecutamos connect();
8. instalar hbs
9. crear carpeta views
10. configurar servidor en index.js con app.set views y view engine
11. probar que las vistas funcionan
12. añadir middleware de ruta 404
13. añadir middleware de error
14. replantear modelos (esto lo tenéis que hecho vosotros antes de empezar)
15. creados modelos de User y Product
16. Autenticación...
17. instarlar passport y passport-local bcrypt
17. Creamos carpeta auth
18. crear index.js en ./auth (director de orquesta para auth, coordina todas las estrategias)
21. utils.js para meter las functiones isValidPassword y isValidEmail.
20. crear y exportar registerStrategy en ./registerStrategy.js
21. crear routes de auth y meter get y post de register
22. añadir vista de register
22. añadir express.json() y express.urlencoded() en index.js
21. añadir el archivo de passport al index.js y usar passport.initialize()
22. probar el registro
19. crear y exportar loginStrategy en ./loginStrategy.js
21. crear routes de auth y meter get y post de login
20. usar passport.use y declarar la estrategia de login en /auth/index.js
21. probar login
22. instalar connect-mongo y express-session y configurarlos
23. crear rutas de producto (get /, get /create, post /create)
24. crear las vistas de /products y /products/create
28. crear el post para guardar productos
29. probar que los productos funcionan y las vistas también
30. crear la carpeta public y meterle .keep
31. definir directorio publico en index.js con express.static
25. crear carpeta middleware
26. npm i multer
27. crear archivo file.middleware y configurarlo


--------
