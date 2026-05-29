import { useState, useMemo } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { questions } from './data/questions';
import { questions2 } from './data/questions2';
import { CheckCircle2, XCircle, BrainCircuit, Play, RotateCcw, Award, ChevronRight, Home, ArrowLeft } from 'lucide-react';

function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="glass-panel animate-fade-in" style={{ textAlign: 'center', margin: 'auto', maxWidth: '600px', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <BrainCircuit size={64} color="var(--primary-light)" />
      </div>
      <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Toán Học Đại Cương
      </h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
        Chào mừng bạn đến với hệ thống ôn tập trắc nghiệm. Vui lòng chọn một trong các bộ đề dưới đây để bắt đầu.
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Bộ đề 1 */}
        <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)', textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Bộ đề Tổng hợp (40 Câu)</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.95rem' }}>Chủ đề: Dịch chuyển đồ thị & Giới hạn hai phía.</p>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span className="badge badge-easy">14 Dễ</span>
            <span className="badge badge-hard">14 Khó</span>
            <span className="badge badge-thinking">12 Tư Duy</span>
          </div>
          <button className="btn btn-primary" onClick={() => navigate('/quiz/1')} style={{ width: '100%' }}>
            <Play size={18} /> Làm Bài Ngay
          </button>
        </div>

        {/* Bộ đề 2 */}
        <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)', textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Bài Mới: Ma Trận Nghịch Đảo (3 Câu)</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.95rem' }}>Chủ đề: Điều kiện sống còn & Giải mã bản ngã.</p>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span className="badge badge-easy">1 Dễ</span>
            <span className="badge badge-hard">1 Khó</span>
            <span className="badge badge-thinking">1 Tư Duy</span>
          </div>
          <button className="btn btn-primary" onClick={() => navigate('/quiz/2')} style={{ width: '100%' }}>
            <Play size={18} /> Làm Bài Ngay
          </button>
        </div>
      </div>
    </div>
  );
}

