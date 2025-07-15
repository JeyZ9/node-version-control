describe("API /say-hello/:name", () => {
  it("should return hello message", () => {
    cy.request("http://localhost:3000/say-hello/John")
      .its("body")
      .should("eq", "Hello John");
  });
});
