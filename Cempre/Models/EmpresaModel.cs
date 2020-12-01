using System.ComponentModel.DataAnnotations;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cempre.Models {

    public class EmpresaInputModel {
       [Required(ErrorMessage = "La Razon Social es Requerida")]
        public string RazonSocial { get; set; }
       [Required(ErrorMessage = "El Nit es requerido")]
        public string Nit { get; set; }
       [Required(ErrorMessage = "el Pais es requerido")]
        public string Pais { get; set; }
       [Required(ErrorMessage = "El Departamento es requerido")]
        public string Departamento { get; set; }
       [Required(ErrorMessage = "La ciudad es requerida")]
        public string Ciudad { get; set; }
       [Required(ErrorMessage = "La Direccion es requerida")]
        public string Direccion { get; set; }
       [Required(ErrorMessage = "El Sector es requerido")]
        public string Sector { get; set; }
       [Required(ErrorMessage = "La Descripcion es requerida")]
        public string Descripcion { get; set; }
       [Required(ErrorMessage = "El Nombre del Representante es requerido")]
        public string NombreRepresentante { get; set; }
       [Required(ErrorMessage = "El Apellido del Representante es requerido")]
        public string ApellidoRepresentante { get; set; }
       [Required(ErrorMessage = "La Cedula del Representante es Requerida")]
        public string CedulaRepresentante { get; set; }

    }
    public class EmpresaViewModel : EmpresaInputModel {
        public EmpresaViewModel () {

        }
        public EmpresaViewModel (Empresa empresa) {
            RazonSocial = empresa.RazonSocial;
            Nit = empresa.Nit;
            Pais = empresa.Pais;
            Departamento = empresa.Departamento;
            Ciudad = empresa.Ciudad;
            Direccion = empresa.Direccion;
            Sector = empresa.Sector;
            Descripcion = empresa.Descripcion;
            NombreRepresentante = empresa.NombreRepresentante;
            ApellidoRepresentante = empresa.ApellidoRepresentante;
            CedulaRepresentante = empresa.CedulaRepresentante;

        }
    }

}