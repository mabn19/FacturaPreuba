import { Sequelize, DataTypes, Model } from 'sequelize';

const productSchema = {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue:DataTypes.UUIDV4,
        primaryKey: true,
      },
    
      productName: {
          type: DataTypes.STRING,
          allowNull: false,
        },

        productPrice: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
}

class Product extends Model{
    static associate(models){
        
            Product.belongsTo(models.Invoice, {
              foreignKey: {
                name: 'productId',
                allowNull: false
              },
              as: 'product'
            });
    }
    static config(sequelize){
        return {
            sequelize,
            modelName:'Product',
            tableName: 'products',
        }
    }
}

export{
    productSchema,
    Product,
}

