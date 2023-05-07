var url = 'https://6450e1f2e1f6f1bb22a17d94.mockapi.io/products';

var getAll = async function(){
    var res = await fetch(url);
    var products = await res.json();
    return products;
};

var getOne = async function(id){
    var res = await fetch(`${url}/${id}`);
    var products = await res.json();
    return products;
};

export {getAll,getOne};

