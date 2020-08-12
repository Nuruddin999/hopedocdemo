HTMLElement.prototype.visible = function() {
    return this.offsetWidth > 0 && this.offsetHeight > 0;
};

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

var signInModal = document.getElementById("signin_modal");
var signUpModal = document.getElementById("signup_modal");
var bgLayer = document.getElementById("bg_layer");
var modalCloseButton = document.getElementById("modal_close");
var showRequestModalButton = document.getElementById("request_modal_button");
var requestModal = document.getElementById("request_modal");
var requestFileInput = document.getElementById("request_file_input");
var requestFileContainer = document.getElementById("request_uploaded_files");
var requestSubmitButton = document.getElementById("request_submit_button");
var doctorModal = document.getElementById("doctor_modal");
var showDoctorModalButton = document.getElementById("doctor_modal_button");
var doctorModalCloseButton = document.getElementById("doctor_modal_close");
var doctorSubmitButton = document.getElementById("doctor_submit_button");
var donateModal = document.getElementById("donate_modal");
var donateModalCloseButton = document.getElementById("donate_modal_close");
var donateSubmitButton = document.getElementById("donate_submit_button");
var donateModalButton = document.getElementById("donate_modal_button");
var nkoSubmitButton = document.getElementById("nko_submit_button");
var preloader = document.getElementById("preloader");
var formData = new FormData();
var files = [];


$("#signin_modal_trigger").click(e =>{
   e.preventDefault();
   e.stopPropagation();
   showModal(signInModal);
});

$("#signin_modal_close").click(() => hideModal(signInModal));
$("#signup_modal_close").click(() => hideModal(signUpModal));

donateModalCloseButton.onclick = e => hideModal(donateModal);
donateModalButton.onclick = e => showModal(donateModal);

$('document').ready(() => {
    $('.owl-carousel').owlCarousel({
        loop:false,
        center: false,
        nav:true,
        items: 3,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });

    $('.js-example-basic-single').select2();

    (function($){
        $(function() {
            $('.menu__icon').on('click', function() {
                console.log("123123213");
                $('.menu').toggleClass('menu_state_open');
            });
        });
    })(jQuery);


    $(".menu__links li").click(e => {
        console.log("124");
        $('.menu').toggleClass('menu_state_open');
    });

    $('.video img').click();
});


/**
 *
 * functions for showing/hiding modal
 */
function hideModal(modal) {
    //modal.style.display = "none";
    bgLayer.style.display = "none";
    $(modal).fadeOut();
    $('body').css('overflow', 'scroll');
}

function showModal(modal) {
    //modal.style.display = "block";
    bgLayer.style.display = "block";
    $(modal).fadeIn();
    $('body').css('overflow', 'hidden');
}





modalCloseButton.onclick = e => {
    if (requestModal.visible()) {
        hideModal(requestModal);
    }
};


doctorModalCloseButton.onclick = e => {
    if (doctorModal.visible()) {
        hideModal(doctorModal);
    }
};


showDoctorModalButton.onclick = e => {
    showModal(doctorModal);
};

requestFileInput.onchange = e => {



    requestFileContainer.childNodes.forEach( element => element.remove() );
    files = Array.from(e.target.files);

    console.log(files);
    //reset input value
    requestFileInput.value = "";

    files.forEach( (file, index) => {
        var ext = file.name.split(".")[file.name.split(".").length - 1];
        var shortname = "";

        if (file.name.length > 10) {
            shortname = file.name.slice(0, 6) + "..." + ext;
        }
        else shortname = file.name;

        var fileBlock = document.createElement('div');
        fileBlock.classList.add('uploaded-file');
        var closeSpan = document.createElement('img');
        closeSpan.setAttribute('src', 'img/remove.png');


        /**
         * delete span click listener
         */
        closeSpan.onclick = e => {
            var name = e.target.closest('.uploaded-file').dataset.name;
            files.forEach((item, index) => {
                if (item.name == name) {
                    console.log(index);
                    console.log(item.name);
                    files.splice(index, 1);
                }
            });

            console.log(files);
            formData = new FormData();
            e.target.closest('.uploaded-file').remove();
        };



        var textBlock = document.createElement("p");
        textBlock.textContent = shortname;
        // fileBlock.textContent = file.name;
        fileBlock.appendChild(textBlock);
        fileBlock.appendChild(closeSpan);


        fileBlock.dataset.name = file.name;
        requestFileContainer.appendChild(fileBlock);
    });
};


