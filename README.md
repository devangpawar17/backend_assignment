# backend_assignment
wrytin backend assignment

**clone repo and npm install to use below endpoints**


**API documentation**

**endpoint for adding invoice -**
localhost:5000/new_invoice

body -{
    "invoice_name":"builders invoice 1",
    "hours_of_work":"6 hrs",
    "materials_used":{
        "tiles":"303",
        "cement":"19 kg"
    },
    "total_work_expenses":"Rs. 22000",
    "labour":"21 builders",
    "notes":"pay via check",
    "status":"outstanding",
    "due_date":"2022-01-29T14:28:54.788Z"
}


**endpoint for updating invoice status- **
localhost:5000/update_status

body-{
    "id":"61f12bf5f33aa4f09ec93d6d",
    "status":"late"
}


**endpoint for getting invoice by id -**
localhost:5000/get_invoice_byId

body-{
    "id":"61f12bf5f33aa4f09ec93d6d"
}
