using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Pet
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public required string Name { get; set; }
        public required string Species { get; set; }
        public string? Breed { get; set; }
        public string? Sex { get; set; }
        public string? Color { get; set; }
        public string? ImageUrl{ get; set; }
        public int? WeightGr { get; set; }
        public string Description { get; set; } = "";
        public required string Status { get; set; }
        public bool? IsHouseTrained { get; set; }
        public bool? GoodWithKids { get; set; }
        public bool? GoodWithDogs { get; set; }
        public bool? GoodWithCats { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

        //Nav props
        public VisitForm? VisitForm { get; set; } = null;
        
    }
}