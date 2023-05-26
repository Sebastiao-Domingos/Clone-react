import {Div} from './style'


export function Form() {
  return (
    <Div>
        <form action="submit">
            <div className="headForm">
                <input type="text" name="name1" id="name1" placeholder = "First Name" />
                <input type="text" name="name2" id="name2" placeholder = "Last Name" />
                <input type="email" name="email" id="email" placeholder = "Your Email"/>
                <input type="tel" name="tel" id="tel" placeholder = "Your Phone"/>
            </div>

            <div className="bodyForm">
                <textarea name="message" id="mes" cols="30" rows="10" placeholder = "Give us more details..."></textarea>
                <button>Get a Quote</button>
            </div>
        </form>
    </Div>
  )
}
