/* ============================================================
   STRATEGIES · HighBlock 切入路径数据
   独立文件 · 不污染 v2-data.js（自动生成的）
   注册到 window.empireV2.strategies
   ============================================================ */
(function(){
  if (!window.empireV2) window.empireV2 = {};
  window.empireV2.strategies = [
    {
      id: 's1',
      num: '01',
      title: '永续 ↔ 币安永续对冲 / 取价',
      summary: '自营在币安 Futures 开机构户做对冲腿 · 走 Ceffu MirrorX 资产不离场 · 同步 VIP & Institutional KYB',
      difficulty: '中',
      difficultyReason: '监管沟通',
      value: '中',
      valueDetail: '合规材料 + ETF 做市经验',
      cash: '价差/套利（主）',
      cashSub: '返佣（辅，量级有限）',
      related: [
        { layer: 'binance', section: 'trading', label: '交易主业' },
        { layer: 'binance', section: 'ceffu', label: 'Ceffu 托管' }
      ],
      paths: [
        {
          label: 'A',
          desc: 'bitV 永续上线后，自营在币安 Futures 开机构户做净敞口对冲 + 取价',
          pre: '币安 Institutional KYB + Ceffu 机构户 · SFC 批准 · 内部 RMC 框架 + 对手方/敞口限额 · 对冲专用账户（自有资金）',
          diff: '中',
          diffNote: '监管沟通是核心瓶颈'
        },
        {
          label: 'B',
          desc: '申请 Altcoin LiquidityBoost：给 bitV 上的山寨币在币安同步做市，拿 -0.5~-1bp 返佣补贴做市成本',
          pre: '自身/合作做市方达成 maker 量占比 0.5% · 并入对冲账户体系',
          diff: '中'
        },
        {
          label: 'C',
          desc: 'VIP & Institutional onboarding（无成交量门槛即可启动 KYB）',
          pre: '香港法人完成币安 Entity KYB',
          diff: '易',
          diffNote: '拿 KAM、子账户、API 限额上调、OTC 报价台；合规材料齐全审核快'
        }
      ],
      regulatory: [
        '香港持牌法团在境外非持牌交易所开机构户做自营对冲，<strong>SFC 不禁止</strong>',
        '<strong>是法团自有资金的风险管理，不是替客户下单</strong>',
        '需纳入 RMC（风险管理委员会）框架、设敞口/对手方限额、披露给 SFC',
        '<strong>不能把客户资产转到币安</strong>（客户资产隔离是 VATP 硬约束），对冲腿用法团自有资金',
        '若 API 套利策略被判定为「替客户执行」会触发完全不同的合规要求——必须严格隔离自营 vs 客户流'
      ]
    },
    {
      id: 's2',
      num: '02',
      title: 'Ceffu MirrorX — 资产不离场镜像执行',
      summary: '自营对冲资产存 Ceffu · 1:1 镜像到币安账户交易 · 资产从不离开 Ceffu 多签冷库',
      difficulty: '中',
      difficultyReason: '与 Ceffu / 币安双线 onboarding',
      value: '中',
      valueDetail: '强化合规风控叙事',
      cash: '资金效率提升（间接）',
      related: [
        { layer: 'binance', section: 'ceffu', label: 'Ceffu 托管' }
      ],
      paths: [
        {
          label: 'A',
          desc: '自营对冲资产走 Ceffu + MirrorX（资产不离场对冲到币安）',
          pre: '开 Ceffu 机构户 + 币安 Institutional 户 · 并入 RMC 框架 · SFC 沟通',
          diff: '中'
        }
      ],
      regulatory: [
        'MirrorX 正是为「持牌机构想用币安流动性但不想把资产置于交易所对手方风险下」设计',
        '满足 SFC 对对手方风险的关注',
        '当前币安吸收 MirrorX 费用：<strong>2025-07-01 至 2025-12-31 零费窗口</strong>，零费促销已延至 <strong>2026-06-30</strong>；银行 triparty 费持续吸收',
        'Ceffu 有 ISO 27001/27701、SOC 1&2、Dubai VARA IPA 等正规审计与持牌',
        'FalconX Prime Connect / Orderly OmniVault / KuCoin Institutional 已采用相同栈—有实战参照'
      ]
    },
    {
      id: 's3',
      num: '03',
      title: 'HighBlock 当 Ceffu 香港持牌前端 / 分销',
      summary: '把 Ceffu 托管 + MirrorX 打包给港 PI 客户 · HighBlock 持牌包装层',
      difficulty: '中-难',
      difficultyReason: 'SFC 对分销境外托管态度未定',
      value: '高',
      valueDetail: 'Ceffu 在港无持牌实体',
      cash: '分销 / 托管费',
      related: [
        { layer: 'binance', section: 'ceffu', label: 'Ceffu 托管' }
      ],
      paths: [
        {
          label: 'A',
          desc: '与 Ceffu 商务签约，把 Ceffu 托管 + MirrorX 打包给香港 PI 客户',
          pre: '与 Ceffu 商务谈判 · 明确法律关系 · SFC 对「分销境外托管服务」态度沟通确认',
          diff: '中-难'
        }
      ],
      regulatory: [
        'Ceffu 在港无持牌实体 · HighBlock 有 1 号牌 + 可能的托管资格 · 天然「持牌包装层」位置',
        '需主动与 SFC 沟通「分销境外持牌托管服务」的合规边界',
        'Ceffu 自身持迪拜 VARA VASP IPA · 阿布扎比 ADGM 系亦有进展 · 反向背书 HighBlock 客户'
      ]
    },
    {
      id: 's4',
      num: '04',
      title: 'OTC — 币安 OTC / BES 接为后备流动性',
      summary: '当客户 / taker · 多家聚合（币安 + 其它 desk）· 大单可路由',
      difficulty: '易-中',
      difficultyReason: '标准 OTC 业务搭建',
      value: '中',
      valueDetail: 'OTC 业务标准模块',
      cash: '价差（主）',
      related: [
        { layer: 'binance', section: 'inst', label: '机构与 VIP' }
      ],
      paths: [
        {
          label: 'A',
          desc: 'HighBlock OTC 台把币安 OTC / BES 接为后备流动性来源（聚合多家：币安、其它 desk）',
          pre: '币安 Institutional / OTC KYB · 自营对冲账户 · 客户大单路由逻辑',
          diff: '易-中'
        },
        {
          label: 'B',
          desc: 'HighBlock 成为 BES 外部 LP（报价方）',
          pre: '强自营做市能力或合作做市方 · 与币安谈 LP 协议 · 资本金',
          diff: '难',
          diffNote: '取决于做市能力'
        }
      ],
      regulatory: [
        '币安 OTC 最小 $200K / 笔，无手续费（价差内含）',
        '2025-12 上线<strong>私密 IOI</strong>（加密圈首个，Spot IOI + Loan IOI），大额意向不公开挂簿',
        '与 Ceffu MirrorX 打通，机构可用托管资产做 OTC 结算',
        'BES 2025-08-28 升级聚合外部 LP 网络的现货 + 期权报价，可选 OTC risk-pricing 或 bespoke execution'
      ]
    },
    {
      id: 's5',
      num: '05',
      title: 'Altcoin LiquidityBoost 申请',
      summary: '给 bitV 上的山寨币在币安同步做市 · 拿 -0.5 ~ -1bp 返佣',
      difficulty: '中',
      difficultyReason: 'maker 量占比门槛',
      value: '中',
      valueDetail: '返佣覆盖做市成本',
      cash: '返佣补贴做市成本',
      related: [
        { layer: 'binance', section: 'trading', label: '交易主业' },
        { layer: 'binance', section: 'inst', label: '机构与 VIP' }
      ],
      paths: [
        {
          label: 'A',
          desc: '达 Tier 1：单币种 maker 量占该对全市场 maker 量 ≥ 0.5% → -0.5bp 返佣',
          pre: '30 日成交量 ≥ $20M USDT 等值 · 与对冲账户体系并入',
          diff: '中'
        },
        {
          label: 'B',
          desc: '达 Tier 2：≥ 1% → -1bp 返佣',
          pre: '同上但 maker 量占比更高',
          diff: '中-难'
        }
      ],
      regulatory: [
        '通过 mmprogram@binance.com 申请',
        '2025-06 上线 · 初始覆盖 18 个山寨币 · 滚动扩列',
        '可凭其它所同等量证明申请',
        '与 Spot LP / Futures MM 计划并行 · 不冲突'
      ]
    }
  ];
})();
