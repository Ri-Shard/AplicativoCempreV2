using System;
using System.Data.SqlClient;
using Entity;
using System.Collections.Generic;  

namespace Datos
{
    public class DeptoRepository
    {
        private readonly SqlConnection _connection;
        private readonly List<Depto> _deptos = new List<Depto>();

        public DeptoRepository(ConnectionManager connection)
        {
            _connection = connection._conexion;
        }

        public List<Depto> ConsultarTodos()
        {
            SqlDataReader dataReader;
            List<Depto> deptos = new List<Depto>();
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "select * from estado where ubicacionpaisid = 82";
                dataReader = command.ExecuteReader();
                if (dataReader.HasRows)
                {
                    while (dataReader.Read())
                    {
                        Depto depto = DataReaderMapToPerson(dataReader);
                        deptos.Add(depto);
                    }
                }
            }
            return deptos;
        }

        private Depto DataReaderMapToPerson(SqlDataReader dataReader)
        {
            if(!dataReader.HasRows) return null;
            Depto depto = new Depto();
            depto.Id = (decimal)dataReader["id"];
            depto.Ubicacion = (decimal)dataReader["ubicacionpaisid"];
            depto.Nombre = (string)dataReader["estadonombre"];

            return depto;
        }
    }
}
