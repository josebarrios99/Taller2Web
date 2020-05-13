var buttons = document.querySelectorAll('.addProd');

var cart_button = document.querySelector('.fa-shopping-cart');

var cartList = [];

if(localStorage.getItem('cartList')){
    cartList = JSON.parse(localStorage.getItem('cartList'));
}

cart_button.innerText = cartList.length;

function renderCart() {
    var total = 0;
    var cartContainer = document.querySelector('.cart_list');
    cartContainer.innerHTML = "";
    cartList.forEach(function (obj, index) {
       var newItem = document.createElement('div');
       newItem.classList.add('cart__item');
       newItem.innerHTML = `
       <img src="${obj.img}"/>
       <h2>` + obj.name + `</h2>
       
       <small><h2>${obj.price}USD</h2></small>
       <button class="removeBtn"><h2>X</h2></button>
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
//cart_button.addEventListener('click', renderCart);
//renderCart();

buttons.forEach(function(elem){
    elem.addEventListener('click', function(){
        var name = elem.getAttribute('data-name');
        var price = elem.getAttribute('data-price');
        var id = elem.getAttribute('data-id');
        var img = elem.getAttribute('data-img');

        cartList.push({
            name: name,
            price: price,
            id: id,
            img: img,
        });
        cart_button.innerText = cartList.length;
        localStorage.setItem('cartList', JSON.stringify(cartList));
        
    });
});
