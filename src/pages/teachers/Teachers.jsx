import {Div} from './style'
import {Testimonial } from '../home/export'
import { ItemImage } from '../aboutUs/export'
import { Teacher} from './teacher/Teacher'
import { team1, team2, team3,team4 } from '../../assets/exports/exportSlider'
export default function Teachers() {

  const teachers = [
    { name:"Williamson" , photo :team1, category :"Web Developer" },
    { name:"Kristiana" , photo :team2 , category :"Web Developer" },
    { name:"Steve Thomas" , photo :team3 , category :"Web Developer" },
    { name:"Miranda Joy" , photo :team4 , category :"Web Developer" },
    { name:"Williamson" , photo :team1, category :"Web Developer" },
    { name:"Kristiana" , photo :team2 , category :"Web Developer" },
    { name:"Steve Thomas" , photo :team3 , category :"Web Developer" },
    { name:"Miranda Joy" , photo :team4 , category :"Web Developer" }
  ]
  return (
    <Div>
      <ItemImage 
        title = 'Teachers'
      />
      <div className="contentTeachers">
        { teachers &&  teachers.map( (teacher , index ) => (
          <Teacher 
            name = {teacher.name }
            category = { teacher.category}
            photo = {teacher.photo}
          />
        ))}
      </div>
      <Testimonial />
    </Div>
  )
}
