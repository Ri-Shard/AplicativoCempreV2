using System.Collections.Generic;
using System.Linq;
using Entity;
using Logica;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Cempre.Models;
using Datos;
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

        [HttpPost]
        public ActionResult<EstudianteViewModel> Post(EstudianteInputModel estudianteInput)
        {
            Estudiante estudiante = MapearEstudiante(estudianteInput);
            var response = _estudianteService.Guardar(estudiante);
            if (response.Error) 
            {
                return BadRequest(response.Mensaje);
            }
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



    }
}