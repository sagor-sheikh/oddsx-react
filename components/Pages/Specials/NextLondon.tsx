import Image from 'next/image';

export default function NextLondon() {
    return (
        <>
            <section className="top_matches">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 gx-0 gx-sm-4">
                            <div className="top_matches__main">
                                <div className="row w-100">
                                    <div className="col-12 pe-0">
                                        <div className="top_matches__content">
                                            <div className="top_matches__winnercard p-4 p-sm-5 p-md-6 rounded-3 p2-bg">
                                                <div
                                                    className="top_matches__winnercard-title d-flex align-items-center gap-2 mb-5 mb-md-6 flex-wrap flex-sm-nowrap">
                                                    <Image src="/images/icon/specials2.png" width={30} height={30} alt="Icon" />
                                                    <div className="top_matches__winnercard-obi">
                                                        <span className="mb-3 n4-color">Jan 1, 2024, 10:00</span>
                                                        <h5>UK Politics - Next London Mayoral Election 2024</h5>
                                                    </div>
                                                </div>
                                                <div className="row gy-2">
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Trump, Donald</span>
                                                                <span>4.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Ramaswamy, Vivek</span>
                                                                <span>7.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3">
                                                                <span>Burgum, Doug</span>
                                                                <span>19.0</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>BHaley, Nikki</span>
                                                                <span>6.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Carlson, Tucker</span>
                                                                <span>8.0</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 opacity-50">
                                                                <span>Suarez, Francis</span>
                                                                <span>-</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Desantis, Ron</span>
                                                                <span>6.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Christie, Chris</span>
                                                                <span>8.0</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 opacity-50">
                                                                <span>Hurd, William Ballard</span>
                                                                <span>23.0</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div
                                                            className="top_matches__winnercard-singe d-flex align-items-center justify-content-center n11-bg rounded-2 py-1 px-3 mb-2 gap-2 mt-2">
                                                            <span className="cpoint">Show more</span>
                                                            <i className="ti ti-arrow-badge-down cpoint mt-1"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
