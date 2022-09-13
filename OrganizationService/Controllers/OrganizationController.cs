using Microsoft.AspNetCore.Mvc;
using OrganizationService.Entities;
using OrganizationService.Respositories;

namespace OrganizationService.Controllers;

[ApiController]
[Route("[controller]")]
public class OrganizationsController : ControllerBase
{
    private readonly ILogger<OrganizationsController> _logger;
    private readonly IOrganizationsRepository repository;

    public OrganizationsController(ILogger<OrganizationsController> logger, IOrganizationsRepository repository)
    {
        _logger = logger;
        this.repository = repository;
    }

    // GET: /organizations
    [HttpGet]
    public IEnumerable<Organization> GetOrganizations()
    {
        return repository.GetOrganizations();
    }

    // GET: /organizations/{id}
    [HttpGet("{id}")]
    public ActionResult<Organization> GetOrganization(Guid id)
    {
        _logger.LogInformation($"Getting record for id: {id}");
        
        Organization organization = repository.GetOrganization(id);

        if (organization is null)
        {
            return NotFound();
        }

        return organization;
    }

    // POST: /organizations
    [HttpPost]
    public ActionResult<Organization> AddOrganization(Organization organization)
    {
        _logger.LogInformation($"Adding new organization: {organization}");
        Organization newOrganization = new Organization { Id = Guid.NewGuid(), Name = organization.Name, CloudServiceProvider = organization.CloudServiceProvider, Owner = organization.Owner, DateCreated = DateTimeOffset.Now };
        repository.AddOrganization(newOrganization);
        return CreatedAtAction(nameof(GetOrganization), new { id = newOrganization.Id }, newOrganization);
    }

    // PUT: /organizations/{id}
    [HttpPut("{id}")]
    public ActionResult UpdateOrganization(Guid id, Organization organization)
    {
        _logger.LogInformation($"Updating organization for id: {id}");
        Organization existingOrganization = repository.GetOrganization(id);

        if (existingOrganization is null)
        {
            return NotFound();
        }

        foreach(var prop in typeof(Organization).GetProperties())
        {
            prop.SetValue(existingOrganization, prop.GetValue(organization, null), null);
        }
        
        repository.UpdateOrganization(existingOrganization);

        return StatusCode(200);
    }

    // DELETE: /organizations/{id}
    [HttpDelete("{id}")]
    public ActionResult<Organization> DeleteOrganization(Guid id)
    {
        _logger.LogInformation($"Deleting organization for id: {id}");

        Organization existingOrganization = repository.GetOrganization(id);

        if (existingOrganization is null)
        {
            return NotFound();
        }

        repository.RemoveOrganization(existingOrganization.Id);
        return StatusCode(200);
    }
}
