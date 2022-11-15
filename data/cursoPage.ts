export const etim: CursoPageData =
{
    tipoDeCurso: "Ensino Técnico Integrado Ao Ensino Médio (ETIM)",
    descricao: 'Os cursos da modalidade ETIM (Ensino Técnico Integrado ao Médio) são compostos de três séries anuais articuladas onde o estudante cursa o ensino médio regular e a formação técnica ao mesmo tempo, com terminalidade correspondente às ocupações identificadas no mercado de trabalho. Ao completar as três séries, o aluno recebe o diploma de técnico que lhe dará o direito de exercer a habilitação profissional e de prosseguir os estudos no nível da educação superior.',
    cursos: [
        {
            nome: "Administração",
            description: 'O Técnico em Administração é o profissional que adota postura ética na execução da rotina administrativa, na elaboração do planejamento da produção e materiais, recursos humanos, financeiros e mercadológicos.',
            img: '/adm.jpg',
            page: "/cursos/etim/administracao"
        },
        {
            nome: "Desenvolvimento de Sistemas",
            description: 'O Técnico em Desenvolvimento de Sistemas é o profissional que desenvolve sistemas computacionais utilizando ambiente de desenvolvimento. Modela, implementa e mantém banco de dados.',
            img: '/ds.jpg',
            page: "/cursos/etim/desenvolvimento-de-sistemas"
        },
        {
            nome: "Marketing",
            description: 'O Técnico em Marketing é o profissional ético que colabora na elaboração do plano de marketing da empresa, de acordo com seu ramo ou porte, tendo a competência aliada ao domínio técnico.',
            img: '/mkt.jpg',
            page: "/cursos/etim/marketing"
        }
    ]
}

export const novoTec: CursoPageData = {
    tipoDeCurso: "NovoTEC",
    descricao: "Lorem Ipsum Dolor Sit Atem",
    cursos: [
        {
            nome: "Recursos Humanos",
            description: "",
            img: "/rh.jpg",
            page: "/cursos/novotec/recursos-humanos"
        },
        {
            nome: "Linguagens, Humanas e Ciências Sociais",
            description: "",
            img: "/etec1.svg",
            page: "/cursos/novotec/linguagens-humanas"
        }
    ]
}

export const modular: CursoPageData = {
    tipoDeCurso: "Ensino Técnico Modular",
    descricao: 'Os cursos da modalidade Técnico Modular presenciais são compostos de três ou quatro módulos semestrais que, ao serem concluídos, rendem ao estudante além do diploma, o direito de exercer a habilitação profissional de nível técnico.',
    cursos: [
        {
            nome: 'Administração',
            description: 'O Técnico em Adminstração pode atuar em departamentos como compra, produção, vendasm recursos humano, marketing ou qualuqer outra área, podendo atender clientes e fornecedores.',
            img: '/adm.jpg',
            page: '/cursos/modular/administracao'
        },
        {
            nome: "Informática",
            description: "O Técnico em Informática é o profissional que além de fornecer suporte de informática a usuários, poderá atuar com Gerenciamento de Sistemas Operacionais, Segurança Digital, Redes de comunicação de dados.",
            img: "/info.jpg",
            page: "/cursos/modular/informatica"
        },
        {
            nome: "Logística",
            description: "O Técnico em Logística é o profissional que colabora na gestão dos processos de planejamento, operação e controle de programação da produção de bens e serviços, programação de manutenção de máquinas.",
            img: "/etec1.svg",
            page: "/cursos/modular/logistica"
        },
        {
            nome: "Recursos Humanos",
            description: "O Técnico em Recursos Humanos aplica testes em processos seletivos, contrata e demite funcionários e auxilia no treinamento e capacitação do colaboradores",
            img: "/rh.jpg",
            page: "/cursos/modular/recursos-humanos"
        },
        {
            nome: "Qualidade",
            description: "O Técnico em Qualidade executa rotinas administrativas de acordo com as normas e procedimentos técnicos de qualidadde e de segurnaça específico da área de atuação.",
            img: "/etec1.svg",
            page: "/cursos/modular/qualidade"
        },
        {
            nome: "Segurança do trabalho",
            description: "O Técnico em Segurança do Trabalho atua na identificação de riscos presentes no ambiente de trabalho, na aplicação de normas e propõe soluções para a prevenção de acidentes.",
            img: "/st.jpg",
            page: "/cursos/modular/seguranca-do-trabalho"
        },
    ]
}
