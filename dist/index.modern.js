import{Circle as e,X as t,WarningOctagon as r,EyeClosed as o,Eye as n,Check as i,Clipboard as a,Question as l,TrendUp as d,TrendDown as p,Moon as c,Sun as s}from"phosphor-react";import g,{useState as m,useEffect as u,useLayoutEffect as b,useRef as h,useCallback as $}from"react";import{createStitches as f,createTheme as v,keyframes as y,globalCss as w}from"@stitches/react";import{parseCookies as k,setCookie as x}from"nookies";import W from"next/link";import{useRouter as C}from"next/router";function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},E.apply(this,arguments)}function S(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t.indexOf(r=i[o])>=0||(n[r]=e[r]);return n}const T={phone:"@media only screen and (max-width: 720px)",tabletX:"@media only screen and (min-width: 721px) and (max-width: 960px)",tablet:"@media only screen and (max-width: 960px)",laptopX:"@media only screen and (min-width: 961px) and (max-width: 1580px)",laptop:"@media only screen and (max-width: 1580px)",desktopX:"@media only screen and (min-width: 1581px) and (max-width: 2160px)",desktop:"@media only screen and (max-width: 2160px)",wide:"@media only screen and (min-width: 2161px)",dark:"@media only screen and (prefers-color-scheme: dark)"},{theme:B,css:R,styled:L,getCssText:I}=f({theme:{colors:{baseBody:"#ffffff",base100:"rgb(13, 24, 47)",base200:"rgba(13, 24, 47, 0.9)",base300:"rgba(13, 24, 47, 0.15)",base400:"rgba(13, 24, 47, 0.1)",baseContrast100:"rgb(255, 255, 255)",baseContrast200:"rgb(230, 240, 241)",baseContrast300:"rgba(255, 255, 255, 0.15)",baseContrast400:"rgba(255, 255, 255, 0.1)",red100:"rgb(165, 71, 65)",red200:"rgb(249, 187, 183)",red300:"rgb(241, 202, 202)",red400:"rgba(165, 71, 65, 0.2)",yellow100:"rgb(172, 113, 5)",yellow200:"rgb(249, 221, 170)",yellow300:"rgb(245, 226, 195)",yellow400:"rgba(172, 113, 5, 0.2)",green100:"rgb(8, 112, 77)",green200:"rgb(178, 240, 203)",green300:"rgb(202, 243, 226)",green400:"rgba(8, 105, 112, 0.2)",blue100:"rgb(5, 91, 141)",blue200:"rgb(185, 210, 237)",blue300:"rgb(206, 222, 240)",blue400:"rgba(5, 91, 141, 0.2)",navy100:"inherit",navy200:"rgba(0, 76, 104, 0.12)",navy300:"rgba(0, 76, 104, 0.08)",navy400:"rgba(0, 76, 104, 0.04)",purple100:"rgb(89, 33, 141)",purple200:"rgb(219, 195, 244)",purple300:"rgb(229, 212, 246)",purple400:"rgba(89, 33, 141, 0.2)",pink100:"rgb(107, 26, 83)",pink200:"rgb(240, 195, 226)",pink300:"rgb(245, 213, 235)",pink400:"rgba(107, 26, 83, 0.2)",border100:"rgba(0, 1, 2, 0.122)",border200:"rgba(0, 1, 2, 0.088)",border300:"rgba(0, 1, 2, 0.066)"},space:{1:"0.2rem",2:"0.4rem",3:"1rem",4:"1.6rem",5:"2rem",6:"2.5rem",7:"3.5rem",8:"5rem",9:"7rem",10:"8.5rem",11:"11rem",12:"15rem",h1:"$6",h2:"$5",h3:"$3",h4:"$4",h5:"$3",h6:"$3",t1:"$3",t2:"$2",t3:"$1"},fonts:{body:"Graphik, system-ui, sans-serif"},fontSizes:{h1:"3rem",h2:"2.5rem",h3:"2rem",h4:"1.8rem",h5:"1.7rem",h6:"1.6rem",t1:"1.5rem",t2:"1.4rem",t3:"1.3rem"},lineHeights:{h1:"1.3",h2:"1.3",h3:"1.4",h4:"1.4",h5:"1.5",h6:"1.45",t1:"1.4",t2:"1.4",t3:"1.3"},sizes:{1:"98%",2:"97%",3:"1440px",4:"1600px",5:"1800px"},radii:{1:"0.5rem",2:"1rem",3:"1.5rem"},shadows:{1:"0 0.2rem 0.1rem rgba(0, 0, 0, 0.01)",2:"0 0.5rem 0.25rem rgba(0, 0, 0, 0.033)",3:"0 1rem 2rem rgba(0, 0, 0, 0.099)"},zIndices:{dropdown:10,tooltip:15,alert:100,cookies:9999},transitions:{1:"all 0.33s ease-in-out"},media:T},utils:{pt:e=>({paddingTop:`${e}!important`}),pb:e=>({paddingBottom:`${e}!important`}),pl:e=>({paddingLeft:`${e}!important`}),pr:e=>({paddingRight:`${e}!important`}),ptb:e=>({paddingTop:`${e}!important`,paddingBottom:`${e}!important`}),plr:e=>({paddingLeft:`${e}!important`,paddingRight:`${e}!important`}),mt:e=>({marginTop:`${e}!important`}),mb:e=>({marginBottom:`${e}!important`}),ml:e=>({marginLeft:`${e}!important`}),mr:e=>({marginRight:`${e}!important`}),mtb:e=>({marginTop:`${e}!important`,marginBottom:`${e}!important`}),mlr:e=>({marginLeft:`${e}!important`,marginRight:`${e}!important`}),bt:e=>({borderTop:`0.1rem solid ${e}`}),bb:e=>({borderBottom:`0.1rem solid ${e}`}),bl:e=>({borderLeft:`0.1rem solid ${e}`}),br:e=>({borderRight:`0.1rem solid ${e}`}),ft:e=>({fontSize:`${e}!important`,lineHeight:`${e}!important`,"&:last-child":{marginBottom:0},[T.phone]:{fontSize:`calc(${e} * .85) !important`},[T.tabletX]:{fontSize:`calc(${e} * .9) !important`},[T.laptopX]:{fontSize:`calc(${e} * .95) !important`}}),hidden:e=>({display:"auto",[T[e]]:{display:"none"}}),visible:e=>({display:"none",[T[e]]:{display:"block"}}),visibleInline:e=>({display:"none",[T[e]]:{display:"inline-block"}}),phone:e=>({[T.phone]:e}),tablet:e=>({[T.tablet]:e}),tabletX:e=>({[T.tabletX]:e}),laptop:e=>({[T.laptop]:e}),laptopX:e=>({[T.laptopX]:e}),desktop:e=>({[T.desktop]:e}),desktopX:e=>({[T.desktopX]:e}),wide:e=>({[T.wide]:e})}}),F=v("dark",{colors:E({},B.colors,{baseBody:"rgb(1, 1, 11)",base100:"rgb(255, 255, 255)",base200:"#e2feff5)",base300:"rgba(255, 255, 255, 0.2)",base400:"rgba(255, 255, 255, 0.1)",baseContrast100:"rgb(0, 2, 10)",baseContrast200:"rgb(6, 70, 77)",baseContrast300:"rgba(45, 90, 126, 0.15)",baseContrast400:"rgba(45, 90, 126, 0.1)",red100:"rgb(248, 170, 165)",red200:"rgba(212, 100, 92, 0.3)",red300:"rgba(212, 100, 92, 0.2)",red400:"rgba(109, 23, 16, 0.1)",yellow100:"rgb(248, 225, 165)",yellow200:"rgba(209, 162, 92, 0.3)",yellow300:"rgba(209, 162, 92, 0.2)",yellow400:"rgba(209, 162, 92, 0.1)",green100:"rgb(8, 112, 77)",green200:"rgba(209, 162, 92, 0.3)",green300:"rgba(202, 243, 226, 0.116)",green400:"rgba(8, 105, 112, 0.2)",blue100:"rgb(5, 91, 141)",blue200:"rgb(185, 210, 237)",blue300:"rgb(206, 222, 240)",blue400:"rgba(5, 91, 141, 0.2)",navy100:"inherit",navy200:"rgba(255,255,255, 0.33)",navy300:"rgba(255,255,255, 0.133)",navy400:"rgba(255,255,255, 0.066)",purple100:"rgb(89, 33, 141)",purple200:"rgb(219, 195, 244)",purple300:"rgb(229, 212, 246)",purple400:"rgba(89, 33, 141, 0.2)",pink100:"rgb(107, 26, 83)",pink200:"rgb(240, 195, 226)",pink300:"rgb(245, 213, 235)",pink400:"rgba(107, 26, 83, 0.2)",border100:"rgba(255, 255, 255, 0.15)",border200:"rgba(255, 255, 255, 0.05)"})});function z(){const e={top:{default:{paddingTop:0},1:{paddingTop:"$1"},2:{paddingTop:"$2"},3:{paddingTop:"$3"},4:{paddingTop:"$4"},5:{paddingTop:"$5"},6:{paddingTop:"$6"},7:{paddingTop:"$7"},8:{paddingTop:"$8"},9:{paddingTop:"$9"},10:{paddingTop:"$10"},11:{paddingTop:"$11"},12:{paddingTop:"$12"}},bottom:{default:{paddingBottom:0},1:{paddingBottom:"$1"},2:{paddingBottom:"$2"},3:{paddingBottom:"$3"},4:{paddingBottom:"$4"},5:{paddingBottom:"$5"},6:{paddingBottom:"$6"},7:{paddingBottom:"$7"},8:{paddingBottom:"$8"},9:{paddingBottom:"$9"},10:{paddingBottom:"$10"},11:{paddingBottom:"$11"},12:{paddingBottom:"$12"}}};return{BlockWrapper:L("div",{minWidth:"100%",width:"100%",paddingLeft:"$2",paddingRight:"$2",variants:E({theme:{default:{backgroundColor:"$baseBody",color:"$base100"},dark:{backgroundColor:"$base100",color:"$baseContrast100"},alternate:{backgroundColor:"$baseContrast200",color:"$base100"},light:{backgroundColor:"$baseContrast100",color:"$base100"}}},e)}),BlockInnerWrapper:L("div",{margin:"auto",[T.phone]:{width:"$1"},[T.tabletX]:{width:"$2"},[T.laptopX]:{width:"$3",maxWidth:"96%"},[T.desktopX]:{width:"$4",maxWidth:"97%"},[T.wide]:{width:"$5",maxWidth:"95%"}}),ColumnWrapper:L("div",{marginLeft:0,flex:"1 1 auto",maxWidth:"100%",width:"100%",marginBottom:0,variants:E({left:{false:{paddingLeft:"$4",[T.phone]:{paddingLeft:"$3"},[T.wide]:{paddingLeft:"$5"}},true:{paddingLeft:"$7",[T.phone]:{paddingLeft:"$3"},[T.tabletX]:{paddingLeft:"$6"}}},right:{false:{paddingRight:"$4",[T.phone]:{paddingRight:"$3"},[T.wide]:{paddingRight:"$5"}},true:{paddingRight:"$7",[T.phone]:{paddingRight:"$3"},[T.tabletX]:{paddingRight:"$6"}}}},e)}),ElementWrapper:L("div",{marginBlockStart:0,marginBlockEnd:0,variants:E({},e)}),SectionWrapper:L("div",{display:"flex",flexDirection:"row",flexWrap:"wrap",width:"100%",maxWidth:"100%","*":{boxSizing:"border-box"},variants:E({},e)})}}const{SectionWrapper:A}=z();function H({align:e="initial",bottom:t,children:r,css:o,id:n,top:i}){/*#__PURE__*/return g.createElement(A,{bottom:t||"default",css:E({alignItems:e,justifyContent:e,"*":{alignItems:e}},o),id:n,top:i||"default"},r)}const{ElementWrapper:O}=z();function X({align:e="inherit",bottom:t,children:r,css:o,id:n,top:i}){/*#__PURE__*/return g.createElement(O,{bottom:t||"default",css:E({textAlign:e},o),id:n,top:i||"default"},r)}const{ColumnWrapper:D}=z();function P({align:e="inherit",bottom:t,children:r,css:o,extra:n,id:i,minimal:a,offset:l=0,offsetDesktop:d,offsetLaptop:p,offsetPhone:c,offsetTablet:s,offsetWide:m,top:u,width:b=100,widthDesktop:h,widthLaptop:$,widthPhone:f,widthTablet:v,widthWide:y}){/*#__PURE__*/return g.createElement(D,{bottom:t||"default",css:E({textAlign:e,[T.phone]:{maxWidth:f?`${f}%`:"100%",flex:f?`0 0 ${f}%`:"0 0 100%%",marginLeft:c?`${c}%`:0},[T.tabletX]:{maxWidth:v?`${v}%`:`${b}%`,flex:v?`0 0 ${v}%`:`0 0 ${b}%`,marginLeft:s?`${s}%`:`${l}%`},[T.laptopX]:{maxWidth:$?`${$}%`:`${b}%`,flex:$?`0 0 ${$}%`:`0 0 ${b}%`,marginLeft:p?`${p}%`:`${l}%`},[T.desktopX]:{maxWidth:h?`${h}%`:`${b}%`,flex:h?`0 0 ${h}%`:`0 0 ${b}%`,marginLeft:d?`${d}%`:`${l}%`},[T.wide]:{maxWidth:y?`${y}%`:`${b}%`,flex:y?`0 0 ${y}%`:`0 0 ${b}%`,marginLeft:m?`${m}%`:`${l}%`}},o),id:i,left:!a&&("left"===n||"left-right"===n),right:!a&&("right"===n||"left-right"===n),top:u||"default"},r)}const{BlockWrapper:M,BlockInnerWrapper:N}=z();function j({bottom:e,children:t,css:r,id:o,inner:n,theme:i,top:a}){/*#__PURE__*/return g.createElement(M,{bottom:e||"default",css:r,id:o,theme:i||"default",top:a||"default"},n?/*#__PURE__*/g.createElement(N,null,t):t)}function G({stroke:e="#969696",width:t=16}){/*#__PURE__*/return g.createElement("svg",{height:t,stroke:e,viewBox:"0 0 38 38",width:t,xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/g.createElement("g",{fill:"none",fillRule:"evenodd"},/*#__PURE__*/g.createElement("g",{strokeWidth:"2",transform:"translate(1 1)"},/*#__PURE__*/g.createElement("circle",{cx:"18",cy:"18",r:"18",strokeOpacity:".5"}),/*#__PURE__*/g.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18"},/*#__PURE__*/g.createElement("animateTransform",{attributeName:"transform",dur:"1s",from:"0 18 18",repeatCount:"indefinite",to:"360 18 18",type:"rotate"})))))}const{Wrapper:K,DotWrapper:Y}=function(){const e=y({"0%":{opacity:.5,transform:"scale(0.95)"},"50%":{opacity:1,transform:"scale(1)"},"100%":{opacity:.5,transform:"scale(0.95)"}});return{Wrapper:L("div",{textAlign:"center",verticalAlign:"middle",position:"relative",transition:"$1",padding:"$2 calc($4 / 1.5)",borderRadius:"$3",ft:"$h6",variants:{border:{true:{backgroundColor:"$baseContrast100",color:"$base100",border:"0.1rem solid $border200"}},theme:{default:{backgroundColor:"$baseContrast100",color:"$base100"},red:{backgroundColor:"$red300",color:"$red100"},yellow:{backgroundColor:"$yellow300",color:"$yellow100"},green:{backgroundColor:"$green300",color:"$green100"},blue:{backgroundColor:"$blue300",color:"$blue100"},navy:{backgroundColor:"$navy300",color:"$navy100"},purple:{backgroundColor:"$purple300",color:"$purple100"},pink:{backgroundColor:"$pink300",color:"$pink100"}},inline:{false:{display:"block"},true:{display:"inline-block"}},inlineSpacer:{default:{marginRight:"0"},1:{marginRight:"$1"},2:{marginRight:"$2"},3:{marginRight:"$3"},4:{marginRight:"$4"},5:{marginRight:"$5"},6:{marginRight:"$6"}},shadow:{false:{boxShadow:"none"},true:{boxShadow:"$2"}}},"&:disabled":{opacity:.5,cursor:"wait"}}),DotWrapper:L("div",{display:"inline-block",verticalAlign:"middle",marginRight:"$1",variants:{dotColor:{default:{color:"inherit"},red:{color:"$red100"},yellow:{color:"$yellow100"},green:{color:"$green100"},blue:{color:"$blue100"},navy:{color:"$navy100"},purple:{color:"$purple100"},pink:{color:"$pink100"}},pulse:{true:{animation:`${e} 1.5s infinite`}}}})}}();function J({border:t=!0,children:r,css:o,dot:n,dotColor:i,id:a,inline:l=!0,inlineSpacer:d,loader:p,shadow:c,theme:s}){/*#__PURE__*/return g.createElement(K,{border:t,css:o,id:a||void 0,inline:l,inlineSpacer:d||"default",shadow:c,theme:s||"default"},p?/*#__PURE__*/g.createElement(G,null):/*#__PURE__*/g.createElement(X,null,n&&/*#__PURE__*/g.createElement(Y,{dotColor:i||"default",pulse:"pulse"===n},/*#__PURE__*/g.createElement(e,{size:10,style:{marginRight:3.33},weight:"fill"})),r))}const q=["children","css","disabled","icon","iconPosition","id","inline","inlineSpacer","loader","onClick","theme"],{Wrapper:Q,IconWrapper:U}={Wrapper:L("button",{textAlign:"center",position:"relative",transition:"$1",fontWeight:"normal",padding:"$2 $4",borderRadius:"$1",ft:"$h5",alignItems:"center",horizontalAlign:"left","*":{alignItems:"center",display:"inline-flex",verticalAlign:"middle",alignSelf:"center",lineHeight:"1.1 !important"},boxShadow:"$1","&:disabled":{opacity:.5,cursor:"not-allowed"},variants:{theme:{default:{backgroundColor:"$baseContrast100",color:"$base100",border:"0.1rem solid $border100","&:hover":{backgroundColor:"$navy300"}},red:{backgroundColor:"$red300",color:"$red100",border:"0.1rem solid $red400","&:hover":{backgroundColor:"$red200"}},yellow:{backgroundColor:"$yellow300",color:"$yellow100",border:"0.1rem solid $yellow400","&:hover":{backgroundColor:"$yellow200"}},green:{backgroundColor:"$green300",color:"$green100",border:"0.1rem solid $green400","&:hover":{backgroundColor:"$green200"}},blue:{backgroundColor:"$blue300",color:"$blue100",border:"0.1rem solid $blue400","&:hover":{backgroundColor:"$blue200"}},navy:{backgroundColor:"$navy300",color:"$navy100",border:"0.1rem solid $navy200","&:hover":{backgroundColor:"$navy200"}},purple:{backgroundColor:"$purple300",color:"$purple100",border:"0.1rem solid $purple200","&:hover":{backgroundColor:"$purple200"}},pink:{backgroundColor:"$pink300",color:"$pink100",border:"0.1rem solid $pink200","&:hover":{backgroundColor:"$pink200"}},transparent:{backgroundColor:"transparent",color:"$base100",border:"0.1rem solid transparent","&:hover":{backgroundColor:"$navy300"}},dark:{backgroundColor:"$base100",color:"$baseContrast100",border:"0.1rem solid $base100","&:hover":{backgroundColor:"$base200"}}},inline:{false:{display:"block"},true:{display:"inline-block"}},inlineSpacer:{default:{marginRight:"0"},1:{marginRight:"$1"},2:{marginRight:"$2"},3:{marginRight:"$3"},4:{marginRight:"$4"},5:{marginRight:"$5"},6:{marginRight:"$6"}},shadow:{false:{boxShadow:"none"},true:{boxShadow:"$2"}}}}),IconWrapper:L("div",{svg:{width:"1.6rem",height:"1.6rem"},variants:{iconPosition:{left:{marginRight:"$2"},right:{marginLeft:"$2"}}}})};function V(e){let{children:t,css:r,disabled:o,icon:n,iconPosition:i="left",id:a,inline:l=!0,inlineSpacer:d,loader:p,onClick:c,theme:s}=e,m=S(e,q);/*#__PURE__*/return g.createElement(Q,E({},m,{css:r,disabled:o,id:a||void 0,inline:l,inlineSpacer:d||"default",onClick:c,theme:s||"default"}),n&&i&&"left"===i&&/*#__PURE__*/g.createElement(U,{iconPosition:i},n),/*#__PURE__*/g.createElement(X,null,p?/*#__PURE__*/g.createElement(G,null):t),n&&i&&"right"===i&&/*#__PURE__*/g.createElement(U,{iconPosition:i},n))}const{Wrapper:Z,ImageWrapper:_,ImageChildrenWrapper:ee}={Wrapper:L("div",{display:"block",position:"relative",borderRadius:"$2",height:"100%",transition:"$1",color:"inherit",variants:{theme:{default:{backgroundColor:"$baseContrast100"},red:{backgroundColor:"$red300"},yellow:{backgroundColor:"$yellow300"},green:{backgroundColor:"$green300"},blue:{backgroundColor:"$blue300"},navy:{backgroundColor:"$navy300"},purple:{backgroundColor:"$purple300"},pink:{backgroundColor:"$pink300"},transparent:{backgroundColor:"transparent"}},border:{false:{border:0},default:{border:"0.1rem solid $border200",boxShadow:"$1"},red:{border:"0.1rem solid $red200",boxShadow:"$1"},yellow:{border:"0.1rem solid $yellow200",boxShadow:"$1"},green:{border:"0.1rem solid $green200",boxShadow:"$1"},blue:{border:"0.1rem solid $blue200",boxShadow:"$1"},navy:{border:"0.1rem solid $navy200",boxShadow:"$1"},purple:{border:"0.1rem solid $purple200",boxShadow:"$1"},pink:{border:"0.1rem solid $pink200",boxShadow:"$1"},transparent:{border:"none",boxShadow:"$1"}},loader:{false:{opacity:1},true:{opacity:.5}},padding:{default:{padding:"$5"},extra:{padding:"$7",[T.phone]:{padding:"$6"}},none:{padding:0}}},"&:hover":{boxShadow:"$2"}}),ImageWrapper:L("div",{width:"100%",position:"relative",backgroundColor:"$baseContrast200",borderTopLeftRadius:"$2",borderTopRightRadius:"$2",borderBottomLeftRadius:0,borderBottomRightRadius:0,img:{borderTopLeftRadius:"$2",borderTopRightRadius:"$2",borderBottomLeftRadius:0,borderBottomRightRadius:0}}),ImageChildrenWrapper:L("div",{variants:{padding:{default:{padding:"$5"},extra:{padding:"$7",[T.phone]:{padding:"$6"}},none:{padding:0}}}})};function te({css:e,extra:t,id:r,theme:o,loader:n,border:i,image:a,imageHeight:l,minimal:d,children:p}){return a?/*#__PURE__*/g.createElement(Z,{border:"boolean"!=typeof i?i:"default",css:e,id:r,loader:n,padding:"none",theme:o||"default"},/*#__PURE__*/g.createElement(_,{css:{height:l||"15rem"}},a),/*#__PURE__*/g.createElement(ee,{padding:d?"none":t?"extra":"default"},p)):/*#__PURE__*/g.createElement(Z,{border:"boolean"!=typeof i?i:"default",css:e,id:r,loader:n,padding:d?"none":t?"extra":"default",theme:o||"default"},p)}function re(){const e={variants:E({inline:{false:{display:"inherit"},true:{display:"inline-block",marginBottom:"0!important"}},inlineSpacer:{default:{marginRight:"0"},1:{marginRight:"$1"},2:{marginRight:"$2"},3:{marginRight:"$3"},4:{marginRight:"$4"},5:{marginRight:"$5"},6:{marginRight:"$6"}}},{top:{default:{paddingTop:0},1:{paddingTop:"$1"},2:{paddingTop:"$2"},3:{paddingTop:"$3"},4:{paddingTop:"$4"},5:{paddingTop:"$5"},6:{paddingTop:"$6"},7:{paddingTop:"$7"},8:{paddingTop:"$8"},9:{paddingTop:"$9"},10:{paddingTop:"$10"},11:{paddingTop:"$11"},12:{paddingTop:"$12"}},bottom:{default:{paddingBottom:0},1:{paddingBottom:"$1"},2:{paddingBottom:"$2"},3:{paddingBottom:"$3"},4:{paddingBottom:"$4"},5:{paddingBottom:"$5"},6:{paddingBottom:"$6"},7:{paddingBottom:"$7"},8:{paddingBottom:"$8"},9:{paddingBottom:"$9"},10:{paddingBottom:"$10"},11:{paddingBottom:"$11"},12:{paddingBottom:"$12"}}}),"&:last-child":{marginBottom:"0!important"}};return{HeadingOneWrapper:L("h1",E({ft:"$h1",fontWeight:"bold",marginBottom:"$h1"},e)),HeadingTwoWrapper:L("h2",E({ft:"$h2",fontWeight:"bold",marginBottom:"$h2"},e)),HeadingThreeWrapper:L("h3",E({ft:"$h3",fontWeight:"bold",marginBottom:"$h3"},e)),HeadingFourWrapper:L("h4",E({ft:"$h4",fontWeight:"normal",marginBottom:"$h4",opacity:.8},e)),HeadingFiveWrapper:L("h5",E({ft:"$h5",fontWeight:"normal",marginBottom:"$h5"},e)),HeadingSixWrapper:L("h6",E({ft:"$h6",fontWeight:"normal",marginBottom:"$h6",opacity:.8},e)),TextOneWrapper:L("p",E({ft:"$t1",fontWeight:"normal",marginBottom:"$t1"},e)),TextTwoWrapper:L("p",E({ft:"$t2",fontWeight:"normal",marginBottom:"$t2"},e)),TextThreeWrapper:L("p",E({ft:"$t3",fontWeight:"normal",marginBottom:"$t3"},e))}}const{HeadingOneWrapper:oe,HeadingTwoWrapper:ne,HeadingThreeWrapper:ie,HeadingFourWrapper:ae,HeadingFiveWrapper:le,HeadingSixWrapper:de}=re();function pe({align:e="inherit",bottom:t,children:r,css:o,id:n,inline:i=!1,inlineSpacer:a,level:l,top:d}){/*#__PURE__*/return g.createElement(1===l?oe:2===l?ne:3===l?ie:4===l?ae:5===l?le:de,{bottom:t,css:E({textAlign:e},o),id:n,inline:i,inlineSpacer:a||"default",top:d},r)}const{TextOneWrapper:ce,TextTwoWrapper:se,TextThreeWrapper:ge}=re();function me({align:e="inherit",bottom:t,children:r,css:o,id:n,inline:i=!1,inlineSpacer:a,level:l=1,top:d}){/*#__PURE__*/return g.createElement(1===l?ce:2===l?se:ge,{bottom:t,css:E({textAlign:e},o),id:n,inline:i,inlineSpacer:a||"default",top:d},r)}const ue=["children","css","cssActive","cssInactive","hover","href","id"];function be(e){let{children:t,css:r,cssActive:o,cssInactive:n,hover:i,href:a,id:l}=e,d=S(e,ue);const p=C(),c=(null==p?void 0:p.pathname)||"/",s=L("a",{textDecoration:"none",color:"inherit","&:hover":{color:"inherit",opacity:i?.7:1},"&:focus":{color:"inherit"},"&.inactive":E({},n||{color:"$navy100"}),"&.active":E({},o||{color:"inherit"})});/*#__PURE__*/return g.createElement(W,E({href:a,passHref:!0},d),/*#__PURE__*/g.createElement(s,{className:c===a?"active":"inactive",css:r,id:l},t))}const{Wrapper:he}=function(){const e=y({"0%":{opacity:1,display:"block"},"100%":{opacity:0,display:"none"}});return{Wrapper:L("div",{position:"fixed",transition:"$1",zIndex:"$cookies",bottom:"$4",left:0,right:0,maxWidth:"100%",margin:"auto",textAlign:"center",variants:{isExiting:{true:{animation:`${e} 0.5s forwards`}}},svg:{verticalAlign:"middle",cursor:"pointer",transition:"$1","&:hover":{opacity:.4}},[T.phone]:{maxWidth:"95%"}})}}();function $e({css:e,href:r="https://cosmogroup.io/legal/privacy",token:o="cooookies"}){const[n,i]=m(!1),[a,l]=m(!1);return u(()=>{const e=k();i("true"!==e[o])},[o]),n&&/*#__PURE__*/g.createElement(he,{css:e,isExiting:a},/*#__PURE__*/g.createElement(te,{border:!0,css:{ptb:"$3",textAlign:"center",display:"inline-flex",boxShadow:"$3","*":{color:"$base100"}}},/*#__PURE__*/g.createElement(pe,{inline:!0,inlineSpacer:3,level:5},"🍪"),/*#__PURE__*/g.createElement(pe,{inline:!0,inlineSpacer:3,level:5},"We use cookies."," ",/*#__PURE__*/g.createElement("a",{href:r},/*#__PURE__*/g.createElement("b",null,"Learn more"))),/*#__PURE__*/g.createElement(pe,{inline:!0,level:5},/*#__PURE__*/g.createElement(t,{onClick:()=>{x(null,o,"true",{maxAge:31536e3,path:"/"}),l(!0),setTimeout(()=>{i(!1)},2500)}}))))}const fe="undefined"!=typeof window?b:u;function ve(e,t,r){const o=h(t);fe(()=>{o.current=t},[t]),u(()=>{const t=r?.current||window;if(!t||!t.addEventListener)return;const n=e=>o.current(e);return t.addEventListener(e,n),()=>{t.removeEventListener(e,n)}},[e,r])}function ye(e){const t=function(e){const t=e=>"undefined"!=typeof window&&window.matchMedia(e).matches,[r,o]=m(t(e));function n(){o(t(e))}return u(()=>{const t=window.matchMedia(e);return n(),t.addEventListener("change",n),()=>{t.removeEventListener("change",n)}},[e]),r}("(prefers-color-scheme: dark)"),[r,o]=function(e,t){const r=$(()=>{if("undefined"==typeof window)return t;try{const r=window.localStorage.getItem(e);return r?function(e){try{return"undefined"===e?void 0:JSON.parse(e??"")}catch{return void console.log("parsing error on",{value:e})}}(r):t}catch(r){return console.warn(`Error reading localStorage key “${e}”:`,r),t}},[t,e]),[o,n]=m(r),i=$(t=>{"undefined"==typeof window&&console.warn(`Tried setting localStorage key “${e}” even though environment is not a client`);try{const r=t instanceof Function?t(o):t;window.localStorage.setItem(e,JSON.stringify(r)),n(r),window.dispatchEvent(new Event("local-storage"))}catch(t){console.warn(`Error setting localStorage key “${e}”:`,t)}},[e,o]);u(()=>{n(r())},[]);const a=$(()=>{n(r())},[r]);return ve("storage",a),ve("local-storage",a),[o,i]}("usehooks-ts-dark-mode",e??t??!1);return function(e,r){const n=function(){const e=h(!0);return e.current?(e.current=!1,!0):e.current}();u(()=>{n||o(t)},r)}(0,[t]),{isDarkMode:r,toggle:()=>o(e=>!e),enable:()=>o(!0),disable:()=>o(!1)}}function we(e,t,r="mousedown"){ve(r,r=>{const o=e?.current;o&&!o.contains(r.target)&&t(r)})}function ke(){const e=y({"0%":{opacity:0},"100%":{opacity:1}});return{Wrapper:L("div",{position:"initial"}),TriggerWrapper:L("div",{display:"inline-flex"}),OverlayWrapper:L("div",{position:"fixed",transition:"$1",zIndex:"$alert",top:0,left:0,right:0,bottom:0,backgroundColor:"$base300",width:"100%",scrollBehavior:"smooth",overscrollBehavior:"contain",overflowY:"scroll",variants:{animation:{false:{animation:"none"},true:{animation:`${e} .6s`}}}}),CardWrapper:L("div",{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"70rem",maxWidth:"90vw",maxHeight:"80vh",boxShadow:"$3",transition:"$1",variants:{animation:{false:{animation:"none"},true:{animation:`${e} .3s`}}},[T.phone]:{width:"95%",maxWidth:"95%",maxHeight:"95vh"}}),Exit:L("div",{position:"absolute",top:0,right:0,padding:"1rem",cursor:"pointer",zIndex:"$alert"}),CardActionsWrapper:L("div",{paddingTop:"$6",textAlign:"right"}),CardPrimaryActionwrapper:L("div",{display:"inline-block"})}}const{Wrapper:xe,TriggerWrapper:We,OverlayWrapper:Ce,CardWrapper:Ee,Exit:Se}=ke();function Te({children:e,css:r,id:o,trigger:n}){const i=h(null),[a,l]=m(!1);return we(i,()=>{l(!1)}),b(()=>{document.body.style.overflow=a?"hidden":"auto"},[a]),/*#__PURE__*/g.createElement(xe,{id:o},/*#__PURE__*/g.createElement(We,{onClickCapture:e=>{e.persist(),l(!0)}},n),a&&/*#__PURE__*/g.createElement(Ce,{animation:a},/*#__PURE__*/g.createElement(Ee,{animation:a,css:r,ref:i},/*#__PURE__*/g.createElement(Se,{onClick:()=>l(!1)},/*#__PURE__*/g.createElement(t,{size:18})),/*#__PURE__*/g.createElement(te,null,e))))}const{Wrapper:Be,TriggerWrapper:Re,OverlayWrapper:Le,CardWrapper:Ie,CardActionsWrapper:Fe,CardPrimaryActionwrapper:ze}=ke();function Ae({action:e,cancel:t,css:r,description:o,id:n,title:i,trigger:a}){const l=h(null),[d,p]=m(!1);return we(l,()=>{p(!1)}),b(()=>{document.body.style.overflow=d?"hidden":"auto"},[d]),/*#__PURE__*/g.createElement(Be,{id:n},/*#__PURE__*/g.createElement(Re,{onClickCapture:e=>{e.persist(),p(!0)}},a),d&&/*#__PURE__*/g.createElement(Le,{animation:d},/*#__PURE__*/g.createElement(Ie,{animation:d,css:r,ref:l},/*#__PURE__*/g.createElement(te,null,/*#__PURE__*/g.createElement(pe,{level:3},i),/*#__PURE__*/g.createElement(pe,{level:6},o),/*#__PURE__*/g.createElement(Fe,null,/*#__PURE__*/g.createElement(V,{css:{mr:"$4"},onClick:e=>{e.persist(),p(!1)}},t),/*#__PURE__*/g.createElement(ze,{onClickCapture:e=>{e.persist(),p(!1)}},e))))))}function He(){const e=y({"0%":{opacity:0},"100%":{opacity:1}});return{Wrapper:L("div",{position:"relative",display:"inline-flex"}),TriggerWrapper:L("div",{display:"inline-block",position:"relative",cursor:"pointer",appearance:"none",outline:"none",userSelect:"none",transition:"$1",variants:{hover:{false:{"&:hover":{color:"inherit",opacity:1},true:{"&:hover":{color:"inherit",opacity:.7}}}}}}),GroupWrapper:L("div",{background:"$baseContrast100",borderRadius:"$2",border:"0.1rem solid $border100",boxShadow:"$3",boxSizing:"border-box",overflowY:"auto",position:"absolute",padding:"$2",top:"120%",maxHeight:"50rem",width:"100%",zIndex:"$dropdown",webkitoverflowscrolling:"touch",variants:{animation:{false:{animation:"none"},true:{animation:`${e} .3s`}}}}),ItemWrapper:L("div",{display:"flex",textAlign:"left",transition:"$1",borderBottom:"0.1rem solid $navy300",cursor:"pointer",borderRadius:"$1",ft:"$h5",lineHeight:"1.1 !important",opacity:1,variants:{submenu:{true:{padding:0},false:{padding:"$3"}}},a:{display:"block",width:"100%",padding:"$3"},"&:hover":{backgroundColor:"$navy400"},"&:last-child":{borderBottom:0},"&.active":{backgroundColor:"$navy300","&:hover":{backgroundColor:"$navy400"}},phone:{ft:"$h5"}})}}const{Wrapper:Oe,GroupWrapper:Xe,ItemWrapper:De}=He();function Pe({actions:e,align:t="left",css:r,id:o,label:n,options:i,passKey:a,width:l}){const d=h(null),[p,c]=m(!1);return we(d,()=>{c(!1)}),/*#__PURE__*/g.createElement(Oe,{css:r,id:o,key:a,ref:d},/*#__PURE__*/g.createElement(V,{onClickCapture:()=>{c(!p)}},n||/*#__PURE__*/g.createElement(G,null)),p&&/*#__PURE__*/g.createElement(Xe,{animation:p,css:{minWidth:l||"15rem",maxWidth:l||"80rem",left:"left"===t?"0":"auto",right:"right"===t?"0":"auto"}},i.map(t=>/*#__PURE__*/g.createElement(De,{className:n===t.name?"active":"inactive",key:t.value,onClickCapture:()=>(e(t.value,t.name),void c(!1)),submenu:!1},t.name))))}const{Wrapper:Me,TriggerWrapper:Ne,GroupWrapper:je,ItemWrapper:Ge}=He();function Ke({align:e="left",css:t,hover:r,id:o,options:n,passKey:i,trigger:a,width:l}){const d=C(),p=h(null),[c,s]=m(!1),u=(null==d?void 0:d.pathname)||"/";return we(p,()=>{s(!1)}),/*#__PURE__*/g.createElement(Me,{css:t,id:o,key:i,ref:p},/*#__PURE__*/g.createElement(Ne,{hover:r,onClickCapture:()=>{s(!c)}},a),c&&/*#__PURE__*/g.createElement(je,{animation:c,css:{minWidth:l||"15rem",maxWidth:l||"80rem",left:"left"===e?"0":"auto",right:"right"===e?"0":"auto"}},n.map(({value:e,name:t})=>/*#__PURE__*/g.createElement(Ge,{className:u===e?"active":"",key:e,submenu:!0},/*#__PURE__*/g.createElement("a",{onClickCapture:()=>(e=>{d.push(e),s(!1)})(e)},t)))))}function Ye(){return{CheckboxWrapper:L("div",{whiteSpace:"nowrap",display:"table-row-group",variants:{disabled:{false:{opacity:1,"*":{cursor:"pointer"},svg:{color:"$navy100"}},true:{opacity:.5,"*":{cursor:"not-allowed"},svg:{color:"$navy100"}}}}}),CheckboxLabelWrapper:L("div",{display:"table-cell",verticalAlign:"middle",paddingLeft:"$3",whiteSpace:"pre-wrap",wordBreak:"break-word",variants:{size:{1:{ft:"$h5",marginBottom:"0!important"},2:{ft:"$h6",marginBottom:"0!important"}}}}),CheckboxTooltipWrapper:L("div",{verticalAlign:"middle",alignContent:"center",display:"table-cell",svg:{marginLeft:"$3",cursor:"pointer",verticalAlign:"middle !important",opacity:.5,transition:"$1","&:hover":{opacity:1}}}),FieldWrapper:L("div",{display:"inline-flex",position:"relative",height:"3.5rem",alignContent:"center",borderRadius:"$2",backgroundColor:"$baseContrast100",border:"0.1rem solid $border200",paddingTop:"$2",paddingBottom:"$2",paddingLeft:"calc($5 / 1.5)",paddingRight:"calc($5 / 1.5)",boxShadow:"$1",transition:"$1",maxWidth:"100%","&:hover":{boxShadow:"$2",border:"0.1rem solid $border100"},"&:focus-within":{boxShadow:"$2",border:"0.1rem solid $border100"},"&:active":{boxShadow:"$2",border:"0.1rem solid $border100"},"*":{verticalAlign:"middle"}}),FieldIconWrapper:L("div",{display:"inline-flex",alignItems:"center",width:"auto",height:"100%",marginRight:"$3",position:"relative"}),FieldInputWrapper:L("input",{appearance:"none",display:"inline-flex",fontSize:"16px !important",fontFamily:"$body",margin:0,outline:"none",padding:0,WebkitTapHighlightColor:"rgba(0,0,0,0)",border:0,backgroundColor:"transparent",color:"$base100",fontWeight:"normal",textAlign:"left",transition:"$1",boxSizing:"border-box",alignItems:"center",verticalAlign:"middle",width:"100%","&:focus":{outline:0},variants:{width:{1:{width:"12rem"},2:{width:"18rem"},3:{width:"26rem"},4:{width:"34rem"},5:{width:"100%"}}}}),FieldFunctionWrapper:L("div",{display:"inline-flex",alignItems:"center",width:"auto",height:"100%",position:"relative",verticalAlign:"middle",marginLeft:"$3","*":{verticalAlign:"middle"},button:{marginLeft:"$2",ft:"$h6",lineHeight:"$1",paddingTop:"$1",paddingBottom:"$1",paddingLeft:"$3",paddingRight:"$3"},svg:{height:"1.85rem",width:"auto"}}),TextareaWrapper:L("div",{display:"inline-flex",position:"relative",flexDirection:"column",width:"100%",borderRadius:"$2",backgroundColor:"$baseContrast100 !important",border:"0.1rem solid $border100",padding:"calc($5 / 1.5)",boxShadow:"$1",transition:"$1","&:hover":{boxShadow:"$2",border:"0.1rem solid $border100"},"&:focus-within":{boxShadow:"$2",border:"0.1rem solid $border100"},"&:active":{boxShadow:"$2",border:"0.1rem solid $border100"},"&:disabled":{cursor:"not-allowed",opacity:.5}}),TextareaInputWrapper:L("textarea",{display:"block",backgroundColor:"transparent",color:"$base100",appearance:"none",width:"100%",border:"0",margin:"0 auto",fontSize:"16px !important","&:after":{clear:"both",content:'""'}}),TextareaFunctionWrapper:L("div",{display:"block",opacity:.4,lineHeight:0,"&:after":{clear:"both",content:'""'}})}}const Je=["changeFunction","copy","css","error","icon","inputRef","loader","reset","resetFunction","reveal","submit","submitFunction","submitOverride","width","id","type","value"],{FieldWrapper:qe,FieldIconWrapper:Qe,FieldInputWrapper:Ue,FieldFunctionWrapper:Ve}=Ye();function Ze(e){let{changeFunction:l,copy:d,css:p,error:c,icon:s,inputRef:u,loader:b,reset:h,resetFunction:$,reveal:f,submit:v,submitFunction:y,submitOverride:w,width:k=2,id:x,type:W,value:C}=e,T=S(e,Je);const[B,R]=m(C||""),[L,I]=m(!1),[F,z]=m("password"!==W);/*#__PURE__*/return g.createElement(qe,{css:p,id:x},s&&/*#__PURE__*/g.createElement(Qe,null,s),/*#__PURE__*/g.createElement(Ue,E({onChange:e=>function(e){R(e.target.value),l&&l(e.target.value)}(e),ref:u||void 0,type:"password"===W?F?"text":"password":W,value:B,width:k},T)),(b||c||h||f||d||v||y)&&/*#__PURE__*/g.createElement(Ve,null,b&&/*#__PURE__*/g.createElement(J,{theme:"navy"},/*#__PURE__*/g.createElement(G,null)),c&&/*#__PURE__*/g.createElement(J,{dot:"pulse",theme:"red"},/*#__PURE__*/g.createElement(r,{weight:"duotone"})),h&&(null==B?void 0:B.length)>2&&/*#__PURE__*/g.createElement(V,{onClick:()=>(R(""),void($&&$())),theme:"navy"},/*#__PURE__*/g.createElement(t,{weight:"duotone"})),f&&/*#__PURE__*/g.createElement(V,{onClick:()=>z(!F),theme:"navy"},/*#__PURE__*/g.createElement(F?o:n,{weight:"duotone"})),d&&/*#__PURE__*/g.createElement(V,{onClick:function(){d&&(navigator.clipboard.writeText(B),I(!0),setTimeout(()=>{I(!1)},2e3))},theme:"navy"},/*#__PURE__*/g.createElement(L?i:a,{weight:"duotone"})),!w&&v&&/*#__PURE__*/g.createElement(V,{onClick:()=>{y&&y(B)},theme:"navy"},"string"==typeof v?v:"Submit"),w||null))}const _e=["changeFunction","copy","css","maxLength","rows","disabled","value"],{TextareaWrapper:et,TextareaInputWrapper:tt,TextareaFunctionWrapper:rt}=Ye();function ot(e){let{changeFunction:t,copy:r,css:o,maxLength:n=250,rows:l=4,disabled:d,value:p}=e,c=S(e,_e);const[s,u]=m(p||""),[b,h]=m(!1);/*#__PURE__*/return g.createElement(et,{css:o},/*#__PURE__*/g.createElement(tt,E({disabled:d,maxLength:n,onChange:function(e){u(e.target.value),t&&t(e.target.value)},rows:l,value:s},c)),/*#__PURE__*/g.createElement(rt,null,/*#__PURE__*/g.createElement(me,{inline:!0,inlineSpacer:4,level:2},s.length," / ",n),r&&/*#__PURE__*/g.createElement(V,{onClick:function(){r&&(navigator.clipboard.writeText(s),h(!0),setTimeout(()=>{h(!1)},2e3))},theme:"navy"},/*#__PURE__*/g.createElement(b?i:a,null))))}const{Wrapper:nt,TriggerWrapper:it,ContentWrapper:at}=function(){const e=y({"0%":{opacity:0},"100%":{opacity:1}});return{Wrapper:L("div",{position:"relative",display:"flex",flex:1}),TriggerWrapper:L("div",{display:"inline-block",position:"relative"}),ContentWrapper:L("div",{transition:"$1",borderRadius:"$2",background:"$baseContrast100",border:"0.1rem solid $border100",boxShadow:"$3",position:"absolute",top:"120%",padding:"$2 $3",width:"max-content",maxWidth:"30rem",overflowY:"auto",wordBreak:"break-word",lineBreak:"auto",whiteSpace:"pre-wrap",maxHeight:"30rem",zIndex:"$tooltip",webkitoverflowscrolling:"touch",variants:{animation:{false:{animation:"none"},true:{animation:`${e} .3s`}}}})}}();function lt({align:e="left",children:t,css:r,id:o,passKey:n,trigger:i,type:a="hover"}){const l=h(null),[d,p]=m(!1);return we(l,()=>{p(!1)}),/*#__PURE__*/g.createElement(nt,{css:r,id:o,key:n,ref:l},/*#__PURE__*/g.createElement(it,{onClickCapture:()=>{"click"===a&&p(!d)},onMouseEnter:()=>{"hover"===a&&p(!0)},onMouseLeave:()=>{"hover"===a&&p(!1)}},i),d&&/*#__PURE__*/g.createElement(at,{animation:d,css:{left:"left"===e?"0":"right"===e?"auto":"50%",right:"right"===e?"0":"left"===e?"auto":"50%"}},t))}const{CheckboxWrapper:dt,CheckboxLabelWrapper:pt,CheckboxTooltipWrapper:ct}=Ye();function st({checked:t,children:r,css:o,disabled:n,id:a,size:d=1,tooltip:p,type:c="hover"}){const[s,u]=m(t),b=()=>{n||u(!s)};/*#__PURE__*/return g.createElement(dt,{css:o,disabled:n,id:a},/*#__PURE__*/g.createElement(V,{css:{display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"$3",aspectRatio:1,padding:"$2"},onClick:b},s?/*#__PURE__*/g.createElement(i,null):/*#__PURE__*/g.createElement(e,{opacity:.1})),/*#__PURE__*/g.createElement(pt,{onClick:b,size:d},r),p&&/*#__PURE__*/g.createElement(ct,null,/*#__PURE__*/g.createElement(lt,{passKey:`${r}`,trigger:/*#__PURE__*/g.createElement(l,{size:18}),type:c},p)))}function gt({css:e,id:t,numberA:r,numberB:o,showDollarDifference:n,toFixed:i=1,trendDirection:a="up"}){const[l,c]=m(!0),[s,b]=m(0),[h,$]=m(0),[f,v]=m("up");return u(()=>{const e=r-o;return b(((r-o)/o*100).toFixed(i)),$(e.toFixed(i)),c(!1),v(e>0?"up"===a?"up":"down":"up"===a?"down":"up"),()=>{c(!0)}},[r,o,i,a]),l?/*#__PURE__*/g.createElement(G,null):/*#__PURE__*/g.createElement(X,{css:E({width:"100%",height:"100%"},e),id:t},/*#__PURE__*/g.createElement(J,{theme:"up"===f?"green":"yellow"},/*#__PURE__*/g.createElement("up"===f?d:p,null)," ",s,"%"),n?/*#__PURE__*/g.createElement(pe,{css:{pt:"$1",opacity:.5},level:6},"$",h.toLocaleString()):null)}function mt(){const e=w({html:{position:"relative",background:"$baseBody",fontSize:"62.5% !important",height:"100%",boxSizing:"border-box;",margin:"0",padding:"0",border:"0"},body:{color:"$base100",lineHeight:"1.6",fontSize:"1.6rem !important",fontFamily:"$body",height:"100%",margin:0,padding:0,border:0},"*":{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",WebkitAppearance:"none",outline:"none",letterSpacing:"normal",wordSpacing:"normal",marginBlockStart:0,marginBlockEnd:0,marginInlineStart:0,marginInlineEnd:0,paddingBlockStart:0,paddingBlockEnd:0,paddingInlineStart:0,paddingInlineEnd:0,boxSizing:"inherit"},"*:before":{boxSizing:"inherit"},"*:after":{boxSizing:"inherit"},button:{appearance:"none",outline:"none",cursor:"pointer",margin:0,width:"auto",font:"$body",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",WebkitAppearance:"none",overflow:"visible",fontFamily:"inherit",textOverflow:"ellipsis",whiteSpace:"nowrap","&::-moz-focus-inner":{border:0,padding:0,outline:0,outlineOffset:0},"&:focus":{outline:0},"&:active":{outline:0}},svg:{transition:"$1",verticalAlign:"middle !important",fill:"currentColor",lineHeight:"1 !important"},img:{borderRadius:"$3"},a:{transition:"$1",textDecoration:"none",color:"inherit",cursor:"pointer","&:hover":{opacity:.7},"&:focus":{outline:"none"}},pre:{fontFamily:"monospace",fontSize:"$base2",overflowX:"auto",whiteSpace:"pre-wrap",wordWrap:"break-word"},code:{fontFamily:"monospace",fontSize:"$base2"},ol:{listStylePosition:"inside"},ul:{listStylePosition:"inside"},li:{listStyle:"circle",marginBottom:"$3","&:last-child":{marginBottom:0}}});return{ContextWrapper:L("div",{position:"relative"}),SwitchWrapper:L("div",{display:"inline-flex",alignItems:"center",justifyContent:"center"}),globalStyles:e}}const{ContextWrapper:ut,globalStyles:bt}=mt();function ht({children:e,css:t,switchable:r,theme:o=B}){const{isDarkMode:n}=ye();return bt(),/*#__PURE__*/g.createElement(ut,{className:r&&n?F:o,css:t},e)}const{SwitchWrapper:$t}=mt();function ft(){const{isDarkMode:e,toggle:t}=ye();/*#__PURE__*/return g.createElement($t,null,/*#__PURE__*/g.createElement(V,{onClick:t},/*#__PURE__*/g.createElement(e?c:s,null)))}export{be as Active,Ae as Alert,J as Badge,j as Block,V as Button,te as Card,st as Checkbox,P as Column,ht as Context,$e as Cookies,Te as Dialog,Pe as Dropdown,X as Element,pe as Heading,Ze as InputField,G as Loading,gt as Percentages,H as Section,Ke as Submenu,ft as Switch,me as Text,ot as Textarea,lt as Tooltip,T as breakpoints,R as css,F as darkTheme,I as getCssText,L as styled,B as theme};
//# sourceMappingURL=index.modern.js.map
