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

COMMIT
