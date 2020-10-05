(function () {
    var bodyCtx = JSVs();

    bodyCtx.commandInput.addEventListener('input', resize, false);


    function resize() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    }
})();