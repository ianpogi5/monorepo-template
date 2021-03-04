describe("Frontend", function () {
  beforeEach(function () {
    cy.visit("/");
  });

  it("Companies", () => {
    cy.get("#companies").find("li").should("have.length", 5);
  });

  it("Users", () => {
    cy.get("#users").find("li").should("have.length", 3);
  });
});
