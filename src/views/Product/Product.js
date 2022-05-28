import { useParams } from "react-router-dom";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "../../components/NavBar/NavBar";

export default function Product (){
    const {productId} = useParams();
    return(
        <div>
            <NavBar imgCart={'../../assets/cart.png'} category1='Productos' category2='Ayuda' category3='Acerca de' category4='Contacto' img={'../../assets/logoflex.png'} />
            <ItemDetailContainer productId={+productId}/>   
        </div>
    ) 
}