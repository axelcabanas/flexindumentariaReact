import RatingStar from "../RatingStar/RatingStar";
import { useNavigate } from "react-router-dom";

export default function Item ({product}) {
    const navigate = useNavigate();
    return (
        <div className="col-lg-3 col-sm-4 col-6 px-2" onClick={() => {navigate(`/product/${product.id}`)}}>
            <div className="banner mb-3">
                <div className="banner__link" >
                        <img src={product.img} alt="banner" />
                    <div className="banner__marca-info">
                        <p className="banner__marca" >{product.brand}</p>
                        <RatingStar/>
                    </div>
                    <a href="#" className="banner__title" >{product.title}</a>
                    <p className="banner__price"><span>$</span>{product.price}</p>
                </div>
            </div>
        </div>
    )
}