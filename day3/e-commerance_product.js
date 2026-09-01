class Product {

    constructor(product_ID, product_name, price, quantity) {
        this.product_ID = product_ID;
        this.product_name = product_name;
        this.price = price;
        this.quantity = quantity;
    }

    total_price = function() {
        return this.price * this.quantity;
    }

    update_quantity = function(new_quantity) {
        this.quantity = new_quantity;
    }

    product_info = function() {
        console.log("Product ID:", this.product_ID);
        console.log("Product Name:", this.product_name);
        console.log("Price:", this.price);
        console.log("Quantity:", this.quantity);
        console.log("Total Price:", this.total_price());
    }
}

let p1 = new Product(101, "Laptop", 50000, 2);

p1.product_info();

console.log("Total:", p1.total_price());

p1.update_quantity(5);

console.log("After updating quantity:");

p1.product_info();