import "../App.css";
import React from "react";
import { useState } from "react";


const products = [
    { id: 1, name: "iPhone 17", price: "$799", desc: "Latest iPhone with improved camera", image: "../images/iphone.webp" },
    { id: 2, name: "Galaxy S25", price: "$699", desc: "High-performance Android flagship", image: "../images/samsung.webp" },
    { id: 3, name: "Pixel 10", price: "$599", desc: "Clean Android experience with great camera", image: "../images/pixel.webp" },
    { id: 4, name: "OnePlus 13", price: "$649", desc: "Fast performance with OxygenOS and sleek design", image: "../images/phone.png" },
    { id: 5, name: "Xiaomi Mi 15", price: "$549", desc: "Affordable flagship with powerful specs",image: "../images/phone.png"},
    { id: 6, name: "Sony Xperia Z5", price: "$899", desc: "Premium phone with pro-level camera features", image: "../images/phone.png"},
    { id: 7, name: "Motorola Edge 50", price: "$499", desc: "Balanced mid-range phone with curved display", image: "../images/phone.png"},
    { id: 8, name: "Huawei P70 Pro", price: "$799", desc: "High-end phone with advanced AI photography", image: "../images/phone.png"},
    { id: 9, name: "Nokia X60", price: "$399", desc: "Reliable build with clean Android One experience", image: "../images/phone.png"},
];

function About() {
        const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (

        <div className="info">
            <h1 className="text-3xl font-semibold mb-4">Products</h1>
            <p className="mb-6 text-gray-600">Browse our latest devices and offers..</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((p) => (
                    <div key={p.id} className="product-card p-4 rounded-lg shadow-sm bg-white">
                        <div className="h-64 sm:h-56 md:h-48 lg:h-64 bg-gray-100 rounded-md mb-4 overflow-hidden">
                            <img src={p.image} alt={p.name} className="w-full h-full object-cover object-center" />
                        </div>
                        <h3 className="text-xl font-semibold">{p.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{p.desc}</p>
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold">{p.price}</span>
                        </div>
                        <div className="mt-3">
                            <button onClick={handleOpenModal} type="button" className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-500">Add to cart</button>
                            {showModal && (
                                <div className="modal-overlay" onClick={handleCloseModal}>
                                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                                        <h4>Added to Cart!</h4>
                                        <button onClick={handleCloseModal} className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-500">Close</button>
                                    </div>
                                </div>
                            )}
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>

    );
}

export default About;