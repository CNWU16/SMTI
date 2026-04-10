/**
 * SMTI 题库 — v3 精简版
 *
 * 20 题 × 15 维度（核心 SM 维度各 2 题）
 * 风格：抽象无厘头 + BDSM 暗喻 + 互联网黑话
 */

const QUESTIONS = [
  // ==================== 自我模型 ====================

  // Se1 · 支配倾向
  {
    id: 1,
    text: "你和一只猫对视了三秒，猫先移开了目光：",
    dimension: "Se1",
    options: [
      { label: "A", text: "赢了。（很认真地在心里记了一分）", score: 2 },
      { label: "B", text: "哈哈平局吧", score: 1 },
      { label: "C", text: "是我先心虚移开的，怕给猫压力", score: 0 }
    ]
  },
  {
    id: 2,
    text: "朋友发了个「听我指挥」的表情包，你秒回：",
    dimension: "Se1",
    options: [
      { label: "A", text: "「跪下」", score: 2 },
      { label: "B", text: "「看心情」", score: 1 },
      { label: "C", text: "「遵命」+ 敬礼 emoji", score: 0 }
    ]
  },

  // Se2 · 自我认知
  {
    id: 3,
    text: "你对自己的「开关在哪里」了解多少？",
    dimension: "Se2",
    options: [
      { label: "A", text: "精确到坐标，附操作指南", score: 2 },
      { label: "B", text: "大概知道几个主要的", score: 1 },
      { label: "C", text: "每次被按到才知道原来这里有", score: 0 }
    ]
  },

  // Se3 · 底线意识
  {
    id: 4,
    text: "你的底线是什么材质的？",
    dimension: "Se3",
    options: [
      { label: "A", text: "钛合金的，碰一下试试？", score: 2 },
      { label: "B", text: "橡皮筋，有弹性但别扯太狠", score: 1 },
      { label: "C", text: "棉花糖的", score: 0 }
    ]
  },
  {
    id: 5,
    text: "有人开了一个让你不太舒服的玩笑：",
    dimension: "Se3",
    options: [
      { label: "A", text: "当场微笑说「不好笑哦」", score: 2 },
      { label: "B", text: "先笑了但内心记小本本", score: 1 },
      { label: "C", text: "跟着笑了（确实不舒服但算了吧）", score: 0 }
    ]
  },

  // ==================== 情感模型 ====================

  // Em1 · 信任深度
  {
    id: 6,
    text: "有人对你说「闭上眼睛把手给我」：",
    dimension: "Em1",
    options: [
      { label: "A", text: "先查三代验DNA", score: 0 },
      { label: "B", text: "看认识多久再说", score: 1 },
      { label: "C", text: "好的（闭眼伸手）", score: 2 }
    ]
  },
  {
    id: 7,
    text: "你的WiFi密码会给来家里的人吗？",
    dimension: "Em1",
    options: [
      { label: "A", text: "我家WiFi名叫「别蹭谢谢」", score: 0 },
      { label: "B", text: "来三次以上的给", score: 1 },
      { label: "C", text: "贴冰箱上了随便连", score: 2 }
    ]
  },

  // Em2 · 情感强度
  {
    id: 8,
    text: "你在一段关系中的燃烧模式：",
    dimension: "Em2",
    options: [
      { label: "A", text: "篝火——烧到精光也不后悔", score: 2 },
      { label: "B", text: "壁炉——稳定供暖不伤人", score: 1 },
      { label: "C", text: "LED灯——节能环保不烫手", score: 0 }
    ]
  },

  // Em3 · 依赖程度
  {
    id: 9,
    text: "对方说「以后你的事我全包了」：",
    dimension: "Em3",
    options: [
      { label: "A", text: "终于被认领了！合同在哪签！", score: 2 },
      { label: "B", text: "可以，但我保留一票否决权", score: 1 },
      { label: "C", text: "有被冒犯到谢谢", score: 0 }
    ]
  },
  {
    id: 10,
    text: "你的手机壳风格：",
    dimension: "Em3",
    options: [
      { label: "A", text: "和对象/闺蜜买的情侣同款", score: 2 },
      { label: "B", text: "自己挑的但被安利过", score: 1 },
      { label: "C", text: "只看自己喜好关你什么事", score: 0 }
    ]
  },

  // ==================== 态度模型 ====================

  // At1 · 权力观
  {
    id: 11,
    text: "你转世投胎，加载界面上写着：",
    dimension: "At1",
    options: [
      { label: "A", text: "「管理员权限加载中…」", score: 2 },
      { label: "B", text: "「标准用户初始化…」", score: 1 },
      { label: "C", text: "「访客模式启动…」", score: 0 }
    ]
  },

  // At2 · 规则偏好
  {
    id: 12,
    text: "你对「惩罚」这个词的第一反应：",
    dimension: "At2",
    options: [
      { label: "A", text: "效率工具（微微一笑）", score: 2 },
      { label: "B", text: "看场景", score: 1 },
      { label: "C", text: "不喜欢，正面激励才对", score: 0 }
    ]
  },

  // At3 · 痛苦哲学
  {
    id: 13,
    text: "生活给了你一巴掌，你的内心OS：",
    dimension: "At3",
    options: [
      { label: "A", text: "谢谢再来！打完我就无敌了", score: 2 },
      { label: "B", text: "疼，但能站起来", score: 1 },
      { label: "C", text: "报警了谢谢", score: 0 }
    ]
  },
  {
    id: 14,
    text: "游戏里你残血1%被三个人追杀：",
    dimension: "At3",
    options: [
      { label: "A", text: "反杀！越残越勇是被动技能", score: 2 },
      { label: "B", text: "苟住等回血", score: 1 },
      { label: "C", text: "躺了躺了下一局见", score: 0 }
    ]
  },

  // ==================== 行动驱力 ====================

  // Ac1 · 刺激阈值
  {
    id: 15,
    text: "有人在你耳边低声说「你敢不敢……」：",
    dimension: "Ac1",
    options: [
      { label: "A", text: "你还没说完我就开始了", score: 2 },
      { label: "B", text: "先听完再决定", score: 1 },
      { label: "C", text: "不敢。再见。", score: 0 }
    ]
  },

  // Ac2 · 决策方式
  {
    id: 16,
    text: "两个人吵架了，你的第一动作：",
    dimension: "Ac2",
    options: [
      { label: "A", text: "打开备忘录列问题清单", score: 2 },
      { label: "B", text: "深呼吸三秒", score: 1 },
      { label: "C", text: "先哭完/吼完再说", score: 0 }
    ]
  },

  // Ac3 · 仪式感
  {
    id: 17,
    text: "你吃到一顿绝绝子的饭，第一反应：",
    dimension: "Ac3",
    options: [
      { label: "A", text: "先别动让我拍！角度光线滤镜一个不能少", score: 2 },
      { label: "B", text: "随手拍一张发story", score: 1 },
      { label: "C", text: "直接开吃，嘴比手机重要", score: 0 }
    ]
  },

  // ==================== 社交模型 ====================

  // So1 · 社交能量
  {
    id: 18,
    text: "群里有人@所有人问「谁来组局」：",
    dimension: "So1",
    options: [
      { label: "A", text: "第一个回「我定时间地点」", score: 2 },
      { label: "B", text: "等三个人接龙了再+1", score: 1 },
      { label: "C", text: "装死没看到", score: 0 }
    ]
  },

  // So2 · 边界强度
  {
    id: 19,
    text: "你的个人空间像：",
    dimension: "So2",
    options: [
      { label: "A", text: "VIP贵宾室——预约制，要验证码", score: 2 },
      { label: "B", text: "半开放咖啡厅——欢迎但别太久", score: 1 },
      { label: "C", text: "公共广场——随便进", score: 0 }
    ]
  },

  // So3 · 真实度
  {
    id: 20,
    text: "面对最亲密的人，你的防火墙：",
    dimension: "So3",
    options: [
      { label: "A", text: "全卸载，root权限交出", score: 2 },
      { label: "B", text: "大部分开放，保留管理员权限", score: 1 },
      { label: "C", text: "换了个更精致的皮肤", score: 0 }
    ]
  }
];
