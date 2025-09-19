using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PetsController(AppDbContext context) : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Pet>>> GetPets()
        {
            var pets = await context.Pets.ToListAsync();
            return pets;
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Pet>> GetPet(string id)
        {
            var pet = await context.Pets.FindAsync(id);
            if (pet == null) return NotFound();
            return pet;
        }
        [Authorize]
        [HttpPost("add")]
        public async Task<ActionResult<Pet>> AddPet(PetDto petDto)
        {
            var pet = new Pet
            {
                Name = petDto.Name,
                Species = petDto.Species,
                Status = petDto.Status,
                Description = petDto.Description,
                Color=petDto.Color,
            };

            context.Pets.Add(pet);
            await context.SaveChangesAsync();

            return pet;
        }
    }
}