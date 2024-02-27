import express from "express";
import { getAllInvoices, createInvoice } from "../controllers/invoice.controller.mjs";
const router=express.Router();
router.get('/invoices',getAllInvoices);
router.post('/invoices',createInvoice);
export default router;
