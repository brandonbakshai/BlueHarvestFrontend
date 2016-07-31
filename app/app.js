'use strict';

angular.module('blueHarvest', [])
  .controller('NewsController', function ($http) {
    this.clicked = {};
    this.story = {
      isActive: false,
      url: '',
    };
    this.newsItems = [];
    this.getMoreNews = () => {
      $http({
        url: 'http://localhost:3000/news',
        method: 'GET',
        async: true,
        cache: false
      })
      .then(data => {
        this.newsItems = this.newsItems.concat(data.data);
        console.log(data.data);
      })
      .catch(err => console.log(err));
    };


    this.onClick = (newsItem) => {
      this.story.url = newsItem.url;
      this.story.isActive = true;
      this.clicked[newsItem._id] = true;
      console.log(newsItem._id);
    };

    this.getMoreNews()

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

