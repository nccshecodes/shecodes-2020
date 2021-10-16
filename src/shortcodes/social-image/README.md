# getSocialImage

- Outputs a relative url to the `1280px` width `jpeg` image located in the `dist` directory.
- Implements [custom file names](https://www.11ty.dev/docs/plugins/image/#custom-filenames-new-in-image-0.4.0) to output an seo suitable file name.

## Usage

To use the shortcode in a nunjucks template or markdown file:

{% raw %}

```
{% getSocialImage <src>, <fallback> %}
```

{% endraw %}

**NOTE**:

- The comma between arguments is required when using the Nunjucks template engine.

## Arguments

| Argument | Default | Required | Description                       |
| -------- | ------- | -------- | --------------------------------- |
| src      | -       | Y        | Relative path to original image.  |
| fallback | -       | Y        | Relative path to a fallback image |

### Example

This example is taken from the `meta_info` partial to generate the url for the OpenGraph `og:image` metatag

{% raw %}

```
{% getSocialImage featureImage, '/images/static/meta/nathalie-christmann-cooper.png' %}

Output =>
	/images/<featureImage-file-name>-1280.jpeg
```

{% endraw %}
