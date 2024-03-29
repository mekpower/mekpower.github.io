
  window.FontAwesomeConfig = {
    searchPseudoElements: true
  }
$(document).ready(function () {
    $('.dropdown-menu a').on('click', function () {
        $(this).parent().parent().prev().html($(this).html() + '<span class="caret"></span>');
        console.log($(this).attr("value"));
        getLocalize($(this).attr("value"))
    })

    jQuery('.img-modal[href^=#]').click(function (e) {
        e.preventDefault();
        var href = jQuery(this).attr('href');
        jQuery(href).modal('toggle');
    });
    function alignModal() {
        var modalDialog = $(this).find(".modal-dialog");

        // Applying the top margin on modal to align it vertically center
        modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
    }
    // Align modal when it is displayed
    $(".modal").on("shown.bs.modal", alignModal);

    // Align modal when user resize the window
    $(window).on("resize", function () {
        $(".modal:visible").each(alignModal);
    });

    //LOCALIZE E COOKIE DE LINGUA---------------------------------------------------------------------------
    langCookie = getCookie("lang");
    var path = window.location.pathname;
    var pathLocalize = path.split("/").pop();
    var pageFolder = pathLocalize.split(".")[0];
    if(pathLocalize == ''){
        pageFolder = "index";
    }
    console.log(pathLocalize)
    var userLang = navigator.language || navigator.userLanguage;
    if (langCookie != "") {
        $("[data-localize]").localize(`assets/js/Localize/locales/${pageFolder}/localize`, { language: getCookie("lang") })
        $("[data-localize]").localize(`assets/js/Localize/locales/navs`, { language: getCookie("lang") })
        $(`.dropdown-menu a[value=${langCookie}]`).parent().parent().prev().html($(`.dropdown-menu a[value=${langCookie}]`).html() + '<span class="caret"></span>');
        console.log("idioma do Cookie");
    } else {
        $("[data-localize]").localize(`assets/js/Localize/locales/${pageFolder}/localize`, { language: userLang })
        $("[data-localize]").localize(`assets/js/Localize/locales/navs`, { language: userLang })
        $(`.dropdown-menu a[value=${userLang}]`).parent().parent().prev().html($(`.dropdown-menu a[value=${userLang}]`).html() + '<span class="caret"></span>');
        console.log("idioma do Browser");
    }


    function getLocalize(lang) {
        langSelect = lang.toLowerCase();
        $("[data-localize]").localize(`assets/js/Localize/locales/${pageFolder}/localize`, { language: `${langSelect}` })
        $("[data-localize]").localize(`assets/js/Localize/locales/navs`, { language: `${langSelect}` })
        document.cookie = `lang= ${langSelect}`;
        //Cookie.set('lang', d, { secure: false })
        getCookie("lang");
    }


    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    //---------------------------------------------------------------------------
    var consume = `⠄⠄⠄⠄⠄⠄⠪⡳⣶⣾⣿⣿⣶⠦⠤⠒⣶⣶⣤⣄⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠉⠪⡻⣿⣀⣶⣶⣶⡤⠬⠙⠛⠃⢤⣭⠖⣢⡀⢄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⢚⢿⣿⣿⣯⠴⢛⣭⣽⣽⣕⡉⢜⣵⠾⢿⣿⣄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⢀⢔⣦⣾⣿⣿⣟⢿⣿⡟⠄⠘⣿⣿⡞⣿⡀⢠⡽⣿⣷⡀
    ⠄⠄⠄⠄⠄⣠⣤⣮⣷⣿⣿⣿⣿⣿⡟⡏⣿⠁ ⭕ ⣡⣿⣿⡿⠿ ⭕ ⠅
    ⠄⠄⠄⣴⣽⣿⣿⠟⠫⠽⣿⣿⡿⢻⣧⠱⣙⠿⢿⠿⢿⢛⣥⡙⠥⠬⠅⣂⣤⡤
    ⠄⢌⣾⣿⣿⡿⣱⠚⠻⣷⣝⢿⣿⣦⣭⣑⣂⣉⣭⣥⣶⣿⣿⣷⣄⣾⣿⠿⠋⢹
    ⣜⣿⣿⣿⣿⢱⣿⠄⠸⣦⣭⠓⠪⠭⣛⣛⡿⠿⠿⠿⠿⣟⣛⣛⠭⢝⣢⠄⢧⢸
    ⢻⣿⣿⣿⣿⢸⣿⠄⠄⠻⠃⠄⢿⣷⡶⠄⣭⣭⡍⠩⣭⣭⡤⠄⠄⠻⣿⠄⠄⢸
    ⣿⣿⣿⣿⣿⡸⣿⡀⠄⠄⠄⠄⠈⠁⠄⠄⠹⠋⠄⠄⠙⠟⠁⠄⠄⠄⠄⢠⡠⠎
    ⢡⢿⣿⣿⣿⣧⢻⣧⠄⢠⣶⡀⠄⠄⡄⠄⠄⠄⣀⠄⠄⠄⢀⣄⠄⠄⢠⡿⠝⠄
    ⠄⠩⢿⣿⣿⣿⣧⠻⣧⡙⢿⣿⠄⢰⣿⡄⠄⢀⣿⡄⠄⢀⣾⣿⡷⠄⡩⠊⠄⠄
    ⠄⠄⠑⢝⢿⣿⣿⣷⣬⣛⠳⢦⣤⣍⣙⣛⣀⣛⣛⣃⣀⡉⢍⠠⠔⠊⠄⠄⠄⠄
    ⠄⠄⠄⠄⠑⠫⢿⣿⣿⣿⣿⣷⣶⣬⣭⣭⣭⠭⠭⠙⠂⠉⠄⠄⠄⠄⠄⠄⠄⠄`;

    console.log(consume);
});