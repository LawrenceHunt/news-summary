function displaysStoryLists() {
    var storylist = new StoryList();
    storyList.addStory('This is a breaking news story! Trump has eaten Hilary Clinton!');
    var view = new StoryListView(storylist);
    view.displayAll();
    var expectedResult = '<ul><li>This is a breaking news story! Trump has eaten Hilary Clinton!</li></ul>';
    assert.isTrue(document.getElementById('stories').innerHTML = expectedResult);
};

displaysStoryLists();