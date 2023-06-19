const ProductModel = {
    fetchProducts: function () {
      return fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .catch(error => {
          console.error(error);
          return [];
        });
    }
  };
  
  export default ProductModel;
  