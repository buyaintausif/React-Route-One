
import PropTypes from 'prop-types';


const Link = ({route}) => {
    
    return (
        <li className='mr-10 px-6 hover:bg-slate-200' >

        <a href={route.path}> {route.name}</a>
      </li>
    );
};

Link.protoType={
    route:PropTypes.object,
}

export default Link;