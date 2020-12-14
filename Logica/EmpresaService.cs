using System;
using System.Linq;
using System.Collections.Generic;
using Datos;
using Entity; 

namespace Logica
{
    public class EmpresaService
    {
        private readonly SolicitudContext _context;
      
        public EmpresaService(SolicitudContext context)
        {
            _context=context;
        }
        public GuardarEmpresaResponse Guardar(Empresa empresa)
        {
            try
            {
               var buscar =_context.Empresa.Find(empresa.Nit);
               if (buscar != null)
               {
                  return new GuardarEmpresaResponse("Error Ya se encuentra Registrado");

               }     
                _context.Empresa.Add(empresa);
                _context.SaveChanges();

                return new GuardarEmpresaResponse(empresa);
            }
            catch (Exception e)
            {
                return new GuardarEmpresaResponse($"Error de la Aplicacion: {e.Message}");
            }
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
            List<Empresa> empresas = _context.Empresa.ToList();
            return empresas;
        }

        public Empresa BuscarEmpresa(string nit)
        {

          Empresa buscar =_context.Empresa.Find(nit);     
              return buscar;      

        }

        }
}
