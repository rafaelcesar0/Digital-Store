import React from 'react';
import imgs from "../data/imgs.jsx";

const ProductCards = () => {
    return (
        <>
            <section className="py-12">
            <h2 className="text-black font-bold font-oswald text-3xl">
               Coleções em Destaque
            </h2>
                <div className="flex flex-wrap justify-right">
                    {imgs.map((imagem, index) => (
                        <div key={index} className="max-w-sm mx-4 mb-8 bg-white rounded-lg overflow-hidden">
                            <div className="text-center">
                                <img src={imagem.img} className="rounded" alt="Imagem do produto"  />
                            </div>
                            
                            <div className="px-6 pt-4 pb-2">
                                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded absolute top-1/2 rigtht-1/2 transform-translate-x-1/2-translate-y-1/2">
                                    Comprar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default ProductCards;