class product{

    constructor(p_ID, p_name, price, quantity){
        this.p_ID = p_ID;
        this.p_name = p_name;
        this.price = price;
        this.quantity = quantity;

    }
    total_price = function(){
        return this.price * this.quantity;
    }
    
    update_quantity = function(new_quantity){
        this.quantity = new_quantity;
    }

    update_price = function(new_price){
        this.price = new_price;
    }

    product_info = function(){
        document.write("p_ID:", this.p_ID + "<br>");
        document.write("p_name:", this.p_name + "<br>");
        document.write("price:", this.price + "<br>");
        document.write("quantity:", this.quantity + "<br>");
        document.write("Total price:", this.total_price() + "<br>");
    }
}

let p1 = new product(100, "laptop", 50000, 2);
p1.product_info();
document.write("total:", p1.total_price());

p1.update_quantity(5);
p1.update_price(65000);
document.write("--------------After updating quantity:-------------" + "<br>");
p1.product_info();

