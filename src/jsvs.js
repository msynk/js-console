function JSVs() {
    return mount(document.body, {});
    function mount(element, context) {
        return mnt(element), context;
        function mnt(el) {
            me(el);
            for (var i = 0; i < el.children.length; i++) mnt(el.children[i]);
        }
        function me(e) {
            var idAttr = e.attributes['id'];
            idAttr && !context[idAttr.value] && (context[idAttr.value] = e);
        }
    }
}