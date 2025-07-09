/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';

interface VideoControl {
    id: number;
    label: string;
    video: string;
    poster?: string;
    icon?: string;
}

const VehicleSolutions: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'passenger' | 'commercial'>('passenger');
    const [activePassengerControl, setActivePassengerControl] = useState(0);
    const [activeCommercialControl, setActiveCommercialControl] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
    const passengerSectionRef = useRef<HTMLDivElement>(null);
    const commercialSectionRef = useRef<HTMLDivElement>(null);
    const passengerTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const commercialTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const resetAutoAdvance = (type: 'passenger' | 'commercial') => {
        if (type === 'passenger' && passengerTimeoutRef.current) clearTimeout(passengerTimeoutRef.current);
        if (type === 'commercial' && commercialTimeoutRef.current) clearTimeout(commercialTimeoutRef.current);
    };

    useEffect(() => {
        if (!isMobile) return;
        if (activeTab === 'passenger') {
            resetAutoAdvance('passenger');
            passengerTimeoutRef.current = setTimeout(() => {
                setActivePassengerControl((prev) => (prev + 1) % passengerControls.length);
            }, 4000);
        } else {
            resetAutoAdvance('commercial');
            commercialTimeoutRef.current = setTimeout(() => {
                setActiveCommercialControl((prev) => (prev + 1) % commercialControls.length);
            }, 4000);
        }
        return () => {
            resetAutoAdvance('passenger');
            resetAutoAdvance('commercial');
        };
    }, [activePassengerControl, activeCommercialControl, activeTab, isMobile]);

    const passengerHandlers = useSwipeable({
        onSwipedLeft: () => {
            setActivePassengerControl((prev) => (prev + 1) % passengerControls.length);
        },
        onSwipedRight: () => {
            setActivePassengerControl((prev) => (prev - 1 + passengerControls.length) % passengerControls.length);
        },
        trackMouse: true
    });

    const commercialHandlers = useSwipeable({
        onSwipedLeft: () => {
            setActiveCommercialControl((prev) => (prev + 1) % commercialControls.length);
        },
        onSwipedRight: () => {
            setActiveCommercialControl((prev) => (prev - 1 + commercialControls.length) % commercialControls.length);
        },
        trackMouse: true
    });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isMobile) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                        if (entry.target === passengerSectionRef.current) {
                            setActiveTab('passenger');
                        } else if (entry.target === commercialSectionRef.current) {
                            setActiveTab('commercial');
                        }
                    }
                });
            }, { threshold: [0.1, 0.5, 0.9] });

            if (passengerSectionRef.current) observer.observe(passengerSectionRef.current);
            if (commercialSectionRef.current) observer.observe(commercialSectionRef.current);

            return () => {
                if (passengerSectionRef.current) observer.unobserve(passengerSectionRef.current);
                if (commercialSectionRef.current) observer.unobserve(commercialSectionRef.current);
            };
        }
    }, [isMobile]);

    useEffect(() => {
        videoRefs.current.forEach((video) => {
            if (video) {
                video.currentTime = 0;
                video.play().catch((e) => console.log("Autoplay prevented:", e));
            }
        });
    }, [activePassengerControl, activeCommercialControl, activeTab]);

    const passengerControls: VideoControl[] = [
        { id: 0, label: 'Complete Body', video: "/static/Passenger Alpha - Trim.mp4" },
        { id: 1, label: 'Front', video: "/static/Front.mp4" },
        { id: 2, label: 'Cabin', video: "/static/Cabin.mp4" },
        { id: 3, label: 'Trunk', video: "/static/Trunk.mp4" },
        { id: 4, label: 'Exterior', video: "/static/Exterior.mp4" },
    ];

    const commercialControls: VideoControl[] = [
        { id: 0, label: 'Complete Body', video: "/static/CommercialAlpha.mp4" },
        { id: 1, label: 'Engine', video: "/static/Commercial-Engine.mp4" },
        { id: 2, label: 'Cabin', video: "/static/Commercial-Cabin.mp4" },
    ];

    const BodyIcon = () => <img src={'/static/body.png'} alt='Complete Body icon' className="w-12 h-12" />;
    const EngineIcon = () => <img src={'/static/body.png'} alt='Engine icon' className="w-12 h-12" />;
    const CabinIcon = () => <img src={'/static/download.png'} alt='Cabin icon' className="w-12 h-12" />;
    const FrontIcon = () => <img src={'/static/Front.png'} alt='Front icon' className="w-12 h-12" />;
    const TrunkIcon = () => <img src={'/static/Trunk.png'} alt='Trunk icon' className="w-12 h-12" />;
    const ExteriorIcon = () => <img src={'/static/exterior.png'} alt='Exterior icon' className="w-12 h-12" />;

    const getIcon = (label: string) => {
        switch (label.toLowerCase()) {
            case 'complete body': return <BodyIcon />;
            case 'exterior': return <ExteriorIcon />;
            case 'trunk': return <TrunkIcon />;
            case 'front': return <FrontIcon />;
            case 'engine': return <EngineIcon />;
            case 'cabin': return <CabinIcon />;
            default: return <BodyIcon />;
        }
    };
    return (
        <div className="bg-black">
            <div className="relative w-full lg:h-auto">
                <section className="bg-black py-10 lg:py-20 text-white lg:h-screen lg:overflow-hidden">
                    <h2 className="hidden md:block w-fit mx-auto text-white font-light text-center text-3xl lg:text-4xl xl:text-5xl px-4 lg:px-0">
                        Evolving the drive with <span className="font-bold">360-degree nonwoven</span> <br className="hidden md:block" /> solutions
                    </h2>

                    {/* Desktop View */}
                    {!isMobile && (
                        <div className="hidden lg:grid grid-cols-[35%_65%] relative mt-12">
                            <div className="pl-14 self-center ml-[15%] relative 2xl:ml-[25%] 2xl:py-10 py-5 flex flex-col">
                                <button
                                    type="button"
                                    className={`text-left transition-opacity duration-300 ${activeTab === 'passenger' ? 'opacity-100' : 'opacity-20 hover:opacity-70'}`}
                                    onClick={() => setActiveTab('passenger')}
                                >
                                    <h3 className="font-medium text-2xl pb-2">Passenger vehicles</h3>
                                    <h6 className="font-light text-lg 2xl:text-xl">Revving up Nonwoven Innovation from interior to exterior.</h6>
                                </button>
                                <button
                                    type="button"
                                    className={`text-left mt-14 transition-opacity duration-300 ${activeTab === 'commercial' ? 'opacity-100' : 'opacity-20 hover:opacity-70'}`}
                                    onClick={() => setActiveTab('commercial')}
                                >
                                    <h3 className="font-medium text-2xl pb-2">Commercial vehicles</h3>
                                    <h6 className="font-light text-lg 2xl:text-xl">Advancing engineering for heavy-duty vehicles.</h6>
                                    <p className="text-sm text-gray-400 mt-2">Click anywhere for next slide</p>
                                </button>
                                <div className="absolute left-0 h-full w-[2px] rounded-md bg-gray-500 top-0">
                                    <div className={`h-[50%] w-[2px] bg-white rounded-md transition-transform duration-300 ${activeTab === 'commercial' ? 'translate-y-full' : 'translate-y-0'}`}></div>
                                </div>
                            </div>

                            <div className="relative flex items-center">
                                {activeTab === 'passenger' && (
                                    <div className="self-center mx-auto">
                                        <video
                                            ref={el => { if (el) videoRefs.current.set(passengerControls[activePassengerControl].id, el); }}
                                            autoPlay
                                            playsInline
                                            loop
                                            muted
                                            className="w-auto max-h-[360px] min-h-[230px] 2xl:h-[40vh] h-24"
                                            key={`passenger-video-${activePassengerControl}`}
                                        >
                                            <source src={passengerControls[activePassengerControl].video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                )}
                                {activeTab === 'commercial' && (
                                    <div className="z-20 w-[580px] xl:w-[750px] 2xl:w-[900px] h-[110%] absolute top-[80vh] left-1/2 -translate-x-1/2 flex items-center justify-center">
                                        <video
                                            // Store ref using a unique ID for commercial videos (offset to avoid collision with passenger IDs)
                                            ref={el => { if (el) videoRefs.current.set(commercialControls[activeCommercialControl].id + 100, el); }}
                                            autoPlay
                                            playsInline
                                            loop
                                            muted
                                            className="w-auto max-h-[360px] scale-105 min-h-[230px] 2xl:h-[40vh] h-24"
                                            key={`commercial-video-${activeCommercialControl}`} // Key change forces re-render if video source truly changes
                                        >
                                            <source src={commercialControls[activeCommercialControl].video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Controls for Desktop */}
                    {!isMobile && (
                        <div className="hidden lg:flex justify-end items-center relative mt-8">
                            <div className="flex justify-center w-[640px] xl:w-[720px] 2xl:w-[900px] relative">
                                {activeTab === 'passenger' && (
                                    <div className="grid grid-cols-5 gap-4 w-full">
                                        {passengerControls.map((control) => (
                                            <button
                                                key={control.id}
                                                type="button"
                                                aria-label={control.label}
                                                className={`flex flex-col items-center justify-center transition-all duration-300 cursor-pointer group ${activePassengerControl === control.id ? 'opacity-100 text-white' : 'opacity-50 text-gray-400 hover:opacity-80 hover:text-gray-200'}`}
                                                onClick={() => setActivePassengerControl(control.id)}
                                            >
                                                <div className="p-2 rounded-full group-hover:bg-gray-800 transition-colors duration-300">
                                                    {getIcon(control.label)}
                                                </div>
                                                <span className="mt-2 text-sm 2xl:text-base">{control.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                                {activeTab === 'commercial' && (
                                    <div className="grid grid-cols-3 gap-8 place-content-center w-full">
                                        {commercialControls.map((control) => (
                                            <button
                                                key={control.id}
                                                type="button"
                                                aria-label={control.label}
                                                className={`flex flex-col items-center justify-center transition-all duration-300 cursor-pointer group ${activeCommercialControl === control.id ? 'opacity-100 text-white' : 'opacity-50 text-gray-400 hover:opacity-80 hover:text-gray-200'}`}
                                                onClick={() => setActiveCommercialControl(control.id)}
                                            >
                                                <div className="p-2 rounded-full group-hover:bg-gray-800 transition-colors duration-300">
                                                    {getIcon(control.label)}
                                                </div>
                                                <span className="mt-2 text-sm 2xl:text-base">{control.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Mobile View */}
                    {isMobile && (
                        <div className="lg:hidden mt-8 text-center w-full px-4">
                            {/* Passenger Vehicles */}
                            <div className="mb-12" ref={passengerSectionRef}>
                                <h4 className="text-xl text-blue-400 mb-2 font-semibold">Passenger vehicles</h4>
                                <p className="text-gray-300 mb-6">Revving up Nonwoven Innovation from interior to exterior.</p>

                                <div className="relative" {...passengerHandlers}>
                                    <div className="overflow-hidden">
                                        <div
                                            className="flex transition-transform duration-300"
                                            style={{ transform: `translateX(-${activePassengerControl * 100}%)` }}
                                        >
                                            {passengerControls.map((control) => (
                                                <div key={control.id} className="w-full flex-shrink-0 px-2">
                                                    <div className="text-white flex flex-col items-center">
                                                        <video
                                                            // Store ref using a unique ID for mobile passenger videos
                                                            ref={el => { if (el) videoRefs.current.set(control.id, el); }}
                                                            autoPlay
                                                            loop
                                                            playsInline
                                                            muted
                                                            className="w-full h-auto max-h-64 rounded-lg"
                                                            key={`mobile-passenger-video-${control.id}`}
                                                        >
                                                            <source src={control.video} type="video/mp4" />
                                                            Your browser does not support the video tag.
                                                        </video>
                                                        <span className="mt-4 text-white font-medium">{control.label}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex justify-center space-x-2 mt-6">
                                        {passengerControls.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`h-2 w-2 rounded-full transition-all duration-300 ${activePassengerControl === index ? 'bg-white w-6' : 'bg-gray-500'}`}
                                                onClick={() => setActivePassengerControl(index)}
                                                aria-label={`Go to slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Commercial Vehicles */}
                            <div className="mt-12" ref={commercialSectionRef}>
                                <h3 className="text-xl mb-2 text-blue-400 font-semibold">Commercial vehicles</h3>
                                <p className="text-gray-300 mb-6">Advancing engineering for heavy-duty vehicles.</p>
                                <p className="text-sm text-gray-400 mb-4">Click anywhere for next slide</p>

                                <div className="relative" {...commercialHandlers}>
                                    <div className="overflow-hidden">
                                        <div
                                            className="flex transition-transform duration-300"
                                            style={{ transform: `translateX(-${activeCommercialControl * 100}%)` }}
                                        >
                                            {commercialControls.map((control) => (
                                                <div key={control.id} className="w-full flex-shrink-0 px-2">
                                                    <div className="text-white flex flex-col items-center">
                                                        <video
                                                            // Store ref using a unique ID for mobile commercial videos
                                                            ref={el => { if (el) videoRefs.current.set(control.id + 100, el); }}
                                                            autoPlay
                                                            loop
                                                            playsInline
                                                            muted
                                                            className="w-full h-auto max-h-64 rounded-lg"
                                                            key={`mobile-commercial-video-${control.id}`}
                                                        >
                                                            <source src={control.video} type="video/mp4" />
                                                            Your browser does not support the video tag.
                                                        </video>
                                                        <span className="mt-4 text-white font-medium">{control.label}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex justify-center space-x-2 mt-6">
                                        {commercialControls.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`h-2 w-2 rounded-full transition-all duration-300 ${activeCommercialControl === index ? 'bg-white w-6' : 'bg-gray-500'}`}
                                                onClick={() => setActiveCommercialControl(index)}
                                                aria-label={`Go to slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default VehicleSolutions;