(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{540:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_1833-雪糕的最大数量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1833-雪糕的最大数量"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://leetcode-cn.com/problems/maximum-ice-cream-bars/",target:"_blank",rel:"noopener noreferrer"}},[t._v("1833. 雪糕的最大数量"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("小目标：百篇题解之八，破百开源成库")]),t._v("。关注我（"),a("a",{attrs:{href:"https://github.com/KimYangOfCat",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"https://leetcode-cn.com/u/kimyang/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣"),a("OutboundLink")],1),t._v("），即可获取最新题解。")]),t._v(" "),a("h2",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),a("p",[t._v("夏日炎炎，小男孩 Tony 想买一些雪糕消消暑。")]),t._v(" "),a("p",[t._v("商店中新到 "),a("code",[t._v("n")]),t._v(" 支雪糕，用长度为 "),a("code",[t._v("n")]),t._v(" 的数组 "),a("code",[t._v("costs")]),t._v(" 表示雪糕的定价，其中 "),a("code",[t._v("costs[i]")]),t._v(" 表示第 "),a("code",[t._v("i")]),t._v(" 支雪糕的现金价格。Tony 一共有 "),a("code",[t._v("coins")]),t._v(" 现金可以用于消费，他想要买尽可能多的雪糕。")]),t._v(" "),a("p",[t._v("给你价格数组 "),a("code",[t._v("costs")]),t._v(" 和现金量 "),a("code",[t._v("coins")]),t._v(" ，请你计算并返回 Tony 用 "),a("code",[t._v("coins")]),t._v(" 现金能够买到的雪糕的 "),a("strong",[t._v("最大数量")]),t._v(" 。")]),t._v(" "),a("p",[t._v("**注意：**Tony 可以按任意顺序购买雪糕。")]),t._v(" "),a("p",[a("strong",[t._v("示例 1：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：costs = [1,3,2,4,1], coins = 7\n输出：4\n解释：Tony 可以买下标为 0、1、2、4 的雪糕，总价为 1 + 3 + 2 + 1 = 7\n")])])]),a("p",[a("strong",[t._v("示例 2：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：costs = [10,6,8,7,7,8], coins = 5\n输出：0\n解释：Tony 没有足够的钱买任何一支雪糕。\n")])])]),a("p",[a("strong",[t._v("示例 3：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：costs = [1,6,3,1,2,5], coins = 20\n输出：6\n解释：Tony 可以买下所有的雪糕，总价为 1 + 6 + 3 + 1 + 2 + 5 = 18 。\n")])])]),a("p",[a("strong",[t._v("提示：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("costs.length == n")])]),t._v(" "),a("li",[a("code",[t._v("1 <= n <= 105")])]),t._v(" "),a("li",[a("code",[t._v("1 <= costs[i] <= 105")])]),t._v(" "),a("li",[a("code",[t._v("1 <= coins <= 108")])])]),t._v(" "),a("p",[a("strong",[t._v("相关信息")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("难度：中等")]),t._v(" "),a("li",[t._v("标签：排序数组")])]),t._v(" "),a("h2",{attrs:{id:"题解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[t._v("#")]),t._v(" 题解")]),t._v(" "),a("p",[t._v("本题难度不大，使用贪心算法很容易解决，让我感觉有点儿不像是中等题的难度。在题目的描述中，每类雪糕的可购买数量没有明确说明是一，这点儿还蛮让人疑惑的。但是如果加上购买数量不受限制的话，这道题的难度会上升许多，你不妨思考一下这种情况。")]),t._v(" "),a("h3",{attrs:{id:"方法一-贪心算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一-贪心算法"}},[t._v("#")]),t._v(" 方法一：贪心算法")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("maxIceCream")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("costs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" coins")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    costs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" costs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("pre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("coins "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            coins "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" val\n            pre"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//pre 记录购买数量")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" pre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这是我首先想到的实现方法，但是我发现 reduce 始终会完整遍历一次数组，不方便中途跳出循环，所以使用纯 for 反而可以通过 break 语句跳出循环减少部分不需要的循环。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("maxIceCream")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("costs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" coins")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//贪心算法")]),t._v("\n    costs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" costs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("coins "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" costs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            coins "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" costs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//跳出循环")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" count\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("以上就是本题的所有题解啦，感谢你能看到这里，如果本文对你有所帮助的话，别忘了给一个 Star 嗷～\n如果你对题解中的代码有不一样的优化意见，也欢迎你在 issue 中指出～\n最重要的是不要忘了点点关注嗷（"),a("a",{attrs:{href:"https://github.com/KimYangOfCat",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"https://leetcode-cn.com/u/kimyang/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣"),a("OutboundLink")],1),t._v("），以便获取我最新的题解以及文章通知。")])])}),[],!1,null,null,null);s.default=e.exports}}]);