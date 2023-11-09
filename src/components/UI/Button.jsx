import "./Button.css";

function Button(props) {
  return <button className={`btn ${props.addClass}`}>{props.title}</button>;
}

export default Button;
