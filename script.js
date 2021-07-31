    
    function httpGetAsync(theUrl, obj){
    
        let xmlHttp = new XMLHttpRequest();
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
        let checkContent = document.createElement('section')
        let p = document.createElement("p")
        p.innerHTML='Valores atualizados em tempo real através da API do <em>Codewars</em> <i class="far fa-clock"></i>'
        checkContent.appendChild(p)
        document.body.appendChild(checkContent)

    }
    
    function starting(){
        let retrieving =document.querySelector('#retrieving')
        let pRetrieving = document.querySelector("#retrieving>p")
        let contRetrieving = 0
        setInterval(() => {
            contRetrieving++
            if(contRetrieving<=3){
                pRetrieving.innerHTML+='.'
            }
        }, 400)
        setTimeout(()=>{
            creatingTable();
           retrieving.style.display = 'none';
        }, 2000)
    }
    
    
    window.onload = starting()
