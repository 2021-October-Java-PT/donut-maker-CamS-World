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
});
