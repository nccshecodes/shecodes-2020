# getSocialImage

- Outputs a relative url to the `1280px` width `jpeg` image located in the `dist` directory.
- Implements [custom file names](https://www.11ty.dev/docs/plugins/image/#custom-filenames-new-in-image-0.4.0) to output an SEO suitable file name.
- provides a fallback if the `ogImage` provided cannot be resolved.

## Usage

To use the shortcode in a nunjucks template or markdown file:

```
{% getSocialImage ogImage, ogImageAlt %}
```

**NOTE**:

- The comma between arguments is required when using the Nunjucks template engine.

## Arguments

| Argument   | Default | Required | Description                      |
| ---------- | ------- | -------- | -------------------------------- |
| ogImage    | -       | Y        | Relative path to original image. |
| ogImageAlt | -       | Y        | Alt text for image.              |

### Example

This example is taken from the `meta_info` partial to generate the url for the OpenGraph `og:image` and `og:image:alt` metatags.

{% raw %}

```
{% getSocialImage featureImage, featureImageAlt %}

Output =>
	<meta property="og:image" content="https://shecodes.dev/images/technical-code-test-donut-fingers-1280.jpeg">
<meta property="og:image:alt" content="Women hiding face behind hands with a mini sugared doughnut stuck on the end of each finger and thumb.">

```

{% endraw %}

### Fallback

This is the generated `fallback` content for the OpenGraph `og:image` and `og:image:alt` metatags. This content is taken from the `site.json` file.

{% raw %}

```
Output =>
	<meta property="og:image" content="https://shecodes.dev/images/static/meta/nathalie-christmann-cooper.png">
	<meta property="og:image:alt" content="A personal blog by Nathalie Christmann-Cooper where she shares thoughts about her career progression as a designer turned software developer">

```

{% endraw %}
