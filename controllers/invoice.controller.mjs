import { insertInvoice, selectAllInvoices, selectInvoicesById} from "../services/invoice.service.mjs";

async function createInvoice(req,res,next){
    try{
        const{
            clientName,
            product,
        }=req.body
        await insertInvoice({clientName,product})
        res.status(201).json({
            message:'factura creadad con exito',
        })
    }catch(error){
        next(error)
    }
}

async function getAllInvoices(req,res,next){
    try{
        const invoices = await selectAllInvoices()
        res.status(201).json({
            invoices
        })
    }catch(error){
        next(error)
    }
}

async function getInvoiceById(req,res,next){
    try{
        const {id}=req.params
        console.log(id)
        const invoices = await selectInvoicesById(id)
        res.status(201).json({
            invoices
        })
    }catch(error){
        next(error)
    }
}

export {getAllInvoices, createInvoice, getInvoiceById}