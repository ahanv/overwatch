using OrganizationService.Entities;
using MongoDB.Driver;
using MongoDB.Bson;

namespace OrganizationService.Respositories
{
    public class MongoDbOrganizationsRepository : IOrganizationsRepository
    {
        private const string databaseName = "organization_service_db";
        private const string collectionName = "organizations";
        private readonly IMongoCollection<Organization> organizationsCollection;
        private readonly FilterDefinitionBuilder<Organization> filterBuilder = Builders<Organization>.Filter;
        
        public MongoDbOrganizationsRepository(IMongoClient mongoClient)
        {
            IMongoDatabase database = mongoClient.GetDatabase(databaseName);
            organizationsCollection = database.GetCollection<Organization>(collectionName);
        }

        public void AddOrganization(Organization organization)
        {
            organizationsCollection.InsertOne(organization);
        }

        public Organization GetOrganization(Guid id)
        {
            var filter = filterBuilder.Eq(organization => organization.Id, id);
            return organizationsCollection.Find(filter).SingleOrDefault();
        }

        public IEnumerable<Organization> GetOrganizations()
        {
            return organizationsCollection.Find(new BsonDocument()).ToList();
        }

        public void RemoveOrganization(Guid id)
        {
            var filter = filterBuilder.Eq(organization => organization.Id, id);
            var index = organizationsCollection.DeleteOne(filter);
        }

        public void UpdateOrganization(Organization organization)
        {
            var filter = filterBuilder.Eq(existingOrganization => existingOrganization.Id, organization.Id);
            organizationsCollection.ReplaceOne(filter, organization);
        }
    }
}