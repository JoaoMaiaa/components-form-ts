export type Props ={
    type:IntrinsicElements
    name: IntrinsicElements
    value: IntrinsicElements
    onChange: IntrinsicElements
}



const Input = ({ type, name, value, onChange }:Props) =>{
    return(
        <>
            <input type={type} name={name} value={value} onChange={onChange} />
        </>
    )
}

export default Input