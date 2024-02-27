import { invoiceSchema, Invoice } from "../models/invoice.model.mjs"

async function insertInvoice(invoice){
    const createdInvoice = await Invoice.create(invoice)
    console.log('Created Invoice',createdInvoice)
}

async function selectAllInvoices(){
    const invoices = await Invoice.findAll()
    console.log(invoices)
}

export {
    insertInvoice,
    selectAllInvoices,
}