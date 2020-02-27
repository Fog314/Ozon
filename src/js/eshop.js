$('document').ready(()=>{
    loadGoods();
});

function loadGoods(){///товары из json
    $.getJSON('../js/goods.json',(data)=>{
        let out='';
        for(let key in data){
            // if(data[key]["name"])
            out+='<div class="singleGood">';
            out+='<img src=' + data[key]["image"]+' width: "200px" height: "200px">';
            out+='</img>';
            out+='<div class="info-block">';
            out+='<div class="price-block">';
            out+=data[key]["price"];
            out+='</div>';
            out+='<div class="name-block">';
            out+=data[key]["name"];
            out+='</div>';
            out+='<div class="stars">';
            out+='<img src=../../pics/starFull.png>';
            out+='</img>';
            out+='<img src=../../pics/starFull.png>';
            out+='</img>';
            out+='<img src=../../pics/starFull.png>';
            out+='</img>';
            out+='<img src=../../pics/starFull.png>';
            out+='</img>';
            out+='<img src=../../pics/star.png>';
            out+='</img>';
            out+='123К отзывов'
            out+='</div>';
            out+='<div class="buttonContainer">';
            out+='<button>В корзину</button>'
            out+='</div>';
            out+='</div>';
            out+='</div>';
        }
        $('.main').html(out);
    })
}