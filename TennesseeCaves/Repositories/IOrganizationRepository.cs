using System.Collections.Generic;
using TennesseeCaves.Models;

namespace TennesseeCaves.Repositories
{
    public interface IOrganizationRepository
    {
        List<Organization> GetAllOrganizations();
        void AddOrganization(Organization org);
        void UpdateOrganization(Organization org);
        void DeleteOrg(int id);
    }
}
