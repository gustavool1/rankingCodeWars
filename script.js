
let nomesPont = [
{nome:"AldenivanJr" ,pontuacao:0, perfil:"https://www.codewars.com/users/Aldenivan%20Jr", api_request: "https://www.codewars.com/api/v1/users/Aldenivan%20Jr" },
{nome:"debgama", pontuacao: 0, perfil:"https://www.codewars.com/users/deb.gama", api_request: "https://www.codewars.com/api/v1/users/deb.gama"},
{nome:"ericmartins02", pontuacao:0, perfil:"https://www.codewars.com/users/ericmartins02", api_request: "https://www.codewars.com/api/v1/users/ericmartins02"},
{nome:"EtnanSousa", pontuacao:0, perfil:"https://www.codewars.com/users/EtnanSousa", api_request: "https://www.codewars.com/api/v1/users/EtnanSousa"},
{nome:"Fabricio_SantosBR", pontuacao:0, perfil:"https://www.codewars.com/users/Fabricio_SantosBR", api_request: "https://www.codewars.com/api/v1/users/Fabricio_SantosBR"},
{nome:"GuilherminoLucas", pontuacao:0, perfil:"https://www.codewars.com/users/GuilherminoLucas", api_request: "https://www.codewars.com/api/v1/users/GuilherminoLucas"},
{nome:"gustavool1", pontuacao:0, perfil:"https://www.codewars.com/users/gustavool1", api_request: "https://www.codewars.com/api/v1/users/gustavool1"},
{nome:"IgorMGG", pontuacao:0, perfil:"https://www.codewars.com/users/IgorMGG", api_request: "https://www.codewars.com/api/v1/users/IgorMGG"},
{nome:"larissakoliveira", pontuacao:0, perfil:"https://www.codewars.com/users/larissakoliveira", api_request: "https://www.codewars.com/api/v1/users/larissakoliveira"}, 
{nome:"smillyxD", pontuacao:0, perfil:"https://www.codewars.com/users/smillyxD", api_request: "https://www.codewars.com/api/v1/users/smillyxD"},
{nome:"vinapro", pontuacao: 0, perfil:"https://www.codewars.com/users/vinapro", api_request: "https://www.codewars.com/api/v1/users/vinapro"},
{nome:"midrick", pontuacao: 0, perfil:"https://www.codewars.com/users/midrick", api_request: "https://www.codewars.com/api/v1/users/midrick"},
{nome:"Nafly09", pontuacao:0, perfil:"https://www.codewars.com/users/Nafly09", api_request: "https://www.codewars.com/api/v1/users/Nafly09"},
{nome:"marcelochaves92", pontuacao:0, perfil:"https://www.codewars.com/users/marcelochaves92", api_request: "https://www.codewars.com/api/v1/users/marcelochaves92"},
{nome:"Rafael", pontuacao:0, perfil:"https://www.codewars.com/users/rafa.coding.true", api_request: "https://www.codewars.com/api/v1/users/rafa.coding.true"}
]

// OBTER RANK ATUAL E ATUALIZAR O VALOR NO OBJETO

function httpGet(url){

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); 
    xmlHttp.send( null );
    
    let result = xmlHttp.responseText.split(',')[2];
    result = result.substr(result.indexOf(':')+1, result.length);

    return Number(result);
}

for(let item in nomesPont){
    console.log(nomesPont[item].nome, httpGet(nomesPont[item].api_request));
    nomesPont[item].pontuacao = httpGet(nomesPont[item].api_request);
}

// =================================================================

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
p.innerHTML='Atualizado por Api pelo Rafael Schug <i class="far fa-clock"></i>'
checkContent.appendChild(p)
document.body.appendChild(checkContent)