requestSubmitButton.onclick = e => {
    e.preventDefault();
    e.stopPropagation();

    formData = new FormData();

    formData.append('fio', $("#fio").val());
    formData.append('phone', $("#phone").val());
    formData.append('email', $("#email").val());
    formData.append("height", $("#height").val());
    formData.append("weight", $("#weight").val());
    formData.append("date_birth", $("#date_birth").val());
    formData.append('whatcompl', $("#whatcompl").val());
    formData.append('paintime', $("#paintime").val());
    formData.append('painmeds', $("#painmeds").val());
    formData.append('illtime', $("#illtime").val());
    formData.append('falilltime', $("#falilltime").val());
    formData.append('firstdocreq', $("#firstdocreq").val());
    formData.append('aggravfreq', $("#aggravfreq").val());
    formData.append('appliedacts', $("#appliedacts").val());
    formData.append('lifeanamnesis', $("#lifeanamnesis").val());
    formData.append('foodanamnesis', $("#foodanamnesis").val());
    files.forEach(file => {
        formData.append('files[]', file);
    });

    showModal(preloader);
    $.ajax({
        url: 'request',
        type: 'POST',
        contentType: false,
        processData: false,
        accepts: { "*": "application/json, text/javascript" },
        data: formData,
        success: function (response) {
            console.log(response);
            hideModal(preloader);
            hideModal(requestModal);
            hideModal(doctorModal);
            setTimeout( () => Swal.fire(
                'Успех!',
                'Ваша заявка успешно отправлена. В ближайшее время с Вами свяжется наш оператор!',
                'success'
            ), 500);
        },
        error: function ( response) {
            hideModal(preloader);
            console.log(response);
            if (response.status == 422) {
                //Вывести вообщения
                r = response;

                showValidationErrors(JSON.parse(response.responseText).errors);

                setTimeout( () =>  Swal.fire(
                    'Ошибка!',
                    'Проверьте правильность введённых данных!',
                    'error'
                ), 500);

            }
            else setTimeout( () =>  Swal.fire(
                'Ошибка!',
                'Произошла ошибка при отправке данных на сервер!',
                'error'
            ), 500);
        }
    });
};


function showValidationErrors(errors, isDoctorRequest = false) {
    document.querySelectorAll('.error-message').forEach(span => span.remove());
    $.each(errors, (field, fieldErrors)  => {
        fieldErrors.forEach(e => {
            var errorMessage = document.createElement('span');
            errorMessage.textContent = e;
            errorMessage.classList.add("error-message");
            var selector = `#` + (isDoctorRequest ? `doctor_` : ``) + field;
            $(selector)[0].parentNode.appendChild(errorMessage);
        });
    });
}

function showNkoValidationErrors(errors, isDoctorRequest = false) {
    document.querySelectorAll('.error-message').forEach(span => span.remove());
    $.each(errors, (field, fieldErrors)  => {
        fieldErrors.forEach(e => {
            var errorMessage = document.createElement('span');
            errorMessage.textContent = e;
            errorMessage.classList.add("error-message");
            var selector = `#` + (isDoctorRequest ? `nko_` : ``) + field;
            $(selector)[0].parentNode.appendChild(errorMessage);
        });
    });
}

