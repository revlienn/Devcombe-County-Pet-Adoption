using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ErrorController : BaseApiController
    {
        [HttpGet("auth")]//401
        public IActionResult GetAuth()
        {
            return Unauthorized();
        }

        [HttpGet("not-found")]//404
        public IActionResult GetNotFound()
        {
            return NotFound();
        }

        [HttpGet("bad-request")]//400
        public IActionResult GetBadRequest()
        {
            return BadRequest();
        }

        [HttpGet("server-error")]//500
        public IActionResult GetServerError()
        {
            throw new Exception("This is a server error");
        }
    }
}