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

    public class PaisController : ControllerBase
    {
         private readonly PaisService _paisService;
        public IConfiguration Configuration { get; }
        public PaisController(IConfiguration configuration)
        {
            Configuration = configuration;
            string connectionString = Configuration["ConnectionStrings:DefaultConnection"];
            _paisService = new PaisService(connectionString);
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