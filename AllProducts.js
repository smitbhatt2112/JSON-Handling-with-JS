function AllProductsFetch(){
fetch('data.json').then((data)=>{
    return data.json();//converted to object
}).then((objectData)=>{
    let tableData="";
    objectData.forEach((values)=>{
        //use can use for each also here
       const Products=document.getElementById("card_container");
       Products.innerHTML+=`
       <div class="product-card"  onclick="PassId(${values.id})">
            <div class="d-flex justify-content-around">
              <div class="" style="width: 18rem">
                <img
                  class="card-img-top card_img"
                  src="${values.image}"
                  alt="Product image cap"
                />
                <div class="card-body">
                  <h5>ProductName:</h5>
                  <h6 id="Product-title">${values.name}</h6>
                  <hr/>
                  <h5>Product Price:</h5>
                  <h6>₹${values.price}</h6>
                 
                </div>
              </div>
            </div>
          </div>
       `
    });
    document.getElementById("table_body").innerHTML=tableData;
 })
}
function PassId(para){
   localStorage.setItem("ProductId",para);
  
    // Seting the new page's URL
    window.location.href = "Details.html";
}

