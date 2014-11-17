/*!
 * Villa Framework v2.0.0 (http://getvilla.org/)
 * Copyright 2013-2015 Noibe Developers
 * Licensed under MIT (https://github.com/noibe/villa/blob/master/LICENSE)
*/

var colors;
colors = [["cyan","#1abc9c"],["dark-cyan","#16a085"],["green","#2ecc71"],["dark-green","#27ae60"],["blue","#3498db"],["dark-blue","#2980b9"],["purple","#9b59b6"],["dark-purple","#8e44ad"],["dark","#34495e"],["dark-dark","#2c3e50"],["yellow","#f1c40f"],["dark-yellow","#f39c12"],["orange","#e67e22"],["dark-orange","#d35400"],["red","#ea6153"],["dark-red","#c0392b"],["clear","#ecf0f1"],["dark-clear","#bdc3c7"],["gray","#95a5a6"],["dark-gray","#7f8c8d"],["white","#ffffff"],["black","#000000"],["chestnut-rose","#d24d57"],["pomegranate","#f22613"],["pure-red","#ff0000"],["thunderbird","#d91e18"],["old-brick","#96281b"],["flamingo","#ef4836"],["valencia","#d64541"],["tall-poppy","#c0392b"],["monza","#cf000f"],["cinnabar","#e74c3c"],["razzmatazz","#db0a5b"],["derby","#ffecdb"],["sunset-orange","#f64747"],["wax-flower","#f1a9a0"],["cabaret","#d2527f"],["new-york-pink","#e08283"],["radical-red","#f62459"],["sunglo","#e26a6a"],["snuff","#dcc6e0"],["rebeccapurple","#663399"],["honey-flower","#674172"],["wistful","#aea8d3"],["plum","#913d88"],["seance","#9a12b3"],["medium-purple","#bf55ec"],["light-wisteria","#be90d4"],["studio","#8e44ad"],["wisteria","#9b59b6"],["san-marino","#446cb3"],["alice-blue","#e4f1fe"],["royal-blue","#4183d7"],["picton-blue","#59abe3"],["spray","#81cfe0"],["shakespeare","#52b3d9"],["humming-bird","#c5eff7"],["picton-blue","#22a7f0"],["curious-blue","#3498db"],["madison","#2c3e50"],["dodger-blue","#19b5fe"],["ming","#336e7b"],["ebony-clay","#22313f"],["malibu","#6bb9f0"],["curious-blue","#1e8bc3"],["chambray","#3a539b"],["pickled-bluewood","#34495e"],["hoki","#67809f"],["jelly-bean","#2574a9"],["jacksons-purple","#1f3a93"],["jordy-blue","#89c4f4"],["steel-blue","#4b77be"],["fountain-blue","#5c97bf"],["medium-turquoise","#4ecdc4"],["aqua-island","#a2ded0"],["gossip","#87d37c"],["dark-sea-green","#90c695"],["eucalyptus","#26a65b"],["caribbean-green","#03c9a9"],["silver-tree","#68c3a3"],["downy","#65c6bb"],["mountain-meadow","#1bbc9b"],["light-sea-green","#1ba39c"],["medium-aquamarine","#66cc99"],["turquoise","#36d7b7"],["madang","#c8f7c5"],["riptide","#86e2d5"],["shamrock","#2ecc71"],["mountain-meadow","#16a085"],["emerald","#3fc380"],["green-haze","#019875"],["free-speech-aquamarine","#03a678"],["ocean-green","#4daf7c"],["niagara","#2abb9b"],["jade","#00b16a"],["salem","#1e824c"],["observatory","#049372"],["jungle-green","#26c281"],["cream-can","#f5d76e"],["ripe-lemon","#f7ca18"],["saffron","#f4d03f"],["cape-honey","#fde3a7"],["california","#f89406"],["fire-bush","#eb9532"],["tahiti-gold","#e87e04"],["casablanca","#f4b350"],["crusta","#f2784b"],["jaffa","#eb974e"],["lightning-yellow","#f5ab35"],["burnt-orange","#d35400"],["buttercup","#f39c12"],["ecstasy","#f9690e"],["sandstorm","#f9bf3b"],["jaffa","#f27935"],["zest","#e67e22"],["white-smoke","#ececec"],["lynch","#6c7a89"],["pumice","#d2d7d3"],["gallery","#eeeeee"],["silver-sand","#bdc3c7"],["porcelain","#ecf0f1"],["cascade","#95a5a6"],["iron","#dadfe1"],["edward","#abb7b7"],["cararra","#f2f1ef"],["silver","#bfbfbf"],["g111","#111111"],["g222","#222222"],["g333","#333333"],["g444","#444444"],["g555","#555555"],["g666","#666666"],["g777","#777777"],["g888","#888888"],["g999","#999999"],["gaaa","#aaaaaa"],["gbbb","#bbbbbb"],["gccc","#cccccc"],["gddd","#dddddd"],["geee","#eeeeee"]];
fontawesome = [[["glass"],"000"], [["music"],"001"], [["search"],"002"], [["envelope-o"],"003"], [["heart"],"004"], [["star"],"005"], [["star-o"],"006"], [["user"],"007"], [["film"],"008"], [["th-large"],"009"], [["th"],"00a"], [["th-list"],"00b"], [["check"],"00c"], [["remove", "close", "times"],"00d"], [["search-plus"],"00e"], [["search-minus"],"010"], [["power-off"],"011"], [["signal"],"012"], [["gear", "cog"],"013"], [["trash-o"],"014"], [["home"],"015"], [["file-o"],"016"], [["clock-o"],"017"], [["road"],"018"], [["download"],"019"], [["arrow-circle-o-down"],"01a"], [["arrow-circle-o-up"],"01b"], [["inbox"],"01c"], [["play-circle-o"],"01d"], [["rotate-right", "repeat"],"01e"], [["refresh"],"021"], [["list-alt"],"022"], [["lock"],"023"], [["flag"],"024"], [["headphones"],"025"], [["volume-off"],"026"], [["volume-down"],"027"], [["volume-up"],"028"], [["qrcode"],"029"], [["barcode"],"02a"], [["tag"],"02b"], [["tags"],"02c"], [["book"],"02d"], [["bookmark"],"02e"], [["print"],"02f"], [["camera"],"030"], [["font"],"031"], [["bold"],"032"], [["italic"],"033"], [["text-height"],"034"], [["text-width"],"035"], [["align-left"],"036"], [["align-center"],"037"], [["align-right"],"038"], [["align-justify"],"039"], [["list"],"03a"], [["dedent", "outdent"],"03b"], [["indent"],"03c"], [["video-camera"],"03d"], [["photo", "image", "picture-o"],"03e"], [["pencil"],"040"], [["map-marker"],"041"], [["adjust"],"042"], [["tint"],"043"], [["edit", "pencil-square-o"],"044"], [["share-square-o"],"045"], [["check-square-o"],"046"], [["arrows"],"047"], [["step-backward"],"048"], [["fast-backward"],"049"], [["backward"],"04a"], [["play"],"04b"], [["pause"],"04c"], [["stop"],"04d"], [["forward"],"04e"], [["fast-forward"],"050"], [["step-forward"],"051"], [["eject"],"052"], [["chevron-left"],"053"], [["chevron-right"],"054"], [["plus-circle"],"055"], [["minus-circle"],"056"], [["times-circle"],"057"], [["check-circle"],"058"], [["question-circle"],"059"], [["info-circle"],"05a"], [["crosshairs"],"05b"], [["times-circle-o"],"05c"], [["check-circle-o"],"05d"], [["ban"],"05e"], [["arrow-left"],"060"], [["arrow-right"],"061"], [["arrow-up"],"062"], [["arrow-down"],"063"], [["mail-forward", "share"],"064"], [["expand"],"065"], [["compress"],"066"], [["plus"],"067"], [["minus"],"068"], [["asterisk"],"069"], [["exclamation-circle"],"06a"], [["gift"],"06b"], [["leaf"],"06c"], [["fire"],"06d"], [["eye"],"06e"], [["eye-slash"],"070"], [["warning", "exclamation-triangle"],"071"], [["plane"],"072"], [["calendar"],"073"], [["random"],"074"], [["comment"],"075"], [["magnet"],"076"], [["chevron-up"],"077"], [["chevron-down"],"078"], [["retweet"],"079"], [["shopping-cart"],"07a"], [["folder"],"07b"], [["folder-open"],"07c"], [["arrows-v"],"07d"], [["arrows-h"],"07e"], [["bar-chart-o", "bar-chart"],"080"], [["twitter-square"],"081"], [["facebook-square"],"082"], [["camera-retro"],"083"], [["key"],"084"], [["gears", "cogs"],"085"], [["comments"],"086"], [["thumbs-o-up"],"087"], [["thumbs-o-down"],"088"], [["star-half"],"089"], [["heart-o"],"08a"], [["sign-out"],"08b"], [["linkedin-square"],"08c"], [["thumb-tack"],"08d"], [["external-link"],"08e"], [["sign-in"],"090"], [["trophy"],"091"], [["github-square"],"092"], [["upload"],"093"], [["lemon-o"],"094"], [["phone"],"095"], [["square-o"],"096"], [["bookmark-o"],"097"], [["phone-square"],"098"], [["twitter"],"099"], [["facebook"],"09a"], [["github"],"09b"], [["unlock"],"09c"], [["credit-card"],"09d"], [["rss"],"09e"], [["hdd-o"],"0a0"], [["bullhorn"],"0a1"], [["bell"],"0f3"], [["certificate"],"0a3"], [["hand-o-right"],"0a4"], [["hand-o-left"],"0a5"], [["hand-o-up"],"0a6"], [["hand-o-down"],"0a7"], [["arrow-circle-left"],"0a8"], [["arrow-circle-right"],"0a9"], [["arrow-circle-up"],"0aa"], [["arrow-circle-down"],"0ab"], [["globe"],"0ac"], [["wrench"],"0ad"], [["tasks"],"0ae"], [["filter"],"0b0"], [["briefcase"],"0b1"], [["arrows-alt"],"0b2"], [["group", "users"],"0c0"], [["chain", "link"],"0c1"], [["cloud"],"0c2"], [["flask"],"0c3"], [["cut", "scissors"],"0c4"], [["copy", "files-o"],"0c5"], [["paperclip"],"0c6"], [["save", "floppy-o"],"0c7"], [["square"],"0c8"], [["navicon", "reorder", "bars"],"0c9"], [["list-ul"],"0ca"], [["list-ol"],"0cb"], [["strikethrough"],"0cc"], [["underline"],"0cd"], [["table"],"0ce"], [["magic"],"0d0"], [["truck"],"0d1"], [["pinterest"],"0d2"], [["pinterest-square"],"0d3"], [["google-plus-square"],"0d4"], [["google-plus"],"0d5"], [["money"],"0d6"], [["caret-down"],"0d7"], [["caret-up"],"0d8"], [["caret-left"],"0d9"], [["caret-right"],"0da"], [["columns"],"0db"], [["unsorted", "sort"],"0dc"], [["sort-down", "sort-desc"],"0dd"], [["sort-up", "sort-asc"],"0de"], [["envelope"],"0e0"], [["linkedin"],"0e1"], [["rotate-left", "undo"],"0e2"], [["legal", "gavel"],"0e3"], [["dashboard", "tachometer"],"0e4"], [["comment-o"],"0e5"], [["comments-o"],"0e6"], [["flash", "bolt"],"0e7"], [["sitemap"],"0e8"], [["umbrella"],"0e9"], [["paste", "clipboard"],"0ea"], [["lightbulb-o"],"0eb"], [["exchange"],"0ec"], [["cloud-download"],"0ed"], [["cloud-upload"],"0ee"], [["user-md"],"0f0"], [["stethoscope"],"0f1"], [["suitcase"],"0f2"], [["bell-o"],"0a2"], [["coffee"],"0f4"], [["cutlery"],"0f5"], [["file-text-o"],"0f6"], [["building-o"],"0f7"], [["hospital-o"],"0f8"], [["ambulance"],"0f9"], [["medkit"],"0fa"], [["fighter-jet"],"0fb"], [["beer"],"0fc"], [["h-square"],"0fd"], [["plus-square"],"0fe"], [["angle-double-left"],"100"], [["angle-double-right"],"101"], [["angle-double-up"],"102"], [["angle-double-down"],"103"], [["angle-left"],"104"], [["angle-right"],"105"], [["angle-up"],"106"], [["angle-down"],"107"], [["desktop"],"108"], [["laptop"],"109"], [["tablet"],"10a"], [["mobile-phone", "mobile"],"10b"], [["circle-o"],"10c"], [["quote-left"],"10d"], [["quote-right"],"10e"], [["spinner"],"110"], [["circle"],"111"], [["mail-reply", "reply"],"112"], [["github-alt"],"113"], [["folder-o"],"114"], [["folder-open-o"],"115"], [["smile-o"],"118"], [["frown-o"],"119"], [["meh-o"],"11a"], [["gamepad"],"11b"], [["keyboard-o"],"11c"], [["flag-o"],"11d"], [["flag-checkered"],"11e"], [["terminal"],"120"], [["code"],"121"], [["mail-reply-all", "reply-all"],"122"], [["star-half-empty", "star-half-full", "star-half-o"],"123"], [["location-arrow"],"124"], [["crop"],"125"], [["code-fork"],"126"], [["unlink", "chain-broken"],"127"], [["question"],"128"], [["info"],"129"], [["exclamation"],"12a"], [["superscript"],"12b"], [["subscript"],"12c"], [["eraser"],"12d"], [["puzzle-piece"],"12e"], [["microphone"],"130"], [["microphone-slash"],"131"], [["shield"],"132"], [["calendar-o"],"133"], [["fire-extinguisher"],"134"], [["rocket"],"135"], [["maxcdn"],"136"], [["chevron-circle-left"],"137"], [["chevron-circle-right"],"138"], [["chevron-circle-up"],"139"], [["chevron-circle-down"],"13a"], [["html5"],"13b"], [["css3"],"13c"], [["anchor"],"13d"], [["unlock-alt"],"13e"], [["bullseye"],"140"], [["ellipsis-h"],"141"], [["ellipsis-v"],"142"], [["rss-square"],"143"], [["play-circle"],"144"], [["ticket"],"145"], [["minus-square"],"146"], [["minus-square-o"],"147"], [["level-up"],"148"], [["level-down"],"149"], [["check-square"],"14a"], [["pencil-square"],"14b"], [["external-link-square"],"14c"], [["share-square"],"14d"], [["compass"],"14e"], [["toggle-down", "caret-square-o-down"],"150"], [["toggle-up", "caret-square-o-up"],"151"], [["toggle-right", "caret-square-o-right"],"152"], [["euro", "eur"],"153"], [["gbp"],"154"], [["dollar", "usd"],"155"], [["rupee", "inr"],"156"], [["cny", "rmb", "yen", "jpy"],"157"], [["ruble", "rouble", "rub"],"158"], [["won", "krw"],"159"], [["bitcoin", "btc"],"15a"], [["file"],"15b"], [["file-text"],"15c"], [["sort-alpha-asc"],"15d"], [["sort-alpha-desc"],"15e"], [["sort-amount-asc"],"160"], [["sort-amount-desc"],"161"], [["sort-numeric-asc"],"162"], [["sort-numeric-desc"],"163"], [["thumbs-up"],"164"], [["thumbs-down"],"165"], [["youtube-square"],"166"], [["youtube"],"167"], [["xing"],"168"], [["xing-square"],"169"], [["youtube-play"],"16a"], [["dropbox"],"16b"], [["stack-overflow"],"16c"], [["instagram"],"16d"], [["flickr"],"16e"], [["adn"],"170"], [["bitbucket"],"171"], [["bitbucket-square"],"172"], [["tumblr"],"173"], [["tumblr-square"],"174"], [["long-arrow-down"],"175"], [["long-arrow-up"],"176"], [["long-arrow-left"],"177"], [["long-arrow-right"],"178"], [["apple"],"179"], [["windows"],"17a"], [["android"],"17b"], [["linux"],"17c"], [["dribbble"],"17d"], [["skype"],"17e"], [["foursquare"],"180"], [["trello"],"181"], [["female"],"182"], [["male"],"183"], [["gittip"],"184"], [["sun-o"],"185"], [["moon-o"],"186"], [["archive"],"187"], [["bug"],"188"], [["vk"],"189"], [["weibo"],"18a"], [["renren"],"18b"], [["pagelines"],"18c"], [["stack-exchange"],"18d"], [["arrow-circle-o-right"],"18e"], [["arrow-circle-o-left"],"190"], [["toggle-left", "caret-square-o-left"],"191"], [["dot-circle-o"],"192"], [["wheelchair"],"193"], [["vimeo-square"],"194"], [["turkish-lira", "try"],"195"], [["plus-square-o"],"196"], [["space-shuttle"],"197"], [["slack"],"198"], [["envelope-square"],"199"], [["wordpress"],"19a"], [["openid"],"19b"], [["institution", "bank", "university"],"19c"], [["mortar-board", "graduation-cap"],"19d"], [["yahoo"],"19e"], [["google"],"1a0"], [["reddit"],"1a1"], [["reddit-square"],"1a2"], [["stumbleupon-circle"],"1a3"], [["stumbleupon"],"1a4"], [["delicious"],"1a5"], [["digg"],"1a6"], [["pied-piper"],"1a7"], [["pied-piper-alt"],"1a8"], [["drupal"],"1a9"], [["joomla"],"1aa"], [["language"],"1ab"], [["fax"],"1ac"], [["building"],"1ad"], [["child"],"1ae"], [["paw"],"1b0"], [["spoon"],"1b1"], [["cube"],"1b2"], [["cubes"],"1b3"], [["behance"],"1b4"], [["behance-square"],"1b5"], [["steam"],"1b6"], [["steam-square"],"1b7"], [["recycle"],"1b8"], [["automobile", "car"],"1b9"], [["cab", "taxi"],"1ba"], [["tree"],"1bb"], [["spotify"],"1bc"], [["deviantart"],"1bd"], [["soundcloud"],"1be"], [["database"],"1c0"], [["file-pdf-o"],"1c1"], [["file-word-o"],"1c2"], [["file-excel-o"],"1c3"], [["file-powerpoint-o"],"1c4"], [["file-photo-o", "file-picture-o", "file-image-o"],"1c5"], [["file-zip-o", "file-archive-o"],"1c6"], [["file-sound-o", "file-audio-o"],"1c7"], [["file-movie-o", "file-video-o"],"1c8"], [["file-code-o"],"1c9"], [["vine"],"1ca"], [["codepen"],"1cb"], [["jsfiddle"],"1cc"], [["life-bouy", "life-buoy", "life-saver", "support", "life-ring"],"1cd"], [["circle-o-notch"],"1ce"], [["ra", "rebel"],"1d0"], [["ge", "empire"],"1d1"], [["git-square"],"1d2"], [["git"],"1d3"], [["hacker-news"],"1d4"], [["tencent-weibo"],"1d5"], [["qq"],"1d6"], [["wechat", "weixin"],"1d7"], [["send", "paper-plane"],"1d8"], [["send-o", "paper-plane-o"],"1d9"], [["history"],"1da"], [["circle-thin"],"1db"], [["header"],"1dc"], [["paragraph"],"1dd"], [["sliders"],"1de"], [["share-alt"],"1e0"], [["share-alt-square"],"1e1"], [["bomb"],"1e2"], [["soccer-ball-o", "futbol-o"],"1e3"], [["tty"],"1e4"], [["binoculars"],"1e5"], [["plug"],"1e6"], [["slideshare"],"1e7"], [["twitch"],"1e8"], [["yelp"],"1e9"], [["newspaper-o"],"1ea"], [["wifi"],"1eb"], [["calculator"],"1ec"], [["paypal"],"1ed"], [["google-wallet"],"1ee"], [["cc-visa"],"1f0"], [["cc-mastercard"],"1f1"], [["cc-discover"],"1f2"], [["cc-amex"],"1f3"], [["cc-paypal"],"1f4"], [["cc-stripe"],"1f5"], [["bell-slash"],"1f6"], [["bell-slash-o"],"1f7"], [["trash"],"1f8"], [["copyright"],"1f9"], [["at"],"1fa"], [["eyedropper"],"1fb"], [["paint-brush"],"1fc"], [["birthday-cake"],"1fd"], [["area-chart"],"1fe"], [["pie-chart"],"200"], [["line-chart"],"201"], [["lastfm"],"202"], [["lastfm-square"],"203"], [["toggle-off"],"204"], [["toggle-on"],"205"], [["bicycle"],"206"], [["bus"],"207"], [["ioxhost"],"208"], [["angellist"],"209"], [["cc"],"20a"], [["shekel", "sheqel", "ils"],"20b"], [["meanpath"],"20c"] ];

