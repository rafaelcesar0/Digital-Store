const ColorShoeButtons = ({styleColorsButtons}) => (
  <div>
    <span>Cor</span>
    <ul className='flex gap-3'>
      {styleColorsButtons.map((color) => (
        <li key={color}>
          <button
            className={`flex justify-center items-center border focus:border-black h-8 w-8 rounded-full ${color}`}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default ColorShoeButtons