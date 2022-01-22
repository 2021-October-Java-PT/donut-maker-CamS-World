import DonutMaker from "./donut-maker";

const donutClickerStats = document.querySelector("#donutClickerStats");
const clickBtn = document.querySelector("#donut-maker");
const buyAutoClickerBtn = document.querySelector("#purchase-auto-clicker");
const buyDonutMultiplierBtn = document.querySelector(
  "#purchase-donut-multiplier"
);
const toggleCompanyAbout = document.querySelector("#about-company-button");
const closeAboutCompany = document.querySelector("#about-company-para");

let donutClicker = new DonutMaker(400, 0, 100, 0, 10, 1);

renderPage();

function renderPage() {
  donutClickerGame();
  hideAboutCompany();
}

function donutClickerGame() {
  // Donut Count display

  const donutDisplay = document.getElementById("donuts-display");
  donutDisplay.innerText = "Donut Count: " + donutClicker.donutCount;

  // Auto Clicker display

  const autoClickerDisplay = document.getElementById("auto-clicker-display");
  autoClickerDisplay.innerText =
    "Auto Clickers: " + donutClicker.autoClickerCount;

  // Auto Clicker cost display

  const autoClickerCostDisplay = document.getElementById(
    "auto-clicker-cost-display"
  );

  autoClickerCostDisplay.innerText =
    "Auto Clicker Cost: " + donutClicker.autoClickerCost;

  // Donut Multiplier
  const donutMultiplierDisplay = document.getElementById(
    "donut-muliplier-display"
  );
  donutMultiplierDisplay.innerText =
    "Donut Multipliers: " + donutClicker.donutMultiplierCount;

  // Donut Multiplier cost

  const donutMultiplierCostDisplay = document.getElementById(
    "donut-multiplier-cost-display"
  );
  donutMultiplierCostDisplay.innerText =
    "Donut Multiplier Cost: " + donutClicker.donutMultiplierCost;

  clickBtn.addEventListener("click", () => {
    donutClicker.addDonut();

    donutDisplay.innerText = "Donut Count: " + donutClicker.donutCount;
  });

  buyAutoClickerBtn.addEventListener("click", () => {
    donutClicker.buyAutoClicker();

    // donutClicker.autoClickerCostMultiplier();
    // donutClicker.showDonutCount();
    // donutClicker.autoClickerActivation();

    autoClickerDisplay.innerText =
      "Auto Clickers: " + donutClicker.autoClickerCount;
    donutDisplay.innerText = "Donut Count: " + donutClicker.donutCount;

    autoClickerCostDisplay.innerText =
      "Auto Clicker Cost: " + donutClicker.autoClickerCost;
  });

  buyDonutMultiplierBtn.addEventListener("click", () => {
    donutClicker.buyDonutMultiplier();

    donutMultiplierDisplay.innerText =
      "Donut Multipliers: " + donutClicker.donutMultiplierCount;

    donutDisplay.innerText = "Donut Count: " + donutClicker.donutCount;

    donutMultiplierCostDisplay.innerText =
      "Donut Multiplier Cost: " + donutClicker.donutMultiplierCost;
  });

  toggleCompanyAbout.addEventListener("click", () => {
    toggleCompanyElement();
  });

  closeAboutCompany.addEventListener("click", () => {
    hideAboutCompany();
  });

  setInterval(() => {
    if (
      donutClicker.donutMultiplierCount === 0 &&
      donutClicker.autoClickerCount > 0
    ) {
      donutClicker.donutCount += donutClicker.autoClickerCount;
      donutClicker.donutCount = parseInt(donutClicker.donutCount.toFixed(0));
      donutDisplay.innerText = "Donut Count: " + donutClicker.donutCount;
    }
    if (
      donutClicker.donutMultiplierCount > 0 &&
      donutClicker.autoClickerCount > 0
    ) {
      donutClicker.donutCount +=
        1.2 ** donutClicker.donutMultiplierCount *
        donutClicker.autoClickerCount;
      donutClicker.donutCount = parseInt(donutClicker.donutCount.toFixed(0));
      donutDisplay.innerText = "Donut Count: " + donutClicker.donutCount;
    }
  }, 1000);
}

function hideAboutCompany() {
  var element = document.getElementById("about-company-para");

  element.style.display = "none";
}

function toggleCompanyElement() {
  var element = document.getElementById("about-company-para");
  element.style.display = "block";
}
