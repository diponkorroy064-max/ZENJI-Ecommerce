"use client";
import { useEffect, useRef, useState } from "react";


export default function Banner() {
    const videoRef = useRef(null);
    const [videoFinished, setVideoFinished] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return undefined;
        let pauseTimer = 0;

        const pauseVideo = () => {
            video.pause();
        };

        const onScroll = () => {
            if (video.ended) {
                video.currentTime = 0;
                setVideoFinished(false);
            }

            video.play().catch((error) => {
                if (error.name !== "AbortError") {
                    console.error("Unable to play the banner video.", error);
                }
            });
            window.clearTimeout(pauseTimer);
            pauseTimer = window.setTimeout(pauseVideo, 140);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        const onVideoEnded = () => {
            pauseVideo();
            setVideoFinished(true);
        };

        video.addEventListener("ended", onVideoEnded);

        return () => {
            window.removeEventListener("scroll", onScroll);
            video.removeEventListener("ended", onVideoEnded);
            window.clearTimeout(pauseTimer);
            video.pause();
        };
    }, []);

    return (
        <section
            aria-label="The Origin Drop"
            className="relative isolate min-h-[180vh] bg-[#e6e6e4] font-sans text-[#171717]"
        >
            <div
                className={`${videoFinished ? "relative" : "sticky"
                    } top-0 z-10 flex h-screen items-center overflow-hidden`}
            >

                <video
                    ref={videoRef}
                    aria-hidden="true"
                    muted
                    playsInline
                    preload="metadata"
                    className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
                >
                    <source src="/zenji_video.mp4" type="video/mp4" />
                </video>
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-1 bg-[#171717]/45"
                />


                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-[52%] -z-10 -translate-x-1/2 -translate-y-1/2 select-none text-[37vw] font-black leading-[.7] -tracking-widest text-white/27 sm:top-[44%] sm:text-[clamp(9rem,25vw,25rem)]"
                >
                    STORY
                </div>

                <div className="z-10 w-full px-6 pt-16 text-white sm:ml-[6vw] sm:w-[43%] sm:max-w-150 sm:px-0 sm:pt-8">
                    <p className="mb-5 flex items-center gap-2.5 text-[.64rem] font-bold tracking-[.28em] text-[#ae5455]">
                        <span className="h-[.45rem] w-[.45rem] animate-pulse rounded-full bg-[#c7383d]" />
                        THE_ORIGIN_DROP // SCROLL_TO_MOVE
                    </p>

                    <h1 className="max-w-135 text-[clamp(3.5rem,8vw,7.8rem)] font-black leading-[.82] tracking-[-.075em]">
                        WEAR YOUR
                        <br />
                        STORY
                    </h1>

                    <button type="button" className="group mt-8 bg-[#c7383d] px-6 py-4 text-[.7rem] font-extrabold tracking-[.04em] text-white transition hover:-translate-y-1 hover:bg-[#a92c31]">
                        SHOP THE DROP{" "}
                        <span className="ml-2 inline-block text-base transition group-hover:translate-x-1">
                            →
                        </span>
                    </button>
                </div>

                <div aria-hidden="true" className="absolute right-[9%] top-[63%] z-10 h-2 w-4.5rem animate-pulse rotate-48deg sm:right-[18%] sm:top-[58%]">
                    <span className="absolute inset-0 rounded-[80%_10%_80%_10%] bg-[#191919]" />
                    <span className="absolute left-[42%] top-1 h-[.15rem] w-[1.6rem] bg-[#c57c5d]" />
                </div>
            </div>
        </section>
    );
}

