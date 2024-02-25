"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HeaderMain() {

  return (
    <>
    <header className="header-section2 header-section">
        <nav className="navbar navbar-expand-lg position-relative py-md-3 py-lg-6 workready">
            <div className="collapse navbar-collapse justify-content-between" id="navbar-content">
                <ul
                    className="navbar-nav2fixed  navbar-nav d-flex align-items-lg-center gap-4 gap-sm-5  py-2 py-lg-0 align-self-center p2-bg">
                    <li className="dropdown show-dropdown">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="dropdown show-dropdown">
                        <Link href="floorball.html">Live Betting</Link>
                    </li>
                    <li className="dropdown show-dropdown">
                        <Link href="soccer.html">Sports</Link>
                    </li>
                    <li className="dropdown show-dropdown">
                        <Link href="ecricket.html">eSports</Link>
                    </li>
                    <li className="dropdown show-dropdown">
                        <Link href="cycling.html">Racing</Link>
                    </li>
                    <li className="dropdown show-dropdown">
                        <Link href="promotions.html">Promotions</Link>
                    </li>
                    <li className="dropdown show-dropdown d-block d-sm-none">
                        <div className="d-flex align-items-center flex-wrap gap-3">
                            <Link href="login.html" className="cmn-btn second-alt px-xxl-11 rounded-2">Log In</Link>
                        <Link href="create-acount.html" className="cmn-btn px-xxl-11">Sign Up</Link>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="right-area custom-pos position-relative d-flex gap-0 gap-lg-7 align-items-center me-5 me-xl-10">
                <div className="language-area">
                    <div className="translate_wrapper">
                        <div className="current_lang">
                            <div className="lang d-flex align-items-center gap-2">
                                <Image className="rounded-5" width={16} height={16} src="/images/icon/lang-usa.png" alt="icon" />
                                <span className="lang-txt">EN</span>
                                <i className="ti ti-arrow-badge-down-filled fs-five n5-color respon-icon"></i>
                            </div>
                        </div>
                        <div className="more_lang">
                            <div className="lang" data-value='cn'>
                                <Image className="rounded-5" width={16} height={16} src="/images/icon/lang-china.png" alt="icon" />
                                <span className="lang-txt">简体中文</span>
                            </div>
                            <div className="lang selected" data-value='en'>
                                <Image className="rounded-5" width={16} height={16} src="/images/icon/lang-usa.png" alt="icon" />
                                <span className="lang-txt">English</span>
                            </div>

                            <div className="lang" data-value='de'>
                                <Image className="rounded-5" width={16} height={16} src="/images/icon/lang-brazil.png" alt="icon" />
                                <span className="lang-txt">Brazil</span>
                            </div>
                            <div className="lang" data-value='es'>
                                <Image className="rounded-5" width={16} height={16} src="/images/icon/lang-canada.png" alt="icon" />
                                <span className="lang-txt">Canada</span>
                            </div>
                            <div className="lang" data-value='fr'>
                                <Image className="rounded-5" width={16} height={16} src="/images/icon/lang-france.png" alt="icon" />
                                <span className="lang-txt">France</span>
                            </div>
                            <div className="lang" data-value="pt">
                                <Image className="rounded-5" width={16} height={16} src="/images/icon/lang-italy.png" alt="icon" />
                                <span className="lang-txt">Italy</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href="/login" className="cmn-btn second-alt px-xxl-11 rounded-2 me-5 me-lg-0 d-none d-sm-block">Log In</Link>
                <Link href="/create-acount" className="cmn-btn d-none px-xxl-11 d-sm-block d-lg-none d-xl-block">Sign Up</Link>
            </div>
            <button className="navbar-toggler mt-1 mt-sm-2 mt-lg-0" type="button" data-bs-toggle="collapse" aria-label="Navbar Toggler"
                data-bs-target="#navbar-content" aria-expanded="true" id="nav-icon3">
                <span></span><span></span><span></span><span></span>
            </button>
        </nav>
        <div id="div10" className="navigation left-nav-area box3  position-fixed">
            <div
                className="logo-area slide-toggle3 trader-list position-fixed top-0 d-flex align-items-center justify-content-center pt-6 pt-md-8 gap-sm-4 gap-md-5 gap-lg-7 px-4 px-lg-8">
                <i className="ti ti-menu-deep left-nav-icon n8-color order-2 order-lg-0 d-none">
                </i>
                <Link className="navbar-brand d-center text-center gap-1 gap-lg-2 ms-lg-4" href="/">
                    <Image className="logo" width={32} height={34} src="/images/logo.png" alt="Logo" />
                    <Image className="logo d-none d-xl-block" width={64} height={24} src="/images/logo-text.png" alt="Logo" />
                </Link>
            </div>
            <div className="nav_aside px-5 p2-bg">
                <div className="nav-clsoeicon">
                    <i className="ti ti-x left-nav-icon n8-color order-2 order-lg-0 d-block d-lg-none fs-three">
                        menu
                    </i>
                </div>
                <ul className="secend-actives bg1-color rounded-5 d-flex flex-column gap-5 mb-5">
                    <li className="active">
                        <Link href="/" className="d-flex align-items-center gap-2"><i
                                className="ti ti-brand-google-home n5-color fs-five"></i> Home</Link>
                    </li>
                    <li className="active">
                        <Link href="javascript:void(0)" className="d-flex align-items-center gap-2"><i
                                className="ti ti-garden-cart n5-color fs-five"></i>
                            Marketplace</Link>
                    </li>
                    <li className="active">
                        <Link href="efighting.html" className="d-flex align-items-center gap-2"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22"
                                fill="none">
                                <path
                                    d="M12 7.35176C12.6243 7.35116 13.228 7.55648 13.7008 7.9302C14.1735 8.30392 14.4838 8.82109 14.5749 9.38722C14.6661 9.95334 14.5319 10.5306 14.197 11.0136C13.8622 11.4965 13.3489 11.8529 12.751 12.0176L12.75 18.7643C12.75 18.9385 12.6778 19.1061 12.5481 19.2334C12.4183 19.3607 12.2407 19.4381 12.0512 19.45C11.8616 19.4618 11.6741 19.4073 11.5267 19.2974C11.3793 19.1874 11.2829 19.0303 11.257 18.8578L11.25 18.7643V12.0176C10.6536 11.8518 10.142 11.4951 9.80827 11.0126C9.47457 10.53 9.34098 9.95367 9.43184 9.38845C9.5227 8.82322 9.83195 8.3067 10.3033 7.93289C10.7747 7.55909 11.3768 7.35287 12 7.35176ZM6.55404 2.80968C6.62046 2.87641 6.67189 2.95449 6.70537 3.03945C6.73886 3.12441 6.75376 3.21458 6.74921 3.30482C6.74466 3.39506 6.72075 3.48359 6.67885 3.56536C6.63696 3.64712 6.57789 3.72052 6.50504 3.78135C6.16836 4.06261 5.85546 4.3669 5.56904 4.6916C4.84314 5.46756 4.29112 6.367 3.9445 7.33855C3.59787 8.3101 3.46344 9.33473 3.54887 10.3539C3.63431 11.3731 3.93793 12.3669 4.44241 13.2785C4.94689 14.1901 5.64234 15.0017 6.48904 15.6668C6.56531 15.7252 6.62817 15.7969 6.67396 15.8777C6.71976 15.9586 6.74758 16.0469 6.7558 16.1377C6.76403 16.2285 6.75249 16.3198 6.72187 16.4065C6.69125 16.4931 6.64215 16.5733 6.57743 16.6424C6.51271 16.7115 6.43365 16.7682 6.34485 16.809C6.25605 16.8499 6.15927 16.8742 6.06015 16.8805C5.96103 16.8867 5.86153 16.8749 5.76743 16.8457C5.67334 16.8164 5.58653 16.7703 5.51204 16.71C3.50329 15.1313 2.25984 12.8866 2.05455 10.4684C1.84926 8.05022 2.69891 5.65617 4.41704 3.8116C4.74704 3.43851 5.10704 3.08743 5.49504 2.76476C5.56783 2.70388 5.65301 2.65674 5.74569 2.62604C5.83837 2.59534 5.93675 2.58169 6.03519 2.58586C6.13363 2.59003 6.23021 2.61194 6.31941 2.65035C6.40861 2.68875 6.48768 2.7429 6.55404 2.80968ZM18.494 2.7556C18.906 3.08651 19.288 3.44676 19.633 3.8281C23.187 7.6781 22.674 13.4393 18.487 16.7118C18.3356 16.8302 18.1391 16.8886 17.9406 16.8742C17.7422 16.8598 17.5582 16.7737 17.429 16.6348C17.2999 16.496 17.2362 16.3159 17.2519 16.134C17.2677 15.9521 17.3616 15.7834 17.513 15.665C21.073 12.8838 21.508 7.98885 18.483 4.71085C18.184 4.38064 17.857 4.0726 17.505 3.7896C17.3555 3.66926 17.2641 3.49937 17.2512 3.31732C17.2383 3.13527 17.3048 2.95596 17.436 2.81885C17.5673 2.68173 17.7526 2.59804 17.9512 2.58617C18.1498 2.57431 18.3455 2.63526 18.495 2.7556H18.494ZM16.078 5.31676C16.333 5.51568 16.572 5.73201 16.802 5.97126C17.3405 6.55061 17.7489 7.22168 18.0039 7.946C18.2589 8.67032 18.3554 9.43365 18.288 10.1922C18.2206 10.9508 17.9904 11.6897 17.6109 12.3667C17.2313 13.0436 16.7097 13.6451 16.076 14.1369C16.0011 14.1967 15.914 14.2422 15.8198 14.2708C15.7255 14.2995 15.626 14.3107 15.527 14.3038C15.428 14.2969 15.3315 14.272 15.243 14.2307C15.1545 14.1893 15.0759 14.1323 15.0117 14.0629C14.9475 13.9934 14.899 13.913 14.8689 13.8263C14.8389 13.7395 14.8279 13.6482 14.8367 13.5575C14.8455 13.4668 14.8738 13.3787 14.92 13.2981C14.9663 13.2176 15.0295 13.1462 15.106 13.0883C15.5885 12.714 15.9857 12.2563 16.2751 11.7413C16.5645 11.2262 16.7403 10.664 16.7925 10.0866C16.8447 9.50925 16.7722 8.92813 16.5793 8.37645C16.3864 7.82477 16.0767 7.31335 15.668 6.87143C15.4934 6.68953 15.3049 6.51922 15.104 6.36176C15.0261 6.30403 14.9615 6.23256 14.9141 6.15156C14.8668 6.07057 14.8377 5.9817 14.8284 5.8902C14.8192 5.79871 14.8301 5.70645 14.8604 5.61887C14.8907 5.53129 14.9399 5.45017 15.005 5.38031C15.0701 5.31045 15.1499 5.25327 15.2395 5.21214C15.3291 5.171 15.4269 5.14676 15.5269 5.14083C15.6269 5.13491 15.7272 5.14742 15.8219 5.17764C15.9166 5.20786 16.0037 5.25517 16.078 5.31676ZM7.92404 5.31676C7.99841 5.25517 8.08551 5.20786 8.18017 5.17764C8.27484 5.14742 8.37515 5.13491 8.47518 5.14083C8.57521 5.14676 8.67293 5.171 8.76256 5.21214C8.8522 5.25327 8.93193 5.31045 8.99704 5.38031C9.06215 5.45017 9.11133 5.53129 9.14166 5.61887C9.17199 5.70645 9.18286 5.79871 9.17363 5.8902C9.1644 5.9817 9.13526 6.07057 9.08792 6.15156C9.04059 6.23256 8.97602 6.30403 8.89804 6.36176C8.69704 6.51943 8.50804 6.68993 8.34204 6.86226C7.93137 7.30396 7.61987 7.81563 7.42541 8.36793C7.23094 8.92022 7.15733 9.50228 7.2088 10.0807C7.26027 10.6591 7.4358 11.2226 7.72534 11.7387C8.01487 12.2548 8.41271 12.7134 8.89604 13.0883C9.04486 13.2069 9.13668 13.3746 9.15161 13.5549C9.16654 13.7352 9.10338 13.9136 8.97581 14.0516C8.84823 14.1895 8.66652 14.2758 8.47004 14.2918C8.27355 14.3077 8.0781 14.2521 7.92604 14.1369C7.29146 13.6445 6.7693 13.042 6.38956 12.364C6.00982 11.6861 5.77998 10.946 5.71326 10.1863C5.64654 9.42667 5.74425 8.66241 6.00077 7.93747C6.2573 7.21254 6.66758 6.54122 7.20804 5.9621C7.42976 5.73175 7.66903 5.51609 7.92404 5.31676ZM12 8.72676C11.8556 8.72676 11.7125 8.75285 11.5791 8.80352C11.4456 8.85419 11.3244 8.92847 11.2222 9.0221C11.1201 9.11573 11.039 9.22689 10.9838 9.34923C10.9285 9.47156 10.9 9.60268 10.9 9.7351C10.9 9.86751 10.9285 9.99863 10.9838 10.121C11.039 10.2433 11.1201 10.3545 11.2222 10.4481C11.3244 10.5417 11.4456 10.616 11.5791 10.6667C11.7125 10.7174 11.8556 10.7434 12 10.7434C12.2918 10.7434 12.5716 10.6372 12.7779 10.4481C12.9841 10.259 13.1 10.0025 13.1 9.7351C13.1 9.46767 12.9841 9.2112 12.7779 9.0221C12.5716 8.833 12.2918 8.72676 12 8.72676Z"
                                    fill="#BDC2D1" />
                            </svg> In-Play</Link>
                    </li>
                </ul>
                <hr className="py-0 my-0" />
                <h5 className="mb-4 mb-md-6 mt-4 mt-md-6">Popular</h5>
                <ul className="aside_namelist d-flex flex-column gap-2">
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/soccer" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/soccer-icon.png" alt="icon" />Soccer</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/tennis" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/soccer-icon.png" alt="icon" />Tennis</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/basketball" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/basketball.png" alt="icon" />Basketball</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/cricket" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/cricket.png" alt="icon" />Cricket</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/ecricket" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/ecricket.png" alt="icon" />eCricket</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/american-football" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/america-football.png" alt="icon" />American Football</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/ice-hockey" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/ice-hockey.png" alt="icon" />Ice Hockey</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/nba-2k" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/nba2k.png" alt="icon" />NBA 2K</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/volleyball" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/volleyball.png" alt="icon" />Volleyball</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/fifa-volta" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/fifa-volta.png" alt="icon" />FIFA: Volta</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/penalty-shootout" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/penalty-shootout.png" alt="icon" />Penalty Shootout </Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/handball" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/handball.png" alt="icon" />Handball</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/table-tennis" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/table-tennis.png" alt="icon" />Table Tennis</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                </ul>
                <hr className="py-0 my-5" />
                <h5 className="mb-4 mb-md-6">Other sports</h5>
                <ul className="aside_namelist d-flex flex-column gap-2 mb-15">
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/kabaddi" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/kabaddi.png" alt="icon" />Kabaddi</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/efighting" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/efighting.png" alt="icon" />eFighting</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/erocket-league" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/erocket-league.png" alt="icon" />eRocket League</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/aussie-rules" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/aussie-rules.png" alt="icon" />Aussie Rules </Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/rugby" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/rugby.png" alt="icon" />Rugby </Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/eshooter" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/eshooter.png" alt="icon" />eShooter</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/boxing" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/boxing.png" alt="icon" />Boxing</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/mma" className="d-flex align-items-center gap-2"><Image width={16} height={16} src="/images/icon/mma.png/"
                                alt="icon" />MMA</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/futsal" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/futsal.png" alt="icon" />Futsal</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/bandy" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/bandy.png" alt="icon" />Bandy</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/waterpolo" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/waterpolo.png" alt="icon" />Waterpolo</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/floorball" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/floorball.png" alt="icon" />Floorball</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/cycling" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/cycling.png" alt="icon" />Cycling</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/specials" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/specials.png" alt="icon" />Specials</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/darts" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/darts.png" alt="icon" />Darts </Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/squash" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/squash.png" alt="icon" />Squash</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                    <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                        <Link href="/wrestling" className="d-flex align-items-center gap-2"><Image
                                width={16} height={16} src="/images/icon/wrestling.png" alt="icon" />Wrestling</Link>
                        <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    <button type="button" className="middle-iconfixed position-fixed top-50 start-0 left-nav-icon">
        <i className="ti ti-adjustments-horizontal n8-color d-block d-lg-none fs-two">
            menu
        </i>
    </button>
    </>
  )
}
