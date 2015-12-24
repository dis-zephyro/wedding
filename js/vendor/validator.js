/* ------------------------------------------------------------------------------------------------------------------------------------------------ */
/* Anton Lukashov | cassador.ru */

// function formTheme(href, formname) {
//   var i = $(href).attr("href");
//   $(i).find(".formname").attr("value", formname);
// }




function checkForm(form1) {
    var error1 = "Пожалуйста, заполните это поле",
        error2 = "Телефон указан некорректно",
        error3 = "E-mail указан некорректно",
        error4 = "Пожалуйста, укажите Телефон",
        error5 = "или E-mail";

    var $form = $(form1),
        checker = true,
        name  = $("input[name='name']", $form).val(),
        phone = $("input[name='phone']", $form).val(),
        email = $("input[name='email']", $form).val(),
        quest = $("textarea[name='question']", $form).val();

    if($form.find(".name").hasClass("required")) {
        if(!name) {
            $form.find(".name").addClass("red");
            $form.find(".name").attr("data", error1);
            checker = false;
        } else {
            $form.find(".name").removeClass('red');
        }
    }

    if($form.find(".phone").hasClass("required")) {
        if(!phone) {
            $form.find(".phone").addClass("red");
            $form.find(".phone").attr("data", error1);
            checker = false;
        } else if(!/[0-9 +()]/.test(phone)) {
            $form.find(".phone").addClass("red");
            $form.find(".phone").attr("data", error2);
            checker = false;
        } else {
            $form.find(".phone").removeClass("red");
        }
    }

    if($form.find(".email").hasClass("required")) {
        if(!email) {
            $form.find(".email").addClass("red");
            $form.find(".email").attr("data", error1);
            checker = false;
        } else if(!/^[\.A-z0-9_\-\+]+[@][A-z0-9_\-]+([.][A-z0-9_\-]+)+[A-z]{1,4}$/.test(email)) {
            $form.find(".email").addClass("red");
            $form.find(".email").attr("data", error3);
            checker = false;
        } else {
            $form.find(".email").removeClass("red");
        }
    }

     if($form.find(".question").hasClass("required")) {
       if(!quest) {
         $form.find(".question").addClass("red");
         $form.find(".question").attr("data", error1);
         checker = false;
       } else {
         $form.find(".question").removeClass("red");
       }
     }

    if($form.hasClass("selection")) {
        if(!phone && !email) {
            $form.find(".phone").addClass("red");
            $form.find(".email").addClass("red");
            $form.find(".phone").attr("data", error4);
            $form.find(".email").attr("data", error5);
            checker = false;
        } else if(!email && !/[0-9 +()]/.test(phone)) {
            $form.find(".phone").addClass("red");
            $form.find(".phone").attr("data", error2);
            $form.find(".email").removeClass("red");
            checker = false;
        } else if(!phone && !/^[\.A-z0-9_\-\+]+[@][A-z0-9_\-]+([.][A-z0-9_\-]+)+[A-z]{1,4}$/.test(email)) {
            $form.find(".email").addClass("red");
            $form.find(".email").attr("data", error3);
            $form.find(".phone").removeClass("red");
            checker = false;
        } else if(!/[0-9 +()]/.test(phone) && !/^[\.A-z0-9_\-\+]+[@][A-z0-9_\-]+([.][A-z0-9_\-]+)+[A-z]{1,4}$/.test(email)) {
            $form.find(".phone").addClass("red");
            $form.find(".email").addClass('red');
            $form.find(".phone").attr("data", error2);
            $form.find(".email").attr("data", error3);
            checker = false;
        } else if(/[0-9 +()]/.test(phone)) {
            $form.find(".phone").removeClass("red");
            if(email && !/^[\.A-z0-9_\-\+]+[@][A-z0-9_\-]+([.][A-z0-9_\-]+)+[A-z]{1,4}$/.test(email)) {
                $form.find(".email").addClass("red");
                $form.find(".email").attr("data", error3);
                checker = false;
            } else {
                $form.find(".email").removeClass("red");
            }
        } else if(/^[\.A-z0-9_\-\+]+[@][A-z0-9_\-]+([.][A-z0-9_\-]+)+[A-z]{1,4}$/.test(email)) {
            $form.find(".email").removeClass("red");
            if(phone && !/[0-9 +()]/.test(phone)) {
                $form.find(".phone").addClass("red");
                $form.find(".phone").attr("data", error3);
                checker = false;
            } else {
                $form.find(".phone").removeClass("red");
            }
        }
    }

    if(checker != true) { return false; }

}

/* ------------------------------------------------------------------------------------------------------------------------------------------------ */
/* cassador.ru */