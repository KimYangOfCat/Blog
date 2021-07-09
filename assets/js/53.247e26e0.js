(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{560:function(t,r,e){"use strict";e.r(r);var a=e(4),o=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"如何针对-ecmascript-规范创建一个拉取请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何针对-ecmascript-规范创建一个拉取请求"}},[t._v("#")]),t._v(" 如何针对 ECMAScript 规范创建一个拉取请求")]),t._v(" "),e("p",[t._v("对 JavaScript 规范的所有更改最终都会变为对 "),e("a",{attrs:{href:"https://github.com/tc39/ecma262/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ecma262"),e("OutboundLink")],1),t._v(" 或 "),e("a",{attrs:{href:"https://github.com/tc39/ecma402/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ecma402"),e("OutboundLink")],1),t._v(" 存储库的拉取请求。")]),t._v(" "),e("h2",{attrs:{id:"创建一个拉取请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建一个拉取请求"}},[t._v("#")]),t._v(" 创建一个拉取请求")]),t._v(" "),e("p",[t._v("要创建一个拉取请求（PR），请 "),e("a",{attrs:{href:"https://help.github.com/articles/fork-a-repo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("fork"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/tc39/ecma262",target:"_blank",rel:"noopener noreferrer"}},[t._v("ecma262"),e("OutboundLink")],1),t._v(" 仓库，将变更添加到 spec.html 文件，并将其上传到 GitHub 上之前 fork 的仓库中，使用 Web 端界面提交拉取请求。在本地编辑时，要想查看你在 HTML 中的内容更改，请运行 "),e("code",[t._v("npm run build")]),t._v("（通过 "),e("a",{attrs:{href:"https://github.com/bterlson/ecmarkup",target:"_blank",rel:"noopener noreferrer"}},[t._v("ecmarkup"),e("OutboundLink")],1),t._v("）将 spec.html 生成为实际的 HTML 文件。")]),t._v(" "),e("p",[e("strong",[t._v("拉取请求应指定哪个仓库？")]),t._v("：几乎所有规范内容的拉取请求都应针对 ecma262 仓库；ecma402 仓库仅用于存储国际规范（提供国际化的标准库）。")]),t._v(" "),e("p",[t._v("拉取请求中的提交的第一行应该以以下的标记开头，后跟冒号，以说明它们是哪一种修补（patch）类型：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("Normative:")]),t._v(" 变化会以某种方式影响 JavaScript 的行为。这些更改被称为“可观察的”，因为我们可以通过编写代码来“观察”其行为的变化。")]),t._v(" "),e("li",[e("code",[t._v("Editorial:")]),t._v(" 对规范文本进行的任何非规范性更改，包括拼写错误、文档样式的更改等。")]),t._v(" "),e("li",[e("code",[t._v("Layering:")]),t._v(" 重构规范文本、算法或嵌入钩子的修改，以实现 JavaScript 规范与其他使用 JavaScript 规范的无入侵式的集成。")]),t._v(" "),e("li",[e("code",[t._v("Markup:")]),t._v(" 对规范中的标记不可见的更改")]),t._v(" "),e("li",[e("code",[t._v("Meta:")]),t._v(" 更改了有关该存储库的文档（例如 readme.md 或 contributing.md）以及其他支持文档或脚本（例如 package.json，设计文档等）")])]),t._v(" "),e("h2",{attrs:{id:"第四阶段提案拉取请求-normative"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第四阶段提案拉取请求-normative"}},[t._v("#")]),t._v(" 第四阶段提案拉取请求（"),e("code",[t._v("Normative:")]),t._v("）")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://tc39.es/process-document/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TC39 阶段流程"),e("OutboundLink")],1),t._v(" 的第四阶段要求将建议书写成与规范相对应的拉取文本；要进入第四阶段，需要"),e("a",{attrs:{href:"https://github.com/tc39/how-we-work/blob/master/management.md#ecma-262-editor-group",target:"_blank",rel:"noopener noreferrer"}},[t._v("编辑组"),e("OutboundLink")],1),t._v("针对该拉取请求进行审查，并在第四阶段之后合并该拉取请求。")]),t._v(" "),e("h2",{attrs:{id:"非规范拉取请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#非规范拉取请求"}},[t._v("#")]),t._v(" 非规范拉取请求")]),t._v(" "),e("p",[e("code",[t._v("Editorial")]),t._v("、"),e("code",[t._v("Layering")]),t._v("、"),e("code",[t._v("Markup")]),t._v(" 和 "),e("code",[t._v("Meta")]),t._v(" 类型的拉取请求不会更改 JavaScript 的行为，但是它们对于正在阅读或使用 JavaScript 规范的人员却很有意义。")]),t._v(" "),e("p",[t._v("如果您要对 JavaScript 规范进行更改，请提出 Issue 进行初步讨论，或者直接创建拉取请求并请求审核。通常，针对拉取请求的审核可以完全在 GitHub 上进行，编者和任何其他想要参与的人都可以参与审核。由于 JavaScript 不会有明显的变化，因此这些拉取请求不需要委员会的明确共识，但是，如果出现了争议，则可以将这个拉取请求提交到委员会，交由委员会处理。")]),t._v(" "),e("h2",{attrs:{id:"规范性拉取请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#规范性拉取请求"}},[t._v("#")]),t._v(" 规范性拉取请求")]),t._v(" "),e("p",[t._v("规范性拉取请求更改了 JavaScript 程序的功能，可能需要采取行动才能从 JavaScript 引擎实现者以及使用 JavaScript 进行编程的开发者那里进行调整。这是很严肃的事情！因此，规范的拉取请求具有以下要求：")]),t._v(" "),e("ul",[e("li",[t._v("必须在 "),e("a",{attrs:{href:"https://github.com/tc39/test262/",target:"_blank",rel:"noopener noreferrer"}},[t._v("test262"),e("OutboundLink")],1),t._v(" 中提出针对拉取请求的所做的测试。")]),t._v(" "),e("li",[t._v("拉取请求必须在委员会中提出。在某些情况下，编者或作者只需对 PR 进行简短描述，如果没有提出任何疑问，则认为该提案“已达成共识”。在其他时候，如果该提案有争议，则需要"),e("a",{attrs:{href:"https://github.com/tc39/how-we-work/blob/master/presenting.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("准备演示文稿"),e("OutboundLink")],1),t._v("，更详细地说明动机（这很是有用）。随后将进行讨论，并且委员会将会针对是否可以就该提案达成共识作出回应。因此，有争议的规范性拉取请求会被标记为“需要共识”（"),e("code",[t._v("needs consensus")]),t._v("）。")])]),t._v(" "),e("p",[t._v("如果您有拟议的拉取请求，并且希望将其推进，请为其编写 test262 测试，并将其放在即将举行的 TC39 会议的议程上。如果您不在委员会中，对你而言重要的事情是要找到一个 TC39 代表来支持该提案，并在委员会的整个过程中（包括进行演示）将其推进。")]),t._v(" "),e("p",[t._v("我们鼓励 TC39 代表们在即将到来的会议议程上主动添加“需要共识”的拉取请求，并对其进行介绍。如果没有人主动提出该拉取请求，编者将在时间允许的情况下将其添加到议程中。")]),t._v(" "),e("h3",{attrs:{id:"网络与现实-拉取请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络与现实-拉取请求"}},[t._v("#")]),t._v(' "网络与现实" 拉取请求')]),t._v(" "),e("p",[t._v("有时，JavaScript 规范与大多数或所有 Web 浏览器实现的内容之间会出现不匹配的情况。鉴于网络上的大量代码，很有可能已经有许多网站期望这种行为，但是却没有明确说明，但大体上是部署了的。在这种情况下，最有用的事情通常是更改规范，而不是更改所有 JavaScript 实现，以匹配“网络现实”。")]),t._v(" "),e("h3",{attrs:{id:"实施反馈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实施反馈"}},[t._v("#")]),t._v(" 实施反馈")]),t._v(" "),e("p",[t._v("在许多情况下，收集有关实施规范的拉取请求的现实状况、是否实现对某些不太重要的修改感兴趣等方面，获取外界的反馈是有用的。对于这些情况，委员会可能会要求构建一个或多个实现（可能只是在 fork 中或被隐藏在 flag 中），然后再合并规范拉取请求。")]),t._v(" "),e("blockquote",[e("ul",[e("li",[t._v("原文地址："),e("a",{attrs:{href:"https://github.com/tc39/how-we-work/blob/master/pr.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to make a Pull Request against the ECMAScript specification"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("原文作者："),e("a",{attrs:{href:"https://github.com/tc39/how-we-work",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ecma TC39"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("译文出自："),e("a",{attrs:{href:"https://github.com/xitu/gold-miner",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘金翻译计划"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("本文永久链接："),e("a",{attrs:{href:"https://github.com/xitu/gold-miner/blob/master/article/ECMA-TC39/How-to-make-a-Pull-Request-against-the-ECMAScript-specification.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/xitu/gold-miner/blob/master/article/ECMA-TC39/How-to-make-a-Pull-Request-against-the-ECMAScript-specification.md"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("译者："),e("a",{attrs:{href:"https://github.com/PassionPenguin",target:"_blank",rel:"noopener noreferrer"}},[t._v("霜羽 Hoarfroster"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://github.com/Usualminds",target:"_blank",rel:"noopener noreferrer"}},[t._v("Usualminds"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("校对者："),e("a",{attrs:{href:"https://github.com/KimYangOfCat",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kim Yang"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://github.com/Usualminds",target:"_blank",rel:"noopener noreferrer"}},[t._v("Usualminds"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://github.com/kimberlyohq",target:"_blank",rel:"noopener noreferrer"}},[t._v("kimberlyohq"),e("OutboundLink")],1)])])])])}),[],!1,null,null,null);r.default=o.exports}}]);