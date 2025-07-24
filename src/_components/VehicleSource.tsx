/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import "../Css/VehicalSource.css"
const commercial = '/media/Commercial Alpha.92c92d40f9116c837d1d.mp4'
const commercialposter = "https://supreme-group.vercel.app/static/media/Commercial%20Alpha-poster.1ff637611e65b3729983.webp"
const commercialCabin = '/media/Commercial-Cabin.69adf15a8021267cbe8c.mp4'
const commercialCabinPoster = "https://supreme-group.vercel.app/static/media/Commercial%20Cabin-poster.ca6125f729975f151343.png"
const commercialEngine = '/media/Commercial-Engine.d8957f7c027ca396858e.mp4'
const commercialEnginePoster = "https://supreme-group.vercel.app/static/media/Commercial%20engine-poster.231a05e75790151a3c5e.png"
const commercialCabinTab = "https://supreme-group.vercel.app/static/media/commercial-cabin.7981ee5cadcf17dbe57012daa413c584.svgg"
const commercialEngineTab = "https://supreme-group.vercel.app/static/media/commercial-engine.474985507c936157fc7a6daa457d4f04.svg"
const commercialBodyTab = "https://supreme-group.vercel.app/static/media/commercial-body.497c72f2daf47ca41c4fd25f86191b69.svg"
const body = '/media/Passenger Alpha.bc06b347f5b526ad9a60.mp4'
const bodyTab = "static/body.png"
const bodyPoster = "https://supreme-group.vercel.app/static/media/Passenger%20Alpha-poster.79cc2a15c16a1082cb62.webp"
const front = '/media/Front.8f5fda304d3095ab6b02.mp4'
const frontTab = "static/Front.png"
const frontPoster = 'https://supreme-group.vercel.app/static/media/Front-poster.6d7fcbc014bc78116141.webp'
const cabin = '/media/Cabin.3260d3e4f52b3804dae5.mp4'
const cabinTab = "static/download.png"
const cabinPoster = "https://supreme-group.vercel.app/static/media/Cabin-poster.7a41f90641f3c760b59e.webp"
const trunk = '/media/Trunk.54bfaa734c0395172c08.mp4'
const trunkTab = "static/Trunk.png"
const trunkPoster = "https://supreme-group.vercel.app/static/media/Trunk-poster.d699ca5f7c47854afaa9.webp"
const exterior = '/media/Exterior.a127ebb308e655c7e32c.mp4'
const exteriorTab = "static/Exterior.png"
const exteriorPoster = "https://supreme-group.vercel.app/static/media/Exterior-poster.dda82b2b32fdc26f0602.webp"
import { Swiper, SwiperSlide } from 'swiper/react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import gsap, { Power1 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules'

gsap.registerPlugin(ScrollTrigger)

const solutions = [
  {
    id: '1',
    title: 'Complete body',
    tabImage: bodyTab,
    video: body,
    poster: bodyPoster,
  },
  {
    id: '2',
    title: 'Front',
    tabImage: frontTab,
    video: front,
    poster: frontPoster,
  },
  {
    id: '3',
    title: 'Cabin ',
    tabImage: cabinTab,
    video: cabin,
    poster: cabinPoster,
  },
  {
    id: '4',
    title: 'Trunk',
    tabImage: trunkTab,
    video: trunk,
    poster: trunkPoster,
  },
  {
    id: '5',
    title: 'Exterior',
    tabImage: exteriorTab,
    video: exterior,
    poster: exteriorPoster,
  },
]

const commercialSolutions = [
  {
    id: '1',
    title: 'Complete Body',
    tabImage: commercialBodyTab,
    video: commercial,
    poster: commercialposter,
  },
  {
    id: '2',
    title: 'Engine',
    tabImage: commercialEngineTab,
    video: commercialEngine,
    poster: commercialEnginePoster,
  },
  {
    id: '3',
    title: 'Cabin',
    tabImage: commercialCabinTab,
    video: commercialCabin,
    poster: commercialCabinPoster,
  },
]

