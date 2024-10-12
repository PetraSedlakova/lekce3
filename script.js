// const  hodinovka = 300
// const pocetHodin = Number(prompt("Zadaj pocet hodin zamestnanca", "160")) //promt príma 2 parametry, a oddelujeme ju ciarkou
// const premie = Number(prompt("Zadaj mimoriadnu odmenu v KC")) // "10000" --> 10000 (musím mysliet na to, ze co zadam do promptu berie ako string nie ako cislo)
// const plat = (hodinovka * pocetHodin) + premie

// document.body.innerHTML = "<p>Pepa Novak si vydelal: " + plat + " Kc.</p>" 

/*Představte si, že vyrábíte registrační systém na očkování proti COVID-19. U každého registrovaného chceme evidovat jméno a věk.

Vytvořte webovou stránku, která se uživatele zeptá nejdříve na jméno a poté na věk. Tyto hodnoty si uložte do smysluplně pojmenovaných proměnných. Nezpomeňte věk převést na číslo.
Poté, co uživatel zadá všechny údaje, vypište do stránky odstavec s obsahem ve tvaru
Květoslav Voňavý, věk: 67
*/

const meno = prompt("Vpíšte meno") 
const vek = Number(prompt ("Vek"))

document.body.innerHTML = meno + ", vek:" + vek