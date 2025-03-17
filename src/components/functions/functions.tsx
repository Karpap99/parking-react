import { FunctionCard } from "../function_card/function_card"
import img1 from "../../assets/images/Img1.png"
import img2 from "../../assets/images/Img2.png"
import img3 from "../../assets/images/Img3.png"
import img4 from "../../assets/images/Img4.png"
import img5 from "../../assets/images/Img5.png"
import img6 from "../../assets/images/Img6.png"
import "./functions.css"

export const Functions = () => {
    return(
        <div className="functions">
            <h2>Оплата паркування у місті Дніпро</h2>
            <div className="functions_cards">
                <div></div>
                <FunctionCard name="Оплата паркування" image={img1}></FunctionCard>
                <FunctionCard name="Купівля абонементів" image={img2}></FunctionCard>
                <FunctionCard name="Додавання даних авто" image={img3}></FunctionCard>
                <div></div>
                <div></div>
                <FunctionCard name="Перегляд історії паркувань" image={img4}></FunctionCard>
                <FunctionCard name="Повернення автівки" image={img5}></FunctionCard>
                <FunctionCard name="Перегляд штрафів" image={img6}></FunctionCard>
                <div></div>
            </div>
            
        </div>
    )
}