import { Favorite } from "@material-ui/icons";
import React from "react";
import styles from "./Quiz.module.scss";

const questions = [
  {
    title: "Вам нравится WALLSURFACE?",
    variants: ["Конечно!", "Да", "Нет"],
    correct: 0,
  },
  {
    title: "А стиль приложения?",
    variants: ["Красиво", "Стильно", "Банально"],
    correct: 1,
  },
  {
    title: "А удобство использования?",
    variants: ["Удобно", "Пойдёт", "Не удобно"],
    correct: 0,
  },
];

const Result = ({ correct }) => {
  return (
    <div className={styles.result}>
      <Favorite style={{ color: "#ed4159" }} />
      <Favorite style={{ color: "#ed4159", paddingTop: 15 }} />
      <Favorite style={{ color: "#ed4159" }} />
      <h2>
        Вы дали {correct} положительных ответа из {questions.length}
        <br />
        <p style={{ color: "#ed4159", margin: 0 }}>Спасибо за участие!</p>
      </h2>
    </div>
  );
};

const Game = ({ step, question, onClickVariant }) => {
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className={styles.progress}>
        <div
          style={{ width: `${percentage}%` }}
          className={styles.progress__inner}
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={index}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
};

const Quiz = () => {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };
  return (
    <div className={styles.root}>
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
};

export default Quiz;
