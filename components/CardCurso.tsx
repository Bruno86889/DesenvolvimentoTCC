import { LargeText, MediumText, SmallText } from "./Text";
import Image from "next/image";
import Link from "next/link";

type CardCursoData = {
    nome: string,
    img: string,
    description: string,
    page: string
}

const CursoSection =(props:CardCursoData)=>{
    return (
        <div className="cursoSection">
            <div className="cardCurso">
                <LargeText text={props.nome} />
                <Image src={props.img} alt={""} width={100} height={100}/>
                <div className="description">
                    <MediumText text={props.description}/>
                </div>
                <Link href={props.page}>
                    <SmallText text={"saiba mais"} />
                </Link>
            </div>
        </div>
    )
}

export async function getStaticProps({params}) {
    
}
export default CursoSection;