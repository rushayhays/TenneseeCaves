﻿using Microsoft.Extensions.Configuration;
using Microsoft.Data.SqlClient;
using TennesseeCaves.Models;
using TennesseeCaves.Utils;
using System.Collections.Generic;
using System.Linq;

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

        //This was the most difficult repository method
        public List<Cave> GetAllUsersCaves(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT c.Id, c.[Name], c.AccessId, c.Website, c.[Location], c.About, c.DateAdded, c.BannerImageUrl,
                        upc.Id AS UpcId, upc.UserProfileId, upc.IsFavorite, upc.WhenAdded
                        FROM Cave c
                        LEFT JOIN UserProfileCave upc ON upc.CaveId = c.Id
                        WHERE upc.UserProfileId = @Id
                    ";
                    DbUtils.AddParameter(cmd, "@Id", id);

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
                            DateAdded = DbUtils.GetDateTime(reader, "DateAdded"),
                            BannerImageUrl = DbUtils.GetString(reader, "BannerImageUrl"),
                            IsFavorite = DbUtils.GetBool(reader, "IsFavorite"),
                            WhenAdded = DbUtils.GetDateTime(reader, "WhenAdded")

                        };
                        caves.Add(cave);
                    }
                    reader.Close();

                    return caves;
                }
            }
        }

        public Cave GetSingleCave(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT c.Id, c.[Name], c.AccessId, c.Website, c.[Location], c.About, c.DateAdded, c.BannerImageUrl, 
                        o.Id AS OrgId, o.[Name] AS OrgName, o.Website AS OrgWebsite, o.[Image] AS OrgImage, 
                        t.Id AS TourId, t.TimeOfDay, t.TimeOfYear, t.Price, t.PeoplePerTour,
                        i.Id AS ImageId, i.Url AS ImageUrl,
                        a.AccessLevel
                        FROM Cave c
                        LEFT JOIN CaveOrganization co ON co.CaveId = c.Id
                        LEFT JOIN Organization o ON o.Id = co.OrganizationId
                        LEFT JOIN Tour t ON t.CaveId = c.Id
                        LEFT JOIN Image i ON i.CaveId = c.Id
                        LEFT JOIN Access a ON a.Id = c.AccessId
                        WHERE c.Id = @Id
                    ";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        Cave cave = null;
                        List<Organization> orgList = new List<Organization>();
                        List<Tour> tourList = new List<Tour>();
                        List<Image> imageList = new List<Image>();
                        while (reader.Read())
                        {
                            if(cave == null)
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
                                    BannerImageUrl = DbUtils.GetString(reader, "BannerImageUrl"),
                                    Organizations = new List<Organization>(),
                                    Images = new List<Image>(),
                                    Tours = new List<Tour>(),
                                    Access = new Access()
                                    {
                                        Id=DbUtils.GetInt(reader, "AccessId"),
                                        AccessLevel=DbUtils.GetString(reader, "AccessLevel")
                                    }
                                };
                            }
                            //Need to check if any organizations exist at all for the cave before trying to retrieve them
                            var orgId = DbUtils.GetNullableInt(reader, "OrgId");
                            if (orgId != null) //If there are organizations THEN loop through this
                            {
                                var existingOrg = orgList.FirstOrDefault(o => o.Id == orgId);
                                    if (existingOrg == null)
                                    {
                                        existingOrg = new Organization()
                                        {
                                            Id = DbUtils.GetInt(reader, "OrgId"),
                                            Name = DbUtils.GetString(reader, "OrgName"),
                                            Website = DbUtils.GetString(reader, "OrgWebsite"),
                                            OrgImage = DbUtils.GetString(reader, "OrgImage")
                                        };
                                        orgList.Add(existingOrg);
                                    }
                            }
                            //Do the same for tours
                            var tourId = DbUtils.GetNullableInt(reader, "TourId");
                            if(tourId != null)
                            {
                                var existingTour = tourList.FirstOrDefault(t => t.Id == tourId);
                                if (existingTour == null)
                                {
                                    existingTour = new Tour()
                                    {
                                        Id = DbUtils.GetInt(reader, "TourId"),
                                        CaveId = DbUtils.GetInt(reader, "Id"),
                                        TimeOfDay = DbUtils.GetString(reader, "TimeOfDay"),
                                        TimeOfYear = DbUtils.GetString(reader, "TimeOfYear"),
                                        Price = DbUtils.GetDecimal(reader, "Price"),
                                        PeoplePerTour = DbUtils.GetInt(reader, "PeoplePerTour")
                                    };
                                    tourList.Add(existingTour);
                                }
                            }
                            var imageId = DbUtils.GetNullableInt(reader, "ImageId");
                            if(imageId != null)
                            {
                                var existingImage = imageList.FirstOrDefault(i => i.Id == imageId);
                                if (existingImage == null)
                                {
                                    existingImage = new Image()
                                    {
                                        Id = DbUtils.GetInt(reader, "TourId"),
                                        CaveId = DbUtils.GetInt(reader, "Id"),
                                        Url = DbUtils.GetString(reader, "ImageUrl")
                                    };
                                    imageList.Add(existingImage);
                                }
                            }
                        }
                        reader.Close();
                        cave.Organizations.AddRange(orgList);
                        cave.Images.AddRange(imageList);
                        cave.Tours.AddRange(tourList);
                        return cave;
                    }
                }
            }
        }

        public void AddCave(Cave cave)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Cave ([Name], AccessId, Website, Location, About, DateAdded, BannerImageUrl)
                        OUTPUT INSERTED.ID
                        VALUES (@Name, @AccessId, @Website, @Location, @About, @DateAdded, @BannerImageUrl)
                    ";
                    cmd.Parameters.AddWithValue("@Name", cave.Name);
                    cmd.Parameters.AddWithValue("@AccessId", cave.AccessId);
                    cmd.Parameters.AddWithValue("@Website", cave.Website);
                    cmd.Parameters.AddWithValue ("@Location", cave.Location);
                    cmd.Parameters.AddWithValue("@About", cave.About);
                    cmd.Parameters.AddWithValue("@DateAdded", cave.DateAdded);
                    cmd.Parameters.AddWithValue("@BannerImageUrl", cave.BannerImageUrl);

                    int id = (int)cmd.ExecuteScalar();
                    cave.Id = id;
                }
            }
        }

        public void UpdateCaveGeneralInfo(Cave cave)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Cave
                        SET Name=@Name,
                            AccessId=@AccessId,
                            Website=@Website,
                            Location=@Location,
                            About=@About,
                            DateAdded=@DateAdded,
                            BannerImageUrl=@BannerImageUrl
                        WHERE Id=@Id
                    ";
                    cmd.Parameters.AddWithValue("@Name", cave.Name);
                    cmd.Parameters.AddWithValue("@AccessId", cave.AccessId);
                    cmd.Parameters.AddWithValue("@Website", cave.Website);
                    cmd.Parameters.AddWithValue("@Location", cave.Location);
                    cmd.Parameters.AddWithValue("@About", cave.About);
                    cmd.Parameters.AddWithValue("@DateAdded", cave.DateAdded);
                    cmd.Parameters.AddWithValue("@BannerImageUrl", cave.BannerImageUrl);

                    cmd.Parameters.AddWithValue("@Id", cave.Id);

                    cmd.ExecuteNonQuery(); 
                }
            }
        }

        public void UpdateCaveOrganizations(int caveId, List<int> orgIds)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM CaveOrganization WHERE CaveId = @CaveId";
                    cmd.Parameters.AddWithValue("@CaveId", caveId);
                    cmd.ExecuteNonQuery();


                    cmd.CommandText = @"INSERT INTO CaveOrganization (CaveId, OrganizationId) 
                                        VALUES (@CaveId, @OrgId)";

                    foreach (int orgId in orgIds)
                    {
                        cmd.Parameters.Clear();
                        cmd.Parameters.AddWithValue("@CaveId", caveId);
                        cmd.Parameters.AddWithValue("@OrgId", orgId);
                        cmd.ExecuteNonQuery();
                    }
                }
            }
        }

        public void DeleteCave(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        DELETE FROM Cave
                        WHERE Id = @Id
                    ";

                    cmd.Parameters.AddWithValue("@Id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void AddUserCave(UserCave userCave)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO UserProfileCave (UserProfileId, CaveId, IsFavorite, WhenAdded)
                        OUTPUT INSERTED.ID
                        VALUES (@UserProfileId, @CaveId, @IsFavorite, @WhenAdded)
                    ";
                    cmd.Parameters.AddWithValue("@UserProfileId", userCave.UserProfileId);
                    cmd.Parameters.AddWithValue("@CaveId", userCave.CaveId);
                    cmd.Parameters.AddWithValue("@IsFavorite", userCave.IsFavorite);
                    cmd.Parameters.AddWithValue("@WhenAdded", userCave.WhenAdded);
                    int id = (int)cmd.ExecuteScalar();
                    userCave.Id = id;
                }
            }
        }

        public void DeleteUserCave(UserCave userCave)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        DELETE FROM UserProfileCave
                        WHERE CaveId = @CaveId AND UserProfileId = @UserProfileId
                    ";
                    cmd.Parameters.AddWithValue("@CaveId", userCave.CaveId);
                    cmd.Parameters.AddWithValue("@UserProfileId", userCave.UserProfileId);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void UpdateUserCaveIsFavorite(UserCave userCave)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE UserProfileCave
                        SET IsFavorite=@IsFavorite
                        WHERE CaveId=@CaveId AND UserProfileId = @UserProfileID
                    ";
                    cmd.Parameters.AddWithValue("@IsFavorite", userCave.IsFavorite);
                    cmd.Parameters.AddWithValue("@UserProfileId", userCave.UserProfileId);
                    cmd.Parameters.AddWithValue("@CaveId", userCave.CaveId);

                    cmd.ExecuteNonQuery();
                }
            }
        }

    }
}
