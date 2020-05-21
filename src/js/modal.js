$(document).ready(() => {
    let button = $('.navbar__button');
    let modal = $('.modal');
    let close = $('.modal-dialog__close');
    let cardLink = $('.card__link');
    let content = document.querySelector('#modal-content');
    let my;
    console.log('*****cardLink*****', cardLink );

    button.on('click', (event) =>{
        event.preventDefault();
        modal.addClass('modal_active');
        let target = event.target.attributes["1"].nodeValue;
        content.innerHTML = `<iframe src="${target+'.html'}" style="border: none; width: 100%; height: 543px;">
        Ваш браузер не поддерживает плавающие фреймы!
     </iframe>`;
        modal.addClass('modal_active');
        $(document).mouseup(function (e) {
            let container = $(".modal");
            if (container.has(e.target).length === 0){
                container.removeClass('modal_active');
            }
        });
    });
    close.on('click', () =>{
        modal.removeClass('modal_active');
    });
    cardLink.on('click', event => {
        event.preventDefault();
        modal.addClass('modal_active');
        let target = event.target.attributes["1"].nodeValue;
        content.innerHTML = `<iframe src="${target+'.html'}" style="border: none; width: 100%; height: 543px;">
        Ваш браузер не поддерживает плавающие фреймы!
     </iframe>`;
        $(document).mouseup(function (e) {
            let container = $(".modal");
            if (container.has(e.target).length === 0){
                container.removeClass('modal_active');
            }
        });
    });
    $(window).scroll(() => $(this).scrollTop() > 50 ?  $('.btn_up').fadeIn() : $('.btn_up').fadeOut());
    
    $('.btn_up').click(() => {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

