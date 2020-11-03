using System;
using System.Data.SqlClient;
using Entity;
using System.Collections.Generic;  

namespace Datos
{
    public class EstudianteRepository
    {
        private readonly SqlConnection _connection;
        private readonly List<Estudiante> _estudiantes = new List<Estudiante>();

        public EstudianteRepository(ConnectionManager connection)
        {
            _connection = connection._conexion;
        }

        public void Guardar(Estudiante estudiante)
        {
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = @"Insert Into Estudiante (Identificacion,Nombre,Edad,Sexo,Semestre,Correo) 
                                        values (@Identificacion,@Nombre,@Edad,@Sexo,@Semestre,@Correo)";
                command.Parameters.AddWithValue("@Identificacion", estudiante.Identificacion);
                command.Parameters.AddWithValue("@Nombre", estudiante.Nombre);
                command.Parameters.AddWithValue("@Sexo", estudiante.Sexo);
                command.Parameters.AddWithValue("@Edad", estudiante.Edad);
                command.Parameters.AddWithValue("@Semestre", estudiante.Semestre);
                command.Parameters.AddWithValue("@Correo", estudiante.Correo);
                var filas = command.ExecuteNonQuery();
            }
        }    
        public List<Estudiante> ConsultarTodos()
        {
            SqlDataReader dataReader;
            List<Estudiante> estudiantes = new List<Estudiante>();
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "Select * from Estudiante ";
                dataReader = command.ExecuteReader();
                if (dataReader.HasRows)
                {
                    while (dataReader.Read())
                    {
                        Estudiante estudiante = DataReaderMapToPerson(dataReader);
                        estudiantes.Add(estudiante);
                    }
                }
            }
            return estudiantes;
        }
        public Estudiante BuscarPorIdentificacion(string identificacion)
        {
            SqlDataReader dataReader;
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "select * from Estudiante where Identificacion=@Identificacion";
                command.Parameters.AddWithValue("@Identificacion", identificacion);
                dataReader = command.ExecuteReader();
                dataReader.Read();
                return DataReaderMapToPerson(dataReader);
            }
        }
        private Estudiante DataReaderMapToPerson(SqlDataReader dataReader)
        {
            if(!dataReader.HasRows) return null;
            Estudiante estudiante = new Estudiante();
            estudiante.Identificacion = (string)dataReader["Identificacion"];
            estudiante.Nombre = (string)dataReader["Nombre"];
            estudiante.Sexo = (string)dataReader["Sexo"];
            estudiante.Edad = (int)dataReader["Edad"];
            estudiante.Semestre = (int)dataReader["Semestre"];
            estudiante.Correo = (string)dataReader["Correo"];
            return estudiante;
        }
    }
}
