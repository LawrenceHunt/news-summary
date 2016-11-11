(function(exports) {

    function StoryController() {
    }

    StoryController.prototype.displayStories = function(list) {
        var listView = new StoryListView(list);
        var renderedHTML = listView.renderHTML();
        var storiesDiv = document.getElementById('stories');
        storiesDiv.innerHTML = renderedHTML;
    }

    exports.StoryController = StoryController;

})(this);