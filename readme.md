# Rue89 Open edX Theme

Open edX responsive theme using [Bootstrap](http://getbootstrap.com/), based on the [IONISx edx-theme](https://github.com/IONISx/edx-theme/)

## Developing/customizing this theme

The theme currently contains Less files and Sass files. The Less files don't match with their
compiled versions, and the theme won't work properly if you rebuild them (this needs to be
fixed).

So for now, what you need to do is:

1. Install [sassc](https://github.com/sass/sassc) if you don't have it already (on Mac, if you use Homebrew, just type `brew install sassc`).
2. Edit the Sass files only (in `src/sass/`)
3. Compile the Sass files using `sassc -m src/sass/upian.scss lms/static/css/rue89.css`

### Devstack usage

1. Clone this repo into the existing "themes" folder on your host computer (usually this is a
subfolder of your devstack folder). Then rename this folder from `rue89-theme` to `rue89`
(important).
2. Start your devstack, and in `~/lms.env.json`, find the `FEATURES` section and set `"ENABLE_COMPREHENSIVE_THEMING": true`,
   find the `"DEFAULT_SITE_THEME"` setting and set it to `"rue89"`, and add `"/edx/app/edxapp/themes"` to the list of `COMPREHENSIVE_THEME_DIRS`.

### Production environment

As said earlier, do not run `npm install` nor `bower install`.

Just drop the files into `/edx/edxapp/themes/rue89` using your deployment tools.
If you’re using Open edX’s [configuration ansible playbooks](github.com/edx/configuration), you’ll just need to set

```yml
edxapp_theme_source_repo: https://github.com/rue89-tech/edx-theme.git
edxapp_theme_version: your-tag
edxapp_theme_name: rue89
edxapp_use_custom_theme: true
```

See Open edX’s documentation on [custom theming](https://github.com/edx/edx-platform/wiki/Custom-Theming) for more
information.

## License

[AGPL](http://en.wikipedia.org/wiki/Affero_General_Public_License)
