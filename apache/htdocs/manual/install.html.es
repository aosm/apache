<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<!-- translation 1.31 -->

<html>
  <head>
    <meta name="generator" content="HTML Tidy, see www.w3.org" />
    <meta http-equiv="Content-Type"
    content="text/html; charset=iso-8859-1" />

    <title>Compilaci�n e Instalaci�n de Apache</title>
  </head>
<!-- Background white, links blue (unvisited), navy (visited), red (active) -->
  <BODY
   BGCOLOR="#FFFFFF"
   TEXT="#000000"
   LINK="#0000FF"
   VLINK="#000080"
   ALINK="#FF0000"
  >
<!--#include virtual="header.html" -->

    <h1 align="CENTER">Compilaci�n e Instalaci�n de Apache 1.3</h1>

    <p>Este documento cubre la compilaci�n e instalaci�n de Apache
    en sistemas Unix, usando el m�todo manual de construcci�n e
    instalaci�n. Si desea usar la interfaz estilo autoconf, deber�
    leer el fichero <code>INSTALL</code> en el directorio ra�z de
    la distribuci�n
    fuente de Apache. Para la compilaci�n e instalaci�n en
    plataformas espec�ficas, consulte</p>

    <ul>
      <li><a href="windows.html">Usar Apache con Microsoft
      Windows</a></li>

      <li><a href="netware.html">Usar Apache con Novell Netware
      5</a></li>

      <li><a href="mpeix.html">Usar Apache con HP MPE/iX</a></li>

      <li><a href="unixware.html">Compilaci�n de Apache bajo
      UnixWare</a></li>

      <li><a href="readme-tpf.html">Vistazo general de la versi�n
      TPF de Apache</a></li>
    </ul>

    <h2>Bajarse Apache</h2>

    <p>La informaci�n de la �ltima versi�n de Apache puede
    encontrarla en <a href="http://www.apache.org/">
    http://www.apache.org/</a>. En esta web podr� encontrar las
    versiones finales, versiones beta e informaci�n de sitios y
    r�plicas en la web y por ftp an�nimo.</p>

    <p>Si se ha bajado la distribuci�n binaria, vaya a <a
    href="#install">Instalaci�n de Apache</a>. Si no es as� lea la
    siguiente secci�n como compilar el servidor.</p>

    <h2>Compilaci�n de Apache</h2>

    <p>La compilaci�n de Apache consiste en tres pasos. Primero
    seleccionar qu� <strong>m�dulos</strong> de Apache quiere
    incluir en el servidor. Segundo crear una configuraci�n para su
    sistema operativo. Tercero compilar el ejecutable.</p>

    <p>Toda la configuraci�n de Apache est� en el directorio
    <code>src</code> de la distribuci�n. Vaya al
    directorio <code>src</code>.</p>

    <ol>
      <li>
        <p>Seleccione m�dulos para compilar, en el fichero de
        <code>configuraci�n</code> de Apache. Descomente las l�neas
        correspondientes a los m�dulos opcionales que desee incluir
        (entre las l�neas <code>AddModule</code> al final del fichero), o escriba
        nuevas l�neas correspondientes a m�dulos adicionales que
        haya bajado o programado. (Vea <a href="misc/API.html">
        API.html</a> para ver la documentaci�n preliminar de c�mo
        escribir m�dulos Apache). Los usuarios avanzados pueden
        comentar los m�dulos por defecto si est�n seguros de que no
        los necesitan (tenga cuidado, ya que algunos de estos
        m�dulos son necesarios para el buen funcionamiento y una
        correcta seguridad del servidor).</p>

        <p>Deber�a leer tambi�n las instrucciones del fichero de
        <code>Configuraci�n</code> para comprobar si necesita
        configurar unas <code>l�neas</code> u otras.</p>
      </li>

      <li>
        <p>Configure Apache para su sistema operativo. Usted puede
        ejecutar un script como el mostrado m�s abajo.  Aunque si
        esto falla o usted tiene alg�n requerimiento especial
        (<i>por ejemplo</i> incluir una librer�a adicional exigida por
        un m�dulo opcional) puede editarlo para utilizar en el
        fichero de <code>Configuraci�n</code> las siguientes
        opciones: <code>EXTRA_CFLAGS, LIBS,
        LDFLAGS,INCLUDES.</code></p>

        <p>Ejecute el script de <code>configuraci�n</code>:</p>

        <blockquote>
<pre>
    % Configure
    Using 'Configuration' as config file
     + configured for &lt;whatever&gt; platform
     + setting C compiler to &lt;whatever&gt; *
     + setting C compiler optimization-level to &lt;whatever&gt; *
     + Adding selected modules
     + doing sanity check on compiler and options
    Creating Makefile in support
    Creating Makefile in main
    Creating Makefile in os/unix
    Creating Makefile in modules/standard
