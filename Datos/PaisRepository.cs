using System;
using System.Data.SqlClient;
using Entity;
using System.Collections.Generic;  

namespace Datos
{
    public class PaisRepository
    {
        private readonly SqlConnection _connection;
        private readonly List<Pais> _paises = new List<Pais>();

        public PaisRepository(ConnectionManager connection)
        {
            _connection = connection._conexion;
        }

        public List<Pais> ConsultarTodos()
        {
            SqlDataReader dataReader;
            List<Pais> paises = new List<Pais>();
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "Select * from pais";
                dataReader = command.ExecuteReader();
                if (dataReader.HasRows)
                {
                    while (dataReader.Read())
                    {
                        Pais pais = DataReaderMapToPerson(dataReader);
                        paises.Add(pais);
                    }
                }
            }
            return paises;
        }

        private Pais DataReaderMapToPerson(SqlDataReader dataReader)
        {
            if(!dataReader.HasRows) return null;
            Pais pais = new Pais();
            pais.Id = (decimal)dataReader["id"];
            pais.Nombre = (string)dataReader["paisnombre"];

            return pais;
        }
    }
}
