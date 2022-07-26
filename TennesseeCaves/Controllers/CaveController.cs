using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TennesseeCaves.Repositories;
using TennesseeCaves.Models;

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
    }
}

