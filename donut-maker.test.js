import DonutMaker from "./donut-maker";

describe("DonutMaker", () => {
  test("does it add one to donut count", () => {
    const underTest = new DonutMaker(22, 44, 34);
    underTest.addDonut();
    expect(typeof underTest.donutCount).toMatch("number");
  });

  test("does it add one to donut count to make 23", () => {
    const underTest = new DonutMaker(22, 44, 34);
    underTest.addDonut();
    expect(underTest.donutCount).toEqual(23);
  });

  test("does it show the donutCount", () => {
    const underTest = new DonutMaker(22, 44, 34);
    underTest.showDonutCount();
    expect(underTest.donutCount).toEqual(22);
  });

  test("does it show the auto clicker count", () => {
    const underTest = new DonutMaker(0, 0, 0);
    underTest.showAutoClickerCount();
    expect(underTest.autoClickerCount).toEqual(0);
  });

  test("does it add to the auto clicker count", () => {
    const underTest = new DonutMaker(100, 0, 0);
    underTest.buyAutoClicker();
    expect(underTest.autoClickerCount).toEqual(1);
    expect(underTest.donutCount).toEqual(0);
  });

  test("does it increase the cost of the second auto clicker cost by ten percent", () => {
    const underTest = new DonutMaker(500, 0, 100);
    underTest.autoClickerCostMultiplier();
    expect(underTest.autoClickerCost).toEqual(110);
  });

  test("does it increase the cost of the auto clickers by ten percent everytime an auto clicker is purchashed", () => {
    const underTest = new DonutMaker(500, 0, 100);
    underTest.buyAutoClicker();
    underTest.buyAutoClicker();
    expect(underTest.autoClickerCost).toEqual(121);
    expect(underTest.donutCount).toEqual(290);
  });

  test("does it increase the donut total by the amount of Auto Clickers owned", () => {
    const underTest = new DonutMaker(500, 0, 100);
    underTest.buyAutoClicker();
    underTest.buyAutoClicker();
    underTest.autoClickerActivation();
    expect(underTest.autoClickerCost).toEqual(121);
    expect(underTest.donutCount).toEqual(292);
  });
  // try to add activate auto clickers event now
});
