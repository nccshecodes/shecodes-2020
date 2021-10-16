# imageShortcode

- Outputs multiple images in 3 widths - `640px`, `1280px` and `1920px` - which are saved directly to the `dist` directory.
- Outputs two formats - `jpeg` and `WebP`.
- Implemented [custom file names](https://www.11ty.dev/docs/plugins/image/#custom-filenames-new-in-image-0.4.0) to output seo suitable file names.
- Uses image [metadata](https://www.11ty.dev/docs/plugins/image/#sample-return-object) to add `width` and `height` attributes on a `picture` element for proper [aspect ratio mapping](https://developer.mozilla.org/en-US/docs/Web/Media/images/aspect_ratio_mapping).

The generated `picture` element:

- provides a jpeg fallback where `WebP` is not supported
- uses native lazyload.

## Usage

To use the shortcode in a nunjucks template or markdown file:

{% raw %}

```
{% imageShortcode <src>, <alt>, <classes>, <sizes> %}
```

{% endraw %}

**NOTE**:

- The comma between arguments is required when using the Nunjucks template engine.
- An error will throw if the alt text is not given.

## Arguments

| Argument | Default | Required | Description                                                                                                                                                            |
| -------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| src      | -       | Y        | Relative path to original image.                                                                                                                                       |
| alt      | -       | Y        | Alt text. Set null attr with `""`.                                                                                                                                     |
| classes  | ""      | -        | Add CSS classes to the generated `<picture>` element.                                                                                                                  |
| sizes    | "100vw" | -        | Values for the [sizes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#resolution_switching_different_sizes) attribute. |

## Example

This example is taken from the `blog template` to generate the feature image:

{% raw %}

```
{% imageShortcode latest.data.featureImage, latest.data.featureImageAlt, "latest__image", "(min-width: 62em) 612px, 100vw" %}

Output =>
  <picture class="latest__image">
    <source type="image/webp" srcset="/images/brain-640.webp 640w, /images/brain-1280.webp 1280w" sizes="(min-width: 62em) 612px, 100vw">
    <source type="image/jpeg" srcset="/images/brain-640.jpg 640w, /images/brain-1280.jpg 1280w" sizes="(min-width: 62em) 612px, 100vw">
      <img src="/images/brain-640.jpg" width="640" height="393" alt="my image alt text." loading="lazy" decoding="async">
  </picture>
```

{% endraw %}
