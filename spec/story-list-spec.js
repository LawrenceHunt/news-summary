function testStoryList() {
  storyList = new storyList();
  storyList.addStory('This is a breaking news story! Trump has eaten Hilary Clinton!');
  assert.isTrue(storyList.storyArray[0] instanceof Story);
}

testStoryList();
