(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),o=r(a("VbXa")),s=r(a("8OQS")),A=r(a("pVnL")),l=r(a("q1tI")),d=r(a("17x9")),c=function(e){var t=(0,A.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},u=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},f=Object.create({}),g=function(e){var t=c(e),a=u(t);return f[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,p="undefined"!=typeof window,h=p&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function y(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function v(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function S(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var B=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",A=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)})).join("")+"<img "+l+o+s+a+r+t+n+i+A+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=l.default.createElement(N,(0,A.default)({src:t},i));return a.length>1?l.default.createElement("picture",null,r(a),n):n},N=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,d=e.onError,c=e.loading,u=e.draggable,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,A.default)({sizes:a,srcSet:r,src:i},f,{onLoad:o,onError:d,ref:t,loading:c,draggable:u,style:(0,A.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));N.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=p&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&h&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||p&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=B(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=u(t),f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,u=void 0===d?{}:d,f=e.placeholderClassName,g=e.fluid,m=e.fixed,p=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,w=e.itemProp,S=e.loading,B=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,Q=(0,A.default)({opacity:C?1:0,transition:I?"opacity "+h+"ms":"none"},s),R="boolean"==typeof p?"lightgray":p,Y={transitionDelay:h+"ms"},k=(0,A.default)({opacity:this.state.imgLoaded?0:1},I&&Y,{},s,{},u),O={title:t,alt:this.state.isVisible?"":a,style:k,className:f,itemProp:w};if(g){var L=g,P=L[0];return l.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,A.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},l.default.createElement(b,{style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),R&&l.default.createElement(b,{title:t,style:(0,A.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&Y)}),P.base64&&l.default.createElement(x,{src:P.base64,spreadProps:O,imageVariants:L,generateSources:v}),P.tracedSVG&&l.default.createElement(x,{src:P.tracedSVG,spreadProps:O,imageVariants:L,generateSources:y}),this.state.isVisible&&l.default.createElement("picture",null,E(L),l.default.createElement(N,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:Q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:B})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,A.default)({alt:a,title:t,loading:S},P,{imageVariants:L}))}}))}if(m){var z=m,V=z[0],G=(0,A.default)({position:"relative",overflow:"hidden",display:"inline-block",width:V.width,height:V.height},n);return"inherit"===n.display&&delete G.display,l.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(V.srcSet)},R&&l.default.createElement(b,{title:t,style:(0,A.default)({backgroundColor:R,width:V.width,opacity:this.state.imgLoaded?0:1,height:V.height},I&&Y)}),V.base64&&l.default.createElement(x,{src:V.base64,spreadProps:O,imageVariants:z,generateSources:v}),V.tracedSVG&&l.default.createElement(x,{src:V.tracedSVG,spreadProps:O,imageVariants:z,generateSources:y}),this.state.isVisible&&l.default.createElement("picture",null,E(z),l.default.createElement(N,{alt:a,title:t,width:V.width,height:V.height,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:Q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:B})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,A.default)({alt:a,title:t,loading:S},V,{imageVariants:z}))}}))}return null},t}(l.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),Q=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});C.propTypes={resolutions:I,sizes:Q,fixed:d.default.oneOfType([I,d.default.arrayOf(I)]),fluid:d.default.oneOfType([Q,d.default.arrayOf(Q)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var R=C;t.default=R},YZWa:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("7oih"),o=a("tS16"),s=a("Wbzz"),A=a("9eSz"),l=a.n(A),d=function(e){var t=e.imageInfo,a={borderRadius:"5px"},r=t.alt,n=void 0===r?"":r,o=t.childImageSharp,s=t.image;return s&&s.childImageSharp?i.a.createElement(l.a,{style:a,fluid:s.childImageSharp.fluid,alt:n}):o?i.a.createElement(l.a,{style:a,fluid:o.fluid,alt:n}):s&&"string"==typeof s?i.a.createElement("img",{style:a,src:s,alt:n}):null};var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return i.a.createElement("div",{className:"columns is-multiline"},e&&e.map((function(e){var t=e.node;return i.a.createElement("div",{className:"is-parent column is-6",key:t.id},i.a.createElement("article",{className:"blog-list-item tile is-child box notification "+(t.frontmatter.featuredpost?"is-featured":"")},i.a.createElement("header",null,t.frontmatter.featuredimage?i.a.createElement("div",{className:"featured-thumbnail"},i.a.createElement(d,{imageInfo:{image:t.frontmatter.featuredimage,alt:"featured image thumbnail for post "+t.frontmatter.title}})):null,i.a.createElement("p",{className:"post-meta"},i.a.createElement(s.a,{className:"title has-text-primary is-size-4",to:t.fields.slug},t.frontmatter.title),i.a.createElement("span",null," • "),i.a.createElement("span",{className:"subtitle is-size-5 is-block"},t.frontmatter.date))),i.a.createElement("p",null,t.excerpt,i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(s.a,{className:"button",to:t.fields.slug},"Keep Reading →"))))})))},r}(i.a.Component),u=function(){return i.a.createElement(s.b,{query:"3722544792",render:function(e,t){return i.a.createElement(c,{data:e,count:t})},data:o})};a.d(t,"default",(function(){return f}));var f=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return i.a.createElement(n.a,null,i.a.createElement("div",{className:"full-width-image-container margin-top-0",style:{backgroundImage:"url('/img/canterbury-and-north-canterbury.jpg')"}},i.a.createElement("h1",{className:"has-text-weight-bold is-size-1",style:{boxShadow:"0.5rem 0 0 #99cc6a, -0.5rem 0 0 #99cc6a",backgroundColor:"#99cc6a",color:"white",padding:"1rem"}},"NZ Cellar Door Blog")),i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"content"},i.a.createElement(u,null)))))},r}(i.a.Component)},tS16:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"excerpt":"Just a short drive, 40 minutes, from Wanaka township, is Cromwell.   Starting in Wanaka town center, head out of town on SH6 and you’ll be on your way to the charming village of Cromwell with world-class vineyards and cellar door experiences along the way.   Heading out of Wanaka  you’ll pass iconic attractions such as Mount Iron and Puzzling world.  Turn right onto Riverbank Rd, cross Ballantyne…","id":"21bf7a19-b2ae-5a96-bca6-192e6c56e1bc","fields":{"slug":"/blog/2020-01-05-cellar-doors-from-wanaka-to-cromwell/"},"frontmatter":{"title":"Cellar Doors From Wanaka to Cromwell","templateKey":"blog-post","date":"January 05, 2020","featuredpost":true,"featuredimage":null}}},{"node":{"excerpt":"Over the coming months we will feature some of the best wineries in NZ for you to visit.  Make a day of it and build your own itinerary of cellar doors to visit, have a coffee or lunch, even stay for dinner and sample some of this countries great wines.  If you are a cellar door, vineyard or a winery, you can list your wineries here.","id":"9aa3a946-818c-500e-9e6f-a9a3eff418d8","fields":{"slug":"/blog/2020-01-03-welcome-to-nz-cellar-door/"},"frontmatter":{"title":"Welcome to NZ Cellar Door","templateKey":"blog-post","date":"January 03, 2020","featuredpost":true,"featuredimage":null}}},{"node":{"excerpt":"This week we’ll take a look at all the steps required to make astonishing coffee with a Chemex at home. The Chemex Coffeemaker is a manual, pour-over style glass-container coffeemaker that Peter Schlumbohm invented in 1941, and which continues to be manufactured by the Chemex Corporation in Chicopee, Massachusetts. In 1958, designers at the Illinois Institute of Technology said that the Chemex…","id":"7bacc961-c934-509d-9b93-d0b9b1c2473d","fields":{"slug":"/blog/2017-01-04-a-beginners-guide-to-brewing-with-chemex/"},"frontmatter":{"title":"A beginners’ guide to brewing with Chemex","templateKey":"blog-post","date":"January 04, 2017","featuredpost":false,"featuredimage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMFAgT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABpy06iknQJ//EABsQAQACAgMAAAAAAAAAAAAAAAEAAhMUAxIi/9oACAEBAAEFAhB81mYm3yVdvs5C0//EABYRAQEBAAAAAAAAAAAAAAAAAAAREv/aAAgBAwEBPwGtP//EABYRAQEBAAAAAAAAAAAAAAAAAAASAf/aAAgBAgEBPwGU4//EAB0QAAICAQUAAAAAAAAAAAAAAAABAhEDEBIhIpH/2gAIAQEABj8CirJN6Vx4dsaZew//xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMUGBkf/aAAgBAQABPyGnnUVLVKmCPWzyddqLgpGmOUH2f//aAAwDAQACAAMAAAAQ+x//xAAXEQADAQAAAAAAAAAAAAAAAAAAARFB/9oACAEDAQE/EE+FH//EABYRAQEBAAAAAAAAAAAAAAAAAAEQQf/aAAgBAgEBPxBGw//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESExQVFxofD/2gAIAQEAAT8Qvh6ud7uFSxhZebuBUFDgtqCGHyQPqp2EUtnjceyT84n/2Q==","aspectRatio":1.497659906396256,"src":"/static/ad53658d229612b8d23d0307be253419/21ae8/chemex.jpg","srcSet":"/static/ad53658d229612b8d23d0307be253419/e94c4/chemex.jpg 30w,\\n/static/ad53658d229612b8d23d0307be253419/abdde/chemex.jpg 60w,\\n/static/ad53658d229612b8d23d0307be253419/21ae8/chemex.jpg 120w,\\n/static/ad53658d229612b8d23d0307be253419/4e664/chemex.jpg 180w,\\n/static/ad53658d229612b8d23d0307be253419/81141/chemex.jpg 240w,\\n/static/ad53658d229612b8d23d0307be253419/08e03/chemex.jpg 1920w","sizes":"(max-width: 120px) 100vw, 120px"}}}}}},{"node":{"excerpt":"The SCAA updated the wheel to reflect the finer nuances needed to describe flavors more precisely. The new descriptions are more detailed and hence allow cuppers to distinguish between more flavors. While this is going to be a big change for professional coffee tasters, it means a lot to you as a consumer as well. We’ll explain how the wheel came to be, how pros use it and what the flavors…","id":"e68311e6-a349-5a87-9f34-e58571cdea35","fields":{"slug":"/blog/2016-12-17-making-sense-of-the-scaas-new-flavor-wheel/"},"frontmatter":{"title":"Making sense of the SCAA’s new Flavor Wheel","templateKey":"blog-post","date":"December 17, 2016","featuredpost":false,"featuredimage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwABBP/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAcAgztrnmf/EABoQAQEAAgMAAAAAAAAAAAAAAAIBAxIAEST/2gAIAQEAAQUCOboqHTIdUh5lmtNdXP/EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPwFOFP/EABYRAQEBAAAAAAAAAAAAAAAAAAARMf/aAAgBAgEBPwHUf//EABsQAAICAwEAAAAAAAAAAAAAAAABESECIjES/9oACAEBAAY/AtYpk5dbtkUhZy9nw80Wf//EABsQAQACAwEBAAAAAAAAAAAAAAEAESExQWFx/9oACAEBAAE/IV1BgTaSgFuId8nhG6lGXUPEL0B8jo7hU//aAAwDAQACAAMAAAAQHB//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPxAI/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAAWH/2gAIAQIBAT8Qwp//xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhMVFh/9oACAEBAAE/EGGKPrWWwixsQJLKfOx7wyKn0u8yafIoHvQruRvEFKaayGEIBWYcn//Z","aspectRatio":1.5036710719530102,"src":"/static/19a6d5ab24bbc3b3531f11ecab349683/21ae8/flavor_wheel.jpg","srcSet":"/static/19a6d5ab24bbc3b3531f11ecab349683/e94c4/flavor_wheel.jpg 30w,\\n/static/19a6d5ab24bbc3b3531f11ecab349683/abdde/flavor_wheel.jpg 60w,\\n/static/19a6d5ab24bbc3b3531f11ecab349683/21ae8/flavor_wheel.jpg 120w,\\n/static/19a6d5ab24bbc3b3531f11ecab349683/4e664/flavor_wheel.jpg 180w,\\n/static/19a6d5ab24bbc3b3531f11ecab349683/81141/flavor_wheel.jpg 240w,\\n/static/19a6d5ab24bbc3b3531f11ecab349683/39658/flavor_wheel.jpg 1024w","sizes":"(max-width: 120px) 100vw, 120px"}}}}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-0e48bc0baf9a57f132ae.js.map