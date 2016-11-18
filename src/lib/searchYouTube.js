var searchYouTube = (options, callback) => {
  fetch(`https://www.googleapis.com/youtube/v3/search?key=${window.YOUTUBE_API_KEY}&maxResults=5&part=snippet&videoEmbeddable=true&type=video&q=${options.q}`).then((response) => {
    if (response.ok) {
      response.json().then((data) => callback(data.items));
    }
  });

};

window.searchYouTube = searchYouTube;
