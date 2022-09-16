namespace OrganizationService.Entities
{
    public enum CloudServiceProvider
    {
        AWSWebServices,
        AzureCloudService,
        GoogleCloud
    }
    
    public class Organization
    {
        public Guid Id { get; init; }
        public string Name { get; set; }
        public CloudServiceProvider CloudServiceProvider {get; set; }
        public string Owner { get; set; }
        public DateTimeOffset DateCreated { get; init; }
    }
}