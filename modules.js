/* Eliminates the neccesity of adding .prototype when
we want augment an object */
Function.prototype.method = function (name,func) {
    this.prototype[name] = func;
    return this;
};
// Module
String.method('deentityfy', function () {
    var entity = {
        quot: '"',
        lt: '<',
        gt: '>'
    };
    // Creates and returns the function that becomes the deentityfy method.
    return function() {
        return this.replace(/&([^&;]+);/g, function (a,b) {
                var r = entity [b];
                return typeof r === 'string' ? r : a;
            }
        );
    };
}());

console.log('&lt;&quot;&gt;'.deentityfy());
