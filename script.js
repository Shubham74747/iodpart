var product1Count = 1;
var product1Amount = 1500;

var product2Count = 1;
var product2Amount = 600;

var showAddressSelection = false;

document.getElementById("product1Count").innerHTML = product1Count;
document.getElementById("product2Count").innerHTML = product1Count;
updateTotalSum();

function incrementItem (item) {
    if (item == "item1") {
        product1Count = product1Count + 1;
        document.getElementById("product1Count").innerHTML = product1Count;
    } else {
        product2Count = product2Count + 1;
        document.getElementById("product2Count").innerHTML = product2Count;
    }
    updateTotalSum();
}

function decrementItem (item) {
    if (item == "item1") {
        product1Count = product1Count - 1;
        document.getElementById("product1Count").innerHTML = product1Count;
    } else {
        product2Count = product2Count - 1;
        document.getElementById("product2Count").innerHTML = product2Count;
    }
    updateTotalSum();
}

function updateTotalSum () {
    var sum = product1Count*product1Amount + product2Count*product2Amount
    document.getElementById("subtotal").innerHTML = sum;
}

function onCheckout () {
    var x = document.getElementById("address");
    var main = document.getElementById("main");
    if (x.style.display == "none" || x.style.display == "") {
        x.style.display = "block";
        main.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

function onAddressSelection () {
    var address = document.querySelector('input[name="address"]:checked').value;
    if (address) {
        var address = document.getElementById("address");
        var x = document.getElementById("creditCard");
        if (x.style.display == "none" || x.style.display == "") {
            x.style.display = "block";
            address.style.display = "none";
        } else {
            x.style.display = "none";
        }
    }
}

function onPayment () {
    var x = document.getElementById("thanks");
    var creditCard = document.getElementById("creditCard");
    if (x.style.display == "none" || x.style.display == "") {
        x.style.display = "block";
        creditCard.style.display = "none";
    } else {
        x.style.display = "none";
    }
}