import {Div } from './style'
import { Title2 , Paragraph } from '../../../components/exports/export'
import {Button,Subscription } from  './export'
import {useState,useCallback } from 'react';
export function Choose() {
    const [subscription , setSubscription ] = useState([
        [
            {value :45 , address :250 , storage: "125GB" ,database :"140",domain:60,suport:"24/7 Unlimited"},
            {value :59 , address :150 , storage: "65GB" ,database :"60",domain:30,suport:"24/7 Unlimited"},
            {value :85 , address :250 , storage: "125GB" ,database :"140",domain:60,suport:"24/7 Unlimited"}
        ],
        [
            {value :477 , address :250 , storage: "125GB" ,database :"140",domain:60,suport:"24/7 Unlimited"},
            {value :485 , address :150 , storage: "65GB" ,database :"60",domain:30,suport:"24/7 Unlimited"},
            {value :500 , address :250 , storage: "125GB" ,database :"140",domain:60,suport:"24/7 Unlimited"}
        ]
    ])
    const [ showedSub ,setShowedSub ] = useState(true);

    const handleChange = useCallback( ( condition )=>{
        setShowedSub( previos => condition );
    },[])

  return (
    <Div>
        <div className="text">
            <Title2  text ="Choose Your Plan"/>
            <Paragraph text ="Lorem ipsum dolor sit aet, consectetur adipisicing lit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        </div>
        <div className="subscribe">
            <div className="buttons">
                <Button text ="Month Subscription" checked ={ showedSub }  event = { () => handleChange(true)} />
                <Button  text ="Yearly Subscription" checked ={ !showedSub } event = { () => handleChange(false)} />
            </div>
            <div className="modals">
                { showedSub ? (
                    subscription[0].map( (item , index ) => (
                        <Subscription 
                            value = { item.value }
                            time = "Per Month"
                            address = { item.address }
                            storage ={ item.storage}
                            domain={ item.domain}
                            database ={ item.database}
                            suport ={item.suport}
                            index ={ index}
                        />
                    ))
                ):(
                    subscription[1].map( (item , index ) => (
                        <Subscription 
                            value = { item.value }
                            time = "Per Year"
                            address = { item.address }
                            storage ={ item.storage}
                            domain={ item.domain}
                            database ={ item.database}
                            suport ={item.suport}
                            index ={ index}
                        />
                    ))
                )}  

            </div>
        </div>
    </Div>
  )
}
