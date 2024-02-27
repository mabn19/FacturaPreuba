import express from "express";
import { getAllInvoices, createInvoice, getInvoiceById } from "../controllers/invoice.controller.mjs";
const router=express.Router();
router.get('/invoices',getAllInvoices);
router.get('/invoices/:id',getInvoiceById);
router.post('/invoices',createInvoice);
export default router;
