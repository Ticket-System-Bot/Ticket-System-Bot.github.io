"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[237],{4629:function(e,t,a){var r=a(7294),n=a(9960);t.Z=function(e){var t=e.type,a=e.label,o=e.icon,c=e.link,l=e.isDisabled,i=e.onClick,s=e.children,m=function(e){var t=[];return e.split(" ").forEach((function(e){t.push("pyc-button--"+e)})),t.join(" ")},u=r.createElement("button",{className:"pyc-button"+(t?" "+m(t):""),"aria-label":a||(null==s?void 0:s.toString()),disabled:l,onClick:i},o&&r.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},o),s&&r.createElement("span",{className:"pyc-button__label"},s));return c?r.createElement(n.Z,{className:"pyc-button"+(t?" "+m(t):""),"aria-label":a||(null==s?void 0:s.toString()),href:c},o&&r.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},o),s&&r.createElement("span",{className:"pyc-button__label"},s)):u}},1522:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var r=a(7294),n=a(5742),o=a(4669),c="Server Manager Discord bot - let the bot do the hard work for you.",l=function(e){var t=e.title,a=e.description,l=e.children;return r.createElement(r.Fragment,null,r.createElement(n.Z,null,r.createElement("title",null,t," - ",c),r.createElement("meta",{name:"description",content:a}),r.createElement("meta",{property:"og:description",content:"Server Manager is a unique Discord bot that gives server moderators and admins easy and reliable ways to moderate the servers they care about, let Server Manager do the hard work for you."}),r.createElement("meta",{property:"og:title",content:"Server Manager"}),r.createElement("meta",{property:"og:image",content:"https://imgur.com/BHyNRD2.png"}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"theme-color",content:"#5865F2"})),r.createElement(o.Z,null,l))},i=a(4629),s=function(e){var t=e.title,a=e.subtitle,n=e.hasLogo,o=void 0===n||n;return r.createElement("section",{className:"pyc-hero"},r.createElement("div",{className:"pyc-hero__wrap"},o&&r.createElement("img",{src:"/img/logo.png",alt:"Pycord Logo",className:"logo"}),r.createElement("h1",null,t),r.createElement("span",{className:"pyc-hero__subtitle"},a),r.createElement("div",{className:"pyc-hero__actions"},r.createElement(i.Z,{type:"filled inverted",link:"/introduction"},"Get Started"))))};function m(){return r.createElement(l,{title:"Server Manager Documentation",description:"Server Manage Docs"},r.createElement(n.Z,null,r.createElement("script",{async:!0,src:"https://arc.io/widget.min.js#hD9CJ6sv"})),r.createElement(s,{title:"Server Manager Documentation",subtitle:"Server Manager - A simple multipurpose Discord bot",hasLogo:!0}),r.createElement("main",{className:"content-wrap--home-page"},"Imagine a bot that can take away all the stress of setting up a simple moderation bot, so you can just relax and have the bot do it for you. Server Manager is here to help!"))}}}]);