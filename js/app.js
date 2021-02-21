document.addEventListener('DOMContentLoaded', function () {
    Accordion();

    if (window.frameElement && window.frameElement.scrolling === 'no') {
        IframeResize.resize();
        IframeResize.resizeOnTransition(document);
    }
});