</pre>
        </blockquote>

        <p>(*: Dependiendo de la configuraci�n y de su sistema. El
        resultado podr�a no coincidir con el mostrado; no hay
        problema).</p>

        <p>Esto genera un fichero <code>Makefile</code>
	 a ser usado en el tercer
        paso. Tambi�n crea un <code>Makefile</code> en el
	 directorio <code>support</code>,
        para la compilaci�n de programas de soporte.</p>

        <p>(Si quiere mantener varias configuraciones, puede
        indicarle a <code>Configure</code> una de las opciones en un
        fichero, como <code>Configure -fichero
        configuraci�n.ai</code>).</p>
      </li>

      <li>Escriba <code>make</code>.</li>
    </ol>

    <p>Los m�dulos de la distribuci�n de Apache son aquellos que
    hemos probado y utilizado regularmente varios miembros del grupo
    de desarrollo de Apache. Los m�dulos adicionales (creados por
    miembros del grupo o por terceras personas) para necesidades o
    funciones espec�ficas est�n disponibles en &lt;<a
    href="http://www.apache.org/dist/httpd/contrib/modules/">http://www.apache.org/dist/httpd/contrib/modules/</a>&gt;.
    Hay instrucciones en esa p�gina para a�adir estos m�dulos en el
    n�cleo de Apache.</p>

    <h2><a id="install" name="install">Instalaci�n de
    Apache</a></h2>

    <p>Tendr� un fichero binario llamado <code>hhtpd</code> en el
    directorio <code>src</code>. Una distribuci�n binaria de Apache
    ya traer� este fichero.</p>

    <p>El pr�ximo paso es instalar el programa y configurarlo.
    Apache esta dise�ado para ser configurado y ejecutado desde los
    directorios donde fue compilado. Si quiere ejecutarlo desde otro
    lugar, cree un directorio y copie los directorios
    <code>conf</code>, <code>logs</code> e <code>icons</code>. En
    cualquier caso deber�a leer las <a
    href="misc/security_tips.html#serverroot">sugerencias de
    seguridad</a> que describen c�mo poner los permisos del
    directorio ra�z.</p>

    <p>El paso siguiente es editar los ficheros de configuraci�n del
    servidor. Consiste en configurar varias
    <strong>directivas</strong> en los tres ficheros
    principales. Por defecto, estos ficheros est�n en el directorio
    <code>conf</code> y se llaman <code>srm.conf</code>,
     <code>access.conf</code> y <code>httpd.conf</code>. Para ayudarle a
    comenzar, hay ejemplos de estos ficheros en el directorio de la
    distribuci�n, llamados <code>srm.conf-dist</code>,
    <code>access.conf-dist</code> y <code>httpd.conf-dist</code>.
    Copie o renombre estos ficheros a los correspondientes nombres
    sin la terminaci�n <code>-dist</code>. Edite cada uno de
    ellos. Lea los comentarios cuidadosamente. Un error en la
    configuraci�n de estos ficheros podr�a provocar fallos en el
    servidor o volverlo inseguro. Tendr� tambi�n un fichero
    adicional en el directorio <code>conf</code> llamado
    <code>mime.conf</code>. Este fichero normalmente no tiene que
    ser editado.</p>

    <p>Primero edite el fichero <code>http.conf</code>. Este
    configura atributos generales del servidor: el n�mero de puerto,
    el usuario que lo ejecuta, <i>etc.</i> El siguiente a editar
    es <code>srm.conf</code>; este fichero configura la ra�z del
    �rbol de los documentos, funciones especiales como HTML
    analizado sint�cticamente por el servidor, mapa de imagen,
    <i>etc.</i> Finalmente, edite <code>access.conf</code> que
    configura los accesos.</p>

    <p>Adem�s de estos tres ficheros, el comportamiento del servidor
    puede ser modificado directorio a directorio usando los ficheros
    <code>.htaccess</code> para los directorios en los que acceda el
    servidor.</p>

    <h3>�Configure el sistema de tiempo correctamente!</h3>

    <p>Una operaci�n de un servidor web requiere un tiempo concreto,
    ya que algunos elementos del protocolo HTTP se expresan en
    funci�n de la hora y el d�a. Por eso, es hora de investigar la
    configuraci�n de NTP o de otro sistema de sincronizaci�n de su
    Unix o lo que haga de equivalente en NT.</p>

    <h2>Programas de soporte para la compilaci�n</h2>

    <p>Adem�s del servidor principal <code>httpd</code> que se
    compila y configura como hemos visto, Apache incluye programas
    de soporte. Estos no son compilados por defecto. Los programas
    de soporte est�n en el directorio <code>support</code>. Para
    compilar esos programas, entre en el directorio indicado y
    ejecute el comando:</p>
        <blockquote>
<pre>
    make
</pre>
        </blockquote>
    <!--#include virtual="footer.html" -->
  </body>
</html>


