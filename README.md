# WeatherAppTelecom
Challenge sobre una WeatherApp, donde podemos ver 6 selectores de lado izquierdo de la pantalla, que muestran diferentes ciudades, entre ellas la ciudad actual.

# Levantar app
Para levantar la aplicacion hay que clonar el proyecto en su computadora, luego entrar a la carpeta "myapp" y correr
```bash
npm install
```
una vez instaladas las dependencias ejecutar el comando
```bash
npm install
```
Esto va a levantar la aplicación de forma local en el puerto 3000

# Diseño y desarrollo de la app
Para el diseño utilicé la libreria MUI (Material Ui) y apliqué "papers" sombreados para separar la información principal del dia actual y la cuidad seleccionada, con la informacón de los dias siguientes y por otro lado el selector.
Respecto a la estructura de carpetas agregué a la estructura general de "create-react-app", una carpeta llamda components, donde se encuentran carpetas con los nombres de los componentes, y dentro sus archivos jsx y css.
Realicé 4 componentes:

CardActualDay : Este componente recibe la información de la ciudad seleccionada y muestra los datos del día actual.

CardNextDays : Este componente recibe información sobre el estado del tiempo de los dias siguientes.

DateCountry : En este componente se renderiza CardActualDay y CardNextDays. Además filtra la información recibida para enviarlas a los componentes de manera más limpia

SelectCountries : En este componente se encuentra el selector de ciudades, y setea la ciudad seleccionada.

Para consultar a la Api utilice Axios, y la api de Open Weather App

# ideas para agregar al proyecto
Con un poco más de tiempo, podría agregar un loading para que sea mas amigable para el usuario, y también una barra de búsqueda para agregar los paises que desee el usuario.
