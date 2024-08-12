import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Loading() {
    const countRef = useRef(null);
    const loadingLineRef = useRef(null);
    const loadingPageRef = useRef(null);


    useGSAP(() => {
        const count:any = countRef.current;
        const loadingLine = loadingLineRef.current;
  
        gsap.to(count, {
            innerHTML: 100,
            duration: 0.3,
            ease: 'linear',
            snap: { innerHTML: 1 },
            onUpdate: function () {
                count.innerHTML = Math.round(this.targets()[0].innerHTML);
            },
            // onComplete: () => {
            //     setInterval(() => {
            //         gsap.to(count, {
            //             innerHTML: 100,
            //             duration: 2,
            //             ease: 'power2',
            //             snap: { innerHTML: 1 },
            //             onUpdate: function () {
            //                 count.innerHTML = Math.round(this.targets()[0].innerHTML);
            //             },
            //             onComplete : function(){
            //                 gsap.to(loadingPageRef.current, {
            //                     transform: 'translateY(-100vh)',
            //                     duration: 1,
            //                 })
            //             }
            //         });
            //     }, 500);
            // }
        });
        gsap.from("span",{
            y:1000,
            duration: 2,
        })
        gsap.to(loadingLine, {
            width:'100%',
            duration: 0.3,
            // onComplete: () => {
            //     setInterval(() => {
            //         gsap.to(loadingLine, {
            //             width:'100%',
            //             duration: 2,
            //             ease:"power2"
            //         });
            //     }, 500);
            // }
        });
    });

    // useEffect(async()=>{
    //     const count = countRef.current;
    //     const loadingLine = loadingLineRef.current;
    //     for(let i=0;i<=9;i++)
    //     {
    //         for(let j=0;j<=9;j++)
    //         {
    //             let str = `${i}${j}`;
    //             count.innerHTML = str;
    //             loadingLine.style.width = `${str}%`;
    //             await new Promise(resolve => setTimeout(resolve, 30));
    //             if(count.innerHTML=="37") await new Promise(resolve => setTimeout(resolve, 100));
    //             if(count.innerHTML=="83") await new Promise(resolve => setTimeout(resolve, 300));
    //         }
    //     }
    //     count.innerHTML = 100;
    //     loadingLine.style.width = `100%`;
    // },[])
      
    
  return (
    <main className="text-[#fff] relative">
      <div className="pt-[10vh] w-[100vw] h-[100vh] z-[9999] bg-black absolute top-0 left-0" ref={loadingPageRef}>
        <div className="pl-[200px] ">
          <span className="overflow-hidden" id="span1">
            <div ref={countRef} className="inline-block text-[14vh] align-baseline w-[150px]" id="count">0</div>
            <div className="inline-block text-[15vh] font-sans font-[500]">&nbsp;- 100 <span className="text-blue-800">&nbsp;YOUR</span></div>
          </span>
          <br />
          <span className="overflow-hidden text-[15vh] font-sans font-[500]" id="span1">WEB <span className="text-blue-800">EXPERIENCE</span></span>
          <br />
          <span className="overflow-hidden" id="span1">
            <div className="inline-block text-[15vh] font-sans font-[500]">IS <span className="text-blue-800">LOADING</span> RIGHT</div>
            <div className="inline-block text-[15vh] font-sans font-[500] text-blue-500"> &nbsp;NOW</div>
          </span>
        </div>
        {/* <div className="overflow-hidden ml-[400px]">
            <div className="text-[20px]/[30px] font-[200]">Please wait</div>
            <div className="text-[20px]/[30px] font-[200]">for few seconds...</div>
        </div> */}
        <div className="w-[80%] mt-[50px] bg-slate-600 mx-auto h-[5px] border-[#767676] ">
            <div ref={loadingLineRef}  className="w-[0%] h-[5px] bg-white z-20">
                
            </div>
        </div>
      </div>
      
    </main>
  );
}

export default Loading;