import { Props } from "./types"
import "./zonecard.css"
import background from "../../assets/images/ParkingPriceBackground.png"

export const Zonecard = (props: Props) =>{
    let ZoneNameStyle = {
        color: "black"
    }
    if(props.name === "Червона зона"){
        ZoneNameStyle.color = "#FF0000"
    }
    else if(props.name === "Жовта зона"){
        ZoneNameStyle.color = "#FFC700"
    }
    else if(props.name === "Зелена зона"){
        ZoneNameStyle.color = "#3EC300"
    }

    return(
        <div className="zonecard">
            <h3>{props.price}₴</h3>
            <div className="zonecard-underline"></div>
            <h4 style={ZoneNameStyle}>{props.name}</h4>
            <p>{props.description}</p>
            <img className="zonecard-back-image" alt="" src={background}></img>
        </div>
    )
}