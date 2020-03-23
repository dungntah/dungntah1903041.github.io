$(document).ready(function () {
    $('.gicungduoc').click(function (e) { 
        e.preventDefault();
        $('.gicungduoc').removeClass('active');
        $(this).addClass('active');

        
    });

    $('.m1').click(function (e) { 
        e.preventDefault();
        $('body').animate({
            // click thì cuộn
               scrollTop: 0
           }, 1000);
    });
    $('.m2').click(function (e) { 
        e.preventDefault();
        $('body').animate({
            // click thì cuộn
               scrollTop:  $('.khoi2').offset().top
             // hàm tính toán vị trí 
           }, 1000);
    });
    $('.m3').click(function (e) { 
        e.preventDefault();
        $('body').animate({
            // click thì cuộn
               scrollTop:  $('.khoi3').offset().top
             // hàm tính toán vị trí 
           }, 1000);
    });
    $('.m4').click(function (e) { 
        e.preventDefault();
        $('body').animate({
            // click thì cuộn
               scrollTop:  $('.khoi4').offset().top
             // hàm tính toán vị trí 
           }, 1000);
    });
    $('.m5').click(function (e) { 
        e.preventDefault();
        $('body').animate({
            // click thì cuộn
               scrollTop:  $('.khoi5').offset().top
             // hàm tính toán vị trí 
           }, 1000);
    });
    $('.m6').click(function (e) { 
        e.preventDefault();
        $('body').animate({
            // click thì cuộn
               scrollTop:  $('.khoi6').offset().top
             // hàm tính toán vị trí 
           }, 1000);
    });


    // doi mau
    $('.mauxanh').click(function (e) { 
        e.preventDefault();
        $('body').addClass('xanh');
        $('body').removeClass('vang');
    });
    $('.mauvang').click(function (e) { 
        e.preventDefault();
        $('body').addClass('vang');
        $('body').removeClass('xanh');
    });
    $('.maucam').click(function (e) { 
        e.preventDefault();
        $('body').removeClass('xanh');
        $('body').removeClass('vang');
    });
});