/**
 * Methods for dealing with the resizing of parent window's iframe
 */
const IframeResize = {
    /**
     * Resizes the parent iframe height to fit the page content
     */
    resize: function () {
        if (window.frameElement && window.frameElement.scrolling === 'no') {
            const height = document.body.getBoundingClientRect().height;
            window.frameElement.style.height = Math.ceil(height) + 'px';
        }
    },

    /**
     * Resizes the parent iframe height when an HTML element is animated via CSS transitions
     * @param {HTMLElement} elem The element to trigger the iframe resize when transitioned
     */
    resizeOnTransition: function (elem) {
        if (window.frameElement && window.frameElement.scrolling === 'no') {
            let requestAnimationFrameId = null;

            const update = function () {
                requestAnimationFrameId = requestAnimationFrame(update);
                this.resize();
            }.bind(this);

            const stop = function () {
                cancelAnimationFrame(requestAnimationFrameId);
            };

            elem.addEventListener('transitionstart', update);
            elem.addEventListener('transitionend', stop);
        }
    }
};
