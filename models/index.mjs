import { invoiceSchema, Invoice } from "./invoice.model.mjs"
import { productSchema, Product } from "./product.model.mjs"

export default (sequelize)=>{
    Invoice.init(invoiceSchema, Invoice.config(sequelize))
    Product.init(productSchema, Product.config(sequelize))
    Invoice.associate(sequelize.models)
    Product.associate(sequelize.models)
}