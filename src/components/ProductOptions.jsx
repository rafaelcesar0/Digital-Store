import React from 'react';

const options = [
    {
        tamanho: ["39", "40", "41", "42", "43"],
        cor: ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"]
    },
];

const ProductOptions = () => {
    return (
        <div className="productoptions mt-8">
            <div className="tamanho">
                <span className="font-bold text-gray-700">Tamanho</span>
                <ul className="flex flex-wrap gap-3 mt-2">
                    {options[0].tamanho.map((tamanho, index) => (
                        <li key={index} className="bg-gray-200 rounded-md px-3 py-1 text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-300 transition duration-300">
                            {tamanho}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="cor mt-4">
                <span className="font-bold text-gray-700">Cor</span>
                <ul className="flex gap-3 mt-2">
                    {options[0].cor.map((cor, index) => (
                        <li key={index} className="w-10 h-10 rounded-full cursor-pointer" style={{ backgroundColor: cor }}></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProductOptions;
