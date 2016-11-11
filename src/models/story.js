(function(exports) {
    function Story(text) {
        this._text  = text;
    }

    Story.prototype.returnText = function() {
        return this._text;
    };

    exports.Story = Story;
})(this);
