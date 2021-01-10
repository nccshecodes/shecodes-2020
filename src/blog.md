---
title: 'She codes, she blogs'
layout: 'layouts/blog.html'
metaDesc: Daily struggles as a front end engineer, endless notes on trying to keep up with tech and the occasional soapbox rant.
pagination:
  data: collections.blog
  size: 5
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---

TODO add a relevant blog strapline (summary)
