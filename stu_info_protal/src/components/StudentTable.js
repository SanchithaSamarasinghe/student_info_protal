import { useState } from 'react'
import '../assets/css/compo.css'
import Profile from './StudentTable';
export default function StudentTable(props){
    const [stu, setStu] = useState(props.students[0]);
    return(
        
          <div className="outerDiv">
            <div className="leftDiv">
                <table border={1}>
                    <thead>
                        <tr>
                            <td>first name</td>
                            <td>last name</td>
                            <td>course</td>
                            <td>country</td>
                            <td>profile</td>
                        </tr>
                    </thead>
                    <tbody>

                    {
                            props.students.map((student, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.course}</td>
                                        <td>{student.address.country}</td>
                                        <td>
                                            <button
                                                id={student.studentId}
                                                onClick={() => setStu(student)}>
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className='rightDiv'>
               <Profile stu={stu}/>
                
                
            </div>
        </div>       
    );
}