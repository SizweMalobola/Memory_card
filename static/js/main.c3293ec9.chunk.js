(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{17:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var r=c(1),s=c.n(r),n=c(7),i=c.n(n),o=(c(17),c(6)),a=c(8),l=c(9),d=c(3),u=c(12),h=c(10),j=c(0);var g=function(e){var t=e.caption,c=e.imgUrl,r=e.eventHandler;return Object(j.jsx)("div",{className:"card",id:t,onClick:function(e){r(t)},children:Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsxs)("div",{className:"card-front",children:[Object(j.jsx)("div",{style:{backgroundImage:"url(".concat("/Memory_card"+c,")")},className:"card-img"}),Object(j.jsx)("div",{className:"card-caption",children:Object(j.jsx)("h3",{children:function(e){var t=e.split("-");return(t=t.join(" ")).toUpperCase()}(t)})})]}),Object(j.jsx)("div",{className:"card-back",children:Object(j.jsx)("img",{src:"https://static.wikia.nocookie.net/hunterxhunter/images/0/05/Hunter_Association_logo.png/revision/latest?cb=20180405075402",alt:"hunter x hunter logo"})})]})})},m=function(e){Object(u.a)(c,e);var t=Object(h.a)(c);function c(e){var r;return Object(a.a)(this,c),(r=t.call(this,e)).state={deck:[{url:"/assets/alluka_zoldyck.jpeg",id:"alluka-zoldyck"},{url:"/assets/chrollo_lucilfer.jpeg",id:"chrollo-lucilfer"},{url:"/assets/feitan_portor.jpeg",id:"feitan-portor"},{url:"/assets/ging_freecss.png",id:"ging-freecss"},{url:"/assets/gon_freecss.jpeg",id:"gon-freecss"},{url:"/assets/hisoka.jpeg",id:"hisoka"},{url:"/assets/illumi_zoldyck.png",id:"illumi-zoldyck"},{url:"/assets/issac_netero.png",id:"issac-netero"},{url:"/assets/killua_zoldyck.jpeg",id:"killua-zoldyck"},{url:"/assets/kite.jpeg",id:"kite"},{url:"/assets/leorio.png",id:"leorio"},{url:"/assets/meruem.jpeg",id:"meruem"}],currentScore:0,highScore:0,cardIds:[]},r.checkId=r.checkId.bind(Object(d.a)(r)),r.shuffleDeck=r.shuffleDeck.bind(Object(d.a)(r)),r}return Object(l.a)(c,[{key:"checkId",value:function(e){console.log("top id is ".concat(e)),this.state.cardIds.includes(e)?(this.setState({cardIds:[]}),this.state.currentScore>this.state.highScore&&this.setState({highScore:this.state.currentScore}),this.setState({currentScore:0}),console.log("game over")):this.setState({cardIds:[].concat(Object(o.a)(this.state.cardIds),[e]),currentScore:this.state.currentScore+1}),console.log("bottom id is ".concat(e))}},{key:"shuffleDeck",value:function(e){for(var t=Object(o.a)(e),c=[];12!==c.length;){var r=Math.floor(Math.random()*t.length),s=t.splice(r,1);"undefined"!==s[0]&&c.push(s[0])}return c}},{key:"componentDidMount",value:function(){var e=this;console.log("did mount"),this.setState({deck:this.shuffleDeck(this.state.deck)});var t=document.querySelectorAll(".card");Array.from(t).forEach((function(t){t.addEventListener("click",(function(t){var c=document.querySelectorAll(".card-content");c.forEach((function(e){e.style.transform="rotateY(180deg)"})),setTimeout((function(){e.setState({deck:e.shuffleDeck(e.state.deck)})}),900),setTimeout((function(){c.forEach((function(e){e.style.transform="rotateY(0deg)"}))}),1100)}))}))}},{key:"componentDidUpdate",value:function(){console.log("did update");var e=document.querySelector("#game-current-score");document.querySelector("#game-high-score").innerText=this.state.highScore,e.innerText=this.state.currentScore}},{key:"render",value:function(){var e=this;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{id:"card-grid",children:this.state.deck.map((function(t,c){return Object(j.jsx)(g,{eventHandler:e.checkId,caption:t.id,imgUrl:t.url},c)}))})})}}]),c}(r.Component),f=c(11);var b=function(){var e=Object(r.useState)(!1),t=Object(f.a)(e,2),c=t[0],s=t[1];return Object(j.jsxs)("div",{id:"game-description-div",children:[Object(j.jsx)("button",{onClick:function(){return s(!0)},children:" ? "}),c&&Object(j.jsx)("span",{onClick:function(){return s(!1)},children:"This application puts your memory to the test. You are presented with multiple images of manga characters. The images get shuffled every-time they are clicked. You CAN NOT click on any image more than once or else your score resets to zero. The main objective is to get the highest score as possible."})]})};var v=function(){return Object(j.jsxs)("div",{id:"game-score-div",children:[Object(j.jsxs)("h1",{children:["HighScore : ",Object(j.jsx)("span",{id:"game-high-score"})]}),Object(j.jsxs)("h1",{children:["CurrentScore : ",Object(j.jsx)("span",{id:"game-current-score"})]})]})};var k=function(e){var t=e.title,c=e.children;return Object(j.jsxs)("div",{id:"game-title-div",children:[Object(j.jsxs)("div",{id:"game-logo-div",children:[Object(j.jsx)("img",{src:"https://static.wikia.nocookie.net/hunterxhunter/images/0/05/Hunter_Association_logo.png/revision/latest?cb=20180405075402",alt:"hunter x hunter logo"}),Object(j.jsx)("h1",{children:t})]}),c]})};var p=function(){return Object(j.jsxs)("header",{children:[Object(j.jsx)(k,{title:"Memory Game",children:Object(j.jsx)(b,{})}),Object(j.jsx)(v,{})]})};var O=function(){return Object(j.jsxs)("div",{id:"container",children:[Object(j.jsx)(p,{}),Object(j.jsx)(m,{})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),r(e),s(e),n(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),x()}},[[19,1,2]]]);
//# sourceMappingURL=main.c3293ec9.chunk.js.map