import { useState, useEffect } from 'react'
import { questions } from './data/questions'
import { jobs } from './data/jobs'
import { cn } from './lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { Job } from './types'

const StartScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <div className="relative z-10 min-h-screen text-white flex flex-col justify-center items-center px-4">
      <div className="bg-black/80 p-8 rounded-lg text-center">
        <h1 className="text-2xl font-bold text-[#dcb35c] mb-6" translate="no">
          FF14 ジョブ適性診断
        </h1>
        <p className="text-sm text-[#bfc3cc] mb-8 text-left">
          この診断では、いくつかの簡単な質問に答えるだけで、あなたにオススメのFF14のジョブを見つけることができます。<br />
          FF14を始めたばかりの方も、どのジョブを選べば良いか迷っている方も、ぜひお試しください。<br />
          <span className='text-red-700'>※診断結果はあくまで参考です。実際は好きなジョブで遊びましょう</span>
        </p>
        <button
          onClick={onStart}
          className="px-4 py-2.5 rounded mt-6 block mx-auto w-fit hover:text-[#dcb35c] transition-colors duration-200 cursor-pointer"
        >
          始める
        </button>
      </div>
    </div>
  );
};

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  const [isStartScreenVisible, setIsStartScreenVisible] = useState(true)
  const [resultJobs, setResultJobs] = useState<{ mainJob?: Job, subJobs: Job[] }>({ subJobs: [] })

  useEffect(() => {
    console.log('useEffect - showResult:', showResult, 'answers:', answers);
    if (showResult) {
      const calculatedResult = calculateResultJobs(answers);
      setResultJobs(calculatedResult);
      console.log('useEffect - resultJobs:', calculatedResult);
    }
  }, [showResult, answers]);

  const calculateResultJobs = (userAnswers: string[]) => {
    const jobScores: { [jobName: string]: number } = {};

    jobs.forEach(job => {
      jobScores[job.name] = 0;
    });

    questions.forEach((question, questionIndex) => {
      const answerKey = userAnswers[questionIndex];
      if (answerKey && question.options[answerKey as keyof typeof question.options]) {
        question.options[answerKey as keyof typeof question.options].jobs.forEach(jobName => {
          jobScores[jobName] = (jobScores[jobName] || 0) + 1;
        });
      }
    });

    const sortedJobs = Object.entries(jobScores)
      .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
      .map(([jobName]) => {
        return jobs.find(job => job.name === jobName)!;
      });

    const mainJob = sortedJobs[0];
    const subJobs = sortedJobs.slice(1, 4);

    return { mainJob, subJobs };
  };

  return (
    <div className="min-h-screen relative" lang="ja" translate="no">
      <div
        className="fixed inset-0 bg-cover bg-center z-0"/>
      <div className="fixed inset-0 bg-black/60 z-0" />

      <div className="relative z-10 min-h-screen text-white flex flex-col">
        {isStartScreenVisible ? (
          <StartScreen onStart={() => setIsStartScreenVisible(false)} />
        ) : (
          showResult ? (
            <div className="flex-1 flex flex-col">
              <header className="bg-[#2b2d33]/80 border-b border-[#3a3c42]">
                <div className="container mx-auto px-4 py-6">
                  <h1 className="text-2xl font-bold text-center text-[#dcb35c]" translate="no">
                    診断結果
                  </h1>
                </div>
              </header>

              <main className="flex-1 container mx-auto px-4 py-8">
                {resultJobs.mainJob && (
                  <div className="bg-black/80 p-8 rounded-lg mb-8">
                    <h2 className="text-xl text-[#dcb35c] font-medium mb-4">
                      オススメなジョブ
                    </h2>
                    <div className="sm:flex items-center gap-6">
                      <img
                        src={resultJobs.mainJob.iconUrl}
                        alt={resultJobs.mainJob.name}
                        className="w-36 h-36 object-cover block mx-auto sm:mx-0"
                      />
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <img
                            src={resultJobs.mainJob.iconName}
                            alt={resultJobs.mainJob.name}
                            className="w-16 h-16 object-cover"
                          />
                          <h3 className="text-2xl font-bold text-white" translate="no">
                            <span className="text-lg text-[#dcb35c] tracking-wider block" translate="no">
                              {resultJobs.mainJob.nameEn}
                            </span>
                            {resultJobs.mainJob.name}
                          </h3>
                        </div>
                        <p className="text-sm text-[#bfc3cc] mt-2 mb-5">
                          {resultJobs.mainJob.description}
                        </p>
                        <a href={resultJobs.mainJob.url} target="_blank" rel="noopener noreferrer" className="text-[#4fc1e9] hover:underline text-sm">
                          ジョブガイドで詳細を見る
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {resultJobs.subJobs.length > 0 && (
                  <div className="bg-black/80 p-8 rounded-lg">
                    <h2 className="text-xl text-[#dcb35c] font-medium mb-4">
                      こちらもオススメ
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4 grid-cols-1">
                      {resultJobs.subJobs.map(job => (
                        <div key={job.name} className="flex items-center gap-4 p-4 bg-black/30 rounded-lg">
                          <img
                            src={job.iconUrl}
                            alt={job.name}
                            className="w-16 h-16 object-cover"
                          />
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <img
                                src={job.iconName}
                                alt={job.name}
                                className="w-10 h-10 object-cover"
                              />
                              <h3 className="font-medium text-white" translate="no">
                                <span className="text-sm text-[#dcb35c] tracking-wider block" translate="no">
                                  {job.nameEn}
                                </span>
                                {job.name}
                              </h3>
                            </div>
                            <a href={job.url} target="_blank" rel="noopener noreferrer" className="text-[#4fc1e9] hover:underline text-sm">
                              ジョブガイドで詳細を見る
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => {
                        setCurrentQuestion(0);
                        setAnswers([]);
                        setShowResult(false);
                        setIsStartScreenVisible(true);
                      }}
                      className="px-4 py-2.5 rounded mt-6 block mx-auto w-fit hover:text-[#dcb35c] transition-colors duration-200 cursor-pointer"
                    >
                      もう一度診断する
                    </button>
                  </div>
                )}
              </main>
            </div>
          ) : (
            <div className="relative z-10 min-h-screen text-white flex flex-col">
              <header className="bg-[#2b2d33]/80 border-b border-[#3a3c42]">
                <div className="container mx-auto px-4 py-6">
                  <h1 className="text-2xl font-bold text-center text-[#bfc3cc]">
                    FF14 ジョブ適性診断
                  </h1>
                </div>
              </header>

              <main className="flex-1 flex flex-col">
                <div className="container mx-auto px-4">
                  <div className="py-8">
                    <div className="h-2 bg-[#3a3c42]/80 rounded-full">
                      <div
                        className="h-2 bg-[#4fc1e9] rounded-full transition-all"
                        style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentQuestion}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="text-center text-2xl text-[#bfc3cc] font-medium"
                    >
                      {currentQuestion + 1} / {questions.length}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentQuestion}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="w-full bg-black/80 py-8"
                    >
                      <div className="w-[90%] mx-auto">
                        <h2 className="w-[90%] mx-auto text-xl mb-4 text-[#dcb35c] text-left font-medium tracking-wide">
                          {questions[currentQuestion].text}
                        </h2>
                        <div className="relative mx-auto">
                          <div className="absolute -top-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#dcb35c] to-transparent" />
                          <div className="space-y-2 w-[90%] mx-auto">
                            {Object.entries(questions[currentQuestion].options).map(([key, value]) => (
                              <button
                                key={key}
                                onClick={() => {
                                  setAnswers([...answers, key])
                                  if (currentQuestion < questions.length - 1) {
                                    setCurrentQuestion(prev => prev + 1)
                                  } else {
                                    setShowResult(true)
                                  }
                                }}
                                className={cn(
                                  "w-full text-left px-4 py-2.5",
                                  "text-[#fff] hover:text-[#dcb35c]",
                                  "text-sm tracking-wide",
                                  "transition-all duration-200",
                                  "cursor-pointer"
                                )}
                              >
                                {value.label}
                              </button>
                            ))}
                          </div>

                          <div className="flex justify-between mt-6">
                            <button
                              onClick={() => {
                                if (currentQuestion > 0) {
                                  setCurrentQuestion(prev => prev - 1);
                                  setAnswers(answers.slice(0, -1));
                                  setShowResult(false);
                                }
                              }}
                              disabled={currentQuestion === 0}
                              className={cn(
                                "px-4 py-2.5 rounded",
                                "text-sm tracking-wide",
                                "transition-all duration-200",
                                { "opacity-50 cursor-not-allowed": currentQuestion === 0 }
                              )}
                            >
                              前の質問に戻る
                            </button>
                            <div></div>
                          </div>

                          <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#dcb35c] to-transparent" />
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </main>
            </div>
          )
        )}
      </div>
      <footer className="fixed bottom-0 left-0 w-full bg-black/80 text-center text-white text-xs py-2 z-10">
        © SQUARE ENIX
      </footer>
    </div>
  )
}
