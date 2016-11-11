function testAddStory(text) {
    var story = new Story(text);
    assert.isTrue(story.returnText() === text);
}

testAddStory("I don't love javascript");
