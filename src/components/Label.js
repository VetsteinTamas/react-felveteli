import { Link } from "react-router-dom";

const Label = ({ question, label }) => {  
  return (
    <Link to={`/labels/${JSON.stringify(label)}`} className="link__repair">
      <div className="label">{label}</div>
    </Link>
  );
};

export default Label;
