using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class PhotosForPets : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PetId",
                table: "Photos",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Photos_PetId",
                table: "Photos",
                column: "PetId");

            migrationBuilder.AddForeignKey(
                name: "FK_Photos_Pets_PetId",
                table: "Photos",
                column: "PetId",
                principalTable: "Pets",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Photos_Pets_PetId",
                table: "Photos");

            migrationBuilder.DropIndex(
                name: "IX_Photos_PetId",
                table: "Photos");

            migrationBuilder.DropColumn(
                name: "PetId",
                table: "Photos");
        }
    }
}
