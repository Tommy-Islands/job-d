import { jobs as jobsData } from '../data/jobs'; // jobs data をインポート (相対パスで修正)
import { Job, UserCharacteristics, JobCharacteristics } from '../types'; // types/index.ts から型定義をインポート (Job を追加)

// 仮実装: ユーザー特性スコアを計算する関数 (実際の実装は別途必要)
const calculateUserCharacteristics = (answers: string[]) => {
  console.log("calculateUserCharacteristics answers:", answers); // answers を使用 (ログ出力)
  return {}; // 仮として空のオブジェクトを返す
};

// 仮実装: ジョブとのマッチスコアを計算する関数 (実際の実装は別途必要)
const calculateMatchScore = (userCharacteristics: UserCharacteristics, jobCharacteristics: JobCharacteristics) => {
  console.log("calculateMatchScore userCharacteristics:", userCharacteristics); // userCharacteristics を使用 (ログ出力)
  console.log("calculateMatchScore jobCharacteristics:", jobCharacteristics); // jobCharacteristics を使用 (ログ出力)
  return 0; // 仮として常に0を返す
};

export function calculateJobMatch(answers: string[], jobs: Job[]): Job[] {
  // 回答から特性スコアを計算
  const userCharacteristics = calculateUserCharacteristics(answers); // 引数 answers を渡す
  
  // 各ジョブとのマッチング度を計算
  const jobMatches = jobs.map(job => ({
    job,
    score: calculateMatchScore(userCharacteristics, job.characteristics) // 引数 userCharacteristics, job.characteristics を渡す
  }));
  
  // スコアの高い順にソート
  return jobMatches
    .sort((a, b) => b.score - a.score)
    .map(match => match.job);
}

export const calculateResultJobs = (answers: string[]): { mainJob?: Job; subJobs: Job[] } => {
  const matchedJobs = calculateJobMatch(answers, jobsData); // calculateJobMatch を使用してジョブマッチを計算
  const sortedJobs = matchedJobs; // calculateJobMatch の結果がソート済みジョブリスト

  const mainJob = sortedJobs[0] as Job | undefined;
  const subJobs = sortedJobs.slice(1, 4) as Job[];

  return { mainJob, subJobs };
}; 