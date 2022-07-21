using System;

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
    }
}
