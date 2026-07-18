# titurl


| titurl by weepjp |
| :---: | 
| <img width="280" height="308" alt="image" src="https://github.com/user-attachments/assets/e3105c21-1e74-4753-953b-50dca69aac47" /> |



- Title and URL Copy Bookmarklet
- YouTube(youtu.be), niconico(nico.ms), pixiv(pixiv.net/*/～)
- Kill unnecessary URL query like stacked shit that high!


# Bookmarklet (Javascript)

```
javascript:(()=> {try{const oldPanel=document.getElementById("ttp");if(oldPanel)oldPanel.remove();const amp=String.fromCharCode(38);const hash=String.fromCharCode(35);const question=String.fromCharCode(63);const uMap={};uMap["youtube.com/watch\\"+question+"v="]="youtu.be/";uMap["youtube.com/shorts/"]="youtu.be/";uMap["pixiv.net/artworks/"]="pixiv.net/i/";uMap["pixiv.net/users/"]="pixiv.net/u/";uMap["ch.nicovideo.jp/ch"]="nico.ms/ch";uMap["q.nicovideo.jp/watch/nq"]="nico.ms/nq";uMap["3d.nicovideo.jp/works/td"]="nico.ms/td";uMap["news.nicovideo.jp/watch/nw"]="nico.ms/nw";uMap["live.nicovideo.jp/watch/lv"]="nico.ms/lv";uMap["manga.nicovideo.jp/watch/mg"]="nico.ms/mg";uMap["seiga.nicovideo.jp/seiga/im"]="nico.ms/im";uMap["seiga.nicovideo.jp/seiga/"+hash+"!/im"]="nico.ms/im";uMap["commons.nicovideo.jp/works/nc"]="nico.ms/nc";uMap["nicovideo.jp/user/"]="nico.ms/user/";uMap["nicovideo.jp/watch/"]="nico.ms/";const rootEl=document.body||document.documentElement;if(!rootEl)throw new Error("No root");function createEl(tag,styles={},attrs={}){const el=document.createElement(tag);for(const[k,v]of Object.entries(styles))el.style[k]=v;for(const[k,v]of Object.entries(attrs)){"textContent"===k?el.textContent=v:"checked"===k||"readOnly"===k||"disabled"===k?el[k]=v:el.setAttribute(k,v)}return el}const mainPanel=createEl("div",{position:"fixed",top:"20px",right:"20px",zIndex:"2147483647",background:"#ffffff",color:"#333333",border:"1px solid #e0e0e0",padding:"16px",borderRadius:"12px",width:"300px",boxShadow:"0 10px 30px rgba(0,0,0,0.15)",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",boxSizing:"border-box",opacity:"0",transform:"translateY(-10px)",transition:"opacity 0.2s ease, transform 0.2s ease"},{id:"ttp"});const header=createEl("div",{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"14px",borderBottom:"1px solid #f0f0f0",paddingBottom:"8px",boxSizing:"border-box"});const titleText=createEl("span",{fontWeight:"bold",fontSize:"14px",color:"#111111"},{textContent:"titurl by weepjp"});const closeBtn=createEl("button",{background:"none",border:"none",fontSize:"20px",cursor:"pointer",color:"#aaaaaa",padding:"0",lineHeight:"1"},{id:"ttc",textContent:"×"});header.appendChild(titleText);header.appendChild(closeBtn);mainPanel.appendChild(header);function createToggle(labelTxt,inputId,sliderId,initChecked=false){const row=createEl("div",{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px",boxSizing:"border-box",transition:"opacity 0.2s ease"});const lbl=createEl("span",{fontSize:"13px"},{textContent:labelTxt});const wrapper=createEl("label",{position:"relative",display:"inline-block",width:"36px",height:"20px",cursor:"pointer"});const input=createEl("input",{position:"absolute",opacity:"0",width:"0",height:"0"},{type:"checkbox",id:inputId,checked:initChecked});const slider=createEl("span",{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",backgroundColor:initChecked?"#007aff":"#cccccc",transition:"0.2s",borderRadius:"20px"},{id:sliderId});const knob=createEl("span",{position:"absolute",height:"14px",width:"14px",left:"3px",bottom:"3px",backgroundColor:"#ffffff",transition:"0.2s",borderRadius:"50%",transform:initChecked?"translateX(16px)":"translateX(0)"});return slider.appendChild(knob),wrapper.appendChild(input),wrapper.appendChild(slider),row.appendChild(lbl),row.appendChild(wrapper),{row:row,input:input,slider:slider,knob:knob}}const currentUrl=new URL(location.href),hostParts=currentUrl.host.split("."),isSubDomain=["www","m","sp"].includes(hostParts[0]);let isOfficialMatch=false;for(const k in uMap){if(new RegExp(k).test(currentUrl.href)){isOfficialMatch=true;break}}const tgTitle=createToggle("tit","tti1","tts1",true),tgUrl=createToggle("url","tti2","tts2",true),tgDomain=createToggle("url-domain","tti3","tts3",isSubDomain),tgQuery=createToggle("url-query","tti4","tts4",true),tgOfficial=createToggle("url-shortener","tti5","tts5",isOfficialMatch);mainPanel.appendChild(tgTitle.row);mainPanel.appendChild(tgUrl.row);mainPanel.appendChild(tgDomain.row);mainPanel.appendChild(tgQuery.row);mainPanel.appendChild(tgOfficial.row);const textarea=createEl("textarea",{width:"100%",height:"72px",marginTop:"10px",padding:"8px",border:"1px solid #cccccc",borderRadius:"6px",resize:"none",fontFamily:"monospace",fontSize:"11px",background:"#f9f9f9",cursor:"pointer",boxSizing:"border-box",transition:"opacity 0.2s ease"},{id:"ttt",rows:"4",readOnly:true});mainPanel.appendChild(textarea);const statusLabel=createEl("div",{fontSize:"10px",color:"#007aff",textAlign:"right",marginTop:"4px",height:"12px",fontFamily:"inherit"},{id:"tts"});function doUpdate(){const showTitle=tgTitle.input.checked,showUrl=tgUrl.input.checked,doSubShort=tgDomain.input.checked,doQueryShort=tgQuery.input.checked,doOfficialShort=tgOfficial.input.checked;[tgDomain,tgQuery,tgOfficial].forEach(t=>{t.input.disabled=!showUrl;t.row.style.opacity=showUrl?"1":"0.4";t.row.style.pointerEvents=showUrl?"auto":"none"});if(!showTitle&&!showUrl){textarea.disabled=true;textarea.style.opacity="0.4";textarea.style.pointerEvents="none";textarea.value="Ahem Ahem...";statusLabel.textContent="What's the point?";return}textarea.disabled=false;textarea.style.opacity="1";textarea.style.pointerEvents="auto";let finalUrlStr="";if(showUrl){let p=new URL(location.href);if(doQueryShort){const skipKeys=["si","lc","app","feature","track","ref","tag","redirected","fbclid","gclid","twclid","s"];[...p.searchParams.keys()].forEach(k=>{if(k.startsWith("utm_")||skipKeys.includes(k)){p.searchParams.delete(k)}})}const h=p.host.split("."),sub=["www","m","sp"].includes(h[0])?h.shift():"",plain=h.join(".");p.host=doSubShort?plain:sub?sub+"."+plain:plain;finalUrlStr=p.toString();if(doOfficialShort){for(const x in uMap){const r=new RegExp(x);if(r.test(finalUrlStr)){finalUrlStr=finalUrlStr.replace(r,uMap[x]);break}}!finalUrlStr.includes(question)&&finalUrlStr.includes(amp)&&(finalUrlStr=finalUrlStr.replace(amp,question))}}let textParts=[];showTitle&&textParts.push(document.title);showUrl&&textParts.push(finalUrlStr);const resultText=textParts.join("\n");textarea.value=resultText;navigator.clipboard.writeText(resultText).then(()=>statusLabel.textContent="Copied to clipboard ✨").catch(()=>statusLabel.textContent="Click to copy 📋")}function setupToggleEvent(tgObj){tgObj.input.addEventListener("change",(()=>{tgObj.input.checked?(tgObj.slider.style.backgroundColor="#007aff",tgObj.knob.style.transform="translateX(16px)"):(tgObj.slider.style.backgroundColor="#cccccc",tgObj.knob.style.transform="translateX(0)"),doUpdate()}))}mainPanel.appendChild(statusLabel);rootEl.appendChild(mainPanel);setTimeout((()=>{mainPanel.style.opacity="1";mainPanel.style.transform="translateY(0)"}),10);[tgTitle,tgUrl,tgDomain,tgQuery,tgOfficial].forEach(setupToggleEvent);textarea.addEventListener("click",(function(){if(tgTitle.input.checked||tgUrl.input.checked){this.select();navigator.clipboard.writeText(this.value).then((()=>{statusLabel.textContent="Copied! 📋";setTimeout((()=>{statusLabel.textContent="Copied to clipboard ✨"}),1500)}))}}));closeBtn.addEventListener("click",(()=>{mainPanel.style.opacity="0";mainPanel.style.transform="translateY(-10px)";setTimeout((()=>mainPanel.remove()),200)}));closeBtn.addEventListener("mouseenter",(()=>closeBtn.style.color="#333333"));closeBtn.addEventListener("mouseleave",(()=>closeBtn.style.color="#aaaaaa"));doUpdate()}catch(err){alert("Error:\n"+err.message)}})();
```


## Subdomain exclusion

- w​w​w
- sp
- m

## URL-Query parameter or Tracking code exclusion

- si=*
- lc=*
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




