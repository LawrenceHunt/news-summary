(function(exports) {
  function StoryList() {
      this._stories = [];
  }

  StoryList.prototype.addStory = function(text) {
      var story = new Story(text);
      this._stories.push(story);
  };

  StoryList.prototype.returnStories = function() {
      return this._stories;
  };

  exports.StoryList = StoryList;
})(this);
