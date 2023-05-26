import { Div} from './style'
import { Paragraph , Title2 } from '../../../components/exports/export'
import { Slider } from './export'
export default function History() {
  return (
    <Div>
        <div className="contentText">
            <Title2  
                text="Our history"
            />
            <Paragraph 
                text ="Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem!"
            />
        </div>

        <Slider />
    </Div>
  )
}
