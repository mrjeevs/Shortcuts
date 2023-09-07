[![Shortcut Banner](https://i.imgur.com/6q74a6q.png)](https://www.icloud.com/shortcuts/fa5c91f0d2de46c9af5b5b8d61b25848)


## Table of Contents

- [Motivation](#motivation)
- [How It Works](#how-it-works)
- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Conclusion](#conclusion)
- [Auto-Updater](#auto-updater)
- [Privacy](#privacy)
- [Disclaimer](#disclaimer)
- [Credits](#credits)


## Motivation

I am a competitive person and as an avid GamePigeon player, I like to keep track of scores with whoever I am playing against. To see who is the **ultimate GamePigeon champ** 👑 (*and a slight ego boost*). Before, I used to keep track of scores within each iMessage conversation using the following format: `my wins : their wins`. Over time, this score would get lost in messages, and the iMessage search bar didn't help much either.

![scorekeeping-screenshot-width-35%](https://i.imgur.com/FdG4jxT.png)

The other option is to make a Notes page and create a scoreboard table for each of my friends and track our wins there. However, the more scoreboards you had to keep track of, the uglier it would get to update, so I didn't like this option either. I've always wondered why there has never been an app for this, and maybe this is what you would call **"overkill"**, but I wanted a *really nice* way to keep track of all the scoreboards I have with my friends, and keep track of what games we were winning at. And because I am too broke to afford a MacBook to make an iOS app, here we are!


## How It Works

The **GamePigeon Scoreboard Tracker** shortcut allows you to create scoreboards with multiple friends, view those scoreboards in a nice UI, update those scoreboards with just a few taps, and so much more, all bundled into one big menu! It's really like an app and easy to use! *There's no better way to flex as a GamePigeon champ with your friends than with this shortcut.* 💪

*And here's the cool part*: all your scoreboard data is **private to you**! It's stored on your iCloud Drive, not hosted anywhere where I or anyone else can see it (*unless you decide to share it with someone*).

Below are the features you can expect from this shortcut.

### MENU

- **Create**: Create a new scoreboard with a friend, if one doesn't exist between both of you yet.
	- Create nicknames for each other on the scoreboard!
	- *Only one scoreboard per friend is allowed.*
- **View**: View the current scoreboard between you and your friend, as well as the history of your games.
	- Dates in the history table are displayed in your current time zone.
	- Sort the history table **by date**, in ascending or descending order, by tapping on the `Date` header.
- **Update**: Add a new game record to the scoreboard with your friend.
	- Records who won, at which game, and when you updated the scoreboard.
	- *Currently, you cannot delete records off a scoreboard*.
- **Invite**: Invite your friend to the scoreboard you created, if you want them to *view and update* the scoreboard on their end, too!
	- ***Please look*** at the demo video, in the [Demo](#demo) section, to know how to properly invite someone to your scoreboard (*it's not straightforward unfortunately...*).
- **Join**: Accept your friend's invitation to join their scoreboard!
	- Take a look at the demo video, in the [Demo](#demo) section, to know how to properly join someone's scoreboard.
- **Reset**: Reset the scoreboard with your friend (*back to square one*).
- **Delete**: Delete the scoreboard with your friend.
- **Settings**
	- **Get My ID**: Copy your unique ID to the clipboard.
		- Need it when your friend wants to invite you to their scoreboard.
	- **Documentation**: Navigate to this page.
	- **Change Nicknames**: Change your or your friend's nickname on the scoreboard.
	- **Update Contact**: Update either your or your friend's contact info on file.
		- Do this if you have updated either your or your friend's name/phone number, in the `Contacts` app, **after** creating the scoreboard.
		- Must have *up-to-date* contact info on file **before inviting** your friend to the scoreboard.
		- If you can't see your or your friend's profile picture in the menus, it means the contact needs to be updated on file, as well.
	- **Download**: Download a zip file of a scoreboard's files (`nicknames.json`, `scores.json`, `history.csv`) to your `Downloads` folder in iCloud Drive.
		- *This one is for my data analysts out there*. 😉


### IMPORTANT NOTES

1. The scoreboard files are being stored on your iCloud Drive, so you will need to make sure you have space for that.
2. Because the shortcut does a lot of CRUD (*create, read, update, delete*) operations on your scoreboard files, it requires **a lot** of permissions to make sure it's okay to do so (*specifically, a set of permissions for each menu option*). While it is initially annoying, the good news is as long as you tap **"Always Allow"** when the permission messages pop up, you won't be asked again in future runs. 👍
3. Before inviting your friend to join the scoreboard, I would recommend designating one of you to be the **"recorder"** for the scoreboard. This is because you both might end up accidentally recording the same game if there was no prior communication on who should update the scoreboard. And as of `v1.0.0`, there is no way to delete game records off a scoreboard.
4. If your friend has recently updated the scoreboard, it *may* take up to a minute for the changes to get to you. 
5. This shortcut is far from *perfect*, and is prone to errors (*some are irreversible*). That is, if you try to purposefully misuse the shortcut. This is because `Shortcuts` has limitations to error handling. In other words, it works **perfectly** fine if you use the shortcut as intended.


##  Demo

![simple-demo-screenshots-grid](https://i.imgur.com/eecL4aF.png)

[![invite-demo-video](https://i.imgur.com/oZM8dnX.png)](https://youtu.be/oZrbXZMC_Wc)

[![join-demo-video](https://i.imgur.com/BvfoTT3.png)](https://youtu.be/uKR0RIVEh1g)


## Prerequisites

![prerequisites-width-43%](https://i.imgur.com/BLUhcPF.png)


## Getting Started

1. Make sure you have all of the [prerequisite apps](#prerequisites) for this shortcut.
2. Install this shortcut.
3. Run the shortcut for a first-time setup.
	- It will ask you to select your contact card, so it can generate a unique ID for you.

### Make It Like An App 

You can add this shortcut to your home screen, *like an app icon*, if you prefer to use it that way.

1. Go to the `Shortcuts` app.
2. Navigate to the **GamePigeon Scoreboard Tracker** shortcut.
3. Long press on the shortcut, and tap **Details**.
4. Tap on **Add to Home Screen**.
5. You can change the shortcut icon and the shortcut name before you add it to your home screen.
	- I recommend renaming the shortcut to `GPST` to keep it short.
6. Tap **Add** on the top right of the screen.


## Conclusion

And that's it! You successfully set up the **GamePigeon Scoreboard Tracker** shortcut on your phone.

Feel free to leave any [issues](https://github.com/MrJeevs/Shortcuts/issues/new/choose) if you happen to run into unexpected errors, looking for improvements, or even let me know how it's working for you! More than happy to hear any feedback! You can also DM me on [Reddit](https://www.reddit.com/user/MisterJeevs) for feedback. If you prefer not to create an account or stay anonymous, submit your feedback through this [Google form](https://forms.gle/Amsoh4cFA8mJq1ue7).


## Auto-Updater

This shortcut is powered by [UpdateKit API](https://www.mikebeas.com/updatekit-api/v1). UpdateKit API is not another standalone shortcut updater but rather one that is integrated into the shortcut itself. This means installing another shortcut is unnecessary to check for updates! The updates come to you!

The Auto-Updater will only check half the time whether there is a new update. If your device is offline, the Auto-Updater will not run at all. It checks this by verifying your device's current IP address. In other words, if your device has an IP address, it means you are connected to the Internet.

Whenever a new update is received, it will prompt you to either **Install** or **Skip** the update. If you choose to **Skip** the update, the shortcut will still run as intended.


## Privacy

- *This shortcut does not scrape for any sensitive or identifying information or install any malware on your phone* ✅. *As always, I recommend my users to double-check every action this shortcut performs, as it is your responsibility to be 100% sure of what you are using*.
- *If the shortcut asks for permissions to run, tap **Always Allow**. It will ask this for different shortcut actions that are used in the shortcut. You can remove these permissions from the privacy settings of the shortcut later, should you change your mind.*
	- *Here is a [list of all permissions](https://i.imgur.com/dbhc0be.jpg) required to run this shortcut.*
- *The UpdateKit API uses your device's model and OS version to ensure new updates are compatible with your device. If your device or OS version is not compatible with the shortcut, future updates won't be presented to you.*


## Disclaimer

*The **GamePigeon Scoreboard Tracker** shortcut is an independent and personal fan project developed by **MrJeevs**. This shortcut is not affiliated, associated, endorsed, or sponsored by the official GamePigeon app or its creator. Any reference to GamePigeon or its trademarks is purely for descriptive purposes.*

*The **GamePigeon Scoreboard Tracker** shortcut is designed to provide users with a convenient way to keep track of scores and game outcomes while playing GamePigeon games with friends. The development and maintenance of this shortcut are solely the responsibility of **MrJeevs**, and it operates separately from the official GamePigeon app.*

*Please note that this disclaimer is intended for informational purposes only and may be subject to updates or changes as needed.*


## Credits

-  Graphics made with [MediaKit](https://routinehub.co/shortcut/1911).
- Screenshots made with [Screenshot Framer](https://routinehub.co/shortcut/8067/).
- Menu icons provided by [Flaticon](https://www.flaticon.com/).
- [@gluebyte](https://routinehub.co/user/gluebyte): For helping me with native UUID generation and dynamically converting CSV data to an HTML table.
