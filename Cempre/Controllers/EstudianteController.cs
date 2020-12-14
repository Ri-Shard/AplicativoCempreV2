using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entity;
using Logica;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Cempre.Models;
using Datos;
using System.ComponentModel.DataAnnotations;

namespace Cempre.Controllers
{

    [Route("api/[controller]")]
    [ApiController]

    public class EstudianteController : ControllerBase
    {
       private readonly EstudianteService _estudianteService;
        public EstudianteController(SolicitudContext context)
        {
            _estudianteService = new EstudianteService(context);
        }

        // GET: api/Estudiante
        [HttpGet]
        public IEnumerable<EstudianteViewModel> Gets()
        {
            var estudiantes = _estudianteService.ConsultarTodos().Select(p=> new EstudianteViewModel(p));
            return estudiantes;
        }

        [HttpGet("{id}")]
        public EstudianteViewModel GetEstudiante(string id)
        {
            
            var estudianteb =  _estudianteService.BuscarEstudiante(id);
            EstudianteViewModel estudiante = MapearEstudiante2(estudianteb);

            return estudiante;
        }


        [HttpPost]
        public ActionResult<EstudianteViewModel> Post(EstudianteInputModel estudianteInput)
        {
            Estudiante estudiante = MapearEstudiante(estudianteInput);
            var response = _estudianteService.Guardar(estudiante);
            if (response.Error) 
            {
                ModelState.AddModelError("Guardar Empresa", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);                  }
            return Ok(response.Estudiante);
        }

          private Estudiante MapearEstudiante(EstudianteInputModel estudianteInput)
        {
            var estudiante = new Estudiante
            {
            Nombres = estudianteInput.Nombres,
            Identificacion = estudianteInput.Identificacion,
            Apellido = estudianteInput.Apellido,
            FechaNacimiento = estudianteInput.FechaNacimiento,
            CiudadNacimiento = estudianteInput.CiudadNacimiento,
            EstadoCivil = estudianteInput.EstadoCivil,
            Telefono = estudianteInput.Telefono,
            Eps = estudianteInput.Eps,
            InvOproyec = estudianteInput.InvOproyec,
            Conocimientoyprac = estudianteInput.Conocimientoyprac,
            Seminarios = estudianteInput.Seminarios,
            Distinciones = estudianteInput.Distinciones,
            Sexo = estudianteInput.Sexo,
            Semestre = estudianteInput.Semestre,
            Correo = estudianteInput.Correo,
            Estado = estudianteInput.Estado,
            Password = estudianteInput.Password,
            };
            return estudiante; 
        }
                  private EstudianteViewModel MapearEstudiante2(Estudiante estudiante)
        {
            var estudiantev = new EstudianteViewModel
            {
            Identificacion = estudiante.Identificacion,
            Nombres = estudiante.Nombres,
            Apellido = estudiante.Apellido,
            FechaNacimiento = estudiante.FechaNacimiento,
            CiudadNacimiento = estudiante.CiudadNacimiento,
            EstadoCivil = estudiante.EstadoCivil,
            Telefono = estudiante.Telefono,
            Eps = estudiante.Eps,
            InvOproyec = estudiante.InvOproyec,
            Conocimientoyprac = estudiante.Conocimientoyprac,
            Seminarios = estudiante.Seminarios,
            Distinciones = estudiante.Distinciones,
            Sexo = estudiante.Sexo,
            Semestre = estudiante.Semestre,
            Correo = estudiante.Correo,
            Estado = estudiante.Estado,
            Password = estudiante.Password,
            };
            return estudiantev; 
        }



    }
}