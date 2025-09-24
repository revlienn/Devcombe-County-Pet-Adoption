using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class PhotoEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_VisitForm_Pets_Id",
                table: "VisitForm");

            migrationBuilder.DropPrimaryKey(
                name: "PK_VisitForm",
                table: "VisitForm");

            migrationBuilder.RenameTable(
                name: "VisitForm",
                newName: "VisitForms");

            migrationBuilder.AddPrimaryKey(
                name: "PK_VisitForms",
                table: "VisitForms",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Photos",
                columns: table => new
                {
                    Id = table.Column<string>(type: "TEXT", nullable: false),
                    PublicId = table.Column<string>(type: "TEXT", nullable: true),
                    Url = table.Column<string>(type: "TEXT", nullable: false),
                    IsPrimary = table.Column<bool>(type: "INTEGER", nullable: false),
                    PetId = table.Column<string>(type: "TEXT", nullable: true),
                    ShelterId = table.Column<string>(type: "TEXT", nullable: true),
                    AppUserId = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Photos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Photos_Pets_PetId",
                        column: x => x.PetId,
                        principalTable: "Pets",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Photos_Shelters_ShelterId",
                        column: x => x.ShelterId,
                        principalTable: "Shelters",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Photos_Users_AppUserId",
                        column: x => x.AppUserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Photos_AppUserId",
                table: "Photos",
                column: "AppUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Photos_PetId",
                table: "Photos",
                column: "PetId");

            migrationBuilder.CreateIndex(
                name: "IX_Photos_ShelterId",
                table: "Photos",
                column: "ShelterId");

            migrationBuilder.AddForeignKey(
                name: "FK_VisitForms_Pets_Id",
                table: "VisitForms",
                column: "Id",
                principalTable: "Pets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_VisitForms_Pets_Id",
                table: "VisitForms");

            migrationBuilder.DropTable(
                name: "Photos");

            migrationBuilder.DropPrimaryKey(
                name: "PK_VisitForms",
                table: "VisitForms");

            migrationBuilder.RenameTable(
                name: "VisitForms",
                newName: "VisitForm");

            migrationBuilder.AddPrimaryKey(
                name: "PK_VisitForm",
                table: "VisitForm",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_VisitForm_Pets_Id",
                table: "VisitForm",
                column: "Id",
                principalTable: "Pets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
