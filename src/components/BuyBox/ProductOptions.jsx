import React, { useState } from 'react';

const ProductOptions = () => {
  const options = {
    // definindo as opcoes
    tamanho: ["38", "39", "40", "41", "42"],
    cor: ['var(--color-primary)', 'var(--color-primary-2)', 'var(--color-error)', 'var(--color-success)']
  };

  // armazenando as selecoes
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <>
      <div className="flex flex-col gap-y-2 font-semibold mt-5">
        <span className="text-light-gray">Tamanho</span>
        <ul className="flex gap-3 pr-3 list-none">
          {options.tamanho.map((size, index) => (
            <li key={index}>
              <button
              // quando clicado, a funcao setSelectSize é chamado ao (size)
                onClick={() => setSelectedSize(size)}
                className={`border border-light-gray-2 px-4 py-2 rounded ${selectedSize === size ? 'bg-gray-300' : ''}`}
              >
                {size}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span className="text-light-gray font-semibold">Cor</span>
        <ul className="flex gap-3">
          {options.cor.map((color, index) => (
            <li key={index}>
              <button
              // quando clicado, a funcao mu
                onClick={() => setSelectedColor(color)}
                // estilo
                style={{ backgroundColor: color }}
                className={`p-4 rounded-full ${selectedColor === color ? 'p-2 border-2 border-light-gray' : ''}`}
              >
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductOptions;
