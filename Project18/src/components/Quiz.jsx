import { useState } from "react";
import QUESTIONS from "../question.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import QusetionTimer from "./QuestionTimer.jsx";
import { useCallback } from "react";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="트로피 아이콘" />
        <h2>퀴즈가 끝났습니다!</h2>
      </div>
    );
  }

  // 답변의 복사본 -> 기존 답변구조를 해치지 않기위함 (answers의 첫번째 요소가 항상 정답이라서.)
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QusetionTimer
          // 키를 추가함으로써 다음 질문으로 넘어갈 때 타이머가 재설정됨.
          // 키는 어느 요소나 컴포넌트에도 추가 가능하다.
          // 키는 각기 다른 목록들과 항목들을 식별할 때 용이 (기존 컴포넌트가 변경될 때마다 기존 인스턴스를 삭제하고 재생성)
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
