/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'credit-card': '&#xeb79;',
            'money5': '&#xeb79;',
            'location': '&#xeb8e;',
            'map-marker': '&#xeb8e;',
            'location2': '&#xeb8f;',
            'map-marker2': '&#xeb8f;',
            'mail2': '&#xeb90;',
            'contact2': '&#xeb90;',
            'mail3': '&#xeb91;',
            'contact3': '&#xeb91;',
            'mail4': '&#xeb92;',
            'contact4': '&#xeb92;',
            'mail5': '&#xeb93;',
            'contact5': '&#xeb93;',
            'google': '&#xeb94;',
            'brand2': '&#xeb94;',
            'google2': '&#xeb95;',
            'brand3': '&#xeb95;',
            'google3': '&#xeb96;',
            'brand4': '&#xeb96;',
            'hangouts': '&#xeb97;',
            'brand8': '&#xeb97;',
            'whatsapp': '&#xeb98;',
            'brand13': '&#xeb98;',
            'twitch': '&#xeb99;',
            'brand23': '&#xeb99;',
            'github': '&#xeb9a;',
            'brand40': '&#xeb9a;',
            'wordpress': '&#xeb9b;',
            'brand44': '&#xeb9b;',
            'joomla': '&#xeb9c;',
            'brand45': '&#xeb9c;',
            'tux': '&#xeb9d;',
            'brand52': '&#xeb9d;',
            'android': '&#xeb9e;',
            'brand55': '&#xeb9e;',
            'windows': '&#xeb9f;',
            'brand56': '&#xeb9f;',
            'windows8': '&#xeba0;',
            'brand57': '&#xeba0;',
            'skype': '&#xeba1;',
            'brand60': '&#xeba1;',
            'html-five': '&#xeba2;',
            'w3c': '&#xeba2;',
            'html-five2': '&#xeba3;',
            'w3c2': '&#xeba3;',
            'css3': '&#xeba4;',
            'w3c3': '&#xeba4;',
            'git': '&#xeba5;',
            'brand80': '&#xeba5;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
