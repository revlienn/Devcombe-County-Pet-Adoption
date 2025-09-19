using API.Data;
using API.Entities;
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
    }
}