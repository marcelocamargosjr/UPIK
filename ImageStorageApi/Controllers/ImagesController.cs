using AutoMapper;
using ImageStorageApi.Dtos;
using ImageStorageApi.Middlewares;
using ImageStorageApi.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ImageStorageApi.Controllers;

[Authorize]
[Produces("application/json")]
[Route("api/[controller]")]
[ApiController]
public class ImagesController(IImageRepository imageRepository, IMapper mapper) : ControllerBase
{
    // GET: api/images
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<ImageDto>))]
    [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ErrorDetails))]
    public ActionResult<IEnumerable<ImageDto>> GetAllImages()
    {
        var images = imageRepository.GetAllImages();
        var response = mapper.Map<IEnumerable<ImageDto>>(images);

        return Ok(response);
    }

    // GET: api/images/{id}
    [HttpGet("{id:int}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ImageDto))]
    [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ErrorDetails))]
    [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ErrorDetails))]
    public ActionResult<ImageDto> GetImageById(int id)
    {
        var image = imageRepository.GetImageById(id);
        var response = mapper.Map<ImageDto>(image);

        return Ok(response);
    }
}