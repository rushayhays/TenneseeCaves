using System.Collections.Generic;
using TennesseeCaves.Models;

namespace TennesseeCaves.Repositories
{
    public interface IOrganizationRepository
    {
        List<Organization> GetAllOrganizations();
        Organization GetSingleOrg(int id);
        void AddOrganization(Organization org);
        void UpdateOrganization(Organization org);
        void DeleteOrg(int id);
    }
}
