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

    [Route("api/[controller]")]
    [ApiController]

    public class SolicitudController : ControllerBase
    {
       private readonly EstudianteService _estudianteService;
        public SolicitudController(SolicitudContext context)
        {
            _estudianteService = new EstudianteService(context);
        }

     [HttpGet("{nit}")]
        public  IEnumerable<EstudianteViewModel> GetEstudiantes(string nit)
        {
            var estudiantes =  _estudianteService.ConsultarTodosEmpresa(nit).Select(p=> new EstudianteViewModel(p));;
            return estudiantes;
        }

    }