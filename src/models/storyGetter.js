(function(exports){

function StoryGetter(){
}

  StoryGetter.prototype.getStories = function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=uk-news&page-size=5");
    xhr.send();
    xhr.onload = function(){
      var results = JSON.parse(xhr.responseText);
      var stories = stories.response.results;
    };
      return stories;
  };
  //
  // StoryGetter.prototype.getHeadlines()
  // var stories = this.getStories();
  //     stories.map(function(story){
  //       [0].webTitle;
  //     })

  exports.StoryGetter = StoryGetter;

})(this);
