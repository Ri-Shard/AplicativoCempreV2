using System;
using System.Collections.Generic;
using Datos;
using Entity;

namespace Logica
{
    public class PaisService
    {
         private readonly ConnectionManager _conexion;
        private readonly PaisRepository _repositorio;
        public PaisService (string connectionString) {
            _conexion = new ConnectionManager (connectionString);
            _repositorio = new PaisRepository (_conexion);
        } 

         public List<Pais> ConsultarTodos()
        {
            _conexion.Open();
            List<Pais> paises = _repositorio.ConsultarTodos();
            _conexion.Close();
            return paises;
        }

        }
}
