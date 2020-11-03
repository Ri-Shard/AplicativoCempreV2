using Entity;

namespace Cempre.Models {

    public class EstudianteInputModel {
        public string Nombre { get; set; }
        public string Identificacion { get; set; }
        public int Edad { get; set; }
        public string Sexo { get; set; }
        public int Semestre { get; set; }
        public string Correo { get; set; }
    }

    public class EstudianteViewModel : EstudianteInputModel {
        public EstudianteViewModel () {

        }
        public EstudianteViewModel (Estudiante estudiante) {
            Identificacion = estudiante.Identificacion;
            Nombre = estudiante.Nombre;
            Edad = estudiante.Edad;
            Sexo = estudiante.Sexo;
            Semestre = estudiante.Semestre;
            Correo = estudiante.Correo;

        }
    }

}