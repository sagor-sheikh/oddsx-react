"use client";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { tabOne } from "@/public/data/tabOne";

export default function HeroMatches() {
  return (
    <>
      <section className="top_matches pb-8 pb-md-10">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 gx-0 gx-lg-4">
              <div className="top_matches__main">
                <div className="row w-100 mb-8 mb-md-10">
                  <div className="col-12">
                    <div className="top_matches__title d-flex align-items-center gap-2 mb-4">
                      {/* <Image width={16} height={16} src="/images/icon/king.png" alt="Icon"> */}
                      <h3>Top Matches</h3>
                    </div>
                    <div className="top_matches__content">
                      <div className="singletab">
                        <Tab.Group>
                          <Tab.List className="tablinks d-flex align-items-center gap-4 flex-wrap mb-5 mb-md-6">
                            {tabOne.map(({ imgSrc, buttonName }) => (
                              <Tab className="nav-links" key={buttonName}>
                                <div className="tablink clickable-active2 active d-flex align-items-center gap-2 py-2 px-4 p3-bg rounded-17">
                                  <Image
                                    width={16}
                                    height={16}
                                    src={imgSrc}
                                    alt="Icon"
                                  />{" "}
                                  {buttonName}
                                </div>
                              </Tab>
                            ))}
                          </Tab.List>
                          <Tab.Panels>
                            <Tab.Panel>Content 1</Tab.Panel>
                            <Tab.Panel>Content 2</Tab.Panel>
                            <Tab.Panel>Content 3</Tab.Panel>
                          </Tab.Panels>
                        </Tab.Group>
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
  );
}
