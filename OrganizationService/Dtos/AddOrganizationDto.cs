using System.ComponentModel.DataAnnotations;
using OrganizationService.Entities;

namespace OrganizationService.Dtos
{
    public class AddOrganizationDto
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public CloudServiceProvider CloudServiceProvider { get; set; }
        [Required]
        public string Owner { get; set; }
    }
}