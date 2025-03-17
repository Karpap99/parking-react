import { Props } from "./types"
import "./function_card.css"

export const FunctionCard = (props: Props) => {
    return(
        <div className="function-card">
            <img className="function-card-image" src={props.image} alt=""/>
            <p>{props.name}</p>
        </div>
    )
}