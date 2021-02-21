---
date: '2020-05-23'
excerpt: >
  There's a lot of tools out there to test accessibility - browser extensions, bookmarklets and apps all designed to make testing accessibility easier. Here's a short list of the tools that I've found most useful.
featureImage: src/posts/2020-05-23/tools.jpg
featureImageAlt: ''
metaDesc: There's many tools available to test accessibility - browser extensions, bookmarklets and apps all designed to make it easier. Here's a short list of my favourites.
metaTitle: Accessibility Testing Tool Bag
permalink: /blog/accessibility-testing-tools/index.html
tags:
  - level up
  - accessibility
title: The accessibility testing tool bag
---

## Tools of the trade

An accessibility testing tool bag can soon become pretty full. There's a lot of tools out there to test accessibility - browser extensions, bookmarklets and apps all designed to make testing accessibility easier. However, and this is really important to note - **automated testing will not pick up every error**. You can expect it to find somewhere between 30% - 50% of accessibility issues, depending on the page content and features.{.break-left}

If you're testing for accessibility be prepared to roll up your sleeves for some good old fashioned manual testing. That will involve having to adjust the accessibility settings on your laptop or mobile from time to time. But approach this with caution and turn the settings back when you're done. Don't repeat my mistake and wake up to a mobile stuck in zoom mode. It's easier than you'd think to accidentally call the emergency services in panicked tapping frenzy attempting to get a phone screen back to normal. It was not my finest moment.

Here's a short list of the tools that I've found most useful.

## Resources

### Before and After Demo Site

The [Introduction to Web Accessibility][1] course provided a link to W3C' s [before and after demo][2] site. This is a really useful practice to explore the problems of an inaccessible site, play around with the testing tools, and learn from the fixes implemented to make the site accessible.

### a11y Support

[a11ysupport.io][3] is an open source accessibility equivalent of CanIUse?

## Browser extensions

### Axe

The [Axe][4] chrome extension once installed is run from inside the chrome developer tools by navigating to the Axe tab. It carries out multiple web accessibility checks for WCAG 2 and Section 508. It won't detect all errors, but it does work to deliver zero false positives.

### High Contrast

This [High Contrast][5] extension makes it easy to quickly increase contrast or invert colours. The same effect can be achieved from within the system settings for your laptop/desktop.

### Lighthouse

[Lighthouse][6] is an open source automated tool that runs several audit checks on performance, accessibility, progressive web apps and SEO. I use it from within the Chrome dev tools but it can also be run from the command line.

### WAVE

[WAVE][7] is a useful tool that carries out multiple web accessibility checks on a page. It won't catch everything but their goal is to not give false positives. Watch the WAVE [webinar on what's new and what's coming][8] for more information.

<h3 id="web-developer">Web Developer</h3>

The [Web Developer][9] browser extension is available for Chrome, Firefox and Opera and will runs on Windows, macOS and Linux.

#### Useful checks:

To check the structure of a page -

  * Turn off images to show text alts
    images > replace image with alt attributes
  * Turn off stylesheets
    css > disable all styles
  * Linearize the page
    miscellaneous > linearize page.

### Zoom Text Only

[Zoom text only][10] pretty much does what it says. Zooms text whilst leaving images untouched.

## Applications

### Contrast Checker

The [Contrast Checker][11] tool is useful to double-check colour contrast ratios on a granular level for example when building out individual components. However, it's easier to check all the elements at once using the WAVE or Axe browser extensions.

## Javascript

To install a javascript bookmarklet, first make sure you have your browser bookmarks bar visible, then drag the bookmarket link up to the bookmarks bar.

<h3 id="text-spacing">Text spacing</h3>

To use this <a href="javascript:(function(){s%20=%20document.createElement(%22style%22)%3Bs.setAttribute(%22type%22%2C%22text%2Fcss%22)%3Bt%3Ddocument.createTextNode(%22*%20%7Bline-height%3A%201.5!important%3B%20letter-spacing%3A.12em!important%3B%20word-spacing%3A%20.16em%20!important%3B%7D%20p%7Bmargin-bottom%3A%202em!important%3B%20%7D%22)%3Bs.appendChild(t)%3Bh%20%3D%20document.getElementsByTagName(%22head%22)%5B0%5D%3Bh.appendChild(s)%3Bvoid(0)%3B})();">Text Spacing</a> bookmarklet, visit a site and then click the link in your bookmarks bar. It uses CSS to apply the following text transformations:

  * Ensures the margin spacing between two paragraphs is 2 times the font size
  * Adjusts the line height to 1.5 times the font size
  * Adjusts the letter spacing to 0.12 times the font size
  * Adjusts the word spacing to 0.16 times the font size.

