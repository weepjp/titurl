javascript:(function(){
    'use strict';
    // タイトルとURLを取得
    var t = document.title;
    var u = window.location.href;
    
    // URLオブジェクトで処理
    var p = new URL(u);
    
    // 不要なサブドメインを削除
    var subdomainsToRemove = ["www","m","sp"];
    var ph = p.host.split(".");
    if (subdomainsToRemove.indexOf(ph[0]) !== -1) {
        ph.shift();
    }
    p.host = ph.join(".");
    
    // 不要なクエリーパラメーター削除
    var removeKeys = ["si","app","feature","track","ref"];
    removeKeys.forEach(function(k){
        p.searchParams.delete(k);
    });
    
    // 再構築したURLを文字列に
    u = p.toString();
    
    // ルールに基づいて短縮URLに置き換え(YouTube,pixiv,Niconico)
    var s = {
        "youtube.com/watch\\?v=":     "youtu.be/",
        "pixiv.net/artworks/":        "pixiv.net/i/",
        "pixiv.net/users/":           "pixiv.net/u/",
        "ch.nicovideo.jp/ch":            "nico.ms/ch",
        "q.nicovideo.jp/watch/nq":       "nico.ms/nq",
        "3d.nicovideo.jp/works/td":      "nico.ms/td",
        "news.nicovideo.jp/watch/nw":    "nico.ms/nw",
        "live.nicovideo.jp/watch/lv":    "nico.ms/lv",
        "manga.nicovideo.jp/watch/mg":   "nico.ms/mg",
        "seiga.nicovideo.jp/seiga/im":   "nico.ms/im",
        "commons.nicovideo.jp/works/nc": "nico.ms/nc",
        "nicovideo.jp/user/":            "nico.ms/user/",
        "nicovideo.jp/watch/":           "nico.ms/"
    };
    
    for (var k in s) {
        var r = new RegExp(k);
        if (r.test(u)) {
            u = u.replace(r, s[k]);
            break;
        }
    }
    
    // クリップボードへコピーまたは prompt 表示
    var txt = t + "\n" + u;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(txt)
            .then(function(){
                alert("titurl OK:\n" + txt);
            })
            .catch(function(){
                alert("titurl ERR:\n" + txt);
            });
    } else {
        prompt("titurl OK:", txt);
    }
})();
