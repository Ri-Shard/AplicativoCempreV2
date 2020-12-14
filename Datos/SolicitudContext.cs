using Entity;
using Microsoft.EntityFrameworkCore;

namespace Datos
{
    public class SolicitudContext : DbContext
    {
        public SolicitudContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Empresa> Empresa { get; set; }
        public DbSet<Estudiante> Estudiante { get; set; }
        public DbSet<Pais> Pais { get; set; }
        public DbSet<Depto> Depto { get; set; }
        public DbSet<Solicitud> Solicitud { get; set; }


	}
}
