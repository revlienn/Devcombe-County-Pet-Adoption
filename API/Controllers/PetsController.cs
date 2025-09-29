using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    [Authorize]
    public class PetsController(IPetRepository petRepository) : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Pet>>> GetPets()
        {
            return Ok(await petRepository.GetPetsAsync());
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Pet>> GetPet(string id)
        {
            var pet = await petRepository.GetPetByIdAsync(id);
            if (pet == null) return NotFound();
            return pet;
        }

        [HttpGet("{id}/photos")]
        public async Task<ActionResult<IReadOnlyList<Photo>>> GetPetPhotos(string id)
        {
            return Ok(await petRepository.GetPhotosForPetAsync(id));
        }
        
        // [HttpPost("add")]
        // public async Task<ActionResult<Pet>> AddPet(PetDto petDto)
        // {
        //     var pet = new Pet
        //     {
        //         Name = petDto.Name,
        //         Species = petDto.Species,
        //         Status = petDto.Status,
        //         Description = petDto.Description,
        //         Color = petDto.Color,
        //         ImageUrl=petDto.ImageUrl
        //     };

        //     context.Pets.Add(pet);
        //     await context.SaveChangesAsync();

        //     return pet;
        // }
    }
}