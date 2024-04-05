# Tutorial UDEMY Juan Pablo
https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/learn/lecture/42840974#announcements/9619668/


# INSTALAR PRISMA
npm install prisma --save-dev

# INICIALISAR PRISMA
npx prisma init --datasource-provider sqlite
(npm install @prisma/client)

* Crear el Schema primero y luego hacer Migrate *
# PRISMA MIGRATE
npx prisma migrate dev --name migra1

# VER BASES DE DATOS
npx prisma studio

# Rutas con id.(params)
export const GET = async (req, {params}) => {
  return NextResponse.json("Obteniendo tarea " + params.id)
}

export const PUT = async (req, {params}) => {
    return NextResponse.json("Modificando tarea " + params.id)
}

export const DELETE = async (req, {params}) => {
    return NextResponse.json("Borrando tarea " + params.id)
}

# Tailwind Css
Centrado:
className=" h-screen flex justify-center items-center"

Boton:
  <button onClick={btnBack} type="button"  className='shadow-lg shadow-indigo-600  bg-no   hover:scale-105 transition-all py-2 px-6 text-white font-bold rounded'>Cancelar</button>


