import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, RotateCcw, CheckCircle2, XCircle, Award, Brain, Microscope, ShieldAlert } from 'lucide-react';
import { questions, type Question } from './data/questions';

export default function App() {
  const [currentStep, setCurrentStep] = useState<'welcome' | 'quiz' | 'results'>('welcome');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (optionIndex: number) => {
    if (showExplanation) return;
    
    const newAnswers = [...answers];
    newAnswers[currentIndex] = optionIndex;
    setAnswers(newAnswers);
    setShowExplanation(true);
    
    if (optionIndex === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowExplanation(false);
    } else {
      setCurrentStep('results');
    }
  };

  const restartQuiz = () => {
    setCurrentStep('welcome');
    setCurrentIndex(0);
    setAnswers(new Array(questions.length).fill(null));
    setShowExplanation(false);
    setScore(0);
  };

  const getCategoryIcon = (category?: string) => {
    switch (category) {
      case 'Fysica': return <Microscope className="w-5 h-5 text-blue-500" />;
      case 'Anatomie': return <Brain className="w-5 h-5 text-purple-500" />;
      case 'Veiligheid': return <ShieldAlert className="w-5 h-5 text-amber-500" />;
      default: return null;
    }
  };

  return (
    <div id="app-container" className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 flex items-center justify-center p-0 sm:p-4 md:p-8">
      <div className="w-full max-w-5xl bg-white sm:rounded-[2.5rem] shadow-2xl shadow-slate-200 border-x border-y border-slate-100 overflow-hidden min-h-screen sm:min-h-[700px] flex flex-col">
        <AnimatePresence mode="wait">
          {currentStep === 'welcome' && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col items-center justify-center p-8 md:p-20 text-center"
            >
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="mb-8 p-6 bg-blue-50 rounded-[2rem] text-blue-600 shadow-inner"
              >
                <Brain className="w-16 h-16 md:w-20 md:h-20" />
              </motion.div>
              <h1 id="main-title" className="text-4xl md:text-6xl font-black tracking-tight text-slate-800 mb-6 px-4">
                MRI <span className="text-blue-600">Mastery</span>
              </h1>
              <p className="text-slate-500 mb-10 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
                Versterk je expertise in MRI-fysica en anatomie met deze interactieve leerervaring.
              </p>
              <button
                id="start-quiz-button"
                onClick={() => setCurrentStep('quiz')}
                className="w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-5 rounded-2xl shadow-xl shadow-blue-200 transition-all active:scale-95 flex items-center justify-center gap-3 group"
              >
                Start de Quiz
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}

          {currentStep === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col h-full"
            >
              {/* Header */}
              <header className="px-6 md:px-12 py-6 md:py-8 flex justify-between items-center border-b border-slate-50 sticky top-0 bg-white/80 backdrop-blur-md z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 rounded-xl">
                    {getCategoryIcon(currentQuestion.category)}
                  </div>
                  <div className="hidden xs:block">
                    <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Categorie</span>
                    <span className="text-sm font-bold text-slate-700">{currentQuestion.category}</span>
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-2">
                  <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">Vraag {currentIndex + 1} / {questions.length}</span>
                  <div className="w-24 md:w-40 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      layoutId="progress-bar"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                      className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                    />
                  </div>
                </div>
              </header>

              <div className="flex-1 flex flex-col lg:flex-row p-6 md:p-12 gap-8 lg:gap-12 overflow-y-auto">
                {/* Question Section */}
                <div className="flex-1 flex flex-col">
                  <h2 id={`question-${currentQuestion.id}`} className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-slate-900 mb-8 md:mb-12">
                    {currentQuestion.question}
                  </h2>

                  <div className="grid grid-cols-1 gap-3 md:gap-4">
                    {currentQuestion.options.map((option, idx) => {
                      const isSelected = answers[currentIndex] === idx;
                      const isCorrect = idx === currentQuestion.correctAnswer;
                      const showResult = showExplanation;

                      let buttonClass = "group flex items-start md:items-center p-5 md:p-6 border-2 rounded-2xl text-left transition-all outline-none ";
                      
                      if (!showResult) {
                        buttonClass += "bg-white border-slate-100 hover:border-blue-500 hover:bg-blue-50 active:scale-[0.98] active:bg-blue-100";
                      } else {
                        if (isCorrect) {
                          buttonClass += "bg-green-50 border-green-500 text-green-800 ring-4 ring-green-500/10";
                        } else if (isSelected && !isCorrect) {
                          buttonClass += "bg-red-50 border-red-500 text-red-800 ring-4 ring-red-500/10";
                        } else {
                          buttonClass += "bg-white border-slate-50 text-slate-300 opacity-60";
                        }
                      }

                      return (
                        <button
                          key={idx}
                          id={`option-${idx}`}
                          disabled={showResult}
                          onClick={() => handleAnswer(idx)}
                          className={buttonClass}
                        >
                          <span className={`w-8 h-8 md:w-10 md:h-10 shrink-0 flex items-center justify-center rounded-lg mr-4 font-bold transition-colors text-sm md:text-base ${
                            !showResult 
                              ? "bg-slate-100 text-slate-500 group-hover:bg-blue-500 group-hover:text-white" 
                              : (isCorrect ? "bg-green-500 text-white" : (isSelected ? "bg-red-500 text-white" : "bg-slate-50 text-slate-200"))
                          }`}>
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="text-lg md:text-xl font-semibold flex-1 leading-snug">{option}</span>
                          {showResult && isCorrect && <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-500 shrink-0 ml-2" />}
                          {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500 shrink-0 ml-2" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Feedback Section */}
                <AnimatePresence>
                  {showExplanation && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="lg:w-80 shrink-0"
                    >
                      <div className="bg-slate-900 rounded-[2rem] p-6 md:p-8 text-white shadow-2xl flex flex-col h-full relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
                        
                        <div className="mb-6 relative z-10">
                          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-4 ${
                            answers[currentIndex] === currentQuestion.correctAnswer ? "bg-green-500/20" : "bg-red-500/20"
                          }`}>
                            {answers[currentIndex] === currentQuestion.correctAnswer 
                              ? <CheckCircle2 className="w-7 h-7 text-green-400" /> 
                              : <XCircle className="w-7 h-7 text-red-400" />}
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">
                            {answers[currentIndex] === currentQuestion.correctAnswer ? "Correct!" : "Foutje!"}
                          </h3>
                          <div className={`h-1.5 w-12 rounded-full ${
                             answers[currentIndex] === currentQuestion.correctAnswer ? "bg-green-500" : "bg-red-500"
                          }`}></div>
                        </div>
                        
                        <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 font-medium italic relative z-10">
                          {currentQuestion.explanation}
                        </p>

                        <div className="mt-auto relative z-10">
                          <button
                            id="next-question-button"
                            onClick={handleNext}
                            className="w-full py-4 md:py-5 bg-white text-slate-900 text-lg font-bold rounded-2xl shadow-xl hover:bg-white/90 active:scale-95 transition-all flex items-center justify-center gap-2 group"
                          >
                            {currentIndex === questions.length - 1 ? 'Naar Resultaten' : 'Volgende Vraag'}
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {currentStep === 'results' && (
            <motion.div
              key="results"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex-1 flex flex-col items-center justify-center p-12 md:p-20 text-center"
            >
              <div className="mb-8 relative">
                <div className="absolute inset-0 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse" />
                <div className="relative p-10 bg-blue-600 rounded-full shadow-2xl shadow-blue-300">
                  <Award className="w-16 h-16 text-white" />
                </div>
              </div>
              
              <h2 className="text-4xl font-bold text-slate-800 mb-2">Quiz Voltooid!</h2>
              <p className="text-slate-500 text-xl mb-12">Je hebt je kennis succesvol getest.</p>
              
              <div className="inline-block p-12 bg-slate-50 rounded-[3rem] border-2 border-slate-100 mb-12 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-2 bg-blue-500" />
                <div className="text-7xl font-black text-slate-900 mb-3 tracking-tight">
                  {Math.round((score / questions.length) * 100)}%
                </div>
                <div className="text-slate-400 font-bold uppercase tracking-widest text-sm">
                  Score: {score} / {questions.length}
                </div>
              </div>

              <div className="w-full max-w-sm">
                <button
                  id="restart-button"
                  onClick={restartQuiz}
                  className="w-full bg-slate-900 hover:bg-black text-white text-xl font-bold py-5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 group"
                >
                  <RotateCcw className="w-6 h-6 group-hover:rotate-[-45deg] transition-transform" />
                  Opnieuw Proberen
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
