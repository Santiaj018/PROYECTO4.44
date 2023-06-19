import ProductModel from './models/productModel.js';
import ProductView from './views/productView.js';

const ProductController = {
  fetchAndRenderProducts: async function () {
    try {
      const products = await ProductModel.fetchProducts();
      ProductView.renderProducts(products);
    } catch (error) {
      console.error(error);
    }
  }
};

export default ProductController;
