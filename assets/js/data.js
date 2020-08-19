
function getdata(idService)
{
	var data = [
		{//0
			name: "Active Directory",
			descrption: "Un directorio es una estructura jerárquica que almacena información sobre objetos en la red. Un servicio de directorio, como los Servicios de dominio de Active Directory (AD DS), proporciona los métodos para almacenar datos de directorio y ponerlos a disposición de los usuarios y administradores de la red. Por ejemplo, AD DS almacena información sobre cuentas de usuario, como nombres, contraseñas, números de teléfono, etc., y permite que otros usuarios autorIdizados en la misma red accedan a esta información.",
			videos:[
				{
					name:"Instalación y Configuración",
					link:"10c9XWIw4gftFFU5keiwsnXstyBx61-Sf",
					autorId:0,
				}
			],
		},
		{//1
			name: "Carpeta Grupal Desde el Servidor",
			descrption: "",
			videos:[
				{
					name:"Se comparte una carpeta publica para el grupo de usuarios del servidor",
					link:"1IxtlO00VXk6zbHjK9Eb0og93VoOZXZQ0",
					autorId:3,
				},
			],
		},
		{//2
			name: "DHCP",
			descrption: "El protocolo de configuración dinámica de host (en inglés: Dynamic Host Configuration Protocol, también conocido por sus siglas de DHCP) es un protocolo de red de tipo cliente/servidor mediante el cual un servidor DHCP asigna dinámicamente una dirección IP y otros parámetros de configuración de red a cada dispositivo en una red para que puedan comunicarse con otras redes IP.",
			videos:[
				{
					name:"Instalación y Configuración de DHCP",
					link:"1-AKI45YWUK-dLbsYB-ACXe6O23i0zBll",
					autorId:0,
				},
			],
		},
		{//3
			name: "DNS",
			descrption: "El proceso de traducción de los nombres de dominio en direcciones numéricas que las máquinas puedan entender es lo que se conoce como resolución de nombres, una labor que realiza el Domain Name System, en castellano Sistema de Nombres de Dominio, conocido por sus siglas DNS.",
			videos:[
				{
					name:"Instalación y Configuración del DNS",
					link:"1O7fyv1d4mpmYz4zex07C67TtWppJ1hRf",
					autorId:0,
				}
			],
		},
		{//4
			name: "Instalación de GPM y Políticas de Grupo",
			descrption: "Group Policy Management es una herramienta administrativa para administrar las políticas de grupo en toda la empresa.</br></br>Directiva de grupo es un conjunto de reglas que controlan el entorno de trabajo de cuentas de usuario y cuentas de equipo. Directiva de grupo proporciona la gestión centralizada y configuración de sistemas operativos, aplicaciones y configuración de los usuarios en un entorno de Active Directory.",
			videos:[
				{//0
					name:"Instalación del Group Policy Management ",
					link:"1VMO43D5D8jNHj1G2A32FIUCqg--v9fx9",
					autorId:1,
				},
				{//1
					name:"Renombrar el usuario administrador y el usuario invitado",
					link:"1pTy8imjpF2gNv91mm09QM2q-bdqtDW_H",
					autorId:2,
				},
				{//2
					name:"Definir pagina de inicio de internet explorer",
					link:"1Wtl3d1hEIullx334bTMxwNX9DCMdlzZN",
					autorId:3,
				},
				{//3
					name:"Colocar fondo de pantalla por defecto a los usuarios invitados",
					link:"1afx_VPNCEa-3GEEynGVIuXJ29PseP9f3",
					autorId:3,
				},
				{//4
					name:"Deshabilitar Notepad y Regedit para Invitados",
					link:"1pfCaMLKy-a-8DQ8mKf0QBzf_5b2OUY4h",
					autorId:2,
				},
				{//5
					name:"Deshabilitar panel de control para invitados",
					link:"1XonE5SX5vO6NLhAeiEQQ23lh74bLZM0t",
					autorId:3,
				},
				{//6
					name:"Actualizaciones automaticas del sistema operativo",
					link:"1kevZX-aeoFLlXHxynnj3cXuCCucUnnft",
					autorId:2,
				},

			],
		},
		{//5
			name: "Intranet",
			descrption: "",
			videos:[
				{
					name:"Instalación del IIS​",
					link:"1AzkMRATdRzIPOpqhomc2ovZnmiy35GmJ",
					autorId:2,
				},
				{
					name:"Asociar Cliente al Dominio",
					link:"11jJIA5zWY7wkC2ymBV1rTlX2SY_F3vU7",
					autorId:2,
				},
				{
					name:"Configurar Página por defecto de la empresa en el servidor web",
					link:"1Iqc_4tZmDDvGWRnznQbs7O0FKrIQnRza",
					autorId:3,
				},
			],
		},
		{//6
			name: "Certificate Authority (CA)",
			descrption: "En criptografía, las expresiones autoridad de certificación, o certificadora, o certificante, o las siglas AC o CA, señalan a una entidad de confianza, responsable de emitir y revocar los certificados, utilizando en ellos la firma electrónica, para lo cual se emplea la criptografía de clave pública.",
			videos:[
				{
					name:"Instalación del Certificate Authority",
					link:"1YoppOuOZD-1790nR6WlkJUa4NrjeZIbo",
					autorId:3,
				},
			],
		},
		{//7
			name: "Folder Redirection",
			descrption: "La redirección de carpetas y los archivos sin conexión se utilizan juntos para redirigir la ruta de las carpetas locales (como la carpeta Documentos) a una ubicación de red, mientras se almacena en caché el contenido localmente para aumentar la velocidad y la disponibilidad.",
			videos:[
				{
					name:"Configuración del Folder Redirection",
					link:"16SQK6SAEbqr6GcyXtxOteMAvo8ZJ3o7I",
					autorId:1,
				},
			],
		},
		{//8
			name: "Distributed File System (DFS)",
			descrption: "DFS administra archivos y carpetas en varios equipos. Tiene el mismo propósito que un sistema de archivos tradicional, pero está diseñado para proporcionar almacenamiento de archivos y acceso controlado a archivos en un área local amplia en las ciudades.</br></br>Namespaces DFS es un servicio de roles en Windows Server que le permite agrupar carpetas compartidas ubicadas en diferentes servidores en uno o más espacios de nombres estructurados lógicamente. Esto hace posible brindar a los usuarios una vista virtual de carpetas compartidas, donde una única ruta conduce a archivos ubicados en múltiples servidores.",
			videos:[
				{
					name:"Instalación del DFS y configuración de un Namespace",
					link:"1E2d1lffSPcAqx_itO6D4-IblIGTmMC9Q",
					autorId:1,
				},
			],
		},
		{//9
			name: "HTTP y HTTPS",
			descrption: "El Protocolo seguro de transferencia de hipertexto (en inglés, Hypertext Transfer Protocol Secure o HTTPS) es un protocolo de aplicación basado en el protocolo HTTP, destinado a la transferencia segura de datos de hipertexto, es decir, es la versión segura de HTTP.",
			videos:[
				{
					name:"Pasar de HTTP a HTTPS",
					link:"1kvwvlXbwZ5Kg_loUH3KCNg7TRPA8ajIH",
					autorId:3,
				}
			],
		},
		{//10
			name: "Mapear Unidad P",
			descrption: "Mapear una unidad de red es configurar una carpeta de archivos en un ordenador remoto para compartir archivos o carpetas de datos en una Red de Área Local.",
			videos:[
				{
					name:"Mapeo de un disco P privado para cada usuario",
					link:"1MT6AZ5tjzENZyEZ-PPJHuAUMgsPnLNYz",
					autorId:1,
				}
			],
		},
	];
	var dataReturn = null;
	if(data[idService])
	{
		dataReturn = data[idService];
	}
	return dataReturn;
}


function getAutors(id)
{
	var autors=[
		{
			name:"Daniel Amir",
			descrption:"Tecnología de Información y Comunicación",
			email:"damirc@ucenfotec.ac.cr",
		},
		{
			name:"Gabriel Jara Catarinella",
			descrption:"Desarrollo de Software",
			email:"gjarac@ucenfotec.ac.cr"
		},
		{
			name:"Ignacio Molina Alvarado",
			descrption:"Desarrollo de Software",
			email:"molinaa@ucenfotec.ac.cr",
		},
		{
			name:"Marvin Calvo Acuña",
			descrption:"Desarrollo de Software",
			email:"mcalvoa@ucenfotec.ac.cr",
		},
	];
	return autors[id];
}