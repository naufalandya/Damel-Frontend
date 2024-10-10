import { useState } from 'react';
import { FiUser } from 'react-icons/fi';

// Array objek iklan
const advertisements = [
    {
        username: "Coca-Cola",
        content: "Quench your thirst with the refreshing taste of Coca-Cola! Crisp, cool, and irresistibly delicious—open happiness with every sip.",
        avatarSrc: "https://example.com/coca-cola-avatar.jpg"
    },
    {
        username: "Nike",
        content: "Just Do It! Elevate your game with Nike’s latest collection of high-performance footwear and apparel.",
        avatarSrc: "https://example.com/nike-avatar.jpg"
    },
    {
        username: "Apple",
        content: "Experience the future of technology with Apple. Innovation at your fingertips with the latest iPhone, MacBook, and more.",
        avatarSrc: "https://example.com/apple-avatar.jpg"
    },
    {
        username: "McDonald's",
        content: "Satisfy your cravings with McDonald’s signature Big Mac and crispy fries. Fast, delicious, and always made just for you.",
        avatarSrc: "https://example.com/mcdonalds-avatar.jpg"
    },
    {
        username: "Starbucks",
        content: "Start your day right with a cup of Starbucks. Whether it's a latte, cappuccino, or frappuccino, there's a brew for you.",
        avatarSrc: "https://example.com/starbucks-avatar.jpg"
    }
];

const RandomQuote = () => {
    // State untuk menyimpan iklan yang sedang ditampilkan
    const [currentAd, setCurrentAd] = useState(advertisements[0]);

    // Fungsi untuk mengganti iklan secara acak
    const handleRefresh = () => {
        const randomIndex = Math.floor(Math.random() * advertisements.length);
        setCurrentAd(advertisements[randomIndex]);
    };

    return (
        <div style={{ backgroundColor: '#1D1D1D', fontSize: '1rem' }} className="random-quote-card-container p-5 py-6 border-b-2">
            <div className="title-container flex items-center justify-between text-white">
                <h3 style={{ fontSize: '1rem' }} className="title-random-quote">
                    Advertisement
                </h3>
                <button onClick={handleRefresh} className="refresh-button">
                    <p style={{ fontSize: '1rem' }} className="refresh ml-2">
                        🔄
                    </p>
                </button>
            </div>

            <div className="content-information">
                <div className="profile-container flex items-center py-6 pt-6">
                    {currentAd.avatarSrc ? (
                        <img className="avatar-user w-10 h-10 rounded-full mr-4" src={currentAd.avatarSrc} alt="Avatar" />
                    ) : (
                        <div className="avatar-placeholder w-8 h-8 rounded-full mr-4 flex items-center justify-center bg-gray-700">
                            <FiUser className="text-white" size={20} />
                        </div>
                    )}
                    <h5 className="username text-white">{currentAd.username}</h5>
                </div>

                <p className="random-quote-content text-white text-sm text-justify" style={{ fontSize: '1rem' }}>
                    {currentAd.content}
                </p>
            </div>
        </div>
    );
}

export default RandomQuote;
