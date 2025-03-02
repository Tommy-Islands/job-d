import { Job } from '../types';

export const jobs: Job[] = [
  // タンク
  {
    name: 'ナイト',
    nameEn: 'PALADIN',
    url: 'https://jp.finalfantasyxiv.com/jobguide/paladin/',
    iconUrl: 'https://lds-img.finalfantasyxiv.com/h/3/Jk768MD2Ejd7XopHym7bnXJTWg.png',
    iconName: '/src/assets/job-icon/Paladin.png',
    characteristics: {
      leadership: 9,    // チームを守るリーダー的存在
      teamwork: 8,      // パーティ防衛が重要
      independence: 4,  // パーティプレイ重視
      support: 7,       // 防御バフ、回復あり
      combat: 8,        // 近接戦闘メイン
      magic: 5         // 神聖魔法も使用
    },
    description: '\nナイトは、パーティの守りの要。堅牢な防御力で仲間を守るタンクです。リーダーシップとチームワークを重視するあなたに最適でしょう。'
  },
  {
    name: '戦士',
    nameEn: 'WARRIOR',
    url: 'https://jp.finalfantasyxiv.com/jobguide/warrior/',
    iconUrl: 'https://lds-img.finalfantasyxiv.com/h/m/o2eIFSXFUps-cL0M0QHXeruKDU.png',
    iconName: '/src/assets/job-icon/Warrior.png',
    characteristics: {
      leadership: 7,
      teamwork: 7,
      independence: 6,
      support: 5,
      combat: 9,
      magic: 3
    },
    description: '\n戦士は、高い攻撃力と自己回復能力で最前線を支えるタンクです。勇敢で、自分の意見をはっきり伝えられるあなたに合うでしょう。'
  },
  {
    name: '暗黒騎士',
    nameEn: 'DARK KNIGHT',
    url: 'https://jp.finalfantasyxiv.com/jobguide/darkknight/',
    iconUrl: 'https://lds-img.finalfantasyxiv.com/h/R/cZwPezbiJD6q2D8KfgKrs2DDno.png',
    iconName: '/src/assets/job-icon/DarkKnight.png',
    characteristics: {
      leadership: 6,
      teamwork: 7,
      independence: 7,
      support: 6,
      combat: 9,
      magic: 6
    },
    description: '\n暗黒騎士は、闇の力で敵を打ち砕くタンク。強力な範囲攻撃と自己強化能力を持ちます。内に秘めた情熱で困難に立ち向かうあなたに最適でしょう。'
  },
  {
    name: 'ガンブレイカー',
    nameEn: 'GUNBREAKER',
    url: 'https://jp.finalfantasyxiv.com/jobguide/gunbreaker/',
    iconUrl: 'https://lds-img.finalfantasyxiv.com/h/g/N7ppA6IXf15TGnAxo9aLnhHdlg.png',
    iconName: '/src/assets/job-icon/Gunbreaker.png',
    characteristics: {
      leadership: 6,
      teamwork: 7,
      independence: 7,
      support: 5,
      combat: 8,
      magic: 4
    },
    description: '\nガンブレイカーは、銃剣を操る攻撃的なタンク。 特にソイルを消費して繰り出す強力なコンボが特徴です。新しい挑戦が好きで、マイペースなあなたにおすすめです。'
  },

  // ヒーラー
  {
    name: '白魔道士',
    nameEn: 'WHITE MAGE',
    url: 'https://jp.finalfantasyxiv.com/jobguide/whitemage/',
    iconUrl: 'https://lds-img.finalfantasyxiv.com/h/D/g126NNaDPy03HLOIEsJy5MRBXY.png',
    iconName: '/src/assets/job-icon/WhiteMage.png',
    characteristics: {
      leadership: 6,
      teamwork: 9,
      independence: 4,
      support: 10,
      combat: 3,
      magic: 9
    },
    description: '\n白魔道士は、高い回復魔法能力で味方を安全に導くジョブで、特に減ったHPを戻すことに長けたピュアヒーラー。仲間との協調を大切にする優しいあなたに、きっと合うでしょう。'
  },
  {
    name: '学者',
    nameEn: 'SCHOLAR',
    url: 'https://jp.finalfantasyxiv.com/jobguide/scholar/',
    iconUrl: 'https://lds-img.finalfantasyxiv.com/h/V/bQ475vaKvyHIPXVvFE5Z0VQJUc.png',
    iconName: '/src/assets/job-icon/Scholar.png',
    characteristics: {
      leadership: 5,
      teamwork: 9,
      independence: 5,
      support: 9,
      combat: 3,
      magic: 8
    },
    description: '\n学者は妖精を使役し、敵の攻撃を軽減するスキルを豊富に持つバリアヒーラー。戦闘の流れを予測する動きが求められるので冷静に状況を分析し、的確な判断を下せるあなたに向いています。'
  },
  {
    name: '占星術師',
    nameEn: 'ASTROLOGIAN',
    url: 'https://jp.finalfantasyxiv.com/jobguide/astrologian/',
    iconUrl: 'https://lds-img.finalfantasyxiv.com/h/j/m-sk7cvaIWeF-DwE6UH7Y9jCJQ.png',
    iconName: '/src/assets/job-icon/Astrologian.png',
    characteristics: {
      leadership: 5,
      teamwork: 10,
      independence: 3,
      support: 10,
      combat: 2,
      magic: 9
    },
    description: '\n占星術師は、星の力とカードで味方を強化するヒーラーで戦闘中にカードを配る臨機応変な操作が求められます。創造的で、柔軟な発想で変化を楽しめるあなたにおすすめです。'
  },
  {
    name: '賢者',
    nameEn: 'SAGE',
    url: 'https://jp.finalfantasyxiv.com/jobguide/sage/',
    iconUrl: 'https://lds-img.finalfantasyxiv.com/h/p/9JunzjM3EbubxCzomD_27WPNeY.png',
    iconName: '/src/assets/job-icon/Sage.png',
    characteristics: {
      leadership: 5,
      teamwork: 8,
      independence: 5,
      support: 9,
      combat: 4,
      magic: 9
    },
    description: '\n賢者は、ほぼ詠唱なしでスキルを発動できるテクニカルなヒーラーです。素早く状況に対応しながら、的確な判断力と戦略的思考で仲間を守り、戦況を有利に導くことができます。知的好奇心旺盛で、論理的に問題を解決するのが得意なあなたに最適でしょう。'
  },

  // 近接DPS
  {
    name: 'モンク',
    nameEn: 'MONK',
    url: 'https://jp.finalfantasyxiv.com/jobguide/monk/',
    iconUrl: 'https://lds-img.finalfantasyxiv.com/h/r/cKkb0EEXdAE5yLrg4ll7kGrLys.png',
    iconName: '/src/assets/job-icon/Monk.png',
    characteristics: {
      leadership: 4,
      teamwork: 6,
      independence: 8,
      support: 3,
      combat: 10,
      magic: 2
    },
    description: '\nモンクは、体術を極めた近接DPS。最前線で華麗な連撃を繰り広げ、圧倒的な瞬発力で戦場を駆け抜ける格闘家です。アクティブで体を動かすことが好きなあなたにぴったりのジョブでしょう。'
  },
  {
    name: '竜騎士',
    nameEn: 'DRAGOON',
    url: 'https://jp.finalfantasyxiv.com/jobguide/dragoon/',
    iconUrl: 'https://lds-img.finalfantasyxiv.com/h/J/BeaZcTXteNvSsWalB0nFRs9RY0.png',
    iconName: '/src/assets/job-icon/Dragoon.png',
    characteristics: {
      leadership: 5,
      teamwork: 7,
      independence: 7,
      support: 4,
      combat: 9,
      magic: 3
    },
    description: '\n竜騎士は、竜の力を宿した槍術を操る近接DPS。豪快なジャンプ攻撃で戦場を駆け巡り、高所からの一撃で敵を圧倒します。勇敢で、冒険心あふれるあなたにぴったりのジョブです。'
  },
  {
    name: '忍者',
    nameEn: 'NINJA',
    url: 'https://jp.finalfantasyxiv.com/jobguide/ninja/',
    iconUrl: 'https://lds-img.finalfantasyxiv.com/h/x/7vmFPYZK7BP-GjXh54byBtPMfk.png',
    iconName: '/src/assets/job-icon/Ninja.png',
    characteristics: {
      leadership: 4,
      teamwork: 7,
      independence: 8,
      support: 5,
      combat: 8,
      magic: 6
    },
    description: '\n忍者はユニークな忍術で敵を翻弄する近接DPSです。隠密性を活かし、変幻自在な攻撃を繰り出します。新しい趣味が好きで、ユーモアセンスのあるあなたにぴったりです。'
  },
  {
    name: '侍',
    nameEn: 'SAMURAI',
    url: 'https://jp.finalfantasyxiv.com/jobguide/samurai/',
    iconUrl: 'https://lds-img.finalfantasyxiv.com/h/R/bayc3ntAXDZXawPJtUi4h1K6qk.png',
    iconName: '/src/assets/job-icon/Samurai.png',
    characteristics: {
      leadership: 3,
      teamwork: 5,
      independence: 9,
      support: 2,
      combat: 10,
      magic: 3
    },
    description: '\n侍は、刀を振るい、敵を一閃する近接DPSです。武士道を突き進むダメージディーラー役です。ストイックに、自分のペースで物事を進めたいあなたに向いています。'
  },
  {
    name: 'リーパー',
    nameEn: 'REAPER',
    url: 'https://jp.finalfantasyxiv.com/jobguide/reaper/',
    iconUrl: 'https://lds-img.finalfantasyxiv.com/h/J/es2iX_LznvaM9ZWr45Z-3UFEhw.png',
    iconName: '/src/assets/job-icon/Reaper.png',
    characteristics: {
      leadership: 4,
      teamwork: 6,
      independence: 8,
      support: 3,
      combat: 9,
      magic: 5
    },
    description: '\nリーパーは、大鎌を振るい、虚無の力で敵をなぎ倒すダークヒーローです。妖異「アヴァター」と契約を結び、その力を借りて戦うことでソウルゲージを溜めて強力な攻撃を繰り出します。ダークでクールな世界観を好む一匹狼タイプのあなたにぴったりのジョブです。'
  },

  // 遠隔物理DPS
  {
    name: '吟遊詩人',
    nameEn: 'BARD',
    url: 'https://jp.finalfantasyxiv.com/jobguide/bard/',
    iconUrl: 'https://lds-img.finalfantasyxiv.com/h/E/BLaFNum5eZTA4O_SkJbw9FTVxw.png',
    iconName: '/src/assets/job-icon/Bard.png',
    characteristics: {
      leadership: 6,
      teamwork: 8,
      independence: 5,
      support: 8,
      combat: 6,
      magic: 4
    },
    description: '\n吟遊詩人は、弓と歌声で味方を支援する遠隔物理DPSです。詩と音楽を愛し、美しさを戦場にもたらすサポートアタッカーです。音楽や芸術を愛し、人と話すことが好きなあなたにぴったりのジョブです'
  },
  {
    name: '機工士',
    nameEn: 'MACHINIST',
    url: 'https://jp.finalfantasyxiv.com/jobguide/machinist/',
    iconUrl: 'https://lds-img.finalfantasyxiv.com/h/2/sbSE5KxLwc6oFnWPit-uD0YTv8.png',
    iconName: '/src/assets/job-icon/Machinist.png',
    characteristics: {
      leadership: 3,
      teamwork: 5,
      independence: 9,
      support: 3,
      combat: 7,
      magic: 4
    },
    description: '\n機工士は、機械兵器を駆使する遠隔物理DPSです。精密な機械と強力な銃火器を活用して、戦場のどこからでも敵を圧倒します。機械いじりや発明が好きで、自由な発想を活かしたいあなたにぴったりのジョブです。'
  },
  {
    name: '踊り子',
    nameEn: 'DANCER',
    url: 'https://jp.finalfantasyxiv.com/jobguide/dancer/',
    iconUrl: 'https://lds-img.finalfantasyxiv.com/h/H/UBUIj9lw4pB4Crc52xRVuS0r8w.png',
    iconName: '/src/assets/job-icon/Dancer.png',
    characteristics: {
      leadership: 5,
      teamwork: 9,
      independence: 4,
      support: 8,
      combat: 6,
      magic: 5
    },
    description: '\n踊り子は、舞踏と戦舞で戦士たちを魅了する遠隔物理DPSです。彼らは軽やかなステップと華麗なダンスを駆使して、味方に強力なバフを与えながら、敵に致命的な攻撃を仕掛けます。芸術的で、ユーモアを交えた会話が得意なあなたにぴったりのジョブです。'
  },

  // 魔法DPS
  {
    name: '黒魔道士',
    nameEn: 'BLACK MAGE',
    url: 'https://jp.finalfantasyxiv.com/jobguide/blackmage/',
    iconUrl: 'https://lds-img.finalfantasyxiv.com/h/0/nEvovFrqSbEnN1h-XMgQRQbEWc.png',
    iconName: '/src/assets/job-icon/BlackMage.png',
    characteristics: {
      leadership: 2,
      teamwork: 4,
      independence: 9,
      support: 2,
      combat: 3,
      magic: 10
    },
    description: '\n黒魔道士は、炎、氷、雷を操る魔法使いです。圧倒的な破壊力を持つ魔法攻撃で敵を一掃します。状況に応じた魔法を使い分けることでその力を最大限に発揮し、巧みなMPの使い方が求められます。孤独を愛し、静かに集中できる環境を好むあなたにぴったりのジョブです。'
  },
  {
    name: '召喚士',
    nameEn: 'SUMMONER',
    url: 'https://jp.finalfantasyxiv.com/jobguide/summoner/',
    iconUrl: 'https://lds-img.finalfantasyxiv.com/h/g/d9j5kML19_A7OiovShNCCfQjAo.png',
    iconName: '/src/assets/job-icon/Summoner.png',
    characteristics: {
      leadership: 4,
      teamwork: 6,
      independence: 7,
      support: 4,
      combat: 4,
      magic: 9
    },
    description: '\n召喚士は、召喚獣と共に戦う魔法DPSです。エーテルの力を駆使して強力な召喚獣を呼び出し、戦場で共闘します。また、自然の力を操り、戦況に応じて多様な攻撃や支援を行います。研究に熱心で、魔法や召喚術に興味があるあなたにぴったりのジョブです。'
  },
  {
    name: '赤魔道士',
    nameEn: 'RED MAGE',
    url: 'https://jp.finalfantasyxiv.com/jobguide/redmage/',
    iconUrl: 'https://lds-img.finalfantasyxiv.com/h/5/7H3ISOMOTgQtfQh_5-vDvlMVFA.png',
    iconName: '/src/assets/job-icon/RedMage.png',
    characteristics: {
      leadership: 5,
      teamwork: 7,
      independence: 6,
      support: 6,
      combat: 6,
      magic: 8
    },
    description: '\n赤魔道士は、魔法剣と魔法を組み合わせた多才なアタッカーです。彼らは白魔法と黒魔法を巧みに操り、近接戦闘と遠距離攻撃をバランスよく使い分けます。その柔軟な戦闘スタイルは、バランス感覚に優れたあなたにぴったりです。'
  },

  // 近接DPS（続き）
  {
    name: 'ヴァイパー',
    nameEn: 'VIPER',
    url: 'https://jp.finalfantasyxiv.com/jobguide/viper/',
    iconUrl: 'https://lds-img.finalfantasyxiv.com/h/P/Wl2XBTi_lx53ZsC7Q7gV5XzPxI.png',
    iconName: '/src/assets/job-icon/Viper.png',
    characteristics: {
      leadership: 4,
      teamwork: 6,
      independence: 8,
      support: 4,
      combat: 9,
      magic: 5
    },
    description: '\nヴァイパーは、双剣を振るうスピードアタッカーです。電光石火の速さで敵を斬り刻み、戦場を駆け抜けます。双剣を組み合わせて「長剣」として使うことで、多彩な攻撃を繰り出します。スピーディーでダイナミックな戦闘スタイルを好むあなたにぴったりです。'
  },

  // 魔法DPS（続き）
  {
    name: 'ピクトマンサー',
    nameEn: 'PICTOMANCER',
    url: 'https://jp.finalfantasyxiv.com/jobguide/pictomancer/',
    iconUrl: 'https://lds-img.finalfantasyxiv.com/h/r/euEU_3msfuf5vM02UUSYf-hqi4.png',
    iconName: '/src/assets/job-icon/Pictomancer.png',
    characteristics: {
      leadership: 3,
      teamwork: 6,
      independence: 7,
      support: 5,
      combat: 3,
      magic: 9
    },
    description: '\nピクトマンサーは、絵筆を振るい、現実を描き換えるアーティストです。彼らは魔法の絵具とキャンバスを駆使して、戦場に新たな現実を創り出します。描いたものが実体化するその力は、攻撃にも防御にも応用可能です。敵を混乱させたり、仲間を強化することで戦局を有利に導きます。想像力とユニークな発想を活かしたいあなたにぴったりのジョブです。'
  }
];