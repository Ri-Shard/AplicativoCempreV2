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

    public class DeptoController : ControllerBase
    {
       private readonly DeptoService _deptoService;
        public DeptoController(SolicitudContext context)
        {
            _deptoService = new DeptoService(context);
        }

        // GET: api/Empresa
        [HttpGet]
        public IEnumerable<DeptoViewModel> Gets()
        {
            var deptos = _deptoService.ConsultarTodos().Select(p=> new DeptoViewModel(p));
            return deptos;
        }
    }
}