import BackgroundImage from '../../components/kosha/backgroundImage';
import Footer from '../../components/kosha/footer';
import HeaderOne from '../../components/kosha/headerOne';
import PageBriefText from '../../components/kosha/pageBriefText';
import smiley from '../../assets/icons/smiley.png';
import { IoSendSharp } from 'react-icons/io5';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div>
      <BackgroundImage />
      <HeaderOne page="contact" />
      <PageBriefText page="contact" />

      {/* #################################################################################################################################################### */}
      <div className="flex flex-col lg:flex-row lg:gap-x-[5%] px-5 w-full mt-10 mb-10 xl:gap-x-[10%] md:p-20">
        <div className="bg-[#be5829] rounded-lg p-3 md:p-5 max-w-[491px] relative">
          <div className="text-white flex flex-col gap-[16px]">
            <p className="text-[28px] font-[700] ">
              Send us message and we’ll get back to you ASAP!
            </p>
            <p className="text-[18px] font-[400]">Or</p>
            <p className="text-[18px] font-[400]">
              Say something to start a live chat!
            </p>
          </div>

          <div className="bg-black rounded-lg mt-[20px]">
            <div className="flex justify-between px-6 py-5 mt-5" >
              <p className="font-[500] text-[15px] text-white">
                {' '}
                We typically reply within 5 minutes{' '}
              </p>
              <p className="text-[#00B05C] font-[700] text-[15px]"> Online </p>
            </div>
            <hr className='border-[#2c2c2c] m-0' />
            <div className="flex flex-col justify-between p-3 gap-y-[10px] ">
              <div className="flex  flex-col w-full gap-y-[10px] items-end">
                <div className="bg-[#ed8c59]  w-[50%]  h-[40px] md:h-[77px]  rounded-l-2xl rounded-br-2xl "></div>
                <div className="bg-[#ed8c59] w-[30%]  h-[30px] md:h-[58px] rounded-l-2xl rounded-br-2xl"></div>
              </div>
              <div className="bg-white left-0 w-[40%]  h-[30px] md:h-[58px] rounded-r-2xl rounded-bl-2xl"></div>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Type your message"
                  className="rounded-lg w-[100%] px-[10px] pr-[70px] h-[52px] bottom-0 border-0 mt-1"
                />
                <button className="absolute right-10 top-4 border-0 bg-white ">
                  <Image height={20} width={20} src={smiley} alt="share" />
                </button>
                <button className="absolute right-2 top-4 border-0 bg-white ">
                  <IoSendSharp size={21} className="text-[#BE5828]" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" relative mt-10">

          <form action="" className="font-[500] text-l ">

            <div className="flex flex-col  gap-y-5 md:gap-y-[50px] justify-between">
              <div className="flex flex-col md:flex-row justify-between sm:gap-y-5 md:gap-x-10">
                <div className="flex flex-col  gap-3 ">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="border-0 border-solid border-b-[1px] border-[#8D8D8D] border-opacity-[0.5] bg-[#FFFAF3] w-[95%] text-[24px] "
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="border-0 border-solid border-b-[1px] border-[#8D8D8D] border-opacity-[0.5] bg-[#FFFAF3] w-[95%] text-[24px] "
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between md:gap-x-10 sm:gap-y-5">
                <div className="flex flex-col gap-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="border-0 border-solid border-b-[1px] border-[#8D8D8D] border-opacity-[0.5]e bg-[#FFFAF3] w-[95%]  text-[24px]  "
                  />
                </div>
                <div className="flex flex-col gap-3 ">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="border-0 border-solid border-b-[1px] border-[#8D8D8D] border-opacity-[0.5] bg-[#FFFAF3] w-[95%] text-[24px]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 ">
                <label>Select Subject?</label>
                <div className="flex flex-col md:flex-row text-[14px] font-[600] md:justify-between">
                  <span ><input
                    type="radio"
                    value="General_Inquiry"
                    name="inquiry"
                    className="border-none  bg-[#e0e0e0] "
                    checked={true}
                  />{'  '}General Inquiry
                  </span>
                  <span><input
                    type="radio"
                    value="General_Inquiry"
                    name="inquiry"
                    className="border-none  bg-[#e0e0e0] "
                  />{' '}General Inquiry
                  </span>
                  <span><input
                    type="radio"
                    value="General_Inquiry"
                    name="inquiry"
                    className="radio-btn bg-[#e0e0e0] "
                  />{' '}General Inquiry
                  </span>
                  <span><input
                    type="radio"
                    value="General_Inquiry"
                    name="inquiry"
                    className="border-none  bg-[#e0e0e0] "
                  />{' '}General Inquiry
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 ">
                <label>Message</label>
                <input
                  type="text"
                  placeholder="Write your message.."
                  className="h-[52px] w-[250px]  md:w-full md:text-[24px] bg-[#FFFAF3] border-0 border-solid border-b-[1px] border-[#8D8D8D]border-opacity-[0.5]"
                />
              </div>
              <div className="relative">
                <button className="absolute right-0 bg-black text-white font-[400]  border-0 text-[12px] md:text-[16px] adca-font rounded-lg  w-[130px] md:w-[190px] h-[35px] md:h-[35px]">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* ################################################################################################################ */}
      <Footer />
    </div>
  );
}
