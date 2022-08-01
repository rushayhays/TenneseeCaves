using Microsoft.Extensions.Configuration;
using Microsoft.Data.SqlClient;
using TennesseeCaves.Models;
using TennesseeCaves.Utils;
using System.Collections.Generic;
using System.Linq;

namespace TennesseeCaves.Repositories
{
    public class TourRepository : BaseRepository, ITourRepository
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
                        WHERE Id = @Id
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

        public void AddTour(Tour tour)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Tour (CaveId, TimeOfDay, TimeOfYear, Price, PeoplePerTour)
                        OUTPUT INSERTED.ID
                        VALUES (@CaveId, @TimeOfDay, @TimeOfYear, @Price, @PeoplePerTour)
                    ";
                    cmd.Parameters.AddWithValue("@CaveId", tour.CaveId);
                    cmd.Parameters.AddWithValue("@TimeOfDay", tour.TimeOfDay);
                    cmd.Parameters.AddWithValue("@TimeOfYear", tour.TimeOfYear);
                    cmd.Parameters.AddWithValue("@Price", tour.Price);
                    cmd.Parameters.AddWithValue("@PeoplePerTour", tour.PeoplePerTour);

                    int id = (int)cmd.ExecuteScalar();
                    tour.Id = id;
                }
            }
        }

        public void UpdateTour(Tour tour)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Tour
                        SET CaveId=@CaveId,
                            TimeOfDay=@TimeOfDay,
                            TimeOfYear=@TimeOfYear,
                            Price=@Price,
                            PeoplePerTour=@PeoplePerTour
                        WHERE Id = @Id
                    ";
                    cmd.Parameters.AddWithValue("@CaveId", tour.CaveId);
                    cmd.Parameters.AddWithValue("@TimeOfDay", tour.TimeOfDay);
                    cmd.Parameters.AddWithValue("@TimeOfYear", tour.TimeOfYear);
                    cmd.Parameters.AddWithValue("@Price", tour.Price);
                    cmd.Parameters.AddWithValue("@PeoplePerTour", tour.PeoplePerTour);
                    cmd.Parameters.AddWithValue("@Id", tour.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeleteTour(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        DELETE FROM Tour
                        WHERE Id = @Id
                    ";
                   
                    cmd.Parameters.AddWithValue("@Id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }




    }
}
