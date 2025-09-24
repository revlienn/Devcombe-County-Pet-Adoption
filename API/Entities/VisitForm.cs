using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class VisitForm
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public required string Status { get; set; }
        public required DateTime ScheduledAt { get; set; }
        public required DateTime CreatedAt { get; set; }
        public required DateTime UpdatedAt { get; set; }

        // insert navprop later, pet, shelter location, shelter staff id/app user id
        [ForeignKey(nameof(Id))]
        public Pet Pet { get; set; } = null!;
    }
}