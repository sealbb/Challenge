import React, { useRef, useState, useEffect } from "react"
import "./App.css"
import Chart from "./component/Chart.jsx"
import { ArrowIcon } from "./assets/icon/ArrowIcon.jsx"
function App() {
  const [isFilp, setIsFilp] = useState(false)
  const [rotateArrow, setRotateArrow] = useState(false)

  const caseElement = useRef(null)
  const scrollToTop = () => {
    console.log(isFilp)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  const scrollToCase = () => {
    if (caseElement.current) {
      caseElement.current.scrollIntoView({ behavior: "smooth" }) // Add behavior and specify "smooth" scrolling
    }
  }

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsFilp(true)
      setRotateArrow(true)
    } else {
      setIsFilp(false)
      setRotateArrow(false)
    }
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <>
      <div className="w-full relative">
        <div className="fixed bottom-5 right-8">
          <button onClick={isFilp ? scrollToTop : scrollToCase}>
            <ArrowIcon
              className={`border border-[#636363] hover:border-[#ACACAC] text-[#636363] rounded-full text-2xl hover:text-[#ACACAC] duration-500 ${
                rotateArrow ? "rotate180" : ""
              }`}
            />
          </button>
        </div>
        <div className="w-full bg-black ">
          <div className="max-w-[720px] mx-auto p-5 w-full h-screen text-white flex justify-center items-center">
            <div className="flex flex-col">
              <h1 className="md:text-[164px] text-center md:leading-[164px] text-[96px]  leading-[96px]">
                ม.๑๑๒
              </h1>
              <p className="md:text-[18px] text-center md:leading-[27px] text-[14px] leading-[21px]">
                “ผู้ใดหมิ่นประมาท ดูหมิ่น หรือแสดงความอาฆาตมาดร้าย
                พระมหากษัตริย์ พระราชินี รัชทายาท หรือผู้สำเร็จราชการแทนพระองค์
                ต้องระวางโทษจำคุกตั้งแต่สามปีถึงสิบห้าปี”
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-start items-start">
          <div
            className="w-full md:max-w-3xl mx-auto p-10 space-y-10  mt-6 pb-20"
            ref={caseElement}
          >
            <h2 className="text-[32px] leading-[32px] md:text-[40px] md:leading-[40px] font-bold">
              จำนวนคดีที่เกิดขึ้น
            </h2>
            <p className="text-[14px]  leading-[21px] md:text-[18px] md:leading-[27px]">
              <span className="hidden md:block">มาตรา 112</span>
              <span className="block md:hidden">
                มาตรา 112
                <br />
              </span>
              มีการตีความการกระทำอย่างไร้ขอบเขต
              แต่ทุกคนสามารถผู้กล่าวโทษให้ดำเนินคดีได้
              จึงมีการกล่าวหากันเป็นจำนวนมากในช่วงที่มีความขัดแย้งทางการเมืองหลังจากปี
              2548 เป็นต้นมา
            </p>
            <div className="flex flex-col items-center justify-center gap-10">
              <Chart className="" />
              <p className="text-[12px] leading-[18px]">
                ที่มา:{" "}
                <a
                  href="https://freedom.ilaw.or.th/node/817"
                  className="reset-text"
                  target="_blank"
                >
                  iLaw
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-black text-white">
          <div className="w-full max-w-3xl mx-auto p-10 pb-20">
            <h2 className="text-[32px] leading-[32px] md:text-[40px] md:leading-[40px] font-bold mt-14 mb-12 md:text-left text-center">
              ความเห็นนักวิชาการ
            </h2>
            <div className="flex flex-col gap-14">
              <div className="md:w-[480px] space-y-7">
                <p className="text-[14px] leading-[21px] md:text-left text-center">
                  “ปัญหาใหญ่มากๆ ของมาตรา 112
                  คือมันมีนโยบายที่ให้ใช้อย่างร้ายแรงที่สุด ให้เป็นความลับ
                  มันทำให้ภาพลักษณ์ของระบบยุติธรรมในคดี 112
                  เป็นกฎหมายที่ไม่ชัดเจนแน่นอน กฎหมายไม่มีความโปร่งใส
                  และไม่สมเหตุสมผล ไม่ว่าต่อไปนี้คุณจะตัดสินคดีอื่น คดีไหนก็ตาม
                  คนก็จะเกิดความไม่เชื่อถือ
                  เกิดความสงสัยในการกระทำของสถาบันตุลาการ
                  ถ้าเป็นอย่างนั้นสังคมไทยอยู่ไม่ได้”
                </p>
                <div className="flex md:flex-row flex-col items-center gap-5">
                  <img
                    src="public/images/person-1.png"
                    alt=""
                    className="md:w-[86px] w-[64px]"
                  />
                  <div className="md:text-left text-center">
                    <h3 className="text-[12px] leading-[18px] font-bold ">
                      ดร. เข็มทอง ต้นสกุลรุ่งเรือง
                    </h3>
                    <p className="text-[12px] leading-[18px]">
                      คณะนิติศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end items-end  space-y-7">
                <div className="md:w-[480px]">
                  <p className="text-[14px] leading-[21px] md:text-right text-center">
                    “เราสามารถมีระบอบประชาธิปไตยอันมีพระมหากษัตริย์ทรงเป็นประมุขได้
                    แต่เราก็สามารถทำให้กฏหมายนั้น มันไม่ขัดแย้งต่อหลักการพื้นฐาน
                    สิทธิ และเสรีภาพของประชาชนในสังคมประชาธิปไตยได้
                    และนั่นก็ควรเป็นสิ่งที่ควรจะทำ”
                  </p>
                </div>

                <div className="flex md:flex-row-reverse flex-col items-center gap-5">
                  <img
                    src="public/images/person-2.png"
                    alt=""
                    className="md:w-[86px] w-[64px]"
                  />
                  <div className="md:text-end text-center">
                    <h3 className="text-[12px] leading-[18px] font-bold">
                      รองศาสตราจารย์ ดร. วาสนา วงศ์สุรวัฒน์
                    </h3>
                    <p className="text-[12px] leading-[18px]  break-words">
                      คณะอักษรศาสตร์ ภาควิชาประวัติศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-[480px] space-y-7">
                <p className="text-[14px] leading-[21px] md:text-left text-center">
                  “ควรมีบุคคลหรือองค์กรในระดับสูง
                  ซึ่งไม่เกี่ยวกับพระมหากษัตริย์โดยทางหนึ่งทางใด
                  อาจเป็นองค์กรที่มีอยู่แล้วเช่น อัยการสูงสุด
                  รัฐมนตรีกระทรวงวัฒนธรรม นายกรัฐมนตรี
                  หรือตั้งองค์กรใหม่ขึ้นกลั่นกรองก่อนจะอนุมัติให้ดำเนินคดีได้
                  อย่าปล่อยให้ใครๆ ก็สามารถตั้งตัวเป็นโจทย์ฟ้องร้องได้
                  และปล่อยให้ตำรวจชั้นผู้น้อยและอัยการชั้นผู้น้อย
                  ต้องใช้วินิจฉัยของตนเองว่าจะดำเนินคดีหรือไม่
                  ซึ่งยากที่จะใช้อำนาจวินิจฉัยนั้นอย่างเที่ยงธรรม”
                </p>
                <div className="flex md:flex-row flex-col items-center gap-5">
                  <img
                    src="public/images/person-3.png"
                    alt=""
                    className="md:w-[86px] w-[64px]"
                  />
                  <div className="md:text-left text-center">
                    <h3 className="text-[12px] leading-[18px] font-bold">
                      นิธิ เอียวศรีวงศ์
                    </h3>
                    <p className="text-[12px] leading-[18px]">
                      อดีตอาจารย์ประจำภาควิชาประวัติศาสตร์ คณะมนุษยศาสตร์
                      มหาวิทยาลัยเชียงใหม่
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:h-[164px] h-[90px] flex items-center justify-center">
          <p className="text-[#636363] md:text-[12px] md:leading-[18px] text-[10px] leading-[15px]">
            © PU Dev Challenge - Developed by Chonticha Li
          </p>
        </div>
      </div>
    </>
  )
}

export default App
