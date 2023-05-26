import {Div} from './style'
import {FaCalendarAlt,FaTag,FaComments } from 'react-icons/fa'
import { blog1, blog2, blog3 , blog4,blog5,blog6 } from '../../../assets/exports/exportSlider'
import { ItemImage,Paragraph ,ButtonAnimated} from '../../../components/exports/export'
import { FaFacebook , FaSkype ,FaTwitter } from 'react-icons/fa'
import { team2 ,team3 ,team1, team4} from '../../../assets/exports/exportSlider'
import Comment from './comment/Comment'
import {Search } from './search/Search'


export  function SingleBlog() {
  return (
    <Div photo ={blog2}>
      <ItemImage title ="Blog Single" />

      <div className="container">
        <section>
          <div className="firstContent">
            <div className="photo" >
              <div className="box">Nov</div>
            </div>
            <p className ="icons"><FaCalendarAlt className ="first" /> MAY 11, 2015  <FaTag /> NEWS  <FaComments /> 12 COMMENTS</p>
            <h3>Perferendis Doloribus Asperiores.</h3>

            <p>Lorem ipsum door sit amet, fugiat deicata avise id cum, no quo maiorum intel ogrets geuiat operts elicata libere avisse id cumlegebat, liber regione eu sit....</p>
            <p className ="different">Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque eget tempor tellus. Fusce lacinia tempor malesuada. Ut lacus sapien, placerat a ornare nec, elementum sit amet felis. Maecenas pretium lorem hendrerit eros sagittis fermentum.</p>

            <p>Phasellus tristique commodo libero, eget dignissim turpis dignissim quis. Morbi sit amet laoreet nibh, gravida scelerisque felis. Phasellus ultrices pellentesque ligula et viverra. Integer elementum, risus et tempor ultricies, libero turpis pellentesque massa, at facilisis erat nunc hendrerit erat. Praesent rhoncus, augue nec condimentum porta, magna dui volutpat augue, vitae blandit magna quam in massa. Fusce a rhoncus diam. Proin nec lacinia nibh. Praesent sed nisi sed purus dictum laoreet.</p>

            <p>Duis at tortor augue. Ut et justo consequat, facilisis lectus facilisis, tincidunt massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vel vestibulum urna. Fusce sed magna posuere, vehicula odio vitae, tempor arcu. Pellentesque eget felis sed eros maximus elementum ultrices a elit. Sed ac sodales enim</p>
          </div>

          <div className="secondContent">
            <div className="text">
              <span>Tom Jobs</span>
              <h3>CEO at SmartEDU</h3>

              <p>Lorem ipsum dolor sit amet, consectetur adip, sed do eiusmod tempor incididunt ut aut reiciendise voluptat maiores alias consequaturs aut perferendis doloribus omnis saperet docendi nec, eos ea alii molestiae aliquand.</p>
            </div>
            <div className="photoSide">
                <img src={team2} alt="blog single" />
                <div>
                  <FaFacebook />
                  <FaTwitter />
                  <FaSkype />
                </div>
            </div>
          </div>

          <div className="thirdContent">
            <h3>Comments (3)</h3>

            <div className="comments">
                <Comment  photo ={team3} 
                  name ="John Smith"
                  text="Ne omnis saperet docendi nec, eos ea alii molestiae aliquand. Latine fuisset mele, mandamus atrioque eu mea, wi forensib argumentum vim an. Te viderer conceptam sed, mea et delenit fabellas probat."
                />
                <Comment photo ={team1}  
                  name ="John Smith"
                  text="Ne omnis saperet docendi nec, eos ea alii molestiae aliquand. Latine fuisset mele, mandamus atrioque eu mea, wi forensib argumentum vim an. Te viderer conceptam sed, mea et delenit fabellas probat."
                />
                <Comment photo ={team4}  width="88" 
                  name ="Thomas Smith"
                  text ="Labores pertinax theophrastus vim an. Error ditas in sea, per no omnis iisque nonumes. Est an dicam option, ad quis iriure saperet nec, ignota causae inciderint ex vix. Iisque qualisque imp duo eu, pro reque consequ untur. No vero laudem legere pri, error denique vis ne, duo iusto bonorum."
                />
            </div>
            <div className="leaveComment">
              <h2>Leave a comment</h2>
              <div className="simplesInput">
                <input type="text" name="name" id="name" placeholder = "Name" />
                <input type="text" name="email" id="email" placeholder = "Email" />
                <input type="text" name="web" id="web" placeholder = "Website" />
              </div>
              <div className="message">
                <textarea name="sms" id="sms" cols="30" rows="7" placeholder = "Message"></textarea>
              </div>

              <ButtonAnimated  
                size ="10rem"
                text ="Post comment"
                backColor= "#EEA412"
                afterColor ="#333333"
                color ="#FFf"
                borderColor = "#EEA412"
              />
            </div>
          </div>
        </section>
        <aside>
          <Search />

          <div className="categories">
            <h3>Categories</h3>
            <ul>
              <li><a href="#">Political Science</a></li>
              <li><a href="#">Business Leaders Guide</a></li>
              <li><a href="#">Become a Product Manage</a></li>
              <li><a href="#">Language Education</a></li>
              <li><a href="#">Micro Biology</a></li>
              <li><a href="#">Social Media Management</a></li>
            </ul>
          </div>

          <div className="searchTag">
            <h3>Search Tags</h3>

            <ul>
              <li><a href="#">Business</a></li>
              <li><a href="#">Jquery</a></li>
              <li><a href="#">Corporate</a></li>
              <li><a href="#">Portifolio</a></li>
              <li><a href="#">Css3</a></li>
              <li><a href="#">Theme</a></li>
              <li><a href="#">Html5</a></li>
              <li><a href="#">Mysql</a></li>
              <li><a href="#">Multipurpose</a></li>
              <li><a href="#">Responsive</a></li>
              <li><a href="#">Premium</a></li>
              <li><a href="#">Javascript</a></li>
              <li><a href="#">Best JQuery</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </Div>
  )
}
