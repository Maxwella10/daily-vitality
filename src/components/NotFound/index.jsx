import './style.css';
/* eslint-disable react/prop-types */
export function NotFound(props) {
  return (
    <div>
      <h2>{props.title} 🧐</h2>
      <p>{props.text}</p>
      <button className="btn btn-orange btn-lg">
        <a className="" href={props.href}>
          {props.hrefText}
        </a>
      </button>
    </div>
  );
}
