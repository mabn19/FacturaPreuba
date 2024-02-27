Facturación Express API
Esta API RESTful desarrollada en Express.js permite la gestión de facturas, incluyendo la adición de productos y la conexión a una base de datos SQLite. Los datos de las facturas pueden ser consumidos por otra API REST para su visualización en una página HTML sencilla.

Requisitos previos
Node.js instalado en tu sistema. Puedes descargarlo desde la página oficial de Node.js.
Postman para realizar peticiones HTTP y probar la API. Puedes descargarlo desde la página oficial de Postman.
Instalación
Clona este repositorio en tu máquina local:

bash
Copy code
git clone https://github.com/mabn19/FacturaPreuba
Accede al directorio del proyecto:

bash
Copy code
cd factura
Instala las dependencias utilizando npm:

bash
Copy code
npm install
Uso
Inicia el servidor:

bash
Copy code
npm start
Utiliza Postman para realizar peticiones HTTP a la API. Puedes añadir productos a una factura utilizando el método POST a la ruta /facturas/:id_producto y obtener los detalles de una factura utilizando el método GET a la ruta /facturas/:id_factura.

Base de Datos
La base de datos utilizada en esta API es SQLite, y se encuentra en el archivo database.sqlite. No es necesario realizar ninguna configuración adicional para utilizarla, ya que se crea automáticamente al iniciar la aplicación.

Contribuciones
¡Las contribuciones son bienvenidas! Si encuentras algún error o tienes alguna mejora que sugerir, no dudes en abrir un issue o enviar un pull request.

Autor
Nombre: Miguel Babativa
GitHub: mabn19
Licencia
Este proyecto está bajo la Licencia MIT.
