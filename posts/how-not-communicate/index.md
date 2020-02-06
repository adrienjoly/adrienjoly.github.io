---
title: How not to communicate with your team
date: 2020-02-06
description: The story of three communication mistakes I made with my team, and how we resolved them. This is the script of the last talk I gave at Algolia, before leaving.
---

# How to *not* communicate with your team

Hi! I’m Adrien, from the Crawler Squad.
Today’s my last Show & Tell. This time, I’m not going to talk about Software Crafters, I promise!
I'd like to share some important lessons I learned while becoming the Tech Lead of the Crawler squad.
I’m going to tell you 3 short (but real) stories about team communication. Then, I’ll share a few tips on how to avoid making the same mistakes as me!

## *The Taboo*

Two year ago, I joined Matthieu in the Crawler squad. Matthieu had created the Crawler from scratch, 6 months prior. I had set a mission to myself: make the Crawler grow from a PoC into a customer-ready product.

So I started challenging Matthieu on how to make the Crawler “rock-solid” for the long run. After adding automated tests, I suggested removing a feature that I thought was too complex for a V1. Matthieu did not agree with me. And everytime we talked about it, he looked very passionate about that feature.

At the time, I thought that he wanted to keep that feature because he was attached to the code he wrote for it. So I tried hard to sell him the benefits of removing code despite the attachment. The dispute lasted for months. It became so big that we both avoided talking about it. So we could not agree on a decision, and we were both frustrated. Most importantly, this lack of decision was impacting other developments of the Crawler.

It took me months to understand that I was making a mistake. When Raphi became our manager and I was taking the TL role in the squad, he advised us to listen to each other’s point of view with an open mind. Without assuming anything. Without proposing alternatives.

This advice worked better than I expected. We shared our respective regrets, apologies and intentions. It was hard, but it helped us re-create trust and care between us. And after 3 discussions, I understood the vision that led Matthieu to create that feature, I agreed with it, and we finally converged to a decision that was working and motivating for both of us.

What did I learn from this story? To move forward in the same direction, we must start by taking the time to listen to each other. By understanding each other’s vision, motivations and preferences, we can converge to solutions that will be implemented with care.

## *Let's all pair!*

The following quarter, I wanted to help my team-mates grow. One was intimidated by Kubernetes maintenance. Another needed help to define an action plan for a task. And another was stuck on how to test a feature he had implemented. So I set up pair programming sessions with each of them.

With the first two ones, sitting down and tackling the issues together went great. The last one - feature testing - was more complicated. My colleague and I sat down, and I started to challenge him gently on what we wanted to test. I was struggling to get my colleague to come up with answers. I was surprised and frustrated because I knew that he was very smart. In fact, we were both frustrated. So that session was not a success.

Later, during a team building event, that colleague expressed two preferences: “I usually want to solve my problems on my own” and “if you want to ask me something specific, be straight to the point”. That explained why he did not respond to the way I challenged him!

From that day, I stopped proposing pair sessions with him. Instead, I have been giving clear and direct suggestions to him, especially when I review his Pull Requests.

What I learned from this experience is that there is no “one size fits all” way to lead a team. Everyone is different. So I must adapt my communication to each team-mate.

## *Cut short*

As the Tech Lead of my team, one of my responsibilities is to challenge the team in order to reduce the risk of outages. After identifying a point of failure, I wrote down several ideas, shared them with the team, and set up a meeting to ask for feedback and suggestions.

As I was presenting the problem to my team, one of my colleagues interrupted me because he didn’t agree with one of the points I was making. This interruption caught me off-guard. I lost the self-confidence I needed to continue my presentation and failed to deliver my message because of that. So I was frustrated and a little bit mad at my colleague for not having let me finish.

By chatting with my colleague after the meeting, I understood that the interruption was triggered by a misunderstanding that I could have avoided if I had been able to finish my intervention. My colleague did not mean harm, he just wanted to save us some time. I could have anticipated his reaction. And therefore, I should have better prepared for it.

Later, I learned a communication trick that would have avoided that situation: share my intent and expectations at the beginning of the meeting. By doing so, I could have defused the interruption by saying: “we agreed that I would welcome your feedback AFTER I’m done introducing the problem”, and then keep going.

## Learnings

In summary, these stories taught me 3 important lessons:
It’s easier to converge to decisions with my team if I take the time to really understand their ideas, and why they believe in them, rather than pushing my own.
My communication is more effective when I adapt to the individual preferences, values, drivers and triggers, for each of my collaborators.
During meetings, my interventions are more effective when I start by sharing my intent and setting expectations.

In a nutshell, it’s about getting to know your colleagues, and sharing your intent explicitly.
In the Crawler squad, we got better at this by writing Personal READMEs.

## Personal README at the rescue

What’s a Personal README? It’s a document in which you express your personal traits that may be useful for others to better communicate, collaborate and behave with you. You do that by replying to a set of personal questions.

Here are some examples:
What I think are my strengths
What people misunderstand about me
What makes me uncomfortable
What I value from others
How to communicate with me

With the Crawler team, we shared some of our answers live, in front of others, which triggered many surprises and interesting discussions.

Also, showing some vulnerability can go a long way. Examples from my Personal README:
Some people see me as a cold person. In reality, I just look very serious when I think.
Sarcasm can make me uncomfortable, because I don’t always detect it.

Writing a Personal README is also a good exercise of introspection and of empathy. It helps putting yourself in your colleague’s shoes.

Warning: before asking your whole team to do it, make sure that everybody consents and intends to do it seriously. We recommend starting with a smoother exercise, like “Madeleine de Proust”.

## Conclusion

Even if we feel like we share the same values, here at Algolia, each one of us is different.
I hope that the learnings from these stories will prevent you from making the same mistakes as me. That you will write your own Personal README. And, maybe, share it with your team!

By presenting this Show & Tell, our goal is to encourage each of you to:
Get to know your colleagues better, and listen to them with an open mind, especially if you disagree with them. Acknowledge your differences and your common ground as soon as possible.
When getting into an important conversation or meeting, make sure to adapt your communication to the recipient(s) and to express your intent and expectations. Get prepared by re-reading your recipient(s)’ Personal README before the meeting.
If you want to improve your self-awareness and calibrate expectations towards people you interact with, take the time to write your Personal README.
If you want others to better adapt their communication to you, share your Personal README with them.

If you want to go further with communicating and leading more effectively, we also recommend to learn about:
Nonviolent Communication (CNV): Observation, Feelings, Needs, Request
Assertiveness: being self-assured and confident without being aggressive, passive or manipulative.

And, if you want to know more, don’t hesitate to ask Raphi or me!

I would like to thank:
Raphi for supporting and helping me grow in my Tech Lead role, and for co-writing this talk with me;
Alex Collin for having told me about Personal README, and sharing some tips;
PeterV for helping me improve the quality of this talk;
And the crawler team for their patience and understanding while I was figuring out my communication with them. Also, for having shared their Personal README and having accepted that I tell some of our stories.

Thank you all for your attention and kindness, I wish you the best, with your colleagues and close ones!
