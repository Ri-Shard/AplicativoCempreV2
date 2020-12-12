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

    public class PaisController : ControllerBase
    {
       private readonly PaisService _paisService;
        public PaisController(SolicitudContext context)
        {
            _paisService = new PaisService(context);
        }
        // GET: api/Empresa
        [HttpGet]
        public IEnumerable<PaisViewModel> Gets()
        {
            var paises = _paisService.ConsultarTodos().Select(p=> new PaisViewModel(p));
            return paises;
        }
    }
}