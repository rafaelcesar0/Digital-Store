

const ProductOptions = () => {
  
  const options = [
    {
      length: ["38", "39", "40", "41", "42"],
      color: ['#111111', '#4FF22F', '#111111', '#4FF22F']
    },
  ]
  return (
    <>
    <div>   
      <span>Tamanho</span>
      <ul className="flex gap-3">
        <li>{options[0].length[0]}</li>
        <li>{options[0].length[1]}</li>
        <li>{options[0].length[2]}</li>
        <li>{options[0].length[3]}</li>
        <li>{options[0].length[4]}</li>
      </ul>
    </div>
    <div>
      <span>Cor</span>
      <ul className="flex">
        <li style={{ backgroundColor: options[0].color[0] }}></li>
        <li style={{ backgroundColor: options[0].color[1] }}></li>
        <li style={{ backgroundColor: options[0].color[2] }}></li>
        <li style={{ backgroundColor: options[0].color[2] }}></li>
        <li style={{ backgroundColor: options[0].color[2] }}></li>
      </ul>
      {console.log(options[0].color[3])}
    </div>
    </>
  )
}

export default ProductOptions