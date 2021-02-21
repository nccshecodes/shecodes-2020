---
date: '2020-06-29'
featureImage: src/posts/2020-06-29/brain.jpg
featureImageAlt: '3d fabric sculpture of brain. Left side is black and white with printed numbers. Right side is a bright mix of colors.'
metaDesc: Semantic meaning, HTML structure, working mobile-first and building responsive layouts pays dividends in terms of the Perceivable accessibility principle.
metaTitle: Perceivable Accessibility Principle
socialImage: brain
tags:
  - level up
  - accessibility
title: Testing for accessibility part 1 – Perceivable
---

## Making Sense of it

**I want to start with a disclaimer**. This is by no means an extensive and thorough check to meet all accessibility standards. I'm am no expert in fact far from it but as a developer, I want to make sure that testing for accessibility is baked into everything I do. I've written this 4 part blogpost as an introductory starting point to have a checklist that will help me understand why these manual tests are important, how it helps the user and how to carry out the checks.{.break-left}

## First Review Accessibility Checklist

### Perceivable Theory

Users need to be able to choose how they access digital content, picking a combination of sight, sound and touch that best matches their specific needs.

With this in mind thinking about the semantic meaning and HTML structure upfront, working mobile-first and building responsive layouts as part of the prototyping process pays dividends in terms of accessibility. Using native HTML elements that come with built-in accessibility features helps keep the code cleaner and simpler. These features work well with assistive technologies, enabling users to consume and perceive digital content in a way that works best for them. This all builds towards meeting the checks that fall under the Perceivable accessibility principle.

#### Page Titles

The page title is set as the **title** tag in the head section of a page. It's important because it is used to set the text shown in browser tabs. This information is useful, especially if like me, you have multiple tabs open at once. It sets the title in search engine results, it's used for bookmarks and favourites and it's also the first thing that's read out by a screen reader when a page loads. It lets the user know where they are in the web.

<h4 id="heading-structure">Heading Structure</h4>

The user can scan and quickly work out an idea of the content if the content uses a good heading structure. Therefore, anything that is styled to _look_ like a heading should be marked up as a heading using the correct HTML heading element (h1-h6).

These headings identify blocks of content and the heading hierarchy is meaningful. You should include at least one heading. Ideally, start with an **h1** and avoid skipping heading levels. The question "how many H1 headings can I use?" comes up a lot. I decided to research this because although multiple H1 elements are now valid, I had a niggling feeling that someone way back in some conference somewhere mentioned you should only use one H1 element. I couldn't find anything to tell me if this has any bearing in particular on accessibility, but I did find this taken from the [MDN web docs][2].

> You should only use one &lt;h1&gt; per page. Using more than one will not result in an error, but using only one is seen as a best practice. It makes logical sense — &lt;h1&gt; is the most important heading, and tells you what the purpose of the overall page is. You wouldn't have a book with more than one title, or a movie with more than one name! Having a single top-level title is also arguably better for screenreader users, and SEO.{.break-full}



If it's good enough for the team at Mozilla, then it's good enough for me.

Don't forget to add a heading to menu and navigational sections too, which are usually H2. It might not always make sense for these headings to be visible, in which case use CSS so that these headings are [only visible to screen readers.][3]

#### Distinguishable Content - Low Vision

A user with low vision may need to increase the text size and spacing and some will zoom the entire content. It's important to remember that needing a larger font size is not the same as needing larger magnification. Text resizing is not the same as zoom which will resize the whole page.

**Increased Text Size**

A user should not have to scroll horizontally and vertically to read a piece of text. If a site is responsive, it's easy for the user to resize and reduce the browser width. The text should reflow into the given space and the user will only have to use vertical scroll to read the entire content.

**Zoom**

Any movement and animation can be distracting when a user is zoomed in on a page, and can sometimes dominate the whole screen.

It's easy to become lost when you are reading and not know where focus is, particularly if a focus or hover state is larger than the current view. Tooltips can be difficult to use as their content can pop up off-screen and then disappear when the user tries to scroll to reach that content. If the information displayed is important don't hide it inside hover states or tooltips.