The CSS will be temporarily applied to the page. You can clear the settings by refreshing the browser.

### **Focus Debug**

<a href="javascript:(function(){if(window._activeElInterval){clearInterval(window._activeElInterval);delete window._activeElInterval;}else{var activeEl;window._activeElInterval=setInterval(function(){var currentActiveEl=document.activeElement;if(currentActiveEl!==activeEl){activeEl=currentActiveEl;console.log(activeEl);}},200);}})();">Focus debug</a> is useful to work out what element has focus when debugging javascript focus management or missing visual focus styling. It logs all the elements that you have set focus on as you tab through a page. Great for keyboard testing when focus disappears, you can use the console to keep track of where you are.

## Manual testing

Just a couple more notes. I mentioned manual testing at the start.


<h3 id="keyboard-only"> Using a keyboard only</h3>

First, enable keyboard navigation to all controls

  * System prefs > keyboard > shortcuts > select “all controls”

Then click in the address bar and stop using the mouse.

  * Tab – to move forward through elements
  * Shift + tab – to move back through elements
  * Arrow keys – to move within elements.

### Screen readers

For now, I'm using the native macOS VoiceOver. After having read an accessibility report that listed findings relevant to NVDA I am planning to set up a windows virtual environment so I can also test with NVDA on a mac. I'll document that here when I do it.

### Testing on a mobile device

#### iOS VoiceOver

  * To activate VoiceOver
    Settings > Accessibility > VoiceOver
  * To activate the accessibility shortcut menu
    Settings > Accessibility > General > Accessibility Shortcuts
    Triple click the side button (home button on older devices) to toggle accessibility voice over and zoom.

To navigate your mobile with VoiceOver turned on

  * **Explore by touch:** tap around the screen with one finger to explore a page
  * **Gesture navigation:** swipe left or right with a single finger to move from one element to the next in sequence
  * **Focus on an element:** single tap selects and sets focus on an element so it is announced
  * **Activate an element:** double-tap a single finger to open selected elements - links, press buttons.

Using the rotor to navigate

  * rotate two fingers clockwise or anticlockwise to select the Rotor settings.
  * **Gesture navigation with rotor:** swipe up or down to jump between elements.

**Screen Curtain** turns off your display. Quickly triple tap with three fingers to turn on or off. If the Zoom feature is in use, tap four times.

#### Android TalkBack

**1. Switch Talkback on and off**

  * To activate TalkBack
    Settings > Accessibility > TalkBack
    Make sure the device volume is turned up as TalkBack doesn’t automatically adjust the volume if muted.
  * To activate the accessibility shortcut key
    Settings > Accessibility > Accessibility shortcut
    Press and hold the Power button until you hear a sound or feel a vibration or touch and hold two fingers on the screen until you hear spoken confirmation.

To navigate your mobile with TalkBack turned on

  * **Explore by touch:** drag your finger over the screen to have TalkBack describe the items under your finger.
  * **Gesture navigation:** swipe left or right with a single finger to move from one element to the next in sequence.
  * **Focus on an element:** single tap selects and sets focus on an element so it is announced.
  * **Activate an element:** double-tap a single finger to open selected elements - links, press buttons.

## Next Steps

All tooled up and ready to test? Move on to [Testing for Accessibility Part 1 - Perceivable][14]. No excuse not to grab your accessibility tool bag and get cracking.

<small>Image by Ryan McGuire <a href="https://twitter.com/Gratisography">@gratisography</a></small>

 [1]: https://www.edx.org/course/web-accessibility-introduction
 [2]: https://www.w3.org/WAI/demos/bad/
 [3]: https://a11ysupport.io/
 [4]: https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd
 [5]: https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph?hl=en
 [6]: https://developers.google.com/web/tools/lighthouse
 [7]: https://wave.webaim.org/
 [8]: https://www.youtube.com/watch?v=EJBdE0nZfko
 [9]: https://chrispederick.com/work/web-developer/
 [10]: https://chrome.google.com/webstore/detail/zoom-text-only/jamhfhbppcmkgghlkeieococonlbppjg
 [11]: https://webaim.org/resources/contrastchecker/
 [14]: /blog/testing-accessibility-perceivable-principle/
