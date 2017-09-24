// update bg-color on timeline-toggle and nav-toggle state change
$('a.timeline-toggle').click(function (event) {
    $(this).addClass('active');
})
$('a.nav-toggle').click(function (event) {
    $(this).addClass('active');
})
// remove active states from all offcanvas-toggle links
UIkit.offcanvas.onHide = function () {
    $('a.offcanvas-toggle').removeClass('active');
}