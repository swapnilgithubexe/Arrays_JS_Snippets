//complete the calculatePrice function
const goods = {
    apple: { price: 150, quantity: 2 },
    banana: { price: 75, quantity: 3 },
    orange: { price: 125, quantity: 1 }
    };    
    function calculatePrice(goods){
        //Implement your function here
        let totalBill = 0;
        for (key in goods){
            let item = goods[key];
            let itemPrice = item['price'];
            let itemQuantity = item['quantity'];
            let itemTotal = itemPrice * itemQuantity;
            totalBill = totalBill + itemTotal;
        }
        return totalBill;
}
console.log(calculatePrice(goods));
    //output : 650