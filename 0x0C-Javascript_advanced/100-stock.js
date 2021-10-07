var stock = {
    mackbook: 2,
    iphone: 4
};

function processPayment(itemName) {
    console.log(`Payment is being processed for ${itemName.toLowerCase()}`);
}

function processError(itemName) {
    console.log(`No more ${itemName.toLowerCase()} in stock. Payment is not being processed.`);
}

function processOrder(itemName, callbackPayment, callbackError) {
    console.log(`Verifying the stock of ${itemName.toLowerCase()}`)

    if (itemName in stock) {
        if (stock[itemName] > 0) {
            processPayment(itemName);
        } else {
            processError(itemName);
        }
    }
    document.addEventListener("DOMContentLoaded", function(event){
        let name = prompt('Please enter the item you would like to purchase (Macbook, Iphone)');
        processOrder(name, processPayment, processError);
    })

}