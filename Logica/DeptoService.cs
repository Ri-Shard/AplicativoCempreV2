using System;
using System.Linq;
using System.Collections.Generic;
using Datos;
using Entity;
 
namespace Logica
{
    public class DeptoService
    {
        private readonly SolicitudContext _context;
      
        public DeptoService(SolicitudContext context)
        {
            _context=context;
        }

         public List<Depto> ConsultarTodos()
        {
            List<Depto> deptos = _context.Depto.ToList();
            return deptos;
        }
        
    }
}
