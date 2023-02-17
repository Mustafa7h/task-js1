var ProductName = document.getElementById("ProductNameInp")
var ProductPrice = document.getElementById("ProductPriceInp")
var ProductCategory = document.getElementById("ProductCategoryInp")
var ProductDesc = document.getElementById("ProductDescInp")

var products = [];

function addProduct() {
    var product = {
        Name: ProductName.value,
        Price: ProductPrice.value,
        Category: ProductCategory.value,
        Desc: ProductDesc.value
    }
    products.push(product);
    displayProducts();
    ClearForm();
}


function displayProducts() {
    var cartona = ``
    for (var i = 0; i < products.length; i++) {
        cartona += `  <tr id="ttt">
        <td>${i + 1}</td>
        <td> ${products[i].Name}</td>
        <td> ${products[i].Price}</td>
        <td> ${products[i].Category}</td>
        <td> ${products[i].Desc}</td>
        <td> <div class="form-check form-switch">
        <input id="acb" onclick=" line(${i})" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
        </div></td>
        <td> <button onclick=" deleteProduct(${i})" class="btn btn-outline-danger btn-sm">Delete</button></td>
    </tr>`
    }
    document.getElementById("tableBody").innerHTML = cartona
}


function ClearForm() {
    ProductName.value = ""
    ProductPrice.value = ""
    ProductCategory.value = ""
    ProductDesc.value = ""
}

function deleteProduct(index) {
    products.splice(index, 1);
    displayProducts();
}

function line(index) {
    var cb = document.getElementById("acb")
    var textW = document.getElementById("ttt")
    if (cb.checked == true) {
        textW.style.textDecoration = "line-through"
    } else {
        textW.display = block;
    }

}


