var searchYouTube = (options, callback) => {
  $.ajax({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: $.extend(options, {key: window.YOUTUBE_API_KEY, maxResults: 5, part: 'snippet', videoEmbeddable: 'true', type: 'video'}),
    success: (data) => {
      callback(data.items);
    },
    error: function(e) {
      console.log(e);
    },
  });
};

window.searchYouTube = searchYouTube;
