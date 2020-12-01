CREATE DATABASE [Solicitudes];
USE  [Solicitudes]

CREATE TABLE [dbo].[Estudiante](
[Identificacion] [nvarchar](10) NOT NULL PRIMARY KEY,
[Nombres] [nvarchar](20) NULL,
[Apellido] [nvarchar](20) NULL,
[FechaNacimiento] [nvarchar](10) NULL,
[CiudadNacimiento] [nvarchar](20) NULL,
[EstadoCivil] [nvarchar](20) NULL,
[Telefono] [nvarchar](10) NULL,
[Eps] [nvarchar](20) NULL,
[InvOproyec] [nvarchar](80) NULL,
[Conocimientoyprac] [nvarchar](80) NULL,
[Seminarios] [nvarchar](80) NULL,
[Distinciones] [nvarchar](80) NULL,

[Sexo] [nvarchar](2) NULL,
[Edad] [int] NULL,
[Semestre] [int] NULL,
[Correo] [nvarchar](30) NULL,
) 
GO
CREATE TABLE [dbo].[Empresa](
[Nit] [nvarchar](20) NOT NULL PRIMARY KEY,
[RazonSocial] [nvarchar](40) NULL,
[Pais] [nvarchar](15) NULL,
[Departamento] [nvarchar](10) NULL,
[Ciudad] [nvarchar](20) NULL,
[Direccion] [nvarchar](20) NULL,
[Sector] [nvarchar](15) NULL,
[Descripcion] [nvarchar](80) NULL,
[NombreRepresentante] [nvarchar](20) NULL,
[ApellidoRepresentante] [nvarchar](20) NULL,
[CedulaRepresentante] [nvarchar](10) NULL,

) 
GO

        public string Sector { get; set; }
        public string Descripcion { get; set; }
        public string NombreRepresentante { get; set; }
        public string ApellidoRepresentante { get; set; }
        public string CedulaRepresentante { get; set; }
COMMIT
