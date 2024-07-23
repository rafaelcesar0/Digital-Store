import ProductOptions from "./ProductOptions";

const BuyBox = () => {
    return (
        <>
            <div className="flex justify-center p-12">
                <div>
                    <img src="imgs\logo-geracao-tech.png" alt="carrosel" />
                    <div className="flex justify-center h-12 mt-8 gap-5 mt-5">
                        <img src="imgs\logo-geracao-tech.png" alt="" />
                        <img src="imgs\logo-geracao-tech.png" alt="" />
                        <img src="imgs\logo-geracao-tech.png" alt="" />
                        <img src="imgs\logo-geracao-tech.png" alt="" />
                        <img src="imgs\logo-geracao-tech.png" alt="" />
                    </div>
                </div>
                <div className="ml-12">
                    <h3 className="font-bold text-3xl text-dark-gray">Name</h3>
                    <p className="text-dark-gray-3">Casual | Nike | REF:38416711</p>
                    <div className="flex gap-3">
                        <img src="src\assets\Stars.svg" alt="" />
                        <img src="src\assets\Frame 9.svg" alt="" />
                        <span>(90) Avaliações</span>
                    </div>

                    <h3 className="text-dark-gray-2 text-2xl">
                        <span className="text-base">R$</span>219,00 <s className="ligth-gray-2 text-base">219,00</s>
                    </h3>

                    <p className="text-light-gray font-semibold mt-5">Descrição do produto</p>
                    <p className="w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    <ProductOptions />
                    <button className=" ml-3 p-2 bg-warning rounded-xl text-white font-semibold px-12 mt-5">Comprar</button>
                </div>
            </div>

        </>
    );
}

export default BuyBox;