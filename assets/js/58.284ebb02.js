(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{577:function(t,a,s){"use strict";s.r(a);var e=s(4),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"使用-ci-cd-优化前端构建的五种策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-ci-cd-优化前端构建的五种策略"}},[t._v("#")]),t._v(" 使用 CI/CD 优化前端构建的五种策略")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn-images-1.medium.com/max/2560/1*4QARtPZqNOK5peGb0vFLSg.jpeg",alt:""}})]),t._v(" "),s("p",[t._v("如今使用 CI/CD 工具是网页应用程序开发的一个必要条件。作为关键开发路径的一部分，加快构建系统的速度对于提高开发人员的生产效率是至关重要的。")]),t._v(" "),s("p",[t._v("因此，在这篇文章中，我们将带你了解五种使用 CI/CD 优化前端构建时间的不同策略。")]),t._v(" "),s("h2",{attrs:{id:"_1-使用并行网络包-parallel-webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用并行网络包-parallel-webpack"}},[t._v("#")]),t._v(" 1. 使用并行网络包 Parallel-Webpack")]),t._v(" "),s("blockquote",[s("p",[t._v("Parallel-Webpack 让你能够一边运行一边进行构建应用程序，以减少应用程序构建时间。")])]),t._v(" "),s("p",[t._v("你可以通过使用以下 NPM 命令轻松开始使用 Parallel-Webpack：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" parallel-webpack —-save-dev\n")])])]),s("p",[t._v("为了更好地了解 Parallel-Webpack 的配置，我们来看个简单的示例。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./firstjob.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./dist'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'task1.bundle.js'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./secondjob.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./dist'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'task2.bundle.js'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("上面的配置包括两个独立的构建任务，分别是 "),s("code",[t._v("firstjob")]),t._v(" 和 "),s("code",[t._v("secondjob")]),t._v("。Parallel-Webpack 会同时运行这两个构建任务，你会发现 "),s("code",[t._v("task1.bundle.js")]),t._v(" 和 "),s("code",[t._v("task2.bundle.js")]),t._v(" 同时被构建。")]),t._v(" "),s("blockquote",[s("p",[t._v("Parallel-Webpack 允许你控制并行性，包括 Webpack 的普通功能，例如观察者（watcher）和重传限制（retry limit）。")])]),t._v(" "),s("h3",{attrs:{id:"控制并行性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#控制并行性"}},[t._v("#")]),t._v(" 控制并行性")]),t._v(" "),s("p",[t._v("有时，你可能想限制 Parallel-Webpack 可用的 CPU 核心数量。在这种情况下，你可以使用 "),s("code",[t._v("parallel-webpack -p=2")]),t._v(" 命令指定可用的 CPU  核心数量。")]),t._v(" "),s("h3",{attrs:{id:"运行观察者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行观察者"}},[t._v("#")]),t._v(" 运行观察者")]),t._v(" "),s("p",[t._v("让 Webpack 如此有影响力的功能之一是它的观察者，它可以持续地重建你的应用程序。你可以在 Parallel-Webpack 中毫不费力地使用同样的功能，只要在命令中加入 watch 标志即可。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("parallel-webpack --watch\n")])])]),s("p",[t._v("同样地，Parallel-Webpack 中有许多令人兴奋的功能，可以集成到你的 CI/CD 管道中，以便加快它的速度。你也可以在"),s("a",{attrs:{href:"https://github.com/trivago/parallel-webpack",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),s("OutboundLink")],1),t._v("中找到更多有关信息。")]),t._v(" "),s("h2",{attrs:{id:"_2-将应用程序拆分成微前端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-将应用程序拆分成微前端"}},[t._v("#")]),t._v(" 2. 将应用程序拆分成微前端")]),t._v(" "),s("p",[t._v("假设考虑传统的单体前端系统，它们中的大部分是只有一个构建管道和一个发布管道。因此，如果有一个错误修复或新功能更新，就有可能破坏 CI/CD 管道中的整个构建阶段。")]),t._v(" "),s("p",[t._v("然而，如果我们使用微前端，我们可以将应用程序的功能拆分，并独立维护应用程序的构建和发布管道，以便不断提交更新和修复错误。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn-images-1.medium.com/max/2000/1*_wBCz4UeRf6qW8Dk38zs1A.png",alt:"Micro Frontend Architecture"}})]),t._v(" "),s("p",[t._v("通常，可以独立地整合和部署每个应用程序，让你更快地修复重要功能。因此，这确实对 CI/CD 流程的提速有很大帮助。")]),t._v(" "),s("h2",{attrs:{id:"_3-组件驱动型-ci-ripple-ci"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-组件驱动型-ci-ripple-ci"}},[t._v("#")]),t._v(" 3. 组件驱动型 CI：Ripple CI")]),t._v(" "),s("p",[t._v("组件驱动型 CI 是指只在修改过的组件和它们的所有依赖关系（即受影响的组件）上运行的 CI，它不把整个项目作为一个单独实体。Ripple CI 的典型示例是 "),s("a",{attrs:{href:"https://gihub.com/teambit/bit",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bit"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"_4-优化-webpack-的性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-优化-webpack-的性能"}},[t._v("#")]),t._v(" 4. 优化 Webpack 的性能")]),t._v(" "),s("p",[t._v("我们通常使用 Webpack 的默认设置。然而，你是否知道如何通过使用插件和自定义配置进一步优化它吗？")]),t._v(" "),s("h3",{attrs:{id:"使用-uglifyjs-webpack-plugin-v1-插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-uglifyjs-webpack-plugin-v1-插件"}},[t._v("#")]),t._v(" 使用 "),s("code",[t._v("uglifyjs-webpack-plugin v1")]),t._v(" 插件")]),t._v(" "),s("p",[t._v("压缩是指在你的网页中压缩代码、标记和脚本文件的过程。它是减少构建时间的主要方法之一。")]),t._v(" "),s("p",[t._v("但是，随着项目规模的扩大，这个修改过程本身也会花费相当多的时间。")]),t._v(" "),s("p",[t._v("如果项目正在构建，可以使用插件 "),s("code",[t._v("uglifyjs-webpack-plugin v1")]),t._v(" 来优化构建时间。这个插件提供了多进程并行运行的能力和缓存支持，大大提升了构建效率。")]),t._v(" "),s("h3",{attrs:{id:"在压缩模块的过程中使用加载器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在压缩模块的过程中使用加载器"}},[t._v("#")]),t._v(" 在压缩模块的过程中使用加载器")]),t._v(" "),s("p",[t._v("Webpack 使用加载器将其他类型的文件转化为有效模块。然后，这些模块被应用程序接收，并添加到依赖关系图中。")]),t._v(" "),s("blockquote",[s("p",[t._v("因此，必须指定相关的文件目录，以减少不必要的模块加载。")])]),t._v(" "),s("p",[t._v("在 Webpack 配置中，你可以通过 "),s("code",[t._v("include")]),t._v(" 选项轻松指定文件目录。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n  module"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.js$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        include"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        loader"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'css-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"_5-npm-模块安装的管道缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-npm-模块安装的管道缓存"}},[t._v("#")]),t._v(" 5. NPM 模块安装的管道缓存")]),t._v(" "),s("p",[t._v("我们都知道，安装节点模块需要耗费时间。我们发现了这个问题，特别是在管道中耗费更多时间，因为它们每次运行都会安装节点模块。")]),t._v(" "),s("blockquote",[s("p",[t._v("NPM 缓存是一种简单的缓存机制，我们可以在构建管道中使用，以避免每次都运行 npm 安装。")])]),t._v(" "),s("p",[t._v("这种缓存机制将使你的构建管道与你的本地开发环境相似。你只需要安装一次节点模块，同样的模块将被用于后续的构建。")]),t._v(" "),s("p",[t._v("例如，让我们来看一个 NodeJS 项目的 Azure DevOps 管道。")]),t._v(" "),s("p",[t._v("为 NodeJs 项目缓存 NPM 模块的最推荐方式是使用 NPM 的"),s("a",{attrs:{href:"https://docs.npmjs.com/misc/config#cache",target:"_blank",rel:"noopener noreferrer"}},[t._v("共享缓存目录"),s("OutboundLink")],1),t._v("。这个目录包括所有下载模块的缓存版本。每当我们运行 "),s("code",[t._v("npm install")]),t._v(" 命令时，NPM 会首先检查这个目录，并在其中获取存储的包。")]),t._v(" "),s("p",[s("strong",[t._v("示例代码")])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("variables")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("npm_config_cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $(Pipeline.Workspace)/.npm \n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("— task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Cache@2 \n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ‘npm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" “$(Agent.OS)” "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("lock.json’ \n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restoreKeys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v(" \n      npm | “$(Agent.OS)” ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $(npm_config_cache) \n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("displayName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Cache npm\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("— script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm ci\n")])])]),s("h2",{attrs:{id:"本文总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本文总结"}},[t._v("#")]),t._v(" 本文总结")]),t._v(" "),s("p",[t._v("正如你已经了解到的，有五种技术可以加快前端应用程序的构建时间。此外，还有许多其他技术可能适合技术开发和工作流程。你应该选择适合用例的方法。")]),t._v(" "),s("p",[t._v("同时，我希望这里的讨论能帮助你理解以上策略，以加快 CI/CD 流程的前端构建时间。")]),t._v(" "),s("p",[t._v("感谢你的阅读！")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("原文地址："),s("a",{attrs:{href:"https://blog.bitsrc.io/5-strategies-to-reduce-frontend-build-time-with-ci-cd-3ce429304d1a",target:"_blank",rel:"noopener noreferrer"}},[t._v("5 Strategies to Reduce Frontend Build Time with CI/CD"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("原文作者："),s("a",{attrs:{href:"https://medium.com/@bhagya-16",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bhagya Vithana"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("译文出自："),s("a",{attrs:{href:"https://github.com/xitu/gold-miner",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘金翻译计划"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("本文永久链接："),s("a",{attrs:{href:"https://github.com/xitu/gold-miner/blob/master/article/2021/5-strategies-to-reduce-frontend-build-time-with-ci-cd.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/xitu/gold-miner/blob/master/article/2021/5-strategies-to-reduce-frontend-build-time-with-ci-cd.md"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("译者："),s("a",{attrs:{href:"https://github.com/zenblo",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zz招锦"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("校对者："),s("a",{attrs:{href:"https://github.com/KimYangOfCat",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kim Yang"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"https://github.com/Kimhooo",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kimhooo"),s("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=n.exports}}]);