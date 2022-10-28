import {TutorialItems,TutorialSectionList,TutorialList} from '../components/TutorialSection'

const servicos:TutorialList = [
    {
        src: "",
        text: "Vestibulinho",
        url: "https://www.cps.sp.gov.br/vestibulinho/"
    },
    {
        src: "",
        text: "NSA",
        url: "https://nsa.cps.sp.gov.br/"
    },
    {
        src: "",
        text: "Email Institucional",
        url: "http://www.etec.sp.gov.br/view/Default.aspx"
    },
    {
        src: "",
        text: "Microsoft Teams",
        url: "https://teams.microsoft.com/"
    }
]

const emailIntitucional:TutorialList = [
    {
        src: "",
        text: "Qual o meu email?",
        url: "https://youtu.be/OTuoo7KvBYM"
    },
    {
        src: "",
        text: "Recuperar Email Institucional",
        url: "https://youtu.be/OTuoo7KvBYM"
    },
    {
        src: "",
        text: "Redefinir senha do Email Institucional",
        url: "https://youtu.be/YGPiypDRBLo"
    }
]
const microsoftTeams:TutorialList = [
    {
        src: "",
        text: "Acessar e instalar o Teams",
        url: "https://youtu.be/OVSrZ8b3WZk"
    },
    {
        src: "",
        text: "Navegar no Teams pelo computador",
        url: "https://www.youtube.com/watch?v=VY5oz5OUG5k"
    },
    {
        src: "",
        text: "Acessar aulas do Teams pelo computador",
        url: "https://youtu.be/AtT4gSiDWEw"
    },
    {
        src: "",
        text: "Entregar tarefas do Teams pelo computador",
        url: "https://youtu.be/UXIGBclUb3g"
    },
    {
        src: "",
        text: "Instalar o Teams no celular",
        url: "https://youtu.be/WVd9G6WCBAg?list=RDCMUC0z1zFxp7xhiunVPBJh8BZw"
    },
    {
        src: "",
        text: "Navegar no Teams pelo celular",
        url: "https://youtu.be/rBXDUYR89Zg"
    },
    {
        src: "",
        text: "Entregar tarefas do Teams pelo celular",
        url: "https://www.youtube.com/watch?v=VY5oz5OUG5k"
    },
    {
        src: "",
        text: "Configurar perfil do Teams",
        url: "https://youtu.be/GSjlP41aCp4"
    },
    {
        src: "",
        text: "Interagir com o professor no Teams",
        url: "https://youtu.be/3OwrL5d-jVI"
    }
]

const nsa:TutorialList = [
    {
        src: "",
        text:"gerar senha do NSA",
        url: "https://etecdenovaodessa.com.br/wp-content/uploads/2021/07/tutorial-para-gerar-senha-no-NSA_234.pdf"
    },
    {
        src: "",
        text:"solicitar aproveitamento de estudos",
        url: "https://etecdenovaodessa.com.br/wp-content/uploads/2021/07/Tutorial-Aproveitamento-de-Estudo-Online.pdf"
    }
]

export const tutoriais:TutorialSectionList = [
    {
        sectionTitle: "Acesso a plataformas",
        tutorials: servicos
    },
    {
        sectionTitle: "Email Institucional",
        tutorials: emailIntitucional
    },
    {
        sectionTitle: "NSA",
        tutorials: nsa
    },
    {
        sectionTitle: "Microsoft Teams",
        tutorials: microsoftTeams
    },
]