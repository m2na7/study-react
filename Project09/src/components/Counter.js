import { useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  //  useSelector -> 저장소가 관리하는 상태 부분을 자동으로 선택가능,
  //  react-redux는 이 컴포넌트를 위해 리덕스 저장소에  자동으로 구독을 설정,
  //  리덕스 저장소에서 데이터가 변경될 때마다 자동으로 업데이트되고 최신 카운터를 받게된다.
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
