# Gitit Bootstrap Theme

Typical but sleek Bootstrap theme for [Gitit](https://github.com/gjm/gitit/).

Depends on following components.

-  JavaScript from [jQuery 3.3.1](https://jquery.com/).
-  JavaScript & Stylesheet from [Bootstrap 4.1.1](https://getbootstrap.com/).
-  Icons from [Fontawesome 5.1.0](https://fontawesome.com/).
-  Default logo from [Wiki Commons](https://commons.wikimedia.org/wiki/File:Lambda_lc.svg).

Some scripts or stylesheets are derived from the original one.

## Screenshots

| Feature | Original | Gitit Bootstrap Theme |
|---|:---:|:---:|
| Desktop Home | ![Screenshot](doc/img/screenshot-desktop-home-original.png) | ![Screenshot](doc/img/screenshot-desktop-home.png) |
| Edit Preview | ![Screenshot](doc/img/screenshot-desktop-edit-preview-original.png) | ![Screenshot](doc/img/screenshot-desktop-edit-preview.png) |
| Index | ![Screenshot](doc/img/screenshot-desktop-index-original.png) | ![Screenshot](doc/img/screenshot-index.png) |
| Mobile Home | ![Screenshot](doc/img/screenshot-mobile-home-original.png) | ![Screenshot](doc/img/screenshot-mobile-home.png) |

## Install

    $ cd path/to/your-gitit-dir
    $ mv static{,.bak}
    $ mv templates{,.bak}
    $ git clone https://github.com/t13a/gitit-bootstrap-theme
    $ gitit-bootstrap-theme/src/build.sh
    ...
    $ cp -r gitit-bootstrap-theme/src/{static,templates} .

Then restart Gitit.

## Status

TODO
