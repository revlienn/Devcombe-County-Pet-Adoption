using API.Entities;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
   public class PetRepository(AppDbContext context) : IPetRepository
   {
      public async Task<Pet?> GetPetByIdAsync(string id)
      {
         return await context.Pets.FindAsync(id);
      }

      public async Task<IReadOnlyList<Pet>> GetPetsAsync()
      {
         return await context.Pets.ToListAsync();
      }

      public async Task<IReadOnlyList<Photo>> GetPhotosForPetAsync(string PetId)
      {
         return await context.Pets
         .Where(x => x.Id == PetId)
         .SelectMany(x => x.Photos)
         .ToListAsync();
      }

      public async Task<bool> SaveAllAsync()
      {
         return await context.SaveChangesAsync() > 0;
      }

      public void Update(Pet pet)
      {
         context.Entry(pet).State = EntityState.Modified;
      }
   }
}