using System;
using System.ComponentModel.DataAnnotations;

namespace Entity

{
    public class Solicitud

    {
        public string NitE { get; set; }
        [Key]
        public string IdEs { get; set; }
        public string Fecha { get; set; }

    }
}

