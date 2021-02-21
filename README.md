# Introduction

This is an example project of how to deal with the resizing of iframe elements when the content might change size using CSS transitions.

This applies mostly to the scenarios where the iframe is adjusted to fit the page's content (without scroll) but that content size might change (ex.: an Accordion).

The goal is to create a smooth change to the iframe height while being able to continue using CSS transitions to animate the page elements.

# How does it work?

This key ingredients to make this work are the [`transitionstart`](https://developer.mozilla.org/en-US/docs/Web/API/Document/transitionstart_event), [`transitionend`](https://developer.mozilla.org/en-US/docs/Web/API/Document/transitionend_event) events and the [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) and [`cancelAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/Window/cancelAnimationFrame) methods.

We use the `transitionstart` and the `transitionend` events to know when the CSS transition starts and ends to then call the resize method to calculate the new content height every frame with `requestAnimationFrame` and finally we use `cancelAnimationFrame` to stop animating when the transition ends.

# Can I see it?

Yes! Check out a live example of this repo [here](https://nelsonr.github.io/iframe-resize/).