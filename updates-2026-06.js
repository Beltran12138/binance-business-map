/* ============================================================
   UPDATES 2026-06 · 币安本周大动作增量补丁
   独立文件 · 不改自动生成的 v2-data.js
   注入：
     1) trading 板块新增「美股经纪 + bStocks」业务节点（6/1 真股票经纪，
        区别于已有 tokenized-stocks 第三方代币化线）
     2) OTC 门户追加 2026-06-04 平台升级 timeline
   加载顺序：必须在 v2-data.js 之后
   ============================================================ */
(function () {
  var E = window.empireV2;
  if (!E || !E.layers || !E.layers.binance) return;
  var sections = E.layers.binance.sections || [];

  function section(id) {
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].id === id) return sections[i];
    }
    return null;
  }
  function indexOfItem(sec, id) {
    if (!sec || !sec.items) return -1;
    for (var i = 0; i < sec.items.length; i++) {
      if (sec.items[i].id === id) return i;
    }
    return -1;
  }

  var trading = section('trading');

  /* ---- 1) 新增业务节点：美股经纪 + bStocks ---- */
  if (trading && trading.items && indexOfItem(trading, 'stocks-brokerage-2026-06') === -1) {
    var node = {
      id: 'stocks-brokerage-2026-06',
      title: '美股经纪 + bStocks 2026-06',
      tagline: '7,000+ 美股/ETF 真股票经纪 · Nest+Alpaca · 预告 bStocks 自营代币化',
      status: 'active',
      metrics: [
        { num: '7,000+', label: '美股/ETF', accent: true },
        { num: '$5', label: '起投门槛' },
        { num: '0.05%', label: '费率战(≥$350)' }
      ],
      definition: '2026-06-01 上线真实股票经纪（非链上代币、非合约，真实上市公司股票）。Nest Trading Limited（ADGM 阿布扎比持牌·币安自有实体）作介绍经纪商转介订单，Alpaca Securities LLC（美 FINRA/SIPC 持牌）负责执行、清算、结算、托管。稳定币入金：USDC（主）/ USDT / USD1 / BNB / $U。',
      current: {
        summary: '币安「多资产金融超级应用（multi-asset super app）」核心节点。零佣金（平台手续费内含）、周一至五 24 小时交易、100% 自动股息记账、支持证券借贷赚息。预告 bStocks——把持仓股票转为 BNB Chain 链上代币化证券，系币安自营代币化（区别于本层 tokenized-stocks 节点的 Ondo/xStocks 第三方线）。',
        timeline: [
          { date: '2026-06-04', event: 'OTC 执行服务平台同步升级：现货 RFQ + 定制化执行统一界面，专属 OTC 交易员群组、实时成交可视。' },
          { date: '2026-06-03', event: '费率战开打——一个月内 ≥$350 美股/ETF 单费率 0.1%→0.05%，买入成本逼近 IBKR、显著低于老虎/富途。' },
          { date: '2026-06-01', event: '上线 7,000+ 美股/ETF，$5 起投，稳定币入金；同步预告 bStocks 代币化证券（数周内落 BNB Chain）。' }
        ],
        risk: '美国用户不可用 · 架构走 ADGM(Nest)+美国(Alpaca)持牌、无香港 1 号牌 · 与第三方代币化线(tokenized-stocks)并存但发行来源不同'
      },
      sources: [
        { label: 'Fortune 独家·super app 上美股', url: 'https://fortune.com/2026/06/01/binance-adds-u-s-stocks-in-super-app-push-plans-to-launch-tokenized-shares/', type: 'news' },
        { label: 'Binance 官方 PRNewswire·bStocks 预告', url: 'https://www.prnewswire.com/news-releases/binance-launches-us-stocks-trading-and-previews-bstocks-tokenized-securities-302787226.html', type: 'official' },
        { label: 'Decrypt·7000 美股 + bStocks', url: 'https://decrypt.co/369603/binance-opens-access-to-7000-us-stocks-prepares-tokenized-bstocks-rollout', type: 'news' },
        { label: 'SCMP·CSRC 清退老虎/富途/长桥', url: 'https://www.scmp.com/business/china-business/article/3354543/china-regulator-punishes-brokerages-offering-illegal-access-overseas-stocks', type: 'news' }
      ],
      meta: { asOf: '2026-06-05', confidence: 'high' }
    };
    var anchor = indexOfItem(trading, 'tokenized-stocks');
    if (anchor === -1) trading.items.push(node);
    else trading.items.splice(anchor + 1, 0, node);
    if (E.meta && typeof E.meta.totalItems === 'number') E.meta.totalItems += 1;
  }

  /* ---- 2) OTC 门户追加 6/4 升级 timeline ---- */
  if (trading) {
    var otcIdx = indexOfItem(trading, 'block-trade-大宗-otc-门户');
    if (otcIdx !== -1) {
      var otc = trading.items[otcIdx];
      if (otc.current && Array.isArray(otc.current.timeline)) {
        var has = otc.current.timeline.some(function (t) { return t.date === '2026-06-04'; });
        if (!has) {
          otc.current.timeline.unshift({
            date: '2026-06-04',
            event: 'OTC 执行服务升级：现货 RFQ（询价-确认-成交）与定制化执行整合至同一标签界面，每笔订单配专属 OTC 交易员群组，实时成交与均价可视。'
          });
        }
      }
    }
  }
})();
