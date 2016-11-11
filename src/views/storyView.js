(function(exports){

function StoryView(storyList) {
  this._storyArray = storyList.returnStories();
}

  StoryView.prototype.renderHTML = function() {
    var stories = this._storyArray.map(function(story) {
      return '<li>' + story.returnText() + "</li>";
    }).join("");
      return "<ul>" + stories + "</ul>";
  };

  exports.StoryView = StoryView;
})(this);
