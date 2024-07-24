import { useState, useEffect } from 'react';
import { FiUser } from 'react-icons/fi';
import axios from 'axios';

const RandomQuote = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const apiKey = '829HIQEG52F29HutkyyOdw==JmkxDf4aXmdiaEBj'; // Replace with your actual API key
      const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness', {
        headers: {
          'X-API-KEY': apiKey,
        },
      });
      if (response.data && response.data.length > 0) {
        setQuote(response.data[0]);
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    await fetchQuote();
  };

  const avatarSrc = ""; // URL avatar user (if needed)

  return (
    <div style={{ backgroundColor: '#1D1D1D', fontSize: '1rem' }} className="random-quote-card-container p-5 py-6 border-b-2">
      <div className="title-container flex items-center justify-between text-white">
        <h3 style={{ fontSize: '1rem' }} className="title-random-quote">
          Random Quote
        </h3>
        <button onClick={handleRefresh} style={{ fontSize: '1rem', cursor: 'pointer', background: 'none', border: 'none' }}>
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
          <h5 className="username text-white">{quote.author || 'Author'}</h5>
        </div>

        <p className="random-quote-content text-white text-sm text-justify" style={{ fontSize: '1rem' }}>
          "{quote.quote || 'Quote text'}"
        </p>
      </div>
    </div>
  );
};

export default RandomQuote;
