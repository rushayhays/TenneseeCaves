using System.Collections.Generic;
using TennesseeCaves.Models;

namespace TennesseeCaves.Repositories
{
    public interface ICaveRepository
    {
        List<Cave> GetAllCaves();
    }
}
