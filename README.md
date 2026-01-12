# Chambeador — Sitio web de guías para generar ingresos con tecnología

Este repositorio contiene los archivos de la página **chambeador.cl**, un proyecto de contenido evergreen dedicado a explicar métodos legales y sostenibles para generar ingresos aprovechando la tecnología. El sitio está diseñado como un blog estático (HTML + CSS) para que sea fácil de alojar y mantener. Puedes publicarlo en GitHub Pages de forma gratuita y, con el tiempo, monetizarlo mediante publicidad como Google AdSense.

## Estructura del directorio

```
chambeador_site/
├── index.html                # Portada del sitio con secciones destacadas
├── about.html                # Página “Quiénes somos”
├── aviso-legal.html          # Aviso legal (requerido para la mayoría de redes publicitarias)
├── politica-privacidad.html  # Política de privacidad (requerida para AdSense)
├── style.css                 # Hoja de estilos globales
├── como-ganar-dinero/        # Categoría principal con los primeros 5 artículos
├── tecnologia-util/          # Índice de artículos sobre herramientas digitales
├── trabajo-remoto/           # Índice de artículos sobre empleo remoto
├── educacion-digital/        # Índice de artículos sobre habilidades digitales
└── guias/                    # Índice de artículos paso a paso
```

Cada artículo en la carpeta `como-ganar-dinero/` es una página HTML completa con navegación, contenido optimizado para SEO y un marcador de posición donde se puede insertar código de anuncios. Los demás directorios incluyen índices en blanco listos para que añadas más contenidos.

## Registro del dominio `chambeador.cl`

1. Visita el sitio oficial de **NIC Chile** (`www.nic.cl`) — la entidad encargada de los dominios `.cl`.
2. Busca la disponibilidad de `chambeador.cl` y selecciona el período de registro. Según las tarifas vigentes, el registro por 3 años cuesta **29 970 CLP** más IVA【748430205797612†L34-L45】.
3. Completa el formulario con tus datos personales o de tu empresa y realiza el pago. Recibirás acceso a la zona de gestión de DNS para configurar el dominio.

> **Nota:** Si prefieres utilizar un dominio internacional como `.com`, registradores como Namecheap ofrecen precios competitivos (alrededor de 6,35 € el primer año con renovación anual a 13,27 €)【409680922079944†L565-L567】.

## Publicar el sitio en GitHub Pages

GitHub Pages permite alojar sitios estáticos de manera gratuita. A continuación se describe el proceso para publicar este proyecto y conectarlo con tu dominio.

1. **Crear un repositorio en GitHub**

   - Inicia sesión en tu cuenta de GitHub y crea un nuevo repositorio, por ejemplo, `chambeador-site`.
   - Selecciona la opción **“Public”** para que GitHub Pages pueda servir los archivos.
   - **No** inicialices el repositorio con un README ni con archivos de plantilla; subirás tu propio contenido.

2. **Subir los archivos del sitio**

   - Descomprime el paquete `chambeador_site.zip` en tu equipo.
   - Abre la terminal o línea de comandos y navega a la carpeta descomprimida:

     ```bash
     cd /ruta/a/chambeador_site
     git init
     git add .
     git commit -m "Publicar sitio Chambeador"
     git branch -M main
     git remote add origin https://github.com/leoncohencontacto
     /chambeador-site.git
     git push -u origin main
     ```

   - Sustituye `tu_usuario` por tu nombre de usuario real en GitHub.

3. **Habilitar GitHub Pages**

   - En la página de tu repositorio en GitHub, ve a **Settings → Pages**.
   - En la sección **Source**, elige la rama `main` y la carpeta raíz (`/`). Guarda los cambios.
   - GitHub generará un enlace al sitio (por ejemplo, `https://tu_usuario.github.io/chambeador-site`).

4. **Configurar el dominio personalizado**

   - En la misma sección **Pages**, introduce `www.chambeador.cl` (o `chambeador.cl`) en el campo **Custom domain** y guarda.
   - En la zona DNS de NIC Chile, crea:
     - Un registro **A** que apunte a la IP de GitHub Pages (`185.199.108.153`, `185.199.109.153`, `185.199.110.153` y `185.199.111.153`).
     - Un registro **CNAME** para `www` que apunte a `tu_usuario.github.io`.
   - GitHub mostrará un mensaje de verificación. Una vez propagados los DNS (puede tardar unas horas), tu sitio será accesible desde `chambeador.cl`.

5. **Integración con Antigravity/Codex**

Si utilizas una plataforma como Antigravity para automatizar despliegues desde tu editor de código (Codex), asegúrate de:

1. Vincular tu repositorio `chambeador-site` en la configuración de Antigravity.
2. Configurar la acción de despliegue para que, cada vez que actualices o agregues contenido en Codex, se realice un `git push` al repositorio.
3. Verificar que GitHub Pages esté activado. Cada vez que subas cambios, GitHub Pages regenerará el sitio automáticamente sin intervención manual.

Ten en cuenta que la API de GitHub proporcionada en este entorno es de lectura; no podemos realizar commmits desde aquí. Por ello, los pasos anteriores son manuales y deben ejecutarse en tu entorno local o con tu herramienta Antigravity.

## Agregar publicidad y monetizar

Para obtener ingresos pasivos, recomendamos utilizar Google AdSense:

1. Crea una cuenta en Google AdSense con tu correo personal o de empresa. Debes ser mayor de 18 años y contar con contenido original【154458298379244†L40-L76】.
2. Añade tu sitio `chambeador.cl` a la cuenta y espera a que Google lo apruebe (puede tardar 1–4 semanas). Asegúrate de que el sitio incluya una **política de privacidad** y un **aviso legal**.
3. Cuando obtengas el código de anuncio, edita tus archivos HTML y sustituye la sección de marcador de anuncios (ubicada antes del pie de página) por el script de Google AdSense.
4. Sube los cambios al repositorio. GitHub Pages los publicará automáticamente.

## Plan de crecimiento y nuevas publicaciones

El éxito de `chambeador.cl` depende de ofrecer contenido de calidad de forma constante. Aquí tienes sugerencias para ampliar las secciones existentes:

- **Cómo ganar dinero con tecnología:** Artículos sobre marketing de afiliados, análisis de plataformas de freelancing, ideas para crear productos digitales, etc.
- **Tecnología útil:** Guías de herramientas de productividad, comparativas de servicios de nube, explicación de redes privadas virtuales (VPN), etc.
- **Trabajo remoto:** Consejos para organizar tu jornada, plataformas que ofrecen empleos a distancia, diferencias entre contrato y freelancing.
- **Educación digital:** Reseñas de cursos gratuitos, rutas de aprendizaje de programación, diseño, marketing, y más.
- **Guías paso a paso:** Tutoriales para crear un blog, configurar una tienda en línea, abrir una cuenta de PayPal, instalar un certificado SSL, etc.

Recuerda que la clave del ingreso pasivo es la constancia: cada artículo adicional incrementa tu biblioteca de contenidos y, por tanto, las posibilidades de recibir tráfico orgánico y monetizarlo.

## Licencia

Puedes usar, modificar y redistribuir este proyecto como desees, siempre que mantengas la esencia educativa y sin promesas engañosas. Se recomienda revisar periódicamente las políticas de Google AdSense y de dominios para cumplir con las normativas vigentes.
