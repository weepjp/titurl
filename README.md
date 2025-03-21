# titurl
- Title and URL Copy Bookmarklet

## JavaScript

```js
javascript:(function(){'use strict';var t=document.title,u=window.location.href,p=new URL(u),sd=["www","m","sp"],ph=p.host.split(".");if(sd.indexOf(ph[0])!==-1)ph.shift();p.host=ph.join(".");["si","app","feature","track","ref","tag"].forEach(function(k){p.searchParams.delete(k)});u=p.toString();var s={"youtube.com/watch\\?v=":"youtu.be/","pixiv.net/artworks/":"pixiv.net/i/","pixiv.net/users/":"pixiv.net/u/","ch.nicovideo.jp/ch":"nico.ms/ch","q.nicovideo.jp/watch/nq":"nico.ms/nq","3d.nicovideo.jp/works/td":"nico.ms/td","news.nicovideo.jp/watch/nw":"nico.ms/nw","live.nicovideo.jp/watch/lv":"nico.ms/lv","manga.nicovideo.jp/watch/mg":"nico.ms/mg","seiga.nicovideo.jp/seiga/im":"nico.ms/im","commons.nicovideo.jp/works/nc":"nico.ms/nc","nicovideo.jp/user/":"nico.ms/user/","nicovideo.jp/watch/":"nico.ms/"};for(var k in s){var r=new RegExp(k);if(r.test(u)){u=u.replace(r,s[k]);break}}var txt=t+"\n"+u;navigator.clipboard?navigator.clipboard.writeText(txt).then(function(){alert("titurl OK:\n"+txt)}).catch(function(){alert("titurl ERR:\n"+txt)}):prompt("titurl OK:",txt);})();
```

