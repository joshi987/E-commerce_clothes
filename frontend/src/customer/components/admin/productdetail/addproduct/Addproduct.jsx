import React,{useState} from "react";
import ProductForm from "../ProductForm";
import { createProduct, selectIsLoading } from "../../../../redux/feature/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
const intialState = {
  name: "",
  quantity: "",
  price: "",
};

const Addproduct = () => {

  const [Product, setProduct] = useState(intialState);
  const [ProductImage, setProductImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [description, setdesciption] = useState("");
const dispatch=useDispatch()
  // const isLoading = useSelector(selectIsLoading);

  const { name, quantity, price } = Product;
  const handlInputChnage = (e) => {
    const { name, value } = e.target;
    setProduct({ ...Product, [name]: value });
  };
  const generateKSKU = (name) => {
    const letter = name.slice(0, 3).toUpperCase();
    const number = Date.now();
    const sku = letter + "-" + number;
    return sku;
  };

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const saveProduct = async (e) => {
    e.preventDefault(); // Corrected typo
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("sku", generateKSKU(name));
    formData.append("quantity", quantity);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("image", ProductImage);
  
    await dispatch(createProduct(formData));
    console.log(...formData);
  };
  
  return (
    <div>
      <ProductForm
       product={Product}
      ProductImage={ProductImage}
      imagePreview={imagePreview}
      description={description}
      setdesciption={setdesciption}
      handlInputChnage={handlInputChnage}
      handleImageChange={handleImageChange}
      saveProduct={saveProduct} 
      />
     


    </div>
  );
};

export default Addproduct;
