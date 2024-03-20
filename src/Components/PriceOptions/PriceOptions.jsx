import React from 'react';

import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {

   const priceOptions= [
    {
      "id": 1,
      "name": "Basic Membership",
      "features": [
        "Access to gym equipment",
        "Access to locker room facilities",
        "Limited access to group classes"
      ],
      "price": "$50"
    },
    {
      "id": 2,
      "name": "Premium Membership",
      "features": [
        "Access to gym equipment",
        "Access to locker room facilities",
        "Unlimited access to group classes",
        "Personalized workout plans",
        "Nutritional counseling"
      ],
      "price": "$80"
    },
    {
      "id": 3,
      "name": "Elite Membership",
      "features": [
        "Access to gym equipment",
        "Access to locker room facilities",
        "Unlimited access to group classes",
        "Personalized workout plans",
        "Nutritional counseling",
        "Access to sauna and steam rooms",
        "Towel service"
      ],
      "price": "$100"
    },
    {
      "id": 4,
      "name": "VIP Membership",
      "features": [
        "Access to gym equipment",
        "Access to locker room facilities",
        "Unlimited access to group classes",
        "Personalized workout plans",
        "Nutritional counseling",
        "Access to sauna and steam rooms",
        "Towel service",
        "Complimentary protein shakes",
        "Priority booking for personal training sessions"
      ],
      "price": "$150"
    },
    {
      "id": 5,
      "name": "Platinum Membership",
      "features": [
        "Access to gym equipment",
        "Access to locker room facilities",
        "Unlimited access to group classes",
        "Personalized workout plans",
        "Nutritional counseling",
        "Access to sauna and steam rooms",
        "Towel service",
        "Complimentary protein shakes",
        "Priority booking for personal training sessions",
        "Exclusive access to VIP lounges",
        "Discounts on gym merchandise"
      ],
      "price": "$200"
    }
  ]
  
      
    return (
        <div className='m-12'>
            

           <div className='grid md:grid-cols-3 gap-7'>
           {
                priceOptions.map( option => <PriceOption key={option.id}  
                option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;