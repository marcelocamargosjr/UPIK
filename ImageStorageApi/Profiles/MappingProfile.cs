using AutoMapper;
using ImageStorageApi.Dtos;
using ImageStorageApi.Models;

namespace ImageStorageApi.Profiles;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Image, ImageDto>();
    }
}