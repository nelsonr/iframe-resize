/**
 * Methods for dealing with the resizing of parent window's iframe
 */
const IframeResize = {
    /**
     * Resizes the parent iframe height to fit the page content
     */
    resize: function () {
        const height = document.body.getBoundingClientRect().height;
        window.frameElement.style.height = Math.ceil(height) + 'px';
    },

    /**
     * Resizes the parent iframe height when an HTML element is animated via CSS transitions
     * @param {HTMLElement} elem The element to trigger the iframe resize when transitioned
     */
    resizeOnTransition: function (elem) {
        let animationFrameId = null;

        const start = function (ev) {
            if (ev.propertyName === 'height') {
                update();
            }
        };

        const update = function () {
            animationFrameId = requestAnimationFrame(update);
            this.resize();
        }.bind(this);

        const stop = function (ev) {
            if (ev.propertyName === 'height') {
                cancelAnimationFrame(animationFrameId);
            }
        };

        elem.addEventListener('transitionstart', start);
        elem.addEventListener('transitionend', stop);
    }
};
