function testStoryList() {
  storyList = new StoryList();
  storyList.addStory('This is a breaking news story! Trump has eaten Hilary Clinton!');
  assert.isTrue(storyList.returnStories()[0] instanceof Story);
}

testStoryList();
