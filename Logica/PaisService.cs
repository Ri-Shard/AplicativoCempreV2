using System;
using System.Linq;
using System.Collections.Generic;
using Datos;
using Entity;

namespace Logica
{
    public class PaisService
    {
        private readonly SolicitudContext _context;
      
        public PaisService(SolicitudContext context)
        {
            _context=context;
        }

         public List<Pais> ConsultarTodos()
        {
            List<Pais> paises = _context.Pais.ToList();
            return paises;
        }

        }
}
