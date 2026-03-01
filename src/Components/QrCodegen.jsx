import React, { useRef } from 'react'
import { QRCodeCanvas } from "qrcode.react";
import centerImage from "../Images/2026 photos/Buynow poster.jpg";
function QrCodegen() {
    const qrRef = useRef(null);

    const downloadQR = () => {
        const canvas = qrRef.current.querySelector("canvas");
        const pngUrl = canvas.toDataURL("image/png");

        const downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "bhagwad-gita-qr.png";
        downloadLink.click();
    };

    return (
        <div style={{ textAlign: "center", padding: 40 }}>

            <div ref={qrRef}>
                <QRCodeCanvas
                    value="https://bhagwadgita-nu.vercel.app/"
                    size={1000}          // 🔥 High resolution
                    level="H"
                    includeMargin={true}
                    bgColor="#ffffff"
                    fgColor="#000000"
                />
            </div>

            <br />

            <button
                onClick={downloadQR}
                style={{
                    padding: "12px 24px",
                    fontSize: "16px",
                    background: "#000",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer"
                }}
            >
                Download QR Code
            </button>
        </div>
    );
};

export default QrCodegen


/* WITH IMAGE IN CENTER */
// import React, { useRef } from 'react'
// import { QRCodeCanvas } from "qrcode.react";
// import centerImage from "../Images/2026 photos/Buynow poster.jpg";
// function QrCodegen() {
//     const qrRef = useRef(null);

//     const downloadQR = () => {
//         const canvas = qrRef.current.querySelector("canvas");
//         const pngUrl = canvas
//             .toDataURL("image/png")
//             .replace("image/png", "image/octet-stream");

//         const downloadLink = document.createElement("a");
//         downloadLink.href = pngUrl;
//         downloadLink.download = "bhagwad-gita-qr.png";
//         document.body.appendChild(downloadLink);
//         downloadLink.click();
//         document.body.removeChild(downloadLink);
//     };

//     return (
//         <div>
//             <div style={{ textAlign: "center", padding: 40 }}>

//                 {/* High Quality QR */}
//                 <div ref={qrRef}>
//                     <QRCodeCanvas
//                         value="https://bhagwadgita-nu.vercel.app/"
//                         size={1000}          // 🔥 High resolution for print
//                         level="H"
//                         includeMargin={true}
//                         bgColor="#ffffff"
//                         fgColor="#000000"
//                         imageSettings={{
//                             src: centerImage,
//                             height: 180,       // keep proportionate
//                             width: 180,
//                             excavate: true
//                         }}
//                     />
//                 </div>

//                 <br />

//                 <button
//                     onClick={downloadQR}
//                     style={{
//                         padding: "12px 24px",
//                         fontSize: "16px",
//                         background: "#000",
//                         color: "#fff",
//                         border: "none",
//                         borderRadius: "8px",
//                         cursor: "pointer"
//                     }}
//                 >
//                     Download QR Code
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default QrCodegen