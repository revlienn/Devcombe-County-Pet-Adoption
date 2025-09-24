using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class AppUser
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public required string DisplayName { get; set; }
        public required string Email { get; set; }
        public string? Phone{ get; set; }
        public string AddressLine1{ get; set; }
        public string? AddressLine2 { get; set; }
        public string City{ get; set; }
        public string Postcode { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
        public required byte[] PasswordHash { get; set; }
        public required byte[] PasswordSalt{ get; set; }
    }
}