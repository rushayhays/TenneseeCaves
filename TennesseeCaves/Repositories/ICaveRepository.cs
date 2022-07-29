using System.Collections.Generic;
using TennesseeCaves.Models;

namespace TennesseeCaves.Repositories
{
    public interface ICaveRepository
    {
        List<Cave> GetAllCaves();
        List<Cave> GetAllUsersCaves(int id);
       Cave GetSingleCave(int id);
        void AddCave(Cave cave);
        void UpdateCaveGeneralInfo(Cave cave);
        void UpdateCaveOrganizations(int caveId, List<int> orgIds);
        void DeleteCave(int id);
        void AddUserCave(UserCave userCave);
        void DeleteUserCave(UserCave userCave);
        void UpdateUserCaveIsFavorite(UserCave userCave);
    }
}
