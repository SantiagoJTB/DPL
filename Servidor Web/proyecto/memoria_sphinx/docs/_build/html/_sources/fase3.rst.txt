Fase 3: Configuración básica del servidor
=========================================

Archivo de configuración principal (`myhttpd.conf`):

.. code-block:: apacheconf

    ServerName localhost
    Listen 80
    DocumentRoot "/usr/local/apache2/htdocs/dist/public"

    <Directory "/usr/local/apache2/htdocs/dist/public">
        Options Indexes FollowSymLinks
        AllowOverride None
        Require all granted
    </Directory>

    ErrorLog "/usr/local/apache2/logs/error.log"
    CustomLog "/usr/local/apache2/logs/access.log" common

Módulos activados y configuración adicional:

.. code-block:: apacheconf

    LoadModule dir_module modules/mod_dir.so
    LoadModule mime_module modules/mod_mime.so
    LoadModule log_config_module modules/mod_log_config.so
    LoadModule alias_module modules/mod_alias.so

    <IfModule dir_module>
        DirectoryIndex index.html
    </IfModule>

Acceso local: ``http://localhost:8080``

.. image:: _static/fase3.png
   :alt: Evidencia Fase 3
