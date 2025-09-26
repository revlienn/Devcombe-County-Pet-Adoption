using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Shelter
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public required string Name { get; set; }
        public required string Email { get; set; }
        public string? ImageUrl{ get; set; }
        public string? Phone { get; set; }
        public string? Website { get; set; }
        public required string AddressLine1 { get; set; }
        public string? AddressLine2 { get; set; }
        public required string Postcode { get; set; }
        public required string City { get; set; }
        public string? Description { get; set; }
        public DateTime CreatedAt{ get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}