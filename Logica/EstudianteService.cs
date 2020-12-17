using System;
using System.Linq;
using System.Collections.Generic;
using Datos;
using Entity; 

namespace Logica 
{
    public class EstudianteService
    {
        private readonly SolicitudContext _context;
      
        public EstudianteService(SolicitudContext context)
        {
            _context=context;
        }



        public GuardarEstudianteResponse Guardar(Estudiante estudiante)
        {
            try
            {
               var buscar =_context.Estudiante.Find(estudiante.Identificacion);
               if (buscar != null)
               {
                  return new GuardarEstudianteResponse("Error Ya se encuentra Registrado");

               }     
                _context.Estudiante.Add(estudiante);
                _context.SaveChanges();

                return new GuardarEstudianteResponse(estudiante);
            }
            catch (Exception e)
            {
                return new GuardarEstudianteResponse($"Error de la Aplicacion: {e.Message}");
            }
        }

        public class GuardarEstudianteResponse 
        {
            public GuardarEstudianteResponse(Estudiante estudiante)
            {
                Error = false;
                Estudiante = estudiante;
            }
            public GuardarEstudianteResponse(string mensaje)
            {
                Error = true;
                Mensaje = mensaje;
            }
            public bool Error { get; set; }
            public string Mensaje { get; set; }
            public Estudiante Estudiante { get; set; }
        }

         public List<Estudiante> ConsultarTodos()
        {
            List<Estudiante> estudiantes = _context.Estudiante.ToList();
            return estudiantes;
        }
         public List<Estudiante> ConsultarTodosEmpresa(string empresaID)
        {
            List<Estudiante> estudiantes = _context.Estudiante.Where(x => x.EmpresaID == empresaID).ToList();
            return estudiantes;
        }

        public Estudiante BuscarEstudiante(string identificacion)
        {
          Estudiante buscar =_context.Estudiante.Find(identificacion);          
          return buscar;     
        }


        public string Modificar(Estudiante estudianteN)
        {
            try
            {
                var estudianteV = _context.Estudiante.Find(estudianteN.Identificacion);
                if (estudianteV != null)
                {
                    estudianteV.Estado = estudianteN.Estado;
                    _context.Estudiante.Update(estudianteV);
                    _context.SaveChanges();
                    return ($"El registro {estudianteN.Identificacion} se ha modificado satisfactoriamente");

                }
                else
                {
                    return ($"Lo sentimos, {estudianteN.Identificacion} no se encuentra registrado.");

                }
            }
            catch (Exception e)
            {
                return ($"Error de la aplicacion: {e.Message}.");
            }
        }

                public string Eliminar(string id)
        {
            try
            {
                var estudiante = _context.Estudiante.Find(id);
                if (estudiante != null)
                {
                    _context.Estudiante.Remove(estudiante);
                    _context.SaveChanges();
                    return ($"El registro {estudiante.Nombres} se ha eliminado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, {id} no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {

                return $"Error de la Aplicación: {e.Message}";
            }

        }

        }

    

}
