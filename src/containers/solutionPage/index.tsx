import React, { Fragment, useState } from 'react';
import BackgroundImage from '../../components/kosha/backgroundImage';
import Footer from '../../components/kosha/footer';
import HeaderOne from '../../components/kosha/headerOne';
import PageBriefText from '../../components/kosha/pageBriefText';
import { arr } from './data';
import { IData } from './type';
import Modal from '../../components/kosha/modal';

const SolutionPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const openModal = (title: string, description: string) => {
    setModalData({ title, description });
    toggle();
  };
  const toggle = () => {
    setShowModal(!showModal);
  };
  return (
    <Fragment>
      {showModal && <Modal modalData={modalData} toggle={toggle} />}
      <BackgroundImage />
      <HeaderOne page="solution" />
      <main className="px-8 md:px-14">
        <PageBriefText page="solution" />
        {/* ######################################################USER COMPONENT################################################################################# */}
        <p className="font-semibold text-[23px] mb-12">MEET OUR SOLUTIONS</p>
        <div className="grid justify-items-center lg:justify-items-start md:grid-cols-2 gap-20 w-full">
          {arr.map((card: IData, id: number) => {
            let css = 'lg:justify-self-start';
            if ([2, 4].includes(id + 1)) {
              css = 'lg:justify-self-end';
            }
            return (
              <UserCard key={id} {...card} css={css} openModal={openModal} />
            );
          })}
        </div>
        {/* #########################################################QUERY COMPONENT############################################################################## */}
        <p className="uppercase font-semibold text-[23px] mt-20">
          For future queries
        </p>
        <div className="w-full mt-5 mb-20">
          <div className="max-w-[450px] md:max-w-[650px] m-auto mt-14">
            <form
              action=""
              className="bg-white light-shadow text-[19.01px] p-5 border-[1px] border-solid rounded-xl border-black border-opacity-[0.5]"
            >
              <label>Your Email</label>
              <input
                type="email"
                className="bg-[#D0D0D0] w-full h-[58px] border-0 rounded-xl mt-3 mb-5 text-[24px] p-5"
              />
              <label>Your message</label>
              <textarea
                className="bg-[#D0D0D0] w-full h-[260px] border-0 rounded-xl mt-3 text-[24px] p-5"
              ></textarea>
            </form>
            <button className=" text-white adca-font light-shadow cursor-pointer bg-black text-[22px] font-normal h-[52px] w-full border rounded-[10px] mt-10">
              SUBMIT
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

function UserCard({ openModal, css, title, summary,description }: any) {
  return (
    <>
      <div
        className={`${css} relative flex flex-col justify-between border-solid max-w-[450px] lg:max-w-[800px] lg:h-[400px]  border-[1px] rounded-[10px] p-2 border-[#A9A9A9] tile-hover`}
      >
        <div>
          <ul className="title text-[#FB8E5B] ml-5 mt-5 font-semibold text-2xl lg:text-3xl mb-2">
            <li>{title}</li>
          </ul>
          <div className="m-4 max-w-[90%]">
            <p className="text-md lg:text-xl mt-0">{summary.slice(0, 240)}</p>
          </div>
        </div>
        <div className="flex justify-end p-4">
          <div className="w-[98px] h-[98px] box bg-black border-[1px] rounded-[10px] right-0 bottom-0 hover:bg-white">
            {' '}
          </div>
        </div>
        <div className="hidden load justify-center -mb-6">
          <button
            onClick={() => openModal(title, description)}
            className=" uppercase cursor-pointer bg-black text-white font-bold border-0 px-14 py-3 text-lg rounded-lg"
          >
            Learn more
          </button>
        </div>
      </div>
    </>
  );
}

export default SolutionPage;
