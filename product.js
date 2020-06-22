//<![CDATA[


$(function() {
    $('#main-menu')['each'](function() {
        var _0xfbd6x2 = $(this)['find']('.LinkList ul > li')['children']('a'),
            _0xfbd6x3 = _0xfbd6x2['length'];
        for (var _0xfbd6x4 = 0; _0xfbd6x4 < _0xfbd6x3; _0xfbd6x4++) {
            var _0xfbd6x5 = _0xfbd6x2['eq'](_0xfbd6x4),
                _0xfbd6x6 = _0xfbd6x5['text']();
            if (_0xfbd6x6['charAt'](0) !== '_') {
                var _0xfbd6x7 = _0xfbd6x2['eq'](_0xfbd6x4 + 1),
                    _0xfbd6x8 = _0xfbd6x7['text']();
                if (_0xfbd6x8['charAt'](0) === '_') {
                    var _0xfbd6x9 = _0xfbd6x5['parent']();
                    _0xfbd6x9['append']('<ul class="sub-menu m-sub"/>')
                }
            };
            if (_0xfbd6x6['charAt'](0) === '_') {
                _0xfbd6x5['text'](_0xfbd6x6['replace']('_', ''));
                _0xfbd6x5['parent']()['appendTo'](_0xfbd6x9['children']('.sub-menu'))
            }
        };
        for (var _0xfbd6x4 = 0; _0xfbd6x4 < _0xfbd6x3; _0xfbd6x4++) {
            var _0xfbd6xa = _0xfbd6x2['eq'](_0xfbd6x4),
                _0xfbd6xb = _0xfbd6xa['text']();
            if (_0xfbd6xb['charAt'](0) !== '_') {
                var _0xfbd6xc = _0xfbd6x2['eq'](_0xfbd6x4 + 1),
                    _0xfbd6xd = _0xfbd6xc['text']();
                if (_0xfbd6xd['charAt'](0) === '_') {
                    var _0xfbd6xe = _0xfbd6xa['parent']();
                    _0xfbd6xe['append']('<ul class="sub-menu2 m-sub"/>')
                }
            };
            if (_0xfbd6xb['charAt'](0) === '_') {
                _0xfbd6xa['text'](_0xfbd6xb['replace']('_', ''));
                _0xfbd6xa['parent']()['appendTo'](_0xfbd6xe['children']('.sub-menu2'))
            }
        };
        $('#main-menu ul li ul')['parent']('li')['addClass']('has-sub');
        $('#main-menu .widget')['addClass']('show-menu')
    });
    $('#main-menu-nav')['clone']()['appendTo']('.mobile-menu');
    $('.mobile-menu .has-sub')['append']('<div class="submenu-toggle"/>');
    $('.mobile-menu ul > li a')['each'](function() {
        var _0xfbd6xf = $(this),
            _0xfbd6x10 = _0xfbd6xf['attr']('href')['trim'](),
            _0xfbd6x11 = _0xfbd6x10['toLowerCase'](),
            _0xfbd6x12 = _0xfbd6x10['split']('/'),
            _0xfbd6x13 = _0xfbd6x12[0];
        if (_0xfbd6x11['match']('mega-menu')) {
            _0xfbd6xf['attr']('href', '/search/label/' + _0xfbd6x13 + '?&max-results=' + postPerPage)
        }
    });
    $('.mobile-menu-toggle')['on']('click', function() {
        $('body')['toggleClass']('nav-active')
    });
    $('.mobile-menu ul li .submenu-toggle')['on']('click', function(_0xfbd6xf) {
        if ($(this)['parent']()['hasClass']('has-sub')) {
            _0xfbd6xf['preventDefault']();
            if (!$(this)['parent']()['hasClass']('show')) {
                $(this)['parent']()['addClass']('show')['children']('.m-sub')['slideToggle'](170)
            } else {
                $(this)['parent']()['removeClass']('show')['find']('> .m-sub')['slideToggle'](170)
            }
        }
    });
    $('.show-search')['on']('click', function() {
        $('#nav-search, .mobile-search-form')['fadeIn'](250)['find']('input')['focus']()
    });
    $('.hide-search')['on']('click', function() {
        $('#nav-search, .mobile-search-form')['fadeOut'](250)['find']('input')['blur']()
    });
    $('.Label a, a.b-label, a.post-tag')['attr']('href', function(_0xfbd6xf, _0xfbd6x14) {
        return _0xfbd6x14['replace'](_0xfbd6x14, _0xfbd6x14 + '?&max-results=' + postPerPage)
    });
    $('.avatar-image-container img')['attr']('src', function(_0xfbd6xf, _0xfbd6x4) {
        _0xfbd6x4 = _0xfbd6x4['replace']('/s35-c/', '/s45-c/');
        _0xfbd6x4 = _0xfbd6x4['replace']('//img1.blogblog.com/img/blank.gif', '//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png');
        return _0xfbd6x4
    });
    $('.emoji-toggle')['on']('click', function() {
        $('#emoji-box')['slideToggle'](170)
    });
    $('.comment-content')['each'](function() {
        var _0xfbd6x15 = $(this);
        _0xfbd6x15['replaceText']('(y)', '<span class=\'sora-moji mj-0\'/>');
        _0xfbd6x15['replaceText'](':)', '<span class=\'sora-moji mj-1\'/>');
        _0xfbd6x15['replaceText'](':(', '<span class=\'sora-moji mj-2\'/>');
        _0xfbd6x15['replaceText']('hihi', '<span class=\'sora-moji mj-3\'/>');
        _0xfbd6x15['replaceText'](':-)', '<span class=\'sora-moji mj-4\'/>');
        _0xfbd6x15['replaceText'](':D', '<span class=\'sora-moji mj-5\'/>');
        _0xfbd6x15['replaceText']('=D', '<span class=\'sora-moji mj-6\'/>');
        _0xfbd6x15['replaceText'](':-d', '<span class=\'sora-moji mj-7\'/>');
        _0xfbd6x15['replaceText'](';(', '<span class=\'sora-moji mj-8\'/>');
        _0xfbd6x15['replaceText'](';-(', '<span class=\'sora-moji mj-9\'/>');
        _0xfbd6x15['replaceText']('@-)', '<span class=\'sora-moji mj-10\'/>');
        _0xfbd6x15['replaceText'](':P', '<span class=\'sora-moji mj-11\'/>');
        _0xfbd6x15['replaceText'](':o', '<span class=\'sora-moji mj-12\'/>');
        _0xfbd6x15['replaceText'](':>)', '<span class=\'sora-moji mj-13\'/>');
        _0xfbd6x15['replaceText']('(o)', '<span class=\'sora-moji mj-14\'/>');
        _0xfbd6x15['replaceText'](':p', '<span class=\'sora-moji mj-15\'/>');
        _0xfbd6x15['replaceText']('(p)', '<span class=\'sora-moji mj-16\'/>');
        _0xfbd6x15['replaceText'](':-s', '<span class=\'sora-moji mj-17\'/>');
        _0xfbd6x15['replaceText']('(m)', '<span class=\'sora-moji mj-18\'/>');
        _0xfbd6x15['replaceText']('8-)', '<span class=\'sora-moji mj-19\'/>');
        _0xfbd6x15['replaceText'](':-t', '<span class=\'sora-moji mj-20\'/>');
        _0xfbd6x15['replaceText'](':-b', '<span class=\'sora-moji mj-21\'/>');
        _0xfbd6x15['replaceText']('b-(', '<span class=\'sora-moji mj-22\'/>');
        _0xfbd6x15['replaceText'](':-#', '<span class=\'sora-moji mj-23\'/>');
        _0xfbd6x15['replaceText']('=p~', '<span class=\'sora-moji mj-24\'/>');
        _0xfbd6x15['replaceText']('x-)', '<span class=\'sora-moji mj-25\'/>');
        _0xfbd6x15['replaceText']('(k)', '<span class=\'sora-moji mj-26\'/>')
    });
    $('.author-description a')['each'](function() {
        $(this)['attr']('target', '_blank')
    });
    $('.post-nav')['each'](function() {
        var _0xfbd6x16 = $('a.prev-post-link')['attr']('href'),
            _0xfbd6x17 = $('a.next-post-link')['attr']('href');
        $['ajax']({
            url: _0xfbd6x16,
            type: 'get',
            success: function(_0xfbd6x18) {
                var _0xfbd6x19 = $(_0xfbd6x18)['find']('.blog-post h1.post-title')['text']();
                $('.post-prev a .post-nav-inner p')['text'](_0xfbd6x19)
            }
        });
        $['ajax']({
            url: _0xfbd6x17,
            type: 'get',
            success: function(_0xfbd6x1a) {
                var _0xfbd6x19 = $(_0xfbd6x1a)['find']('.blog-post h1.post-title')['text']();
                $('.post-next a .post-nav-inner p')['text'](_0xfbd6x19)
            }
        })
    });
    $('.post-body strike')['each'](function() {
        var _0xfbd6xf = $(this),
            _0xfbd6x11 = _0xfbd6xf['text']();
        if (_0xfbd6x11['match']('left-sidebar')) {
            _0xfbd6xf['replaceWith']('<style>.item #main-wrapper{float:left}.item #sidebar-wrapper{float:right}</style>')
        };
        if (_0xfbd6x11['match']('right-sidebar')) {
            _0xfbd6xf['replaceWith']('<style>.item #main-wrapper{float:left}.item #sidebar-wrapper{float:right}</style>')
        };
        if (_0xfbd6x11['match']('full-width')) {
            _0xfbd6xf['replaceWith']('<style>.item #main-wrapper{width:100%}.item #sidebar-wrapper{display:none}</style>')
        }
    });
    $('#main-wrapper, #sidebar-wrapper')['each'](function() {
        if (fixedSidebar == true) {
            $(this)['theiaStickySidebar']({
                additionalMarginTop: 30,
                additionalMarginBottom: 30
            })
        }
    });
    $('.back-top')['each'](function() {
        var _0xfbd6xf = $(this);
        $(window)['on']('scroll', function() {
            $(this)['scrollTop']() >= 100 ? _0xfbd6xf['fadeIn'](250) : _0xfbd6xf['fadeOut'](250)
        }), _0xfbd6xf['click'](function() {
            $('html, body')['animate']({
                scrollTop: 0
            }, 500)
        })
    });
    $('#main-menu #main-menu-nav li')['each'](function() {
        var _0xfbd6x1b = $(this),
            _0xfbd6x10 = _0xfbd6x1b['find']('a')['attr']('href')['trim'](),
            _0xfbd6xf = _0xfbd6x1b,
            _0xfbd6x11 = _0xfbd6x10['toLowerCase'](),
            _0xfbd6x12 = _0xfbd6x10['split']('/'),
            _0xfbd6x13 = _0xfbd6x12[0];
        _0xfbd6x32(_0xfbd6xf, _0xfbd6x11, 4, _0xfbd6x13)
    });
    $('#hot-section .widget-content')['each'](function() {
        var _0xfbd6xf = $(this),
            _0xfbd6x10 = _0xfbd6xf['text']()['trim'](),
            _0xfbd6x11 = _0xfbd6x10['toLowerCase'](),
            _0xfbd6x12 = _0xfbd6x10['split']('/'),
            _0xfbd6x13 = _0xfbd6x12[0];
        _0xfbd6x32(_0xfbd6xf, _0xfbd6x11, 5, _0xfbd6x13)
    });
    $('.common-widget .widget-content')['each'](function() {
        var _0xfbd6xf = $(this),
            _0xfbd6x10 = _0xfbd6xf['text']()['trim'](),
            _0xfbd6x11 = _0xfbd6x10['toLowerCase'](),
            _0xfbd6x12 = _0xfbd6x10['split']('/'),
            _0xfbd6x1c = _0xfbd6x12[0],
            _0xfbd6x13 = _0xfbd6x12[1];
        _0xfbd6x32(_0xfbd6xf, _0xfbd6x11, _0xfbd6x1c, _0xfbd6x13)
    });
    $('.related-ready')['each'](function() {
        var _0xfbd6xf = $(this),
            _0xfbd6x13 = _0xfbd6xf['find']('.related-tag')['data']('label');
        _0xfbd6x32(_0xfbd6xf, 'related', 3, _0xfbd6x13)
    });

    function _0xfbd6x1d(_0xfbd6x1e, _0xfbd6x4) {
        for (var _0xfbd6x1f = 0; _0xfbd6x1f < _0xfbd6x1e[_0xfbd6x4]['link']['length']; _0xfbd6x1f++) {
            if (_0xfbd6x1e[_0xfbd6x4]['link'][_0xfbd6x1f]['rel'] == 'alternate') {
                var _0xfbd6x20 = _0xfbd6x1e[_0xfbd6x4]['link'][_0xfbd6x1f]['href'];
                break
            }
        };
        return _0xfbd6x20
    }

    function _0xfbd6x21(_0xfbd6x1e, _0xfbd6x4, _0xfbd6x20) {
        var _0xfbd6x22 = _0xfbd6x1e[_0xfbd6x4]['title']['$t'],
            _0xfbd6x23 = '<a href="' + _0xfbd6x20 + '">' + _0xfbd6x22 + '</a>';
        return _0xfbd6x23
    }

    function _0xfbd6x24(_0xfbd6x1e, _0xfbd6x4) {
        var _0xfbd6x22 = _0xfbd6x1e[_0xfbd6x4]['author'][0]['name']['$t'],
            _0xfbd6x23 = '<span class="post-author"><a>' + _0xfbd6x22 + '</a></span>';
        return _0xfbd6x23
    }

    function _0xfbd6x25(_0xfbd6x1e, _0xfbd6x4) {
        var _0xfbd6x26 = _0xfbd6x1e[_0xfbd6x4]['published']['$t'],
            _0xfbd6x27 = _0xfbd6x26['substring'](0, 4),
            _0xfbd6x28 = _0xfbd6x26['substring'](5, 7),
            _0xfbd6x29 = _0xfbd6x26['substring'](8, 10),
            _0xfbd6x2a = monthFormat[parseInt(_0xfbd6x28, 10) - 1] + ' ' + _0xfbd6x29 + ', ' + _0xfbd6x27,
            _0xfbd6x23 = '<span class="post-date">' + _0xfbd6x2a + '</span>';
        return _0xfbd6x23
    }

    function _0xfbd6x2b(_0xfbd6x1e, _0xfbd6x4) {
        var _0xfbd6x22 = _0xfbd6x1e[_0xfbd6x4]['title']['$t'],
            _0xfbd6x2c = _0xfbd6x1e[_0xfbd6x4]['content']['$t'],
            _0xfbd6x2d = $('<div>')['html'](_0xfbd6x2c);
        if ('media$thumbnail' in _0xfbd6x1e[_0xfbd6x4]) {
            var _0xfbd6x2e = _0xfbd6x1e[_0xfbd6x4]['media$thumbnail']['url'],
                _0xfbd6x2f = _0xfbd6x2e['replace']('/s72-c', '/w300');
            if (_0xfbd6x2c['indexOf']('youtube.com/embed') > -1) {
                _0xfbd6x2f = _0xfbd6x2e['replace']('/default.', '/hqdefault.')
            }
        } else {
            if (_0xfbd6x2c['indexOf']('<img') > -1) {
                _0xfbd6x2f = _0xfbd6x2d['find']('img:first')['attr']('src')
            } else {
                _0xfbd6x2f = noThumbnail
            }
        };
        var _0xfbd6x23 = '<img class="post-thumb" alt="' + _0xfbd6x22 + '" src="' + _0xfbd6x2f + '"/>';
        return _0xfbd6x23
    }

    function _0xfbd6x30(_0xfbd6x1e, _0xfbd6x4) {
        if (_0xfbd6x1e[_0xfbd6x4]['category'] != undefined) {
            var _0xfbd6x31 = _0xfbd6x1e[_0xfbd6x4]['category'][0]['term'],
                _0xfbd6x23 = '<span class="post-tag">' + _0xfbd6x31 + '</span>'
        } else {
            _0xfbd6x23 = ''
        };
        return _0xfbd6x23
    }

    function _0xfbd6x32(_0xfbd6xf, _0xfbd6x11, _0xfbd6x1c, _0xfbd6x13) {
        if (_0xfbd6x11['match']('mega-menu') || _0xfbd6x11['match']('hot-posts') || _0xfbd6x11['match']('post-list') || _0xfbd6x11['match']('related')) {
            var _0xfbd6x33 = '';
            if (_0xfbd6x13 == 'recent') {
                _0xfbd6x33 = '/feeds/posts/default?alt=json-in-script&max-results=' + _0xfbd6x1c
            } else {
                if (_0xfbd6x13 == 'random') {
                    var _0xfbd6x34 = Math['floor'](Math['random']() * _0xfbd6x1c) + 1;
                    _0xfbd6x33 = '/feeds/posts/default?max-results=' + _0xfbd6x1c + '&start-index=' + _0xfbd6x34 + '&alt=json-in-script'
                } else {
                    _0xfbd6x33 = '/feeds/posts/default/-/' + _0xfbd6x13 + '?alt=json-in-script&max-results=' + _0xfbd6x1c
                }
            };
            $['ajax']({
                url: _0xfbd6x33,
                type: 'get',
                dataType: 'jsonp',
                beforeSend: function() {
                    if (_0xfbd6x11['match']('hot-posts')) {
                        _0xfbd6xf['html']('<div class="hot-loader"/>')['parent']()['addClass']('show-hot')
                    }
                },
                success: function(_0xfbd6x35) {
                    if (_0xfbd6x11['match']('mega-menu')) {
                        var _0xfbd6x36 = '<ul class="mega-menu-inner">'
                    } else {
                        if (_0xfbd6x11['match']('hot-posts')) {
                            var _0xfbd6x36 = '<ul class="hot-posts">'
                        } else {
                            if (_0xfbd6x11['match']('post-list')) {
                                var _0xfbd6x36 = '<ul class="custom-widget">'
                            } else {
                                if (_0xfbd6x11['match']('related')) {
                                    var _0xfbd6x36 = '<ul class="related-posts">'
                                }
                            }
                        }
                    };
                    var _0xfbd6x37 = _0xfbd6x35['feed']['entry'];
                    if (_0xfbd6x37 != undefined) {
                        for (var _0xfbd6x4 = 0, _0xfbd6x1e = _0xfbd6x37; _0xfbd6x4 < _0xfbd6x1e['length']; _0xfbd6x4++) {
                            var _0xfbd6x20 = _0xfbd6x1d(_0xfbd6x1e, _0xfbd6x4),
                                _0xfbd6x19 = _0xfbd6x21(_0xfbd6x1e, _0xfbd6x4, _0xfbd6x20),
                                _0xfbd6x38 = _0xfbd6x2b(_0xfbd6x1e, _0xfbd6x4),
                                _0xfbd6x31 = _0xfbd6x30(_0xfbd6x1e, _0xfbd6x4),
                                _0xfbd6x39 = _0xfbd6x24(_0xfbd6x1e, _0xfbd6x4),
                                _0xfbd6x3a = _0xfbd6x25(_0xfbd6x1e, _0xfbd6x4);
                            var _0xfbd6x3b = '';
                            if (_0xfbd6x11['match']('mega-menu')) {
                                _0xfbd6x3b += '<div class="mega-item item-' + _0xfbd6x4 + '"><div class="mega-content"><div class="post-image-wrap"><a class="post-image-link" href="' + _0xfbd6x20 + '">' + _0xfbd6x38 + '</a></div><h2 class="post-title">' + _0xfbd6x19 + '</h2></div></div>'
                            } else {
                                if (_0xfbd6x11['match']('hot-posts')) {
                                    if (_0xfbd6x4 == 0) {
                                        _0xfbd6x3b += '<li class="hot-item item-' + _0xfbd6x4 + '"><div class="hot-item-inner"><a class="post-image-link" href="' + _0xfbd6x20 + '">' + _0xfbd6x38 + '</a><div class="post-info">' + _0xfbd6x31 + '<h2 class="post-title">' + _0xfbd6x19 + '</h2><div class="post-meta">' + _0xfbd6x39 + _0xfbd6x3a + '</div></div></div></li>'
                                    } else {
                                        if (_0xfbd6x4 == 1) {
                                            _0xfbd6x3b += '<li class="hot-item item-' + _0xfbd6x4 + '"><div class="hot-item-inner"><a class="post-image-link" href="' + _0xfbd6x20 + '">' + _0xfbd6x38 + '</a><div class="post-info">' + _0xfbd6x31 + '<h2 class="post-title">' + _0xfbd6x19 + '</h2><div class="post-meta">' + _0xfbd6x39 + _0xfbd6x3a + '</div></div></div></li>'
                                        } else {
                                            if (_0xfbd6x4 == 2) {
                                                _0xfbd6x3b += '<li class="hot-item item-' + _0xfbd6x4 + '"><div class="hot-item-inner"><a class="post-image-link" href="' + _0xfbd6x20 + '">' + _0xfbd6x38 + '</a><div class="post-info">' + _0xfbd6x31 + '<h2 class="post-title">' + _0xfbd6x19 + '</h2><div class="post-meta">' + _0xfbd6x39 + _0xfbd6x3a + '</div></div></div></li>'
                                            } else {
                                                _0xfbd6x3b += '<li class="hot-item item-' + _0xfbd6x4 + '"><div class="hot-item-inner"><a class="post-image-link" href="' + _0xfbd6x20 + '">' + _0xfbd6x38 + '</a><div class="post-info">' + _0xfbd6x31 + '<h2 class="post-title">' + _0xfbd6x19 + '</h2><div class="post-meta">' + _0xfbd6x3a + '</div></div></div></li>'
                                            }
                                        }
                                    }
                                } else {
                                    if (_0xfbd6x11['match']('post-list')) {
                                        _0xfbd6x3b += '<li class="item-' + _0xfbd6x4 + '"><a class="post-image-link" href="' + _0xfbd6x20 + '">' + _0xfbd6x38 + '</a><div class="post-info"><h2 class="post-title">' + _0xfbd6x19 + '</h2></div></div></li>'
                                    } else {
                                        if (_0xfbd6x11['match']('related')) {
                                            _0xfbd6x3b += '<li class="related-item item-' + _0xfbd6x4 + '"><a class="post-image-link" href="' + _0xfbd6x20 + '">' + _0xfbd6x38 + '</a><h2 class="post-title">' + _0xfbd6x19 + '</h2></li>'
                                        }
                                    }
                                }
                            };
                            _0xfbd6x36 += _0xfbd6x3b
                        };
                        _0xfbd6x36 += '</ul>'
                    } else {
                        _0xfbd6x36 = '<ul class="no-posts">Error: No Posts Found <i class="fa fa-frown"/></ul>'
                    };
                    if (_0xfbd6x11['match']('mega-menu')) {
                        _0xfbd6xf['addClass']('has-sub mega-menu')['append'](_0xfbd6x36);
                        _0xfbd6xf['find']('a:first')['attr']('href', function(_0xfbd6xf, _0xfbd6x14) {
                            if (_0xfbd6x13 == 'recent' || _0xfbd6x13 == 'random') {
                                _0xfbd6x14 = _0xfbd6x14['replace'](_0xfbd6x14, '/search/?&max-results=' + postPerPage)
                            } else {
                                _0xfbd6x14 = _0xfbd6x14['replace'](_0xfbd6x14, '/search/label/' + _0xfbd6x13 + '?&max-results=' + postPerPage)
                            };
                            return _0xfbd6x14
                        })
                    } else {
                        if (_0xfbd6x11['match']('hot-posts')) {
                            _0xfbd6xf['html'](_0xfbd6x36)['parent']()['addClass']('show-hot')
                        } else {
                            _0xfbd6xf['html'](_0xfbd6x36)
                        }
                    }
                }
            })
        }
    }
    $('.blog-post-comments')['each'](function() {
        var _0xfbd6x3c = commentsSystem,
            _0xfbd6x3d = disqus_blogger_current_url,
            _0xfbd6x3e = '<div id="disqus_thread"/>',
            _0xfbd6x3f = $(location)['attr']('href'),
            _0xfbd6x40 = '<div class="fb-comments" data-width="100%" data-href="' + _0xfbd6x3f + '" data-numposts="5"></div>',
            _0xfbd6x41 = 'comments-system-' + _0xfbd6x3c;
        if (_0xfbd6x3c == 'blogger') {
            $(this)['addClass'](_0xfbd6x41)['show']()
        } else {
            if (_0xfbd6x3c == 'disqus') {
                (function() {
                    var _0xfbd6x42 = document['createElement']('script');
                    _0xfbd6x42['type'] = 'text/javascript';
                    _0xfbd6x42['async'] = true;
                    _0xfbd6x42['src'] = '//' + disqusShortname + '.disqus.com/embed.js';
                    (document['getElementsByTagName']('head')[0] || document['getElementsByTagName']('body')[0])['appendChild'](_0xfbd6x42)
                })();
                $('#comments, #gpluscomments')['remove']();
                $(this)['append'](_0xfbd6x3e)['addClass'](_0xfbd6x41)['show']()
            } else {
                if (_0xfbd6x3c == 'facebook') {
                    $('#comments, #gpluscomments')['remove']();
                    $(this)['append'](_0xfbd6x40)['addClass'](_0xfbd6x41)['show']()
                } else {
                    if (_0xfbd6x3c == 'hide') {
                        $(this)['hide']()
                    } else {
                        $(this)['addClass']('comments-system-default')['show']()
                    }
                }
            }
        }
    })
})


//]]>
