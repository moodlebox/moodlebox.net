jQuery(document).ready(function(e) {
    function a(a) {
        e(".kb-panel-container .kb-tab-panel:nth-child(" + (a + 1) + ")").addClass("active")
    }
    function t(e, a) {
        var t = window.location.href;
        t = i(t, "top-category", a), window.history.pushState({
            tab: e
        }, "title", t)
    }
    function i(e, a, t) {
        var i = new RegExp("([?&])" + a + "=.*?(&|$)", "i"),
            s = -1 !== e.indexOf("?") ? "&" : "?";
        return e.match(i) ? e.replace(i, "$1" + a + "=" + t + "$2") : e + s + a + "=" + t
    }
    var s = e("#kb-main-page-container"),
        n = e("#kb-content-container"),
        o = e(".kb-nav-tabs li"),
        c = e(".kb-tab-panel");
    s.find(".kb-show-all-articles").on("click", function() {
        e(this).toggleClass("active");
        var a = e(this).parent("ul").find("li");
        e(this).hasClass("active") ? (e(this).find(".kb-show-text").addClass("kb-hide-elem"), e(this).find(".kb-hide-text").removeClass("kb-hide-elem")) : (e(this).find(".kb-show-text").removeClass("kb-hide-elem"), e(this).find(".kb-hide-text").addClass("kb-hide-elem")), e(a).each(function() {
            e(this).hasClass("kb-hide-elem") ? (e(this).removeClass("kb-hide-elem"), e(this).addClass("visible")) : e(this).hasClass("visible") && (e(this).removeClass("visible"), e(this).addClass("kb-hide-elem"))
        })
    })
});
