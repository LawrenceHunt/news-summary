function testAddStory(text) {
    var story = new Story(text);
    assert.isTrue(story.text === text);
}

testAddStory("I don't love javascript");
