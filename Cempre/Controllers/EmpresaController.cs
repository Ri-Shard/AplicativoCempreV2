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

    public class EmpresaController : ControllerBase
    {
         private readonly EmpresaService _empresaService;
        public IConfiguration Configuration { get; }
        public EmpresaController(IConfiguration configuration)
        {
            Configuration = configuration;
            string connectionString = Configuration["ConnectionStrings:DefaultConnection"];
            _empresaService = new EmpresaService(connectionString);
        }

        // GET: api/Empresa
        [HttpGet]
        public IEnumerable<EmpresaViewModel> Gets()
        {
            var empresas = _empresaService.ConsultarTodos().Select(p=> new EmpresaViewModel(p));
            return empresas;
        }

        [HttpPost]
        public ActionResult<EmpresaViewModel> Post(EmpresaInputModel empresaInput)
        {
            Empresa empresa = MapearEmpresa(empresaInput);
            var response = _empresaService.Guardar(empresa);
            if (response.Error) 
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Empresa);
        }

          private Empresa MapearEmpresa(EmpresaInputModel empresaInput)
        {
            var empresa = new Empresa
            {
            RazonSocial = empresaInput.RazonSocial,
            Nit = empresaInput.Nit,
            Pais = empresaInput.Pais,
            Departamento = empresaInput.Departamento,
            Ciudad = empresaInput.Ciudad,
            Direccion = empresaInput.Direccion,
            Sector = empresaInput.Sector,
            Descripcion = empresaInput.Descripcion,
            NombreRepresentante = empresaInput.NombreRepresentante,
            ApellidoRepresentante = empresaInput.ApellidoRepresentante,
            CedulaRepresentante = empresaInput.CedulaRepresentante,
            Estado = empresaInput.Estado
            };
            return empresa; 
        }



    }
}