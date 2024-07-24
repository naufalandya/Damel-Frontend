import { useState, useEffect } from 'react';
import { FiUser } from 'react-icons/fi';
import axios from 'axios';

const RandomTips = () => {
    const [fact, setFact] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchFact();
    }, []);

    const fetchFact = async () => {
        setLoading(true);
        try {
            const apiKey = '829HIQEG52F29HutkyyOdw==JmkxDf4aXmdiaEBj'; // Ganti dengan API key Anda
            const response = await axios.get('https://api.api-ninjas.com/v1/facts', {
                headers: {
                    'X-API-KEY': apiKey,
                },
            });
            if (response.data && response.data.length > 0) {
                setFact(response.data[0]);
            }
        } catch (error) {
            console.error('Error fetching fact:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleRefresh = () => {
        fetchFact();
    };

    const avatarSrc = ""; // URL avatar user (if needed)

    return (
        <div style={{ backgroundColor: '#1D1D1D', fontSize : '1rem', borderBottom : '2px solid white' }} className="random-quote-card-container p-5 py-6">
            <div className="title-container flex items-center justify-between text-white">
                <h3 style={ { fontSize : '1rem' }} className="title-random-quote">
                    Science Fact
                </h3>
                <button onClick={handleRefresh} className="refresh ml-2" style={{ fontSize: '1rem', cursor: 'pointer', border: 'none', background: 'none' }}>
                    {loading ? 'Refreshing...' : '🔄'}
                </button>
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
                    <h5 className="username text-white">{fact.author || 'Author'}</h5>
                </div>

                <p className="random-quote-content text-white text-sm text-justify" style={ { fontSize :'1rem'}}>
                    "{fact.fact || 'Fact text'}"
                </p>
            </div>
        </div>
    );
};

export default RandomTips;
