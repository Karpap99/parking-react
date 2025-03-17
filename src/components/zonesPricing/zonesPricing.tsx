import { Zonecard } from "../zonecard/zonecard"
import "./zonesPricing.css"

export const ZonesPricing = () => {
    return(
        <div className="zonespricing">
            <h2>Зони та вартість паркомісць</h2>
            <div className="zonecard-grid">
                <Zonecard name="Червона зона" price="18" description="Центральна частина міста, найвища вартість паркування"/>
                <Zonecard name="Жовта зона" price="15" description="Прилеглі до центру райони, середня вартість паркування"/>
                <Zonecard name="Зелена зона" price="13" description="Околиці міста, найнижча вартість паркування"/>
            </div>
            <p className="zonespricing-undertext">Нарахування здійснюється на початку першої години<br></br>
            паркування і на початку кожних наступних 30 хвилин паркування.</p>
        </div>
    )
}