using System.ComponentModel.DataAnnotations;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cempre.Models {

    public class DeptoInputModel {
        public string Nombre { get; set; }
        public decimal Id { get; set; }
        public decimal Ubicacion { get; set; }
    }

    public class DeptoViewModel : DeptoInputModel {
        public DeptoViewModel () {

        }
        public DeptoViewModel (Depto depto) {
            Id= depto.Id;
            Nombre = depto.Nombre;
            Ubicacion = depto.Ubicacion;
        }
    }

}