const ShoppingCartButton = ({ notificationCount=0 }) => (
  <div className="flex items-center justify-center px-2">
    <div className="relative">
      <img
        src="src/assets/mini-cart.svg"
        alt="Shopping Cart"
      />
      {notificationCount > 0 ? (
        <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {notificationCount}
        </div>
      ): ''}
    </div>
  </div>
);

export default ShoppingCartButton;
