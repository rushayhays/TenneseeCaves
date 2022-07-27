using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TennesseeCaves.Repositories;
using TennesseeCaves.Models;
using System.Collections.Generic;

namespace TennesseeCaves.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TourController : ControllerBase
    {
        private readonly ITourRepository _tourRepository;

        public TourController(ITourRepository tourRepository)
        {
            _tourRepository = tourRepository;
        }

        [HttpGet("{id}")]
        public IActionResult GetAllToursForSelectedCave(int id)
        {
            return Ok(_tourRepository.GetAllToursForSpecificCave(id));
        }

        [HttpGet("singleTour/{id}")]
        public IActionResult GetSingleTour(int id)
        {
            return Ok(_tourRepository.GetSingleTour(id));
        }

        [HttpPost]
        public IActionResult AddTour(Tour tour)
        {
            _tourRepository.AddTour(tour);
            return CreatedAtAction("Get", new { id = tour.Id }, tour);
        }

        [HttpPut("edit/{id}")]
        public IActionResult Put(int id, Tour tour)
        {
            if (id != tour.Id)
            {
                return BadRequest();
            }

            _tourRepository.UpdateTour(tour);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTour(int id)
        {
            _tourRepository.DeleteTour(id);
            return NoContent();
        }

    }
}
