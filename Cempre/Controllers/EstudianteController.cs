using System.Collections.Generic;
using System.Linq;
using Entity;
using Logica;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Cempre.Models;

namespace Cempre.Controllers
{

    [Route("api/[controller]")]
    [ApiController]

    public class EstudianteController : ControllerBase
    {
         private readonly EstudianteService _estudianteService;
        public IConfiguration Configuration { get; }
        public EstudianteController(IConfiguration configuration)
        {
            Configuration = configuration;
            string connectionString = Configuration["ConnectionStrings:DefaultConnection"];
            _estudianteService = new EstudianteService(connectionString);
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
                Identificacion = estudianteInput.Identificacion,
                Nombre = estudianteInput.Nombre,
                Edad = estudianteInput.Edad,
                Sexo = estudianteInput.Sexo,
                Semestre = estudianteInput.Semestre,
                Correo = estudianteInput.Correo,
            };
            return estudiante; 
        }



    }
}