import React from "react";

const images = [
    // { src: require("../Images/2nd_image.jpg"), alt: "Image 1", className: "col-span-2 row-span-2 imgheightclass" },
    // { src: require("../Images/secondimage.jpg"), alt: "Image 2", className: "smallimage" },
    // { src: require("../Images/untitled-1-22.jpg"), alt: "Image 3", className: "smallimage" },
    // { src: require("../Images/6B1A4723.JPG"), alt: "Image 4", className: "smallimage" },
    // { src: require("../Images/1B7A7946.jpg"), alt: "Image 6", className: "row-span-2  col-span-2 imgheightclass" },
    // { src: require("../Images/6B1A5960.jpg"), alt: "Image 5", className: "smallimage" },
    // { src: require("../Images/3rdimage.jpg"), alt: "Image 7", className: "col-span-2 row-span-2 imgheightclass" },
    // { src: require("../Images/last2nd_image.jpg"), alt: "Image 8", className: "smallimage" },
    // { src: require("../Images/untitled-1-17.jpg"), alt: "Image 9", className: "smallimage" },

    // { src: require("../Images/2026 photos/web 3.jpg.jpeg"), alt: "Image 1", className: "col-span-1 row-span-2 imgheightclass " },
    { src: require("../Images/2026 photos/web 12.jpg.jpeg"), alt: "Image 6", className: "row-span-2  col-span-2 imgheightclass" },
    { src: require("../Images/2026 photos/web 6 (1).jpg.jpeg"), alt: "Image 2", className: "smallimage" },
    { src: require("../Images/2026 photos/web 9.JPG.jpeg"), alt: "Image 3", className: "smallimage" },
    { src: require("../Images/2026 photos/web (1).jpg.jpeg"), alt: "Image 4", className: "smallimage" },
    { src: require("../Images/2026 photos/web 5.jpg.jpeg"), alt: "Image 7", className: "col-span-2 row-span-2 imgheightclass" },
    { src: require("../Images/2026 photos/web (3).jpg.jpeg"), alt: "Image 5", className: "smallimage" },
    { src: require("../Images/2026 photos/web 10.jpg.jpeg"), alt: "Image 5", className: "smallimage" },
    { src: require("../Images/2026 photos/web (1).jpg.jpeg"), alt: "Image 8", className: "smallimage" },
    { src: require("../Images/2026 photos/web (4).jpg.jpeg"), alt: "Image 9", className: "smallimage" },
];

const ImageGrid = () => {
    return (
        <>
            <div className="darkviolet py-1">
                <div className="container">
                    <div className="text-white title text-center text fs-1" style={{ fontFamily: "Hind Vadodara" }}>
                        પારસ પાંધીના સફળ કાર્યક્રમો
                    </div>
                    <div className="bg-danger w-50 mx-auto mb-3" style={{ fontFamily: "Hind Vadodara", height: '3px' }}>

                    </div>

                    <div className="containerimg mx-auto">
                        {images.map((image, index) => (
                            <div key={index} className={`image-box text-white my-3 my-md-0  ${image.className || ""}`}>
                                <img src={image.src} alt={image.alt} className="img-fluid object-fit-lg-fill object-fit-cover" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
};

export default ImageGrid;
