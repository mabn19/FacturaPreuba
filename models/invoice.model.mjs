import { Sequelize, DataTypes, Model } from 'sequelize';

const invoiceSchema = {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue:DataTypes.UUIDV4,
        primaryKey: true,
      },
    
      clientName: {
        type: DataTypes.STRING
    
      }


}

class Invoice extends Model{
    static associate(models){
        Invoice.hasMany(models.Product, {
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
            modelName:'Invoice',
            tableName: 'invoices',
        }
    }
}

export{
    invoiceSchema,
    Invoice,
}
