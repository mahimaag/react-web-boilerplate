
typeof window !== "undefined"  && require('owl.carousel');

//Slider Config
export const SlideCaller = (autoplay, slideCount)=>{
    if(slideCount < 2){
        $('.bannerSlider').owlCarousel({
            stagePadding: 0,
            loop: false,
            dots: false,
            margin: 0,
            nav: false,
            items: 1,
        });
    }
    else{
        $('.bannerSlider').owlCarousel({
            stagePadding: 0,
            loop: true,
            dots: true,
            margin: 0,
            nav: false,
            items: 1,
            autoplay:autoplay,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            stopOnHover: false,

        });
    }
    $('.bannerSlider').owlCarousel({
        stagePadding: 0,
        loop: true,
        dots: true,
        margin: 0,
        nav: false,
        items: 1,
        //Autoplay
        /*------------------
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        stopOnHover: false,
        ------------------*/
    });
};


   //SliderTv height
   export const CarouselCaller = (idContainer, itemCount) =>{
        if ($('#'+idContainer+', .listbox').length > itemCount) {
            $('#'+idContainer+'').owlCarousel({
                stagePadding: 140,
                loop: false,
                dots: true,
                margin: 0,
                nav: true,
                //autoWidth:true,
                responsive: {
                    1000: {
                        items: itemCount
                    }
                }
            });
        } else {
            $('#'+idContainer+'').owlCarousel({
                stagePadding: 140,
                loop: false,
                dots: true,
                margin: 0,
                nav: true,
                items: itemCount,
                mouseDrag: false
            });
        }
    }


let CustomCaller = typeof window !== "undefined" && $(document).ready(function () {
    //header height
    var header_height = $('.header').outerHeight();
    $('.main_container').css({'padding-top': header_height});
//footer height
    var footer_height = $('.footer').outerHeight();
    $('.wrapper').css({'padding-bottom': footer_height});

    $('.search_cross').click(function(){
       $('.search_sec').fadeIn();
       //$('.search_cross').removeClass('fa-search');
        //$('.search_cross').addClass('fa-times');
        $('.menu').fadeOut();
    });



});

typeof window !== "undefined" && $(window).resize(function () {
    //header height
    var header_height = $('.header').outerHeight();
    $('.main_container').css({'padding-top': header_height});
    //footer height
    var footer_height = $('.footer').outerHeight();
    $('.wrapper').css({'padding-bottom': footer_height});
});

export default CustomCaller;
export const initOwlCarousel = () => {

}
