import React, { useState } from "react";
import { Stage, Layer, Text, Image as KonvaImage } from "react-konva";

export default function App() {
  const [images, setImages] = useState([]);
  const [textItems, setTextItems] = useState([]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const img = new window.Image();
      img.src = reader.result;
      img.onload = () => {
        setImages([...images, { img, x: 50, y: 50 }]);
      };
    };
    reader.readAsDataURL(file);
  };

  const handleAddText = () => {
    setTextItems([...textItems, { text: "New Text", x: 100, y: 100 }]);
  };

  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <h1 className="text-2xl font-bold">ERLC Livery Designer</h1>
      <div className="flex gap-2">
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <button onClick={handleAddText} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Text
        </button>
      </div>
      <div className="border shadow rounded-lg overflow-hidden">
        <Stage width={800} height={400} className="bg-white">
          <Layer>
            {images.map((img, i) => (
              <KonvaImage key={i} image={img.img} x={img.x} y={img.y} draggable />
            ))}
            {textItems.map((item, i) => (
              <Text
                key={i}
                text={item.text}
                x={item.x}
                y={item.y}
                fontSize={24}
                fill="black"
                draggable
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  );
}
