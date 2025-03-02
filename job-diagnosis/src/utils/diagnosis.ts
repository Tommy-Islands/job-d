export function calculateJobMatch(answers: string[], jobs: Job[]): Job[] {
  // 回答から特性スコアを計算
  const userCharacteristics = calculateUserCharacteristics(answers);
  
  // 各ジョブとのマッチング度を計算
  const jobMatches = jobs.map(job => ({
    job,
    score: calculateMatchScore(userCharacteristics, job.characteristics)
  }));
  
  // スコアの高い順にソート
  return jobMatches
    .sort((a, b) => b.score - a.score)
    .map(match => match.job);
} 