function QuizRunner({ questionList, title }) {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState('welcome'); // welcome, quiz, result
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  
  const quizQuestions = useMemo(() => questionList, [questionList]);
  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleStart = () => {
    setGameState('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers([]);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const handleOptionSelect = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    
    const isCorrect = index === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    setAnswers(prev => [...prev, {
      questionId: currentQuestion.id,
      selected: index,
      isCorrect,
      correct: currentQuestion.correctAnswer
    }]);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setGameState('result');
    }
  };

  const getBadgeClass = (difficulty) => {
    switch (difficulty) {
      case 'Dễ': return 'badge-easy';
      case 'Khó': return 'badge-hard';
      case 'Tư duy': return 'badge-thinking';
      default: return 'badge-easy';
    }
  };

  return (
    <>
      {gameState === 'welcome' && (
        <div className="glass-panel animate-fade-in" style={{ textAlign: 'center', margin: 'auto', maxWidth: '600px', width: '100%' }}>
          <button className="btn btn-outline" onClick={() => navigate('/')} style={{ marginBottom: '1.5rem', alignSelf: 'flex-start' }}>
            <ArrowLeft size={18} /> Về Trang Chủ
          </button>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <BrainCircuit size={64} color="var(--primary-light)" />
          </div>
          <h1 className="text-gradient" style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
            {title}
          </h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Bộ đề này gồm {quizQuestions.length} câu hỏi. Hãy sẵn sàng để kiểm tra kiến thức của bạn.
          </p>
          <button className="btn btn-primary" onClick={handleStart} style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>
            <Play size={20} /> Bắt Đầu Ngay
          </button>
        </div>
      )}

      {gameState === 'quiz' && (
        <div className="glass-panel animate-fade-in" key={currentQuestion.id} style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>
              Câu hỏi {currentQuestionIndex + 1} / {quizQuestions.length}
            </span>
            <span className={`badge ${getBadgeClass(currentQuestion.difficulty)}`}>
              {currentQuestion.difficulty}
            </span>
          </div>

          <div className="progress-container">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentQuestionIndex) / quizQuestions.length) * 100}%` }}
            ></div>
          </div>

          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
            {currentQuestion.question}
          </h2>

          <div className="options-grid">
            {currentQuestion.options.map((option, index) => {
              let btnClass = "option-btn";
              if (isAnswered) {
                if (index === currentQuestion.correctAnswer) {
                  btnClass += " correct";
                } else if (index === selectedOption) {
                  btnClass += " wrong";
                }
              } else if (selectedOption === index) {
                btnClass += " selected";
              }

              return (
                <button
                  key={index}
                  className={btnClass}
                  onClick={() => handleOptionSelect(index)}
                  disabled={isAnswered}
                >
                  <span>{option}</span>
                  {isAnswered && index === currentQuestion.correctAnswer && <CheckCircle2 color="var(--success)" size={20} />}
                  {isAnswered && index === selectedOption && index !== currentQuestion.correctAnswer && <XCircle color="var(--danger)" size={20} />}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="animate-fade-in" style={{ marginTop: '2rem' }}>
              <div className={`explanation-box ${selectedOption === currentQuestion.correctAnswer ? 'correct' : 'wrong'}`} 
                   style={{
                     padding: '1.2rem',
                     borderRadius: '12px',
                     borderLeft: `4px solid ${selectedOption === currentQuestion.correctAnswer ? 'var(--success)' : 'var(--danger)'}`,
                     background: selectedOption === currentQuestion.correctAnswer ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'
                   }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
                  {selectedOption === currentQuestion.correctAnswer ? (
                    <><CheckCircle2 color="var(--success)" size={24} /> <strong style={{ color: 'var(--success)', fontSize: '1.2rem' }}>Chính xác!</strong></>
                  ) : (
                    <><XCircle color="var(--danger)" size={24} /> <strong style={{ color: 'var(--danger)', fontSize: '1.2rem' }}>Chưa chính xác! Đáp án đúng là {currentQuestion.options[currentQuestion.correctAnswer]}</strong></>
                  )}
                </div>
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Giải thích chi tiết:</strong>
                <p style={{ lineHeight: 1.6, color: 'var(--text-muted)' }}>{currentQuestion.explanation}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
                <button className="btn btn-primary" onClick={handleNext}>
                  {currentQuestionIndex < quizQuestions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {gameState === 'result' && (
        <div className="glass-panel animate-fade-in" style={{ textAlign: 'center', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <Award size={80} color="var(--secondary)" />
          </div>
          <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Hoàn Thành!
          </h1>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '2rem 0', flexWrap: 'wrap' }}>
            <div className="result-stat">
              <span className="result-stat-value text-gradient">{score}</span>
              <span className="result-stat-label">Số câu đúng</span>
            </div>
            <div className="result-stat">
              <span className="result-stat-value text-gradient">{quizQuestions.length - score}</span>
              <span className="result-stat-label">Số câu sai</span>
            </div>
            <div className="result-stat">
              <span className="result-stat-value text-gradient">{Math.round((score / quizQuestions.length) * 100)}%</span>
              <span className="result-stat-label">Tỷ lệ chính xác</span>
            </div>
          </div>

          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
            {score === quizQuestions.length 
              ? 'Tuyệt vời! Bạn đã nắm vững hoàn toàn kiến thức.'
              : score > quizQuestions.length / 2
              ? 'Rất tốt! Cố gắng luyện tập thêm để đạt điểm tuyệt đối nhé.'
              : 'Hãy ôn tập lại lý thuyết và thử sức một lần nữa!'}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <button className="btn btn-primary" onClick={handleStart} style={{ padding: '1rem 2rem' }}>
              <RotateCcw size={20} /> Làm lại bài
            </button>
            <button className="btn btn-outline" onClick={() => navigate('/')} style={{ padding: '1rem 2rem' }}>
              <Home size={20} /> Về Trang Chủ
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/quiz/1" element={<QuizRunner questionList={questions} title="Bộ đề Tổng hợp (40 Câu)" />} />
          <Route path="/quiz/2" element={<QuizRunner questionList={questions2} title="Bài mới: Ma Trận Nghịch Đảo (3 Câu)" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
