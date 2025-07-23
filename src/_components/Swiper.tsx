import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface ControlItem {
    id: number;
    label: string;
    icon: string;
}

interface VideoItem {
    src: string;
    poster: string;
}

const ProductShowcase = () => {
    const [activeTab, setActiveTab] = useState<'passenger' | 'commercial'>('passenger');
    const [activeControl, setActiveControl] = useState<number>(0);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    // Initialize videoRefs array


    // Passenger vehicle controls
    const passengerControls: ControlItem[] = [
        { id: 0, label: 'Complete body', icon: 'data:image/png;base64,...' },
        { id: 1, label: 'Front', icon: 'data:image/png;base64,...' },
        { id: 2, label: 'Cabin', icon: 'data:image/png;base64,...' },
        { id: 3, label: 'Trunk', icon: 'data:image/png;base64,...' },
        { id: 4, label: 'Exterior', icon: 'data:image/png;base64,...' }
    ];

    // Commercial vehicle controls
    const commercialControls: ControlItem[] = [
        { id: 0, label: 'Complete Body', icon: '/commercial-body.svg' },
        { id: 1, label: 'Engine', icon: '/commercial-engine.svg' },
        { id: 2, label: 'Cabin', icon: '/commercial-cabin.svg' }
    ];


    if (videoRefs.current.length === 0) {
        videoRefs.current = new Array(passengerControls.length + commercialControls.length).fill(null);
    }
    // Passenger vehicle videos
    const passengerVideos: VideoItem[] = [
        { src: '/passenger-complete.mp4', poster: '/passenger-poster.webp' },
        { src: '/passenger-front.mp4', poster: '/front-poster.webp' },
        { src: '/passenger-cabin.mp4', poster: '/cabin-poster.webp' },
        { src: '/passenger-trunk.mp4', poster: '/trunk-poster.webp' },
        { src: '/passenger-exterior.mp4', poster: '/exterior-poster.webp' }
    ];

    // Commercial vehicle videos
    const commercialVideos: VideoItem[] = [
        { src: '/commercial-complete.mp4', poster: '/commercial-poster.webp' },
        { src: '/commercial-engine.mp4', poster: '/commercial-engine-poster.png' },
        { src: '/commercial-cabin.mp4', poster: '/commercial-cabin-poster.png' }
    ];

    const handleControlClick = (index: number) => {
        setActiveControl(index);
        // You would add logic here to handle the video change for desktop view
    };

    // Proper ref callback function
    const setVideoRef = (index: number) => (el: HTMLVideoElement | null) => {
        videoRefs.current[index] = el;
    };

    return (
        <div className="bg-black text-white py-8 lg:py-16">
            {/* Heading */}
            <div className="container mx-auto px-4">
                <h2 className="text-3xl lg:text-4xl font-light text-center mb-8 lg:mb-16">
                    Evolving the drive with <span className="font-bold">360-degree</span> <br className="hidden lg:block" /> comprehensive solutions
                </h2>
            </div>

            {/* Desktop View */}
            <div className="hidden lg:block">
                <div className="container mx-auto px-4">
                    {/* Tab Buttons */}
                    <div className="flex justify-center mb-8">
                        <button
                            className={`px-6 py-3 text-lg font-medium ${activeTab === 'passenger' ? 'text-white border-b-2 border-white' : 'text-gray-400'}`}
                            onClick={() => setActiveTab('passenger')}
                        >
                            Passenger vehicles
                        </button>
                        <button
                            className={`px-6 py-3 text-lg font-medium ${activeTab === 'commercial' ? 'text-white border-b-2 border-white' : 'text-gray-400'}`}
                            onClick={() => setActiveTab('commercial')}
                        >
                            Commercial vehicles
                        </button>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-12 gap-8">
                        {/* Controls */}
                        <div className="col-span-4">
                            {activeTab === 'passenger' ? (
                                <div className="flex flex-col space-y-8">
                                    {passengerControls.map((control, index) => (
                                        <button
                                            key={control.id}
                                            className={`flex items-center space-x-4 p-4 transition-opacity ${activeControl === index ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
                                            onClick={() => handleControlClick(index)}
                                        >
                                            <img src={control.icon} alt={control.label} className="w-16 h-16" />
                                            <span className="text-lg">{control.label}</span>
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="grid grid-cols-3 gap-4">
                                    {commercialControls.map((control, index) => (
                                        <button
                                            key={control.id}
                                            className={`flex flex-col items-center p-4 transition-opacity ${activeControl === index ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
                                            onClick={() => handleControlClick(index)}
                                        >
                                            <img src={control.icon} alt={control.label} className="w-16 h-16" />
                                            <span className="mt-2 text-sm">{control.label}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Video */}
                        <div className="col-span-8 flex items-center justify-center">
                            <div className="relative w-full max-w-3xl">
                                {activeTab === 'passenger' ? (
                                    <video
                                        ref={setVideoRef(activeControl)}
                                        autoPlay
                                        loop
                                        playsInline
                                        poster={passengerVideos[activeControl].poster}
                                        className="w-full h-auto"
                                    >
                                        <source src={passengerVideos[activeControl].src} type="video/mp4" />
                                    </video>
                                ) : (
                                    <video
                                        ref={setVideoRef(activeControl + passengerControls.length)}
                                        autoPlay
                                        loop
                                        playsInline
                                        poster={commercialVideos[activeControl].poster}
                                        className="w-full h-auto"
                                    >
                                        <source src={commercialVideos[activeControl].src} type="video/mp4" />
                                    </video>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="lg:hidden">
                <div className="container mx-auto px-4">
                    {/* Passenger Vehicles */}
                    <div className="mb-16">
                        <h3 className="text-xl text-blue-500 mb-2 font-semibold text-center">Passenger vehicles</h3>
                        <p className="text-center mb-8">Revving up innovation from interior to exterior.</p>

                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            className="my-4"
                        >
                            {passengerVideos.map((video, index) => (
                                <SwiperSlide key={index} className="pb-16">
                                    <div className="text-white flex flex-col items-center">
                                        <video
                                            autoPlay
                                            loop
                                            playsInline
                                            poster={video.poster}
                                            className="w-full max-w-md mb-8 mt-10"
                                        >
                                            <source src={video.src} type="video/mp4" />
                                        </video>
                                        <span>{passengerControls[index].label}</span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Commercial Vehicles */}
                    <div>
                        <h3 className="text-xl text-blue-500 mb-2 font-semibold text-center">Commercial vehicles</h3>
                        <p className="text-center mb-8">Advancing engineering for heavy-duty vehicles.</p>

                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            className="my-4"
                        >
                            {commercialVideos.map((video, index) => (
                                <SwiperSlide key={index} className="pb-16">
                                    <div className="text-white flex flex-col items-center">
                                        <video
                                            autoPlay
                                            loop
                                            playsInline
                                            poster={video.poster}
                                            className="w-full max-w-md mb-8 mt-10"
                                        >
                                            <source src={video.src} type="video/mp4" />
                                        </video>
                                        <span>{commercialControls[index].label}</span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductShowcase;