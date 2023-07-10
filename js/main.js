let secOffset = $(".who-we-are").offset().top;
$(window).scroll(function() {
    let scTop = $(window).scrollTop();
    if (scTop == secOffset) {
        $("#navbar").css("backgroundColor", "red")
    };
});