import React from "react";
import bannerImg from "../../assets/books.jpg";

const Banner = () => {
    return (
        <div className="px-8 py-16 rounded-3xl hero bg-base-200">
            <div className="flex-col hero-content lg:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold leading-normal  font-playfair">
                        Books to freshen up your bookshelf
                    </h1>
                    <button className="px-4 py-2 rounded-lg font-semibold font-work-sans bg-[#23BE0A] text-white">
                        View The List
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
