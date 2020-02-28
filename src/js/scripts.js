function script() {
    let numTimes = localStorage.getItem("counter");
    if (numTimes == null) {
        numTimes = 0;
    } else {
        numTimes = parseInt(numTimes, 10);
    }

    document.querySelector(".counter").textContent = localStorage.getItem('counter');
    let num = parseFloat(numTimes % 10);
    console.log('Eto function script');
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
    console.log(buttons);
    for (let button of buttons) {
        console.log('hello');
        console.log(button.getAttribute('id'));
        if (localStorage.getItem(button.getAttribute('id')) != null) {
            button.textContent = 'В корзине';
            button.style.color = '#005BFF';
            button.style.background = '#F2F3F5';
            console.log(button);
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
                document.querySelector(".counter").textContent = localStorage.getItem('counter');
                event.target.style.color = '#FFFFFF';
                event.target.style.background = '#005BFF';
                if (document.querySelector(".counter").textContent == '0') {
                    document.querySelector(".counter").style.display = 'none';
                }
            }

        })
    }
}