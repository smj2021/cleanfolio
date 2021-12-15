import uniqid from 'uniqid'
import './EducationContainer.css'

const EducationContainer = ({ education }) => (
    <div className='education'>
        <h3>{education.school}</h3>

        <p className='education__description'>{education.degree}</p>
        <p className='education__year'>{education.year}</p>
    </div>
)

export default EducationContainer