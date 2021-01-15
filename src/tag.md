---
title: {{ tag }}
layout: 'layouts/tag.html'
metaDesc: Browse the tags archive from the SheCodes blog.
pagination:
  data: collections.tagList
  size: 1
  alias: tag
permalink: '/tag/{{ tag | slug }}/'
pageHeaderTitle: '{{ tag }}'
---
