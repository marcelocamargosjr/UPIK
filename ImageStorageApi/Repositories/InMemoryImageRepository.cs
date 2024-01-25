using ImageStorageApi.Models;

namespace ImageStorageApi.Repositories;

public class InMemoryImageRepository : IImageRepository
{
    private readonly List<Image> _images = [];

    public InMemoryImageRepository()
    {
        for (var i = 1; i <= 10; i++) _images.Add(new Image { Id = i, Url = $"https://placehold.co/400x400.png?text=Image+{i}" });
    }

    public IEnumerable<Image> GetAllImages()
    {
        return _images;
    }

    public Image GetImageById(int id)
    {
        var image = _images.FirstOrDefault(img => img.Id == id);
        return image ?? throw new KeyNotFoundException($"Image with ID {id} not found.");
    }
}