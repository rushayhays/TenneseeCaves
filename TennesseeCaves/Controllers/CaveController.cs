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
        public IActionResult Post(int id, List<int> orgIds)
        {
            _caveRepository.UpdateCaveOrganizations(id, orgIds);
            return NoContent();
        }

        [HttpDelete]
        public IActionResult DeleteCave(int id)
        {
            _caveRepository.DeleteCave(id);
            return NoContent();
        }
    }
}

