import { Link } from "react-router-dom";

const NewsDetailsCard = ({ news }) => {
  /* console.log(news); */
  return (
    <div>
      <div className="card bg-base-100 border">
        <figure className="px-10 pt-10">
          <img src={news?.image_url} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{news?.title}</h2>
          <p>{news?.details}</p>
          <div className="card-actions">
            <Link
              to={`/category/${news?.category_id}`}
              className="btn btn-primary"
            >
              Back to category
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
