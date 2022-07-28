using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TennesseeCaves.Repositories;
using TennesseeCaves.Models;
using System.Collections.Generic;

namespace TennesseeCaves.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CaveController : ControllerBase
    {
        private readonly ICaveRepository _caveRepository;

        public CaveController(ICaveRepository caveRepository)
        {
            _caveRepository = caveRepository;
        }

        [HttpGet]
        public IActionResult GetAllCaves()
        {
            return Ok(_caveRepository.GetAllCaves());
        }

        [HttpGet("{id}")]
        public IActionResult GetSingleCave(int id)
        {
            return Ok(_caveRepository.GetSingleCave(id));
        }

        [HttpPost]
        public IActionResult Post(Cave cave)
        {
            _caveRepository.AddCave(cave);
            return CreatedAtAction("Get", new { id = cave.Id }, cave);
        }

        [HttpPut("edit/{id}")]
        public IActionResult Put(int id, Cave cave)
        {
            if (id != cave.Id)
            {
                return BadRequest();
            }

            _caveRepository.UpdateCaveGeneralInfo(cave);
            return NoContent();
        }

        [HttpPost("caveOrganization")]
        public IActionResult PostCaveOrganization(Cave cave)
        {
            //Create a list of Organization Ids to pass to Update method
            List<int> orgIds = new List<int>();
            foreach(Organization o in cave.Organizations)
            {
                orgIds.Add(o.Id);
            }
            _caveRepository.UpdateCaveOrganizations(cave.Id, orgIds);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCave(int id)
        {
            _caveRepository.DeleteCave(id);
            return NoContent();
        }
    }
}

