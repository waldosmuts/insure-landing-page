$(document).ready(function () {
    $(".nav-close").hide();
    if (screen.width < 1300) {
        $("nav").hide();
    }
    $(window).resize(function () {
        if (screen.width < 1300) {
            $("nav").hide();
        } else {
            $("nav").show();
        }
    });
    // Opens Nav
    $(".nav-open").click(function (e) {
        $("nav").slideDown("slow");
        $(".nav-open").hide();
        $(".nav-close").show("slow");
    });
    // Closes Nav
    $(".nav-close").click(function (e) {
        $("nav").slideUp("slow");
        $(".nav-close").hide();
        $(".nav-open").show("slow");
    });
    // Closes Nav If Clicked Elsewhere
    $(document).click(function (e) {
        if (screen.width < 1300) {
            if ($("nav").is(":visible")) {
                if (!$(e.target).is("nav") && !$(e.target).is(".nav-open") && !$(e.target).is(".nav-close")) {
                    $("nav").slideUp("slow");
                    $(".nav-close").hide();
                    $(".nav-open").show("slow");
                }
            }
        }
    });
});