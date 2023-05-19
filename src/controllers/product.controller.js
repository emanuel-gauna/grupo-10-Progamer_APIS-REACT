const { getProducts, getProductById } = require("../services/product.service");

module.exports = {
  getProducts: async (req, res) => {
    try {
      const products = await getProducts();
      
      const productsResponse = products.map(
        ({ id, name, description, images, product_category }) => {
          //obtengo solo el nombre de las img
          const imagesName = images.map(image => image.name)
          //mando los datos
          return {
            id, 
            name,
            description,
            images: imagesName,
            category: product_category.name,
            detail: `/api/products/${id}`
          };
        }
      );
      
      const getProductCountByCategory = (products) => {
        const categoryCount = {};

        for (const product of products) {
          const categoryName = product.product_category.name;

          if(categoryCount.hasOwnProperty(categoryName)){
            categoryCount[categoryName]++;
          }else{
            categoryCount[categoryName] = 1;
          }
        }

        return categoryCount;
      }

      const RESPONSE = {
        count: products.length,
        countByCategory: getProductCountByCategory(products),
        products: productsResponse,
      }

      return res.status(200).json(RESPONSE);
    } catch (error) {
      res.satus(500).json({Error:error});
    }
  },
  getProductById: async (req, res) => {
    const PRODUCT_ID = req.params.id;
    const product = await getProductById(PRODUCT_ID);

    return res.status(200).json(product);
  },
  createProduct: async (req, res) => {},
  updateProduct: async (req, res) => {},
  deleteProduct: async (req, res) => {},
};
