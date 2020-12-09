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
                command.CommandText = @"Insert Into Estudiante (Identificacion,Nombres,Apellido,FechaNacimiento,CiudadNacimiento,EstadoCivil,Telefono,Eps,InvOproyec,Conocimientoyprac,Seminarios,Distinciones   ,Sexo,Semestre,Correo) 
                                        values (@Identificacion,@Nombres,@Apellido,@FechaNacimiento,@CiudadNacimiento,@EstadoCivil,@Telefono,@Eps,@InvOproyec,@Conocimientoyprac,@Seminarios,@Distinciones,@Sexo,@Semestre,@Correo)";
                command.Parameters.AddWithValue("@Identificacion", estudiante.Identificacion);
                command.Parameters.AddWithValue("@Nombres", estudiante.Nombres);
                command.Parameters.AddWithValue("@Apellido", estudiante.Apellido);
                command.Parameters.AddWithValue("@FechaNacimiento", estudiante.FechaNacimiento);
                command.Parameters.AddWithValue("@CiudadNacimiento", estudiante.CiudadNacimiento);
                command.Parameters.AddWithValue("@EstadoCivil", estudiante.EstadoCivil);
                command.Parameters.AddWithValue("@Telefono", estudiante.Telefono);
                command.Parameters.AddWithValue("@Eps", estudiante.Eps);
                command.Parameters.AddWithValue("@InvOproyec", estudiante.InvOproyec);
                command.Parameters.AddWithValue("@Conocimientoyprac", estudiante.Conocimientoyprac);
                command.Parameters.AddWithValue("@Seminarios", estudiante.Seminarios);
                command.Parameters.AddWithValue("@Distinciones", estudiante.Distinciones);
                command.Parameters.AddWithValue("@Sexo", estudiante.Sexo);
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
                command.CommandText = "Select * from Estudiante";
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
            estudiante.Nombres = (string)dataReader["Nombres"];
            estudiante.Apellido = (string)dataReader["Apellido"];
            estudiante.FechaNacimiento = (string)dataReader["FechaNacimiento"];
            estudiante.CiudadNacimiento = (string)dataReader["CiudadNacimiento"];
            estudiante.EstadoCivil = (string)dataReader["EstadoCivil"];
            estudiante.Telefono = (string)dataReader["Telefono"];
            estudiante.Eps = (string)dataReader["Eps"];
            estudiante.InvOproyec = (string)dataReader["InvOproyec"];
            estudiante.Conocimientoyprac = (string)dataReader["Conocimientoyprac"];
            estudiante.Seminarios = (string)dataReader["Seminarios"];
            estudiante.Distinciones = (string)dataReader["Distinciones"];
            estudiante.Sexo = (string)dataReader["Sexo"];
            estudiante.Semestre = (string)dataReader["Semestre"];
            estudiante.Correo = (string)dataReader["Correo"];
            estudiante.Estado = (string)dataReader["Estado"];
            return estudiante;
        }
    }
}
