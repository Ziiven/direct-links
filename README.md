# Direct Links

This extension adds direct links to various Flarum actions:

- `/login` will redirect to homepage and open the Log In modal
- `/signup` will redirect to homepage and open the Sign Up modal
- `/composer` will redirect to homepage and open the new discussion composer box

Additionally, you can pass `?title=`, `?content=` and `?tag=slug` parameters to `/composer` to define the default values in the editor.
This is useful for share features or bookmarklets.

If you hit `/composer` while logged out, you will be prompted for login.
If the user does anything else other than log in (close the modal or register) it's possible the values in the url will get lost.
The user will have to load the original `/composer` url again to get those values back.

## Installation

```bash
composer require zerosonesfun/direct-links
```

## Updating

```bash
composer update zerosonesfun/direct-links
php flarum migrate
php flarum cache:clear
```

## Links

- [Github](https://github.com/zerosonesfun/direct-links/)

## Credits
Original author: Clark Winkelmann
