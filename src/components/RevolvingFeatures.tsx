import React from 'react';

export const RevolvingFeatures: React.FC = () => {
  return (
    <div className="flex w-[363px] items-center gap-2.5 p-2.5 max-md:w-full">
      <div className="w-[536px] h-[622px] shrink-0 relative max-md:w-full max-md:h-[400px] max-sm:h-[300px]">
        {/* Secure Icon - Center */}
        <div className="flex w-[150px] h-[180px] flex-col justify-center items-center gap-4 shrink-0 absolute left-[183px] top-[400px] max-md:left-1/2 max-md:-translate-x-1/2 max-md:top-[300px] max-sm:w-[120px] max-sm:h-[140px] max-sm:top-[200px]">
          <div className="w-[150px] h-[135px] relative">
            <svg 
              width="150" 
              height="135" 
              viewBox="0 0 150 135" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path 
                d="M68.5148 122.682C55.144 115.236 44.6079 106.219 37.2092 95.8973C31.5398 87.9868 29.7982 82.1154 29.4956 81.0041L29.125 79.6179V26.8902L74.9995 8.69189L120.874 26.8902V79.6351L120.497 81.0213C120.207 82.1154 118.459 87.9868 112.784 95.9145C105.372 106.225 94.8735 115.247 81.4842 122.699L74.9995 126.308L68.5148 122.682Z" 
                fill="#CFCFCF" 
                stroke="white" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M71.7585 117.67C41.5893 100.869 35.8396 80.4714 35.6111 79.6122L35.4258 78.9191V30.7453L75.0008 15.0502L114.576 30.7453V78.9191L114.391 79.6122C114.162 80.4714 108.406 100.869 78.2432 117.67L75.0008 119.469L71.7585 117.67Z" 
                fill="white"
              />
              <path 
                d="M75.0006 21.5974L41.7188 34.3368V78.226C41.7188 78.226 46.7274 96.9341 75.0006 112.681C103.274 96.9169 108.276 78.226 108.276 78.226V34.3368L75.0006 21.5974Z" 
                fill="#024950"
              />
              <path 
                opacity="0.19" 
                d="M81.4847 122.682C94.8555 115.236 105.385 106.219 112.784 95.8973C118.46 87.9868 120.195 82.1154 120.498 81.0041L120.874 79.6179V26.8902L75 8.69189V126.291L81.4847 122.682Z" 
                fill="black"
              />
            </svg>
          </div>
          <span className="text-[#0A8CBF] text-2xl font-bold tracking-[0.96px] max-sm:text-lg max-sm:tracking-[0.72px]">
            Secure
          </span>
        </div>

        {/* Easy Setup - Left */}
        <div className="flex w-[150px] h-[180px] flex-col justify-center items-center gap-2.5 shrink-0 absolute left-[13px] top-[200px] max-md:left-2.5 max-md:top-[150px] max-sm:w-[120px] max-sm:h-[140px] max-sm:top-[120px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/481229e5f3bde6695bd6eb82f14c0d76e5ac2688?width=272"
            alt="Easy Setup"
            className="w-[136px] h-[142px] shrink-0"
          />
          <span className="text-[#0A8CBF] text-2xl font-bold tracking-[0.96px] max-sm:text-lg max-sm:tracking-[0.72px]">
            Easy Set-up
          </span>
        </div>

        {/* Free - Top Center */}
        <div className="flex w-[150px] h-[180px] flex-col items-center gap-4 shrink-0 absolute left-[183px] top-0 max-md:-translate-x-2/4 max-md:left-2/4 max-md:top-0 max-sm:w-[120px] max-sm:h-[140px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/4433d1e2de0fa0b633ddb1221c71c0e4a21d93b3?width=270"
            alt="Free"
            className="w-[135px] h-[118px] shrink-0"
          />
          <span className="text-[#0A8CBF] text-center text-2xl font-bold tracking-[0.96px] w-full max-sm:text-lg max-sm:tracking-[0.72px]">
            Free
          </span>
        </div>

        {/* Efficient - Top Right */}
        <div className="flex w-[150px] h-[180px] flex-col justify-center items-center gap-4 shrink-0 absolute left-[378px] top-0 max-md:left-auto max-md:right-2.5 max-md:top-0 max-sm:w-[120px] max-sm:h-[140px]">
          <div className="w-[135px] h-[118px] flex items-center justify-center bg-[#0FA4AF] rounded-full">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white"/>
            </svg>
          </div>
          <span className="text-[#0A8CBF] text-center text-2xl font-bold tracking-[0.96px] w-full max-sm:text-lg max-sm:tracking-[0.72px]">
            Efficient
          </span>
        </div>
      </div>
    </div>
  );
};
