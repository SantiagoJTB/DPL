Fase 2: Instalación del servidor web
===================================

- Se utilizó **Apache 2.4** dentro de un contenedor **Docker** basado en Debian.
- **Justificación:** Apache es estable, compatible con HTML, CSS y JS, soporta VirtualHosts. Docker evita tocar la máquina host.
- **Limitación:** Para subdominios y múltiples puertos es menos flexible que Nginx.

Dockerfile usado:

.. code-block:: dockerfile

    FROM httpd:2.4
    COPY dist/ /usr/local/apache2/htdocs/
    EXPOSE 80

Comandos para construir y ejecutar el contenedor:

.. code-block:: bash

    docker build -t mi-apache-app .
    docker run -d -p 8080:80 --name app1 mi-apache-app
    docker ps
    curl http://localhost:8080

.. image:: _static/fase2.png
   :alt: Evidencia Fase 2
