using System.ComponentModel.DataAnnotations;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cempre.Models {

    public class EstudianteInputModel {
       [Required(ErrorMessage = "El nombre es Requerido")]
        public string Nombres { get; set; }
       [Required(ErrorMessage = "La identificacion es requerida")]
        public string Identificacion { get; set; }
       [Required(ErrorMessage = "el Apellido es requerido")]
        public string Apellido { get; set; }
       [Required(ErrorMessage = "La fecha de nacimiento es requerida")]
        public string FechaNacimiento { get; set; }
       [Required(ErrorMessage = "La ciudad de nacimiento es requerida")]
        public string CiudadNacimiento { get; set; }
       [Required(ErrorMessage = "El estado civil es requerido")]
        public string EstadoCivil { get; set; }
       [Required(ErrorMessage = "El Telefono es requerido")]
        public string Telefono { get; set; }
       [Required(ErrorMessage = "La EPS es requerida")]
        public string Eps { get; set; }
        public string InvOproyec { get; set; }
        public string Conocimientoyprac { get; set; }
        public string Seminarios { get; set; }
        public string Distinciones { get; set; }
        public int Edad { get; set; }
       [Required(ErrorMessage = "La Edad es requerida")]
        public string Sexo { get; set; }
       [Required(ErrorMessage = "El Semestre es requerido")]
        public int Semestre { get; set; }
       [Required(ErrorMessage = "El correo es Requerido")]
        public string Correo { get; set; }

    }

    public class EstudianteViewModel : EstudianteInputModel {
        public EstudianteViewModel () {

        }
        public EstudianteViewModel (Estudiante estudiante) {
            Identificacion = estudiante.Identificacion;
            Nombres = estudiante.Nombres;
            Apellido = estudiante.Apellido;
            FechaNacimiento = estudiante.FechaNacimiento;
            CiudadNacimiento = estudiante.CiudadNacimiento;
            EstadoCivil = estudiante.EstadoCivil;
            Telefono = estudiante.Telefono;
            Eps = estudiante.Eps;
            InvOproyec = estudiante.InvOproyec;
            Conocimientoyprac = estudiante.Conocimientoyprac;
            Seminarios = estudiante.Seminarios;
            Distinciones = estudiante.Distinciones;
            Edad = estudiante.Edad;
            Sexo = estudiante.Sexo;
            Semestre = estudiante.Semestre;
            Correo = estudiante.Correo;

        }
    }

}