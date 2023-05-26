import { Div } from './style'
import { Paragraph , Title2 ,ContentText } from '../../../components/exports/export'
import { about1, about2 } from '../../../assets/exports/exportSlider'
export function About({ color }) {
  return (
    <Div backColor = {color}>
        <div className="contentText">
            <Title2 text ="About" />
            <Paragraph   
                text ="Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem"
            />
        </div>

        <div className="container">
            <div className="content">
                <ContentText 
                    showSpan = {true}
                    title="Welcome to SmartEDU education school"
                    text1="Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim."
                    text2 ="Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis montes, nascetur ridiculus mus. Sed vitae rutrum neque."
                />
                <img src={about1} alt="about" />
            </div>
            <div className="content">
                <img src={about2} alt="about" />
                <ContentText 
                    title ="The standard Lorem Ipsum passage, used since the 1500s"
                    text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    text2 ="Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum."
                />
            </div>
        </div>


    </Div>
  )
}
