# titurl


| titurl |
| :----: | 
| <img width="279" height="331" alt="image" src="https://github.com/user-attachments/assets/fbfc00df-e126-4d71-a8be-23706c012a1e" /> |


- Title and URL Copy Bookmarklet
- YouTube(youtu.be), niconico(nico.ms), pixiv(pixiv.net/*/～)
- Kill unnecessary URL query like stacked shit that high!


# Bookmarklet (Javascript)

```
javascript:(()=> {try{const op=document.getElementById("ttp");if(op)op.remove();const _a=String.fromCharCode(38),_h=String.fromCharCode(35),_q=String.fromCharCode(63);const um={};um["youtube.com/watch\\"+_q+"v="]="youtu.be/";um["youtube.com/shorts/"]="youtu.be/";um["pixiv.net/artworks/"]="pixiv.net/i/";um["pixiv.net/users/"]="pixiv.net/u/";um["ch.nicovideo.jp/ch"]="nico.ms/ch";um["q.nicovideo.jp/watch/nq"]="nico.ms/nq";um["3d.nicovideo.jp/works/td"]="nico.ms/td";um["news.nicovideo.jp/watch/nw"]="nico.ms/nw";um["live.nicovideo.jp/watch/lv"]="nico.ms/lv";um["manga.nicovideo.jp/watch/mg"]="nico.ms/mg";um["seiga.nicovideo.jp/seiga/im"]="nico.ms/im";um["seiga.nicovideo.jp/seiga/"+_h+"!/im"]="nico.ms/im";um["commons.nicovideo.jp/works/nc"]="nico.ms/nc";um["nicovideo.jp/user/"]="nico.ms/user/";um["nicovideo.jp/watch/"]="nico.ms/";const rt=document.body||document.documentElement;if(!rt)throw new Error("No root");function ce(tag,st={},at={}){const el=document.createElement(tag);for(const[k,v]of Object.entries(st))el.style[k]=v;for(const[k,v]of Object.entries(at)){"textContent"===k?el.textContent=v:"checked"===k||"readOnly"===k||"disabled"===k?el[k]=v:el.setAttribute(k,v)}return el}const mp=ce("div",{position:"fixed",top:"20px",right:"20px",zIndex:"2147483647",background:"#fff",color:"#333",border:"1px solid #e0e0e0",padding:"16px",borderRadius:"12px",width:"300px",boxShadow:"0 10px 30px rgba(0,0,0,0.15)",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",boxSizing:"border-box",opacity:"0",transform:"translateY(-10px)",transition:"opacity 0.2s ease, transform 0.2s ease"},{id:"ttp"});const hd=ce("div",{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"14px",borderBottom:"1px solid #f0f0f0",paddingBottom:"8px",boxSizing:"border-box"});const ttx=ce("span",{fontWeight:"bold",fontSize:"14px",color:"#111"},{textContent:"titurl"});const cb=ce("button",{background:"none",border:"none",fontSize:"20px",cursor:"pointer",color:"#aaa",padding:"0",lineHeight:"1"},{id:"ttc",textContent:"×"});hd.appendChild(ttx);hd.appendChild(cb);mp.appendChild(hd);function ct(txt,id,sid,chk=false){const rw=ce("div",{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px",boxSizing:"border-box",transition:"opacity 0.2s ease"});const lb=ce("span",{fontSize:"13px"},{textContent:txt});const wp=ce("label",{position:"relative",display:"inline-block",width:"36px",height:"20px",cursor:"pointer"});const inpt=ce("input",{position:"absolute",opacity:"0",width:"0",height:"0"},{type:"checkbox",id:id,checked:chk});const sd=ce("span",{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",backgroundColor:chk?"#0af":"#ccc",transition:"0.2s",borderRadius:"20px"},{id:sid});const kn=ce("span",{position:"absolute",height:"14px",width:"14px",left:"3px",bottom:"3px",backgroundColor:"#fff",transition:"0.2s",borderRadius:"50%",transform:chk?"translateX(16px)":"translateX(0)"});return sd.appendChild(kn),wp.appendChild(inpt),wp.appendChild(sd),rw.appendChild(lb),rw.appendChild(wp),{rw:rw,input:inpt,slider:sd,knob:kn}}const cu=new URL(location.href),hp=cu.host.split("."),isSub=["www","m","sp"].includes(hp[0]);let isOff=false;for(const k in um){if(new RegExp(k).test(cu.href)){isOff=true;break}}const tT=ct("tit","tti1","tts1",true),tU=ct("url","tti2","tts2",true),tD=ct("url-domain","tti3","tts3",isSub),tQ=ct("url-query","tti4","tts4",true),tO=ct("url-shortener","tti5","tts5",isOff);mp.appendChild(tT.rw);mp.appendChild(tU.rw);mp.appendChild(tD.rw);mp.appendChild(tQ.rw);mp.appendChild(tO.rw);const sl=ce("div",{fontSize:"10px",color:"#888",textAlign:"right",marginTop:"4px",marginBottom:"4px",height:"12px",fontFamily:"inherit"},{id:"tts"});mp.appendChild(sl);const ta=ce("textarea",{width:"100%",height:"72px",marginTop:"4px",padding:"8px",border:"1px solid #ccc",borderRadius:"6px",resize:"none",fontFamily:"monospace",fontSize:"11px",background:"#f9f9f9",cursor:"pointer",boxSizing:"border-box",transition:"opacity 0.2s ease"},{id:"ttt",rows:"4",readOnly:true});mp.appendChild(ta);const gl=ce("a",{display:"block",fontSize:"11px",color:"#0af",textDecoration:"underline",textAlign:"right",marginTop:"8px",fontFamily:"inherit",width:"fit-content",marginLeft:"auto"},{href:"https://github.com/weepjp/titurl/",target:"_blank",rel:"noopener noreferrer",textContent:"github"});mp.appendChild(gl);function upd(){const sT=tT.input.checked,sU=tU.input.checked,dS=tD.input.checked,dQ=tQ.input.checked,dO=tO.input.checked;[tD,tQ,tO].forEach(t=>{t.input.disabled=!sU;t.rw.style.opacity=sU?"1":"0.4";t.rw.style.pointerEvents=sU?"auto":"none"});if(!sT&&!sU){ta.disabled=true;ta.style.opacity="0.4";ta.style.pointerEvents="none";ta.value="Ahem Ahem...";sl.textContent="What's the point?";return}ta.disabled=false;ta.style.opacity="1";ta.style.pointerEvents="auto";let fu="";if(sU){let p=new URL(location.href);if(dQ){const sk=["si","lc","app","feature","track","ref","tag","redirected","fbclid","gclid","twclid","s"];[...p.searchParams.keys()].forEach(k=>{if(k.startsWith("utm_")||sk.includes(k)){p.searchParams.delete(k)}})}const h=p.host.split("."),sub=["www","m","sp"].includes(h[0])?h.shift():"",plain=h.join(".");p.host=dS?plain:sub?sub+"."+plain:plain;fu=p.toString();if(dO){for(const x in um){const r=new RegExp(x);if(r.test(fu)){fu=fu.replace(r,um[x]);break}}!fu.includes(_q)&&fu.includes(_a)&&(fu=fu.replace(_a,_q))}}let tp=[];sT&&tp.push(document.title);sU&&tp.push(fu);const rx=tp.join("\n");ta.value=rx;navigator.clipboard.writeText(rx).then(()=>sl.textContent="Click text to copy").catch(()=>sl.textContent="Click to copy 📋")}function ste(to){to.input.addEventListener("change",(()=>{to.input.checked?(to.slider.style.backgroundColor="#0af",to.knob.style.transform="translateX(16px)"):(to.slider.style.backgroundColor="#ccc",to.knob.style.transform="translateX(0)"),upd()}))}rt.appendChild(mp);setTimeout((()=>{mp.style.opacity="1";mp.style.transform="translateY(0)"}),10);[tT,tU,tD,tQ,tO].forEach(ste);ta.addEventListener("click",(function(){if(tT.input.checked||tU.input.checked){this.select();navigator.clipboard.writeText(this.value).then((()=>{sl.textContent="Copied! 📋";setTimeout((()=>{sl.textContent="Click text to copy"}),1500)}))}}));cb.addEventListener("click",(()=>{mp.style.opacity="0";mp.style.transform="translateY(-10px)";setTimeout((()=>mp.remove()),200)}));cb.addEventListener("mouseenter",(()=>cb.style.color="#333"));cb.addEventListener("mouseleave",(()=>cb.style.color="#aaa"));gl.addEventListener("mouseenter",(()=>gl.style.color="#888"));gl.addEventListener("mouseleave",(()=>gl.style.color="#0af"));upd()}catch(err){alert("Error:\n"+err.message)}})();
```


## url-domain exclusion

- w​w​w
- sp
- m

## URL-query parameter (Tracking code?) exclusion

- si=*
- lc=*
- app=*
- feature=*
- track=*
- ref=*
- tag=*
- redirected=*


## url-shortener

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




