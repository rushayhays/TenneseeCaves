using System;
using System.Collections.Generic;

namespace TennesseeCaves.Models
{
    public class Cave
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int AccessId { get; set; }
        public string Website { get; set; }
        public string Location { get; set; }    
        public string About { get; set; }   
        public DateTime DateAdded { get; set; }   
        public string BannerImageUrl { get; set; }
        public List<Tour> Tours { get; set; }
        public List<Organization> Organizations { get; set; }
        public List<Image> Images { get; set; }
        public Access Access { get; set; }
    }
}
