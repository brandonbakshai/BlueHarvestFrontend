'use strict';

angular.module('blueHarvest', [])
  .controller('NewsController', ($http) => {
    this.clicked = {};
    this.story = {
      isActive: false,
      url: '',
    };
    this.newsItems = [];
    this.getMoreNews = getMoreNews;
    this.onClick = (newsItem) => {
      this.story.url = newsItem.url;
      this.story.isActive = true;
      this.clicked[newsItem._id] = true;
      console.log(newsItem._id);
    };

    (function getMoreNews() {
      $http({
        url: 'http://localhost:3000/news',
        method: 'GET',
        async: true,
        cache: false
      })
      .then((data) => {
        console.log(data);
        return this.newsItems.concat(data);
      })
      .then((newsItems) => {
        console.log(newsItems);
        this.newsItems = newsItems;
      })
      .catch(err => console.log("Error: ${err}"));
    }());
  })
  .controller('KingController', () => {
    this.refinement = {
      clicked: false,
      filters: [],
      viewByBounty: true,
      sort: {
        criteria: 'upvotes',
        orderByDecreasing: true,
      },
    };
  });

