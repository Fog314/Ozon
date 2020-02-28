(function eshop() {
    $('document').ready(() => {
        loadGoods();
        loadcarts();
    });

    function loadGoods() { ///товары из json
        $.getJSON('../js/goods.json', (data) => {
            let out = '';
            for (let key in data) {
                out += '<div class="singleGood">';
                out += '<img src=' + data[key]["image"] + ' width: "200px" height: "200px">';
                out += '</img>';
                out += '<div class="info-block">';
                if (data[key]["discount"] != '0') {
                    out += '<div class=badge>';
                    out += '<div class=badgeText>';
                    out += '-' + data[key]["discount"] + '%';
                    out += '</div>';
                    out += '</div>';
                    out += '<div class="price-block">';
                    out += '<div class="currentPrice" style="display:inline-block; color: #F91155;">';
                    out += parseFloat(data[key]["price"]) - parseFloat(data[key]["price"]) / 100 * data[key]["discount"] + '₽';
                    out += '</div>';
                    out += '<div class="oldPrice" style="display:inline-block; margin-left: 5px; text-decoration: line-through; text-decoration-color: #F91155">';
                    out += data[key]["price"] + ' ₽';
                    out += '</div>';
                    out += '</div>';

                } else {
                    out += '<div class="price-block">';
                    out += '<div class="currentPrice">';
                    out += data[key]["price"] + ' ₽';
                    out += '</div>';
                    out += '</div>';
                }
                out += '<div class="name-block">';
                out += data[key]["name"];
                out += '</div>';
                out += '<div class="stars">';
                out += '<img src=../../pics/starFull.png>';
                out += '</img>';
                out += '<img src=../../pics/starFull.png>';
                out += '</img>';
                out += '<img src=../../pics/starFull.png>';
                out += '</img>';
                out += '<img src=../../pics/starFull.png>';
                out += '</img>';
                out += '<img src=../../pics/star.png>';
                out += '</img>';
                out += ' 123К отзывов'
                out += '</div>';
                out += '<div class="buttonContainer">';
                out += '<button id=' + data[key]["article"] + '>В корзину</button>'
                out += '</div>';
                out += '</div>';
                out += '</div>';
            }
            localStorage.setItem('data', JSON.stringify(data));
            console.log(localStorage.getItem('data'));
            $('.main').html(out);
            script();
        })
    }

}())

function loadcarts() {
    console.log('Eto function goods');
    let out = '';
    let summa = 0;
    let discount = 0;
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (Number(key) > 0) {
            document.querySelector(".counter").style.display = 'initial';
            let data = JSON.parse(localStorage.getItem(key));
            console.log(data.price);
            out += '<div class = carts>';
            out += '<div class = cartsInfo>';
            out += '<input type="checkbox" id=' + data.article + ' checked="checked">';
            out += '<div class = "image-container" style="background: url(' + data.image + '); background-size: contain; background-repeat: no-repeat;">';
            out += '</div>';
            out += '<label class="name-container" for ="' + data.article + '">';
            out += data.name;
            out += '</label>';
            out += '</div>';
            out += '<div class="cartsPrice">';
            summa = summa + parseFloat(data.price);
            if (data.discount != '0') {
                discount = discount + parseFloat(data.price) / 100 * data.discount;
                out += '<div class="currentPrice" style="display:inline-block; color: #F91155;">';
                out += parseFloat(data.price) - parseFloat(data.price) / 100 * data.discount + ' ₽';
                out += '</div><br>';
                out += '<div class="oldPrice" style="display:inline-block; margin-left: 5px; text-decoration: line-through; text-decoration-color: #F91155; font-size: 12px">';
                out += data.price + ' ₽';
                out += '</div>';
                out += '</div>';
            } else {
                out += data.price + ' ₽';
            }
            out += '</div>';
            out += '</div>';
        }
    }
    out += '<div class="finalOrder">';
    out += '<div class="orderTitle">';
    out += 'Ваш заказ';
    out += '</div>';
    out += '<div class="orderPrice">';
    out += '<div class="goods">';
    out += '</div>';
    out += '<div class="summa">';
    out += summa + ' ₽';
    out += '</div>';
    out += '</div>';
    out += '<div class="orderDiscount">';
    out += '<div class="discount">';
    out += 'Скидка'
    out += '</div>';
    out += '<div class="discountSum">';
    out += '- ' + discount + ' ₽';
    out += '</div>';
    out += '</div>';
    out += '<hr>';
    out += '<div class="generalSum">';
    out += '<div class="generalSum-text">';
    out += 'Общая стоимость'
    out += '</div>';
    out += '<div class="generalSum-summa">';
    out += summa - discount + ' ₽';
    out += '</div>';
    out += '</div>';
    out += '</div>';
    $('.cartsContainer').html(out);

    if (document.querySelector('.carts') == null) {
        // $('.header .title').html('<div>Корзина пуста</div>');
        $('.objects').hide();
        $('.header .title').css('width', '500px');
        $('.cartSelect').hide();
        $('.finalOrder').html('<div class="orderTitle" style="text-align: center; position: initial; padding-top: 50px">Вы не добавили в корзину ни один товар. Воспользуйтесь каталогом, чтобы найти всё что нужно.</div><a href="/src/html/index.html"><input type="submit" value="Начать покупки" class="catalogButton"></input></a>');
        $('.orderTitle').css({
            'width': '100%',
            'margin-top': '50px'
        });
    }

    check();

}

function check() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    console.log(checkboxes);
    for (let checkbox of checkboxes) {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                checkbox.setAttribute('checked', 'checked');
            } else {
                checkbox.removeAttribute("checked");
            }
        });
    }
};

// document.querySelector('#checkAll').addEventListener('change', function () {
//     let checkboxes = document.querySelectorAll('input[type="checkbox"]');
//     if (this.checked) {
//         for (let checkbox of checkboxes) {
//             checkbox.setAttribute('checked', 'checked');
//         }
//     } else {
//         for (let checkbox of checkboxes) {
//             checkbox.removeAttribute("checked");
//         }
//     }
// });

// document.querySelector('.delete').addEventListener('click', function () {
//     let checkboxes = document.querySelectorAll('input[type="checkbox"]');
//     console.log(checkboxes);
//     for (let checkbox of checkboxes) {
//         if (checkbox.hasAttribute('checked')) {
//             console.log(checkbox);
//             console.log('hello');
//             localStorage.removeItem(checkbox.getAttribute('id'));
//         }
//     }
// });