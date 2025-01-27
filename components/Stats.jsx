"use client"; 

import CountUp from "react-countup"; 

const stats = [ 
    { num: 1, text: "Years of experience"

    },
    { num: 6, text: "Projects completed"

    },
    { num: 7, text: "Technologies learned"

    },
    { num: 458 , text: "Code Commits"

    },

 
];
const Stats = () => {
    return (
      <section>
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-6 max-w-[86vw] mx-auto xl:max-w-none">
            {stats.map((item, index) => (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={0}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                 className={`${
                    item.text.length > 15 ? "max-w-[100px]" : "max-w-[150px]"
                 } leading-snug text-white/80`}
                >

                </p>


                <div>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Stats;