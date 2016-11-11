function testControllerDisplaysStories(){
  list = new StoryList();
  list.addStory('More breaking news! The world is burning in a sea of flames!');
  controller = new StoryController();
  controller.displayStories(list);
  stories = document.getElementById('stories');
  assert.isTrue(stories.innerHTML === '<ul><li>More breaking news! The world is burning in a sea of flames!</li></ul>');
}

testControllerDisplaysStories();
