import {Nav} from './style'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { ButtonAnimated} from '../buttons/ButtonAnimated'
export function Menu({ eventModal }) {
  return (
    <Nav>
        <img src={ logo } alt="logo" />
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About us</Link>
                </li>
                <li>
                    <Link to="#">Course</Link>
                        <div>
                        <ul>
                            <li>
                                <Link to="/course1">Course Grid 2 </Link>
                            </li>
                            <li>
                                <Link to="/course2">Course Grid 3 </Link>
                            </li>
                            <li>
                                <Link to="/course3">Course Grid 4 </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to="#">Blog</Link>
                    <div>
                        <ul>
                            <li>
                                <Link to="/blog">Blog </Link>
                            </li>
                            <li>
                                <Link to="/singleBlog">Blog Single</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to="/teachers">Teachers</Link>
                </li>
                <li>
                    <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <a href="#" onClick = { eventModal }> <span>Book Now</span></a>
        </div>
    </Nav>
  )
}
