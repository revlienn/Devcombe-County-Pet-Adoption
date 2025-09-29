using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Interfaces
{
    public interface IPetRepository
    {
        void Update(Pet pet);
        Task<bool> SaveAllAsync();
        Task<IReadOnlyList<Pet>> GetPetsAsync();
        Task<Pet?> GetPetByIdAsync(string id);
        Task<IReadOnlyList<Photo>> GetPhotosForPetAsync(string petId);
    }
}