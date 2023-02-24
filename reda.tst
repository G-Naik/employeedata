import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const Editemp = () => {

    let { id } = useParams();
    let name = useRef();
    let email = useRef();
    let mobile = useRef();
    let designation = useRef();
    let file = useRef();
    let [gender, setGender] = useState('')
    let [course, setcourse] = useState('')

    useEffect(() => {
        fetch(` http://localhost:3009/Employees/${id}`)
            .then(res => res.json())
            .then((previousData) => {
                name.current.value = previousData.name;
                email.current.value = previousData.email;
                mobile.current.value = previousData.mobile;
                file.current.value = previousData.file;
                gender.current.value = previousData.gender;
                course.current.value = previousData.course;
            })
    }, [])


    let handlesubmit = (e) => {
        e.preventDefault();

        let updatedemp =
        {
            name: name.current.value,
            email: email.current.value,
            mobile: mobile.current.value,
            gender: gender,
            course: course,
            designation: designation.current.value,
            file: file.current.value
        }

        fetch(`http://localhost:3009/Employees/${id}`,
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedemp)
            })
    }


    return (
        <div className="add-user">
            <h1>Edit Existing Employee</h1>

            <form action="" onSubmit={handlesubmit}>
                <div className="name">
                    <label htmlFor="" className="form-label">Name:</label>
                    <input type="text" ref={name} className="" /><br />
                </div>
                <div className="email">
                    <label htmlFor="" className="form-label">Email:</label>
                    <input type="email" name="" id="" ref={email} /><br />
                </div>
                <div className="number">
                    <label htmlFor="" className="form-label">Mobile no:</label>
                    <input type="text" ref={mobile} /><br />
                </div>
                <div className="designation">
                    <label htmlFor="" className="form-label">Designation:</label>
                    <select ref={designation}>
                        <option value="hr" >HR</option>
                        <option value="manager">MANAGER</option>
                        <option value="sales" >SALES</option>
                    </select><br />
                </div>
                <div className="gender">
                    <label htmlFor="" className="form-label">Gender:</label>
                    <input type="radio" name="gender" id="m" value="Male" onClick={() => { setGender("Male") }} />
                    <label htmlFor="m" className="form-label">Male</label>
                    <input type="radio" name="gender" id="f" value="Female" onClick={() => { setGender("Female") }} />
                    <label htmlFor="F" className="form-label">Female</label>
                    <br />
                </div>
                <div className="course">
                    <label htmlFor="" className="form-label">Course:</label>
                    <input type="checkbox" value="MCA" onClick={() => { setcourse("MCA") }} /><label htmlFor="mca">MCA</label>
                    <input type="checkbox" value="BCA" onClick={() => { setcourse("BCA") }} /><label htmlFor="bca">BCA</label>
                    <input type="checkbox" value="BSc" onClick={() => { setcourse("BSc") }} /><label htmlFor="bsc">BSc</label>
                    <br />
                </div>
                <div className="fileupload">
                    <input type="file" name="" id="" ref={file} /><br />
                </div>
                <input type="submit" value="Submit" />
            </form>

        </div>);
}

export default Editemp;