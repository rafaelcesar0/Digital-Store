

const ProductOptions = () => {
  
  const options = [
    {
      length: ["38", "39", "40", "41", "42"],
      color: ['var(--color-primary)', 'var(--color-primary-2)' , 'var(--color-error)', 'var(--color-success)']
    },
  ]
  return (
    <>
    <div className="flex flex-col gap-y-2 font-semibold mt-5">   
      <span className="text-light-gray">Tamanho</span>
      <ul className="flex gap-3 p-x-3">
        <li>
          <button>{options[0].length[0]}</button>         
        </li>
        <li>
          <button>{options[0].length[1]}</button>
        </li>
        <li>
          <button>{options[0].length[2]}</button>
        </li>
        <li>
          <button>{options[0].length[4]}</button>
        </li>

      </ul>
    </div>
    <div className="">
      <span className="text-light-gray font-semibold">Cor</span>
      <ul className="flex gap-3">
        <li style={{ backgroundColor: options[0].color[0] }} className="p-4 rounded-full"></li>
        <li style={{ backgroundColor: options[0].color[1] }} className="p-4 rounded-full"></li>
        <li style={{ backgroundColor: options[0].color[2] }} className="p-4 rounded-full"></li>
        <li style={{ backgroundColor: options[0].color[2] }} className="p-4 rounded-full"></li>
      </ul>
    </div>
    </>
  )
}

export default ProductOptions