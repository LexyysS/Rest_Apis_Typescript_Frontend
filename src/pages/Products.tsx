import { ActionFunctionArgs, Link, useLoaderData } from "react-router-dom";
import { getProducts, updateProductAvailability } from "../services/ProductService";
import ProductDetails from "../components/ProductDetails";
import { Product } from "../types";
export async function loader() {
  const products = await getProducts();
  return products ;
}

export async function action({request} : ActionFunctionArgs){
  const data = Object.fromEntries(await request.formData())
  await updateProductAvailability(+data.id)
  return {}
}


const Products = () => {
  const products = useLoaderData() as Product[];

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Productos</h2>
        <Link
          to="/productos/nuevo"
          className="bg-slate-700 hover:bg-slate-600 text-white text-sm px-4 py-2 rounded-md"
        >
          Agregar Producto
        </Link>
      </div>

      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-2">Producto</th>
              <th className="p-2">Precio</th>
              <th className="p-2">Disponibilidad</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
            products.map((product) => (
              <ProductDetails product={product} key={product.id}/>
            ))}


          </tbody>
        </table>
      </div>
    </>
  );
};

export default Products;
