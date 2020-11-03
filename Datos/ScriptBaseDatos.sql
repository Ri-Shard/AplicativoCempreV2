CREATE DATABASE [Solicitudes];
USE  [Solicitudes]

CREATE TABLE [dbo].[Estudiante](
[Identificacion] [nvarchar](10) NOT NULL PRIMARY KEY,
[Nombre] [nvarchar](50) NULL,
[Sexo] [nvarchar](2) NULL,
[Edad] [int] NULL,
[Semestre] [int] NULL,
[Correo] [nvarchar](30) NULL,
) 
GO

COMMIT
