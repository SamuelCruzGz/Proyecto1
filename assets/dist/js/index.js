const url = "https:/api.mercadolibre.com/sites/MLM/search?q=iphone"
let listP = document.getElementById("MercadoLibre");
let Product = document.getElementById("pagina")
contador = 0


function buscar(){
    let input = document.getElementById('search').value
    
    //getProducto(input)
    
    if (contador != 0){
        location.reload()  
                      
    }
    contador ++    
    
    
    
}
let contenido = []

var pageNumber = 1
var pageSize = 6

var contenidoHTML=""
var pagination    
async function total(){
  let res = await fetch(url)
  let data = await res.json()
  
  for (let i = 0; i < data.results.length ; i++){    
    contenido.push(data.results[i].price)    

    var pageCont = Math.ceil(contenido.length/pageSize)
    
    function paginate(array, page_size, page_number) {
      return array.slice((page_number - 1) * page_size, page_number * page_size)
    }
    function nextPage() {
      pageNumber++
      showContent(pagination)
    }
    function previousPage() {
      pageNumber--
      showContent(pagination)
    }
    function showContent(_contenido) {
      var pagination = paginate(contenido, pageSize, pageNumber)
      console.log("nextPage", pagination)
      contenidoHTML = "<ul>"
      pagination.forEach(element => {
        console.log(element)
        contenidoHTML+="<li>"+element+"</li>"
      });
      contenidoHTML+="</ul>"
      contenidoHTML+= pageNumber > 1 ? "<button onclick='previousPage()'>Anterior</button>":""
      contenidoHTML+= pageNumber < pageCont?("<button onclick='nextPage()'>Siguiente</button>"):""
      document.getElementById("MercadoLibre").innerHTML=""
      document.getElementById("MercadoLibre").innerHTML=contenidoHTML
    }
    showContent(contenido)
    
    
  
  }
  
}

    
    
  
    
total()


