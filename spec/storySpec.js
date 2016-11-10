function testStory(storyText) {
  var story= new Story(storyText);
  assert.isTrue(story.text === storyText);
}

testStory("Donald Trump in shock move, eats Hillary Clinton");

function testGetStoryText(storyText) {
  var story= new Story(storyText);
  assert.isTrue(story.getStoryText === storyText);
}

testGetStoryText("Donald Trump in shock move, eats Hillary Clinton");
