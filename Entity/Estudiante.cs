using System;
using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Estudiante

    {
        public string Nombres { get; set; }
        [Key]
        public string Identificacion { get; set; }
        public string Apellido { get; set; }
        public string FechaNacimiento { get; set; }
        public string CiudadNacimiento { get; set; }
        public string EstadoCivil { get; set; }
        public string Telefono { get; set; }
        public string Eps { get; set; }
        public string InvOproyec { get; set; }
        public string Conocimientoyprac { get; set; }
        public string Seminarios { get; set; }
        public string Distinciones { get; set; }
        public string Carrera { get; set; }
        public string Sexo { get; set; }
        public string Semestre { get; set; }
        public string Correo { get; set; }
        public string Estado { get; set; }
        public string Password { get; set; }
        public string EmpresaID { get; set; }
        public decimal FechaIngreso { get; set; }
        public decimal PrimerInforme { get; set; }
        public decimal UltimoInforme { get; set; }

        public void CalculoPrimerInforme()
        {
           PrimerInforme = FechaIngreso + 75;
        }
        public void CalculoUltimoInforme()
        {
            UltimoInforme = FechaIngreso +165;
        }
    }
}

