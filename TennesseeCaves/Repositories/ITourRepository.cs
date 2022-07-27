using System.Collections.Generic;
using TennesseeCaves.Models;

namespace TennesseeCaves.Repositories
{
    public interface ITourRepository
    {
        List<Tour> GetAllToursForSpecificCave(int id);
        Tour GetSingleTour(int id);
        void AddTour(Tour tour);
        void UpdateTour(Tour tour);
        void DeleteTour(int id);
    }
}
