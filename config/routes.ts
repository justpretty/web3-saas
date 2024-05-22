// /bsin-ui-digital-assets-management
const routes = [
  {
    // path不允许为空
    path: '/*',
    // 严格路由匹配模式
    exact: true,
    component: '../layouts/index',
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        component: '@/pages/Home/index',
      },
      // 商户
      {
        path: '/merchant',
        redirect: '/merchant/merchant-list',
      },
      // 商户列表
      {
        path: '/merchant/merchant-list',
        component: '@/pages/Merchant/index',
      },
      // 店铺列表
      {
        path: '/merchant/store-list',
        component: '@/pages/Merchant/StoreList/index',
      },
      // 店铺设置
      {
        path: '/merchant/store-setting',
        component: '@/pages/Merchant/StoreSetting/index',
      },
      // 店铺账户
      {
        path: '/merchant/store-account',
        component: '@/pages/Merchant/StoreAccount/index',
      },
      // 商品
      {
        path: '/goods',
        redirect: '/goods/goods-list',
      },
      // 商品
      {
        path: '/goods/goods-list',
        component: '@/pages/Goods/index',
      },
      // 商品分类 
      {
        path: '/goods/goods-category',
        component: '@/pages/Goods/GoodsCategory/index',
      },
      // 商品评论
      {
        path: '/goods/goods-comment',
        component: '@/pages/Goods/GoodsComment/index',
      },
      // 订单
      {
        path: '/order',
        component: '@/pages/Order/index',
      },
      // 社区
      {
        path: '/community',
        redirect: '/community/article-list',
      },
      // 文章列表
      {
        path: '/community/article-list',
        component: '@/pages/Community/ArticleList/index',
      },
      // 文章分类
      {
        path: '/community/article-category',
        component: '@/pages/Community/ArticleCategory/index',
      },
      // 提案列表
      {
        path: '/community/proposal-list',
        component: '@/pages/Community/ProposalList/index',
      },
      // 预测列表
      {
        path: '/community/prediction-list',
        component: '@/pages/Community/PredictionList/index',
      },
      // 预测列表
      {
        path: '/community/committee_member-list',
        component: '@/pages/Community/CommitteeMemberList/index',
      },
      // 社区设置
      {
        path: '/community/community-setting',
        component: '@/pages/Community/CommunitySetting/index',
      },
      // 任务
      {
        path: '/community/task-list',
        component: '@/pages/Community/TaskList/index',
      },
      // 客户
      {
        path: '/customer',
        redirect: '/customer/customer-list',
      },
      // 客户列表
      {
        path: '/customer/customer-list',
        component: '@/pages/Customer/index',
      },
      // 会员列表
      {
        path: '/customer/member-list',
        component: '@/pages/Customer/MemberList/index',
      },
      // 会员卡
      {
        path: '/customer/pass-card',
        component: '@/pages/Customer/PassCard/index',
      },
      // 会员等级
      {
        path: '/customer/member-grade',
        component: '@/pages/Customer/MemberGrade/index',
      },
      // 账户
      {
        path: '/customer/account-list',
        component: '@/pages/Customer/AccountList/index',
      },
      // 账户流水
      {
        path: '/customer/account-journal',
        component: '@/pages/Customer/AccountJournal/index',
      },
      // 数据
      {
        path: '/data',
        redirect: '/data/member-analyse',
      },
      // 会员分析
      {
        path: '/data/member-analyse',
        component: '@/pages/Data/MemberAnalyse/index',
      },
      // 商品分析
      {
        path: '/data/goods-analyse',
        component: '@/pages/Data/GoodsAnalyse/index',
      },
      // 资产
      {
        path: '/assets',
        redirect: '/assets/assets-collection',
      },
      // 资产集合
      {
        path: '/assets/assets-collection',
        component: '@/pages/Assets/AssetsCollection/index',
      },
      // 资产列表
      {
        path: '/assets/assets-list',
        component: '@/pages/Assets/AssetsList/index',
      },
      // 资产元数据
      {
        path: '/assets/assets-metadata-list',
        component: '@/pages/Assets/MetadataList/index',
      },
      // 资产元数据模板
      {
        path: '/assets/metadata-template',
        component: '@/pages/Assets/MetadataTemplate/index',
      },
      // 资产铸造流水
      {
        path: '/assets/mint-journal',
        component: '@/pages/Assets/MintJournal/index',
      },
      // 资产转账流水
      {
        path: '/assets/transfer-journal',
        component: '@/pages/Assets/TransferJournal/index',
      },
      // 合约协议
      {
        path: '/assets/contract-protocol',
        component: '@/pages/Assets/ContractProtocol/index',
      },
      // 财务
      {
        path: '/finance',
        component: '@/pages/Finance/index',
      },
      // 营销
      {
        path: '/marketing',
        redirect: '/marketing/activity-list',
      },
      // 分销管理
      {
        path: '/marketing/distribution',
        component: '@/pages/Marketing/Distribution/index',
      },
      // 权益卡
      {
        path: '/marketing/equity-card',
        component: '@/pages/Marketing/EquityCard/index',
      },
      // 活动列表
      {
        path: '/marketing/activity-list',
        component: '@/pages/Marketing/ActivityList/index',
      },
      // 券列表
      {
        path: '/marketing/coupon-list',
        component: '@/pages/Marketing/CouponList/index',
      },
      // 收银
      {
        path: '/cashier',
        component: '@/pages/Cashier/index',
      },
      // 广告
      {
        path: '/ads',
        component: '@/pages/Ads/index',
      },
    ],
  },
];
export default routes;
