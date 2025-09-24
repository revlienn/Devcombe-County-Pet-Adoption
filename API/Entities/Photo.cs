using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Photo
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string? PublicId { get; set; }
        public required string Url { get; set; }

        //nav prop
        [JsonIgnore]
        public Member Member { get; set; } = null!;
        public string MemberId { get; set; } = null!;
    }
}