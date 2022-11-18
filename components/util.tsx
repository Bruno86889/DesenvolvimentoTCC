export function Mapear<Type>(Component:any,data:any[]){
    return (
    <>
        {data.map((item,i) => <Component key={i} {...item}/>)}
    </>
    )
}