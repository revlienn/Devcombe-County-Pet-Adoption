using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class ShelterDto
    {
        [Required]
        public required string Name { get; set; }
        [Required]
        public required string Email { get; set; }
        [Required]
        public required string AddressLine1 { get; set; }
        [Required]
        public required string Postcode { get; set; }
        [Required]
        public required string City{ get; set; }
    }
}