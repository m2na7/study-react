import { useRef } from "react";
import Input from "./input";

export default function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

      onAdd({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate,
      });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="제목" />
        {/* textarea는 자동으로 true로 설정됨 */}
        <Input ref={description} label="설명" textarea />
        <Input type="date" ref={dueDate} label="마감일" />
      </div>
    </div>
  );
}