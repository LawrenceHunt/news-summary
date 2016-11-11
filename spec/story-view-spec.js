function displaysStoryLists() {
    var storyList = new StoryList();
    storyList.addStory('This is a breaking news story! Trump has eaten Hilary Clinton!');
    var view = new StoryView(storyList);
    assert.isTrue(view.renderHTML() === '<ul><li>This is a breaking news story! Trump has eaten Hilary Clinton!</li></ul>');
  }

displaysStoryLists();
