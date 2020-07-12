## Package Manager
Yarn

## Remote data fetching

Every time the site is rebuilt, it will go and fetch remote data. This isn’t ideal — especially if you’re using a rate-limited API. Let’s say the API you’re pulling data from only allows 10 queries per hour. If you save your project 10 times in that hour, it’ll stop you from grabbing the data you need.

[@11ty/eleventy-cache-assets](https://github.com/11ty/eleventy-cache-assets) is a library made by Eleventy which mitigates this risk.

It fetches remote data and caches it for a user-defined amount of time. When the cache expires, it’ll go ahead and grab the remote data again.

## To update
* site.json - site name and url
* partials/header.html - add logo svg
* _data/navigation_primary.json - add main navigation links
* partials/meta-info.html and social-share image (png)
