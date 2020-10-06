(function () {
    var bodyCtx = JSVs(), c = bodyCtx.commandInput, f = c.focus.bind(c);
    document.body.onclick = f; setTimeout(f);

    c.addEventListener('input', resize, false);
    c.addEventListener('keydown', function (e) { if (e.keyCode === 13 && !e.shiftKey) execute(e); }, false);

    function resize() { c.style.height = 'auto', c.style.height = c.scrollHeight + 'px'; }
    
    function execute(e) {
        e.preventDefault();
        var cmd = c.value;

        var div = document.createElement('div');
        div.className = 'command';
        div.textContent = '> ' + cmd;
        bodyCtx.result.appendChild(div);

        try {
            var res = eval(cmd);
            var div = document.createElement('div');
            div.className = 'result';
            div.textContent = '= ' + res;
            bodyCtx.result.appendChild(div);

        } catch (err) {
            var div = document.createElement('div');
            div.className = 'error';
            div.textContent = 'Uncaught ' + err.name + ': ' + err.message;
            bodyCtx.result.appendChild(div);
        }
        c.value = '';
        resize();
    }
})();