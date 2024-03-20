

import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {

    const {name,price,features}=option;
    return (
        <div className='bg-blue-500 p-10 rounded-lg text-white text-center flex flex-col'>
              <h2 className='text-3xl'>{name}</h2>
            <h2>
                <span className='text-7xl'>{price}</span>
                <span className='text-2xl'>/Month</span>
            </h2>
<div className='text-center mx-auto mt-10 flex-grow'  >
{
                features.map((feature,index) => <Feature key={index}  feature={feature}></Feature>)
            }

</div>

           
            <button className='btn btn-primary w-full mt-10 bg-green-300 text-black' >Purchase</button>
          
        </div>
    );
};

PriceOption.propTypes ={
    option: PropTypes.object
}

export default PriceOption;