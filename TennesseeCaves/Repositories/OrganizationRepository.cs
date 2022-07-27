using Microsoft.Extensions.Configuration;
using Microsoft.Data.SqlClient;
using TennesseeCaves.Models;
using TennesseeCaves.Utils;
using System.Collections.Generic;
using System.Linq;

namespace TennesseeCaves.Repositories
{
    public class OrganizationRepository : BaseRepository, IOrganizationRepository
    {
        public OrganizationRepository(IConfiguration configuration) : base (configuration) { }

        public List<Organization> GetAllOrganizations()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, [Name], Website, [Image]
                        FROM Organization
                    ";

                    List<Organization> organizations = new List<Organization>();

                    var reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        Organization org = new Organization()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Website = DbUtils.GetString(reader, "Website"),
                            OrgImage = DbUtils.GetString(reader, "Image")

                        };
                        organizations.Add(org);
                    }
                    reader.Close();

                    return organizations;
                }
            }
        }

        public Organization GetSingleOrg(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, [Name], Website, [Image]
                        FROM Organization
                        WHERE Id = @Id
                    ";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        Organization org = null;
                        if (reader.Read())
                        {
                            org = new Organization()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Name = DbUtils.GetString(reader, "Name"),
                                Website = DbUtils.GetString(reader, "Website"),
                                OrgImage = DbUtils.GetString(reader, "Image")

                            };
                        }
                        reader.Close();
                        return org;
                    }
                }
            }
        }


        public void AddOrganization(Organization org)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Organization ([Name], Website, [Image])
                        OUTPUT INSERTED.ID
                        VALUES (@Name, @Website, @Image)
                    ";
                    cmd.Parameters.AddWithValue("@Name", org.Name);
                    cmd.Parameters.AddWithValue("@Website", org.Website);
                    cmd.Parameters.AddWithValue("@Image", org.OrgImage);

                    int id = (int)cmd.ExecuteScalar();
                    org.Id = id;
                }
            }
        }

        public void UpdateOrganization(Organization org)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Organization
                        SET Name=@Name,
                            Website=@Website,
                            Image=@Image
                        WHERE Id=@Id
                    ";
                    cmd.Parameters.AddWithValue("@Name", org.Name);
                    cmd.Parameters.AddWithValue("@Website", org.Website);
                    cmd.Parameters.AddWithValue("@Image", org.OrgImage);
                    cmd.Parameters.AddWithValue("@Id", org.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeleteOrg(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        DELETE FROM Organization
                        WHERE Id = @Id
                    ";

                    cmd.Parameters.AddWithValue("@Id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
