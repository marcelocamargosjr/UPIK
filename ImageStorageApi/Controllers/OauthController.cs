using ImageStorageApi.Helpers;
using ImageStorageApi.Middlewares;
using Microsoft.AspNetCore.Mvc;

namespace ImageStorageApi.Controllers;

[Produces("application/json")]
[Route("api/[controller]")]
[ApiController]
public class OauthController : ControllerBase
{
    // POST: api/oauth/token
    [HttpPost("token")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(string))]
    [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ErrorDetails))]
    public ActionResult<string> GenerateJwtToken()
    {
        var token = JwtHelper.GenerateJwtToken();

        return Ok(token);
    }
}