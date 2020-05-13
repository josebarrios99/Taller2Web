

var cart_button = document.querySelector('.fa-shopping-cart');

var cartList = [];

if(localStorage.getItem('cartList')){
    cartList = JSON.parse(localStorage.getItem('cartList'));
}

cart_button.innerText = cartList.length;

function renderCart() {
    var total = 0;
    var cartContainer = document.querySelector('.cart_list');
    console.log(cartContainer);
    cartContainer.innerHTML = "";
    cartList.forEach(function (obj, index) {
       var newItem = document.createElement('div');
       newItem.classList.add('cart__item');
       newItem.innerHTML = `<div class="cart_item">
       <img src="${obj.img}" class="item_img" width = "154px"
       height = "218px" />
       <div class = "cart_item2">

       <h2>` + obj.name + `</h2>
       
       <small><h2>${obj.price}USD</h2></small>
       <button class="removeBtn"><h2>Remove</h2></button>
       </div>
       </div>
       `;
       var btn = newItem.querySelector('.removeBtn');
       btn.addEventListener('click', function () {
           newItem.remove();
           cartList.splice(index, 1);
           cart_button.innerText = cartList.length;
           localStorage.setItem('cartList', JSON.stringify(cartList));
           renderCart();
        });
        
       cartContainer.appendChild(newItem);
       total += parseInt(obj.price);
    });
    var totalElem = document.querySelector('.cart_total');
    totalElem.innerText = total;
}
renderCart();
cart_button.addEventListener('click', renderCart);


