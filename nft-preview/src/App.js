import { images } from './constant'

function App() {
    return (
        <main className="wrapper">
            <article className="card">
                <header className="card__header">
                    <img src={images.equilibrium} alt="equilibrium" />
                </header>
                <div className="card__body">
                    <h1 className="card__title">
                        Equilibrium #3429
                    </h1>
                    <p className="card__des">
                        Our Equilibrium collection promotes balance and calm.
                    </p>
                    <div className="row space-between">
                        <span className="card__price row grow-1 gap-1">
                            <img src={images.iconEthereum} alt="ethereum icon" />
                            <span>0.041 ETH</span>
                        </span>
                        <span className="card__time row grow-1 gap-1">
                            <img src={images.iconClock} alt="icon clock" />
                            <span>
                                3 days left
                            </span>
                        </span>
                    </div>
                    <div className="card__line"></div>
                    <div className="card__infos row gap-1">
                        <img src={images.avatar} className="card__avatar" alt="user avatar" />
                        <p className="card__info">
                            Creation of <span className="white"> Jules Wyvern</span>

                        </p>
                    </div>
                </div>
            </article>
        </main>
    );
}

export default App;