export default function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollController, setScrollController] = useState<any>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [progress, setProgress] = useState(0)


  const [isLargeDevice, setIsLargeDevice] = useState<boolean | null>(null);

  useEffect(() => {
    const checkDevice = () => {
      setIsLargeDevice(window.innerWidth >= 1024);
    };

    checkDevice(); // initial check
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const videoRefSlide2 = useRef<HTMLVideoElement>(null)

  const [refresher, setRefresher] = useState(false)

  useEffect(() => {
    if (!isLargeDevice) return

    const ctx = gsap.context(() => {
      const animPhase1 = gsap.from(containerRef.current, {})
      const newController = ScrollTrigger.create({
        animation: animPhase1,
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
      })

      const timelinePhase1 = gsap.timeline({ paused: true })

      timelinePhase1
        .from('.animated-heading', {
          y: '30vh',
          duration: 2,
          ease: Power1.easeInOut,
        })
        .addLabel('lbl-1', 4)
        .from(
          '.slider-parent',
          {
            y: '40vh',
            opacity: 0,
            duration: 2.5,
            ease: Power1.easeInOut,
          },
          0.5,
        )

        .from(
          '.card-details-1',
          {
            y: '40vh',
            opacity: 0,
            duration: 2,
            ease: Power1.easeInOut,
          },
          0.7,
        )

        .from(
          '.card-details-2',
          {
            y: '40vh',
            opacity: 0,
            duration: 2,
            ease: Power1.easeInOut,
          },
          0.8,
        )

        .from(
          '.video-slide-1',
          {
            y: '50vh',
            opacity: 0,
            duration: 2,
            ease: Power1.easeInOut,
            onUpdate: () => {
              setActiveSlide(0)
            },
          },
          1.1,
        )

        .from(
          '.controls-slide-1',
          {
            y: 50,
            opacity: 0,
            duration: 2,
            ease: Power1.easeInOut,
          },
          2,
        )
        .from(
          '.video-control-1',
          {
            y: 100,
            opacity: 0,
            duration: 2,
            ease: Power1.easeInOut,
          },
          2,
        )

        .to(
          '.video-slide-1',
          {
            y: 0,
            duration: 2,
            ease: Power1.easeInOut,
          },
          4.1,
        )

        .to(
          '.video-slide-1',
          {
            y: -100,
            opacity: 0,
            scale: 0.5,
            duration: 3,
            ease: Power1.easeInOut,
            onUpdate: () => {
              setActiveSlide(0)
            },
          },
          5.5,
        )

        .to(
          '.controls-slide-1',
          {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: Power1.easeInOut,
          },
          6,
        )
        .addLabel('lbl-2', 12)
        .to(
          '.video-slide-2',
          {
            top: -20,
            opacity: 1,
            scale: 1,
            duration: 4,
            ease: Power1.easeInOut,
            onUpdate: () => {
              setActiveSlide(1)
              setActiveIndex(0)
            },
          },
          6.1,
        )

        .to(
          '.card-details-1',
          {
            opacity: 0.2,
            duration: 2,
            ease: Power1.easeInOut,
          },
          6.5,
        )

        .to(
          '.slider-height',
          {
            y: '100%',
            duration: 2,
            ease: Power1.easeInOut,
          },
          6.5,
        )

        .to(
          '.card-details-2',
          {
            opacity: 1,
            duration: 2,
            ease: Power1.easeInOut,
          },
          6.5,
        )

        .to(
          '.video-slide-2',
          {
            opacity: 1,
            duration: 5,
            ease: Power1.easeInOut,
          },
          8,
        )
        .from(
          '.commercial-controls',
          {
            y: 50,
            delay: 0.8,
            opacity: 0,
            duration: 1,
            ease: Power1.easeInOut,
          },
          8.2,
        )

      setScrollController(newController)

      ScrollTrigger.create({
        animation: timelinePhase1,
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom -200%',
        scrub: 3,
        pin: true,
        snap: {
          snapTo: 'labelsDirectional',
          delay: 0,
          duration: 1,
          ease: Power1.easeInOut,
        },
      })
    })

    return () => {
      ctx.revert()
    }
  }, [isLargeDevice, refresher])

  useEffect(() => {
    setTimeout(() => {
      setRefresher((p) => !p)
    }, 1000)
  }, [])

  const togglePlayPause = useCallback(() => {
    let video
    if (activeSlide === 0) {
      video = videoRef.current
      videoRefSlide2.current?.pause()
    } else {
      video = videoRefSlide2.current
      videoRef.current?.pause()
    }
    if (!video) return
    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setIsPlaying(!isPlaying)
  }, [isPlaying, activeSlide])

  useEffect(() => {
    setProgress(0)
    setIsPlaying(true)
  }, [activeIndex, activeSlide])

  useEffect(() => {
    if (activeSlide === 0) {
      videoRef.current?.play()
      videoRefSlide2.current?.pause()
      videoRefSlide2.current!.currentTime = 0
    } else {
      videoRef.current?.pause()
      videoRef.current!.currentTime = 0
      videoRefSlide2.current?.play()
    }
  }, [activeSlide])

  useEffect(() => {
    if (activeIndex === 0) {
      videoRef.current!.currentTime = 0
      videoRef.current?.pause()
    }
  }, [activeIndex])

  const handleSlide = (update: number) => {
    scrollController?.scroll(
      scrollController.start +
      (update / 2) * (scrollController.end - scrollController.start),
    )
  }

  const handleTimeUpdate = useCallback(
    (e: React.SyntheticEvent<HTMLVideoElement>) => {
      const videoElement = e.currentTarget;
      const { currentTime, duration } = videoElement;
      const vidProgress = (currentTime / duration) * 100;
      setProgress(vidProgress);
    },
    [setProgress],
  );
  return (
    <div className="blade-top-padding blade-bottom-padding bg-black manrope-600">
      <section
        ref={containerRef}
        className="bg-black blade-top-padding blade-bottom-padding text-white lg:h-screen lg:overflow-hidden"
      >
        <div className="w-container max-w-none flex flex-col h-full justify-between gap-4 2xl:gap-10 w-full">
          <h2 className="animated-heading hidden w-fit mx-auto md:block text-white font-light text-center blade-top-padding-sm xl:pt-6 z-10 
               text-3xl sm:text-4xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            <span className="sg-translate">
              Evolving the drive with{' '}
              <span className="font-bold">360-degree</span>{' '}
              <br className="hidden md:block" /> comprehensive solutions
            </span>
          </h2>

          {/* Desktop view */}
          <div className="hidden lg:grid grid-cols-[35%_65%] relative ">
            <div className="cards-wrp pl-14 self-cente ml-[15%] relative 2xl:ml-[25%] 2xl:py-10 py-5 flex flex-col ">
              <button
                onClick={() => handleSlide(2)}
                type="button"
                className="card-details-1"
              >
                <h3 className="sg-translate text-3xl font-medium text-left pb-2">
                  Passenger vehicles
                </h3>
                <h6 className="sg-translate font-light text-left 2xl:text-lg">
                  Revving up innovation from <br /> interior to exterior.
                </h6>
              </button>

              <button
                onClick={() => handleSlide(6)}
                type="button"
                className="card-details-2 opacity-20 mt-14"
              >
                <h3 className="sg-translate  text-3xl font-medium text-left pb-2">
                  Commercial vehicles
                </h3>
                <h6 className="sg-translate font-light text-left 2xl:text-lg">
                  Advancing engineering <br /> for heavy-duty vehicles.
                </h6>
              </button>

              <div className="slider-parent absolute left-0 h-full w-[2px] rounded-md bg-gray top-0 ">
                <div className="slider-height h-[50%] w-[2px] bg-white rounded-md" />
              </div>
            </div>

            <div className="relative flex items-center">
              <div className="video-slide-1 self-center mx-auto">
                <SwitchTransition mode="out-in">
                  <CSSTransition
                    key={activeIndex}
                    timeout={400}
                    classNames="fade-show"
                    nodeRef={videoRef}
                  >
                    <video
                      ref={videoRef}
                      autoPlay
                      muted
                      playsInline
                      className="w-auto max-h-[360px] min-h-[230px] 2xl:h-[40vh] h-24"
                      onTimeUpdate={handleTimeUpdate}
                      poster={solutions[activeIndex]?.poster}
                    >
                      <source src={solutions[activeIndex].video} />
                    </video>
                  </CSSTransition>
                </SwitchTransition>
              </div>

              <div className="video-slide-2 z-20 w-[580px] xl:w-[750px] 2xl:w-[900px] h-[110%] absolute top-[80vh] left-1/2 -translate-x-1/2 flex items-center justify-center">
                <SwitchTransition mode="out-in">
                  <CSSTransition
                    key={activeIndex}
                    timeout={300}
                    classNames="fade-show"
                    nodeRef={videoRefSlide2}
                  >
                    <video
                      ref={videoRefSlide2}
                      autoPlay
                      muted
                      playsInline
                      className="w-auto max-h-[360px] scale-105 min-h-[230px] 2xl:h-[40vh] h-24 "
                      onTimeUpdate={handleTimeUpdate}
                      poster={commercialSolutions[activeIndex]?.poster}
                    >
                      <source src={commercialSolutions[activeIndex]?.video} />
                    </video>
                  </CSSTransition>
                </SwitchTransition>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="hidden lg:flex justify-end items-center relative w-container">
            <div className="flex justify-center w-[640px] xl:w-[720px] 2xl:w-[900px] relative">
              <div className="grid grid-cols-5 controls-slide-1">
                {solutions.map((item, index) => {
                  return (
                    <Tab
                      key={item.id}
                      index={index}
                      title={item.title}
                      activeIndex={activeIndex}
                      tabImage={item.tabImage}
                      onClick={(selectedIndex) => setActiveIndex(selectedIndex)}
                    />
                  )
                })}
              </div>

              <div className="grid grid-cols-3 xl:gap-x-8 place-content-center commercial-controls absolute inset-0 w-fit mx-auto">
                {commercialSolutions.map((item, index) => {
                  return (
                    <Tab
                      key={item.id}
                      index={index}
                      title={item.title}
                      activeIndex={activeIndex}
                      tabImage={item.tabImage}
                      onClick={(selectedIndex) => setActiveIndex(selectedIndex)}
                    />
                  )
                })}
              </div>

              <div className="video-control-1 absolute right-0 top-0 bottom-0 my-auto z-50 flex items-center">
                <CircularProgressBarButton
                  progress={progress}
                  isPlaying={isPlaying}
                  togglePlayPause={togglePlayPause}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile view */}
        {/* <div className="lg:hidden blade-top-padding-lg mt-2 text-center w-container">
          <div>
            <h4 className="sg-translate  text-blue mb-2 font-semibold">
              Passenger vehicles
            </h4>
            <p className="sg-translate ">
              Revving up innovation <br className="md:hidden" /> from interior
              to exterior.
            </p>

            <Swiper
              modules={[Navigation, Pagination, Autoplay, A11y]}
              pagination={{
                clickable: true,
              }}
              speed={600}
              spaceBetween={1}
              className="cursor-grab my-4"
            >
              {solutions.map((item) => {
                return (
                  <SwiperSlide
                    key={item.id}
                    className="pb-16 flex flex-col justify-end"
                  >
                    <SolutionCard
                      title={item.title}
                      video={item.video}
                      poster={item.poster}
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>

          <div className="blade-top-padding ">
            <h3 className="sg-translate  mb-2 text-blue text-3xl  font-semibold">
              Commercial vehicless
            </h3>
            <p className="sg-translate ">
              Advancing engineering <br className="md:hidden" /> for heavy-duty
              vehicles.
            </p>

            <Swiper
              modules={[Navigation, Pagination, Autoplay, A11y]}
              pagination={{
                clickable: true,
              }}
              speed={400}
              spaceBetween={20}
              className="cursor-grab my-4 h-full"
              autoHeight
            >
              {commercialSolutions.map((item) => {
                return (
                  <SwiperSlide
                    key={item.id}
                    className="pb-16 flex flex-col justify-end self-stretch h-auto"
                  >
                    <SolutionCard
                      title={item.title}
                      video={item.video}
                      poster={item.poster}
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div> */}
        <div className="lg:hidden px-4 py-6 w-full">
          {/* Passenger Vehicles Section */}
          <div className="mb-10 text-center">
            <h4 className="text-blue-600 text-lg font-semibold mb-2">
              Passenger Vehicles
            </h4>
            <p className="text-sm text-gray-700">
              Revving up innovation <br className="md:hidden" />
              from interior to exterior.
            </p>

            <Swiper
              modules={[Navigation, Pagination, Autoplay, A11y]}
              direction="horizontal"
              slidesPerView={1}          // Show only one slide
              spaceBetween={0}           // No gap
              pagination={{ clickable: true }}
              speed={500}                // Smooth transition speed
              className="my-5"
              allowSlideNext={true}
              allowTouchMove={true}
              allowSlidePrev={true}
            >
              {solutions.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="flex flex-col items-center justify-end pb-12"
                >
                  <SolutionCard
                    title={item.title}
                    video={item.video}
                    poster={item.poster}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Commercial Vehicles Section */}
          <div className="text-center mt-12">
            <h4 className="text-blue-600 text-lg font-semibold mb-2">
              Commercial Vehicles
            </h4>
            <p className="text-sm text-gray-700">
              Advancing engineering <br className="md:hidden" />
              for heavy-duty vehicles.
            </p>

            <Swiper
              modules={[Navigation, Pagination, Autoplay, A11y]}
              direction="horizontal" // Slide left to right
              pagination={{ clickable: true }}
              spaceBetween={16}
              slidesPerView={1.1}
              centeredSlides={true}
              className="my-5"
            >
              {commercialSolutions.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="flex flex-col items-center justify-end pb-12"
                >
                  <SolutionCard
                    title={item.title}
                    video={item.video}
                    poster={item.poster}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </section>
    </div>
  )
}

function SolutionCard({
  video,
  title,
  poster,
}: {
  video: string
  title: string
  poster: string
}) {
  return (
    <div className="text-white flex flex-col justify-between text-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        className="object-cover mb-8 mt-10"
      >
        <source src={video} />
      </video>

      <span className="sg-translate ">{title}</span>
    </div>
  )
}

function CircularProgressBarButton({
  progress,
  togglePlayPause,
  isPlaying,
}: {
  progress: number
  isPlaying: boolean
  togglePlayPause: () => void
}) {
  const radius = 23
  const circumference = 2 * Math.PI * radius

  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="relative inline-block z-50">
      <button
        type="button"
        onClick={togglePlayPause}
        className="p-3 2xl:p-4 rounded-full z-10 relative"
      >
        {!isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 12 12"
          >
            <path
              fill="currentColor"
              d="M4.496 1.994A1 1 0 0 0 3 2.862v6.277a1 1 0 0 0 1.496.868l5.492-3.139a1 1 0 0 0 0-1.736z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2m6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2"
            />
          </svg>
        )}
      </button>
      <svg
        className="absolute top-0 left-0 z-0"
        width="100%"
        height="100%"
        viewBox="0 0 48 48"
        style={{ transform: 'rotate(-90deg)' }}
      >
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="2.5"
        />
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
    </div>
  )
}

function Tab({
  title,
  index,
  activeIndex,
  tabImage,
  onClick,
}: {
  title: string
  tabImage: string
  index: number
  activeIndex: number
  onClick: (selectedIndex: number) => void
}) {
  return (
    <button
      id={`control-${index}`}
      type="button"
      onClick={() => onClick(index)}
      aria-label={title}
      className={`flex flex-col font-light items-center justify-center transition-opacity duration-300 hover:opacity-100 
      cursor-pointer
                      ${activeIndex === index ? 'opacity-100' : ' opacity-50 '}
                    `}
    >
      <img src={tabImage} alt={title} className="max-h-16 pt-1 2xl:max-h-20" />
      <span className="sg-translate -mt-1 text-sm 2xl:text-base">{title}</span>
    </button>
  )
}
