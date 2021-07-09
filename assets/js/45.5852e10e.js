(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{552:function(e,r,t){"use strict";t.r(r);var o=t(4),n=Object(o.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"_16px-或更大的字体大小可以避免-ios-的表单缩放问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_16px-或更大的字体大小可以避免-ios-的表单缩放问题"}},[e._v("#")]),e._v(" 16px 或更大的字体大小可以避免 iOS 的表单缩放问题")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://twitter.com/joshwcomeau/status/1379782931116351490?s=12",target:"_blank",rel:"noopener noreferrer"}},[e._v("“今天我已经学到的” —— 我从乔什·科莫（Josh W. Comeau）的推特中学习到"),t("OutboundLink")],1),e._v(" 的东西真的是太棒了！！！如果 "),t("code",[e._v("<input>")]),e._v(" 的 "),t("code",[e._v("font-size")]),e._v(" 被设定为 "),t("code",[e._v("16px")]),e._v(" 或更大，那么 iOS 上的 Safari 将正常聚焦到输入表单中。但是，一旦 "),t("code",[e._v("font-size")]),e._v(" 等于或小于 "),t("code",[e._v("15px")]),e._v("，视图窗口就会放大并聚焦到该 "),t("code",[e._v("<input>")]),e._v("（或许是因为苹果认为字体太小，因此它会放大以帮助你更清楚地看到自己在做什么）。这个设计是用来增强可访问性的，如果你不想要，请确保 "),t("code",[e._v("<input>")]),e._v(" 的字体足够大。")]),e._v(" "),t("p",[e._v("如果你想自己试试，请打开"),t("a",{attrs:{href:"https://codepen.io/joshwcomeau/pen/VwPMPZo",target:"_blank",rel:"noopener noreferrer"}},[e._v("乔什的 "),t("code",[e._v("codepen")]),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("总的来说，我还挺喜欢这个功能。它可以帮助人们了解自己在做什么，并且也表了态 —— 苹果不建议开发者在 UI 中使用过小的字体。让人略感遗憾的是（我在这里并没责怪任何人），在不同字体大小的可读性上，并非所有字体都是一样的。比如说，下图是字体大小为 16px 的 "),t("em",[e._v("San Francisco")]),e._v(" 与 "),t("em",[e._v("Caveat")]),e._v(" 的对比：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://i2.wp.com/css-tricks.com/wp-content/uploads/2021/04/Screen-Shot-2021-04-30-at-9.11.55-AM.png?resize=558%EF%BC%852C344&ssl=1",alt:""}})]),e._v(" "),t("p",[t("small",[e._v("左边是 "),t("em",[e._v("San Francisco")]),e._v("，右边是 "),t("em",[e._v("Caveat")]),e._v("。即使 "),t("code",[e._v("font-size")]),e._v(" 相同，"),t("em",[e._v("Caveat")]),e._v(" 在外观上看起来也要小得多。")])]),e._v(" "),t("p",[e._v("你可以在 Safari 浏览器中打开"),t("a",{attrs:{href:"https://cdpn.io/chriscoyier/debug/MWJxXWz",target:"_blank",rel:"noopener noreferrer"}},[e._v("调试模式"),t("OutboundLink")],1),e._v(" ，查看"),t("a",{attrs:{href:"https://codepen.io/chriscoyier/pen/MWJxXWz",target:"_blank",rel:"noopener noreferrer"}},[e._v("该示例"),t("OutboundLink")],1),e._v("，并更改字体大小以查看会自动放大聚焦与不会放大聚焦的具体表现。")]),e._v(" "),t("hr"),e._v(" "),t("blockquote",[t("p",[e._v("🔥 将表单输入设置为 1rem（16px）或更大的字体，以防止在点击时 iOS Safari 浏览器自动放大并聚焦到 "),t("code",[e._v("input")]),e._v(" 元素上。")]),e._v(" "),t("p",[e._v("从用户体验的角度来看有很大的不同！")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/PassionPenguin/gold-miner-images/blob/master/16px-or-larger-text-prevents-ios-form-zoom-EyX2MSaXMAExyQA.gif?raw=true",alt:""}})]),e._v(" "),t("p",[e._v("—— Josh W. Comeau @JoshWComeau 9:07, Apr 7, 2021")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("当 Safari 放大时，它似乎希望让该 input 控件的实际字体大小为 16px。在下面两张图中，用户在输入文本时看到的字体大小其实都是 16px。因此更改后，输入文本的阅读体验实际上并没有变得更差！！")]),e._v(" "),t("p",[e._v("另外，人们始终可以根据需要手动放大。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://pbs.twimg.com/media/EyX5HAlXEAErIj6?format=png&name=small",alt:""}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://pbs.twimg.com/media/EyX5IBWWUAA8Sis?format=png&name=small",alt:""}})]),e._v(" "),t("p",[e._v("—— Josh W. Comeau @JoshWComeau 9:07, Apr 7, 2021")])]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("原文地址："),t("a",{attrs:{href:"https://css-tricks.com/16px-or-larger-text-prevents-ios-form-zoom/",target:"_blank",rel:"noopener noreferrer"}},[e._v("16px or Larger Text Prevents iOS Form Zoom"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("原文作者："),t("a",{attrs:{href:"https://css-tricks.com/author/chriscoyier/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chris Coyier "),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("译文出自："),t("a",{attrs:{href:"https://github.com/xitu/gold-miner",target:"_blank",rel:"noopener noreferrer"}},[e._v("掘金翻译计划"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("本文永久链接："),t("a",{attrs:{href:"https://github.com/xitu/gold-miner/blob/master/article/2021/.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/xitu/gold-miner/blob/master/article/2021/.md"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("译者："),t("a",{attrs:{href:"https://github.com/PassionPenguin",target:"_blank",rel:"noopener noreferrer"}},[e._v("霜羽 Hoarfroster"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("校对者："),t("a",{attrs:{href:"https://github.com/KimYangOfCat",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kim Yang"),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"https://github.com/Chorer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chorer"),t("OutboundLink")],1)])])])])}),[],!1,null,null,null);r.default=n.exports}}]);