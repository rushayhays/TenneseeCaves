using Microsoft.Extensions.Configuration;
using Microsoft.Data.SqlClient;
using TennesseeCaves.Models;
using TennesseeCaves.Utils;
using System.Collections.Generic;
using System.Linq;

namespace TennesseeCaves.Repositories
{
    public class TourRepository : BaseRepository
    {
        public TourRepository(IConfiguration configuration) : base(configuration) { }

        public List<Tour> GetAllToursForSpecificCave(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, CaveId, TimeOfDay, TimeOfYear, Price, PeoplePerTour
                        FROM Tour
                        WHERE CaveId = @Id
                    ";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    List<Tour> tours = new List<Tour>();

                    var reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        Tour tour = new Tour()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            CaveId = DbUtils.GetInt(reader, "CaveId"),
                            TimeOfDay = DbUtils.GetString(reader, "TimeOfDay"),
                            TimeOfYear = DbUtils.GetString(reader, "TimeOfYear"),
                            Price = DbUtils.GetDecimal(reader, "Price"),
                            PeoplePerTour = DbUtils.GetInt(reader, "PeoplePerTour")
                        };
                        tours.Add(tour);
                    }
                    reader.Close();
                    return tours;
                }
            }
        }

        public Tour GetSingleTour(int id)
        {
            using (var conn= Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, CaveId, TimeOfDay, TimeOfYear, Price, PeoplePerTour
                        FROM Tour
                        WHERE Id = 2
                    ";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        Tour tour = null;
                        if (reader.Read())
                        {
                            tour = new Tour()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                CaveId = DbUtils.GetInt(reader, "CaveId"),
                                TimeOfDay = DbUtils.GetString(reader, "TimeOfDay"),
                                TimeOfYear = DbUtils.GetString(reader, "TimeOfYear"),
                                Price = DbUtils.GetDecimal(reader, "Price"),
                                PeoplePerTour = DbUtils.GetInt(reader, "PeoplePerTour")
                            };
                        }
                        reader.Close() ;
                        return tour;
                    }
                }
            }
        }



    }
}
