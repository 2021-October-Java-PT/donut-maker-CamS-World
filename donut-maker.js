class DonutMaker {
  constructor(
    donutCount,
    autoClickerCount,
    autoClickerCost,
    donutMultiplierCount,
    donutMultiplierCost,
    clickMultiplier
  ) {
    this.donutCount = donutCount;
    this.autoClickerCount = autoClickerCount;
    this.autoClickerCost = 100;
    this.donutMultiplierCount = donutMultiplierCount;
    this.donutMultiplierCost = 10;
    this.clickMultiplier = 1;
  }

  addDonut() {
    if (this.donutMultiplierCount === 1) {
      this.donutCount += this.clickMultiplier * 1.2;
      this.donutCount = parseInt(this.donutCount.toFixed(0));
    }
    if (this.donutMultiplierCount > 1) {
      this.donutCount += this.clickMultiplier;
      this.clickMultiplier = 1.2 ** this.donutMultiplierCount;
      // this.donutCount = parseInt(this.donutCount.toFixed(0));
    } else this.donutCount += 1;
    // this.donutCount = parseInt(this.donutCount.toFixed(0));
  }

  showDonutCount() {
    return parseInt(this.donutCount.toFixed(0));
  }

  showAutoClickerCount() {
    return this.autoClickerCount;
  }

  showDonutMultiplierCost() {
    return this.donutMultiplierCost;
  }

  // autoClickerCostMultiplier() {
  //   if (this.donutCount >= this.autoClickerCost) {
  //     this.autoClickerCost += this.autoClickerCost / 10;
  //   }
  // }

  buyAutoClicker() {
    if (this.donutCount >= this.autoClickerCost) {
      this.donutCount -= this.autoClickerCost;
      this.autoClickerCost += this.autoClickerCost / 10;
      this.autoClickerCost = parseInt(this.autoClickerCost.toFixed(0));
      this.autoClickerCount += 1;

      // this.donutCount = parseInt(this.donutCount.toFixed(0));
    } else alert("You can't afford this tool!");
  }

  autoClickerActivation() {
    if (this.donutMultiplierCount === 0 && this.autoClickerCount > 0) {
      this.donutCount += this.autoClickerCount;
      this.donutCount = parseInt(this.donutCount.toFixed(0));
    }
    if (this.donutMultiplierCount > 0) {
      this.donutCount += this.autoClickerCount * this.donutMultiplierCount;
      this.donutCount = parseInt(this.donutCount.toFixed(0));
    }
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
