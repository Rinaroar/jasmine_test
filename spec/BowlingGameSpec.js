describe("BowlingGame", function() {

  // Create a new instance from BowlingGame for each test
  // And assign it to game variable
  let game;

    beforeEach(function(){
      game = new BowlingGame();
    });


  it("should properly calculate a gutter game", function() {
    // Player throw twice per turn and has 10 turns (20)
    // imagine the player didnt touch any bowling pin
    rollMany(20, 0);
    expect(game.score()).toEqual(0);
  });

  it("should properly calculate a strike", function () {
      // test
  });

  it("should properly calculate a spare", function () {
      // test
  });

});