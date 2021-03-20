# BlockAllSteamInvites:

Steam script to block friend requests:
* Allows user specific value to block all users under that value.
* Able to block only private profiles.
* Able to block only VAC or Trading banned accounts.
* Able to block non-setup accounts.
* Able to block accounts with bad comments (-rep, scammer, bot and phisher). (suggested by EnricoBara)
* Double clicking a function will force the call of the function on page refresh. (suggested by EnricoBara)

If you find any bugs or issues or have helpful advice please add them [here](https://github.com/AndrewParkes/BlockAllSteamInvites/issues).

# Features:

![added buttons and locations](http://i.imgur.com/LKJTmTL.png)
* All the added buttons Block Private,  Block Banned,  Block Non-Setup and Block level [0]
* Highlighted items are items that have been double clicked and will be called on page refresh

# Installation:

**Google Chrome:** You will need to install this script using the [Tampermonkey extension](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo). This way the script should be able to run nicely and you will also benefit from automatic updates when new version are available.

**Firefox:** You will obviously need the [Greasemonkey addon](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) to be able to install and use this script. If you are using Firefox 30+ you need to make sure you use Greasemonkey version 2.2+ or the script won't work.

# Future additions:

Being able to block only:

* Accounts with no items in their inventory.
* Accounts with no games.
* Account with very few hours being active.
* Account with very few game hours.
* Bot ban that looks at multiple pieces of information to decide if a user is a bot. (will implement when all above has been completed)

Thanks Hope you like it :D

# Bugs

* Some errors do appear in the console but do not affect functionality(Restart browser to clear them)
* Processing users is a little slow at time due to the number of users in your list and number of functions being called
* Seems that at times in 0.6 and later, nothing happens. Please reopen the web browser to fix it
* Loading may be slow if you have a lot of user requests (want to make functions more efficient)
* Blocking bad comment users has not been fully tested

If you find any bugs or issues or have helpful advice please add them [here](https://github.com/AndrewParkes/BlockAllSteamInvites/issues).
