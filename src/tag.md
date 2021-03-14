---
title: { { tag } }
layout: 'layouts/tag.njk'
pagination:
  data: collections.tagList
  size: 1
  alias: tag
permalink: '/tag/{{ tag | slug }}/'
---
