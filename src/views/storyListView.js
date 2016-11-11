(function(exports){

function StoryListView(storyList) {
  this._storyArray = storyList.returnStories();
}

  StoryListView.prototype.renderHTML = function() {
    var stories = this._storyArray.map(function(story) {
      return '<li>' + story.returnText() + "</li>";
    }).join("");
      return "<ul>" + stories + "</ul>";
  };

  exports.StoryListView = StoryListView;
})(this);
