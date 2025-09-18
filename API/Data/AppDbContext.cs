using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {
        public DbSet<AppUser> Users { get; set; }
        public DbSet<Pet> Pets { get; set; }
        public DbSet<Shelter> Shelters { get; set; }
    }
}