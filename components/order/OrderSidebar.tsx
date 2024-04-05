//! Aqui se van a mostrar las Categorias
import { prisma } from '@/src/lib/prisma';
import CategoryIcon from '../ui/CategoryIcon';
// import { categories } from '../../prisma/data/categories';

//! Obtener los registros de la base de datos
const getCategories = async () =>{
  return await prisma.category.findMany()
}

export default async function OrderSidebar() {
  const categories = await getCategories()
  
  return (
    <aside className=" md:w-72 md:h-screen bg-white ">
      <nav>
        {categories.map(categorymap => (
          <CategoryIcon
          key={categorymap.id}
          categorymap={categorymap}
          />
        ))}
      </nav>
      
    </aside>
  )
}