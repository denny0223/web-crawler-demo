var request = require('request');
var cheerio = require('cheerio');

request('https://news.ycombinator.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var res = [];
    var $ = cheerio.load(html);

    $(".title a").each(function(i, element) {
      tmp = {};
      tmp.text = $(element).text();
      tmp.url = $(element).attr("href");
      res.push(tmp);
    });

    console.log(JSON.stringify(res));
  }
});
