class bankACCOUNT{
    constructor(account_number, account_name, account_balance){
        this.account_number = account_number;
        this.account_name = account_name;
        this.account_balance = account_balance;
    }

    account_show = function(){
        document.write("Account Number: " ,this.account_number + "<br>");
        document.write("Account Name: " ,this.account_name + "<br>");
        document.write("Current Account Balance: " ,this.account_balance + "<br>"+"<br>");
    }

    account_deposit = function(amount){
        this.account_balance += amount;
        document.write("amount deposited: " + amount + "<br>");
        
    }

    account_withdraw = function(amount){
        if(this.account_balance >= amount){
            this.account_balance -= amount;
            document.write("Amount withdrawn successfully.<br>");
            document.write("Current Account Balance: " + this.account_balance + "<br>" + "<br>");
        } else {
            document.write("Insufficient balance.<br>");
        }
    }
}

let account1 = new bankACCOUNT(200675, "LAKSHYA PANDEY", 50000);
account1.account_show();


document.write("----------AFTER DEPOSITING AMOUNT---------<br>");
account1.account_deposit(5000);
account1.account_show();

document.write("----------AFTER WITHDRAWING AMOUNT---------<br>");
account1.account_withdraw(80000);