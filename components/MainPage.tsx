import React from 'react';
import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ReactCompareImage from 'react-compare-image';

const products = [
    { id: 1, src: '/explore/home01.jpg', alt: '3d-ai-social-media-images-01' },
    { id: 2, src: '/explore/home02.jpg', alt: '3d-ai-social-media-images-02' },
    { id: 3, src: '/explore/home03.jpg', alt: '3d-ai-social-media-images-04' },
    { id: 4, src: '/explore/home04.jpg', alt: '3d-ai-social-media-images-04' },
    { id: 5, src: '/explore/home05.jpg', alt: '3d-ai-social-media-images-05' },
    { id: 6, src: '/explore/home06.jpg', alt: '3d-ai-social-media-images-06' },
];
export const MainPage = () => {
    return (
        <div className="bg-white h-full p-4 md:p-8 lg:p-8">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold mb-4 text-black">
                    PS2 AI - PS2 Filter & Replicate Face To Many
                </h2>
                <h3 className="text-lg text-gray-600 mb-8">
                    Makes it simple for you to create PS2 Filter AI photos in seconds, to participate in this PS2 Filter
                    AI trend.
                </h3>
                <div
                    className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-6 lg:gap-10 pl-4 pr-4 md:pl-20 md:pr-20">
                    <Link href="https://www.disneyaiposter.com/apps/ps2-filter"
                          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg">
                        PS2 Filter
                    </Link>
                    <Link href="https://www.disneyaiposter.com/apps/face-to-many"
                          className="bg-green-500 hover-bg-green-600 text-white font-semibold py-3 px-4 rounded-lg">
                        Face To Many
                    </Link>
                </div>
                <div
                    className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-6 lg:gap-10 pl-4 pr-4 md:pl-20 md:pr-20">
                    <Link href="https://apps.apple.com/us/app/facetomany/id6480170564" target="_blank"
                          className="flex justify-center items-center gap-2 border border-blue-800 hover:border-blue-700 text-blue-800 font-semibold py-3 px-4 rounded-lg">
                        <svg className="block" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
                            <defs>
                                <linearGradient id="logosAppleAppStore0" x1="50%" x2="50%" y1="0%" y2="100%">
                                    <stop offset="0%" stop-color="#17C9FB"/>
                                    <stop offset="100%" stop-color="#1A74E8"/>
                                </linearGradient>
                            </defs>
                            <path fill="url(#logosAppleAppStore0)"
                                  d="M56.064 0h143.872C230.9 0 256 25.1 256 56.064v143.872C256 230.9 230.9 256 199.936 256H56.064C25.1 256 0 230.9 0 199.936V56.064C0 25.1 25.1 0 56.064 0Z"/>
                            <path fill="#FFF"
                                  d="m82.042 185.81l.024.008l-8.753 15.16c-3.195 5.534-10.271 7.43-15.805 4.235c-5.533-3.195-7.43-10.271-4.235-15.805l6.448-11.168l.619-1.072c1.105-1.588 3.832-4.33 9.287-3.814c0 0 12.837 1.393 13.766 8.065c0 0 .126 2.195-1.351 4.391Zm124.143-38.72h-27.294c-1.859-.125-2.67-.789-2.99-1.175l-.02-.035l-29.217-50.606l-.038.025l-1.752-2.512c-2.872-4.392-7.432 6.84-7.432 6.84c-5.445 12.516.773 26.745 2.94 31.046l40.582 70.29c3.194 5.533 10.27 7.43 15.805 4.234c5.533-3.195 7.43-10.271 4.234-15.805l-10.147-17.576c-.197-.426-.539-1.582 1.542-1.587h13.787c6.39 0 11.57-5.18 11.57-11.57c0-6.39-5.18-11.57-11.57-11.57Zm-53.014 15.728s1.457 7.411-4.18 7.411H48.092c-6.39 0-11.57-5.18-11.57-11.57c0-6.39 5.18-11.57 11.57-11.57h25.94c4.188-.242 5.18-2.66 5.18-2.66l.024.012l33.86-58.648l-.01-.002c.617-1.133.103-2.204.014-2.373l-11.183-19.369c-3.195-5.533-1.299-12.61 4.235-15.804c5.534-3.195 12.61-1.3 15.805 4.234l5.186 8.983l5.177-8.967c3.195-5.533 10.271-7.43 15.805-4.234c5.534 3.195 7.43 10.27 4.235 15.804l-47.118 81.61c-.206.497-.269 1.277 1.264 1.414h28.164l.006.275s16.278.253 18.495 15.454Z"/>
                        </svg>
                        Face To Many On APPStore
                    </Link>
                    <Link href="https://sunoaidownload.com" target="_blank"
                          className="flex justify-center items-center gap-2 border border-green-500 hover-border-green-600 text-green-500 font-semibold py-3 px-4 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                  d="M9.271 14.669a.661.661 0 0 1-.88-.269l-.043-.095l-1.818-3.998a.473.473 0 0 1 0-.146a.327.327 0 0 1 .335-.327a.305.305 0 0 1 .196.066l2.18 1.527a.988.988 0 0 0 .546.167a.894.894 0 0 0 .342-.066l10.047-4.5a10.73 10.73 0 0 0-8.171-3.526C6.479 3.502 2 7.232 2 11.87a7.83 7.83 0 0 0 3.46 6.296a.662.662 0 0 1 .24.727l-.45 1.701a.945.945 0 0 0-.051.24a.327.327 0 0 0 .334.334a.416.416 0 0 0 .19-.058l2.18-1.265c.16-.098.343-.151.53-.152c.1 0 .198.014.292.043c1.062.3 2.16.452 3.264.45c5.525 0 10.011-3.729 10.011-8.33a7.228 7.228 0 0 0-1.098-3.883L9.351 14.625l-.08.044Z"/>
                        </svg>
                        Suno AI Download
                    </Link>
                </div>
                {/*<AdsHomeTop />*/}
                <div id="example" className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5">
                    <ReactCompareImage
                        leftImage="https://imgc.cc/2024/03/24/65ffc0c6b44c3.jpeg"
                        rightImage="https://imgc.cc/2024/03/24/65ffc0c6b6ddc.jpg"
                    />
                    <ReactCompareImage
                        leftImage="https://imgc.cc/2024/03/24/65ffc45a0524c.jpeg"
                        rightImage="https://imgc.cc/2024/03/24/65ffc459c3929.jpg"
                    />
                    <ReactCompareImage
                        leftImage="https://imgc.cc/2024/03/24/65ffca9f2a964.jpeg"
                        rightImage="https://imgc.cc/2024/03/24/65ffcaa0bf0f9.png"
                    />
                    <ReactCompareImage
                        leftImage="https://imgc.cc/2024/03/24/65ffcaa044783.jpeg"
                        rightImage="https://imgc.cc/2024/03/24/65ffcaa0d29b7.png"
                    />
                </div>
            </div>
        </div>
    );
};
