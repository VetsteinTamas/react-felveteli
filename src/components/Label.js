import { Link } from "react-router-dom";

const Label = ({ question, label }) => {
  console.log(question, label);
  return (
    <Link to={`/labels/${JSON.stringify(label)}`}>
      <div className="label">{label}</div>
    </Link>
  );
};

export default Label;
