export default function Home() {
    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>Come with us for</h2>
                <h3>A NEW JOURNEY IN HUNTING</h3>
            </div>
            <img src="./images/5b8ab123a639e004e1cab50b.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                <div className="game">
                    <div className="image-wrap">
                        <img src="./images/CoverFire.png" />
                    </div>
                    <h3>Cover Fire</h3>
                    <div className="rating">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Details</a>
                    </div>
                </div>
                <div className="game">
                    <div className="image-wrap">
                        <img src="./images/ZombieLang.png" />
                    </div>
                    <h3>Zombie Lang</h3>
                    <div className="rating">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Details</a>
                    </div>
                </div>
                <div className="game">
                    <div className="image-wrap">
                        <img src="./images/MineCraft.png" />
                    </div>
                    <h3>MineCraft</h3>
                    <div className="rating">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Details</a>
                    </div>
                </div>

                <p className="no-articles">No games yet</p>
            </div>
        </section>
    );
}
