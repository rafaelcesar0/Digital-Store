import { useSearchParams } from 'react-router-dom';
import FilterGroup from '../components/FilterGroup';

function ProductsPage() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get('filter');

  return (
    <div className='flex flex-col text-black items-center justify-center h-screen'>
      <h1 className='font-bold text-6xl'>Filtrar por:</h1>
      <FilterGroup />
    </div>
  );
}

export default ProductsPage;
