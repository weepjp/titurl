# titurl

- Title and URL Copy Bookmarklet

# JavaScript (Bookmarklet)

```js
javascript:(function(){'use strict';var l="titurl ",t=document.title,u=window.location.href,p=new URL(u),a=["www","m","sp"],h=p.host.split(".");if(a.indexOf(h[0])!==-1)h.shift();p.host=h.join(".");var r=["si","app","feature","track","ref","tag"];r.forEach(function(k){p.searchParams.delete(k)});u=p.toString();var m={"youtube.com/watch\\?v=":"youtu.be/","pixiv.net/artworks/":"pixiv.net/i/","pixiv.net/users/":"pixiv.net/u/","ch.nicovideo.jp/ch":"nico.ms/ch","q.nicovideo.jp/watch/nq":"nico.ms/nq","3d.nicovideo.jp/works/td":"nico.ms/td","news.nicovideo.jp/watch/nw":"nico.ms/nw","live.nicovideo.jp/watch/lv":"nico.ms/lv","manga.nicovideo.jp/watch/mg":"nico.ms/mg","seiga.nicovideo.jp/seiga/im":"nico.ms/im","commons.nicovideo.jp/works/nc":"nico.ms/nc","nicovideo.jp/user/":"nico.ms/user/","nicovideo.jp/watch/":"nico.ms/"};for(var x in m){var y=new RegExp(x);if(y.test(u)){u=u.replace(y,m[x]);break}}var z=t+"\n"+u;navigator.clipboard?navigator.clipboard.writeText(z).then(function(){alert(l+"OK:\n"+z)}).catch(function(){alert(l+"ERR:\n"+z)}):prompt(l+"OK:",z);})();
```

# Summary


## Subdomain exclusion

- w​w​w.
- sp.
- m.

## Query parameter (Tracking code??) exclusion

- si=*
- app=*
- feature=*
- track=*
- ref=*
- tag=*


## URL conversion Rule

- youtube.com/watch?v= -> youtu.be/
- pixiv.net/artworks/ -> pixiv.net/i/
- pixiv.net/users/ -> pixiv.net/u/
- ch.nicovideo.jp/ch -> nico.ms/ch
- q.nicovideo.jp/watch/nq -> nico.ms/nq
- 3d.nicovideo.jp/works/td -> nico.ms/td
- news.nicovideo.jp/watch/nw -> nico.ms/nw
- live.nicovideo.jp/watch/lv -> nico.ms/lv
- manga.nicovideo.jp/watch/mg -> nico.ms/mg
- seiga.nicovideo.jp/seiga/im -> nico.ms/im
- commons.nicovideo.jp/works/nc -> nico.ms/nc
- nicovideo.jp/user/ -> nico.ms/user/
- nicovideo.jp/watch/ -> nico.ms/




