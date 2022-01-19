class DonutMaker {
  constructor(
    donutCount,
    autoClickerCount,
    autoClickerCost,
    donutMultiplierCount,
    donutMultiplierCost
  ) {
    this.donutCount = donutCount;
    this.autoClickerCount = autoClickerCount;
    this.autoClickerCost = 100;
    this.donutMultiplierCount = donutMultiplierCount;
    this.donutMultiplierCost = 10;
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

  showDonutMultiplierCost() {
    return this.donutMultiplierCost;
  }

  autoClickerCostMultiplier() {
    this.autoClickerCost += this.autoClickerCost / 10;
  }

  buyAutoClicker() {
    if (this.donutCount >= this.autoClickerCost) {
      this.donutCount -= this.autoClickerCost;
      this.autoClickerCount += 1;
      this.autoClickerCostMultiplier();
      this.donutCount = parseInt(this.donutCount.toFixed(0));
    } else alert("You can't afford this tool!");
  }

  autoClickerActivation() {
    this.donutCount += this.autoClickerCount;
  }

  buyDonutMultiplier() {
    if (this.donutCount >= this.donutMultiplierCost) {
      this.donutCount -= this.donutMultiplierCost;
      this.donutMultiplierCount += 1;
      this.donutMultiplierCost += this.donutMultiplierCost / 10;
      this.donutCount = parseInt(this.donutCount.toFixed(0));
      this.donutMultiplierCost = parseInt(this.donutMultiplierCost.toFixed(0));
    }
  }
}

export default DonutMaker;
