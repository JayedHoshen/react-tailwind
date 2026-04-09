import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);

  return (
    <div className="mt-10 container mx-auto">
      <h2 className="text-4xl text-center shadow-sm shadow-gray-50 p-3">
        Get our Membership
      </h2>
      <div>
        {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
