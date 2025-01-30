import React from "react";
import { Link } from "react-router-dom";

const CampaignCard = ({ campaign, index }) => {
  const { _id, title, type, donation, deadline } = campaign;

  return (
    <tr className="hover:bg-gray-50 border-b text-xs sm:text-sm">
      <td className="py-4 px-2 sm:px-4">{index + 1}</td>
      <td className="py-4 px-2 sm:px-4 font-medium text-gray-800 truncate">
        {title}
      </td>
      <td className="py-4 px-2 sm:px-4">{type}</td>
      <td className="py-4 px-2 sm:px-4">{donation} Taka</td>
      <td className="py-4 px-2 sm:px-4">
        {new Date(deadline).toLocaleDateString()}
      </td>
      <td className="py-4 px-2 sm:px-4 text-center">
        <Link to={`/campaign/${_id}`} className="btn bg-green-500 text-white ">
          See More
        </Link>
      </td>
    </tr>
  );
};

export default CampaignCard;
