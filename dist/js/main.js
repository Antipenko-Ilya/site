// let callMe = document.querySelector('.navbar__button');
// let modalDialog = document.querySelector('.modal');
// let modalDialogClose = document.querySelector('.modal-dialog__close');
// let check = false;

// console.log(callMe, modalDialog);

// function closeModal(){
//     if(check){
//         modalDialog.classList.remove('modal_active');
//     }
// }

// callMe.addEventListener('click', () => {
    
//     check = true;
//     modalDialog.classList.add('modal_active'); 
//     setTimeout(closeModal, 1000);

// });
// modalDialogClose.addEventListener('click', () => closeModal());



$(document).ready(() => {
    $('#offer-form').validate({
        rules: {
            username: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
            }

        },
        messages:  {
            username: {
                required: 'Заполните поле',
                minlength: 'Неккоректное количевство символов'
            },
            phone: {
                required: 'Заполните поле',
            }
        }
    });
    $('#brif-form').validate({
        rules: {
            username: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
            }

        },
        messages:  {
            username: {
                required: 'Заполните поле',
                minlength: 'Неккоректное количевство символов'
            },
            email: {
                required: 'Заполните поле',
                email: 'Введите корректный emai'
            },
            phone: {
                required: 'Заполните поле',
            }
        }
    });
    $('.phone').mask('+7 (999) 999-99-99');
});

new WOW().init();
$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
});
$(document).ready(() => {
    $('#offer-form').on('submit', () => {
        event.preventDefault();
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            data: $(this).serialize(),
            success: (data) => {
               $('.success').text(data + ', ваша форма отправленна');
            },
            error: (jqXHR, textStatus) => {
                console.log(jqXHR, textStatus);
            } 
        });
    });
});
$(document).ready(() => {
    let button = $('.button');
    let modal = $('.modal');
    let close = $('.modal-dialog__close');

    button.on('click', () =>{
        modal.addClass('modal_active');
    });
    close.on('click', () =>{
        modal.removeClass('modal_active');
    });
    $(window).scroll(() => $(this).scrollTop() > 50 ?  $('.btn_up').fadeIn() : $('.btn_up').fadeOut());
    
    $('.btn_up').click(() => {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

