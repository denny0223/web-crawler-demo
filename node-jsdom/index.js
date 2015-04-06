var request = require('request');
var jsdom = require("jsdom");

request('https://news.ycombinator.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var res = [];

    jsdom.env(html, function(error, window) {
      titles = window.document.getElementsByClassName("title");
      for(i = 0; i < titles.length; i++) {
        var a = titles[i].getElementsByTagName("a");
        if (a.length != 0) {
          tmp = {};
          tmp.text = a[0].textContent;
          tmp.url = a[0].getAttribute("href");
          res.push(tmp);
        }
      }

      console.log(JSON.stringify(res));
    });
  }
});
