using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistense;

public class AppDbContext(DbContextOptions options):DbContext(options)
{
     public DbSet<Activity> Activities {get; set;}
}
