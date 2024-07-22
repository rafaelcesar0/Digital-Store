import { Checkbox } from 'primereact/checkbox';



export default function FilterGroup() {


  return (
    <div className="flex align-items-center flex-col">
      <div className="flex">
        <Checkbox name="category" value="M" />
        <label htmlFor="category" className="ml-2">Tamanho M</label>
      </div>
      <div className="flex">
        <Checkbox name="category" value="M" />
        <label htmlFor="category" className="ml-2">Cor M</label>
      </div>
      <div className="flex">
        <Checkbox name="category" value="M" />
        <label htmlFor="category" className="ml-2">Marca M</label>
      </div>
    </div>
  )
}






