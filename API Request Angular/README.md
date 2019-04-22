Task: Create a webpage that displays the posts from the AWW Subreddit.
Build Specifications

1. Create an RedditService with a fetchAwwSubreddit() method. Use $http to request data
from the https://www.reddit.com/r/aww/.json API.

2. Create a redditFeed component that calls the fetchAwwSubreddit method and displays
the results on the page.

3. At a minimum, include a title, image and working link for each post. (For the image, the
easiest is to use the thumbnail, but there are other images in the JSON response. For
the link, use the permalink.)

4. Make it look good with some CSS.




Extended Challenges

1. Only show the first ten results.

2. Create a fetchSubreddit(subreddit) method on the service that lets the caller pass the
name of any subreddit, not just “aww”.

3. Create and modify the redditFeed component to take a one-way (<) or string (@)
binding for the subreddit name.