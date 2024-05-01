"use client"
import React from 'react';
import CustomeTable from '../CustomeTable';

const Transaction = () => {

    const tableData = [
        { "Date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "c" },
        { "Date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "a" },
        { "Date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "d" },
        { "Date": '2008/11/28', "transactionId": "gm_12", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "b" },
        { "Date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "e" },
        { "Date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "Finalised" },
        { "Date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "Finalised" },
        { "Date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "Finalised" },
        { "Date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "Finalised" },
        { "Date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "Finalised" },
        { "Date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "Finalised" },
        { "Date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "Finalised" },
        { "Date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "Finalised" },
        { "Date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "Finalised" },
        { "Date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "Finalised" },
        { "Date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "Finalised" },
        { "Date": '2008/11/28', "transactionId": "ym_123", "Amount": 159, "PaymentMethod": "Wire Transfer", "Status": "Rejected" }
    ];

    return (
        <div>
            <CustomeTable tableData={tableData} serchFilterKey="transactionId" totalRowShow={true} pagginationShow={true} invoiceShow={true} />
        </div>
    )
}

export default Transaction
