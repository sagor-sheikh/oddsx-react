"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function LogRegHeader() {

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
                </div>
            </header>
        </>
    )
}
