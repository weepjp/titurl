# titurl


| titurl |
| :----: | 
| <img width="279" height="331" alt="image" src="https://github.com/user-attachments/assets/fbfc00df-e126-4d71-a8be-23706c012a1e" /> |


- Title and URL Copy Bookmarklet
- YouTube(youtu.be), niconico(nico.ms), pixiv(pixiv.net/*/～)...
- Kill unnecessary URL query like stacked shit that high!


# Bookmarklet (Javascript)

```
javascript:(()=> {try{const op=document.getElementById("ttp");if(op)op.remove();const _a=String.fromCharCode(38),_h=String.fromCharCode(35),_q=String.fromCharCode(63),m="Click to copy",C="#0af",W="#fff",G="#ccc",A="absolute",P="pointer",N="none",X=c=>`translateX(${c?16:0}px)`;const u={};u["youtube.com/watch\\"+_q+"v="]="youtu.be/";u["youtube.com/shorts/"]="youtu.be/";u["pixiv.net/artworks/"]="pixiv.net/i/";u["pixiv.net/users/"]="pixiv.net/u/";u["ch.nicovideo.jp/ch"]="nico.ms/ch";u["q.nicovideo.jp/watch/nq"]="nico.ms/nq";u["3d.nicovideo.jp/works/td"]="nico.ms/td";u["news.nicovideo.jp/watch/nw"]="nico.ms/nw";u["live.nicovideo.jp/watch/lv"]="nico.ms/lv";u["manga.nicovideo.jp/watch/mg"]="nico.ms/mg";u["seiga.nicovideo.jp/seiga/im"]="nico.ms/im";u["seiga.nicovideo.jp/seiga/"+_h+"!/im"]="nico.ms/im";u["commons.nicovideo.jp/works/nc"]="nico.ms/nc";u["nicovideo.jp/user/"]="nico.ms/user/";u["nicovideo.jp/watch/"]="nico.ms/";u["store.steampowered.com/app/(\\d+)[^?]*"]="s.team/a/$1";u["bilibili.com/video/"]="b23.tv/";const rt=document.body||document.documentElement;if(!rt)throw new Error("No root");function ce(tg,st={},at={}){const el=document.createElement(tg);for(const[k,v]of Object.entries(st))el.style[k]=v;for(const[k,v]of Object.entries(at)){"textContent"===k?el.textContent=v:"checked"===k||"readOnly"===k||"disabled"===k?el[k]=v:el.setAttribute(k,v)}return el}const mp=ce("div",{position:"fixed",top:"20px",right:"20px",zIndex:"2147483647",background:W,color:"#333",border:"1px solid #ddd",padding:"16px",borderRadius:"12px",width:"300px",boxShadow:"0 10px 30px rgba(0,0,0,0.15)",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",boxSizing:"border-box",opacity:"0",transform:"translateY(-10px)",transition:"opacity 0.2s ease, transform 0.2s ease"},{id:"ttp"});const hd=ce("div",{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"14px",borderBottom:"1px solid #eee",paddingBottom:"8px",boxSizing:"border-box"});const tx=ce("span",{fontWeight:"bold",fontSize:"14px",color:"#111"},{textContent:"titurl"});const cb=ce("button",{background:N,border:N,fontSize:"20px",cursor:P,color:"#aaa",padding:"0",lineHeight:"1"},{id:"ttc",textContent:"×"});hd.appendChild(tx);hd.appendChild(cb);mp.appendChild(hd);function ct(tx,id,si,ck=false){const rw=ce("div",{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px",boxSizing:"border-box",transition:"opacity 0.2s ease"});const lb=ce("span",{fontSize:"13px"},{textContent:tx});const wp=ce("label",{position:"relative",display:"inline-block",width:"36px",height:"20px",cursor:P});const ip=ce("input",{position:A,opacity:"0",width:"0",height:"0"},{type:"checkbox",id:id,checked:ck});const sd=ce("span",{position:A,top:"0",left:"0",right:"0",bottom:"0",backgroundColor:ck?C:G,transition:"0.2s",borderRadius:"20px"},{id:si});const kn=ce("span",{position:A,height:"14px",width:"14px",left:"3px",bottom:"3px",backgroundColor:W,transition:"0.2s",borderRadius:"50%",transform:X(ck)});return sd.appendChild(kn),wp.appendChild(ip),wp.appendChild(sd),rw.appendChild(lb),rw.appendChild(wp),{r:rw,i:ip,s:sd,k:kn}}const cu=new URL(location.href),hp=cu.host.split("."),sb=["www","m","sp"].includes(hp[0]);let io=false;for(const k in u){if(new RegExp(k).test(cu.href)){io=true;break}}const tT=ct("tit","tti1","tts1",true),tU=ct("url","tti2","tts2",true),tD=ct("url-domain","tti3","tts3",sb),tQ=ct("url-query","tti4","tts4",true),tO=ct("url-shortener","tti5","tts5",io);mp.appendChild(tT.r);mp.appendChild(tU.r);mp.appendChild(tD.r);mp.appendChild(tQ.r);mp.appendChild(tO.r);const sl=ce("div",{fontSize:"10px",color:"#888",textAlign:"right",marginTop:"4px",marginBottom:"4px",height:"12px",fontFamily:"inherit"},{id:"tts"});mp.appendChild(sl);const ta=ce("textarea",{width:"100%",height:"72px",marginTop:"4px",padding:"8px",border:"1px solid #ccc",borderRadius:"6px",resize:N,fontFamily:"monospace",fontSize:"11px",background:W,cursor:P,boxSizing:"border-box",transition:"opacity 0.2s ease"},{id:"ttt",rows:"4",readOnly:true});mp.appendChild(ta);const gl=ce("a",{display:"block",fontSize:"11px",color:C,textDecoration:"underline",textAlign:"right",marginTop:"8px",fontFamily:"inherit",width:"fit-content",marginLeft:"auto"},{href:"//github.com/weepjp/titurl/",target:"_blank",rel:"noopener noreferrer",textContent:"github"});mp.appendChild(gl);function up(){const s1=tT.i.checked,s2=tU.i.checked,s3=tD.i.checked,s4=tQ.i.checked,s5=tO.i.checked;[tD,tQ,tO].forEach(t=>{t.i.disabled=!s2;t.r.style.opacity=s2?"1":"0.4";t.r.style.pointerEvents=s2?"auto":N});if(!s1&&!s2){ta.disabled=true;ta.style.opacity="0.4";ta.style.pointerEvents=N;ta.value="Ahem Ahem...";sl.textContent="What's the point?";return}ta.disabled=false;ta.style.opacity="1";ta.style.pointerEvents="auto";let fu="";if(s2){let p=new URL(location.href);if(s4){const sk=["si","lc","app","feature","track","ref","tag","redirected","fbclid","gclid","twclid","s","vd_source"];[...p.searchParams.keys()].forEach(k=>{if(k.startsWith("utm_")||sk.includes(k)){p.searchParams.delete(k)}})}const h=p.host.split("."),su=["www","m","sp"].includes(h[0])?h.shift():"",pl=h.join(".");p.host=s3?pl:su?su+"."+pl:pl;fu=p.toString();if(s5){for(const x in u){const r=new RegExp(x);if(r.test(fu)){fu=fu.replace(r,u[x]);break}}!fu.includes(_q)&&fu.includes(_a)&&(fu=fu.replace(_a,_q));fu=fu.replace(/\/\/(www\.|m\.|sp\.)/,"//")}}let tp=[];s1&&tp.push(document.title);s2&&tp.push(fu);const rx=tp.join("\n");ta.value=rx;navigator.clipboard.writeText(rx).finally(()=>sl.textContent=m)}function se(o){o.i.addEventListener("change",(()=>{const c=o.i.checked;o.s.style.backgroundColor=c?C:G;o.k.style.transform=X(c);up()}))}rt.appendChild(mp);setTimeout((()=>{mp.style.opacity="1";mp.style.transform="translateY(0)"}),10);[tT,tU,tD,tQ,tO].forEach(se);ta.addEventListener("click",(function(){if(tT.i.checked||tU.i.checked){this.select();navigator.clipboard.writeText(this.value).then((()=>{sl.textContent="Copied! 📋";setTimeout((()=>{sl.textContent=m}),1500)}))}}));cb.addEventListener("click",(()=>{mp.style.opacity="0";mp.style.transform="translateY(-10px)";setTimeout((()=>mp.remove()),200)}));cb.addEventListener("mouseenter",(()=>cb.style.color="#333"));cb.addEventListener("mouseleave",(()=>cb.style.color="#aaa"));gl.addEventListener("mouseenter",(()=>gl.style.color="#888"));gl.addEventListener("mouseleave",(()=>gl.style.color=C));up()}catch(e){alert("Error:\n"+e.message)}})();
```


## url-domain exclusion

- w​w​w
- sp
- m

## url-query (Tracking code?) exclusion

- si=*
- lc=*
- app=*
- feature=*
- track=*
- ref=*
- tag=*
- redirected=*
- - and so on...

## url-shortener

- youtube.com/watch?v= -> youtu.be/
- youtube.com/shorts/ -> youtu.be/
- store.steampowered.com/app/ -> s.team/a/
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
- bilibili.com/video/ -> b23.tv/
- - and so on...




