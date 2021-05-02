const url = "https:/api.mercadolibre.com/sites/MLM/search?q="
let textML = document.getElementById("MercadoLibre");
let contador = 0


function buscar(){
    let input = document.getElementById('search').value
    
    getProducto(input)
    if (contador != 0){
        location.reload()  
                      
    }
    contador ++    
    
    
    
}

/*async function getProduct (name){
    let productName = url + name
    let response = await fetch (productName)
    let legend = document.createElement('p')
    
    legend.textContent = `${json.title}`
    
    textML.appendChild(legend)
    
    
}

async function getProductoML (name){
    let response = await getProduct(name)
    console.log(response)

}
*/
//Prueba
function getProducto(name){
    let productName = url + name
    fetch(productName)
        .then (response => response.json())
        .then(json => {
            console.log(json)            
            
            for (let i=0;i<productName.length ;i++){
                const myDiv = document.createElement('div')                
                myDiv.className = 'div-mostrar'
                const icon = document.createElement('button')
                icon.className='fa fa-cart-plus'
                icon.setAttribute('aria-hidden',true)
                icon.setAttribute('id','icon')
                const myPara1 = document.createElement('p')
                myPara1.textContent= `${json.results[i].title}`
                const myPara2 = document.createElement('p')
                myPara2.textContent=`$ ${json.results[i].price}`                
                let imagen = document.createElement('img')
                imagen.setAttribute('src',json.results[i].thumbnail)
                imagen.className += "imagen"
                myDiv.appendChild(myPara1)
                myDiv.appendChild(myPara2)
                myDiv.appendChild(imagen)
                myDiv.appendChild(icon)
                textML.appendChild(myDiv)
 //               textML.appendChild(aceptar)
  //              textML.appendChild(eliminar)
                
                
            }
            
        }).catch(err=>{
            console.error("Error: ",err)
        })

}

//getProducto("computadora")


