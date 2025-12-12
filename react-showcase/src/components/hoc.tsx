import InputText from "./Input.tsx";
import { useState } from "react";


function HOC() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [output, setOutput] = useState({ name, email });
    const handleSubmit = () => {
        console.log(name);
        console.log(email);

        setOutput({ name, email });
    }
    return (
        <>
            <h1>
                HOC
            </h1>
            <p>
                High order component , that wrapp input components that recieve the name and the setter of the state as props and control the final action giving utility to the generic inputs.
            </p>

            <InputText name="name" setter={setName} type="text" />
            <br />
            <InputText name="email" setter={setEmail} type="email" />
            <br />
            <button className="" onClick={handleSubmit}> Submit</button>
            <br />
            <div>
                {output.name}
                <br />
                {output.email}
            </div>

        </>
    );
}
export default HOC