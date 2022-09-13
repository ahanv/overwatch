namespace OrganizationService.Entities
{
    public class Organization
    {
        public Guid Id { get; init; }
        public string Name { get; set; }
        public string CloudServiceProvider { get; set; }
        public string Owner { get; set; }
        public DateTimeOffset DateCreated { get; init; }
    }
}