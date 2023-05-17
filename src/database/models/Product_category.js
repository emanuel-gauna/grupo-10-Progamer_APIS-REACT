module.exports = (sequelize, dataTypes) => {

    let alias = 'Product_category';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true

        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        code: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    }
    let config = {
        tableName: 'product_category',
        timestamps: false,
        
    }
    const Product_Category = sequelize.define(alias, cols, config);

    Product_Category.associate = (models)=>{
        Product_Category.hasMany(models.Product,{
            as: "products",
            foreignKey: "product_category_id",
        });
    }
    return Product_Category;
}