#! node

//Function qui tri les argument suivant l'ordre Ascii
let triAscii = (tab) => {
  let num = []; let stg = []; let tabAscii = [];

// Function qui sépare les nombres et string
  let part = () => {
    for (let a = 0; a < tab.length; a++) {
      if (tab[a] % 1 == 0) {
        num.push(tab[a])
      } else {
        stg.push(tab[a])
      }
    }
  }
//Function qui tri les tableaux
  let tri = (tab) => {
    let newtab = []; let i = 0; let j = 0;
    for (let b = 0; b < tab.length; b++) {

      while(tab.length != newtab.length) {
          if ((tab[i] <= newtab[j]) || (newtab[j] == undefined))  {
            newtab.splice(j, 0, tab[i]);
            i++;
            j = 0;
          } else {
            j++;
          }
      }
    }
    return newtab
  }
part()
tri(num)
tri(stg)
//Assembler les tableaux
tabAscii = tri(num).concat(tri(stg))
return tabAscii
}

//Gestion d'erreur
if(process.argv.length < 4) {
  console.log('Veuillez indiquer au minimum deux arguments')
  return
}

//Parsing
let arg = process.argv
arg.splice(0, 2)

//Résolution du problème
triAscii(arg)

//Affichage
console.log(triAscii(arg))
