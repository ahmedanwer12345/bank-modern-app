import styles from "../styles";
import { feedback } from "../constants";
import { quotes } from "../assets";


const Testimonials = () =>
(
    <section id="clients" className={`flex-col ${styles.flexStart} ${styles.paddingY}`}>
        <div className={`flex justify-between items-center md:flex-row flex-col w-full relative`}>
            <h2 className={`${styles.heading2}`}>
                What people are <br className="sm:block hidden" /> saying about us
            </h2>
            <div className="w-full md:mt-0 mt-6">
                <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                    Everything you need to accept card payments and grow your business
                    anywhere on the planet.
                </p>
            </div>
        </div>
        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
            {feedback.map((feed , index) => (
                <div key={feed.id} className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
                <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
                <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
                  {feed.content}
                </p>
            
                <div className="flex flex-row">
                  <img src={feed.img} alt={feed.name} className="w-[48px] h-[48px] rounded-full" />
                  <div className="flex flex-col ml-4">
                    <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                      {feed.name}
                    </h4>
                    <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                      {feed.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
    </section>
)


export default Testimonials