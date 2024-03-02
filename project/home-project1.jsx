import React, { useState } from 'react';

function homproject() {
    const [searchText, setSearchText] = useState('');
    const [selectedSneaker, setSelectedSneaker] = useState(null);

    const handleInputChange = (e) => {
        setSearchText(e.target.value.toLowerCase());
    };

    const scrollToSection = (e, id) => {
        e.preventDefault();
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    const handleSneakerClick = (sneaker) => {
        setSelectedSneaker(sneaker);
    };

    return (
        <div>
            <header>
                <a href="#all" onClick={(e) => scrollToSection(e, 'all')}>All</a>
                <a href="#nike" onClick={(e) => scrollToSection(e, 'nike-blazer')}>Nike</a>
                <a href="#adidas" onClick={(e) => scrollToSection(e, 'adidas-court')}>Adidas</a>
                <a href="#saucony" onClick={(e) => scrollToSection(e, 'saucony-sneaker')}>Saucony</a>
                <a href="#vans" onClick={(e) => scrollToSection(e, 'vans-sneaker')}>Vans</a>
                <input type="text" id="search-input" value={searchText} onChange={handleInputChange} placeholder="Search sneakers..." />
            </header>
            <section id="all">
                <h2>All</h2>
                <div className="sneaker" id="nike-blazer" onClick={() => handleSneakerClick('nike-blazer')}>
                    <h3 className="sneaker-name">Nike Blazer Low 77 Vintage Pine Green</h3>
                    {selectedSneaker === 'nike-blazer' && <img src='./Almarai.png' alt="Nike Blazer" />}
                </div>
                <div className="sneaker" id="nike-air-max" onClick={() => handleSneakerClick('nike-air-max')}>
                    <h3 className="sneaker-name">Nike Air Max 90 Reverse Infrared</h3>
                    {selectedSneaker === 'nike-air-max' && <img src='./Almarai new.png' alt="Nike Air Max" />}
                </div>
                <div className="sneaker" id="adidas-court" onClick={() => handleSneakerClick('adidas-court')}>
                    <h3 className="sneaker-name">Adidas Nike Court Legacy White/Black/Desert</h3>
                    {selectedSneaker === 'adidas-court' && <img src='./burger.png' alt="Adidas Court" />}
                </div>
                <div className="sneaker" id="saucony-sneaker" onClick={() => handleSneakerClick('saucony-sneaker')}>
                    <h3 className="sneaker-name">Saucony</h3>
                    {selectedSneaker === 'saucony-sneaker' && <img src='./dior.png' alt="Saucony" />}
                </div>
                <div className="sneaker" id="vans-sneaker" onClick={() => handleSneakerClick('vans-sneaker')}>
                    <h3 className="sneaker-name">Vans</h3>
                    {selectedSneaker === 'vans-sneaker' && <img src='./expert.png' alt="Vans" />}
                </div>
            </section>
        </div>
    );
}

export default App;