function addStylesheetRules(rules) {
    var styleEl = document.createElement('style'),
        styleSheet;

    styleEl.appendChild(document.createTextNode(''));

    document.head.appendChild(styleEl);

    styleSheet = styleEl.sheet;

    for (var i = 0, rl = rules.length; i < rl; i++) {
        var j = 1, rule = rules[i], selector = rules[i][0], propStr = '';

        if (Object.prototype.toString.call(rule[1][0]) === '[object Array]') {
            rule = rule[1];
            j = 0;
        }

        for (var pl = rule.length; j < pl; j++) {
            var prop = rule[j];
            propStr += prop[0] + ':' + prop[1] + (prop[2] ? ' !important' : '') + ';\n';
        }

        styleSheet.insertRule(selector + '{' + propStr + '}', styleSheet.cssRules.length);
    }
}

function colorFactory() {
    var styleSheetString = [];

    for(var i = 0; i < colors.length; i++) {
        styleSheetString.push(
            ['.' + colors[i][0], ['background-color', colors[i][1]]],
            ['.font-' + colors[i][0], ['color', colors[i][1]]],
            ['.border-' + colors[i][0], ['border-color', colors[i][1]]],
            ['.a-' + colors[i][0] + ':active', ['background-color', colors[i][1]]],
            ['.afont-' + colors[i][0] + ':active', ['color', colors[i][1]]],
            ['.aborder-' + colors[i][0] + ':active', ['border-color', colors[i][1]]],
            ['.f-' + colors[i][0] + ':focus', ['background-color', colors[i][1]]],
            ['.ffont-' + colors[i][0] + ':focus', ['color', colors[i][1]]],
            ['.fborder-' + colors[i][0] + ':focus', ['border-color', colors[i][1]]],
            ['.h-' + colors[i][0] + ':hover', ['background-color', colors[i][1]]],
            ['.hfont-' + colors[i][0] + ':hover', ['color', colors[i][1]]],
            ['.hborder-' + colors[i][0] + ':hover', ['border-color', colors[i][1]]]
        );
    }

    addStylesheetRules(styleSheetString);
}

colorFactory();