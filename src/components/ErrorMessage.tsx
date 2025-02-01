import { PropsWithChildren } from "react"

const ErrorMessage = ({children} : PropsWithChildren) => {
  return (
    <div className="text-center bg-red-500 mt-5 text-white font-bold p-3 uppercase">{children}</div>
  )
}

export default ErrorMessage