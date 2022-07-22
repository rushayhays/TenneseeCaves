using Microsoft.Extensions.Configuration;
using TennesseeCaves.Models;
using TennesseeCaves.Utils;
using System.Collections.Generic;

namespace TennesseeCaves.Repositories
{
    public class CaveRepository : BaseRepository, ICaveRepository
    {
        public CaveRepository(IConfiguration configuration) : base(configuration) { }

        public List<Cave> GetAllCaves()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using(var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, [Name], AccessId, Website, [Location], About, DateAdded, BannerImageUrl
                        FROM Cave
                    ";
                    
                    List<Cave> caves = new List<Cave>();

                    var reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        Cave cave = new Cave()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            AccessId = DbUtils.GetInt(reader, "AccessId"),
                            Website = DbUtils.GetString(reader, "Website"),
                            Location = DbUtils.GetString(reader, "Location"),
                            About = DbUtils.GetString(reader, "About"),
                            DateAdded  = DbUtils.GetDateTime(reader, "DateAdded"),
                            BannerImageUrl = DbUtils.GetString(reader, "BannerImageUrl")

                        };
                        caves.Add(cave);
                    }
                    reader.Close();

                    return caves;
                }
            }
        }

        public Cave GetSingleCave()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT c.Id, c.[Name], c.AccessId, c.Website, c.[Location], c.About, c.DateAdded, c.BannerImageUrl, o.[Name] AS OrgName, o.Website AS OrgWebsite, o.[Image] AS OrgImage
                        FROM Cave c
                        LEFT JOIN CaveOrganization co ON co.CaveId = c.Id
                        LEFT JOIN Organization o ON o.Id = co.OrganizationId
                    ";

                    Cave cave = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        cave = new Cave()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            AccessId = DbUtils.GetInt(reader, "AccessId"),
                            Website = DbUtils.GetString(reader, "Website"),
                            Location = DbUtils.GetString(reader, "Location"),
                            About = DbUtils.GetString(reader, "About"),
                            DateAdded = DbUtils.GetDateTime(reader, "DateAdded"),
                            BannerImageUrl = DbUtils.GetString(reader, "BannerImageUrl")

                        };
                    }
                    reader.Close();

                    return cave;
                }
            }
        }
    }
}
