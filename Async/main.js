

const productDetails  = async () => {
    const url = `https://fakestoreapi.com/products`;


    try {
        const response  =  await  fetch(url);
         const data = await response.json();

         const itemstoBediplayed  = data.slice(0,4)

          if(data.length > 0) {

            const pr = itemstoBediplayed;
            const productHtml = pr.map( item => {
                return  `<div class="product">
                  <h1>${item.title}</h1>
                  <img src=${item.image} />
            
            
            </div>`

            }).join('')
            document.getElementById('pr').innerHTML = productHtml
        } else {
            document.getElementById('pr').innerHTML = " error  "

        }
            
            
         
          
         

       
         
    }
    catch {
            document.getElementById('pr').innerHTML ="ERROR while  fecthcing data "
    }
}

productDetails();