Selecting a filter can trigger a change in the page content. But if the user has zoomed in there's a danger that this change might happen 'off-screen' and be missed. It's good practice to only action changes _after_ a submit button has been clicked to apply the filters.

#### Distinguishable Content - Colour and Contrast

Don't rely on colour alone to convey meaning. Colour blind or older users do not see colour well and text-only or limited monochrome displays will not be able to interpret information that's presented in colour only. Make sure that there is enough contrast between foreground and background colours.

#### Images

An image either adds additional context or information to content (think charts or diagrams), or it's used as an embellishment to add visual interest to a page. So first ask is this image helpful or is it purely decorative? If it's decorative it doesn't need an alt tag and should be hidden from screen readers by using alt="".

The alt tag is there to give a good idea of what's on a page if you can't see it. It's a short description of the image which should be kept simple and concise. But what it should say depends on a second question. Is this image informative or actionable?

If it's a clickable image then the alt text should describe the function instead of the image itself. For example, a company logo that links back to the homepage could have an alt tag "SheCodes homepage".

#### Multimedia

Try to provide captions and transcripts for any video or audio content so that these can be read by screen readers too. Transcript automated tooling is great at saving time, but it's still prone to errors so always check through and proofread first. Transcripts go into much more detail than closed captions by including important sound effects and other significant visual descriptions, like a door slamming, or people laughing.

An added SEO bonus is that transcripts are crawled by search bots.

### Perceivable Checks

#### Page Titles

Manual and audio checks with a screen reader.

  * The page title is an adequate and brief description of the page content
  * The page title is unique to the application and distinguishable from other pages
  * The page title is [front-loaded][4]
  * The page title is read out correctly by a screen reader
  * The page title informs the user of their current position within a set of related pages.

#### Basic Structure

Using the [Web Developer][5] toolbar

  * turn off images to show text alts
    images > replace image with alt attributes
  * turn off stylesheets
    css > disable all styles
  * linearize the page
    miscellaneous > linearize page

  * Check that the information makes sense in the order that it's shown.
  * Check each block of information has clear headings directly above the information they apply to.
  * Check alt text provides adequate information for images.

#### Distinguishable Content

Invert display colours:

  * Don't rely on colour alone to convey meaning.

Using a contrast checker:

  * Ensure sufficient contrast between foreground and background colours. Ideal is 7:1 for text. For graphics and [larger text][6] 3:1 is ok.

Check support for content resizing:

  * If text size is increased to 200%, no information should be lost. Text should reflow on smaller devices.
  * If text spacing changes (check with the [text spacing bookmarklet][7], no information should be lost. Text should reflow on smaller devices.

#### Multimedia

  * Does multimedia have alternative delivery methods - video, audio, transcripts?
  * Links to captions and transcripts should be easy to find and close to the video / audio content
  * Check that captions are shown in sync with spoken content
  * Check that people who are speaking are identified when they speak
  * Check that important sounds other than dialogue are included.

## Next Steps

I'm busy writing up Testing for Accessibility Part 2 - Operable. For those of you who are in that testing zone and don't want to stop, here’s a useful link from GDS (Government Digital Services) on [doing a basic accessibility check][8].

### References

These are based on my notes taken from the free course [An Introduction to Web Accessibility][9] and Smashing Magazine's [Front-end Accessibility Masterclass with Marcy Sutton][10].

 [2]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
 [3]: https://a11yproject.com/posts/how-to-hide-content/
 [4]: https://www.w3.org/WAI/wcag-curric/sam110-0.htm
 [5]: /accessibility-testing-tools/#web-developer
 [6]: https://developer.paciellogroup.com/blog/2012/05/whats-large-text-in-wcag-2-0-parlance/
 [7]: /accessibility-testing-tools/#text-spacing
 [8]: https://www.gov.uk/government/publications/doing-a-basic-accessibility-check-if-you-cant-do-a-detailed-one
 [9]: https://www.edx.org/course/web-accessibility-introduction
 [10]: https://smashingconf.com/online-workshops/workshops/marcy-sutton

