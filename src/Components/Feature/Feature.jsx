import PropTypes from 'prop-types';
import { FaCheck } from "react-icons/fa";

const Feature = ({feature}) => {
    return (
        <div>
        

        
            <h2 className='flex  items-center gap-4'><span className='bg-blue-900'><FaCheck /></span> {feature}</h2>
        
           
           
        </div>
    );
};


Feature.propTypes ={
    feature: PropTypes.string
}
export default Feature;