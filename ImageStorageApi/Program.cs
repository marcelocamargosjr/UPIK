using ImageStorageApi.Middlewares;
using ImageStorageApi.Repositories;
using JWT.Extensions.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

// Add JWT authentication
builder.Services.AddAuthentication(options =>
    {
        options.DefaultAuthenticateScheme = JwtAuthenticationDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtAuthenticationDefaults.AuthenticationScheme;
    })
    .AddJwt(options =>
    {
        // secrets, required only for symmetric algorithms, such as HMACSHA256Algorithm
        options.Keys = ["upikrules"];

        // optionally; disable throwing an exception if JWT signature is invalid
        options.VerifySignature = false;
    });

// Add authorization
builder.Services.AddAuthorization();

// Register AutoMapper
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

// Add controllers to the service container
builder.Services.AddControllers();

// Register IImageRepository
builder.Services.AddSingleton<IImageRepository, InMemoryImageRepository>();

// Add Cors
builder.Services.AddCors(o => o.AddPolicy("MyPolicy", corsPolicyBuilder =>
{
    corsPolicyBuilder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
}));

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();

// Enable Cors with the policy
app.UseCors("MyPolicy");

app.UseAuthentication();
app.UseAuthorization();

app.UseMiddleware<ExceptionMiddleware>();

app.MapControllers();

app.Run();