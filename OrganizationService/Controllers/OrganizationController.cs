using Microsoft.AspNetCore.Mvc;

namespace OrganizationService.Controllers;

[ApiController]
[Route("[controller]")]
public class OrganizationsController : ControllerBase
{
    private readonly ILogger<OrganizationsController> _logger;

    public OrganizationsController(ILogger<OrganizationsController> logger)
    {
        _logger = logger;
    }

    // GET: /organizations
    [HttpGet]
    public String GetOrganizations()
    {
        return "Returns list of organizations.";
    }

    // GET: /organizations/{id}
    [HttpGet("{id}")]
    public String GetOrganization(Guid id)
    {
        _logger.LogInformation($"Getting record for id: {id}");
        return "Receives organization Id and returns record.";
    }

    // POST: /organizations
    [HttpPost]
    public String AddOrganization(Object organization)
    {
        _logger.LogInformation($"Adding new organization: {organization}");
        return "Receives and organization object and creates record.";
    }

    // PUT: /organizations/{id}
    [HttpPut("{id}")]
    public String UpdateOrganization(Guid id, Object organization)
    {
        _logger.LogInformation($"Updating organization for id: {id}");
        return "Receives id and object and updates organization record.";
    }

    // DELETE: /organizations/{id}
    [HttpDelete("{id}")]
    public String DeleteOrganization(Guid id)
    {
        _logger.LogInformation($"Deleting organization for id: {id}");
        return "Receives id and deletes organization record.";
    }
}
