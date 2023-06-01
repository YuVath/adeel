

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1064},"pages":[{"id":"page-index","displayName":"Index","link":{"linkType":"LinkTypePage","href":"#!page-index"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-shop","displayName":"Shop","link":{"linkType":"LinkTypePage","href":"#!page-shop"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-about-us","displayName":"About Us","link":{"linkType":"LinkTypePage","href":"#!page-about-us"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-contact-us","displayName":"Contact Us","link":{"linkType":"LinkTypePage","href":"#!page-contact-us"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false}]}

/*
 * animation widget from here: https://github.com/silexlabs/Silex/issues/443
 */
$(function() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if(!isMobile) {
        window.sr = ScrollReveal({
            distance: '100px'
        });
        sr.reveal('.from-left', { origin:  'left'});
        sr.reveal('.from-right', { origin:  'right'});
        sr.reveal('.from-top', { origin:  'top'});
        sr.reveal('.from-bottom', { origin:  'bottom'});
    }
})
    