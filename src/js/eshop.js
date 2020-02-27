$('document').ready(()=>{
    loadGoods();
});

function loadGoods(){///товары из json
    $.getJSON('../js/goods.json',(data)=>{
        let out='';
        for(let key in data){
            out+='<div class="singleGood"></div>';
            out+='<img src=(' + data[key]['image']+')"</img>';
            out+='';
        }
        $('.main').html(out);
    })
}