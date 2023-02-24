import { useEffect, useRef ,useState} from "react";
import Navbar from './Navbar'
import { useParams,useNavigate } from "react-router-dom";


const EditEmployee = () => {

    let {id} = useParams()
    console.log(id)

    let name = useRef()
    let email = useRef()
    let mobile = useRef()
    let designation = useRef()
    let [gender, setGender] = useState('')
    let [course, setcourse] = useState('')
    let [image,setImage] = useState('')
    let date = useRef()

    let navigate = useNavigate()
    



    useEffect(() => {
        fetch(`http://localhost:3009/emp/${id}`)
        .then(res => res.json())
        .then((data) => {
            name.current.value = data.name;
            mobile.current.value = data.mobile;
            email.current.value = data.email;
            date.current.value  = data.date;
        })

    },[])

   

    let handleSubmit = (e) => {
        e.preventDefault()

        let updateuser = {
            name:name.current.value,
            email:email.current.value,
            mobile:mobile.current.value,
            gender:gender,
            designation:designation.current.value,
            course:course,
            image:image,
            date:date.current.value

        }

        fetch(`http://localhost:3009/emp/${id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(updateuser)
        })
        alert('data has been submitted')
        navigate('/admin/employee')
    }

    return ( 
        <div>
            <Navbar/>
        <div className="empform border w-75 rounded m-auto p-3">
            <form action="" onSubmit={handleSubmit}>

            <div className="name ps-3 pt-3">

                     <label htmlFor="" className="form-label">Name:</label>
                    <input className="form-control w-100 " type="text" aria-label="default input example" required ref={name} />
                  
                    </div>


                    <div className="email ms-3">
                    <label htmlFor="" className="form-label m-2">Email:</label>
                    <input type="email" class="form-control w-100 " id="exampleFormControlInput1" required ref={email} />

                    </div>
                    <div className="number ms-3">
                    <label htmlFor="" className="form-label me-1">Mobile no:</label>
                    <input className="form-control w-100" type="tel" aria-label="default input example"  pattern="[6789][0-9]{9}" required ref={mobile}
                    />
                    
                    </div>
                <div className="dropdown">
                <label htmlFor="" className="ms-3 mt-2">Course</label><br />
                    <select name="" id="" value="Course" className=" mt-2 bg-light w-25 ms-3 rounded btn btn-light dropdown-toggle"required ref={designation}  >
                        <option value="hr" className="dropdown-item">HR</option>
                        <option value="manager" className="dropdown-item">Manager</option>
                        <option value="sales" className="dropdown-item">Sales</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="" className="ms-3">Date</label><br />
                    <input type="Date" className="bg-light rounded p-2 ms-3" ref={date}  disabled/>
                </div>
                

                <div className="gender mt-3 ms-3 d-flex">
                    <label htmlFor="" className="form-label me-3">Gender:</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1 m" value={gender} onClick={() => { setGender("Male") }} />
                        <label className="form-check-label" for="flexRadioDefault1">
                            Male
                        </label>
                    </div>
                    <div className="form-check ms-2">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1 f" value="Male" onClick={() => { setGender("Femlae") }}/>
                        <label className="form-check-label" for="flexRadioDefault1">
                            Female
                        </label>
                    </div>
                </div>


                <div className="course mt-3 ms-3">
                    <label htmlFor="" className="form-label me-3">Course:</label>

                    <input className="form-check-input ms-2" type="checkbox" value="MCA" id="flexCheckDefault" onClick={() => { setcourse("MCA") }} />
                    <label className="form-check-label ms-2" for="flexCheckDefault" htmlFor="MCA">MCA</label>

                    <input className="form-check-input ms-2" type="checkbox" value="BCA" id="flexCheckDefault" onClick={() => { setcourse("BCA") }} />
                    <label className="form-check-label ms-2" for="flexCheckDefault" htmlFor="BCA">BCA</label>

                    <input className="form-check-input ms-2" type="checkbox" value="BSc" id="flexCheckDefault" onClick={() => { setcourse("BSc") }} />
                    <label className="form-check-label ms-2" for="flexCheckDefault" htmlFor="BSC">BSc</label>
                </div>

                <div className="fileupload mt-3 ms-3">
                    <input className="form-control w-100" type="text" id="formFile"   placeholder="Place image link here" value={image} onChange={(e) =>setImage(e.target.value)}/>
                </div>

                <button className="btn btn-success mt-2 ms-3">Submit</button>
            </form>
        </div>
        </div>
     );
}
 
export default EditEmployee

