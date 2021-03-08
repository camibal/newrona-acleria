$('#carouselExampleFade').bind('mousewheel', function (e) {
    if (e.originalEvent.wheelDelta / 120 > 0) {
        $(this).carousel('prev');
    } else {
        $(this).carousel('next');
    }
});
// $('#carouselExampleFade').bind('mousewheel', function (e) {
//     if (e.originalEvent.wheelDelta / 120 > 0) {
//         $(this).carousel('prev');
//     } else {
//         $(this).carousel('next');
//     }
// });