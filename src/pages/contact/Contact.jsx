import {Div} from './style'
import { ItemImage } from '../aboutUs/export'
import { Form } from './form/Form'

export default function Contact() {
  return (
    <Div>
      <ItemImage title = "Contact" />

      <div className="contentContact">
        <h2>Need Help? Sure we are Online!</h2>

        <p>Let us give you more details about the special offer website you want us. Please fill out the form below.
          We have million of website owners who happy to work with us!
        </p>

        <Form />
      </div>
    </Div>
  )
}
