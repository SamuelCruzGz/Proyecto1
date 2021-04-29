const url = "https:/api.mercadolibre.com/sites/MLM/search?q="
let textML = document.getElementById("MercadoLibre");
var button = document.getElementById("buttonSearch");

function buscar(){
    button.addEventListener("click", () => {
        const input = document.getElementById("search").value;        
            
    })
    
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
function getProducto(name){
    let productName = url + name
    fetch(productName)
        .then (response => response.json())
        .then(json => {
            console.log(json)
            let test = document.createElement('p')
            test.textContent = `${json.query}`
            console.log(test)            
            textML.appendChild(test)
        }).catch(err=>{
            console.error("Error: ",err)
        })

}
// u
getProducto(input)