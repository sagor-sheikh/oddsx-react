import HeaderMain from '@/components/Shared/HeaderMain';
import Hungary from '@/components/Pages/Waterpolo/Hungary';
import Image from 'next/image';
import Internationa from '@/components/Pages/Waterpolo/Internationa';

export default function page() {
    return (
        <>
            <HeaderMain />
            <Hungary />
            <Internationa />
            <section className="top_matches pb-8 pb-md-10">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 gx-0 gx-sm-4">
                            <div className="top_matches__main pt-20">
                                <div className="row w-100 mb-7 mb-md-8">
                                    <div className="col-12 pe-0">
                                        <div className="top_matches__title d-flex align-items-center gap-sm-2 mb-4 mb-md-5 flex-wrap flex-sm-nowrap">
                                            <i className="ti ti-calendar-event fs-three"></i>
                                            <div className="d-flex align-items-center gap-1">
                                                <h3>Outrights International</h3>
                                                <i className="ti ti-arrow-badge-up fs-four cpoint"></i>
                                            </div>
                                        </div>
                                        <div className="top_matches__content">
                                            <div className="top_matches__winnercard p-4 p-sm-5 p-md-6 rounded-3 p2-bg">
                                                <div
                                                    className="top_matches__winnercard-title d-flex align-items-center gap-2 mb-5 mb-md-6 flex-wrap flex-sm-nowrap">
                                                    <Image src="/images/icon/outrights-hugary.png" width={30} height={30} alt="Icon" />
                                                    <div className="top_matches__winnercard-obi">
                                                        <span className="mb-3">In 2 days, 11:00</span>
                                                        <h5>LEN Champions League - Winner</h5>
                                                    </div>
                                                </div>
                                                <div className="row gy-2">
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Pro Recco</span>
                                                                <span>4.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Ferencvarosi TC Waterpolo</span>
                                                                <span>7.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3">
                                                                <span>CN Marseille</span>
                                                                <span>80.0</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Olympiakos</span>
                                                                <span>6.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>CNA Barceloneta</span>
                                                                <span>8.0</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3">
                                                                <span>AN Brescia</span>
                                                                <span>98.0</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Vk Novi Belgrade</span>
                                                                <span>6.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Vk Jadran Split</span>
                                                                <span>8.0</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 opacity-50">
                                                                <span>Cn Sabadell</span>
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
                                <div className="row w-100 mb-7 mb-md-8">
                                    <div className="col-12 pe-0">
                                        <div className="top_matches__content">
                                            <div className="top_matches__winnercard p-4 p-sm-5 p-md-6 rounded-3 p2-bg">
                                                <div
                                                    className="top_matches__winnercard-title d-flex align-items-center gap-2 mb-5 mb-md-6 flex-wrap flex-sm-nowrap">
                                                    <Image src="/images/icon/outrights-hugary.png" width={30} height={30} alt="Icon" />
                                                    <div className="top_matches__winnercard-obi">
                                                        <span className="mb-3">Jan 1, 2024, 10:00</span>
                                                        <h5>LEN Champions League - Winner</h5>
                                                    </div>
                                                </div>
                                                <div className="row gy-2">
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Cn Mataro</span>
                                                                <span>4.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Cn Sant Andreu</span>
                                                                <span>7.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 opacity-50">
                                                                <span>Sis Roma</span>
                                                                <span>-</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Cn Sabadell</span>
                                                                <span>6.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Cn Terrassa</span>
                                                                <span>8.0</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 opacity-50">
                                                                <span>Dunaujvaros</span>
                                                                <span>-</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Olympiakos Piraeus</span>
                                                                <span>6.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>No Vouliagmenis</span>
                                                                <span>8.0</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 opacity-50">
                                                                <span>Alimos Nas</span>
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
                                <div className="row w-100 mb-7 mb-md-8">
                                    <div className="col-12 pe-0">
                                        <div className="top_matches__content">
                                            <div className="top_matches__winnercard p-4 p-sm-5 p-md-6 rounded-3 p2-bg">
                                                <div
                                                    className="top_matches__winnercard-title d-flex align-items-center gap-2 mb-5 mb-md-6 flex-wrap flex-sm-nowrap">
                                                    <Image src="/images/icon/outrights-hugary.png" width={30} height={30} alt="Icon" />
                                                    <div className="top_matches__winnercard-obi">
                                                        <span className="mb-3">Jan 5, 2024, 14:00</span>
                                                        <h5>European Championships 2024 Women - Group D - Winner</h5>
                                                    </div>
                                                </div>
                                                <div className="row gy-2">
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Great Britain</span>
                                                                <span>4.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Bulgaria</span>
                                                                <span>7.5</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3">
                                                                <span>Germany</span>
                                                                <span>6.5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3">
                                                                <span>Slovakia</span>
                                                                <span>6.5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row w-100 mb-7 mb-md-8">
                                    <div className="col-12 pe-0">
                                        <div className="top_matches__content">
                                            <div className="top_matches__winnercard p-4 p-sm-5 p-md-6 rounded-3 p2-bg">
                                                <div
                                                    className="top_matches__winnercard-title d-flex align-items-center gap-2 mb-5 mb-md-6 flex-wrap flex-sm-nowrap">
                                                    <Image src="/images/icon/outrights-hugary.png" width={30} height={30} alt="Icon" />
                                                    <div className="top_matches__winnercard-obi">
                                                        <span className="mb-3">Jan 5, 2024, 14:00</span>
                                                        <h5>European Championships 2024 Women - Group D - Winner</h5>
                                                    </div>
                                                </div>
                                                <div className="row gy-2">
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Netherlands</span>
                                                                <span>4.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Croatia</span>
                                                                <span>7.5</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3">
                                                                <span>Hungary</span>
                                                                <span>6.5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3">
                                                                <span>Greece</span>
                                                                <span>6.5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row w-100 mb-7 mb-md-8">
                                    <div className="col-12 pe-0">
                                        <div className="top_matches__content">
                                            <div className="top_matches__winnercard p-4 p-sm-5 p-md-6 rounded-3 p2-bg">
                                                <div
                                                    className="top_matches__winnercard-title d-flex align-items-center gap-2 mb-5 mb-md-6 flex-wrap flex-sm-nowrap">
                                                    <Image src="/images/icon/outrights-hugary.png" width={30} height={30} alt="Icon" />
                                                    <div className="top_matches__winnercard-obi">
                                                        <span className="mb-3">Jan 1, 2024, 10:00</span>
                                                        <h5>LEN Champions League - Winner</h5>
                                                    </div>
                                                </div>
                                                <div className="row gy-2">
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Cn Mataro</span>
                                                                <span>4.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Cn Sant Andreu</span>
                                                                <span>7.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 opacity-50">
                                                                <span>Sis Roma</span>
                                                                <span>-</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Cn Sabadell</span>
                                                                <span>6.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Cn Terrassa</span>
                                                                <span>8.0</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 opacity-50">
                                                                <span>Dunaujvaros</span>
                                                                <span>-</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Olympiakos Piraeus</span>
                                                                <span>6.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>No Vouliagmenis</span>
                                                                <span>8.0</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 opacity-50">
                                                                <span>Alimos Nas</span>
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
                                <div className="row w-100 mb-7 mb-md-8">
                                    <div className="col-12 pe-0">
                                        <div className="top_matches__content">
                                            <div className="top_matches__winnercard p-4 p-sm-5 p-md-6 rounded-3 p2-bg">
                                                <div
                                                    className="top_matches__winnercard-title d-flex align-items-center gap-2 mb-5 mb-md-6 flex-wrap flex-sm-nowrap">
                                                    <Image src="/images/icon/outrights-hugary.png" width={30} height={30} alt="Icon" />
                                                    <div className="top_matches__winnercard-obi">
                                                        <span className="mb-3">Jan 5, 2024, 14:00</span>
                                                        <h5>European Championships 2024 Women - Group D - Winner</h5>
                                                    </div>
                                                </div>
                                                <div className="row gy-2">
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Netherlands</span>
                                                                <span>4.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Croatia</span>
                                                                <span>7.5</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3">
                                                                <span>Hungary</span>
                                                                <span>6.5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3">
                                                                <span>Greece</span>
                                                                <span>6.5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row w-100 mb-7 mb-md-8">
                                    <div className="col-12 pe-0">
                                        <div className="top_matches__content">
                                            <div className="top_matches__winnercard p-4 p-sm-5 p-md-6 rounded-3 p2-bg">
                                                <div
                                                    className="top_matches__winnercard-title d-flex align-items-center gap-2 mb-5 mb-md-6 flex-wrap flex-sm-nowrap">
                                                    <Image src="/images/icon/outrights-hugary.png" width={30} height={30} alt="Icon" />
                                                    <div className="top_matches__winnercard-obi">
                                                        <span className="mb-3">Jan 5, 2024, 14:00</span>
                                                        <h5>European Championships 2024 Women - Group A - Winner</h5>
                                                    </div>
                                                </div>
                                                <div className="row gy-2">
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Spain</span>
                                                                <span>4.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>France</span>
                                                                <span>7.5</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3">
                                                                <span>roatia</span>
                                                                <span>6.5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3">
                                                                <span>Montenegro</span>
                                                                <span>6.5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row w-100 mb-7 mb-md-8">
                                    <div className="col-12 pe-0">
                                        <div className="top_matches__content">
                                            <div className="top_matches__winnercard p-4 p-sm-5 p-md-6 rounded-3 p2-bg">
                                                <div
                                                    className="top_matches__winnercard-title d-flex align-items-center gap-2 mb-5 mb-md-6 flex-wrap flex-sm-nowrap">
                                                    <Image src="/images/icon/outrights-hugary.png" width={30} height={30} alt="Icon" />
                                                    <div className="top_matches__winnercard-obi">
                                                        <span className="mb-3">Jan 5, 2024, 14:00</span>
                                                        <h5>European Championships 2024 Women - Group C - Winner</h5>
                                                    </div>
                                                </div>
                                                <div className="row gy-2">
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Serbia</span>
                                                                <span>4.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Malta</span>
                                                                <span>7.5</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3">
                                                                <span>Germany</span>
                                                                <span>6.5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3">
                                                                <span>Israel</span>
                                                                <span>6.5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row w-100 mb-7 mb-md-8">
                                    <div className="col-12 pe-0">
                                        <div className="top_matches__content">
                                            <div className="top_matches__winnercard p-4 p-sm-5 p-md-6 rounded-3 p2-bg">
                                                <div
                                                    className="top_matches__winnercard-title d-flex align-items-center gap-2 mb-5 mb-md-6 flex-wrap flex-sm-nowrap">
                                                    <Image src="/images/icon/outrights-hugary.png" width={30} height={30} alt="Icon" />
                                                    <div className="top_matches__winnercard-obi">
                                                        <span className="mb-3">Jan 5, 2024, 14:00</span>
                                                        <h5>European Championships 2024 Women - Group B - Winner</h5>
                                                    </div>
                                                </div>
                                                <div className="row gy-2">
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Hungary</span>
                                                                <span>4.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Georgia</span>
                                                                <span>7.5</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3">
                                                                <span>Greece</span>
                                                                <span>6.5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3">
                                                                <span>Italy</span>
                                                                <span>6.5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row w-100 mb-7 mb-md-8">
                                    <div className="col-12 pe-0">
                                        <div className="top_matches__content">
                                            <div className="top_matches__winnercard p-4 p-sm-5 p-md-6 rounded-3 p2-bg">
                                                <div
                                                    className="top_matches__winnercard-title d-flex align-items-center gap-2 mb-5 mb-md-6 flex-wrap flex-sm-nowrap">
                                                    <Image src="/images/icon/outrights-hugary.png" width={30} height={30} alt="Icon" />
                                                    <div className="top_matches__winnercard-obi">
                                                        <span className="mb-3">Jan 5, 2024, 14:00</span>
                                                        <h5>European Championships 2024 Women - Group D - Winner</h5>
                                                    </div>
                                                </div>
                                                <div className="row gy-2">
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Netherlands</span>
                                                                <span>7.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Romania</span>
                                                                <span>6.5</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3">
                                                                <span>Slovakia</span>
                                                                <span>6.5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3">
                                                                <span>Greece</span>
                                                                <span>6.5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row w-100 mb-7 mb-md-8">
                                    <div className="col-12 pe-0">
                                        <div className="top_matches__content">
                                            <div className="top_matches__winnercard p-4 p-sm-5 p-md-6 rounded-3 p2-bg">
                                                <div
                                                    className="top_matches__winnercard-title d-flex align-items-center gap-2 mb-5 mb-md-6 flex-wrap flex-sm-nowrap">
                                                    <Image src="/images/icon/outrights-hugary.png" width={30} height={30} alt="Icon" />
                                                    <div className="top_matches__winnercard-obi">
                                                        <span className="mb-3">Jan 1, 2024, 10:00</span>
                                                        <h5>LEN Champions League - Winner</h5>
                                                    </div>
                                                </div>
                                                <div className="row gy-2">
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Spain</span>
                                                                <span>4.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Greece</span>
                                                                <span>7.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3">
                                                                <span>Montenegro</span>
                                                                <span>12.6</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Croatia</span>
                                                                <span>6.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Italy</span>
                                                                <span>8.0</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3">
                                                                <span>France</span>
                                                                <span>6.3</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Hungary</span>
                                                                <span>6.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Serbia</span>
                                                                <span>8.0</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3">
                                                                <span>Germany</span>
                                                                <span>7.55</span>
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
                                <div className="row w-100 mb-8 mb-md-10">
                                    <div className="col-12 pe-0">
                                        <div className="top_matches__title d-flex align-items-center gap-sm-2 mb-4 mb-md-5 flex-wrap flex-sm-nowrap">
                                            <i className="ti ti-calendar-event fs-three"></i>
                                            <div className="d-flex align-items-center gap-1">
                                                <h3>Outrights Italy</h3>
                                                <i className="ti ti-arrow-badge-up fs-four cpoint"></i>
                                            </div>
                                        </div>
                                        <div className="top_matches__content">
                                            <div className="top_matches__winnercard p-4 p-sm-5 p-md-6 rounded-3 p2-bg">
                                                <div
                                                    className="top_matches__winnercard-title d-flex align-items-center gap-2 mb-5 mb-md-6 flex-wrap flex-sm-nowrap">
                                                    <Image src="/images/icon/outrights-hugary.png" width={30} height={30} alt="Icon" />
                                                    <div className="top_matches__winnercard-obi">
                                                        <span className="mb-3">In 2 days, 11:00</span>
                                                        <h5>Serie A1 - Winner</h5>
                                                    </div>
                                                </div>
                                                <div className="row gy-2">
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Pro Recco</span>
                                                                <span>4.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>CC Ortigia</span>
                                                                <span>7.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3">
                                                                <span>CN Posillipo</span>
                                                                <span>1000.0</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>RN Savona</span>
                                                                <span>6.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Teli Mar</span>
                                                                <span>8.0</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 opacity-50">
                                                                <span>Roma Vis Nova</span>
                                                                <span>-</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
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
                                                                <span>SC Quinto</span>
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
