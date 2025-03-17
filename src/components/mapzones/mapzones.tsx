import { GoogleMap, useJsApiLoader, PolygonF } from '@react-google-maps/api';
import { useState, useEffect } from "react"
import "./mapzones.css"


export type position = {
    coords: coords
}

export type coords = {
    latitude: number,
    longitude: number
}


export const MapZones = () => {
    const [center, setCenter] = useState({lat:48.472429962571105, lng:35.04126161767838})
    function success(pos: position) : void {
        setCenter({lat: pos.coords.latitude, lng:pos.coords.longitude})
    }

    function error() {
        console.log("Unable to retrieve your location");
    }
    useEffect(()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.log("Geolocation not supported");
        }
    /*fetch("http://10.119.4.84:3100/zone")
    .then((res)=>res.json())
    .then((data)=>{
        setZones(data)
    })*/
}, [])

    

    
    const [Zones, setZones] = useState([
        {
            "color": "red",
            "path":[
                {"lat":48.473581673858746, "lng":35.02462559264743},
                {"lat":48.479968391553015,"lng":35.02799755159381},
                {"lat":48.477349934545146,"lng":35.03425976106566},
                {"lat":48.47281521370465,"lng":35.04206343748443}, 
                {"lat":48.46617207403549,"lng":35.06605251684583}, 
                {"lat":48.45707418887543,"lng":35.06827648758932}, 
                {"lat":48.456732660054044,"lng":35.06973560926765},
                {"lat":48.44517624771024,"lng":35.056431852788776},
                {"lat":48.45360187213135,"lng":35.03814991646621},
                {"lat":48.45963562078605,"lng":35.00690753704946},
                {"lat":48.46629463756859 ,"lng":35.002959325449275},
                {"lat":48.47130255318085,"lng":35.00707919842338},
                {"lat":48.4732372973103,"lng":35.00879581216259},
                {"lat":48.47557027299573,"lng":35.01600558986726},
                {"lat":48.474033935215395,"lng":35.02390201306762} 
            ]    
        },
        {
            "color": "red",
            "path":[
                {"lat":48.47780251432368, "lng":35.077422856978174},
                {"lat":48.49416199313291,"lng":35.087940862847276}, 
                {"lat":48.5034548006334,"lng":35.08850182316029},
                {"lat":48.509680029013495,"lng": 35.055825884870394} ,
                {"lat":48.50828638768422,"lng":35.044746918688276}, 
                {"lat":48.503324995036834,"lng":35.03535496172767},
                {"lat":48.49898833117259,"lng":35.033966655783075}, 
                {"lat":48.49649129579304,"lng":35.03634660883096},
                {"lat":48.491496856048784,"lng":35.04705639754638}, 
                {"lat":48.4904453323592 ,"lng": 35.04745305638769},
                {"lat":48.48623901954293,"lng":35.056774539158525}, 
                {"lat":48.48518738682386,"lng":35.0573695274205}, 
                {"lat":48.484267190306774,"lng":35.06232776293689  }    
            ]    
        } ,
            
        {
            "color": "yellow",
            "path":[
                {"lat":48.43457921997829,"lng":35.06844395441057}, 
                {"lat":48.43868211517732,"lng":35.04909624306114}, 
                {"lat": 48.44753151796524,"lng":35.02851169171678}, 
                {"lat":48.4585471627359,"lng":34.975327571934336}, 
                {"lat":48.47594466793137,"lng":34.961899023417836}, 
                {"lat":48.48172926451745,"lng":34.957660549001474}, 
                {"lat":48.48562900212993,"lng":34.975415917418296}, 
                {"lat":48.491408418918674,"lng":34.981404414397744},
                {"lat":48.48750912570731,"lng":34.99495732875141}, 
                {"lat":48.484236273193304,"lng":35.018806255559795}, 
                {"lat":48.479431064521194,"lng":35.028156715850315},
                {"lat":48.474033935215395,"lng":35.02390201306762},
                {"lat":48.47557027299573,"lng":35.01600558986726},
                {"lat":48.4732372973103,"lng":35.00879581216259},
                {"lat":48.47130255318085,"lng":35.00707919842338},
                {"lat":48.46629463756859 ,"lng":35.002959325449275},
                {"lat":48.45963562078605,"lng":35.00690753704946},
                {"lat":48.45360187213135,"lng":35.03814991646621},
                {"lat":48.44517624771024,"lng":35.056431852788776},
                {"lat":48.456732660054044,"lng":35.06973560926765},
                {"lat":48.45707418887543,"lng":35.06827648758932},
                {"lat":48.46617207403549,"lng":35.06605251684583},
                {"lat":48.4652400055391,"lng":35.07166710756615},             
                {"lat":48.4613735931491,"lng":35.07687950468769}, 
                {"lat":48.45627650862514,"lng":35.078911456107946} 
                
                
                
            ]    
        } ,
        {
            "color": "green",
            "path":[
                {"lat":48.491408418918674,"lng":34.981404414397744},
                {"lat":48.48562900212993,"lng":34.975415917418296},
                {"lat":48.48172926451745,"lng":34.957660549001474},
                  {"lat":48.47594466793137,"lng":34.961899023417836},
                {"lat":48.4585471627359,"lng":34.975327571934336}, 
                {"lat": 48.44753151796524,"lng":35.02851169171678},
                {"lat":48.43868211517732,"lng":35.04909624306114},
                {"lat":48.43457921997829,"lng":35.06844395441057},
                {"lat":48.42497877277309,"lng":35.06426586744829}, 
                {"lat":48.41561959647656,"lng":35.07160341742613}, 
                {"lat":48.40990128639461,"lng":35.08694237475663}, 
                {"lat":48.39762566888444,"lng":35.09513716017978}, 
                {"lat":48.39385869227778,"lng":35.096608019101886}, 
                {"lat":48.39148674910207,"lng":35.08967396989769}, 
                {"lat":48.39720712970141,"lng":35.08147918447454}, 
                {"lat":48.38911469535546,"lng":35.040085011952485}, 
                {"lat":48.388696086157466,"lng":35.01802212812095}, 
                {"lat":48.380323179070345,"lng":35.00352366160307}, 
                {"lat":48.38255608897238,"lng":34.97872918263047}, 
                {"lat":48.38911469535546,"lng":34.956246053392604}, 
                {"lat":48.408366996226846,"lng":34.95708654420523}, 
                {"lat":48.421058367809955,"lng":34.9865037226473}, 
                {"lat":48.42998227014176,"lng":34.95834728042418}, 
                {"lat":48.45521169982338,"lng":34.9423779549842}, 
                {"lat":48.48656491067686,"lng":34.92629617284179}, 
                {"lat":48.49311001208669,"lng":34.95846258185775} 
                
                
            ]    
        },
        {
            "color": "green",
            "path":[
             {"lat":48.5034548006334,"lng":35.08850182316029}, 
                {"lat":48.509680029013495,"lng": 35.055825884870394} ,
                {"lat":48.50828638768422,"lng":35.044746918688276}, 
                {"lat":48.503324995036834,"lng":35.03535496172767},
                {"lat":48.49898833117259,"lng":35.033966655783075}, 
                {"lat":48.49649129579304,"lng":35.03634660883096}, 
                {"lat":48.491496856048784,"lng":35.04705639754638}, 
                {"lat":48.49421386767601,"lng":35.02229713478995}, 
                {"lat":48.496033983015565 ,"lng":35.00444435316077}, 
                {"lat":48.5016076797737,"lng":34.9893381533207}, 
                {"lat":48.50831805248867,"lng":34.9884798465116}, 
                {"lat":48.50991021389707,"lng":34.99156975102434}, 
                {"lat":48.526306496737156,"lng":35.032964152097406}, 
                {"lat":48.53617756652888,"lng":35.053632654854674}, 
                {"lat":48.5278793367547,"lng":35.08298674772572}, 
                {"lat":48.51014157484746,"lng": 35.09912291573671}
            ]    
        }
    
        ])
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: ""
      })
    
      
    if(isLoaded){
        return(
            <div className='map'>
                <h2 style={{textAlign: "right"}}>Паркувальні <br/>Зони на Мапі</h2>
                <div className="map-container">
                    <GoogleMap
                        mapContainerStyle={{height:"100%", width:"100%", "borderRadius":"25px"}}
                        center={center}
                        zoom={15}
                        options={
                            {
                                disableDefaultUI : true
                            }
                        }
                    >
                        {Zones && Zones.map((zone) => (
                            <PolygonF 
                                key="jb"
                                options={{
                                    fillColor: zone.color,
                                    strokeColor: zone.color,
                                    strokeOpacity: 0.1
                                }}
                            path={zone.path}/>
                        ))}
                    </GoogleMap>
                </div>
            </div>       
        )
    }
    else{
        return(<div className='map-container'></div>)
    }
    
}

