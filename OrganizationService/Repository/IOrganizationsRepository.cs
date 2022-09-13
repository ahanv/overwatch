using System;
using System.Collections.Generic;
using OrganizationService.Entities;

namespace OrganizationService.Respositories
{
    public interface IOrganizationsRepository
    {
        Organization GetOrganization(Guid id);
        IEnumerable<Organization> GetOrganizations();
        void AddOrganization(Organization organization);
        void UpdateOrganization(Organization organization);
        void RemoveOrganization(Guid id);
    }
}