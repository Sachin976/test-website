import BackgroundImage from '../../components/kosha/backgroundImage';
import Footer from '../../components/kosha/footer';
import HeaderOne from '../../components/kosha/headerOne';
import PageBriefText from '../../components/kosha/pageBriefText';

export default function ContactPage() {
  return (
    <div>
      <BackgroundImage />
      <HeaderOne />
      <PageBriefText page="about" />

      {/* #################################################################################################################################################### */}
      <div className="flex flex-col lg:flex-row lg:gap-x-[5%] px-5 w-full mt-10 mb-10 xl:gap-x-[8%] md:p-20">
        <div className="bg-[#be5829] rounded-lg p-3 md:p-5 ">
          <div className="text-white">
            <p className="text-[28px] font-[700] ">
              Send us message and we’ll get back to you ASAP!
            </p>
            <p className="text-[18px] font-[400]">Or</p>
            <p className="text-[18px] font-[400]">
              Say something to start a live chat!
            </p>
          </div>

          <div className="bg-black rounded-lg p-4">
            <div className="flex p-3 justify-between">
              <p className="font-[500] text-[15px] text-white">
                {' '}
                We typically reply within 5 minutes{' '}
              </p>
              <p className="text-[#00B05C] font-[700] text-[15px]"> Online </p>
            </div>
            <div className="flex flex-col justify-between p-3 gap-y-[10px] ">
              <div className="flex  flex-col w-full gap-y-[10px] items-end">
                <div className="bg-[#ed8c59]  w-[50%]  h-[40px] md:h-[77px]  rounded-l-lg rounded-br-lg "></div>
                <div className="bg-[#ed8c59] w-[30%]  h-[30px] md:h-[58px] rounded-l-lg rounded-br-lg"></div>
              </div>
              <div className="bg-white left-0 w-[40%]  h-[30px] md:h-[58px] rounded-r-lg rounded-bl-lg"></div>
              <input
                type="text"
                placeholder="Type your message"
                className="rounded-lg w-[100%] px-[10px] h-[52px] bottom-0"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">

          <form action="" className="font-[500] text-l ">

            <div className="flex flex-col  gap-y-5 md:gap-y-[50px] justify-between">
              <div className="flex flex-col md:flex-row justify-between sm:gap-y-5 md:gap-x-10">
                <div className="flex flex-col  gap-3 ">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="border-0 border-solid border-b-[1px] border-[#8D8D8D] border-opacity-[0.5] bg-[#FFFAF3] w-[70%] text-[24px] "
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="border-0 border-solid border-b-[1px] border-[#8D8D8D] border-opacity-[0.5] bg-[#FFFAF3] w-[70%] text-[24px] "
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between  sm:gap-y-5">
                <div className="flex flex-col gap-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="border-0 border-solid border-b-[1px] border-[#8D8D8D] border-opacity-[0.5]e bg-[#FFFAF3] w-[70%]  text-[24px]  "
                  />
                </div>
                <div className="flex flex-col gap-3 ">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="border-0 border-solid border-b-[1px] border-[#8D8D8D] border-opacity-[0.5] bg-[#FFFAF3] w-[70%] text-[24px]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 ">
                <label>Select Subject?</label>
                <div className="flex flex-col md:flex-row text-[14px] font-[300] md:justify-between">
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
                    className="border-none  bg-[#e0e0e0] "
                  />{' '}General Inquiry
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
                <button className="absolute right-0 bg-black text-white font-[600]  text-[12px] md:text-[16px] rounded-lg  w-[130px] md:w-[187px] h-[35px] md:h-[35px]">
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
