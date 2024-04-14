(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4677:function(e,i,r){var n={"./billion.json":8448,"./chiffrer.json":9148,"./digital.json":8802,"./monnaie.json":2681,"./nombres.json":2024,"./originel.json":7116};function t(e){return r(s(e))}function s(e){if(!r.o(n,e)){var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return n[e]}t.keys=function(){return Object.keys(n)},t.resolve=s,e.exports=t,t.id=4677},3441:function(e,i,r){Promise.resolve().then(r.bind(r,1898))},1898:function(e,i,r){"use strict";r.r(i),r.d(i,{default:function(){return J}});var n=r(7437),t=r(2265),s=r(5184),o=r(2129),l=r(7625),a=r(2197),u=r(8929),d=r(7306),c=r(8511),p=r(270),f=r(2834),g=r(4696),h=r(1326),x=r(511),m=r(2030),j=r(3536),b=r(335),y=r(2419),Z=r(4078),v=r(753),w=r(3742),O=r(7002),_=r(4349),q=r(4990);O.Z[500];let N=_.Z[500],L=(0,j.ZP)("div")(e=>{let{theme:i}=e;return{...i.typography.body1}}),S=(0,j.ZP)("div")(e=>{let{theme:i}=e;return{...i.typography.body2}});function E(e){return void 0!==e&&(e||"").length>0}let k=e=>(0,n.jsx)(t.Fragment,{children:(0,n.jsxs)(q.Z,{elevation:3,children:[" ",(0,n.jsxs)(p.Z,{id:e.id,children:[(0,n.jsxs)(g.Z,{children:[(0,n.jsx)(h.Z,{sx:{p:1},children:(0,n.jsxs)(x.Z,{variant:"h5",component:"div",children:[e.titre,e.isnew?(0,n.jsx)(w.Z,{label:"Nouveau",size:"small",sx:{color:N,ml:1}}):null]})}),(0,n.jsx)(m.Z,{}),(0,n.jsxs)(u.Z,{sx:{width:"100%",mt:1},spacing:1,children:[E(e.wrong)?(0,n.jsx)(d.Z,{icon:(0,n.jsx)(Z.Z,{}),sx:{fontWeight:"bold"},severity:"error",children:(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:e.wrong}})}):null,E(e.right)?(0,n.jsx)(d.Z,{icon:(0,n.jsx)(y.Z,{}),sx:{fontWeight:"bold"},severity:"success",children:(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:e.right}})}):null]}),(0,n.jsxs)(h.Z,{sx:{p:E(e.info)&&E(e.add)?1:0,mt:1},children:[function(e){if(E(e))return(0,n.jsx)(L,{dangerouslySetInnerHTML:{__html:e}})}(e.info),function(e){if(E(e))return(0,n.jsxs)(t.Fragment,{children:[(0,n.jsx)(m.Z,{sx:{my:1}}),(0,n.jsx)(S,{dangerouslySetInnerHTML:{__html:e}})]})}(e.add)]})]}),(0,n.jsx)(b.Z,{href:"#"+e.id,sx:{float:"right",color:N,ml:1},children:(0,n.jsx)(v.Z,{})})]})]})});k.defaultProps={titre:"title",content:"content",isnew:!1};var F=()=>{let e=r(4677),i=Object.fromEntries(e.keys().map(i=>[i.match(/\/(\w+)\.json$/)[1],e(i)])),s=[];for(let[e,r]of Object.entries(i))s.push(r);s.sort(function(e,i){return parseFloat(i.date)-parseFloat(e.date)});let o=s.map(function(e){return(0,n.jsx)(t.Fragment,{children:(0,n.jsx)(f.Z,{xs:6,children:(0,n.jsx)(p.Z,{children:k(e)})})})});return(0,n.jsx)(t.Fragment,{children:o})};let C=(0,s.Z)({palette:{mode:"dark"}});function J(){let e=r(4677).keys();return e.forEach(function(e,i){let r=e.substr(0,e.lastIndexOf("."));r=r.substr(r.indexOf("/")+1),this[i]=r},e),(0,n.jsxs)(o.Z,{theme:C,children:[(0,n.jsx)(l.ZP,{}),(0,n.jsxs)(a.Z,{sx:{py:5},children:[(0,n.jsxs)(d.Z,{severity:"info",variant:"outlined",sx:{mb:3},children:[(0,n.jsx)(c.Z,{children:"Bienvenue sur Sui Generis !"}),"L'objectif de cette page est de condenser les erreurs les plus fr\xe9quentes en mati\xe8re de r\xe8gles et de conventions de la langue fran\xe7aise."]}),(0,n.jsx)(u.Z,{spacing:{sm:2},useFlexGap:!0,flexWrap:"wrap",children:F()})]})]})}},8448:function(e){"use strict";e.exports=JSON.parse('{"id":"billion","date":"240412","titre":"Billion","wrong":"un billion = one billion","right":"10<sup>6</sup> = un million = one million<br/>10<sup>12</sup> = un billion = one trillion<br/>10<sup>18</sup> = un trillion = one quintillion","isnew":false}')},9148:function(e){"use strict";e.exports=JSON.parse('{"id":"chiffrer","date":"240412","titre":"Crypter","wrong":"Crypter, cryptage, encrypter, d\xe9encrypter","right":"Chiffrer, d\xe9chiffrer","info":"Le terme <i>crypter</i> renvoie \xe0 la notion d\'obfusquer une donn\xe9e sans \xeatre en mesure de la d\xe9chiffrer par la suite. C\'est la raison pour laquelle <i>cryptage</i> et ses d\xe9riv\xe9s sont jug\xe9s impropres. L\'on pr\xe9f\xe8re utiliser les termes <b>chiffrer</b>, <b>chiffrage</b> et <b>d\xe9chiffrage</b>.","add":"<i>Encrypter</i> et <i>d\xe9encrypter</i> sont des anglicismes.","isnew":false}')},8802:function(e){"use strict";e.exports=JSON.parse('{"id":"digital","date":"240413","titre":"Digital","wrong":"digitale, digital","right":"num\xe9rique","info":"L’adjectif digital se r\xe9f\xe8re \xe0 ce qui appartient aux doigts. Num\xe9rique sera le terme \xe0 privil\xe9gier pour parler de l’industrie et du monde de l’informatique.","add":"Digital est un anglicisme utilis\xe9 par les agences de communication.","isnew":true}')},2681:function(e){"use strict";e.exports=JSON.parse('{"id":"monnaie","date":"240410","titre":"Monnaie","wrong":"20 $","right":"$20, US$20","isnew":false}')},2024:function(e){"use strict";e.exports=JSON.parse('{"id":"nombres","date":"240413","titre":"Les grands nombres","wrong":"1,000 ou 1.000","right":"1 000","info":"En <b>France</b>, le s\xe9parateur des milliers est l\'espace ins\xe9cable.","add":"En <i>Belgique</i>, c\'est le point (ex: <i>1.000</i> pour un millier).</p><p>Au <i>Royaume-uni</i>, c\'est la virgule (ex: <i>1,000</i> pour un millier).","isnew":true}')},7116:function(e){"use strict";e.exports=JSON.parse('{"id":"originel","date":"240411","titre":"Original","wrong":"Le plan original pour [...]","right":"Le plan originel pour [...]","info":"<i>Original</i> signifie \xab Qui \xe9mane directement de \xbb, tandis qu\'<b>originel</b> qualifie ce qui vient de l\'origine.","add":"Pour d\xe9signer une musique qui a \xe9t\xe9 reprise et modifi\xe9e pour cr\xe9er des remixes, on de parlera de la version <b>originale</b>.","isnew":false}')}},function(e){e.O(0,[565,971,23,744],function(){return e(e.s=3441)}),_N_E=e.O()}]);