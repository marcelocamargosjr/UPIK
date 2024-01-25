using System.Net;
using System.Text.Json;

namespace ImageStorageApi.Middlewares;

public class ExceptionMiddleware(RequestDelegate next)
{
    public async Task InvokeAsync(HttpContext httpContext)
    {
        try
        {
            await next(httpContext);
        }
        catch (Exception ex)
        {
            await HandleExceptionAsync(httpContext, ex);
        }
    }

    private static Task HandleExceptionAsync(HttpContext context, Exception exception)
    {
        context.Response.ContentType = "application/json";

        if (exception is KeyNotFoundException)
            context.Response.StatusCode = (int)HttpStatusCode.BadRequest;
        else
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

        var errorDetails = new ErrorDetails
        {
            StatusCode = context.Response.StatusCode,
            Message = exception.Message
        };

        var response = JsonSerializer.Serialize(errorDetails);

        return context.Response.WriteAsync(response);
    }
}

public class ErrorDetails
{
    public int StatusCode { get; set; }
    public required string Message { get; set; }
}