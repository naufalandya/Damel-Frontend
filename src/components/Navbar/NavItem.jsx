import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavItem({ icon: IconComponent, link, onLogoutClick }) {
  const handleClick = (event) => {
    if (link.name === 'Logout') {
      event.preventDefault();
      onLogoutClick();
    }
  };

  return (
    <Link to={link.path} className="w-full no-underline" onClick={handleClick}>
      <div className="flex items-center p-0 px-4 my-0 py-4 rounded-lg cursor-pointer text-lg hover:bg-gray-800 hover:text-white">
        {IconComponent && <IconComponent className="text-white mr-5 text-xl" />}
        <span className="w-full m-0 p-0 text-white">{link.name}</span>
      </div>
    </Link>
  );
}

NavItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  link: PropTypes.object.isRequired,
  onLogoutClick: PropTypes.func,
};

export default NavItem;
