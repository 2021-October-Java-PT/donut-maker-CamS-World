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

  autoClickerCostMultiplier() {
    this.autoClickerCost += this.autoClickerCost / 10;
  }

  buyAutoClicker() {
    this.donutCount -= this.autoClickerCost;
    this.autoClickerCount += 1;
    this.autoClickerCostMultiplier();
  }
}

export default DonutMaker;
