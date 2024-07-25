const SizeShoeButtons = ({ sizeShoeButtons }) => (
  <div>
    <span>Tamanhos</span>
    <ul className='flex gap-3'>
      {sizeShoeButtons.map((size, i) => (
        <li key={i}>
          <button className='flex justify-center items-center focus:bg-light-gray-2 h-8 w-8 rounded-full'>
            {size}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default SizeShoeButtons