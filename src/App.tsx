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
    <div id="app-container" className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white rounded-[2rem] shadow-2xl shadow-slate-200 border border-slate-200 overflow-hidden min-h-[600px] flex flex-col">
        <AnimatePresence mode="wait">
          {currentStep === 'welcome' && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col items-center justify-center p-12 md:p-20 text-center"
            >
              <div className="mb-8 p-6 bg-blue-50 rounded-3xl text-blue-600">
                <Brain className="w-16 h-16" />
              </div>
              <h1 id="main-title" className="text-5xl font-bold tracking-tight text-slate-800 mb-6 px-4">
                MRI Kennis Quiz: <span className="text-blue-600">Fysica & Anatomie</span>
              </h1>
              <p className="text-slate-500 mb-10 text-xl max-w-2xl leading-relaxed">
                Test je kennis over de wereld van MRI. Een educatieve reis door technieken, veiligheid en anatomische structuren.
              </p>
              <button
                id="start-quiz-button"
                onClick={() => setCurrentStep('quiz')}
                className="w-full max-w-sm bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-5 rounded-2xl shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3 group"
              >
                Begin de Quiz
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}

          {currentStep === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col"
            >
              {/* Header */}
              <header className="px-12 py-8 flex justify-between items-center border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 rounded-xl">
                    {getCategoryIcon(currentQuestion.category)}
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Categorie</span>
                    <span className="text-sm font-bold text-slate-700">{currentQuestion.category}</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center gap-4 mb-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Vraag {currentIndex + 1} van {questions.length}</span>
                    <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                        className="h-full bg-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </header>

              <div className="flex-1 flex flex-col md:flex-row p-12 gap-12 overflow-y-auto">
                {/* Question Section */}
                <div className="flex-1 space-y-8">
                  <h2 id={`question-${currentQuestion.id}`} className="text-4xl font-semibold leading-tight text-slate-900">
                    {currentQuestion.question}
                  </h2>

                  <div className="grid grid-cols-1 gap-4">
                    {currentQuestion.options.map((option, idx) => {
                      const isSelected = answers[currentIndex] === idx;
                      const isCorrect = idx === currentQuestion.correctAnswer;
                      const showResult = showExplanation;

                      let buttonClass = "group flex items-center p-6 border-2 rounded-2xl text-left transition-all outline-none ";
                      
                      if (!showResult) {
                        buttonClass += "bg-white border-slate-100 hover:border-blue-500 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-50";
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
                          <span className={`w-10 h-10 flex items-center justify-center rounded-lg mr-4 font-bold transition-colors ${
                            !showResult 
                              ? "bg-slate-100 text-slate-500 group-hover:bg-blue-500 group-hover:text-white" 
                              : (isCorrect ? "bg-green-500 text-white" : (isSelected ? "bg-red-500 text-white" : "bg-slate-50 text-slate-200"))
                          }`}>
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="text-xl font-medium flex-1">{option}</span>
                          {showResult && isCorrect && <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />}
                          {showResult && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-500 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Feedback Section (Sidebar Style) */}
                <AnimatePresence>
                  {showExplanation && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="md:w-80 shrink-0"
                    >
                      <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-blue-200 flex flex-col h-full ring-1 ring-white/20">
                        <div className="mb-6">
                          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-4 ${
                            answers[currentIndex] === currentQuestion.correctAnswer ? "bg-white/20" : "bg-red-400/20"
                          }`}>
                            {answers[currentIndex] === currentQuestion.correctAnswer 
                              ? <CheckCircle2 className="w-7 h-7 text-white" /> 
                              : <XCircle className="w-7 h-7 text-white" />}
                          </div>
                          <h3 className="text-3xl font-bold mb-2">
                            {answers[currentIndex] === currentQuestion.correctAnswer ? "Correct!" : "Helaas!"}
                          </h3>
                          <div className="h-1.5 w-12 bg-white/40 rounded-full"></div>
                        </div>
                        
                        <p className="text-blue-50 text-lg leading-relaxed mb-8 font-medium">
                          {currentQuestion.explanation}
                        </p>

                        <div className="mt-auto">
                          <button
                            id="next-question-button"
                            onClick={handleNext}
                            className="w-full py-5 bg-white text-blue-600 text-lg font-bold rounded-2xl shadow-lg border-b-4 border-blue-100 hover:bg-blue-50 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-2"
                          >
                            {currentIndex === questions.length - 1 ? 'Resultaten' : 'Volgende Vraag'}
                            <ChevronRight className="w-6 h-6" />
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
