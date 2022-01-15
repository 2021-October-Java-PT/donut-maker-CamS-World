class DonutMaker {
  constructor(donutCount, autoClickerCount, autoClickerCost) {
    this.donutCount = donutCount;
    this.autoClickerCount = autoClickerCount;
    this.autoClickerCost = autoClickerCost;
  }

  addDonut() {
    this.donutCount += 1;
  }

  showDonutCount() {
    return this.donutCount;
  }
}

export default DonutMaker;
