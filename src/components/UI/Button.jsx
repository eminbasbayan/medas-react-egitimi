import "./Button.css";

function Button(props) {
  return (
    <button
      className={`text-white px-4 py-2 mt-2 ml-[100px] rounded-lg hover:bg-red-400 ${props.addClass}`}
    >
      {props.title}
    </button>
  );
}

export default Button;
