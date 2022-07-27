using System.Collections.Generic;
using TennesseeCaves.Models;

namespace TennesseeCaves.Repositories
{
    public interface ITourRepository
    {
        List<Tour> GetAllToursForSpecificCave(int id);
        public Tour GetSingleTour(int id);
    }
}
