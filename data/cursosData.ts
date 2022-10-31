type CursoData = {
    nome: string,
    descricao:string,
    periodo: string,
    vagas: number,
    duracao: string,
    eixoTecnologico: string,
    mercadoDeTrabalho: string,
    tipoDeCurso: string,
    ativo: boolean
}

const etimADM:CursoData = {
    nome: "Administração",
    descricao: "O TÉCNICO EM ADMINISTRAÇÃO é o profissional que adota postura ética na execução da rotina administrativa, na elaboração do planejamento da produção e materiais, recursos humanos, financeiros e mercadológicos. Realiza atividades de controles e auxilia nos processos de direção utilizando ferramentas da informática básica. Fomenta ideias e práticas empreendedoras. Desempenha suas atividades observando as normas de segurança, saúde e higiene do trabalho, bem como as de preservação ambiental.",
    periodo: "Integral - manhã e tarde",
    vagas: 40,
    duracao: "3 anos",
    eixoTecnologico: "Gestão e Negócios",
    mercadoDeTrabalho: "Instituições públicas, privadas e do terceiro setor",
    tipoDeCurso: "etim",
    ativo: true
}

const etimMKT:CursoData = {
    nome: "Marketing",
    descricao: "O TÉCNICO EM MARKETING é o profissional ético que colabora na elaboração do plano de marketing da empresa, de acordo com seu ramo ou porte, tendo a competência aliada ao domínio técnico e no planejamento e implementação de ações de vendas e ações de mercado. Executa tarefa de análise das vendas, preços e produtos. Operacionaliza as políticas de comunicação da empresa: fidelização de clientes, relação com fornecedores ou outras entidades. Operacionaliza políticas de apresentação dos produtos no ponto de venda. Executa o controle, estatísticas e operações de telemarketing. Participa na elaboração e na realização de estudos de mercado, interpreta e aplica a legislação da área.",
    periodo: "etim",
    vagas: 40,
    duracao: "3 Anos",
    eixoTecnologico: "Gestão e Negócios",
    mercadoDeTrabalho: "Instituições públicas, privadas e do terceiro setor, comércio e empresas de consultoria, profissional autônomo.",
    tipoDeCurso: "etim",
    ativo: true
}

const etimDS:CursoData = {
    nome: "Desenvolvimento de Sistemas",
    descricao: "O TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS é o profissional que desenvolve sistemas computacionais utilizando ambiente de desenvolvimento. Modela, implementa e mantém banco de dados. Utiliza linguagem de programação específica. Realiza testes de programas de computador. Mantém registros para análise e refinamento de resultados. Elabora documentação do sistema. Aplica princípios e definição de análise de dados. Executa manutenção de programas de computador.",
    periodo: "Integral - manhã e tarde",
    vagas: 40,
    duracao: "3 anos",
    eixoTecnologico: "Informação e Comunicação",
    mercadoDeTrabalho: "Empresas e departamentos de desenvolvimento de sistemas em organizações governamentais e não governamentais, podendo também atuar como profissional autônomo.",
    tipoDeCurso: "etim",
    ativo: true
}

const mtRH:CursoData = {
    nome: "Recursos Humanos",
    descricao: "",
    duracao: "3 Anos",
    vagas: 40,
    eixoTecnologico:"",
    mercadoDeTrabalho: "",
    periodo: "Tarde",
    tipoDeCurso: "modularTecnico",
    ativo: true
}

const mtLHS:CursoData = {
    nome: "Linguagens, Humanas e S",
    descricao: "",
    duracao: "3 Anos",
    vagas: 40,
    eixoTecnologico:"",
    mercadoDeTrabalho: "",
    periodo: "Manhã",
    tipoDeCurso: "modularTecnico",
    ativo: true
}

const modADM:CursoData = {
    nome: "Administração",
    descricao: "",
    duracao: "1 Ano e 6 Meses",
    eixoTecnologico: "",
    mercadoDeTrabalho: "",
    periodo: "noturno",
    tipoDeCurso: "modular",
    vagas: 40,
    ativo: true
}

const modINFO:CursoData = {
    nome: "Informática",
    descricao: "",
    duracao: "1 Ano e 6 Meses",
    eixoTecnologico: "",
    mercadoDeTrabalho: "",
    periodo: "noturno",
    tipoDeCurso: "modular",
    vagas: 40,
    ativo: true
}

const modLOG:CursoData = {
    nome: "Logística",
    descricao: "",
    duracao: "1 Ano e 6 Meses",
    eixoTecnologico: "",
    mercadoDeTrabalho: "",
    periodo: "noturno",
    tipoDeCurso: "modular",
    vagas: 40,
    ativo: true
}

const modRH:CursoData = {
    nome: "Recursos Humanos",
    descricao: "",
    duracao: "1 Ano e 6 Meses",
    eixoTecnologico: "",
    mercadoDeTrabalho: "",
    periodo: "noturno",
    tipoDeCurso:"modular",
    vagas: 40,
    ativo: true
}

const modST:CursoData = {
    nome: "Segurança do Trabalho",
    descricao: "",
    duracao: "1 Ano e 6 Meses",
    eixoTecnologico: "",
    mercadoDeTrabalho: "",
    periodo: "noutrno",
    tipoDeCurso:"modular",
    vagas: 40,
    ativo: true
}

const modQLD:CursoData = {
    nome: "Qualidade",
    descricao: "",
    duracao: "",
    eixoTecnologico: "",
    mercadoDeTrabalho: "",
    periodo: "noturno",
    tipoDeCurso:"modular",
    vagas: 40,
    ativo: true
}

export const todosCursosETIM = [
    etimADM, etimDS, etimMKT
]

export const todosCursosModular = [
    modADM,modINFO,modLOG,modQLD,modRH,modST
]

export const todosCursosModularTecnico = [
    mtRH,mtLHS
]

