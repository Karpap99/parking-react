import logo from "../../assets/images/logo.png"
import "./header.css"

export const Header = () => {
    return(
        <header>
            <img src={logo} alt="" className="logo"/>
            <h3>Новий рівень розвитку міста! Швидке паркування в твоєму смартфоні</h3>
            
        </header>
    )
}