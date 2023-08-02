[![Shortcut Banner](https://i.imgur.com/Y3zSXal.png)](https://www.icloud.com/shortcuts/8848769c83414b30ac0a8141151afd9e)


## Table of Contents

- [How It Works](#how-it-works)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Settings](#settings)
- [Conclusion](#conclusion)
- [Auto-Updater](#auto-updater)
- [Privacy](#privacy)
- [Credits](#credits)


## How It Works

The **Wallpaper Roulette** shortcut grabs a random wallpaper from [Unsplash](https://unsplash.com/) that precisely fits your device's resolution and sets it to your lock screen and home screen.

If you are looking for a specific type of wallpaper, you can enter keywords to get that type of wallpaper (*still random, though*). If you use multiple keywords, please note you **might not** always get relevant wallpapers. This shortcut is a wallpaper **finder**, not a *generator*, so it will try its best to find relevant results. To achieve the best results for a desired type of wallpaper, try sticking to only **one keyword**. It's *roulette* after all ¯\\_(ツ)\_/¯...

Every time you run this shortcut, it will update your device's wallpaper with a new random wallpaper from Unsplash.

Check out the [Settings](#settings) section to learn more about customization options.

_**NOTE**: Sometimes, the shortcut will fail to run due to server or on-device errors. This is normal, as the nature of the shortcut actions can sometimes bug out to unexplainable reasons. Hopefully, Apple can fix these errors in future iOS versions, but in the meanwhile, if you continue to face errors, please try restarting the **Shortcuts** app or re-running the shortcut at a later time_.


## Prerequisites

[<img src="https://i.imgur.com/cimFXJ1.png" alt="download-actions-badge" width="25%"/>](https://apps.apple.com/us/app/actions/id1586435171)


## Getting Started

1. Install everything in the [Prerequisites](#prerequisites) section.
2. Download this shortcut and run through the setup (*you can find what each setting does in the [Settings](#settings) section*).

### Automation

If you want to update your device's wallpaper on a **regular basis**, you can set up an automation to do so!

1. Open the **Shortcuts** app.
2. Select the **Automation** tab on the bottom navigation bar.
3. Tap the "**+**" button on the top right.
4. Tap on **Create Personal Automation**.
5. Select **Time of Day**.
6. Select when you want this shortcut to run and how often you want it to run. Then, tap on the **Next** button.
7. Tap on "**(+) Add Action**".
8. Type "**Run Shortcut**" in the search bar and tap on the **Run Shortcut** action in the search results.
9. Tap on semi-transparent *Shortcut* word in the **Run Shortcut*** action.
10. Search for "**Wallpaper Roulette**" and select it in the search results.
11. Tap the **Next** button on the top right.
12. Disable **Ask Before Running** and confirm again by selecting **Don't Ask**.
13. Tap **Done** on the top right.

The shortcut will now run regularly to whatever time settings you selected. If you want to use other triggers to run the wallpaper shortcut, you can explore them in the automation trigger menu.


## Settings

Here are the customizable settings you can tailor for this shortcut's use case(s).

1. **Wallpaper**
	- Select which wallpaper you would like to update.
	- By default, it is "**Wallpaper 1**".
2. **Wallpaper Location**
	- Select which location(s) you would like updated with new wallpapers.
	- By default, both **Lock Screen** and **Home Screen** are selected.
3. **Keywords**
	- Add any keywords to search for a specific type of wallpaper.
	- By default, the only keyword is *wallpaper*, meaning you will get any type of wallpaper.
	- To achieve the best results for a desired type of wallpaper, try sticking to **one additional keyword**.

---

If you want to update these settings in the future, there are two methods:

1. **Through Setup Questions**
	1. Open the **Shortcuts** app.
	2. Go to the **Wallpaper Roulette** shortcut and long press on it.
	3. Tap on **Details**.
	4. Tap on **Setup** in the navigation bar.
	5. Tap on "**Customize Shortcut...**" in the *Change Answers* section.
	6. Re-run through the setup until you are satisfied with your new settings.
	- **NOTE**: When you re-run through setup questions, it displays the default answers from when you first downloaded the shortcut.
2. **Edit the Shortcut**
	1. Open the **Shortcuts** app.
	2. Go to the **Wallpaper Roulette** shortcut and tap on the *three dots*.
	3. Scroll down to the bottom of the shortcut code.
	4. If the **Get Unsplash Image** action is not expanded, tap the *circled right arrow* on the action. Here, you can add/remove ***Keywords***.
	5. On the **Set Wallpaper Photo** action (*the very last action of the shortcut*), you change the ***Wallpaper*** and the ***Wallpaper Location***.


## Conclusion

And that's it! You have successfully set up the **Wallpaper Roulette** shortcut on your phone.

Feel free to leave any [issues](https://github.com/MrJeevs/Shortcuts/issues/new/choose) if you happen to run into unexpected errors, looking for improvements, or even let me know how it's working for you! More than happy to hear any feedback! You can also DM me on [Reddit](https://www.reddit.com/user/MisterJeevs) for feedback. If you prefer not to create an account or stay anonymous, submit your feedback through this [Google form](https://forms.gle/Amsoh4cFA8mJq1ue7).


## Auto-Updater

This shortcut is powered by [UpdateKit API](https://www.mikebeas.com/updatekit-api/v1). UpdateKit API is not another standalone shortcut updater but rather one that is integrated into the shortcut itself. This means installing another shortcut is unnecessary to check for updates! The updates come to you!

Whenever a new update is released, the next time you run the shortcut, it will prompt you to either **Install** or **Skip** the update. If you choose to **Skip** the update, the shortcut will still run as intended.


## Privacy

- *This shortcut does not scrape for any sensitive or identifying information or install any malware on your phone* ✅. *As always, I recommend my users to double-check every action this shortcut performs, as it is your responsibility to be 100% sure of what you are using*.
- *If the shortcut asks permission to run, click **Always Allow**. It will ask this from **every source** you use the shortcut from. You can remove sources from the privacy settings of the shortcut later, should you change your mind.*
- *The UpdateKit API uses your device's model and iOS version to ensure new updates are compatible with your device. If your device or iOS version is not compatible with the shortcut, future updates won't be presented to you.*


## Credits

-  Graphics made with [MediaKit](https://routinehub.co/shortcut/1911).
