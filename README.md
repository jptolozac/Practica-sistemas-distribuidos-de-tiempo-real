# Práctica: Sistemas Distribuidos de Tiempo Real

Este proyecto implementa una práctica relacionada con sistemas distribuidos en tiempo real, utilizando tecnologías modernas como Docker, Nginx y Protobuf. El objetivo principal es demostrar cómo coordinar servicios distribuidos con comunicación eficiente y sincronización.

El repositorio contiene un sistema distribuido de ejemplo que incluye múltiples servicios y un cliente. Cada componente está desarrollado para demostrar conceptos clave en sincronización y escalabilidad en sistemas distribuidos en tiempo real. Se usan herramientas como Docker para la orquestación y Nginx para la gestión de peticiones.

## Estructura del Proyecto

~~~
Practica-sistemas-distribuidos-de-tiempo-real/
├── client/               # Cliente para interactuar con los servicios
├── services/             # Directorio que contiene los servicios distribuidos
│   ├── service1/         # Servicio 1
│   ├── service2/         # Servicio 2
├── nginx/                # Configuraciones para el balanceador de carga Nginx
├── service.proto         # Definición de servicios con Protobuf
├── nginx.Dockerfile      # Dockerfile con imagen de nginx con config personalizada
└── README.md             # Este archivo
~~~

## Requisitos Previos

- Node.js y npm instalados.
- Docker instalado (desktop o bash).

## Instalación y Configuración
Clona el repositorio:

~~~bash
Copiar código
git clone https://github.com/jptolozac/Practica-sistemas-distribuidos-de-tiempo-real.git
cd Practica-sistemas-distribuidos-de-tiempo-real
~~~

### Construye y ejecuta el contenedor de nginx:

~~~bash
docker build -t nginx_balancer -f nginx.Dockerfile .
docker run -d -p 3005:3005 --name balancer nginx_balancer
~~~

### Instala dependencias y ejecuta los servidores

~~~bash
cd ./servicios/server1/
npm install
node ./gRPC.js
~~~

~~~bash
cd ./servicios/server2/
npm install
node ./gRPC.js
~~~

## Accede al sistema:

Los servicios estarán disponibles a través de localhost con Nginx gestionando las peticiones.

### Ejemplo de Uso

Ejecuta el cliente para interactuar con los servicios:

#### Instala dependencias y ejecuta el cliente

~~~bash
cd ./cliente
npm install
node ./index.js
~~~

Observa la interacción entre los servicios distribuidos, incluyendo la comunicación definida en service.proto.

## Tecnologías Utilizadas
- Docker: Modularización del balanceador de carga.
- Nginx: Balanceador de carga para gestionar tráfico.
- Protobuf: Serialización eficiente de datos entre servicios.
- Node.js: Desarrollo de cliente y servicios.
