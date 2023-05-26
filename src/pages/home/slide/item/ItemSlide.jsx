import { Div } from './style'
import { ButtonAnimated } from '../../../../components/buttons/ButtonAnimated'

export function ItemSlide( { title ,titleSpan , text , photo , textAlign  }) {
  return (
    <Div  className = "item" photo ={ photo } textAlign = { textAlign } >
        <div className="context">
            <h2>
                { textAlign!=="left" ? (
                    <><span> {titleSpan }</span> {title}</>
                ):(
                    <> { title } <span>{titleSpan}</span></>
                )}
            </h2>

            <p>{text}</p>
            <div className="buttons">
                <ButtonAnimated  text ="Contact us" size ="8.5rem" />
                <ButtonAnimated  text ="Read More" size ="8.5rem" />
            </div>
        </div>
    </Div>
  )
}
