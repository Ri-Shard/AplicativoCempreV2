using System;
using System.Data.SqlClient;
using Entity;
using System.Collections.Generic;  

namespace Datos
{
    public class EmpresaRepository
    {
        private readonly SqlConnection _connection;
        private readonly List<Empresa> _empresas = new List<Empresa>();

        public EmpresaRepository(ConnectionManager connection)
        {
            _connection = connection._conexion;
        }

        public void Guardar(Empresa empresa)
        {
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = @"Insert Into Empresa (RazonSocial,Nit,Pais,Departamento,Ciudad,Direccion,Sector,Descripcion,NombreRepresentante,ApellidoRepresentante,CedulaRepresentante,Password) 
                                        values (@RazonSocial,@Nit,@Pais,@Departamento,@Ciudad,@Direccion,@Sector,@Descripcion,@NombreRepresentante,@ApellidoRepresentante,@CedulaRepresentante,@Password)";
                command.Parameters.AddWithValue("@RazonSocial", empresa.RazonSocial);
                command.Parameters.AddWithValue("@Nit", empresa.Nit);
                command.Parameters.AddWithValue("@Pais", empresa.Pais);
                command.Parameters.AddWithValue("@Departamento", empresa.Departamento);
                command.Parameters.AddWithValue("@Ciudad", empresa.Ciudad);
                command.Parameters.AddWithValue("@Direccion", empresa.Direccion);
                command.Parameters.AddWithValue("@Sector", empresa.Sector);
                command.Parameters.AddWithValue("@Descripcion", empresa.Descripcion);
                command.Parameters.AddWithValue("@NombreRepresentante", empresa.NombreRepresentante);
                command.Parameters.AddWithValue("@ApellidoRepresentante", empresa.ApellidoRepresentante);
                command.Parameters.AddWithValue("@CedulaRepresentante", empresa.CedulaRepresentante);
                command.Parameters.AddWithValue("@Password", empresa.Password);
                var filas = command.ExecuteNonQuery();
            }
        }    
        public List<Empresa> ConsultarTodos()
        {
            SqlDataReader dataReader;
            List<Empresa> empresas = new List<Empresa>();
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "Select * from Empresa";
                dataReader = command.ExecuteReader();
                if (dataReader.HasRows)
                {
                    while (dataReader.Read())
                    {
                        Empresa empresa = DataReaderMapToPerson(dataReader);
                        empresas.Add(empresa);
                    }
                }
            }
            return empresas;
        }
        public Empresa BuscarPorIdentificacion(string Nit)
        {
            SqlDataReader dataReader;
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "select * from Empresa where Nit=@Nit";
                command.Parameters.AddWithValue("@Nit", Nit);
                dataReader = command.ExecuteReader();
                dataReader.Read();
                return DataReaderMapToPerson(dataReader);
            }
        }
        private Empresa DataReaderMapToPerson(SqlDataReader dataReader)
        {
            if(!dataReader.HasRows) return null;
            Empresa empresa = new Empresa();
            empresa.RazonSocial = (string)dataReader["RazonSocial"];
            empresa.Nit = (string)dataReader["Nit"];
            empresa.Pais = (string)dataReader["Pais"];
            empresa.Departamento = (string)dataReader["Departamento"];
            empresa.Ciudad = (string)dataReader["Ciudad"];
            empresa.Direccion = (string)dataReader["Direccion"];
            empresa.Sector = (string)dataReader["Sector"];
            empresa.Descripcion = (string)dataReader["Descripcion"];
            empresa.NombreRepresentante = (string)dataReader["NombreRepresentante"];
            empresa.ApellidoRepresentante = (string)dataReader["ApellidoRepresentante"];
            empresa.CedulaRepresentante = (string)dataReader["CedulaRepresentante"];
            empresa.Estado = (string)dataReader["Estado"];
            empresa.Password = (string)dataReader["Password"];

            return empresa;
        }
    }
}
