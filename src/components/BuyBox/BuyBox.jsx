import ProductOptions from "./ProductOptions";

const BuyBox = () => {
    return (
        <>
            <div className="flex">
                <div>
                    <img src="imgs\logo-geracao-tech.png" alt="carrosel" />
                </div>
                <div>
                    <h2>Name</h2>
                    <p>referencia</p>
                    <span>Estrelas / Avaliações</span>

                    <h3>Price</h3>

                    <p>Description</p>
                    <ProductOptions />  
                    <button>Comprar</button>
                </div>
            </div>
            <div className="flex h-12">
                <img src="imgs\logo-geracao-tech.png" alt="" />
                <img src="imgs\logo-geracao-tech.png" alt="" />
                <img src="imgs\logo-geracao-tech.png" alt="" />
                <img src="imgs\logo-geracao-tech.png" alt="" />
                <img src="imgs\logo-geracao-tech.png" alt="" />
            </div>
        </>
    );
}

export default BuyBox;