(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var A=a("TqRt");t.__esModule=!0,t.default=void 0;var i,r=A(a("PJYZ")),s=A(a("VbXa")),n=A(a("8OQS")),l=A(a("pVnL")),o=A(a("q1tI")),d=A(a("17x9")),c=function(e){var t=(0,l.default)({},e),a=t.resolutions,A=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),A&&(t.fluid=A,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},u=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},f=Object.create({}),g=function(e){var t=c(e),a=u(t);return f[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,p=h&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,A=e.srcSetWebp,i=e.media,r=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},A&&o.default.createElement("source",{type:"image/webp",media:i,srcSet:A,sizes:r}),o.default.createElement("source",{media:i,srcSet:a,sizes:r}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function B(e){return e.map((function(e){var t=e.src,a=e.media,A=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:A})}))}function v(e){return e.map((function(e){var t=e.src,a=e.media,A=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:A})}))}function y(e,t){var a=e.srcSet,A=e.srcSetWebp,i=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?A:a)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",A=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",n=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?y(e,!0):"")+y(e)})).join("")+"<img "+o+s+n+a+A+t+r+i+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=function(e){var t=e.src,a=e.imageVariants,A=e.generateSources,i=e.spreadProps,r=o.default.createElement(S,(0,l.default)({src:t},i));return a.length>1?o.default.createElement("picture",null,A(a),r):r},S=o.default.forwardRef((function(e,t){var a=e.sizes,A=e.srcSet,i=e.src,r=e.style,s=e.onLoad,d=e.onError,c=e.loading,u=e.draggable,f=(0,n.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return o.default.createElement("img",(0,l.default)({sizes:a,srcSet:A,src:i},f,{onLoad:s,onError:d,ref:t,loading:c,draggable:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));S.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var Q=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&p&&!a.isCritical&&!a.seenBefore;var A=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:A,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)(a)),a.handleRef=a.handleRef.bind((0,r.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=u(t),f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,A=e.className,i=e.style,r=void 0===i?{}:i,s=e.imgStyle,n=void 0===s?{}:s,d=e.placeholderStyle,u=void 0===d?{}:d,f=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,p=e.durationFadeIn,b=e.Tag,w=e.itemProp,y=e.loading,j=e.draggable,Q=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,l.default)({opacity:Q?1:0,transition:I?"opacity "+p+"ms":"none"},n),R="boolean"==typeof h?"lightgray":h,Y={transitionDelay:p+"ms"},k=(0,l.default)({opacity:this.state.imgLoaded?0:1},I&&Y,{},n,{},u),P={title:t,alt:this.state.isVisible?"":a,style:k,className:f,itemProp:w};if(g){var z=g,D=z[0];return o.default.createElement(b,{className:(A||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(D.srcSet)},o.default.createElement(b,{style:{width:"100%",paddingBottom:100/D.aspectRatio+"%"}}),R&&o.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&Y)}),D.base64&&o.default.createElement(N,{src:D.base64,spreadProps:P,imageVariants:z,generateSources:v}),D.tracedSVG&&o.default.createElement(N,{src:D.tracedSVG,spreadProps:P,imageVariants:z,generateSources:B}),this.state.isVisible&&o.default.createElement("picture",null,E(z),o.default.createElement(S,{alt:a,title:t,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:y,draggable:j})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:y},D,{imageVariants:z}))}}))}if(m){var L=m,O=L[0],V=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:O.width,height:O.height},r);return"inherit"===r.display&&delete V.display,o.default.createElement(b,{className:(A||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(O.srcSet)},R&&o.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:R,width:O.width,opacity:this.state.imgLoaded?0:1,height:O.height},I&&Y)}),O.base64&&o.default.createElement(N,{src:O.base64,spreadProps:P,imageVariants:L,generateSources:v}),O.tracedSVG&&o.default.createElement(N,{src:O.tracedSVG,spreadProps:P,imageVariants:L,generateSources:B}),this.state.isVisible&&o.default.createElement("picture",null,E(L),o.default.createElement(S,{alt:a,title:t,width:O.width,height:O.height,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:y,draggable:j})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:y},O,{imageVariants:L}))}}))}return null},t}(o.default.Component);Q.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),C=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});Q.propTypes={resolutions:I,sizes:C,fixed:d.default.oneOfType([I,d.default.arrayOf(I)]),fluid:d.default.oneOfType([C,d.default.arrayOf(C)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var R=Q;t.default=R},I22s:function(e,t,a){"use strict";var A=a("q1tI"),i=a.n(A),r=a("9eSz"),s=a.n(r);t.a=function(e){var t=e.imageInfo,a={borderRadius:"5px"},A=t.alt,r=void 0===A?"":A,n=t.childImageSharp,l=t.image;return l&&l.childImageSharp?i.a.createElement(s.a,{style:a,fluid:l.childImageSharp.fluid,alt:r}):n?i.a.createElement(s.a,{style:a,fluid:n.fluid,alt:r}):l&&"string"==typeof l?i.a.createElement("img",{style:a,src:l,alt:r}):null}},"PL+z":function(e,t,a){"use strict";a.r(t),a.d(t,"IndexPageTemplate",(function(){return o})),a.d(t,"pageQuery",(function(){return d}));var A=a("q1tI"),i=a.n(A),r=a("Wbzz"),s=a("7oih"),n=a("lynl"),l=a("v/M3"),o=function(e){var t=e.image,a=e.title,A=e.heading,s=e.subheading,o=e.mainpitch,d=e.description,c=e.intro;return i.a.createElement("div",null,i.a.createElement("div",{className:"full-width-image margin-top-0",style:{backgroundImage:"url("+(t.childImageSharp?t.childImageSharp.fluid.src:t)+")",backgroundPosition:"top left",backgroundAttachment:"fixed"}},i.a.createElement("div",{style:{display:"flex",height:"150px",lineHeight:"1",justifyContent:"space-around",alignItems:"left",flexDirection:"column"}},i.a.createElement("h1",{className:"has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen",style:{boxShadow:"rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",backgroundColor:"rgb(255, 68, 0)",color:"white",lineHeight:"1",padding:"0.25em"}},a),i.a.createElement("h3",{className:"has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen",style:{boxShadow:"rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",backgroundColor:"rgb(255, 68, 0)",color:"white",lineHeight:"1",padding:"0.25em"}},s))),i.a.createElement("section",{className:"section section--gradient"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column is-10 is-offset-1"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"tile"},i.a.createElement("h1",{className:"title"},o.title)),i.a.createElement("div",{className:"tile"},i.a.createElement("h3",{className:"subtitle"},o.description))),i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column is-12"},i.a.createElement("h3",{className:"has-text-weight-semibold is-size-2"},A),i.a.createElement("p",null,d))),i.a.createElement(n.a,{gridItems:c.blurbs}),i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column is-12 has-text-centered"},i.a.createElement(r.a,{className:"btn",to:"/products"},"See all products"))),i.a.createElement("div",{className:"column is-12"},i.a.createElement("h3",{className:"has-text-weight-semibold is-size-2"},"Latest stories"),i.a.createElement(l.a,null),i.a.createElement("div",{className:"column is-12 has-text-centered"},i.a.createElement(r.a,{className:"btn",to:"/blog"},"Read more"))))))))))};t.default=function(e){var t=e.data.markdownRemark.frontmatter;return i.a.createElement(s.a,null,i.a.createElement(o,{image:t.image,title:t.title,heading:t.heading,subheading:t.subheading,mainpitch:t.mainpitch,description:t.description,intro:t.intro}))};var d="4066978147"},lynl:function(e,t,a){"use strict";var A=a("q1tI"),i=a.n(A),r=a("I22s");t.a=function(e){var t=e.gridItems;return i.a.createElement("div",{className:"columns is-multiline"},t.map((function(e){return i.a.createElement("div",{key:e.text,className:"column is-6"},i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:"has-text-centered"},i.a.createElement("div",{style:{width:"240px",display:"inline-block"}},i.a.createElement(r.a,{imageInfo:e}))),i.a.createElement("p",null,e.text)))})))}},tS16:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"excerpt":"test","id":"d28a47f7-9813-56c3-8251-ea8e59068cb5","fields":{"slug":"/blog/2019-12-15-test/"},"frontmatter":{"title":"test","templateKey":"blog-post","date":"December 15, 2019","featuredpost":true,"featuredimage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIBA//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHpVRKYP//EABcQAQEBAQAAAAAAAAAAAAAAAAEAEBH/2gAIAQEAAQUCzkwBn//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABoQAQACAwEAAAAAAAAAAAAAAAEAIRARMXH/2gAIAQEAAT8hKNtr2LuK3SnjhYB2Ns//2gAMAwEAAgADAAAAEKTf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8QV//EABwQAQADAAIDAAAAAAAAAAAAAAEAESExQVFh8P/aAAgBAQABPxArJyl2wgA22VpvuXFe9UEGfeYojFNsBps//9k=","aspectRatio":1.7777777777777777,"src":"/blog/static/7f3784c968918e873b068df83a4d2512/21ae8/20191215_141100.jpg","srcSet":"/blog/static/7f3784c968918e873b068df83a4d2512/e94c4/20191215_141100.jpg 30w,\\n/blog/static/7f3784c968918e873b068df83a4d2512/abdde/20191215_141100.jpg 60w,\\n/blog/static/7f3784c968918e873b068df83a4d2512/21ae8/20191215_141100.jpg 120w,\\n/blog/static/7f3784c968918e873b068df83a4d2512/4e664/20191215_141100.jpg 180w,\\n/blog/static/7f3784c968918e873b068df83a4d2512/81141/20191215_141100.jpg 240w,\\n/blog/static/7f3784c968918e873b068df83a4d2512/9efb7/20191215_141100.jpg 3264w","sizes":"(max-width: 120px) 100vw, 120px"}}}}}},{"node":{"excerpt":"This week we’ll take a look at all the steps required to make astonishing coffee with a Chemex at home. The Chemex Coffeemaker is a manual, pour-over style glass-container coffeemaker that Peter Schlumbohm invented in 1941, and which continues to be manufactured by the Chemex Corporation in Chicopee, Massachusetts. In 1958, designers at the Illinois Institute of Technology said that the Chemex…","id":"d59ef076-d0c2-5e9f-9955-8b0350ed999f","fields":{"slug":"/blog/2017-01-04-a-beginners-guide-to-brewing-with-chemex/"},"frontmatter":{"title":"A beginners’ guide to brewing with Chemex","templateKey":"blog-post","date":"January 04, 2017","featuredpost":false,"featuredimage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMFAgT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABpy06iknQJ//EABsQAQACAgMAAAAAAAAAAAAAAAEAAhMUAxIi/9oACAEBAAEFAhB81mYm3yVdvs5C0//EABYRAQEBAAAAAAAAAAAAAAAAAAAREv/aAAgBAwEBPwGtP//EABYRAQEBAAAAAAAAAAAAAAAAAAASAf/aAAgBAgEBPwGU4//EAB0QAAICAQUAAAAAAAAAAAAAAAABAhEDEBIhIpH/2gAIAQEABj8CirJN6Vx4dsaZew//xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMUGBkf/aAAgBAQABPyGnnUVLVKmCPWzyddqLgpGmOUH2f//aAAwDAQACAAMAAAAQ+x//xAAXEQADAQAAAAAAAAAAAAAAAAAAARFB/9oACAEDAQE/EE+FH//EABYRAQEBAAAAAAAAAAAAAAAAAAEQQf/aAAgBAgEBPxBGw//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESExQVFxofD/2gAIAQEAAT8Qvh6ud7uFSxhZebuBUFDgtqCGHyQPqp2EUtnjceyT84n/2Q==","aspectRatio":1.497659906396256,"src":"/blog/static/ad53658d229612b8d23d0307be253419/21ae8/chemex.jpg","srcSet":"/blog/static/ad53658d229612b8d23d0307be253419/e94c4/chemex.jpg 30w,\\n/blog/static/ad53658d229612b8d23d0307be253419/abdde/chemex.jpg 60w,\\n/blog/static/ad53658d229612b8d23d0307be253419/21ae8/chemex.jpg 120w,\\n/blog/static/ad53658d229612b8d23d0307be253419/4e664/chemex.jpg 180w,\\n/blog/static/ad53658d229612b8d23d0307be253419/81141/chemex.jpg 240w,\\n/blog/static/ad53658d229612b8d23d0307be253419/08e03/chemex.jpg 1920w","sizes":"(max-width: 120px) 100vw, 120px"}}}}}},{"node":{"excerpt":"We expect the shipment of a limited quantity of green beans next Monday. We’ll be offering the roasted beans from Tuesday, but quantities are limited, so be quick. Blue Mountain Peak is the highest mountain in Jamaica and one of the highest peaks in the Caribbean at 7,402 ft. It is the home of Blue Mountain coffee and their famous tours. It is located on the border of the Portland and Saint Thomas…","id":"2c3a682d-cf32-59c0-9b37-9fbaaa0db00b","fields":{"slug":"/blog/2017-01-04-just-in-small-batch-of-jamaican-blue-mountain-in-store-next-week/"},"frontmatter":{"title":"Just in: small batch of Jamaican Blue Mountain in store next week","templateKey":"blog-post","date":"January 04, 2017","featuredpost":true,"featuredimage":null}}},{"node":{"excerpt":"The SCAA updated the wheel to reflect the finer nuances needed to describe flavors more precisely. The new descriptions are more detailed and hence allow cuppers to distinguish between more flavors. While this is going to be a big change for professional coffee tasters, it means a lot to you as a consumer as well. We’ll explain how the wheel came to be, how pros use it and what the flavors…","id":"614ee797-3014-5dda-9a04-4294b5fe435b","fields":{"slug":"/blog/2016-12-17-making-sense-of-the-scaas-new-flavor-wheel/"},"frontmatter":{"title":"Making sense of the SCAA’s new Flavor Wheel","templateKey":"blog-post","date":"December 17, 2016","featuredpost":false,"featuredimage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwABBP/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAcAgztrnmf/EABoQAQEAAgMAAAAAAAAAAAAAAAIBAxIAEST/2gAIAQEAAQUCOboqHTIdUh5lmtNdXP/EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPwFOFP/EABYRAQEBAAAAAAAAAAAAAAAAAAARMf/aAAgBAgEBPwHUf//EABsQAAICAwEAAAAAAAAAAAAAAAABESECIjES/9oACAEBAAY/AtYpk5dbtkUhZy9nw80Wf//EABsQAQACAwEBAAAAAAAAAAAAAAEAESExQWFx/9oACAEBAAE/IV1BgTaSgFuId8nhG6lGXUPEL0B8jo7hU//aAAwDAQACAAMAAAAQHB//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPxAI/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAAWH/2gAIAQIBAT8Qwp//xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhMVFh/9oACAEBAAE/EGGKPrWWwixsQJLKfOx7wyKn0u8yafIoHvQruRvEFKaayGEIBWYcn//Z","aspectRatio":1.5036710719530102,"src":"/blog/static/19a6d5ab24bbc3b3531f11ecab349683/21ae8/flavor_wheel.jpg","srcSet":"/blog/static/19a6d5ab24bbc3b3531f11ecab349683/e94c4/flavor_wheel.jpg 30w,\\n/blog/static/19a6d5ab24bbc3b3531f11ecab349683/abdde/flavor_wheel.jpg 60w,\\n/blog/static/19a6d5ab24bbc3b3531f11ecab349683/21ae8/flavor_wheel.jpg 120w,\\n/blog/static/19a6d5ab24bbc3b3531f11ecab349683/4e664/flavor_wheel.jpg 180w,\\n/blog/static/19a6d5ab24bbc3b3531f11ecab349683/81141/flavor_wheel.jpg 240w,\\n/blog/static/19a6d5ab24bbc3b3531f11ecab349683/39658/flavor_wheel.jpg 1024w","sizes":"(max-width: 120px) 100vw, 120px"}}}}}}]}}}')},"v/M3":function(e,t,a){"use strict";var A=a("tS16"),i=a("q1tI"),r=a.n(i),s=a("Wbzz"),n=a("I22s");var l=function(e){var t,a;function A(){return e.apply(this,arguments)||this}return a=e,(t=A).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,A.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return r.a.createElement("div",{className:"columns is-multiline"},e&&e.map((function(e){var t=e.node;return r.a.createElement("div",{className:"is-parent column is-6",key:t.id},r.a.createElement("article",{className:"blog-list-item tile is-child box notification "+(t.frontmatter.featuredpost?"is-featured":"")},r.a.createElement("header",null,t.frontmatter.featuredimage?r.a.createElement("div",{className:"featured-thumbnail"},r.a.createElement(n.a,{imageInfo:{image:t.frontmatter.featuredimage,alt:"featured image thumbnail for post "+t.frontmatter.title}})):null,r.a.createElement("p",{className:"post-meta"},r.a.createElement(s.a,{className:"title has-text-primary is-size-4",to:t.fields.slug},t.frontmatter.title),r.a.createElement("span",null," • "),r.a.createElement("span",{className:"subtitle is-size-5 is-block"},t.frontmatter.date))),r.a.createElement("p",null,t.excerpt,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(s.a,{className:"button",to:t.fields.slug},"Keep Reading →"))))})))},A}(r.a.Component);t.a=function(){return r.a.createElement(s.b,{query:"3722544792",render:function(e,t){return r.a.createElement(l,{data:e,count:t})},data:A})}}}]);
//# sourceMappingURL=component---src-templates-index-page-js-b3092bd635b2f0b9fefd.js.map