const url = "https:/api.mercadolibre.com/sites/MLM/search?q="
let textML = document.getElementById("MercadoLibre");
let contador = 0


function buscar(){
    let input = document.getElementById('search').value
    
    getProducto(input)
    total()
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
            console.log(productName.length);
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
                myPara2.setAttribute('class','precio')             
                let imagen = document.createElement('img')
                imagen.setAttribute('src',json.results[i].thumbnail)
                imagen.className += "imagen"
                myDiv.appendChild(myPara1)
                myDiv.appendChild(myPara2)
                myDiv.appendChild(imagen)
                myDiv.appendChild(icon)
                textML.appendChild(myDiv)
 //               textML.appendChild(aceptar)
  //              textML.appendChild(eliminar      
            }
            
        }).catch(err=>{
            console.error("Error: ",err)
            
        })

}

function total (){
    let newMyPara2 = document.getElementsByClassName('precio')
    console.log(newMyPara2[0].value);
       
    /*for (var i = 0; i > newMyPara2.length;i++){
        console.log (newMyPara2[i])
    }*/
    
}

//getProducto("computadora")


/**
 * 
Levantar un servidor de Express
Crear la siguiente ruta, url: '/', metodo: get
Esta ruta tiene que retornar el siguiente objeto en formato JSON:
{
  status: 200,
  message: 'Este request/response está OK'
}
Crear el siguiente middleware
var requestTime = function (req, res, next) {
  const mensaje = `Request a ${req.baseUrl} ${Date.now()}`
  console.log(mensaje)
  next();
};
Configurar el middleware
app.use(requestTime)
Si todo esta bien en la consola del server donde levantaste express deberías 
ver un mensaje similar al siguiente:
Request realizado 1506002876731
 */