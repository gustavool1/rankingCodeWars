
let nomesPont = [
{nome:"AldenivanJr" ,pontuacao:194, perfil:"https://www.codewars.com/users/Aldenivan%20Jr"},
{nome:"debgama", pontuacao: 175, perfil:"https://www.codewars.com/users/deb.gama"},
{nome:"ericmartins02", pontuacao:490, perfil:"https://www.codewars.com/users/ericmartins02"},
{nome:"EtnanSousa", pontuacao:218, perfil:"https://www.codewars.com/users/EtnanSousa"},
{nome:"Fabricio_SantosBR", pontuacao:151, perfil:"https://www.codewars.com/users/Fabricio_SantosBR"},
{nome:"GuilherminoLucas", pontuacao:681, perfil:"https://www.codewars.com/users/GuilherminoLucas"},
{nome:"gustavool1", pontuacao:300, perfil:"https://www.codewars.com/users/gustavool1"},
{nome:"IgorMGG", pontuacao:401, perfil:"https://www.codewars.com/users/IgorMGG"},
{nome:"larissakoliveira", pontuacao:174, perfil:"https://www.codewars.com/users/larissakoliveira"},
{nome:"smillyxD", pontuacao:176, perfil:"https://www.codewars.com/users/smillyxD"},
{nome:"vinapro", pontuacao: 242, perfil:"https://www.codewars.com/users/vinapro"},
{nome:"midrick", pontuacao: 282, perfil:"https://www.codewars.com/users/midrick"},
{nome:"Nafly09", pontuacao:477, perfil:"https://www.codewars.com/users/Nafly09"},
{nome:"marcelochaves92", pontuacao:122, perfil:"https://www.codewars.com/users/marcelochaves92"}
]
nomesPont.sort(function(a,b){
    return b.pontuacao - a.pontuacao
})

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
    for(let i=0;i<nomesPont.length;i++){
        let celula = document.createElement("tr")
        celula.innerHTML = `<td><a href='${nomesPont[i].perfil}' target=_blank>${i+1} - ${nomesPont[i].nome}</a></td><td>${nomesPont[i].pontuacao}</td>`
        tableBody.appendChild(celula)
        
    } 
}
let checkContent = document.createElement('section')

let p = document.createElement("p")
let p1 = document.createElement("p")
p1.innerHTML = '<br>Clique no nick e irá ser redirecionado para o perfil'
p.innerHTML='Atualizado por API- Feito pelo Rafael Schug <i class="far fa-clock"></i>'
checkContent.appendChild(p)
checkContent.appendChild(p1)
document.body.appendChild(checkContent)
