import { ActionFunctionArgs, Form, useNavigate, redirect, useFetcher } from "react-router-dom";
import { Product } from "../types";
import { formatCurrency } from "../utils";
import { deleteProduct } from "../services/ProductService";
type ProductDetailsProps = {
  product: Product;
};

export async function action({params} : ActionFunctionArgs){
  if(params.id !== undefined){
    await deleteProduct(+params.id)
    return redirect('/');
  }
  
}



const ProductDetails = ({ product }: ProductDetailsProps) => {
  const navigate = useNavigate();
  const fetcher = useFetcher();
  const isAvailable = product.availability;
  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800">{product.name}</td>
      <td className="p-3 text-lg text-gray-800 ">
        {formatCurrency(product.price)}
      </td>
      <td className={`p-3 text-lg ${isAvailable ? "text-green-500" : "text-red-500"}`}>
        <fetcher.Form method="POST">
          <button type="submit"
            className={` cursor-pointer text-center hover:bg-gray-100 border ${isAvailable ? "border-green-500" : "border-red-500"} ${isAvailable ? "text-green-500" : "text-red-500"} text-sm p-2 w-full rounded-md`}
            value={product.id.toString()}
            name="id">
              {isAvailable ? "Disponible" : "No Disponible"}

          </button>



        </fetcher.Form>

        



      </td>
      <td className="p-3 text-lg text-gray-800 ">
        <div className="flex gap-2">
          <button
            onClick={() => navigate(`/productos/${product.id}/editar`)}
            className="bg-blue-500 hover:bg-blue-600 text-center text-white text-sm p-2 w-full rounded-md"
          >
            Editar
          </button>

          <Form className="w-full" method="POST" action={`/productos/${product.id}/eliminar`}
          onSubmit={(e) => {if(!confirm('¿Desea eliminar el producto?')) e.preventDefault()}}>
            <input
              type="submit"
              className="bg-red-500 hover:bg-red-600 cursor-pointer text-center text-white text-sm p-2 w-full rounded-md"
              value="Eliminar"
            />


          </Form>

        </div>
      </td>
    </tr>
  );
};

export default ProductDetails;
