import React,{useState} from 'react'
import {Div} from './style'
import { ItemImage } from '../aboutUs/export'
import {Testimonial } from '../home/export'
import { Card } from './card/Card'
import { FaAdjust ,FaBriefcase ,FaCube} from 'react-icons/fa'
export default function Pricing() {
  const [pricings , ssetPricings ] = useState([
    {title : 'Standerd' , value : "15" , icon : <FaAdjust/> , infos :['50GB Disk Space','50 Email Accounts','50GB Monthly Bandwidth','10 Subdomains', '50 Domains'] },
    {title : 'Business' , value : "30" , icon : <FaBriefcase/> , infos :['70GB Disk Space','70 Email Accounts','70GB Monthly Bandwidth','30 Subdomains', '70 Domains'] },
    {title : 'Premium' , value : "45" , icon : <FaCube /> , infos :['80GB Disk Space','80 Email Accounts','80GB Monthly Bandwidth','40 Subdomains', '80 Domains'] },
  ])  


  return (
    <Div>
      <ItemImage title = "Pricing"/>

      <div className="contentCards">
        { pricings && pricings.map( ( pricing , index ) => (
          <Card 
            title = {pricing.title}
            value = {pricing.value}
            icon = {pricing.icon }
            infos = { pricing.infos }
            index1 = { pricing.index1}
          />
        ))}

      </div>
      <Testimonial />
    </Div>
  )
}
