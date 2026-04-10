/**
 * SMTI 题库数据 — v2 提升版
 *
 * 31 题 × 15 维度（每维度 2 题，Em2 额外 +1）
 * 风格：抽象恶搞 + BDSM 暗喻 + 国内互联网梗
 */

const QUESTIONS = [
  // ==================== 自我模型 ====================

  // Se1 · 支配倾向
  {
    id: 1,
    text: "两个人组装宜家家具，你的天然站位是：",
    dimension: "Se1",
    options: [
      { label: "A", text: "手持说明书指挥全局，螺丝都得按我的顺序来", score: 2 },
      { label: "B", text: "谁擅长谁上，灵活切换", score: 1 },
      { label: "C", text: "递螺丝、扶板子，你说怎么装就怎么装", score: 0 }
    ]
  },
  {
    id: 2,
    text: "朋友发了一个「听我指挥」的表情包给你，你的膝跳反应：",
    dimension: "Se1",
    options: [
      { label: "A", text: "回一个「跪下」", score: 2 },
      { label: "B", text: "回一个「看心情服从」", score: 1 },
      { label: "C", text: "回一个「遵命」外加敬礼emoji", score: 0 }
    ]
  },

  // Se2 · 自我认知
  {
    id: 3,
    text: "如果有一本《你的使用说明书》，你觉得：",
    dimension: "Se2",
    options: [
      { label: "A", text: "我自己就能写，精确到第三章第二节", score: 2 },
      { label: "B", text: "大概能写个目录", score: 1 },
      { label: "C", text: "等别人帮我写吧，我自己都看不懂我", score: 0 }
    ]
  },
  {
    id: 4,
    text: "你对自己的「开关在哪里」了解多少？",
    dimension: "Se2",
    options: [
      { label: "A", text: "精确到坐标，附操作指南", score: 2 },
      { label: "B", text: "大概知道几个主要的", score: 1 },
      { label: "C", text: "每次被按到才知道原来这里有个开关", score: 0 }
    ]
  },

  // Se3 · 底线意识
  {
    id: 5,
    text: "你的底线是什么材质的？",
    dimension: "Se3",
    options: [
      { label: "A", text: "钛合金的，碰一下试试？", score: 2 },
      { label: "B", text: "橡皮筋的，有弹性但别扯太狠", score: 1 },
      { label: "C", text: "棉花糖的，软着呢", score: 0 }
    ]
  },
  {
    id: 6,
    text: "有人越了你的线之后，你的安全词响应速度是：",
    dimension: "Se3",
    options: [
      { label: "A", text: "0.01秒触发，自带警报音效", score: 2 },
      { label: "B", text: "缓冲3秒，确认一下再亮红灯", score: 1 },
      { label: "C", text: "等等，我有安全词吗？", score: 0 }
    ]
  },

  // ==================== 情感模型 ====================

  // Em1 · 信任深度
  {
    id: 7,
    text: "有人对你说「闭上眼睛把手给我」，你：",
    dimension: "Em1",
    options: [
      { label: "A", text: "先做个背景调查、查三代、验DNA再说", score: 0 },
      { label: "B", text: "看认识多久，通过试用期的可以", score: 1 },
      { label: "C", text: "好的（闭眼伸手）——反正你也跑不了", score: 2 }
    ]
  },
  {
    id: 8,
    text: "你把钥匙交给一个人需要：",
    dimension: "Em1",
    options: [
      { label: "A", text: "通过72道关卡+14天冷静期+三位推荐人", score: 0 },
      { label: "B", text: "三到六个月的关系考察", score: 1 },
      { label: "C", text: "感觉对了，直接配一把，不，两把", score: 2 }
    ]
  },

  // Em2 · 情感强度
  {
    id: 9,
    text: "你在一段关系中的燃烧模式是：",
    dimension: "Em2",
    options: [
      { label: "A", text: "篝火——烧到什么都不剩也不后悔", score: 2 },
      { label: "B", text: "壁炉——稳定输出暖意", score: 1 },
      { label: "C", text: "LED灯——节能、安全、不烫手", score: 0 }
    ]
  },
  {
    id: 10,
    text: "分手后，前任留下的项圈——啊不，围巾：",
    dimension: "Em2",
    options: [
      { label: "A", text: "压箱底珍藏，每一件都是勋章", score: 2 },
      { label: "B", text: "放一个角落，偶尔触景生情", score: 1 },
      { label: "C", text: "格式化、恢复出厂设置、SSD级清除", score: 0 }
    ]
  },

  // Em3 · 依赖程度
  {
    id: 11,
    text: "对方说「以后你的事我全包了」，你：",
    dimension: "Em3",
    options: [
      { label: "A", text: "天哪终于被认领了！签合同吧！", score: 2 },
      { label: "B", text: "包可以，但我保留一票否决权", score: 1 },
      { label: "C", text: "谢谢，有被冒犯到", score: 0 }
    ]
  },
  {
    id: 12,
    text: "理想中的关系物理距离：",
    dimension: "Em3",
    options: [
      { label: "A", text: "负距离，恨不得长在一起", score: 2 },
      { label: "B", text: "各有房间但有一扇随时能开的门", score: 1 },
      { label: "C", text: "不同城市也不影响的那种", score: 0 }
    ]
  },

  // ==================== 态度模型 ====================

  // At1 · 权力观
  {
    id: 13,
    text: "职场里你最羡慕的技能是：",
    dimension: "At1",
    options: [
      { label: "A", text: "开会时让全场闭嘴听我说的气场", score: 2 },
      { label: "B", text: "左右逢源、资源整合的情商", score: 1 },
      { label: "C", text: "不参与办公室政治也能活得好好的", score: 0 }
    ]
  },
  {
    id: 14,
    text: "如果关系是一盘棋，你更喜欢当：",
    dimension: "At1",
    options: [
      { label: "A", text: "执棋的手——决定每一步走向", score: 2 },
      { label: "B", text: "棋盘——承载一切，不偏不倚", score: 1 },
      { label: "C", text: "无所谓，开心就好的观棋者", score: 0 }
    ]
  },

  // At2 · 规则偏好
  {
    id: 15,
    text: "你对「惩罚」这个词的第一反应是：",
    dimension: "At2",
    options: [
      { label: "A", text: "效率工具，赏罚分明天经地义（微微一笑）", score: 2 },
      { label: "B", text: "看场景，有些场合适用", score: 1 },
      { label: "C", text: "不喜欢，正面激励才是正道", score: 0 }
    ]
  },
  {
    id: 16,
    text: "有人给你定了一套「规矩」要你遵守：",
    dimension: "At2",
    options: [
      { label: "A", text: "先审查规矩写得好不好，然后完美执行", score: 2 },
      { label: "B", text: "合理的遵守，不合理的阳奉阴违", score: 1 },
      { label: "C", text: "你算哪根葱？规矩是用来打破的", score: 0 }
    ]
  },

  // At3 · 痛苦哲学
  {
    id: 17,
    text: "健身教练说「再来十个」，你已经快升天了：",
    dimension: "At3",
    options: [
      { label: "A", text: "做完二十个——痛苦使我清醒、使我进化", score: 2 },
      { label: "B", text: "咬牙再做五个，面子要紧", score: 1 },
      { label: "C", text: "直接躺平。命没了谁来还花呗？", score: 0 }
    ]
  },
  {
    id: 18,
    text: "生活给了你一巴掌，你的OS（内心独白）是：",
    dimension: "At3",
    options: [
      { label: "A", text: "谢谢，再来一巴掌，打完我就无敌了", score: 2 },
      { label: "B", text: "疼，但我缓缓能站起来", score: 1 },
      { label: "C", text: "报警了，生活你等着", score: 0 }
    ]
  },

  // ==================== 行动驱力 ====================

  // Ac1 · 刺激阈值
  {
    id: 19,
    text: "有人在你耳边说了一句「你敢不敢……」：",
    dimension: "Ac1",
    options: [
      { label: "A", text: "你还没说完我就已经开始了", score: 2 },
      { label: "B", text: "先听完再决定", score: 1 },
      { label: "C", text: "不敢。再见。", score: 0 }
    ]
  },
  {
    id: 20,
    text: "你的快乐配方是：",
    dimension: "Ac1",
    options: [
      { label: "A", text: "肾上腺素+多巴胺的双重暴击，越刺激越快乐", score: 2 },
      { label: "B", text: "各种来源混搭", score: 1 },
      { label: "C", text: "暖被窝+存款余额+一切在掌控中", score: 0 }
    ]
  },

  // Ac2 · 决策方式
  {
    id: 21,
    text: "重要决定面前，你的脑子里运行的是：",
    dimension: "Ac2",
    options: [
      { label: "A", text: "Excel公式+SWOT分析+决策矩阵", score: 2 },
      { label: "B", text: "理性和直觉各占一半的鸡尾酒", score: 1 },
      { label: "C", text: "第六感直接出答案，解释不了但准得离谱", score: 0 }
    ]
  },
  {
    id: 22,
    text: "两个人吵架了，你的第一个动作是：",
    dimension: "Ac2",
    options: [
      { label: "A", text: "打开备忘录开始列「问题清单」", score: 2 },
      { label: "B", text: "深呼吸三秒，理性感性各参考一下", score: 1 },
      { label: "C", text: "先释放情绪——哭完/吼完再说", score: 0 }
    ]
  },

  // Ac3 · 仪式感/计划性
  {
    id: 23,
    text: "你准备一场重要约会的方式：",
    dimension: "Ac3",
    options: [
      { label: "A", text: "时间线精确到分钟，灯光音乐台词全部排练", score: 2 },
      { label: "B", text: "大方向定了，细节看现场发挥", score: 1 },
      { label: "C", text: "什么准备？见面就是最好的准备", score: 0 }
    ]
  },
  {
    id: 24,
    text: "你觉得「仪式感」在关系中：",
    dimension: "Ac3",
    options: [
      { label: "A", text: "极其重要——细节是魔鬼也是天使", score: 2 },
      { label: "B", text: "偶尔来一次挺好的", score: 1 },
      { label: "C", text: "形式主义，心意到了就行", score: 0 }
    ]
  },

  // ==================== 社交模型 ====================

  // So1 · 社交能量
  {
    id: 25,
    text: "你走进一个全是陌生人的房间，你的本能是：",
    dimension: "So1",
    options: [
      { label: "A", text: "三分钟之内成为全场中心——这是天赋", score: 2 },
      { label: "B", text: "找个角落先观察，看谁值得搭讪", score: 1 },
      { label: "C", text: "假装看手机然后找借口溜走", score: 0 }
    ]
  },
  {
    id: 26,
    text: "群里有人@所有人问「谁来组局」：",
    dimension: "So1",
    options: [
      { label: "A", text: "第一个回复「我来定时间地点」", score: 2 },
      { label: "B", text: "等三个人接龙了我再+1", score: 1 },
      { label: "C", text: "装死，假装没看到", score: 0 }
    ]
  },

  // So2 · 边界强度
  {
    id: 27,
    text: "不太想给的人想加你private微信：",
    dimension: "So2",
    options: [
      { label: "A", text: "微笑说不——拒绝是我的基本权利", score: 2 },
      { label: "B", text: "给了但分组为「受限访问」", score: 1 },
      { label: "C", text: "不好意思拒绝，先加了再说", score: 0 }
    ]
  },
  {
    id: 28,
    text: "你的个人空间像：",
    dimension: "So2",
    options: [
      { label: "A", text: "VIP贵宾室——预约制，需要验证码", score: 2 },
      { label: "B", text: "半开放式咖啡厅——欢迎来但别太久", score: 1 },
      { label: "C", text: "公共广场——随便进", score: 0 }
    ]
  },

  // So3 · 真实度
  {
    id: 29,
    text: "你的人格和你的「人设」之间的关系：",
    dimension: "So3",
    options: [
      { label: "A", text: "同一个人——我没有面具", score: 2 },
      { label: "B", text: "七分真三分演——社交需要一点滤镜", score: 1 },
      { label: "C", text: "完全不同的两个人，而且两个都很精彩", score: 0 }
    ]
  },
  {
    id: 30,
    text: "面对最亲密的人，你的防火墙状态：",
    dimension: "So3",
    options: [
      { label: "A", text: "全部卸载、root权限交出", score: 2 },
      { label: "B", text: "大部分端口开放，但保留后台管理员权限", score: 1 },
      { label: "C", text: "换个更精致的防火墙皮肤", score: 0 }
    ]
  },

  // Em2 · 情感强度（补齐第31题）
  {
    id: 31,
    text: "你的爱情浓度是：",
    dimension: "Em2",
    options: [
      { label: "A", text: "意式浓缩——一小杯但能让你三天睡不着", score: 2 },
      { label: "B", text: "拿铁——浓淡适中，日常可饮", score: 1 },
      { label: "C", text: "美式——大杯清淡，自由续杯", score: 0 }
    ]
  }
];
