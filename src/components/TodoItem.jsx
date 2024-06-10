import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/slices/todoSlice";

// Hint: TodoItem 컴포넌트는 props 를 받습니다.
export default function TodoItem({ isDone }) {
  const item = useSelector((state) =>
    state.item.find((item) => item.id === item)
  );

  const [title, setTitle] = useState(item.title);
  const [content, setContent] = useState(item.content);

  const dispatch = useDispatch();
  const history = useHistory();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (!title && !content) {
      alert("제목과 내용을 입력해주세요");
    } else {
      dispatch(itemUpdated({ id: itemUpdated, title, content }));
      history.push(`/items/${itemId}`);
    }
  };

  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <section>
        <p>제목: 이거슨제목</p>
        <p>내용: 이거슨내용</p>
      </section>
      <section>
        <button
          onClick={() => {
            dispatch(toggleTodo(isDone));
          }}
        >
          완료
        </button>
        <button
          onClick={() => {
            dispatch(deleteTodo());
          }}
        >
          삭제
        </button>
      </section>
    </li>
  );
}
