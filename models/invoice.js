const mongoose = require("mongoose");
const { Schema } = mongoose;

const InvoiceSchema = new Schema({
  invoiceName: {
    type: String,
    required: true,
  },
  hoursOfWork: {
    type: String,
    required: true,
  },
  materialsUsed: {
    type: Object,
    required: true,
  },
  totalWorkExpenses: {
    type: String,
    required: true,
  },
  labour: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
});

const Invoice = mongoose.model("invoice", InvoiceSchema);
module.exports = Invoice;
