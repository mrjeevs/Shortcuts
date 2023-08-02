[![Shortcut Banner](https://i.imgur.com/nmtlL1m.png)](https://www.icloud.com/shortcuts/bc8b8092809e4c60b32f1207bcc34fd8)


## Table of Contents

- [Motivation](#motivation)
- [How It Works](#how-it-works)
- [Demo](#demo)
- [Conclusion](#conclusion)
- [Auto-Updater](#auto-updater)
- [Privacy](#privacy)
- [Credits](#credits)


## Motivation
Setup Questions in Shortcuts is an essential feature for any shortcut developer to utilize, as it presents a friendly UI and prompts the user to insert information, in order for the shortcut to run smootly (*or skip the setup entirely*). Not only that, but setup questions is a great way to let users to customize the shortcut, too, if it is configurable! The only downside is setup questions are **NOT** multi-line (*which makes reading the question/prompt horrible*)!!! The editor doesn't have an *Enter* key when you go to type your question and removes all newlines, if you try to paste some paragraphed text in.

Let's say you want to explain your shortcut in detail before the user starts using it. You type a couple of paragraphs, copy, and paste the question/prompt into the setup question editor. But, it ends up looking like the left-side (*this is no bueno*), when in reality you want it to look like the right-side (*pssst...that's what my shortcut does*): 

![Shortcut Screenshots](https://i.imgur.com/DQoZuTe.jpg)

Since my [post on Reddit](https://www.reddit.com/r/shortcuts/comments/zluvtf/adding_line_breaks_inside_shortcut_setup_questions/), it's been frustrating that there has been no good solution to this, as I've been told this has been a bug since *iOS 15*. Well, that all changes today with my shortcut that solves this very issue.


## How It Works
1. When you first run the shortcut, you can either type your setup question/prompt in the text box or it'll automatically paste from your clipboard. 
	- *Make sure to have **at least one** newline between your paragraphs, otherwise the shortcut won't know what a paragraph is.*
2. Then, select the number of line breaks you want between every paragraph (*by default, it's 2. In other words, this means "one line gap" between each paragraph*).
3. Let the shortcut do its magic and voilà, the multi-line setup question is copied to your clipboard!
	- *What it is actually doing, under the hood, is adding a bunch of different [empty whitespace characters](https://qwerty.dev/whitespace/) until the requested line breaks are "formed" between paragraphs*.

After running the shortcut, paste your clipboard into the setup question editor, and see how it looks afterwards!


##  Demo
[![](https://i.imgur.com/c1fBQZR.png)](https://youtube.com/shorts/qibEJZowjqg?feature=share)


## Conclusion
And, that's it! Once you've installed the **Insert Line Breaks for Setup Questions** shortcut on your phone, you're good to go!

Feel free to leave any [issues](https://github.com/MrJeevs/Shortcuts/issues/new/choose) if you happen to run into unexpected errors, looking for improvements, or even let me know how it's working for you! More than happy to hear any type of feedback!


## Auto-Updater
This shortcut is powered by [UpdateKit API](https://www.mikebeas.com/updatekit-api/v1). UpdateKit API is not another standalone shortcut updater, rather one that is integrated in the shortcut itself. This means there is no need to install another shortcut to check for updates! The updates come to you!

Whenever a new update is released, the next time you run the shortcut, it will prompt you to either **Install** or **Skip** the update. If you choose to **Skip** the update, the shortcut will still run as intended.


## Privacy
- *This shortcut does not scrape for any sensitive or identifying information or install any sort of malware on your phone* ✅. *As always, I recommend my users to double check every action this shortcut performs, as it is your responsibility to be 100% sure of what you are using*.
- *If the shortcut asks you permission to run, just click **Always Allow**. It will ask this from **every source** you use the shortcut from. You can remove sources from the privacy settings of the shortcut later, should you choose to change your mind.*
- *The UpdateKit API uses your device's model and iOS version to ensure new updates are compatible with your device. If your device and/or iOS version are not compatible with the shortcut, future updates won't be presented to you.*


## Credits
- Banner made with [MediaKit](https://routinehub.co/shortcut/1911).
- Screenshots made with [Screenshot Framer](https://routinehub.co/shortcut/8067/).
