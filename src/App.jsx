import { useState, useMemo } from 'react';
import { questions } from './data/questions';
import { CheckCircle2, XCircle, BrainCircuit, Play, RotateCcw, Award, ChevronRight } from 'lucide-react';

function App() {
  const [gameState, setGameState] = useState('welcome'); // welcome, quiz, result
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  
  // Xáo trộn câu hỏi khi bắt đầu (hoặc giữ nguyên để test, ở đây ta sẽ dùng list gốc)
  const quizQuestions = useMemo(() => {
    // Có thể xáo trộn ở đây: return [...questions].sort(() => Math.random() - 0.5);
    return questions;
  }, []);

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
    <div className="app-container">
      {gameState === 'welcome' && (
        <div className="glass-panel animate-fade-in" style={{ textAlign: 'center', margin: 'auto', maxWidth: '600px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <BrainCircuit size={64} color="var(--primary-light)" />
          </div>
          <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Toán Học Đại Cương
          </h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Kiểm tra kiến thức của bạn với 40 câu hỏi trắc nghiệm chuyên sâu về hai chủ đề: <br/>
            <strong style={{ color: 'var(--text-main)' }}>Dịch chuyển đồ thị hàm số</strong> & <strong style={{ color: 'var(--text-main)' }}>Giới hạn hai phía</strong>.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <div className="badge badge-easy">14 Câu Dễ</div>
            <div className="badge badge-hard">14 Câu Khó</div>
            <div className="badge badge-thinking">12 Câu Tư Duy</div>
          </div>
          <button className="btn btn-primary" onClick={handleStart} style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>
            <Play size={20} /> Bắt Đầu Ngay
          </button>
        </div>
      )}

      {gameState === 'quiz' && (
        <div className="glass-panel animate-fade-in" key={currentQuestion.id}>
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
        <div className="glass-panel animate-fade-in" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <Award size={80} color="var(--secondary)" />
          </div>
          <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Hoàn Thành!
          </h1>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '2rem 0' }}>
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

          <button className="btn btn-primary" onClick={handleStart} style={{ padding: '1rem 2rem' }}>
            <RotateCcw size={20} /> Làm lại bài
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
