import i18n from "../../services/i18n.js";


class Order {
    constructor(total, newDate, number) {
        if(newDate == null) {
            this.orderDate = new Date(); //$NON-NLS-L$
        }else {
            this.orderDate = newDate;
        }
        if(number == null) {
            this.orderNumber = Math.floor(Math.random() * (99999999 - 10000000) + 10000);
        }
        else {
            this.orderNumber = number;
        }
        
        this.total = total;
        this.i18n = i18n;
    }

    getOrderDate() {
        let date = i18n.formatDate();
        return date;
    }


    //create a dummy "order status" string
    getOrderStatus() {
        //calculate diff
        let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        let now = new Date(); //$NON-NLS-L$
        var diffDays = Math.floor(Math.abs((this.orderDate.getTime() - now.getTime())/(oneDay))); //$NON-NLS-L$

        //let statusProcess = this.i18n.getString("Order", "statusProcess");

        if (diffDays < 2) {
            return i18n.getString("Order", "statusProcess"); // Change here
        } else if (diffDays < 4) {
            return i18n.getString("Order", "statusShipped"); // Change here
        } else {
            return i18n.getString("Order", "statusDelivered"); // Change here
        }
        /* if(diffDays < 2) {
            //return statusProcess;
            return "Processing";
        }
        if(diffDays < 4) {
            return "Shipped";
        }
        else{
            return "Delivered";
        } */
    }

}

export {Order};