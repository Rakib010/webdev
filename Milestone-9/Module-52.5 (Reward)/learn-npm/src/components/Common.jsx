import { useParams } from "react-router-dom";

const Common = () => {
  const { page, btn } = useParams();
  return (
    <div>
      {/* Rendering common component different value */}
      {page === "contact" && <h1>This is Contact</h1>}
      {page === "about" && <h1>This is About</h1>}

      {/* using option params btn */}
      {btn && <button className="btn">Subscribe</button>}
    </div>
  );
};

export default Common;
 