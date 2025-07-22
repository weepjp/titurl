# titurl

- Title and URL Copy Bookmarklet
- YouTube(youtu.be), niconico(nico.ms), pixiv(pixiv.net/*/～)
- 「短縮URLの有り難みを思い知れ！」という話。

# titurl3

- v3
- Add selection

```js
javascript:(()=>{var l="titurl ",t=document.title,u=location.href,p=new URL(u),h=p.host.split("."),f=["www","m","sp"],s=f.includes(h[0])?h[0]:"",h2=h.slice();if(s)h2.shift();var plain=h2.join("."),full=s?s+"."+plain:plain,m={"youtube.com/watch\\?v=":"youtu.be/","youtube.com/shorts/":"youtu.be/","pixiv.net/artworks/":"pixiv.net/i/","pixiv.net/users/":"pixiv.net/u/","ch.nicovideo.jp/ch":"nico.ms/ch","q.nicovideo.jp/watch/nq":"nico.ms/nq","3d.nicovideo.jp/works/td":"nico.ms/td","news.nicovideo.jp/watch/nw":"nico.ms/nw","live.nicovideo.jp/watch/lv":"nico.ms/lv","manga.nicovideo.jp/watch/mg":"nico.ms/mg","seiga.nicovideo.jp/seiga/im":"nico.ms/im","seiga.nicovideo.jp/seiga/#!/im":"nico.ms/im","commons.nicovideo.jp/works/nc":"nico.ms/nc","nicovideo.jp/user/":"nico.ms/user/","nicovideo.jp/watch/":"nico.ms/"};var needConfirm=!!s;for(var x in m){if(new RegExp(x).test(u)){needConfirm=true;break}}var d=needConfirm?confirm("URLを短めにしますか？"):false;p.host=d?plain:full;["si","app","feature","track","ref","tag","redirected"].forEach(k=>p.searchParams.delete(k));u=p.toString();if(d)for(var x in m){var r=new RegExp(x);if(r.test(u)){u=u.replace(r,m[x]);break}}var z=t+"\n"+u;navigator.clipboard?navigator.clipboard.writeText(z).then(()=>alert(l+"OK:\n"+z)).catch(()=>alert(l+"ERR:\n"+z)):prompt(l+"OK:",z)})();
```


# titurl2

- v2

```js
javascript:(function(){'use strict';var l="titurl ",t=document.title,u=window.location.href,p=new URL(u),a=["www","m","sp"],h=p.host.split(".");if(a.indexOf(h[0])!==-1)h.shift();p.host=h.join(".");var r=["si","app","feature","track","ref","tag","redirected"];r.forEach(function(k){p.searchParams.delete(k)});u=p.toString();var m={"youtube.com/watch\\?v=":"youtu.be/","youtube.com/shorts/":"youtu.be/","pixiv.net/artworks/":"pixiv.net/i/","pixiv.net/users/":"pixiv.net/u/","ch.nicovideo.jp/ch":"nico.ms/ch","q.nicovideo.jp/watch/nq":"nico.ms/nq","3d.nicovideo.jp/works/td":"nico.ms/td","news.nicovideo.jp/watch/nw":"nico.ms/nw","live.nicovideo.jp/watch/lv":"nico.ms/lv","manga.nicovideo.jp/watch/mg":"nico.ms/mg","seiga.nicovideo.jp/seiga/im":"nico.ms/im","seiga.nicovideo.jp/seiga/#!/im":"nico.ms/im","commons.nicovideo.jp/works/nc":"nico.ms/nc","nicovideo.jp/user/":"nico.ms/user/","nicovideo.jp/watch/":"nico.ms/"};for(var x in m){var y=new RegExp(x);if(y.test(u)){u=u.replace(y,m[x]);break}}var z=t+"\n"+u;navigator.clipboard?navigator.clipboard.writeText(z).then(function(){alert(l+"OK:\n"+z)}).catch(function(){alert(l+"ERR:\n"+z)}):prompt(l+"OK:",z);})();
```

# Summary


## Subdomain exclusion (v2)

- w​w​w
- sp
- m

## Query parameter or Tracking code exclusion (垢抜き)

- si=*
- app=*
- feature=*
- track=*
- ref=*
- tag=*
- redirected=*


## URL conversion Rule (Roughly...)

- youtube.com/watch?v= -> youtu.be/
- youtube.com/shorts/ -> youtu.be/
- pixiv.net/artworks/ -> pixiv.net/i/
- pixiv.net/users/ -> pixiv.net/u/
- ch.nicovideo.jp/ch -> nico.ms/ch
- q.nicovideo.jp/watch/nq -> nico.ms/nq
- 3d.nicovideo.jp/works/td -> nico.ms/td
- news.nicovideo.jp/watch/nw -> nico.ms/nw
- live.nicovideo.jp/watch/lv -> nico.ms/lv
- manga.nicovideo.jp/watch/mg -> nico.ms/mg
- seiga.nicovideo.jp/seiga/im -> nico.ms/im
- - seiga.nicovideo.jp/seiga/#!/im　-> nico.ms/im
- commons.nicovideo.jp/works/nc -> nico.ms/nc
- nicovideo.jp/user/ -> nico.ms/user/
- nicovideo.jp/watch/ -> nico.ms/




