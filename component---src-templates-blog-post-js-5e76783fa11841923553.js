(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+rFB":function(e,t,a){},"/d1K":function(e,t,a){"use strict";a("91GP");var n=a("Rwg6"),r=a("q1tI"),o=a.n(r),i=a("Wbzz"),l=a("IP2g"),c=a("KSab"),s=a("Y7J9"),u=(a("sfvA"),c.config.friends),m=void 0===u?[]:u,d=function(){return o.a.createElement("div",{className:"friend"},o.a.createElement("p",null,"友情鏈結"),m.map((function(e){return o.a.createElement(s.a,{href:e.href,title:e.title,key:e.title,rel:"noopener"})})))},g=(a("qfuT"),function(e){var t=e.posts;return o.a.createElement("div",{className:"latest-post"},o.a.createElement("p",null,"最新文章"),t.map((function(e){var t=e.node;return o.a.createElement(i.Link,{to:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,key:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,href:t.frontmatter.url||t.frontmatter.slug||t.fields.slug},t.frontmatter.title)})))}),f=(a("usu3"),function(e){var t=e.totalCount,a=e.posts;return o.a.createElement("div",{className:"d-none d-lg-block information my-2"},o.a.createElement("hr",null),o.a.createElement("p",null,"共 ",t," 篇文章"),o.a.createElement("hr",null),o.a.createElement(g,{posts:a}),o.a.createElement("hr",null),o.a.createElement(d,null))});f.defaultProps={posts:[]};var p=f,h=(a("YX5f"),c.config.wordings),b=void 0===h?[]:h,v=c.config.githubUsername,E=(c.config.zhihuUsername,c.config.email,c.config.iconUrl),y=c.config.about,k=(c.config.facebook,function(e){var t=e.href,a=e.icon;return o.a.createElement("a",{target:"_blank",href:t,rel:"external nofollow noopener noreferrer",className:"custom-icon"},o.a.createElement("span",{className:"fa-layers fa-fw fa-2x"},o.a.createElement(l.a,{icon:a})))}),I=function(e){var t=e.totalCount,a=e.latestPosts;return o.a.createElement("header",{className:"intro-header site-heading text-center col-xl-2 col-lg-3 col-xs-12 order-lg-1"},o.a.createElement("div",{className:"about-me"},o.a.createElement(i.Link,{to:y,href:y,className:"name"},o.a.createElement("img",{className:"avatar",src:E,alt:"microsugar"}),o.a.createElement("h4",null,"microsugar")),o.a.createElement("p",{className:"mb-1"},b[0]),o.a.createElement("p",{className:"mb-3"},b[1]),o.a.createElement(k,{href:"https://github.com/"+v,icon:["fab","github"]}),o.a.createElement(p,{totalCount:t,posts:a})))};I.defaultProps={totalCount:0,latestPosts:[]};t.a=function(){return o.a.createElement(i.StaticQuery,{query:"1307080370",render:function(e){return o.a.createElement(I,Object.assign({},e.all,e.limited))},data:n})}},"2yjy":function(e,t,a){},FlsD:function(e,t,a){var n=a("0/R4");a("Xtr8")("isExtensible",(function(e){return function(t){return!!n(t)&&(!e||e(t))}}))},INYr:function(e,t,a){"use strict";var n=a("XKFU"),r=a("CkkT")(6),o="findIndex",i=!0;o in[]&&Array(1)[o]((function(){i=!1})),n(n.P+n.F*i,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(o)},Rwg6:function(e){e.exports=JSON.parse('{"data":{"all":{"totalCount":8},"limited":{"latestPosts":[{"node":{"fields":{"slug":"5ba411a"},"frontmatter":{"id":null,"title":"Vuepress加入Bootstrap","url":"5ba411a","date":"2018-11-30T15:19:26.000Z","tags":["Vuepress","Bootstrap","Vue.js","bootstrap-vue"],"description":null,"headerImage":null}}},{"node":{"fields":{"slug":"80663e5c"},"frontmatter":{"id":null,"title":"微軟的自動化機械學習服務","url":"80663e5c","date":"2018-11-15T17:08:03.000Z","tags":["Machine learning","Microsoft Azure","Auto train models"],"description":null,"headerImage":null}}},{"node":{"fields":{"slug":"c01d2700"},"frontmatter":{"id":null,"title":"Windows下使用ssh連結Bitbucket(Git)","url":"c01d2700","date":"2018-11-08T10:28:38.000Z","tags":["Git","Bitbucket","ssh"],"description":null,"headerImage":null}}},{"node":{"fields":{"slug":"a53931"},"frontmatter":{"id":null,"title":"VSTS於Build和Release時會用到的位置變數","url":"a53931","date":"2018-09-10T11:24:34.000Z","tags":["VSTS","CI/CD"],"description":null,"headerImage":null}}},{"node":{"fields":{"slug":"a151710f"},"frontmatter":{"id":null,"title":"VSTS使用自建Windows server Agent建置android","url":"a151710f","date":"2018-09-05T10:37:23.000Z","tags":["VSTS","Android","Cordova"],"description":null,"headerImage":null}}},{"node":{"fields":{"slug":"af93369f"},"frontmatter":{"id":null,"title":"自己寫Cordova套件","url":"af93369f","date":"2018-08-30T17:08:03.000Z","tags":["Cordova"],"description":null,"headerImage":null}}}]}}}')},U2Z3:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("0b+E"),i=a("IP2g"),l=(a("+rFB"),function(){return r.a.createElement("a",{className:"share-button",style:{lineHeight:"1.7rem",color:"#337ab7",paddingLeft:"0.15rem"},href:"#gitalk-container",onClick:function(){return o.a.event({category:"User",action:"Goto Comment Box"})}},r.a.createElement(i.a,{icon:["far","comment"]}))}),c=function(e){var t=e.url,a=e.hasCommentBox;return r.a.createElement("div",{className:"m-share-box"},r.a.createElement("a",{href:"https://www.facebook.com/sharer/sharer.php?u="+t,title:"",className:"share-button",onClick:function(){return o.a.event({category:"Share",action:"Facebook Share"})}},r.a.createElement(i.a,{icon:["fab","facebook-f"]})),a&&r.a.createElement(l,null),r.a.createElement("a",{className:"share-button",href:"#header",onClick:function(){o.a.event({category:"User",action:"Scroll to Top"})},style:{lineHeight:"1.7rem",paddingLeft:"0.1rem"}},r.a.createElement(i.a,{icon:["fas","chevron-up"]})))};c.defaultProps={hasCommentBox:!0},t.a=c},X4Np:function(e,t,a){a("8+KV"),a("91GP"),a("V+eJ"),a("KKXr"),e.exports=function(){"use strict";var e="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var a=document.createElement("img");e&&t.getAttribute("data-iesrc")&&(a.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(a.alt=t.getAttribute("data-alt")),t.append(a)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var n=t.children,r=void 0,o=0;o<=n.length-1;o++)(r=n[o].getAttribute("data-src"))&&(n[o].src=r);t.load()}if(t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(",").join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var i=t.getAttribute("data-background-image-set").split(","),l=i[0].substr(0,i[0].indexOf(" "))||i[0];l=-1===l.indexOf("url(")?"url("+l+")":l,1===i.length?t.style.backgroundImage=l:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+l+"; background-image: -webkit-image-set("+i+"); background-image: image-set("+i+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function a(e){e.setAttribute("data-loaded",!0)}var n=function(e){return"true"===e.getAttribute("data-loaded")};return function(){var e,r,o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},l=Object.assign({},t,i),c=l.root,s=l.rootMargin,u=l.threshold,m=l.load,d=l.loaded,g=void 0;return"undefined"!=typeof window&&window.IntersectionObserver&&(g=new IntersectionObserver((e=m,r=d,function(t,o){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(o.unobserve(t.target),n(t.target)||(e(t.target),a(t.target),r(t.target)))}))}),{root:c,rootMargin:s,threshold:u})),{observe:function(){for(var e=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return e instanceof Element?[e]:e instanceof NodeList?e:t.querySelectorAll(e)}(o,c),t=0;t<e.length;t++)n(e[t])||(g?g.observe(e[t]):(m(e[t]),a(e[t]),d(e[t])))},triggerLoad:function(e){n(e)||(m(e),a(e),d(e))},observer:g}}}()},YX5f:function(e,t,a){},"aqI/":function(e,t,a){a("7DDg")("Uint8",1,(function(e){return function(t,a,n){return e(this,t,a,n)}}),!0)},e5BI:function(e,t,a){},"f/UQ":function(e,t,a){a("pIFo"),a("SRfc");var n=function(e,t){if(void 0===t&&(t="large"),!e)return"https://i.imgur.com/M795H8A.jpg";if(e.match("(png)|(gif)"))return e.match("http")?e:"https://i.imgur.com/"+e;var a=e.replace(/(.*)\.(.*)/,"$1"+{"small-square":"s","big-square":"b",small:"t",medium:"m",large:"l",huge:"h"}[t]+".$2");return a.match("http")?a:"https://i.imgur.com/"+a},r=function(e){var t=e.href,a=e.title,r=e.text;return'<img class="lozad d-block mx-auto" data-src='+n(t,"large")+" "+function(e,t){return'title="'+(e||t)+'"'}(a,r)+" />"};e.exports={parseImgur:n,parseImageTag:r,getGalleryImage:function(e){var t=e.href,a=e.title,o=e.text;return'<a data-fancybox="gallery" href="'+n(t,"huge")+'">'+r({href:t,title:a,text:o})+"</a>"}}},mura:function(e,t,a){var n=a("0/R4"),r=a("Z6vF").onFreeze;a("Xtr8")("preventExtensions",(function(e){return function(t){return e&&n(t)?e(r(t)):t}}))},qGWU:function(e,t,a){},qfuT:function(e,t,a){},sfvA:function(e,t,a){},usu3:function(e,t,a){},wtQ5:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("TJpk"),i=a.n(o),l=a("KSab"),c=a.n(l),s=function(e){var t=e.url,a=e.title,n=e.description,o=e.image,l=(e.siteTitleAlt,e.isPost);return r.a.createElement(i.a,null,r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("meta",{name:"image",content:o}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(function(e){var t=e.url,a=e.title,n=e.siteTitleAlt,r=e.isPost,o=e.image,i=e.description;return[{"@context":"http://schema.org","@type":"WebSite",url:t,name:a,alternateName:n||""},r?{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":t,name:a,image:o}}]}:"",r?{"@context":"http://schema.org","@type":"BlogPosting",url:t,name:a,alternateName:n||"",headline:a,image:{"@type":"ImageObject",url:o},description:i}:""]}(t))),r.a.createElement("meta",{property:"og:url",content:t}),l?r.a.createElement("meta",{property:"og:type",content:"article"}):r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:a}),r.a.createElement("meta",{property:"og:description",content:n}),r.a.createElement("meta",{property:"og:image",content:o}),r.a.createElement("meta",{property:"fb:app_id",content:c.a.siteFBAppID?c.a.siteFBAppID:""}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:creator",content:c.a.twitter_username?c.a.twitter_username:""}),r.a.createElement("meta",{name:"twitter:title",content:a}),r.a.createElement("meta",{name:"twitter:description",content:n}),r.a.createElement("meta",{name:"twitter:image",content:o}))};s.defaultProps={title:c.a.title},t.a=s},yZlL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return P}));a("91GP"),a("f3/d");var n=a("q1tI"),r=a.n(n),o=(a("2yjy"),a("bHtr"),a("SRfc"),a("Wgwc")),i=a.n(o),l=a("KSab"),c=(l.config.maxPostsInPage,function(){return"undefined"!=typeof window}),s=function(e){return i()(e).format("YYYY/MM/DD")},u=a("Y7J9"),m=a("/d1K"),d=a("X4Np"),g=a.n(d);var f=function(e){var t,a;function n(t){var a,n=(a=e.call(this,t)||this).props.post;return a.post=n,a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){c()&&g()(".lozad",{load:function(e){e.src=e.dataset.src,e.onload=function(){e.classList.add("animated"),e.classList.add("fadeIn")}}}).observe()},o.render=function(){var e=this.props.post;return r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e},style:{padding:30,background:"white"}})},n}(n.Component),p=a("wtQ5"),h=(a("e5BI"),function(e){var t=e.jueJinPostLink,a=e.jueJinLikeIconLink;return r.a.createElement("a",{href:t,rel:"external nofollow noopener noreferrer"},r.a.createElement("img",{src:a,alt:"JueJin Link",style:{cursor:"pointer",height:"1.2rem",marginBottom:"0.25rem"}}))});h.defaultProps={jueJinPostLink:"",jueJinLikeIconLink:""};var b=h,v=a("f/UQ"),E=function(e){var t=e.img,a=e.title,n=e.subTitle,o=e.authorImage,i=e.authorName,l=e.jueJinPostLink,c=e.jueJinLikeIconLink;return r.a.createElement("div",{className:"col-12 header",style:{padding:0},id:"header"},r.a.createElement("div",{className:"img-container",style:{backgroundImage:"linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url("+t+")",marginTop:-58}},a&&r.a.createElement("h1",{className:"u-title"},a),n&&r.a.createElement("div",{className:"u-subtitle"},r.a.createElement("div",{className:"m-left"},o&&r.a.createElement("img",{src:Object(v.parseImgur)(o,"small-square"),className:"author-image",alt:i}),r.a.createElement("span",{className:"author-name"},i)),r.a.createElement("span",{className:"text"},n),l&&c&&r.a.createElement(b,{jueJinPostLink:l,jueJinLikeIconLink:c}))))};E.defaultProps={title:"",subTitle:"",authorName:"",authorImage:"",jueJinPostLink:"",jueJinLikeIconLink:""};var y=E,k=a("U2Z3");a("qGWU");var I=l.config.name,w=l.config.iconUrl,N=l.config.gitalk,A={padding:"10px 30px",background:"white"},x="undefined"!=typeof window?a("dnEz"):void 0,L=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).data=a.props.data,a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){var e=this.data.content.edges[0].node,t=e.frontmatter,a=e.id,n=t.title,r=t.id;new x(Object.assign({},N,{title:n,id:r||a})).render("gitalk-container")},o.render=function(){var e=this.data.content.edges[0].node,t=e.html,a=e.frontmatter,n=e.fields,o=e.excerpt,i=n.slug,l=a.date,c=a.headerImage,d=a.title;return r.a.createElement("div",{className:"row post order-2"},r.a.createElement(y,{img:c||"https://i.imgur.com/M795H8A.jpg",title:d,authorName:I,authorImage:w,subTitle:s(l)}),r.a.createElement(m.a,null),r.a.createElement("div",{className:"col-xl-7 col-lg-6 col-md-12 col-sm-12 order-10 content"},r.a.createElement(f,{post:t}),r.a.createElement("div",{className:"m-message",style:A},"如果你覺得我的文章對你有幫助的話，希望可以推薦和交流一下。歡迎",r.a.createElement(u.a,{href:"https://blog.microsugar.net/",title:"關注和 Star 本部落格"}),"或者",r.a.createElement(u.a,{href:"https://github.com/micro-sugar",title:"關注我的 Github"}),"。"),r.a.createElement("div",{id:"gitalk-container"})),r.a.createElement(k.a,{url:i}),r.a.createElement(p.a,{title:d,url:i,siteTitleAlt:"Microsugar's Blog",isPost:!1,description:o,image:c||"https://i.imgur.com/M795H8A.jpg"}))},n}(n.Component),P="4091093519";t.default=L}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-5e76783fa11841923553.js.map