import Logo from '../Logo'


const CardsFooter = () => {
    return (
    <>
    
    <div className='flex flex-col'>
        <h3 class="font-semibold">Informação</h3>
        <a href="#">Sobre Drip</a>
        <a href="#">Segurança</a>
        <a href="#">Wishlist</a>
        <a href="#">Blog</a>
        <a href="#">Trabalhe conosco</a>
        <a href="#">Meus Pedidos</a>
    </div>
    <div className='flex flex-col'>
        <h3 class="font-semibold">Categoria</h3>
        <a href="#">Camisetas</a>
        <a href="#">Calças</a>
        <a href="#">Bonés</a>
        <a href="#">Headphones</a>
        <a href="#">Tênis</a>
    </div>
    </>


    );
};


export default CardsFooter;