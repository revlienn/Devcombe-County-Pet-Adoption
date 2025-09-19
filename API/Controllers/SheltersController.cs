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
    public class sheltersController(AppDbContext context) : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Shelter>>> Getshelters()
        {
            var shelters = await context.Shelters.ToListAsync();
            return shelters;
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Shelter>> Getshelter(string id)
        {
            var shelter = await context.Shelters.FindAsync(id);
            if (shelter == null) return NotFound();
            return shelter;
        }

        [Authorize]
        [HttpPost("add")]
        public async Task<ActionResult<Shelter>> AddShelter(ShelterDto shelterDto)
        {
            var shelter = new Shelter
            {
                Name = shelterDto.Name,
                Email = shelterDto.Email,
                AddressLine1 = shelterDto.AddressLine1,
                Postcode = shelterDto.Postcode,
                City = shelterDto.City
            };

            context.Shelters.Add(shelter);
            await context.SaveChangesAsync();

            return shelter;
        }
    }
}