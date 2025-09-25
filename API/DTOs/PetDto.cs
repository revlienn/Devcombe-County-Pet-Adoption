using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class PetDto
    {
        [Required]
        public required string Name { get; set; }
        [Required]
        public required string Species { get; set; }
        [Required]
        public required string Status { get; set; }
        [Required]
        public required string Description { get; set; }
        public string? Color { get; set; }
        public string? ImageUrl{ get; set; }
    }
}