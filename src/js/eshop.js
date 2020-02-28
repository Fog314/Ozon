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
    let out = '';
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (Number(key) > 0) {
            document.querySelector(".counter").style.display = 'initial';
            let data = JSON.parse(localStorage.getItem(key));
            console.log(data);
            out += '<div class = carts>';
            out += '<div class = cartsInfo>';
            out += '<input type="checkbox" id=' + data.article + '>';
            out += '<div class = "image-container" style="background: url(' + data.image + '); background-size: contain; background-repeat: no-repeat;">';
            out += '</div>';
            out += '<label class="name-container" for ="'+data.article+'">';
            out += data.name;
            out += '</label>';
            out += '</div>';
            out += '<div class="cartsPrice">';
            out += data.price + ' ₽';
            out += '</div>';
            out += '</div>';
            out += '<div class="FinalPrice">';
            out += '</div>';
        }
    }
    $('.cartsContainer').html(out);
}