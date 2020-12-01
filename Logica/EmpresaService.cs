using System;
using System.Collections.Generic;
using Datos;
using Entity;

namespace Logica
{
    public class EmpresaService
    {
         private readonly ConnectionManager _conexion;
        private readonly EmpresaRepository _repositorio;
        public EmpresaService (string connectionString) {
            _conexion = new ConnectionManager (connectionString);
            _repositorio = new EmpresaRepository (_conexion);
        } 

        public GuardarEmpresaResponse Guardar(Empresa empresa)
        {
            try
            {
                _conexion.Open();
                _repositorio.Guardar(empresa);
                _conexion.Close();
                return new GuardarEmpresaResponse(empresa);
            }
            catch (Exception e)
            {
                return new GuardarEmpresaResponse($"Error de la Aplicacion: {e.Message}");
            }
            finally { _conexion.Close(); }
        }
        public class GuardarEmpresaResponse 
        {
            public GuardarEmpresaResponse(Empresa empresa)
            {
                Error = false;
                Empresa = empresa;
            }
            public GuardarEmpresaResponse(string mensaje)
            {
                Error = true;
                Mensaje = mensaje;
            }
            public bool Error { get; set; }
            public string Mensaje { get; set; }
            public Empresa Empresa { get; set; }
        }

         public List<Empresa> ConsultarTodos()
        {
            _conexion.Open();
            List<Empresa> empresas = _repositorio.ConsultarTodos();
            _conexion.Close();
            return empresas;
        }

        }
}
