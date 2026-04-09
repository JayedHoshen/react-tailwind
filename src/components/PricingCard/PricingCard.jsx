import React from "react";
import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
  const { name, price, duration, description, features, popular } = pricing;
  return (
    <div
      className={`bg-white text-black border-t-5 ${popular ? "border-purple-500" : "border-blue-500"} 
      rounded-3xl p-5 shadow-md shadow-gray-50 flex flex-col`}
    >
      {/* card header */}
      <div className="space-y-2 border-b-2 border-gray-200 mb-4 pb-4">
        <h4
          className={`text-2xl  font-semibold ${popular ? "text-purple-500" : "text-blue-500"}`}
        >
          {name}
        </h4>
        <p>
          <span className="font-bold text-3xl">${price}</span>{" "}
          <span className="text-neutral/50">/ {duration}</span>
        </p>
      </div>

      {/* card body */}
      <div className="space-y-3 flex-1">
        <p className="bg-blue-100 p-2 rounded-md my-4">{description}</p>
        {features.map((feature, index) => (
          <PricingFeature key={index} feature={feature}></PricingFeature>
        ))}
      </div>
      <button
        className={`btn btn-primary ${popular ? "active" : "btn-outline"} w-full rounded-xl mt-4`}
      >
        Select Plan
      </button>
    </div>
  );
};

export default PricingCard;