doctorSubmitButton.onclick = e => {
    e.preventDefault();
    e.stopPropagation();

    formData = new FormData();
    formData.append('fio', $("#doctor_fio").val());
    formData.append('phone', $("#doctor_phone").val());
    formData.append('email', $("#doctor_email").val());
    formData.append("speciality", $("#doctor_speciality").val());
    formData.append("city", $("#doctor_city").val());

    showModal(preloader);
    $.ajax({
        url: 'doctor',
        type: 'POST',
        data: formData,
        accepts: { "*": "application/json, text/javascript" },
        contentType: false,
        processData: false,
        success: function (response) {
            hideModal(preloader);
            console.log(response);
            setTimeout( () => Swal.fire(
                'Успех!',
                'Ваша заявка успешно отправлена. В ближайшее время с Вами свяжется наш оператор!',
                'success'
            ), 500);
            hideModal(doctorModal);
        },
        error: function (response) {
            hideModal(preloader);
            if (response.status == 422) {
                showValidationErrors(JSON.parse(response.responseText).errors, true);
                setTimeout( () =>  Swal.fire(
                    'Ошибка!',
                    'Проверьте правильность введённых данных!',
                    'error'
                ), 500);
            } else setTimeout( () =>  Swal.fire(
                'Ошибка!',
                'Произошла ошибка при отправке данных на сервер!',
                'error'
            ), 500);
        }
    });
};



nkoSubmitButton.onclick = e => {e.preventDefault();
    e.stopPropagation();

    formData = new FormData();
    e.preventDefault();
    e.stopPropagation();

    formData = new FormData();

    //todo refactor

    formData.append('fio', $("#nko_fio").val());
    formData.append('phone', $("#nko_phone").val());
    formData.append('email', $("#nko_email").val());
    formData.append("name", $("#nko_name").val());
    formData.append("city", $("#nko_city").val());

    showModal(preloader);
    $.ajax({
        url: 'nko',
        type: 'POST',
        data: formData,
        accepts: { "*": "application/json, text/javascript" },
        contentType: false,
        processData: false,
        success: function (response) {
            hideModal(preloader);
            console.log(response);
            setTimeout( () => Swal.fire(
                'Успех!',
                'Ваша заявка успешно отправлена. В ближайшее время с Вами свяжется наш оператор!',
                'success'
            ), 500);
            hideModal(nkoModal);
        },
        error: function (response) {
            hideModal(preloader);
            if (response.status == 422) {
                showNkoValidationErrors(JSON.parse(response.responseText).errors, true);
                setTimeout( () =>  Swal.fire(
                    'Ошибка!',
                    'Проверьте правильность введённых данных!',
                    'error'
                ), 500);
            } else setTimeout( () =>  Swal.fire(
                'Ошибка!',
                'Произошла ошибка при отправке данных на сервер!',
                'error'
            ), 500);
        }
    });
};

/**
 * defining yandex map
 */
ymaps.ready(() => { map = new ymaps.Map('map',
    {
        center: [42.996361, 47.479134],
        zoom: 14
    });

        var place = new ymaps.Placemark(map.getCenter(), {
            // hintContent: 'Собственный значок метки',
            balloonContent: 'Центр Профилактики Заболеваний'
        });

        map.geoObjects.add(place);

    }
);



$(".video img").click(e => {
    var link = e.currentTarget.dataset.link;

    var video_id = link.split('v=')[1] ;
    if (video_id == undefined)
        return;
    var ampersandPosition = video_id.indexOf('&');
    if(ampersandPosition != -1) {
        video_id = video_id.substring(0, ampersandPosition);
    }
    console.log(video_id);

    var video = e.currentTarget.closest(".video");


    var width = +$(video).css('width').replace('px', '') /*- 20*/;
    var height = +$(video).css('height').replace('px', '')/* - 20*/;
    console.log(width);
    console.log(height);
    e.currentTarget.closest('.video').innerHTML = `<iframe id="ytplayer" type="text/html" width="${width}" height="${height}" src="https://www.youtube.com/embed/${video_id}" frameborder="0"/>`;
});
