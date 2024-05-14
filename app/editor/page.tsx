'use client';
import { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';

export default function Editor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [textInput, setTextInput] = useState<string>('');
  const [selectedObject, setSelectedObject] = useState<fabric.Object | null>(null);
  const [canvasState, setCanvasState] = useState<string[]>([]);
  const [currentStateIndex, setCurrentStateIndex] = useState<number>(-1);

  useEffect(() => {
    if (!canvasRef.current) return;

    const newCanvas = new fabric.Canvas(canvasRef.current);
    newCanvas.setHeight(600);
    newCanvas.setWidth(800);
    setCanvas(newCanvas);

    const updateCanvasState = () => {
      const state = newCanvas.toJSON();
      const stateString = JSON.stringify(state);
      setCanvasState((prev) => [...prev.slice(0, currentStateIndex + 1), stateString]);
      setCurrentStateIndex((prev) => prev + 1);
    };

    newCanvas.on('object:modified', updateCanvasState);
    newCanvas.on('object:added', updateCanvasState);

    newCanvas.on('selection:created', (e) => {
      setSelectedObject(e.target);
    });

    newCanvas.on('selection:updated', (e) => {
      setSelectedObject(e.target);
    });

    newCanvas.on('selection:cleared', () => {
      setSelectedObject(null);
    });

    return () => {
      newCanvas.off('object:modified', updateCanvasState);
      newCanvas.off('object:added', updateCanvasState);
      newCanvas.off('selection:created');
      newCanvas.off('selection:updated');
      newCanvas.off('selection:cleared');
    };
  }, [canvasRef.current]);

  const handleImageUpload = (e: Event) => {
    const input = e.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (f) => {
        const data = f.target?.result;
        if (data && canvas) {
          fabric.Image.fromURL(data as string, (img) => {
            canvas.add(img);
            canvas.renderAll();
          });
        }
      };
      reader.readAsDataURL(input.files[0]);
    }
  };

  const addText = () => {
    if (canvas && textInput) {
      const text = new fabric.Textbox(textInput, {
        left: 50,
        top: 50,
        width: 200,
        fontSize: 20,
      });
      canvas.add(text);
      setTextInput('');
    }
  };

  const updateText = () => {
    if (selectedObject && selectedObject instanceof fabric.Textbox) {
      selectedObject.text = textInput;
      canvas?.renderAll();
    }
  };

  const updateColor = (color: string) => {
    if (selectedObject) {
      selectedObject.set('fill', color);
      canvas?.renderAll();
    }
  };

  const exportImage = () => {
    if (canvas) {
      const dataURL = canvas.toDataURL({
        format: 'png',
        quality: 1.0,
      });
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'canvas.png';
      link.click();
    }
  };

  const undo = () => {
    if (currentStateIndex > 0) {
      const prevState = JSON.parse(canvasState[currentStateIndex - 1]);
      canvas?.loadFromJSON(prevState, () => {
        canvas.renderAll();
        setCurrentStateIndex((prev) => prev - 1);
      });
    }
  };

  const redo = () => {
    if (currentStateIndex < canvasState.length - 1) {
      const nextState = JSON.parse(canvasState[currentStateIndex + 1]);
      canvas?.loadFromJSON(nextState, () => {
        canvas.renderAll();
        setCurrentStateIndex((prev) => prev + 1);
      });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Photo Editor</h1>
      <div className="flex items-center mb-6">
        <input
          type="file"
          ref={fileInputRef}
          className="mr-4 p-2 border rounded"
          onChange={handleImageUpload}
        />
        <button
          onClick={addText}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Text
        </button>
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Enter text"
          className="ml-4 p-2 border rounded"
        />
        <button
          onClick={updateText}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition ml-2"
        >
          Update Text
        </button>
        <input
          type="color"
          onChange={(e) => updateColor(e.target.value)}
          className="ml-4"
        />
        <button
          onClick={exportImage}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 transition ml-4"
        >
          Export Image
        </button>
        <button
          onClick={undo}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 transition ml-4"
        >
          Undo
        </button>
        <button
          onClick={redo}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700 transition ml-4"
        >
          Redo
        </button>
      </div>
      <div className="border border-gray-300 p-4">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}