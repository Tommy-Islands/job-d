import { Question } from '../types';

export const questions: Question[] = [
  // 現実世界の生活傾向
  {
    id: 1,
    category: 'reality',
    text: '休日の過ごし方',
    options: {
      a: { label: '家で読書や映画鑑賞', jobs: ['学者', '黒魔道士'] },
      b: { label: '友達とアウトドア活動', jobs: ['戦士', '竜騎士'] },
      c: { label: '新しい趣味に挑戦', jobs: ['忍者', '踊り子'] },
      d: { label: 'ゲームやネットサーフィン', jobs: ['機工士', '召喚士'] }
    }
  },
  {
    id: 2,
    category: 'reality',
    text: '仕事や学校での役割',
    options: {
      a: { label: 'リーダーとしてチームを考える', jobs: ['ナイト', 'ガンブレイカー'] },
      b: { label: '仲間と協力してプロジェクトを進める', jobs: ['白魔道士', '占星術師'] },
      c: { label: '自分のペースで独自に作業する', jobs: ['黒魔道士', '赤魔道士'] },
      d: { label: 'サポート役として他人を助ける', jobs: ['学者', '賢者'] }
    }
  },
  {
    id: 3,
    category: 'reality',
    text: 'ストレスを感じたときの対処法',
    options: {
      a: { label: 'スポーツや運動をする', jobs: ['戦士', 'モンク'] },
      b: { label: '友達や家族と話す', jobs: ['白魔道士', '吟遊詩人'] },
      c: { label: '趣味に没頭する', jobs: ['黒魔道士', '召喚士'] },
      d: { label: 'リラックスするために休む', jobs: ['占星術師', '賢者'] }
    }
  },
  {
    id: 4,
    category: 'reality',
    text: '普段のコミュニケーションスタイル',
    options: {
      a: { label: '自分の意見をはっきり伝える', jobs: ['ナイト', 'ガンブレイカー'] },
      b: { label: '相談しながら決める', jobs: ['白魔道士', '占星術師'] },
      c: { label: '聞く役割に徹することが多い', jobs: ['学者', '賢者'] },
      d: { label: 'ユーモアを交えて話す', jobs: ['吟遊詩人', '踊り子'] }
    }
  },
  {
    id: 5,
    category: 'reality',
    text: '理想の職場環境',
    options: {
      a: { label: 'チームワークが重視される環境', jobs: ['ナイト', '戦士'] },
      b: { label: '自由にアイデアを出せる環境', jobs: ['黒魔道士', '機工士'] },
      c: { label: '静かで集中できる環境', jobs: ['学者', '召喚士'] },
      d: { label: 'サポート体制が整っている環境', jobs: ['白魔道士', '賢者'] }
    }
  },

  // ファンタジー世界の生活傾向
  {
    id: 6,
    category: 'fantasy',
    text: '異世界の職業を選ぶなら？',
    options: {
      a: { label: '王国の騎士団で戦いたい', jobs: ['ナイト', 'ガンブレイカー'] },
      b: { label: '一匹狼の冒険者になりたい', jobs: ['黒魔道士', '忍者'] },
      c: { label: '仲間と協力して戦いたい', jobs: ['白魔道士', '吟遊詩人'] },
      d: { label: '研究や発明で活躍したい', jobs: ['機工士', '学者'] }
    }
  },
  {
    id: 7,
    category: 'fantasy',
    text: 'ファンタジーの戦闘スタイル',
    options: {
      a: { label: '剣や槍で正面から戦う', jobs: ['戦士', '竜騎士'] },
      b: { label: '遠距離から魔法で攻撃', jobs: ['黒魔道士', '召喚士'] },
      c: { label: '素早い動きで敵を翻弄する', jobs: ['忍者', '踊り子'] },
      d: { label: '味方を回復・支援する', jobs: ['白魔道士', '占星術師'] }
    }
  },
  {
    id: 8,
    category: 'fantasy',
    text: '魔法を使えるなら？',
    options: {
      a: { label: '攻撃魔法を極める', jobs: ['黒魔道士', '召喚士'] },
      b: { label: '回復や支援魔法を学ぶ', jobs: ['白魔道士', '賢者'] },
      c: { label: '状態異常や幻術を使う', jobs: ['赤魔道士', 'ピクトマンサー'] },
      d: { label: '魔法より武器を鍛えたい', jobs: ['ナイト', 'モンク'] }
    }
  },
  {
    id: 9,
    category: 'fantasy',
    text: '異世界での住処',
    options: {
      a: { label: '騎士団の城や砦', jobs: ['ナイト', '戦士'] },
      b: { label: '秘密の魔法研究所', jobs: ['黒魔道士', '召喚士'] },
      c: { label: 'にぎやかな街中の酒場', jobs: ['吟遊詩人', '踊り子'] },
      d: { label: '静かな森や神殿', jobs: ['白魔道士', '賢者'] }
    }
  },
  {
    id: 10,
    category: 'fantasy',
    text: '異世界での相棒',
    options: {
      a: { label: '騎士仲間や戦士たち', jobs: ['ナイト', 'ガンブレイカー'] },
      b: { label: '召喚獣や魔法生物', jobs: ['召喚士', '黒魔道士'] },
      c: { label: '盗賊ギルドや傭兵団', jobs: ['忍者', '機工士'] },
      d: { label: '旅の仲間たち', jobs: ['吟遊詩人', '踊り子'] }
    }
  }
]; 