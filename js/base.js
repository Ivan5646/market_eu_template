$(document).ready(function () {
    /*  OPEN FORM */
    $('#buyBtnRUR').on('click', function () {
        $('#paymentMethod').removeClass('show-modal').addClass('buy-payment__wrap--hide');
        $('#paymentFormRUR').addClass('show-modal');
    });
    $('#buyBtnNTZ').on('click', function () {
        $('#paymentMethod').removeClass('show-modal').addClass('buy-payment__wrap--hide');
        $('#paymentFormNTZ').addClass('show-modal');
    });

    /* OPEN METHOD */
    $('#paymentMethodLink').on('click', function () {
        $('#paymentMethod').removeClass('buy-payment__wrap--hide').addClass('show-modal');
        $('#paymentFormRUR').removeClass('show-modal');
    });
    $('#paymentMethodLink2').on('click', function () {
        $('#paymentMethod').removeClass('buy-payment__wrap--hide').addClass('show-modal');
        $('#paymentFormNTZ').removeClass('show-modal');
    });

    /* ADD ITEM TO CART */
})
function count_total() {
    var els = document.getElementsByClassName("items_quantity");
    var total=0
	Array.from(els).forEach((el) => {
        total=total+parseInt(el.value)*parseInt(el.dataset.price)

	});
    var taxes = document.getElementById("totalTax");
    var tax_percent=parseInt(taxes.dataset.tax);
    var delivery = parseFloat(document.getElementById("totalDelivery").textContent);
    $('#itemsPrice').text(total);
    total=total+delivery;
    $('#totalPrice').text(total);
    // $('#totalDelivery').text(delivery);
    $('#totalTax').text(Math.round((total/(tax_percent+100)*tax_percent*100))/100);

    // console.log(delivery)
}

function goToCart() {
    console.log("goToCart fired");
    $('html, body').animate({
        scrollTop: $(".buy-block").offset().top
    }, 1000);
    return false;
}

function addtocart(item_id, item_name) {
    var currentVal = parseInt($('#'+item_id).val());
    $('#'+item_id).val(Number(currentVal + 1));
    $('#addToCardBtn_'+item_id).removeClass('order-info__btn--shown');
    $('#addToCardBtn_'+item_id).addClass('order-info__btn--hidden');
    $('#goToCardBtn_'+item_id).addClass('order-info__btn--shown');
    $('#goToCardBtn_'+item_id).removeClass('order-info__btn--hidden');

    // скрыть пустую корзину и показать заполенную
    $('#emptyCartBlock').addClass('buy-product__no-order-block--hide');
    $('#cartBlock').removeClass('cart-block--hidden');

    $('#cartItem_'+item_id).remove();
    $('#cartList').append("<li class='cart-block__item' id='cartItem_"+item_id+"'><p class='cart-block__text'><span class='cart-block__name'>"+item_name+"</span> x <span id='itemQauntity_"+item_id+"'> </span></p> <div class='cart-block__del-wrap'> <img class='cart-block__delete' src='img/delete.png' id='deleteBtn_"+item_id+"' alt='удалить'> <span class='cart-block__tip'>delete</span></div></li>")

    // задать число штук товара в корзине
    $('#itemQauntity_'+item_id).text(Number(currentVal + 1));
    count_delivery();

    /* REMOVE ITEM FROM CART */
    $('#deleteBtn_'+item_id).on('click', function () {
        $('#addToCardBtn_'+item_id).addClass('order-info__btn--shown');
        $('#addToCardBtn_'+item_id).removeClass('order-info__btn--hidden');
        $('#goToCardBtn_'+item_id).removeClass('order-info__btn--shown');
        $('#goToCardBtn_'+item_id).addClass('order-info__btn--hidden');
        $('#'+item_id).val(0);
        // удалить элементы из списка
        $('#cartItem_'+item_id).remove();
        count_delivery();
        // скрыть корзину и показать пустой блок
        if ($('#cartList').children().length == 0) {
            $('#emptyCartBlock').removeClass('buy-product__no-order-block--hide');
            $('#cartBlock').addClass('cart-block--hidden');
        }
    })
}

function removefromcart(item_id, item_name) {
    var currentVal = parseInt($('#'+item_id).val());
    if (currentVal > 1) {
        $('#'+item_id).val(Number(currentVal - 1));
        $('#cartItem_'+item_id).remove();
        $('#cartList').append("<li class='cart-block__item' id='cartItem_"+item_id+"'><p class='cart-block__text'><span class='cart-block__name'>"+item_name+"</span> x <span id='itemQauntity_"+item_id+"'> </span></p> <div class='cart-block__del-wrap'> <img class='cart-block__delete' src='img/delete.png' id='deleteBtn_"+item_id+"' alt='удалить'> <span class='cart-block__tip'>delete</span></div></li>")
    
        // задать число штук товара в корзине
        $('#itemQauntity_'+item_id).text(Number(currentVal - 1));
        count_delivery();
        $('#deleteBtn_'+item_id).on('click', function () {
            $('#addToCardBtn_'+item_id).addClass('order-info__btn--shown');
            $('#addToCardBtn_'+item_id).removeClass('order-info__btn--hidden');
            $('#goToCardBtn_'+item_id).removeClass('order-info__btn--shown');
            $('#goToCardBtn_'+item_id).addClass('order-info__btn--hidden');
            $('#'+item_id).val(0);
            // удалить элементы из списка
            $('#cartItem_'+item_id).remove();
            count_delivery();
            // скрыть корзину и показать пустой блок
            if ($('#cartList').children().length == 0) {
                $('#emptyCartBlock').removeClass('buy-product__no-order-block--hide');
                $('#cartBlock').addClass('cart-block--hidden');
            }
        })        
    }
    else {
        $('#addToCardBtn_'+item_id).addClass('order-info__btn--shown');
        $('#addToCardBtn_'+item_id).removeClass('order-info__btn--hidden');
        $('#goToCardBtn_'+item_id).removeClass('order-info__btn--shown');
        $('#goToCardBtn_'+item_id).addClass('order-info__btn--hidden');
        $('#'+item_id).val(0);
        // удалить элементы из списка
        $('#cartItem_'+item_id).remove();
        count_delivery();
        // скрыть корзину и показать пустой блок
        if ($('#cartList').children().length == 0) {
            $('#emptyCartBlock').removeClass('buy-product__no-order-block--hide');
            $('#cartBlock').addClass('cart-block--hidden');
        }        
    }

}