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
                    out += parseFloat(((data[key]["price"]) - (data[key]["price"]) / 100 * data[key]["discount"]).toFixed(2)).toLocaleString('ru-RU') + '₽';
                    out += '</div>';
                    out += '<div class="oldPrice" style="display:inline-block; margin-left: 5px; text-decoration: line-through; text-decoration-color: #F91155">';
                    out += parseFloat((parseFloat(data[key]["price"])).toFixed(2)).toLocaleString('ru-RU') + ' ₽';
                    out += '</div>';
                    out += '</div>';

                } else {
                    out += '<div class="price-block">';
                    out += '<div class="currentPrice">';
                    out += parseFloat((parseFloat(data[key]["price"])).toFixed(2)).toLocaleString('ru-RU') + ' ₽';
                    out += '</div>';
                    out += '</div>';
                }
                out += '<div class="name-block">';
                out += data[key]["name"];
                out += '</div>';
                out += '<div class="stars">';
                out += '<img src=../../img/starFull.png>';
                out += '</img>';
                out += '<img src=../../img/starFull.png>';
                out += '</img>';
                out += '<img src=../../img/starFull.png>';
                out += '</img>';
                out += '<img src=../../img/starFull.png>';
                out += '</img>';
                out += '<img src=../../img/star.png>';
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
            $('.main').html(out);
            script();
        })
    }

}())

function loadcarts() {
    let out = '';
    let summa = 0;
    let discount = 0;
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (Number(key) > 0) {
            document.querySelector(".counter").style.display = 'initial';
            let data = JSON.parse(localStorage.getItem(key));
            out += '<div class = carts id=' + data.article + '>';
            out += '<div class = cartsInfo>';
            out += '<label class="container">'
            out += '<input type="checkbox" id=' + data.article + ' checked="checked">';
            out += '<span class="checkmark"></span>';
            out += '</label>'
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
                out += parseFloat((parseFloat(data.price) - parseFloat(data.price) / 100 * data.discount).toFixed(2)).toLocaleString('ru-RU') + ' ₽';
                out += '</div><br>';
                out += '<div class="oldPrice" style="display:inline-block; margin-left: 5px; text-decoration: line-through; text-decoration-color: #F91155; font-size: 12px">';
                out += data.price + ' ₽';
                out += '</div>';
                out += '</div>';
            } else {
                out += parseFloat(parseFloat(data.price).toFixed(2)).toLocaleString('ru-RU') + ' ₽';
            }
            out += '</div>';
            out += '</div>';
            out += '<hr style="background: rgba(0, 26, 52, 0.163844)">';
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
    out += parseFloat(summa.toFixed(2)).toLocaleString('ru-RU') + ' ₽';
    out += '</div>';
    out += '</div>';
    out += '<div class="orderDiscount">';
    out += '<div class="discount">';
    out += 'Скидка'
    out += '</div>';
    out += '<div class="discountSum">';
    out += '<div class="discountSumMinus" style="display: inline-block">'
    out += '- ';
    out += '</div>';
    out += '<div class="discountSumText" style="display: inline-block">'
    out += parseFloat(parseFloat(discount).toFixed(2)).toLocaleString('ru-RU') + ' ₽';
    out += '</div>';
    out += '</div>';
    out += '</div>';
    out += '<hr>';
    out += '<div class="generalSum">';
    out += '<div class="generalSum-text">';
    out += 'Общая стоимость'
    out += '</div>';
    out += '<div class="generalSum-summa">';
    out += parseFloat(parseFloat(summa - discount).toFixed(2)).toLocaleString('ru-RU') + ' ₽';
    out += '</div>';
    out += '</div>';
    out += '<div class="getOrder">';
    out += '<div class="getOrder-text">';
    out += 'Доступные способы и время доставки можно выбрать при оформлении заказа';
    out += '</div>';
    out += '<div class="getOrder-button">';
    out += '<form action = email.html><button type="submit">Оформить</button></form>';
    out += '</div>';
    out += '</div>';
    out += '</div>';
    $('.cartsContainer').html(out);
    check();
    clearCart();
}

function clearCart() {
    if (document.querySelector('.carts') == null) {
        $('.objects').hide();
        $('.header .title').css('width', '500px');
        $('.cartSelect').hide();
        $('hr').hide();
        $('.finalOrder').html('<div class="orderTitle" style="text-align: center; position: initial; padding-top: 50px">Вы не добавили в корзину ни один товар. Воспользуйтесь каталогом, чтобы найти всё что вам нужно.</div><a href="/html/index.html"><input type="submit" value="Начать покупки" class="catalogButton"></input></a>');
        $('.orderTitle').css({
            'width': '100%',
            'margin-top': '50px'
        });
    }
}

