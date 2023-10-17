function fetchProductById(productId) {
    console.log(productId);
    // Make a request to the JSON file
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            // Find the product with the matching ID
            const product = data.find((item) => item.id === productId);
            const productDetails = document.getElementById("proddes");
            const prodimage = document.getElementById("prodimage");
            if (product) {
                productDetails.innerHTML = `
                <h2>${product.name}</h2>
                <h3>Price: ₹${product.price}</h3>
                <h3>Description:</h3>
                <p>${product.description}</p>
                <button id="Checkbtn" class="btn btn-danger" onclick="Back()">Back</button>
                `;
                prodimage.innerHTML = `
                <img id="prodimagedetailsimg" src="${product.image}" alt="${product.name}">
                `;
            } else {
                console.log("Product not found");
            }
        })
        .catch((error) => {
            console.error("Error fetching or processing data:", error);
        });
}
function Back() {
    window.location.href = "index.html";
  }

const productIdFromLocalStorage = localStorage.getItem("ProductId");
fetchProductById(parseInt(productIdFromLocalStorage));


 