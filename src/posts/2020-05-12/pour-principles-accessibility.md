---
date: '2020-05-12'
featureImage: src/posts/2020-05-12/what-do-you-mean-jon-tyson-unsplash.jpg
featureImageAlt: What do you mean?
metaDesc: >
  I thought the POUR principles of accessibility was a typo. Yes, there's four principles. But no, it wasn't a typo and here is what POUR actually means.
socialImage: what-do-you-mean-jon-tyson-unsplash
tags:
  - level up
  - accessibility
title: Understanding the POUR principles of accessibility
---

## WCAG what?

I've a long-standing interest in accessibility, but I've never actually done anything about it. I read and poke the topic occasionally, but I've never dug deep. At first glance, it's a huge list of criteria that you have to meet in order to be accessible. There's so much knowledge needed to even begin to understand it all. What code is needed to meet those criteria? What exactly am I checking? How are assistive technologies even used? It's a minefield of too many unknowns which I have quietly backed away from.

Hey, it's 2020! Version 2.0 of the web content accessibility guidelines have been there for us to use and learn from since 2008. Yet most of us are still backing away. Not cool.

So. I have a new job and I've joined the accessibility steering group. I completed a free course [An Introduction to Web Accessibility][3] by W3C and started turning my notes into blog posts. This is the second post from those notes, and just incase you missed it, here's the [first post on the essence of accessibility][4]. Here goes...

## The Web Accessibility Guidelines

The Web Content Accessibility Guidelines (WCAG) are technical standards that define 12 to 13 guidelines between them. These guidelines are broken down into testable success criteria. There are up to 78 criteria depending on whether you are looking to meet WCAG 2.0 or WCAG 2.1.

WCAG 2.0 released in 2008, defines 12 guidelines. Each guideline is broken down into specific requirements which are then divided into three conformance levels - A, AA, and AAA. Together, these levels define 61 success criteria.

Tech has moved on considerably since WCAG 2.0 was first introduced. WCAG 2.1 is simply an updated version that introduced [an additional 17 criteria][5] to account for these changes, defining 13 guidelines and 78 success criteria in total. Released in 2018, it includes the needs of people with cognitive and learning disabilities, people with reduced vision and people with disabilities using mobile devices.

These two sets of guidelines are backward compatible. If you aim to meet WCAG 2.1, you will meet WCAG 2.0 by default. Version 2.1 does not replace but builds on top of the previous version.

These guidelines and criteria have been organised under four design principles. They are **Perceivable**, **Operable**, **Understandable** and **Robust** - otherwise known as the POUR principles of accessibility. Take a look at the quick reference for [WCAG 2.0][6] and [WCAG 2.1][7] to see how the criteria have been split under each of these headings.

## It's all about the context

Version 1.0 of the WCAG guidelines (released 1999) focussed on the techniques of web accessibility and was very HTML specific. It promoted best practice and defined what web accessibility looked like. But it didn't teach why these improvements were necessary.

webAIM gives a great example to explain the importance of [moving beyond technical accessibility.][8] We know from the guidelines that an image should have an alt attribute, but what should that text be? We could end up setting text that is neither helpful nor relevant if we don't first understand _why_ this alternative text is being provided. Images can be functional or purely decorative and this usage is key in determining what the text content should be.

Knowing _what_ is needed to make web content accessible is not enough. The POUR principles remind us to think in terms of context. The principles shift our focus to people and how they interact with digital content. The intention is that we understand _why_ accessibility matters to our **users**. We can make accessible products that are easier to use when we know _how_ these improvements help.

Let's look at the four principles.

## The POUR principles

### Perceivable

We interpret what's going on around us by using our five senses - sight, smell, sound, taste and touch. Our brain needs to receive information through our senses so that it can process and understand, or **perceive** that information.

When we access electronic content we use a combination of sight, sound and touch. Users need to be able to choose how they access content through any combination of these three senses - visual, audio or touch (via braille devices).

In this context, it is the semantic meaning and HTML structure that is important. Styling might enhance the visual presentation of the content but screen readers won't be able to _see_ this. Not all users will be able to hear audio content and will need to read a transcript. Or a user might need to read a transcript as well as watch a video to understand what's going on.

### Operable

People might use assistive technologies to access content and this isn't always going to be a keyboard and mouse. Users must be able to successfully find, navigate and interact with content by whichever means necessary. That could be a keyboard, a braille keyboard, sip and puff, screen readers and voice commands to name a few.

### Understandable

We can help users to understand the information presented by using clear and simple language. Users must also be able to understand the functionality and how to successfully complete an action. This requires consistency in how information is presented. If there are any errors, users need to have clear instruction on how to correct and move past those errors. Remember, people want to be challenged by the content itself, not by the user interface.

### Robust

People access web content using a wide variety of operating systems, browsers, media players, assistive technologies and devices. Some users will use advanced features and adopt new technologies early on. Others may turn features off, or be slower to upgrade. Regardless, all users will have an expectation that the digital products will work. This depends on how much a company is prepared to support backwards compatibility. Perhaps developing applications using progressive enhancement is a happy compromise.

## Next steps

Keep focus on the user and context, and the accessibility checklist should start to make more sense. Next up, I'm going to cover [the accessibility testing toolbag][9] I've put together to tackle that checklist of testable success criteria.

<small>Photo credit: [Jon Tyson][1] [Unsplash][2]</small>

 [1]: https://unsplash.com/@jontyson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
 [2]: https://unsplash.com/s/photos/confusion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
 [3]: https://courses.edx.org/courses/course-v1:W3Cx+WAI0.1x+3T2019/course/
 [4]: /essence-of-accessibility/
 [5]: https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/
 [6]: https://www.w3.org/WAI/standards-guidelines/wcag/20/glance/
 [7]: https://www.w3.org/WAI/standards-guidelines/wcag/glance/
 [8]: https://webaim.org/articles/pour/#beyond
 [9]: /accessibility-testing-tools/
