import { forwardRef, useImperativeHandle, useRef } from "react";

// ref 값을 다른 컴포넌트로 전달하기 위해서는 forwardRef를 사용해야 한다.
const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal(); // 내장 dialog 요소 (표준 브라우저 기능)
      },
    };
  });
  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
