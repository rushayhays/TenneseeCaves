using System;
namespace TennesseeCaves.Models
{
    public class UserCave
    {
        public int Id { get; set; }
        public int UserProfileId { get; set; }
        public int CaveId { get; set; }
        public bool IsFavorite { get; set; }
        public DateTime WhenAdded { get; set; }
    }
}
