
let nomesPont = [
{nome:"AldenivanJr" ,pontuacao:174},
{nome:"debgama", pontuacao: 165},
{nome:"ericmartins02", pontuacao:455},
{nome:"EtnanSousa", pontuacao:204},
{nome:"Fabricio_SantosBR", pontuacao:133},
{nome:"GuilherminoLucas", pontuacao:539},
{nome:"gustavool1", pontuacao:296},
{nome:"IgorMGG", pontuacao:361},
{nome:"larissakoliveira", pontuacao:166},
{nome:"smillyxD", pontuacao:159},
{nome:"vinapro", pontuacao: 229},
{nome:"midrick", pontuacao: 259},
{nome:"Nafly09", pontuacao:428}
]
nomesPont.sort(function(a,b){
    return b.pontuacao - a.pontuacao
})
console.log(nomesPont)
window.onload = creatingTable()
function creatingTable(){
    let main = document.createElement("main")
    document.body.append(main)
    let tableRanking = document.createElement("table")
    let tableHeader = document.createElement("thead")
    let tableBody = document.createElement("tbody")
    tableHeader.innerHTML = '<th>Nick</th><th>Pontuação</th>'
    tableRanking.append(tableHeader)
    tableRanking.append(tableBody)
    main.append(tableRanking)
    for(let i=0;i<5;i++){
        let celula = document.createElement("tr")
        celula.innerHTML = `<td>${nomesPont[i].nome}</td><td>${nomesPont[i].pontuacao}</td>`
        tableBody.appendChild(celula)
    } 
}




