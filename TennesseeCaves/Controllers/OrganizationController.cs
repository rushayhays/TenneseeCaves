using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TennesseeCaves.Repositories;
using TennesseeCaves.Models;

namespace TennesseeCaves.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrganizationController : ControllerBase
    {
        private readonly IOrganizationRepository _orgRepository;

        public OrganizationController(IOrganizationRepository orgRepository)
        {
            _orgRepository = orgRepository;
        }
        
        [HttpGet]
        public IActionResult GetAllOrganizations()
        {
            return Ok(_orgRepository.GetAllOrganizations());
        }

        [HttpPost]
        public IActionResult Post(Organization org)
        {
            _orgRepository.AddOrganization(org);
            return CreatedAtAction("Get", new { id = org.Id }, org);
        }

        [HttpPut("edit/{id}")]
        public IActionResult Put(int id, Organization org)
        {
            if (id != org.Id)
            {
                return BadRequest();
            }

            _orgRepository.UpdateOrganization(org);
            return NoContent();
        }

        [HttpDelete]
        public IActionResult DeleteOrg(int id)
        {
            _orgRepository.DeleteOrg(id);
            return NoContent();
        }

    }
}
