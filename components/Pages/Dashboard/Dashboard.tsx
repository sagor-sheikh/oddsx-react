"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { IconWallet, IconCreditCard, IconCreditCardOff, IconLogout, IconUser, IconSettings, IconBellRinging, IconHistory, } from "@tabler/icons-react";
import { amountData } from '@/public/data/dashBoard';
import DepositCard from './DepositCard';
import DepositAmount from './DepositAmount';
import { Tab } from '@headlessui/react';

export default function Dashboard() {
    const [activeItem, setActiveItem] = useState(amountData[0]);

    const handleClick = (itemName: any) => {
        setActiveItem(itemName);
    };
    const getItemStyle = (itemName: any) => {
        return {
            border: `1px solid ${activeItem === itemName ? '#35C31E' : '#2C3655'}`,
        };
    };
    return (
        <>
            <section className="pay_method pb-120">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 gx-0 gx-sm-4">
                            <div className="hero_area__main">
                                <div className="row gy-6 gy-xxl-0 singletab">
                                    <div className="col-xxl-3">
                                        <div className="pay_method__scrol">
                                            <ul
                                                className="tablinks pay_method__scrollbar p2-bg p-5 p-md-6 rounded-4 d-flex align-items-center justify-content-center flex-xxl-column gap-3 gap-xxl-2">
                                                <ul className="nav-links active p-3  rounded-3 cpoint d-inline-block">
                                                    <button className="tablink active d-flex align-items-center gap-2">
                                                        <IconWallet className="ti ti-wallet fs-five n5-color" />
                                                        <span>Deposit</span></button>
                                                </ul>
                                                <ul className="nav-links p-3  rounded-3 cpoint d-inline-block">
                                                    <button className="tablink d-flex align-items-center gap-2">
                                                        <IconCreditCard className="ti ti-credit-card fs-five n5-color" />
                                                        <span>Withdrawal</span>
                                                    </button>
                                                </ul>
                                                <ul className="nav-links p-3  rounded-3 cpoint d-inline-block">
                                                    <button className="tablink d-flex align-items-center gap-2"><IconCreditCardOff
                                                        className="ti ti-credit-card-off fs-five n5-color" /> <span
                                                            className="text-nowrap">Cancel withdrawal</span>
                                                    </button>
                                                </ul>
                                                <ul className="nav-links p-3  rounded-3 cpoint d-inline-block">
                                                    <button className="tablink d-flex align-items-center gap-2"><IconHistory
                                                        className="ti ti-history fs-five n5-color" /> <span
                                                            className="text-nowrap">Balance History</span>
                                                    </button>
                                                </ul>
                                                <ul className="nav-links p-3  rounded-3 cpoint d-inline-block">
                                                    <button className="tablink d-flex align-items-center gap-2"><IconUser
                                                        className="ti ti-user fs-five n5-color" /> <span>Profile</span>
                                                    </button>
                                                </ul>
                                                <ul className="nav-links p-3  rounded-3 cpoint d-inline-block">
                                                    <button className="tablink d-flex align-items-center gap-2"><IconSettings
                                                        className="ti ti-settings fs-five n5-color" /> <span>Settings</span>
                                                    </button>
                                                </ul>
                                                <ul className="nav-links p-3  rounded-3 cpoint d-inline-block">
                                                    <button className="tablink d-flex align-items-center gap-2"><IconBellRinging
                                                        className="ti ti-bell-ringing fs-five n5-color" />
                                                        <span>Notifications</span>
                                                    </button>
                                                </ul>
                                                <ul className="nav-links p-3  rounded-3 cpoint d-inline-block">
                                                    <button className="tablink d-flex align-items-center gap-2"><IconLogout
                                                        className="ti ti-logout fs-five n5-color" /> <a href="#"
                                                            className="text-nowrap">Log out</a>
                                                    </button>
                                                </ul>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xxl-9">
                                        <div className="tabcontents">
                                            <div className="tabitem active">
                                                <div className="pay_method__paymethod p-4 p-lg-6 p2-bg rounded-8 mb-8 mb-md-10">
                                                    <div
                                                        className="pay_method__paymethod-title d-flex align-items-center gap-3 mb-6 mb-md-8">
                                                        <i className="ti ti-credit-card fs-four g1-color"></i>
                                                        <h5 className="n10-color">Payment methods</h5>
                                                    </div>
                                                    <div className="pay_method__paymethod-alitem">
                                                        <div className="row gx-4 gy-4">
                                                            <DepositCard />
                                                        </div>
                                                    </div>
                                                </div>
                                                <DepositAmount />
                                            </div>
                                            <div className="tabitem">
                                                <div className="pay_method__paymethod p-4 p-lg-6 p2-bg rounded-8 mb-8 mb-md-10">
                                                    <div
                                                        className="pay_method__paymethod-title d-flex align-items-center gap-3 mb-6 mb-md-8">
                                                        <i className="ti ti-credit-card fs-four g1-color"></i>
                                                        <h5 className="n10-color">Payment methods</h5>
                                                    </div>
                                                    <div className="pay_method__paymethod-alitem">
                                                        <div className="row gx-4 gy-4">
                                                            <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3 col-xxl-2">
                                                                <div
                                                                    className="pay_method__paymethod-item pay-methods active p-2 rounded-3 cpoint">
                                                                    <Image src="/images/visa-card.png" height={70} width={172} alt="Image" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3 col-xxl-2">
                                                                <div
                                                                    className="pay_method__paymethod-item pay-methods p-2 rounded-3 cpoint">
                                                                    <Image src="/images/mastercard2.png" height={70} width={172} alt="Image" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3 col-xxl-2">
                                                                <div
                                                                    className="pay_method__paymethod-item pay-methods p-2 rounded-3 cpoint">
                                                                    <Image src="/images/skrill2.png" height={70} width={172} alt="Image" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3 col-xxl-2">
                                                                <div
                                                                    className="pay_method__paymethod-item pay-methods p-2 rounded-3 cpoint">
                                                                    <Image src="/images/neteller2.png" height={70} width={172} alt="Image" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3 col-xxl-2">
                                                                <div
                                                                    className="pay_method__paymethod-item pay-methods p-2 rounded-3 cpoint">
                                                                    <Image src="/images/payz.png" height={70} width={172} alt="Image" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3 col-xxl-2">
                                                                <div
                                                                    className="pay_method__paymethod-item pay-methods p-2 rounded-3 cpoint">
                                                                    <Image src="/images/astropay.png" height={70} width={172} alt="Image" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3 col-xxl-2">
                                                                <div
                                                                    className="pay_method__paymethod-item pay-methods p-2 rounded-3 cpoint">
                                                                    <Image src="/images/jeton.png" height={70} width={172} alt="Image" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3 col-xxl-2">
                                                                <div
                                                                    className="pay_method__paymethod-item pay-methods p-2 rounded-3 cpoint">
                                                                    <Image src="/images/mifinity.png" height={70} width={172} alt="Image" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3 col-xxl-2">
                                                                <div
                                                                    className="pay_method__paymethod-item pay-methods p-2 rounded-3 cpoint">
                                                                    <Image src="/images/tether-sol.png" height={70} width={172} alt="Image" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3 col-xxl-2">
                                                                <div
                                                                    className="pay_method__paymethod-item pay-methods p-2 rounded-3 cpoint">
                                                                    <Image src="/images/tether-erc20.png" height={70} width={172} alt="Image" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3 col-xxl-2">
                                                                <div
                                                                    className="pay_method__paymethod-item pay-methods p-2 rounded-3 cpoint">
                                                                    <Image src="/images/tether-trc20.png" height={70} width={172} alt="Image" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3 col-xxl-2">
                                                                <div
                                                                    className="pay_method__paymethod-item pay-methods p-2 rounded-3 cpoint">
                                                                    <Image src="/images/bitcoin3.png" height={70} width={172} alt="Image" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3 col-xxl-2">
                                                                <div
                                                                    className="pay_method__paymethod-item pay-methods p-2 rounded-3 cpoint">
                                                                    <Image src="/images/jeton.png" height={70} width={172} alt="Image" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3 col-xxl-2">
                                                                <div
                                                                    className="pay_method__paymethod-item pay-methods p-2 rounded-3 cpoint">
                                                                    <Image src="/images/litecoin.png" height={70} width={172} alt="Image" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3 col-xxl-2">
                                                                <div
                                                                    className="pay_method__paymethod-item pay-methods p-2 rounded-3 cpoint">
                                                                    <Image src="/images/e4thereum.png" height={70} width={172} alt="Image" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3 col-xxl-2">
                                                                <div
                                                                    className="pay_method__paymethod-item pay-methods p-2 rounded-3 cpoint">
                                                                    <Image src="/images/ripple.png" height={70} width={172} alt="Image" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3 col-xxl-2">
                                                                <div
                                                                    className="pay_method__paymethod-item pay-methods p-2 rounded-3 cpoint">
                                                                    <Image src="/images/usd-coin.png" height={70} width={172} alt="Image" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3 col-xxl-2">
                                                                <div
                                                                    className="pay_method__paymethod-item pay-methods p-2 rounded-3 cpoint">
                                                                    <Image src="/images/dogecoin.png" height={70} width={172} alt="Image" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pay_method__paymethod p-4 p-lg-6 p2-bg rounded-8">
                                                    <div className="pay_method__paymethod-title mb-5 mb-md-6">
                                                        <h5 className="n10-color">Choose or enter your withdrawal amount</h5>
                                                    </div>
                                                    <div
                                                        className="pay_method__amount d-flex align-content-center justify-content-between py-3 px-5 px-md-6 mb-6 mb-md-8 flex-wrap gap-3">
                                                        <div className="pay_method__amount-actual">
                                                            <span className="fs-seven mb-3">Actual balance</span>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <span className="fw-bol">$ 7.000</span>
                                                                <i className="ti ti-refresh fs-seven cpoint"></i>
                                                            </div>
                                                        </div>
                                                        <span className="v-line lgx d-none d-sm-block"></span>
                                                        <div className="pay_method__amount-sports">
                                                            <span className="fs-seven mb-3">Bonus No Sports</span>
                                                            <span className="fw-bol d-block">$ 0.00</span>
                                                        </div>
                                                        <span className="v-line lgx d-none d-sm-block"></span>
                                                        <div className="pay_method__amount-sports">
                                                            <span className="fs-seven mb-3">Bonus in casino</span>
                                                            <span className="fw-bol d-block">$ 0.00</span>
                                                        </div>
                                                    </div>
                                                    <div className="pay_method__paymethod-alitem mb-5 mb-md-6">
                                                        <form>
                                                            <div
                                                                className="pay_method__paymethod-items d-flex align-items-center gap-4 gap-sm-5 gap-md-6 mb-6">
                                                                <div
                                                                    className="pay_method__paymethod-item p-2 rounded-3 cpoint clickable-active active">
                                                                    <div className="py-3 px-5 px-md-6 n11-bg rounded-3">
                                                                        <span className="fs-ten fw-bold">$17,000</span>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="pay_method__paymethod-item p-2 rounded-3 cpoint clickable-active">
                                                                    <div className="py-3 px-5 px-md-6 n11-bg rounded-3">
                                                                        <span className="fs-ten fw-bold">$15,000</span>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="pay_method__paymethod-item p-2 rounded-3 cpoint clickable-active">
                                                                    <div className="py-3 px-5 px-md-6 n11-bg rounded-3">
                                                                        <span className="fs-ten fw-bold">$21,000</span>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="pay_method__paymethod-item p-2 rounded-3 cpoint clickable-active">
                                                                    <div className="py-3 px-5 px-md-6 n11-bg rounded-3">
                                                                        <span className="fs-ten fw-bold">$40,000</span>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="pay_method__paymethod-item p-2 rounded-3 cpoint clickable-active">
                                                                    <div className="py-3 px-5 px-md-6 n11-bg rounded-3">
                                                                        <input className="p-0 object-fit-contain " type="text"
                                                                            placeholder="Custom" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button type="submit"
                                                                className="py-4 px-5 n11-bg rounded-2 w-100">Withdrawal
                                                                $7,000</button>
                                                        </form>
                                                        <div className="text-center mt-4">
                                                            <span>Your withdrawal limit on month: $50,000</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tabitem">
                                                <div className="pay_method__table">
                                                    <div style={{ overflowX: 'auto' }} className="pay_method__table-scrollbar">
                                                        <table className="w-100 text-center p2-bg">
                                                            <tr>
                                                                <th className="text-nowrap">Transaction ID</th>
                                                                <th className="text-nowrap">Payment Methods</th>
                                                                <th className="text-nowrap">Amount</th>
                                                                <th className="text-nowrap">Status</th>
                                                            </tr>
                                                            <tr>
                                                                <td>2PQ8B4KYMJ</td>
                                                                <td>Bank / CC</td>
                                                                <td>5,591 USD</td>
                                                                <td className="r1-color fw-normal cpoint">Cancel</td>
                                                            </tr>
                                                            <tr>
                                                                <td>4TQRW5WXF4</td>
                                                                <td>Credit Card</td>
                                                                <td>5,591 USD</td>
                                                                <td className="g1-color fw-normal cpoint">Complete</td>
                                                            </tr>
                                                            <tr>
                                                                <td>XR97K86R7Y</td>
                                                                <td>tether TRC20</td>
                                                                <td>5,591 USD</td>
                                                                <td className="r1-color fw-normal cpoint">Cancel</td>
                                                            </tr>
                                                            <tr>
                                                                <td>VEJP8A5J87</td>
                                                                <td>Bank</td>
                                                                <td>5,591 USD</td>
                                                                <td className="g1-color fw-normal cpoint">Complete</td>
                                                            </tr>
                                                            <tr>
                                                                <td>JKNFWEJ123</td>
                                                                <td>Credit Card</td>
                                                                <td>5,591 USD</td>
                                                                <td className="r1-color fw-normal cpoint">Cancel</td>
                                                            </tr>
                                                            <tr>
                                                                <td>NC8S4QJ4K2</td>
                                                                <td>tether TRC20</td>
                                                                <td>5,591 USD</td>
                                                                <td className="r1-color fw-normal cpoint">Cancel</td>
                                                            </tr>
                                                            <tr>
                                                                <td>DGPSN7SRM4</td>
                                                                <td>TRON</td>
                                                                <td>5,591 USD</td>
                                                                <td className="g1-color fw-normal cpoint">Complete</td>
                                                            </tr>
                                                            <tr>
                                                                <td>ZT3FA5D8N7</td>
                                                                <td>Ethereum</td>
                                                                <td>5,591 USD</td>
                                                                <td className="g1-color fw-normal cpoint">Complete</td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tabitem">
                                                <div className="pay_method__tabletwo">
                                                    <div style={{ overflowX: 'auto' }} className="pay_method__table-scrollbar">
                                                        <table className="w-100 text-center p2-bg">
                                                            <tr>
                                                                <th className="text-nowrap">Transaction ID</th>
                                                                <th className="text-nowrap">Date</th>
                                                                <th className="text-nowrap">Transaction type</th>
                                                                <th className="text-nowrap">Amount/Balance</th>
                                                                <th className="text-nowrap">Status</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-nowrap">2PQ8B4KYMJ</td>
                                                                <td className="text-nowrap">27.12.2023, 11:31</td>
                                                                <td className="text-nowrap">5,591 USD</td>
                                                                <td className="text-nowrap">300.00/300.00</td>
                                                                <td className="g1-color fw-normal cpoint text-nowrap">Complete</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-nowrap">4TQRW5WXF4</td>
                                                                <td className="text-nowrap">27.12.2023, 11:31</td>
                                                                <td className="text-nowrap">5,591 USD</td>
                                                                <td className="text-nowrap">300.00/300.00</td>
                                                                <td className="g1-color fw-normal cpoint text-nowrap">Complete</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-nowrap">4TQRW5WXF4</td>
                                                                <td className="text-nowrap">27.12.2023, 11:31</td>
                                                                <td className="text-nowrap">5,591 USD</td>
                                                                <td className="text-nowrap">300.00/300.00</td>
                                                                <td className="g1-color fw-normal cpoint text-nowrap">Complete</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-nowrap">VEJP8A5J87</td>
                                                                <td className="text-nowrap">27.12.2023, 11:31</td>
                                                                <td className="text-nowrap">5,591 USD</td>
                                                                <td className="text-nowrap">300.00/300.00</td>
                                                                <td className="g1-color fw-normal cpoint text-nowrap">Complete</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-nowrap">JKNFWEJ123</td>
                                                                <td className="text-nowrap">27.12.2023, 11:31</td>
                                                                <td className="text-nowrap">5,591 USD</td>
                                                                <td className="text-nowrap">300.00/300.00</td>
                                                                <td className="g1-color fw-normal cpoint text-nowrap">Complete</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-nowrap">NC8S4QJ4K2</td>
                                                                <td className="text-nowrap">27.12.2023, 11:31</td>
                                                                <td className="text-nowrap">5,591 USD</td>
                                                                <td className="text-nowrap">300.00/300.00</td>
                                                                <td className="g1-color fw-normal cpoint text-nowrap">Complete</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-nowrap">DGPSN7SRM4</td>
                                                                <td className="text-nowrap">27.12.2023, 11:31</td>
                                                                <td className="text-nowrap">5,591 USD</td>
                                                                <td className="text-nowrap">300.00/300.00</td>
                                                                <td className="g1-color fw-normal cpoint text-nowrap">Complete</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-nowrap">ZT3FA5D8N7</td>
                                                                <td className="text-nowrap">27.12.2023, 11:31</td>
                                                                <td className="text-nowrap">5,591 USD</td>
                                                                <td className="text-nowrap">300.00/300.00</td>
                                                                <td className="g1-color fw-normal cpoint text-nowrap">Complete</td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tabitem">
                                                <div className="pay_method__paymethod p-4 p-lg-6 p2-bg rounded-8">
                                                    <div className="pay_method__paymethod-title mb-5 mb-md-6">
                                                        <h5 className="n10-color">About You</h5>
                                                    </div>
                                                    <div className="pay_method__formarea">
                                                        <form>
                                                            <div
                                                                className="d-flex align-items-center flex-wrap flex-md-nowrap gap-5 gap-md-6 mb-5">
                                                                <div className="w-100">
                                                                    <label className="mb-3">First Name (Given Name)</label>
                                                                    <input className="n11-bg rounded-8" type="text"
                                                                        placeholder="First Name" />
                                                                </div>
                                                                <div className="w-100">
                                                                    <label className="mb-3">Last Name</label>
                                                                    <input className="n11-bg rounded-8" type="text"
                                                                        placeholder="Last Name" />
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="d-flex align-items-center gap-5 gap-md-6 mb-5 flex-wrap flex-md-nowrap">
                                                                <div className="w-100">
                                                                    <label className="mb-3">Date Of Birth</label>
                                                                    <div className="d-flex align-items-center gap-6 w-100">

                                                                        <div className="d-flex n11-bg rounded-8 w-50">
                                                                            <input type="text" placeholder="12" />
                                                                        </div>
                                                                        <div className="d-flex n11-bg rounded-8 w-50">
                                                                            <input type="text" placeholder="09" />
                                                                        </div>
                                                                        <div className="d-flex n11-bg rounded-8 w-50">
                                                                            <input type="text" placeholder="1999" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="w-100">
                                                                    <label className="mb-3">Phone Number</label>
                                                                    <div className="d-flex gap-2">
                                                                        <input className="w-25 n11-bg rounded-8" type="text"
                                                                            placeholder="+962" />
                                                                        <input className="n11-bg rounded-8" type="text"
                                                                            placeholder="XX-XXX-XXXXX" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="d-flex align-items-center flex-wrap flex-md-nowrap gap-5 gap-md-6 mb-5">
                                                                <div className="w-100">
                                                                    <label className="mb-3">Address</label>
                                                                    <input className="n11-bg rounded-8" type="text"
                                                                        placeholder="Address..." />
                                                                </div>
                                                                <div className="w-100">
                                                                    <label className="mb-3">Male & Female</label>
                                                                    <select>
                                                                        <option data-display="Male & Female...">Male & Female...
                                                                        </option>
                                                                        <option value="1">Male</option>
                                                                        <option value="2">Female</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="d-flex align-items-center flex-wrap flex-md-nowrap gap-5 gap-md-6 mb-5">
                                                                <div className="w-100">
                                                                    <label className="mb-3">City / Region</label>
                                                                    <input className="n11-bg rounded-8" type="text"
                                                                        placeholder="City / Region..." />
                                                                </div>
                                                                <div className="w-100">
                                                                    <label className="mb-3">Country</label>
                                                                    <input className="n11-bg rounded-8" type="text"
                                                                        placeholder="United Kingdom" />
                                                                </div>
                                                            </div>
                                                            <div className="d-flex gap-2 align-items-start align-items-xl-center mb-5">
                                                                <input type="checkbox" id="demoCheckbox" name="checkbox"
                                                                    value="1" />
                                                                <label className="fs-seven">I authorize to collect and transmit my personal information for identity verification or <span className="g1-color"> similar uses as defined</span> in order to confirm my ability to use the website.</label>
                                                            </div>
                                                            <button className="cmn-btn py-3 px-10">Save</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tabitem">
                                                <div className="pay_method__paymethod p-4 p-lg-6 p2-bg rounded-8">
                                                    <div className="pay_method__paymethod-title mb-5 mb-md-6">
                                                        <h5 className="n10-color">Enter your payment details</h5>
                                                    </div>
                                                    <div className="pay_method__formarea">
                                                        <form>
                                                            <div
                                                                className="d-flex align-items-center flex-wrap flex-md-nowrap gap-5 gap-md-6 mb-5">
                                                                <div className="d-flex w-100 p1-bg ps-3 rounded-8">
                                                                    <div className="d-flex align-items-center w-100">
                                                                        <i className="ti ti-credit-card fs-five"></i>
                                                                        <input type="text" id="card_number2" name="card_number"
                                                                            placeholder="Card number" />
                                                                    </div>
                                                                    <div className="d-flex align-items-center justify-content-end">
                                                                        <input className="w-75" type="text" id="expiration2"
                                                                            name="expiration" placeholder="MM/YY CVC" />
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex w-100 p1-bg rounded-8">
                                                                    <input type="text" placeholder="Street address" />
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="d-flex align-items-center gap-5 gap-md-6 mb-5 flex-wrap flex-md-nowrap">
                                                                <div className="d-flex w-100 p1-bg rounded-8">
                                                                    <input type="text"
                                                                        placeholder="Apt, unit, suite, etc. (optional)" />
                                                                </div>
                                                                <div className="d-flex w-100 p1-bg rounded-8">
                                                                    <input type="text" placeholder="(+33)7 35 55 21 02" />
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="d-flex align-items-center gap-5 gap-md-6 mb-5 flex-wrap flex-md-nowrap">
                                                                <div className="d-flex p1-bg rounded-8 w-100">
                                                                    <input type="text" placeholder="City" />
                                                                </div>
                                                                <div className="d-flex align-items-center gap-6 w-100">
                                                                    <div className="d-flex  p1-bg rounded-8 w-50">
                                                                        <input type="text" placeholder="State" />
                                                                    </div>
                                                                    <div className="d-flex p1-bg rounded-8 w-50">
                                                                        <input type="text" placeholder="Zip code" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="d-flex align-items-center justify-content-between mb-7 mb-md-10">
                                                                <span>Total</span>
                                                                <span>$3,000</span>
                                                            </div>
                                                            <button type="submit"
                                                                className="py-4 px-5 n11-bg rounded-2 w-100">Save</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="tabitem">
                                        <div className="pay_method__paymethod p-4 p-lg-6 p2-bg rounded-8">
                                            <div
                                                className="pay_method__paymethod-title d-flex align-items-center gap-3 mb-6 mb-md-8">
                                                <i className="ti ti-bell-ringing fs-four"></i>
                                                <h5 className="n10-color">Notifications settings </h5>
                                            </div>
                                            <div className="pay_method__Notiitem d-flex align-items-center gap-3 justify-content-between align-items-center pb-5 pb-md-6 mb-5 mb-md-6">
                                                <div className="pay_method__Notiitem-text">
                                                    <h6 className="mb-3">Email Notifications</h6>
                                                    <span className="fs-seven n4-color">Receive weekly email notifications.</span>
                                                </div>
                                                <div className="pay_method__Notiitem-switcher">
                                                    <label className="switch">
                                                        <input type="checkbox" />
                                                        <div className="slider">
                                                            <div className="circle">
                                                                <svg className="cross" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 365.696 365.696" y="0" x="0" height="6" width="6" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <path data-original="#000000" fill="currentColor" d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"></path>
                                                                    </g>
                                                                </svg>
                                                                <svg className="checkmark" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 24 24" y="0" x="0" height="10" width="10" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <path className="" data-original="#000000" fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="pay_method__Notiitem d-flex align-items-center gap-3 justify-content-between align-items-center pb-5 pb-md-6 mb-5 mb-md-6">
                                                <div className="pay_method__Notiitem-text">
                                                    <h6 className="mb-3">Phone Notifications</h6>
                                                    <span className="fs-seven n4-color">Receive weekly Phone notifications.</span>
                                                </div>
                                                <div className="pay_method__Notiitem-switcher">
                                                    <label className="switch">
                                                        <input type="checkbox" />
                                                        <div className="slider">
                                                            <div className="circle">
                                                                <svg className="cross" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 365.696 365.696" y="0" x="0" height="6" width="6" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <path data-original="#000000" fill="currentColor" d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"></path>
                                                                    </g>
                                                                </svg>
                                                                <svg className="checkmark" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 24 24" y="0" x="0" height="10" width="10" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <path className="" data-original="#000000" fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="pay_method__Notiitem d-flex align-items-center gap-3 justify-content-between align-items-center pb-5 pb-md-6 mb-5 mb-md-6">
                                                <div className="pay_method__Notiitem-text">
                                                    <h6 className="mb-3">New tasks</h6>
                                                    <span className="fs-seven n4-color">Receive weekly New tasks notifications.</span>
                                                </div>
                                                <div className="pay_method__Notiitem-switcher">
                                                    <label className="switch">
                                                        <input type="checkbox" />
                                                        <div className="slider">
                                                            <div className="circle">
                                                                <svg className="cross" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 365.696 365.696" y="0" x="0" height="6" width="6" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <path data-original="#000000" fill="currentColor" d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"></path>
                                                                    </g>
                                                                </svg>
                                                                <svg className="checkmark" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 24 24" y="0" x="0" height="10" width="10" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <path className="" data-original="#000000" fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="pay_method__Notiitem d-flex align-items-center gap-3 justify-content-between align-items-center pb-5 pb-md-6 mb-5 mb-md-6">
                                                <div className="pay_method__Notiitem-text">
                                                    <h6 className="mb-3">Billing and payments</h6>
                                                    <span className="fs-seven n4-color">Lorem ipsum dolor sit amet consectetur. Id.</span>
                                                </div>
                                                <div className="pay_method__Notiitem-switcher">
                                                    <label className="switch">
                                                        <input type="checkbox" />
                                                        <div className="slider">
                                                            <div className="circle">
                                                                <svg className="cross" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 365.696 365.696" y="0" x="0" height="6" width="6" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <path data-original="#000000" fill="currentColor" d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"></path>
                                                                    </g>
                                                                </svg>
                                                                <svg className="checkmark" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 24 24" y="0" x="0" height="10" width="10" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <path className="" data-original="#000000" fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="pay_method__Notiitem d-flex align-items-center gap-3 justify-content-between align-items-center border-0">
                                                <div className="pay_method__Notiitem-text">
                                                    <h6 className="mb-3">Updates and announcements</h6>
                                                    <span className="fs-seven n4-color">Lorem ipsum dolor sit amet consectetur.</span>
                                                </div>
                                                <div className="pay_method__Notiitem-switcher">
                                                    <label className="switch">
                                                        <input type="checkbox" />
                                                        <div className="slider">
                                                            <div className="circle">
                                                                <svg className="cross" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 365.696 365.696" y="0" x="0" height="6" width="6" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <path data-original="#000000" fill="currentColor" d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"></path>
                                                                    </g>
                                                                </svg>
                                                                <svg className="checkmark" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 24 24" y="0" x="0" height="10" width="10" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <path className="" data-original="#000000" fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tabitem">
                                        <div className="pay_method__paymethod p-4 p-lg-6 p2-bg rounded-8">
                                            <div
                                                className="pay_method__paymethod-title d-flex align-items-center gap-3 mb-6 mb-md-8">
                                                <i className="ti ti-bell-ringing fs-four"></i>
                                                <h5 className="n10-color">Notifications settings </h5>
                                            </div>
                                            <div className="pay_method__Notiitem d-flex align-items-center gap-3 justify-content-between align-items-center pb-5 pb-md-6 mb-5 mb-md-6">
                                                <div className="pay_method__Notiitem-text">
                                                    <h6 className="mb-3">Email Notifications</h6>
                                                    <span className="fs-seven n4-color">Receive weekly email notifications.</span>
                                                </div>
                                                <div className="pay_method__Notiitem-switcher">
                                                    <label className="switch">
                                                        <input type="checkbox" />
                                                        <div className="slider">
                                                            <div className="circle">
                                                                <svg className="cross" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 365.696 365.696" y="0" x="0" height="6" width="6" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <path data-original="#000000" fill="currentColor" d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"></path>
                                                                    </g>
                                                                </svg>
                                                                <svg className="checkmark" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 24 24" y="0" x="0" height="10" width="10" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <path className="" data-original="#000000" fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="pay_method__Notiitem d-flex align-items-center gap-3 justify-content-between align-items-center pb-5 pb-md-6 mb-5 mb-md-6">
                                                <div className="pay_method__Notiitem-text">
                                                    <h6 className="mb-3">Phone Notifications</h6>
                                                    <span className="fs-seven n4-color">Receive weekly Phone notifications.</span>
                                                </div>
                                                <div className="pay_method__Notiitem-switcher">
                                                    <label className="switch">
                                                        <input type="checkbox" />
                                                        <div className="slider">
                                                            <div className="circle">
                                                                <svg className="cross" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 365.696 365.696" y="0" x="0" height="6" width="6" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <path data-original="#000000" fill="currentColor" d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"></path>
                                                                    </g>
                                                                </svg>
                                                                <svg className="checkmark" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 24 24" y="0" x="0" height="10" width="10" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <path className="" data-original="#000000" fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="pay_method__Notiitem d-flex align-items-center gap-3 justify-content-between align-items-center pb-5 pb-md-6 mb-5 mb-md-6">
                                                <div className="pay_method__Notiitem-text">
                                                    <h6 className="mb-3">New tasks</h6>
                                                    <span className="fs-seven n4-color">Receive weekly New tasks notifications.</span>
                                                </div>
                                                <div className="pay_method__Notiitem-switcher">
                                                    <label className="switch">
                                                        <input type="checkbox" />
                                                        <div className="slider">
                                                            <div className="circle">
                                                                <svg className="cross" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 365.696 365.696" y="0" x="0" height="6" width="6" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <path data-original="#000000" fill="currentColor" d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"></path>
                                                                    </g>
                                                                </svg>
                                                                <svg className="checkmark" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 24 24" y="0" x="0" height="10" width="10" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <path className="" data-original="#000000" fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="pay_method__Notiitem d-flex align-items-center gap-3 justify-content-between align-items-center pb-5 pb-md-6 mb-5 mb-md-6">
                                                <div className="pay_method__Notiitem-text">
                                                    <h6 className="mb-3">Billing and payments</h6>
                                                    <span className="fs-seven n4-color">Lorem ipsum dolor sit amet consectetur. Id.</span>
                                                </div>
                                                <div className="pay_method__Notiitem-switcher">
                                                    <label className="switch">
                                                        <input type="checkbox" />
                                                        <div className="slider">
                                                            <div className="circle">
                                                                <svg className="cross" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 365.696 365.696" y="0" x="0" height="6" width="6" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <path data-original="#000000" fill="currentColor" d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"></path>
                                                                    </g>
                                                                </svg>
                                                                <svg className="checkmark" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 24 24" y="0" x="0" height="10" width="10" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <path className="" data-original="#000000" fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="pay_method__Notiitem d-flex align-items-center gap-3 justify-content-between align-items-center border-0">
                                                <div className="pay_method__Notiitem-text">
                                                    <h6 className="mb-3">Updates and announcements</h6>
                                                    <span className="fs-seven n4-color">Lorem ipsum dolor sit amet consectetur.</span>
                                                </div>
                                                <div className="pay_method__Notiitem-switcher">
                                                    <label className="switch">
                                                        <input type="checkbox" />
                                                        <div className="slider">
                                                            <div className="circle">
                                                                <svg className="cross" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 365.696 365.696" y="0" x="0" height="6" width="6" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <path data-original="#000000" fill="currentColor" d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"></path>
                                                                    </g>
                                                                </svg>
                                                                <svg className="checkmark" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 24 24" y="0" x="0" height="10" width="10" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <path className="" data-original="#000000" fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
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
