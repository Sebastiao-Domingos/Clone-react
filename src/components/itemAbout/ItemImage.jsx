import {Div} from './style'
import { BannerPhoto } from '../../assets/exports/exportSlider'

export function ItemImage({title }) {
  return (
    <Div photo ={ BannerPhoto }>
        <h2>{title } </h2>
        <p>Lorem Ipsum Dolroin Gravida Nibh Vel Velit.</p>
    </Div>
  )
}
