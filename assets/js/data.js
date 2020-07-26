

var data = [
		{
			name: "Active Directory",
			descrption: "Un directorio es una estructura jerárquica que almacena información sobre objetos en la red. Un servicio de directorio, como los Servicios de dominio de Active Directory (AD DS), proporciona los métodos para almacenar datos de directorio y ponerlos a disposición de los usuarios y administradores de la red. Por ejemplo, AD DS almacena información sobre cuentas de usuario, como nombres, contraseñas, números de teléfono, etc., y permite que otros usuarios autorizados en la misma red accedan a esta información.",
			instalacion:
			[
				{
					name:"video instalacion",
					link:"https://drive.google.com/file/d/14hXm13L5S_PcPcgeTzNlMAnJyVzsVwsW/preview",
				},
				{
					name:"video instalacion",
					link:"https://drive.google.com/file/d/1bkuRIqEzhKHSKzQ5-FEhCzafdQWHacbR/preview",
				},
				{
					name:"video instalacion",
					link:"https://drive.google.com/file/d/1bkuRIqEzhKHSKzQ5-FEhCzafdQWHacbR/preview",
				},
			],
			configuracion:
			[
				{
					name:"video Configuracion",
					link:"https://drive.google.com/file/d/14hXm13L5S_PcPcgeTzNlMAnJyVzsVwsW/preview",
				},
				{
					name:"video Configuracion",
					link:"https://drive.google.com/file/d/1bkuRIqEzhKHSKzQ5-FEhCzafdQWHacbR/preview",
				},
				{
					name:"video Configuracion #4",
					link:"https://drive.google.com/file/d/1bkuRIqEzhKHSKzQ5-FEhCzafdQWHacbR/preview",
				},
			],
		},
		{
			name: "DNS",
			descrption: "",
			instalacion:
			[
				{
					name:"video instalacion",
					link:"https://drive.google.com/file/d/14hXm13L5S_PcPcgeTzNlMAnJyVzsVwsW/preview",
				},
				{
					name:"video instalacion",
					link:"https://drive.google.com/file/d/14hXm13L5S_PcPcgeTzNlMAnJyVzsVwsW/preview",
				},
			],
			configuracion:
			[
				{
					name:"video Configuracion",
					link:"https://drive.google.com/file/d/14hXm13L5S_PcPcgeTzNlMAnJyVzsVwsW/preview",
				},
				{
					name:"video Configuracion",
					link:"https://drive.google.com/file/d/14hXm13L5S_PcPcgeTzNlMAnJyVzsVwsW/preview",
				},
			],
		},
		{
			name: "DHCP",
			descrption: "",
			instalacion:
			[
				{
					name:"video instalacion",
					link:"https://drive.google.com/file/d/1bkuRIqEzhKHSKzQ5-FEhCzafdQWHacbR/preview",
				},
				{
					name:"video instalacion",
					link:"https://drive.google.com/file/d/14hXm13L5S_PcPcgeTzNlMAnJyVzsVwsW/preview",
				},
			],
			configuracion:
			[
				{
					name:"video Configuracion",
					link:"https://drive.google.com/file/d/1bkuRIqEzhKHSKzQ5-FEhCzafdQWHacbR/preview",
				},
				{
					name:"video Configuracion",
					link:"https://drive.google.com/file/d/14hXm13L5S_PcPcgeTzNlMAnJyVzsVwsW/preview",
				},
			],
		},
		{
			name: "WSUS",
			descrption: "",
			instalacion:
			[
				{
					name:"video instalacion",
					link:"https://drive.google.com/file/d/14hXm13L5S_PcPcgeTzNlMAnJyVzsVwsW/preview",
				},
				{
					name:"video instalacion",
					link:"https://drive.google.com/file/d/1bkuRIqEzhKHSKzQ5-FEhCzafdQWHacbR/preview",
				},
			],
			configuracion:
			[
				{
					name:"video Configuracion",
					link:"https://drive.google.com/file/d/14hXm13L5S_PcPcgeTzNlMAnJyVzsVwsW/preview",
				},
				{
					name:"video Configuracion",
					link:"https://drive.google.com/file/d/1bkuRIqEzhKHSKzQ5-FEhCzafdQWHacbR/preview",
				},
			],
		},
	];

function getdata(idService)
{

	var dataReturn = null;
	if(data[idService])
	{
		dataReturn = data[idService];
	}
	return dataReturn;
}

