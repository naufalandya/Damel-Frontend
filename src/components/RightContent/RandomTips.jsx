import { FiUser } from 'react-icons/fi';

const RandomTips = () => {
    const avatarSrc = ""; // URL avatar user

    return (
        <div style={{ backgroundColor: '#1D1D1D', fontSize : '1rem' }} className="random-quote-card-container p-5 py-6">
            <div className="title-container flex items-center justify-between text-white">
                <h3 style={ { fontSize : '1rem' }} className="title-random-quote">
                    Science Fact
                </h3>
                <a href="/">
                    <p style={ { fontSize : '1rem' }} className="refresh ml-2">
                        🔄
                    </p>
                </a>
            </div>

            <div className="content-information">
                <div className="profile-container flex items-center py-6 pt-6">
                    {avatarSrc ? (
                        <img className="avatar-user w-10 h-10 rounded-full mr-4" src={avatarSrc} alt="Avatar" />
                    ) : (
                        <div className="avatar-placeholder w-8 h-8 rounded-full mr-4 flex items-center justify-center bg-gray-700">
                            <FiUser className="text-white" size={20} />
                        </div>
                    )}
                    <h5 className="username text-white">username</h5>
                </div>

                <p className="random-quote-content text-white text-sm text-justify" style={ { fontSize :'1rem'}}>
                Did you know that a single bolt of lightning contains enough energy to toast 100,000 slices of bread? Lightning can reach temperatures of roughly 30,000 Kelvin (53,540 degrees Fahrenheit), which is five times hotter than the surface of the sun.
</p>
            </div>
        </div>
    );
}

export default RandomTips;
