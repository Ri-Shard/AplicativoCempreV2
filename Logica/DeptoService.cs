using System;
using System.Collections.Generic;
using Datos;
using Entity;

namespace Logica
{
    public class DeptoService
    {
         private readonly ConnectionManager _conexion;
        private readonly DeptoRepository _repositorio;
        public DeptoService (string connectionString) {
            _conexion = new ConnectionManager (connectionString);
            _repositorio = new DeptoRepository (_conexion);
        } 

         public List<Depto> ConsultarTodos()
        {
            _conexion.Open();
            List<Depto> deptos = _repositorio.ConsultarTodos();
            _conexion.Close();
            return deptos;
        }
        
        }
}
