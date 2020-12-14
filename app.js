//VARIABLES
let primos = 0
let dpsMultiplier = 5
let supportMultiplier = 0
let dpsHelpers = {
  Razor: {
    price: 100,
    owned: 0,
    multiplier: 5,
  },
  Diluc: {
    price: 1000,
    owned: 0,
    multiplier: 60,
  }
}
let supportHelpers = {
  Barbara: {
    price: 150,
    owned: 0,
    multiplier: 5,
  },
  Jean: {
    price: 1500,
    owned: 0,
    multiplier: 60,
  }
}


//CALCULATE
function collectDps() {
  primos += dpsMultiplier
  update()
}

function collectSupport() {
  supportMultiplier = 0
  for (const key in supportHelpers) {
      const support = supportHelpers[key];
      supportMultiplier += (support.multiplier * support.owned)
  }
  primos += supportMultiplier
  update()
}

//DRAW
function update(){
  document.getElementById("displayTotal").innerText = `${primos}`
  document.getElementById("ownedRazor").innerText = `${dpsHelpers.Razor.owned}`
  document.getElementById("ownedBarbara").innerText = `${supportHelpers.Barbara.owned}`
  document.getElementById("ownedDiluc").innerText = `${dpsHelpers.Diluc.owned}`
  document.getElementById("ownedJean").innerText = `${supportHelpers.Jean.owned}`
  document.getElementById("priceRazor").innerText = `${dpsHelpers.Razor.price}`
  document.getElementById("priceBarbara").innerText = `${supportHelpers.Barbara.price}`
  document.getElementById("priceDiluc").innerText = `${dpsHelpers.Diluc.price}`
  document.getElementById("priceJean").innerText = `${supportHelpers.Jean.price}`
  document.getElementById("multiplierRazor").innerText = `+${dpsHelpers.Razor.multiplier} primogems per click!`
  document.getElementById("multiplierBarbara").innerText = `+${supportHelpers.Barbara.multiplier} primogems every 3s!`
  document.getElementById("multiplierDiluc").innerText = `+${dpsHelpers.Diluc.multiplier}primogems per click!`
  document.getElementById("multiplierJean").innerText = `+${supportHelpers.Jean.multiplier} primogems per 3sec!`
}

// BUY UPGRADES
function buyRazor(){
  if (primos >= dpsHelpers.Razor.price){
    primos -= dpsHelpers.Razor.price
    dpsHelpers.Razor.owned ++
    dpsMultiplier += dpsHelpers.Razor.multiplier
    dpsHelpers.Razor.price *= 2
    update()
  }
}
function buyBarbara(){
  if (primos >= supportHelpers.Barbara.price){
    primos -= supportHelpers.Barbara.price
    supportHelpers.Barbara.owned ++
    supportMultiplier += supportHelpers.Barbara.multiplier
    supportHelpers.Barbara.price *= 2
    update()
  }
}
function buyDiluc(){
  if (primos >= dpsHelpers.Diluc.price){
    primos -= dpsHelpers.Diluc.price
    dpsHelpers.Diluc.owned ++
    dpsMultiplier += dpsHelpers.Diluc.multiplier
    dpsHelpers.Diluc.price *= 2
    update()
  }
}
function buyJean(){
  if (primos >= supportHelpers["Jean"].price){
    primos -= supportHelpers["Jean"].price
    supportHelpers["Jean"].owned ++
    supportMultiplier += supportHelpers["Jean"].multiplier
    supportHelpers["Jean"].price *= 2
    update()
  }
}


// INITIALIZE
update()
setInterval(collectSupport, 3000)