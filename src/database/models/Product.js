module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
    let cols = {
        id : {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        brand: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        lastname: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(11,2).UNSIGNED,
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            defaultValue: null,
        },
        stock: {
            type: dataTypes.INTEGER(200).UNSIGNED,
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT,
            defaultValue: false
        },
        cpu: {
            type: dataTypes.STRING(100),
            defaultValue: false
        },
        graficCard: {
            type: dataTypes.STRING(100),
            defaultValue: false
        },
        so: {
            type: dataTypes.STRING(100),
            defaultValue: false
        },
        ram: {
            type: dataTypes.STRING(100),
            defaultValue: false
        },
        capacity: {
            type: dataTypes.STRING(100),
            defaultValue: false
        },
        puertos: {
            type: dataTypes.STRING(100),
            defaultValue: false
        },
        hdmi: {
            type: dataTypes.STRING(100),
            defaultValue: false
        },
        ethernet: {
            type: dataTypes.STRING(100),
            defaultValue: false
        },
        usb: {
            type: dataTypes.STRING(100),
            defaultValue: false
        },
        wifi: {
            type: dataTypes.STRING(100),
            defaultValue: false
        },
        webCam: {
            type: dataTypes.STRING(100),
            defaultValue: false
        },
        bluetooth: {
            type: dataTypes.STRING(100),
            defaultValue: false
        },
        screenSize: {
            type: dataTypes.STRING(100),
            defaultValue: false
        },
        display: {
            type: dataTypes.STRING(100),
            defaultValue: false
        },
        resolution: {
            type: dataTypes.STRING(100),
            defaultValue: false
        },
        conection: {
            type: dataTypes.STRING(100),
            defaultValue: false
        },
        high: {
            type: dataTypes.STRING(100),
            defaultValue: false
        },
        weight: {
            type: dataTypes.STRING(100),
            defaultValue: false
        },
        width: {
            type: dataTypes.STRING(100),
            defaultValue: false
        },
        depth: {
            type: dataTypes.STRING(100),
            defaultValue: false
        },
        product_category_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
       
    }

    let config = {
        tableName: "products",
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models) => {
        Product.belongsTo(models.Product_category, {
            as: "product_category",
            foreignKey: "product_category_id",
        })


    Product.hasMany(models.Image, {
            as: "images",
            foreignKey: "products_id",
        })
        
    }
    
   

    return Product; 
    }
