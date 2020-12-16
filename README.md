# Direct Links

This extension adds direct links to various Flarum actions:

- `/login` will redirect to homepage and open the Log In modal
- `/signup` will redirect to homepage and open the Sign Up modal
- `/composer` will redirect to homepage and open the new discussion composer box

Additionally, you can pass `?title=`, `?content=` and `?tag=slug` parameters to `/composer` to define the default values in the editor.
Useful for share features or bookmarklets.

If you hit `/composer` while logged out, you will be prompted for login.
If the user does anything else than log in (close the modal or register) it's possible the values in the url get lost.
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

- 

## Credits
This extension was created by a developer group called Flagrow which is no more. I think that Clark Winkelmann had a lot to do with it. I am simply forking a version of it to see if it will work. 
