class DonutMaker {
  constructor(donutCount, autoClickerCount, autoClickerCost) {
    this.donutCount = donutCount;
    this.autoClickerCount = autoClickerCount;
    this.autoClickerCost = 100;
  }

  addDonut() {
    this.donutCount += 1;
  }

  showDonutCount() {
    return this.donutCount;
  }

  showAutoClickerCount() {
    return this.autoClickerCount;
  }

  buyAutoClicker() {
    this.donutCount -= this.autoClickerCost;
    this.autoClickerCount += 1;
  }
}

export default DonutMaker;
