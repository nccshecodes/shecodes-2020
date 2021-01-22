---
date: '2018-04-17'
excerpt: >
  Documenting your code is a marmite topic, a quick google search spews forth articles either dead against the idea or all for it, there's no room for sitting on the fence.
featureImage: src/posts/2018-04-17/documenting-your-code-gratisography.png
featureImageAlt: ""
tags:
  - level up
title: Documenting your code – a luxury or a necessity?
---

## What's up Doc?

I've had to use documentation routinely over the past month. Partly because I've found myself alone in the office and partly enforced by the 'Beast from the East' and Storm Emma making remote work a necessity.{.break-left}

Most of the documentation I found was pretty useless. In my quest to remain productive working solo again, a vast amount of my time was wasted trawling through endless readme and doc files. My laptop inched ever closer to being launched out through the open window.

Code documentation is a marmite topic. A quick google search spews out articles either dead against the idea or all for it, there's no room for sitting on the fence.

Speaking as someone with a lot to learn still (and let's face it when is there not something new to learn in tech?) **good documentation isn't a luxury, it's vital.** It helps developers of any level understand how to implement packages without wasting precious time on frustrated head scratching.

## Yes, code should document itself

A popular train of thought in the _against camp_ is that you shouldn't document your code, but instead be _coding your documentation_. What exactly does that mean?

If you use meaningful, semantic names for variables and methods, if you keep your code tight so that each block performs one specific task, then yes the code becomes easier to read and understand. But it doesn't tell someone else looking at your code _why_ you chose to write your code that way.

The argument here is that documentation will be out of date pretty soon so it's a waste of time to produce it. You've already written your code so that it speaks for itself. But are you not tracking your code with version control? Are you committing your code? I'd be very surprised if your answer is no. So why not produce and update the documentation at the same time?

## Explain the 'why' of your code

Which moves on nicely to the next level of documentation, the Git commit message. Git history should in theory provide a useful reference log of how code has evolved over time. It explains what changes were made, and why.

The same principles as for self-documented code can be applied here too. It's really helpful to see branches with meaningful names created to perform a single task. It's easy to follow the story of code changes when commits have been made little and often. A well structured commit message gives context as to why the code has been created or changed this way.

Here at [Skills Matter][1] we have a set format which I've found really useful to follow. I'm already reaping the benefits as the newcomer to the platform team. I appreciate the effort that's been taken when I'm looking through the commit history to get familiar with the code base.

{% imageShortcode "src/posts/2018-04-17/what-direction-unsplash.png", "", "break-left" %}

Each commit message has a short, concise title outlining the purpose of the commit. The first part of the description describes the problem giving context to the changes being made. The rest describes how the code is structured. This is the part I really love, it's where I can discover why a previous developer chose to write the code in a particular way. It often gives background information on alternatives that were considered but rejected. I can find reference links to external resources that influenced the choices made. I learn.

But this isn't where the documentation process stops.

## Tell me how to use your code

I've heard it said many a time in software development circles, don't try to reinvent the wheel. I've got a software problem to solve, and I'm searching for a package that will help me. I've found your code, great! It looks like it will save me time, I think it'll be useful so I want to use it, fantastic. But how do I do that?

Hopefully there'll be documentation to guide me through the process. I need to know how to install it and how to use it. Mega bonus points if I find examples that clearly demonstrate the way forward. Otherwise, I may well give up and look elsewhere if that promised time saving turns out to be a false hope.

I don't want to name and shame examples where I did ditch and move on, but I do want to highlight one piece I found that did the job really well. The folks at [FontAwesome][2] truly are awesome, or their documentation certainly is. The depth of information provided is superb, from how to install, code examples, FAQs, tips and troubleshooting suggestions - they seem to have considered everything. It looks like it's updated regularly too.

##  Why bother?

This has proven to be quite a hot topic at work. It's also coincided with my colleague Scott's presentation at [LRUG][3] this month. He puts together a pretty convincing argument - [You're doing documentation wrong, and so am I.][4] If that's not enough to convince you, take a moment to read [Brad Frost's &#8216;Just'][5].

Think of the humble junior toiling hard to become a better developer. Give us a helping hand, make your code accessible, guide us in understanding how to use your code. Let us make the most of our time making, breaking and building wonderful things. Not forgetting, that appreciation of good documentation isn't just limited to juniors.

 [1]: https://skillsmatter.com/
 [2]: https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use
 [3]: http://lrug.org/
 [4]: http://bit.ly/2vnPdbJ
 [5]: http://bit.ly/2H7Op0j
