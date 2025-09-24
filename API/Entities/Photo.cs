using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Photo
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string? PublicId{ get; set; }
        public required string Url { get; set; }
        public required bool IsPrimary{ get; set; }

        //nav prop
        public Pet? Pet { get; set; }
        public Shelter? Shelter { get; set; }
        public AppUser? AppUser { get; set; }
    }
}