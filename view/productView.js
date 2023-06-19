const ProductView = {
    renderProducts: function (products) {
      const productListElement = document.getElementById("productList");
      productListElement.innerHTML = "";
  
      products.forEach(product => {
        const liElement = document.createElement("li");
        liElement.classList.add("list-group-item");
        liElement.textContent = product.title;
        productListElement.appendChild(liElement);
      });
    }
  };
  
  export default ProductView;
  