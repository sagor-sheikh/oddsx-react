import Image from 'next/image';
import { IconCalendarEvent, IconArrowBadgeUp } from "@tabler/icons-react";

export default function International() {
    return (
        <>
            <section className="top_matches">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 gx-0 gx-sm-4">
                            <div className="top_matches__main">
                                <div className="row w-100">
                                    <div className="col-12 pe-0">
                                        <div className="top_matches__title d-flex align-items-center gap-sm-2 mb-4 mb-md-5">
                                        <IconCalendarEvent className="fs-three" height={31} width={31} />
                                            <h3>Outrights International</h3>
                                            <IconArrowBadgeUp className="fs-four mt-1 cpoint" height={24} width={24} />
                                        </div>
                                        <div className="top_matches__content">
                                            <div className="top_matches__winnercard p-4 p-sm-5 p-md-6 rounded-3 p2-bg">
                                                <div
                                                    className="top_matches__winnercard-title d-flex align-items-center gap-2 mb-5 mb-md-6">
                                                    <Image src="/images/icon/outrights-hugary.png" width={30} height={30} alt="Icon" />
                                                    <div className="top_matches__winnercard-obi">
                                                        <span className="mb-3">Jan 1, 2024, 10:00</span>
                                                        <h5>OB I - Winner</h5>
                                                    </div>
                                                </div>
                                                <div className="row gy-2">
                                                    <div className="col-sm-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>rencvarosi TC Waterpolo</span>
                                                                <span>4.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>OSC Budapest</span>
                                                                <span>7.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3">
                                                                <span>Kaposvari VK</span>
                                                                <span>1000.0</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Van Aert, Wout</span>
                                                                <span>6.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Mohoric, Matej</span>
                                                                <span>8.0</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 opacity-50">
                                                                <span>PVSK Fuszert</span>
                                                                <span>-</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Ganna, Filippo</span>
                                                                <span>6.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Pedersen, Mads</span>
                                                                <span>8.0</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 opacity-50">
                                                                <span>UVSE</span>
                                                                <span>-</span>
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
