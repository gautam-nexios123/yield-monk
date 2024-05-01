"use client"
import React from 'react';
import CustomeTable from '../CustomeTable';

const Transaction = () => {

    const tableData = [
        { "id": 1, "date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "c" },
        { "id": 2, "date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "a" },
        { "id": 3, "date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "d" },
        { "id": 4, "date": '2008/11/28', "transactionId": "gm_12", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "b" },
        { "id": 5, "date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "e" },
        { "id": 6, "date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "Finalised" },
        { "id": 7, "date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "Finalised" },
        { "id": 8, "date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "Finalised" },
        { "id": 9, "date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "Finalised" },
        { "id": 10, "date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "Finalised" },
        { "id": 11, "date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "Finalised" },
        { "id": 12, "date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "Finalised" },
        { "id": 13, "date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "Finalised" },
        { "id": 14, "date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "Finalised" },
        { "id": 15, "date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "Finalised" },
        { "id": 16, "date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "Finalised" },
        { "id": 17, "date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "Rejected" }
    ];

    return (
        <div>
            <CustomeTable tableData={tableData} serchFilterKey="transactionId" />
        </div>
    )
}

export default Transaction
