function switcher() {
    let numTimes = localStorage.getItem("counter");
    if (numTimes == null) {
        numTimes = 0;
    } else {
        numTimes = parseInt(numTimes, 10);
    }
    let num = parseFloat(numTimes % 10);
    console.log(num);
    switch (num) {
        case (0):
            document.querySelector(".objects").textContent = localStorage.getItem('counter') + ' товаров';
            document.querySelector(".orderPrice .goods").textContent = localStorage.getItem('counter') + ' товаров на сумму';
            break;
        case (1):
            document.querySelector(".objects").textContent = localStorage.getItem('counter') + ' товар';
            document.querySelector(".orderPrice .goods").textContent = localStorage.getItem('counter') + ' товар на сумму';
            break;
        case (2):
            document.querySelector(".objects").textContent = localStorage.getItem('counter') + ' товара';
            document.querySelector(".orderPrice .goods").textContent = localStorage.getItem('counter') + ' товара на сумму';
            break;
        case (3):
            document.querySelector(".objects").textContent = localStorage.getItem('counter') + ' товара';
            document.querySelector(".orderPrice .goods").textContent = localStorage.getItem('counter') + ' товара на сумму';
            break;
        case (4):
            document.querySelector(".objects").textContent = localStorage.getItem('counter') + ' товара';
            document.querySelector(".orderPrice .goods").textContent = localStorage.getItem('counter') + ' товара на сумму';
            break;
        case (5):
            document.querySelector(".objects").textContent = localStorage.getItem('counter') + ' товаров';
            document.querySelector(".orderPrice .goods").textContent = localStorage.getItem('counter') + ' товаров на сумму';
            break;
        case (6):
            document.querySelector(".objects").textContent = localStorage.getItem('counter') + ' товаров';
            document.querySelector(".orderPrice .goods").textContent = localStorage.getItem('counter') + ' товаров на сумму';
            break;
        case (7):
            document.querySelector(".objects").textContent = localStorage.getItem('counter') + ' товаров';
            document.querySelector(".orderPrice .goods").textContent = localStorage.getItem('counter') + ' товаров на сумму';
            break;
        case (8):
            document.querySelector(".objects").textContent = localStorage.getItem('counter') + ' товаров';
            document.querySelector(".orderPrice .goods").textContent = localStorage.getItem('counter') + ' товаров на сумму';
            break;
        case (9):
            document.querySelector(".objects").textContent = localStorage.getItem('counter') + ' товаров';
            document.querySelector(".orderPrice .goods").textContent = localStorage.getItem('counter') + ' товаров на сумму';
            break;
        default:
            break;
    }
}