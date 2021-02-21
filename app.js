function squareExpandable() {
    const squares = document.querySelectorAll('.square');

    [].forEach.call(squares, function (square) {
        square.addEventListener('click', function () {
            square.classList.toggle('square--expanded');
        });

        IframeResize.resizeOnTransition(square);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    squareExpandable();
    IframeResize.resize();
});