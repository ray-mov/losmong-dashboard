import { useForm } from "react-hook-form"


const AddProduct = () => {
 
   const {register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

  return (
    <>
    <div>AddProduc</div>
    <form  onSubmit={handleSubmit(onSubmit)}>
        <input {...register("productName")} />
    </form>
    </>
  )
}

export default AddProduct