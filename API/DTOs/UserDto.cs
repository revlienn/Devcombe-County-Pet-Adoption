using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class UserDto
    {
        [Required]
        public required string Id { get; set; }
        [Required]
        public required string Email { get; set; }
        [Required]
        public required string DisplayName { get; set; }
        [Required]
        public required string Token{ get; set; }
        public string? ImageUrl { get; set; }
        
        
    }
}