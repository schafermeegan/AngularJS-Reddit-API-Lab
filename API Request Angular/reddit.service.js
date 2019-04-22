function RedditService($http) {
    const service = this;

    /**
     * Call https://www.reddit.com/r/aww/.json
     * and set ctrl.feed to be the results
     */
    service.fetchAwwSubreddit = () => {
        return $http({
            method: "GET",
            url: 'https://www.reddit.com/r/awww/.json?limit=10'
        });
        // $http stuff goes here
        //$http stuff goes here (call to the api and return it back to the redditFeed.js controller)
    }
}


angular
.module('RedditApp')
.service('RedditService', ['$http', RedditService]) 
// passing $http service as dependency for our service

//call http request in the service