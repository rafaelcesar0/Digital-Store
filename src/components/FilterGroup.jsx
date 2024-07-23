import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';




export default function FilterGroup() {
  return (
    <div className="flex align-items-center flex-col p-6 bg-slate-100">
      <span>Filtrar por: </span>
      <div className="flex flex-col p-10 white bg-50 ">
        <span className='text-[var(--dark-gray)]'>Marca </span>
        <div className="flex  flex-col p-1">
          <label htmlFor="category" className="ml-2">Adidas</label>
          <Checkbox name="category" value="M" />
        </div>

        <div className="flex flex-col p-1 ">
          <label htmlFor="category" className="ml-2">Calenciaga</label>
          <Checkbox name="category" value="M" />
        </div>

        <div className="flex flex-col p-1">
          <label htmlFor="category" className="ml-2">K-Swiss</label>
          <Checkbox name="category" value="M" />
        </div>

        <div className="flex flex-col p-1">
          <label htmlFor="category" className="ml-2">Nike</label>
          <Checkbox name="category" value="M" />
        </div>

        <div className="flex flex-col p-1">
          <label htmlFor="category" className="ml-2">Puma</label>
          <Checkbox name="category" value="M" />
        </div>


        <div className="flex align-items-center flex-col">
          <div className="flex flex-col">

            <span>Categoria </span>

            <div className="flex flex-col p-1">
              <label htmlFor="category" className="ml-2">Esporte e lazer</label>
              <Checkbox name="category" value="M" />
            </div>

            <div className="flex flex-col p-1">
              <label htmlFor="category" className="ml-2">Casual</label>
              <Checkbox name="category" value="M" />
            </div>

            <div className="flex flex-col p-1">
              <label htmlFor="category" className="ml-2">Utilitário</label>
              <Checkbox name="category" value="M" />
            </div>

            <div className="flex flex-col p-1">
              <label htmlFor="category" className="ml-2">Corrida</label>
              <Checkbox name="category" value="M" />
            </div>
          </div>

          <div className="flex align-items-center flex-col">
            <div className="flex flex-col">


              <span>Gênero </span>

              <div className="flex flex-col p-1">
                <label htmlFor="category" className="ml-2">Masculino</label>
                <Checkbox name="category" value="M" />
              </div>

              <div className="flex flex-col p-1">
                <label htmlFor="category" className="ml-2">Feminino</label>
                <Checkbox name="category" value="M" />
              </div>

              <div className="flex flex-col p-1">
                <label htmlFor="category" className="ml-2">Unissex</label>
                <Checkbox name="category" value="M" />
              </div>
            </div>


            <div className="flex align-items-center flex-col">
              <div className="flex flex-col">



                <span>Estado </span>

                <div className="p-inputgroup flex">
                  <label htmlFor="Estado">Novo</label>
                  <RadioButton name='Estado' />
                </div>

                <div className="p-inputgroup flex">
                  <label htmlFor="Estado">Usado</label>
                  <RadioButton name='Estado' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}






