import { invoiceSchema, Invoice } from "../models/invoice.model.mjs"
import { Product } from "../models/product.model.mjs"
async function insertInvoice(invoice){
    console.log(invoice)
    const createdInvoice = await Invoice.create(invoice,
        {include:[{
            model:Product,
            as: "product"
        }]})
    console.log('Created Invoice',createdInvoice)
}

async function selectAllInvoices(){
    const invoices = await Invoice.findAll({
        include:[{
            model:Product,
            as: "product"
        }]
    })
    return invoices
}

async function selectInvoicesById(id){
    const invoices = await Invoice.findAll({
        where:{
            id
        },include:[{
            model:Product,
            as: "product"
        }]
    })
    return invoices
}

export {
    insertInvoice,
    selectAllInvoices,
    selectInvoicesById,
}