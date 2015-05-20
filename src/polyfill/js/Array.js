
// @if false
if (!Array.prototype.push) {
Array.prototype.push = function () {
    var i, iLen;
    for (i = 0, iLen = arguments.length; i < iLen; ++i) {
        this[this.length] = arguments[i];
    }
};
}
// @endif
