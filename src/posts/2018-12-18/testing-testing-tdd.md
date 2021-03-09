---
date: '2018-12-18'
excerpt: >
  My MVP which started life at bootcamp is outdated and broken. I've tried breathe some life back into it but failed to find a pulse. With no test base to reference, no documentation to speak of and a long time passing since actively working on it, I've come to appreciate the benefits of testing.
featureImage: src/posts/2018-12-18/tdd-red-green.jpg
featureImageAlt: ''
metaDesc: TDD has always been an enigma. I knew it was important but didn't understand it, choosing to put off 'til another day. Until the day when everything broke.
socialImage: tdd-red-green
tags:
  - best practice
  - level up
  - testing
title: Testing, testing TDD
---

## The importance of testing

Tests play the role of your parents, letting you know when you've done something wrong. Continuous integration is like your big brother. He knows how your parents expect you to behave and keeps an eye out so you don't overstep the mark.{.pullquote .repeated aria-hidden=true}

Test Driven Development (TDD) has always been an enigma to me. I knew it was important, everyone who is anyone says so. For those of you who don't know, TDD is an approach to software development, where a test is written before any code. [Uncle Bob][1] defines it with three rules:

1. You are not allowed to write any production code unless it is to make a failing unit test pass.

2. You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.

3. You are not allowed to write any more production code than is sufficient to pass the one failing unit test.

## A brief introduction

TDD wasn't taught at bootcamp. I say that, but that's not strictly true. We did write code to make pre-existing failing tests pass. When they refused to pass we learnt how to understand the errors in order to work out what we were doing wrong . But I didn't **write** any tests. I've remember it being said during my time at [Le Wagon][2] that "TDD is easily a bootcamp in itself". Perhaps that's why it wasn't such a focus back then when we were learning to code. In those early days I struggled to understand the concept of testing something that didn't exist. I couldn't make sense of it, let alone grasp the concepts of the new languages at the same time. TDD was something I inevitably chose to put off for another day.

## A testing time

Two years on I am the proud owner of what was a clunky but functioning rails webapp. My MVP which started life at bootcamp is now outdated and broken. I've scratched my head and tinkered trying to breathe some life back into it but failed to find a pulse. With no test base to reference, no documentation to speak of and a long time passing since actively working on it, I've decided the best course of action is to start over, but this time using a TDD approach.

But this whole 'TDD thing' has remained intimidating. Where I've previously picked up new skillsets from video training, this time I need cold, hard tangible examples as a starting point. It's taken me a good six months to reach the point where I am confident enough to take this on. Six months of unpicking and questioning existing tests that we have here at [Skills Matter][3]. I've not been able to just read some theory and whip up the perfect solution. I've need to deconstruct, examine and then put back together, modified, suped-up, customised. Pair programming has been really useful in this process. Having realtime conversations about a test as it's being written has been great and a real insight into how my colleagues think.

During this process I've experienced bad tests. Brittle tests. Expensive tests creating a ton of objects when a couple will do. Crap tests that still pass even though the code is clearly failing. There's been a lot to learn.

## How does TDD look now?

I'm not a big fan of blindly following accepted behaviour and my TDD journey is no exception. I've not looked too closely at the theory but instead chose to find my own understanding, to discover what TDD really means for the code I'm working with day to day.

Thankfully the concept is starting to make sense and I'm eager to start over with my own web app. My tests are like the stack of lego manuals I used to rescue from the kids. They're giving an idea of the intended finished product, documenting how it's expected to work. The box of lego won't build itself but the manuals guide you on the steps you need to follow to build it yourself.

It is definitely more labour intensive starting over on the beta version of my web app. The MVP raced ahead much quicker before but I think that's the big mistake I made. I was whooping at the small steps, without thinking about the bigger picture.

I'm intrigued with how this TTD approach is drawing me towards a deeper thinking into the design process before a single line of code is written. I need to know exactly what it is that I'm trying to achieve and it's not a process to rush. I've learnt that answer is needed in order to start. I'm stating my intention with each test I write. A source of truth for what the code does, how it _'should'_ work. I also know that when the time comes to revisit chunks of the code base, I'll have much more confidence this time round. I'm going to get a heads up when things start to break. That reassurance means I have the freedom to experiment and be more creative.

## Continuous Integration

Continuous Integration is the next marker on the horizon. I've had some assistance configuring Circle CI and Github to automate testing. I can now merge work with confidence knowing that the code is given a health check before being pushed out into the wild. It's satisfying seeing a row of green ticks and equally satisfying when I can predict the appearance of a red cross, I've got that pulse, I have an idea of what's going on (she says with a cheesy grin).

To quote my colleague [Francesco Renzi][4] - "Tests play the role of your parents, letting you know when you've done something wrong. Continuous integration is like your big brother he knows how your parents expect you to behave and keeps an eye out so you don't overstep the mark." I get that completely now.

## Learning through doing

Having my own project to play around with has been the best way to grips with TDD. I'm writing tests over and over and over. Feature tests are making me look at the bigger picture, what's this experience going to be, what am I expecting to happen? Unit tests are checking I'm not trying to plug in broken pieces. Setting up RSpec with Rails from scratch, adding in new dependencies line by line as and when I need to may seem tedious at times. The payoff is that I know what each line is doing and why it's there. It's all about the practice at this stage and I'm getting plenty of it.

It feels good knowing that this incarnation of TreatOut is going to have a solid foundation. An added bonus is that it's putting me in the festive spirit too, my tests are flashing red and green till the early hours. I've always loved a good puzzle book over Christmas and now I'm writing my own.

And with that I'll see you in the New Year...

[1]: http://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html
[2]: https://www.lewagon.com/london
[3]: https://skillsmatter.com/
[4]: https://github.com/rentziass
