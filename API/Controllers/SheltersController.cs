using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class sheltersController(AppDbContext context) : ControllerBase
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
    }
}