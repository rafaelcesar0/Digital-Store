import Logo from '../Logo'


const CardsFooter = () => {
    return (
    <>
    
    <div className='flex gap-4'>
        <div className='flex flex-col ml-3'>
            <h3 class="font-semibold mt-4">Informação</h3>
            <div className='flex flex-col mt-5'>
                <a href="#">Sobre Drip</a>
                <a href="#">Segurança</a>
                <a href="#">Wishlist</a>
                <a href="#">Blog</a>
                <a href="#">Trabalhe conosco</a>
                <a href="#">Meus Pedidos</a>
            </div>
            
        </div>
        <div className='flex flex-col ml-10'>
            <h3 class="font-semibold mt-4">Categoria</h3>
            <div className='flex flex-col mt-5'>
                <a href="#">Camisetas</a>
                <a href="#">Calças</a>
                <a href="#">Bonés</a>
                <a href="#">Headphones</a>
                <a href="#">Tênis</a>
            </div>
           
        </div>
    </div>
    
    </>
    );
};


export default CardsFooter;