function check() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (let checkbox of checkboxes) {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                if (checkbox.getAttribute('id') !== 'checkAll') {
                    checkbox.setAttribute('checked', 'checked');
                    localStorage.setItem(checkbox.getAttribute('id'), (JSON.stringify(JSON.parse(localStorage.getItem('data'))[checkbox.getAttribute('id')])));
                    localStorage.setItem('counter', (parseFloat(localStorage.getItem('counter')) + 1));
                    if (document.querySelector(".counter")) {
                        document.querySelector(".counter").textContent = localStorage.getItem('counter');
                    }

                    let data = JSON.parse(localStorage.getItem('data'))[checkbox.getAttribute('id')];
                    let summa = (parseFloat(document.querySelector('.summa').textContent.replace(",", ".").replace(/[^0-9.]/gim, "")) + parseFloat(data.price)).toFixed(2);
                    let discount = ((parseFloat(document.querySelector('.discountSumText').textContent.replace(",", ".").replace(/[^0-9.]/gim, "")) + parseFloat(parseFloat(data.price) / 100 * data.discount)).toFixed(2));
                    document.querySelector('.discountSumText').textContent = parseFloat(discount).toLocaleString('ru-RU') + ' ₽';
                    document.querySelector('.summa').textContent = parseFloat(summa).toLocaleString('ru-RU') + ' ₽';
                    document.querySelector('.generalSum-summa').textContent = (summa - discount).toLocaleString('ru-RU') + ' ₽';
                    if (parseFloat(localStorage.getItem('counter')) == 0) {
                        document.querySelector(".counter").style.display = 'none';
                    }
                    if (parseFloat(localStorage.getItem('counter')) !== 0) {
                        document.querySelector(".counter").style.display = 'block';
                    }
                    script();
                }
            } else {
                if (checkbox.getAttribute('id') !== 'checkAll') {
                    checkbox.removeAttribute("checked");
                    localStorage.removeItem(checkbox.getAttribute('id'));
                    localStorage.setItem('counter', (parseFloat(localStorage.getItem('counter')) - 1));
                    if (document.querySelector(".counter")) {
                        document.querySelector(".counter").textContent = localStorage.getItem('counter');
                    }
                    if (parseFloat(localStorage.getItem('counter')) == 0) {
                        document.querySelector(".counter").style.display = 'none';
                    }
                    if (parseFloat(localStorage.getItem('counter')) !== 0) {
                        document.querySelector(".counter").style.display = 'block';
                    }
                    let data = JSON.parse(localStorage.getItem('data'))[checkbox.getAttribute('id')];
                    let summa = (parseFloat(document.querySelector('.summa').textContent.replace(",", ".").replace(/[^0-9.]/gim, "")) - parseFloat(data.price)).toFixed(2);
                    document.querySelector('.summa').textContent = parseFloat(summa).toLocaleString('ru-RU') + ' ₽';
                    let discount = (parseFloat(document.querySelector('.discountSumText').textContent.replace(",", ".").replace(/[^0-9.]/gim, "")) - parseFloat(parseFloat(data.price) / 100 * data.discount).toFixed(2));
                    document.querySelector('.discountSumText').textContent = parseFloat(discount).toLocaleString('ru-RU') + ' ₽';
                    document.querySelector('.generalSum-summa').textContent = (summa - discount).toLocaleString('ru-RU') + ' ₽';
                    script();
                }
            }
        });
    }
};

if (document.querySelector('.delete')) {
    document.querySelector('.delete').addEventListener('click', function () {
        let checkboxes = document.querySelectorAll('input[type="checkbox"]');
        for (let checkbox of checkboxes) {
            if (checkbox.getAttribute('checked')) {
                $('div#' + checkbox.getAttribute('id')).next().remove();
                $('div#' + checkbox.getAttribute('id')).remove();
                localStorage.removeItem(checkbox.getAttribute('id'));
                clearCart();
            }
        }
        localStorage.setItem('counter', 0);
        if (document.querySelector(".counter")) {
            document.querySelector(".counter").textContent = localStorage.getItem('counter');
        }
        if (parseFloat(localStorage.getItem('counter')) == 0) {
            document.querySelector(".counter").style.display = 'none';
        }
        if (parseFloat(localStorage.getItem('counter')) !== 0) {
            document.querySelector(".counter").style.display = 'block';
        }
        if (document.querySelector('.summa')) {
            document.querySelector('.summa').textContent = parseFloat(0).toFixed(2) + ' ₽';
            document.querySelector('.discountSumText').textContent = parseFloat(0).toFixed(2) + ' ₽';
            document.querySelector('.generalSum-summa').textContent = parseFloat(0).toFixed(2) + ' ₽';
        }

        if (document.querySelector(".counter")) {
            document.querySelector(".counter").textContent = localStorage.getItem('counter');
        }
    })
}

