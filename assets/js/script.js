/*init function*/
jQuery(function () {
    initBgCover();
    viewPortWidth();

    jQuery('.equal-height').matchHeight();

    jQuery('.read-more-btn').click(function (e) {
        jQuery(this).prev('.read-more-text').slideToggle();
        var text = jQuery(this).text();
        jQuery(this).text(text == "Read More" ? "Read Less" : "Read More");
    });


    //FANCYBOX
    jQuery(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    jQuery(".testimonials-slider").slick({
        infinite: true,
        dots: true,
        //speed: 800,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        //autoplay: true,
        //autoplaySpeed: 6000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    infinite: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    infinite: false
                }
            }, {
                breakpoint: 768,
                settings: {
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

/*background cover*/
function initBgCover(context) {
    if (!context) context = jQuery('body');
    context.find('.bg-cover').each(function () {
        var holder = jQuery(this);
        var image = holder.find('> img').hide();
        var imageSrc = image.prop('src');
        holder.css({
            backgroundImage: 'url(' + imageSrc + ')'
        });
    });
}

/* view Port Width for IE Mobile */
function viewPortWidth() {
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        );
        document.querySelector('head').appendChild(msViewportStyle)
    }
}