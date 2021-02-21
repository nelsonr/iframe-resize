function Accordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    [].forEach.call(accordionItems, function (accordionItem) {
        const accordionHeader = accordionItem.querySelector('.accordion-item__header');
        const accordionBody = accordionItem.querySelector('.accordion-item__body');
        const accordionContent = accordionItem.querySelector('.accordion-item__content');

        accordionHeader.addEventListener('click', function () {
            if (accordionItem.classList.contains('accordion-item--expanded')) {
                accordionBody.style.height = null;
                accordionItem.classList.remove('accordion-item--expanded');
            } else {
                const contentHeight = Math.ceil(accordionContent.getBoundingClientRect().height);
                accordionBody.style.height = contentHeight + 'px';
                accordionItem.classList.add('accordion-item--expanded');
            }
        });
    });
}
