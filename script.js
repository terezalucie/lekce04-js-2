
const polozky = document.querySelector(".popis2")
const vybrano = document.querySelectorAll(".menu")
const btn = document.querySelector("#btnEl")
const result = document.querySelector(".result")
const levaPest = document.querySelector(".leva")
const pravaPest = document.querySelector(".prava")

// kamen = 1, nuzky = 2, papir = 3

const kamenNuzkyPapir = (hrac1, hrac2) => {
    if(hrac1 === 2 && hrac2 === 3){
        return "vyhráváš!"
    } else if(hrac2 === 2 && hrac1 === 3){
        return "vyhrál robot"
    } else if(hrac1 === 1 && hrac2 === 3){
        return "vyhrál robot"
    } else if(hrac2 === 1 && hrac1 === 3){
        return "vyhráváš!"
    } else if(hrac2 === 1 && hrac1 === 2){
        return "vyhrál robot"
    } else if(hrac1 === 1 && hrac2 === 2){
        return "Vyhráváš!"
    } else if(hrac1 === 2 && hrac2 === 2){
        return "shoda, hraj znova!"
    } else if(hrac1 === 1 && hrac2 === 1){
        return "shoda, hraj znova!"
    } else if(hrac1 === 3 && hrac2 === 3){
        return "shoda, hraj znova!"
    }
}

const prevodnik = (number) => {
    if(number === 1){
        return `<i class="fa-solid fa-hand-fist selected"></i>`
    } else if(number === 2){
        return `<i class="fa-solid fa-hand-peace selected"></i>`
    } else if(number === 3){
        return `<i class="fa-solid fa-hand selected"></i>`
    }
}

let klik 

vybrano.forEach((vybrano, index) => {
    vybrano.addEventListener("click", () => {

        result.innerHTML = ""
        klik = index + 1
        levaPest.innerHTML = `<i class="fa-solid ${vybrano.classList[1]} selected"></i>`
        pravaPest.innerHTML = `<i class="fa-regular fa-hand-back-fist"></i>`
        


    })
})


btn.addEventListener("click", (event) => {

    event.preventDefault()

    let robot = Math.ceil(Math.random() * 3)
    result.innerHTML = `
    <h3>${kamenNuzkyPapir(klik, robot)}</h3>`
    pravaPest.innerHTML = prevodnik(robot)

/*     setInterval(() => {
        pravaPest.innerHTML = `<i class="fa-regular fa-hand-back-fist"></i>`
        levaPest.innerHTML = `<i class="fa-regular fa-hand-back-fist"></i>`
    }, 2000)
 */
    
    vybrano.forEach((polozka) => {
        if(polozka.classList.contains("vybrana")){
            polozka.classList.remove("vybrana")
        }
    })

})