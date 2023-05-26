import { Div } from './style'
import { Title2 } from '../exports/export'
import { ButtonAnimated } from '../buttons/ButtonAnimated'

export default function ContentText({text1 , text2, title , showSpan }) {
  return (
    <Div>
        { showSpan && (<span>2018 BEST SMARTEDU EDUCATION SCHOOL</span> )}
        <Title2 
            text={ title }
        />
        <p>{ text1 }</p>
        <p>{ text2 }</p>
        <ButtonAnimated size="9rem" text="Learn More" backColor = "#EEA412" afterColor ="#333333" borderColor ="#EEA412" color= "#FFF" />
    </Div>
  )
}
