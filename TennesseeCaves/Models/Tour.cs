namespace TennesseeCaves.Models
{
    public class Tour
    {
        public int Id { get; set; }
        public int CaveId { get; set; }
        public string TimeOfDay { get; set; }
        public string TimeOfYear { get; set; }
        public decimal Price { get; set; }
        public int PeoplePerTour { get; set; }
    }
}
