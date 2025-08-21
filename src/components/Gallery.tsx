import React, { useState, useEffect } from "react";

const images = [
  "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg",
  "https://images.pexels.com/photos/6474468/pexels-photo-6474468.jpeg",
  "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg",
  "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg",
  "https://images.pexels.com/photos/6474476/pexels-photo-6474476.jpeg",
  "https://images.pexels.com/photos/5691608/pexels-photo-5691608.jpeg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Handle ESC key to close lightbox
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = "unset"; // Restore scrolling when lightbox is closed
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <section id="gallery" className="section-padding bg-background-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary-600">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our portfolio of completed projects showcasing our craftsmanship and attention to detail
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover cursor-pointer"
                onClick={() => setSelectedImage(image)}
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-3 cursor-pointer"
            >
              <i className="fas fa-times text-2xl"></i>
            </button>

            <img
              src={selectedImage}
              alt="Lightbox image"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}
