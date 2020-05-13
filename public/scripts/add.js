
var cartList = [];

var cart_button = document.querySelector('.fa-shopping-cart');

var buttons = document.querySelectorAll('.addProd');
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
