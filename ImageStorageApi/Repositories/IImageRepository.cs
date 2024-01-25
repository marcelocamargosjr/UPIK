using ImageStorageApi.Models;

namespace ImageStorageApi.Repositories;

public interface IImageRepository
{
    IEnumerable<Image> GetAllImages();
    Image GetImageById(int id);
}