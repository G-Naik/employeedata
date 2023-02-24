import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
const CreateEmp = () => {
   let [name,setName] = useState('')
   let [email,setEmail] = useState('')
   let [mobile,setMobile] = useState('')
    let [gender, setGender] = useState('')
    let [course, setcourse] = useState('')
    let [image,setImage] = useState('')

    let [date,setDate] = useState('')

    let designation = useRef()

    let navigate = useNavigate()

    let handlesubmit = (e) => {
        e.preventDefault();

        let emp = {name,email,mobile,gender,course,designation:designation.current.value,date,image}

        fetch(`http://localhost:3009/emp`,{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(emp)
        })
        alert('data has been submitted')
        navigate('/admin/employee')
    }
    return (
        <div className="empform border w-75 rounded m-auto p-3">
            <h1 className="text-center">Create Employee</h1>
            <form action="" onSubmit={handlesubmit} className=" text-justify">


                <div className="name mt-4 ms-3">

                    <label htmlFor="" className="form-label">Name:</label>
                    <input className="form-control w-100 " type="text" aria-label="default input example"  required value={name} onChange={(e) => setName(e.target.value)} />
                    {/* <input type="text" ref={name} className="mb-3 ms-5" /><br /> */}
                </div>


                <div className="email ms-3">
                    <label htmlFor="" className="form-label m-2">Email:</label>
                    <input type="email" class="form-control w-100 " id="exampleFormControlInput1" required   value={email} onChange={(e) => setEmail(e.target.value)} />
                    {/* <input type="email" name="" id="" ref={email} className="mb-3 ms-5" /><br /> */}
                </div>
                <div className="number ms-3">
                    <label htmlFor="" className="form-label me-1">Mobile no:</label>
                    <input className="form-control w-100" type="text" aria-label="default input example" required pattern="[6789][0-9]{9}" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    {/* <input type="text" ref={mobile} className="mb-3 ms-3" /><br /> */}
                </div>


                <div className="dropdown">
                <label htmlFor="" className="ms-3 mt-2">Course</label><br />
                    <select name="" id="" value="Course" className=" mt-2 bg-light w-25 ms-3 rounded btn btn-light dropdown-toggle" required ref={designation}  >
                        <option value="hr" className="dropdown-item">HR</option>
                        <option value="manager" className="dropdown-item">Manager</option>
                        <option value="sales" className="dropdown-item">Sales</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="" className="ms-3">Date</label><br />
                    <input type="Date" className="bg-light rounded p-2 ms-3" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>


                <div className="gender mt-3 ms-3 d-flex">
                    <label htmlFor="" className="form-label me-3">Gender:</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1 m" value="Male" onClick={() => { setGender("Male") }}/>
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
                    <label className="form-check-label ms-2" for="flexCheckDefault" htmlFor="mca">MCA</label>

                    <input className="form-check-input ms-2" type="checkbox" value="BCA" id="flexCheckDefault" onClick={() => { setcourse("BCA") }} />
                    <label className="form-check-label ms-2" for="flexCheckDefault" htmlFor="bca">BCA</label>

                    <input className="form-check-input ms-2" type="checkbox" value="BSc" id="flexCheckDefault" onClick={() => { setcourse("BSc") }} />
                    <label className="form-check-label ms-2" for="flexCheckDefault" htmlFor="bsc">BSc</label>
                </div>


                <div className="fileupload mt-3 ms-3">
                    <input className="form-control w-100" type="text" id="formFile"   placeholder="Place image link here" value={image} onChange={(e) =>setImage(e.target.value)}/>
                </div>


                {/* <input type="submit" value="Submit" className="btn btn-success mt-3 mb-3 ms-3" it/> */}
                <button className="btn btn-success mt-3 mb-3 ms-3">Submit</button>
            </form>
        </div>
    );
}

export default CreateEmp;