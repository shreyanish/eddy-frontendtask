import eddylogo from "../../public/next.svg"
import Image from 'next/image'

export default function Card() {
    return (
        <div className="card--container">
            <div className="card--element">
                <div className="front">
                    <div className="card--border front--content">
                        <Image 
                            className="front--img"
                            src="/static/eddy-logo.svg"
                            alt="Eddy Finance Logo"
                            width={80}
                            height={80}
                        />
                    </div>
                </div>
                <div className="back">
                    <div className="card--border back--content">
                        <div className="back--title">
                            <Image 
                                className="front--img"
                                src="/static/eddy-logo.svg"
                                alt="Eddy Finance Logo"
                                width={48}
                                height={48}
                            />
                            <h2 className="title--text">
                                Eddy Finance
                            </h2>
                        </div>

                        <div className="back--description">
                            <h4>
                            The first stableswap on <span className="zetachain--p" >Zetachain</span><br />also empowering native asset <br />swaps between multiple chains <br />including BTC, ETH and more. <br />Say goodbye to wrapped/synthetic<br /> assets and hello to safety and<br /> high capital efficiency.
                            </h4>
                        </div>

                        <div className="back--stats">
                            <div className="stats--one">
                                <h3 className="stats--number">
                                    100K +
                                </h3>
                                <h4 className="stats--title">
                                    transactions
                                </h4>
                            </div>
                            <div className="stats--divider"></div>
                            <div className="stats--two">
                                <h3 className="stats--number">
                                    20K +
                                </h3>
                                <h4 className="stats--title">
                                    users
                                </h4>
                            </div>
                        </div>

                        <div className="back--pointers">
                            <h4>· <span className="pointers--highlight">best</span> conversion rates</h4>
                            <h4>· <span className="pointers--highlight">lowest</span> gas fees</h4>
                            <h4>· <span className="pointers--highlight">military grade</span> security system</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}