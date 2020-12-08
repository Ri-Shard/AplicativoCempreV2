using System.ComponentModel.DataAnnotations;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cempre.Models {

    public class PaisInputModel {
        public string Nombre { get; set; }
        public decimal Id { get; set; }
    }

    public class PaisViewModel : PaisInputModel {
        public PaisViewModel () {

        }
        public PaisViewModel (Pais pais) {
            Id= pais.Id;
            Nombre = pais.Nombre;
        }
    }

}