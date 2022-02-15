function glr(data_id){
    document.querySelector('.mpic.active').classList.toggle('active');
    document.querySelector('.mpic[data-id="'+data_id +'"]').classList.toggle('active');
    document.querySelector('.bpic > img').setAttribute('src','./img/item' + data_id + '.jpg').setAttribute('alt','pic' + data_id);
}