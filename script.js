// // const  hodinovka = 300
// // const pocetHodin = Number(prompt("Zadaj pocet hodin zamestnanca", "160")) //promt príma 2 parametry, a oddelujeme ju ciarkou
// // const premie = Number(prompt("Zadaj mimoriadnu odmenu v KC")) // "10000" --> 10000 (musím mysliet na to, ze co zadam do promptu berie ako string nie ako cislo)
// // const plat = (hodinovka * pocetHodin) + premie

// // document.body.innerHTML = "<p>Pepa Novak si vydelal: " + plat + " Kc.</p>" 

// /*Představte si, že vyrábíte registrační systém na očkování proti COVID-19. U každého registrovaného chceme evidovat jméno a věk.

// Vytvořte webovou stránku, která se uživatele zeptá nejdříve na jméno a poté na věk. Tyto hodnoty si uložte do smysluplně pojmenovaných proměnných. Nezpomeňte věk převést na číslo.
// Poté, co uživatel zadá všechny údaje, vypište do stránky odstavec s obsahem ve tvaru
// Květoslav Voňavý, věk: 67
// */

// const meno = prompt("Vpíšte meno") 
// const vek = Number(prompt ("Vek"))

// document.body.innerHTML = meno + ", vek:" + vek

/*Vytvořte webovou stránku, která uživatele požádá o jeho hodinovou sazbu v korunách a spočítá jeho hrubou mzdu za předpokladu, že pracuje 8 hodin denně 21 dní v měsíci.
 Do stránky vypište výsledek zabalený do nějaké přívětivé formulace. Dbejte na to, abyste korektně převedli uživatelem zadanou hodnotu na číslo.
Nechte uživatele zadat nejen hodinovou sazbu, ale také počet hodin a dní v měsíci. Opět dejte pozor na správnou konverzi.*/

const hodinovka = Number(prompt("Zadajte hodinovu sadzbu"))
const pocetHodin = 8
const pocetDni = 21
const hrubaMzda = (hodinovka * pocetHodin) * pocetDni

document.body.innerHTML = "<p>Pri hodinovej sadzbe " + hodinovka + " je vasa hruba mzda " + hrubaMzda + " Kc.</p>"