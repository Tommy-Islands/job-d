// 質問のタイプ定義
export interface Question {
  id: number;
  category: 'reality' | 'fantasy';
  text: string;
  options: {
    a: { label: string; jobs: string[] };
    b: { label: string; jobs: string[] };
    c: { label: string; jobs: string[] };
    d: { label: string; jobs: string[] };
  };
}

// ジョブのタイプ定義
export interface Job {
  name: string;
  nameEn: string;
  url: string;
  iconUrl: string;
  iconName: string;
  characteristics: {
    leadership: number;    // リーダーシップ
    teamwork: number;      // チームワーク
    independence: number;  // 独立性
    support: number;       // サポート性
    combat: number;        // 戦闘スタイル
    magic: number;         // 魔法適性
  };
  description: string; // おすすめ理由のテキストを追加
}

export type UserCharacteristics = object; // ユーザー特性の型定義 (仮)
export type JobCharacteristics = object; // ジョブ特性の型定義 (仮) 