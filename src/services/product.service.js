const { Product } = require("../database/models");

const getProducts = async () => {
  try {
    const products = await Product.findAll({
      include: [
        { association: "images" },
        { association: "product_category"},
      ],
    });

    return products;
  } catch (error) {
    console.error("Error while fetching products: ", error);
    throw new Error("Error while fetching products");
  }
};

const getProductById = async (productId) => {
  try {
    const product = await Product.findByPk(productId, {
      include: [
        { association: "product_category" },
      ],
    });

    return product
  } catch (error) {
    console.error("Error while fetching product: ", error);
    throw new Error("Error while fetching product");
  }
};

const getProductByIdWithImages = async (productId) => {
  try {
    const product = await Product.findByPk(productId, {
      include: [
        { association: "images" },
      ],
    });

    return product
  } catch (error) {
    console.error("Error while fetching product: ", error);
    throw new Error("Error while fetching product");
  }
};

module.exports = {
    getProducts,
    getProductById,
    getProductByIdWithImages
}
