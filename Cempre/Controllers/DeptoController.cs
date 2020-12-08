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

    public class DeptoController : ControllerBase
    {
         private readonly DeptoService _deptoService;
        public IConfiguration Configuration { get; }
        public DeptoController(IConfiguration configuration)
        {
            Configuration = configuration;
            string connectionString = Configuration["ConnectionStrings:DefaultConnection"];
            _deptoService = new DeptoService(connectionString);
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