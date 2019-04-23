function RedditFeed(RedditService, $q) {
    const ctrl = this;
    
    // List of reddit posts to display
    ctrl.feed = [];
    /**
     * Call https://www.reddit.com/r/aww/.json
     * and set ctrl.feed to be the results
     */
    ctrl.fetchAwwSubreddit = () => {
        //resolve and reject are not made up but hard coded in angularjs
        return $q(function(resolve, reject) {
            //q is the promise, then you need to resolve or reject once the api is called
        // Call service, then set our data
        RedditService.fetchAwwSubreddit()
        .then((response) => {
            console.log(response);
            // do something with this data
            //data.data.children is the array in the console
            //named it unicorn, baby, and spot so I have a better idea of what things are linked together, if they all were named children or data I wouldn't remember what is hard coded and not
            let unicorn = response.data.data.children;
            //.forEach is hard coded
            unicorn.forEach(function(baby, spot) {
                let childObj = {
                    title: baby.data.title, 
                    img: baby.data.thumbnail,
                    permalink: baby.data.url
                }
                ctrl.feed.push(childObj);

                if (spot === 10) {
                    resolve()
                // } else {
                //     return reject()
                }

            });
        });
    });
  }

  ctrl.fetchAwwSubreddit();
}
  
  angular.module('RedditApp').component('redditFeed', {
    template: `
        <div class="main" ng-repeat="post in $ctrl.feed">
            <h2>{{post.title}}</h2>
            <img class="redditPics" src="{{post.img}}"></img>
            <a href="{{post.permalink}}">Click ME</a>
        </div>
    `, // or use template Url
    controller: RedditFeed,
});


