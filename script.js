
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
    {nome:"RafaelSchug", pontuacao:0, perfil:"https://www.codewars.com/users/rafa.coding.true", api_request: "https://www.codewars.com/api/v1/users/rafa.coding.true"}
    ]
    
    // OBTER RANK ATUAL E ATUALIZAR O VALOR NO OBJETO
    
    // Versão async
    function httpGetAsync(theUrl, obj){
    
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                let result = xmlHttp.responseText.split(',')[2];
                result = result.substr(result.indexOf(":")+1, result.length);
                obj.pontuacao = Number(result);
            }
                
        }
        xmlHttp.open("GET", theUrl, true); // true for asynchronous 
        xmlHttp.send(null);
    }
    
    for(let item in nomesPont){
        httpGetAsync(nomesPont[item].api_request, nomesPont[item]) 
    }
    
    // =================================================================
    
    
    window.onload = setTimeout(()=>{
        creatingTable();
        document.querySelector('#retrieving').style.display = 'none';
    }, 2000)
    
    function creatingTable(){
    
        nomesPont.sort(function(a,b){
            return b.pontuacao - a.pontuacao
        })
    
        let main = document.createElement("main")
        document.body.append(main)
        let tableRanking = document.createElement("table")
        let tableHeader = document.createElement("thead")
        let tableBody = document.createElement("tbody")
        tableHeader.innerHTML = '<th>Colocação</th><th>Nickname</th><th>Pontuação</th>'
        tableRanking.append(tableHeader)
        tableRanking.append(tableBody)
        main.append(tableRanking)
        for(let i=0;i<nomesPont.length;i++){
            let celula = document.createElement("tr")
            celula.innerHTML = `<td>${i+1}º </td><td><a href='${nomesPont[i].perfil}' target=_blank>${nomesPont[i].nome}</a></td><td>${nomesPont[i].pontuacao}</td>`
            celula.classList.add(`celula${i+1}`)
            tableBody.appendChild(celula)
            
        } 

        let p = document.createElement("p")
        p.innerHTML='Valores atualizados em tempo real através da API do <em>Codewars</em> <i class="far fa-clock"></i>'
        checkContent.appendChild(p)
        document.body.appendChild(checkContent)

    }
    let checkContent = document.createElement('section')