function script() {
    let numTimes = localStorage.getItem("counter");
    if (numTimes == null) {
        numTimes = 0;
    } else {
        numTimes = parseInt(numTimes, 10);
    }

    document.querySelector(".counter").textContent = localStorage.getItem('counter');
    let num = parseFloat(numTimes % 10);
    switch (num) {
        case (0):
            document.querySelector(".objects").textContent = localStorage.getItem('counter') + ' товаров';
            if (document.querySelector(".orderPrice .goods") != null) {
                document.querySelector(".orderPrice .goods").textContent = localStorage.getItem('counter') + ' товаров на сумму';
            }
            break;
        case (1):
            document.querySelector(".objects").textContent = localStorage.getItem('counter') + ' товар';
            if (document.querySelector(".orderPrice .goods") != null) {
                document.querySelector(".orderPrice .goods").textContent = localStorage.getItem('counter') + ' товар на сумму';
            }
            break;
        case (2):
            document.querySelector(".objects").textContent = localStorage.getItem('counter') + ' товара';
            if (document.querySelector(".orderPrice .goods") != null) {
                document.querySelector(".orderPrice .goods").textContent = localStorage.getItem('counter') + ' товара на сумму';
            }
            break;
        case (3):
            document.querySelector(".objects").textContent = localStorage.getItem('counter') + ' товара';
            if (document.querySelector(".orderPrice .goods") != null) {
                document.querySelector(".orderPrice .goods").textContent = localStorage.getItem('counter') + ' товара на сумму';
            }
            break;
        case (4):
            document.querySelector(".objects").textContent = localStorage.getItem('counter') + ' товара';
            if (document.querySelector(".orderPrice .goods") != null) {
                document.querySelector(".orderPrice .goods").textContent = localStorage.getItem('counter') + ' товара на сумму';
            }
            break;
        case (5):
            document.querySelector(".objects").textContent = localStorage.getItem('counter') + ' товаров';
            if (document.querySelector(".orderPrice .goods") != null) {
                document.querySelector(".orderPrice .goods").textContent = localStorage.getItem('counter') + ' товаров на сумму';
            }
            break;
        case (6):
            document.querySelector(".objects").textContent = localStorage.getItem('counter') + ' товаров';
            if (document.querySelector(".orderPrice .goods") != null) {
                document.querySelector(".orderPrice .goods").textContent = localStorage.getItem('counter') + ' товаров на сумму';
            }
            break;
        case (7):
            document.querySelector(".objects").textContent = localStorage.getItem('counter') + ' товаров';
            if (document.querySelector(".orderPrice .goods") != null) {
                document.querySelector(".orderPrice .goods").textContent = localStorage.getItem('counter') + ' товаров на сумму';
            }
            break;
        case (8):
            document.querySelector(".objects").textContent = localStorage.getItem('counter') + ' товаров';
            if (document.querySelector(".orderPrice .goods") != null) {
                document.querySelector(".orderPrice .goods").textContent = localStorage.getItem('counter') + ' товаров на сумму';
            }
            break;
        case (9):
            document.querySelector(".objects").textContent = localStorage.getItem('counter') + ' товаров';
            if (document.querySelector(".orderPrice .goods") != null) {
                document.querySelector(".orderPrice .goods").textContent = localStorage.getItem('counter') + ' товаров на сумму';
            }
            break;
        default:
            break;
    }

    let buttons = document.querySelectorAll(".buttonContainer button");
    for (let button of buttons) {
        if (localStorage.getItem(button.getAttribute('id')) != null) {
            button.textContent = 'В корзине';
            button.style.color = '#005BFF';
            button.style.background = '#F2F3F5';
        }
        button.addEventListener('click', (event) => {
            if (event.target.textContent == 'В корзину') {
                event.target.textContent = 'В корзине';
                numTimes++;
                localStorage.setItem("counter", (numTimes).toString(10));
                document.querySelector(".counter").textContent = localStorage.getItem('counter');
                event.target.style.color = '#005BFF';
                event.target.style.background = '#F2F3F5';

                let data = JSON.parse(localStorage.getItem("data"));
                localStorage.setItem(event.target.getAttribute('id'), JSON.stringify(data[event.target.getAttribute('id')]));
                if (document.querySelector(".counter").textContent != '0') {
                    document.querySelector(".counter").style.display = 'initial';
                }
            } else if (event.target.textContent == 'В корзине') {
                event.target.textContent = 'В корзину';
                numTimes--;
                localStorage.setItem("counter", (numTimes).toString(10));
                localStorage.removeItem(event.target.getAttribute('id'));
                if (document.querySelector(".counter")) {
                    document.querySelector(".counter").textContent = localStorage.getItem('counter');
                }
                event.target.style.color = '#FFFFFF';
                event.target.style.background = '#005BFF';
                if (document.querySelector(".counter").textContent == '0') {
                    document.querySelector(".counter").style.display = 'none';
                }
            }

        })
    }
}