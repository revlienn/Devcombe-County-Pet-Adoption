using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace API.Controllers
{
    public class AccountController(AppDbContext context) : BaseApiController
    {
        [HttpPost("register")]
        public async Task<ActionResult<AppUser>> Register(RegisterDto registerDto)
        {
            if (await EmailExists(registerDto.Email))
            {
                return BadRequest("User found. Please login");
            }
            
            using var hmac = new HMACSHA512();
            var user = new AppUser
            {
                DisplayName = registerDto.DisplayName,
                Email = registerDto.Email,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key
            };

            context.Users.Add(user);
            await context.SaveChangesAsync();

            return user;
        }
        private async Task<bool> EmailExists(string email)
        {
            return await context.Users.AnyAsync(user => user.Email.ToLower() == email.ToLower());
        }
    }
}