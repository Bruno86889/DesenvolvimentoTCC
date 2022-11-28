const editalData = [
    {
        numero: "1234",
        label: "Processo Seletivo Simplificado",
        url: "https://etecdenovaodessa.com.br/wp-content/uploads/2022/05/2022-04-29-Ricardo_ProcSeletivo-CORRIGIDO.pdf",
        tipo: "processo-seletivo",
        situacao: "aberto",
        ano: 2022,
        semestre: 1
    },
    {
        numero: "234/06/2022",
        label: "Operação e Configuração de Aplicativos II (Informática)",
        url: "https://etecdenovaodessa.com.br/wp-content/uploads/2022/02/PPS_Edital-de-Abertura_Edital_-234_06_2022.pdf",
        tipo: "processo-seletivo",
        situacao: "encerrado",
        ano: 2022,
        semestre: 1
    },
    {
        numero: "234/06/2022",
        label: "Operação e Configuração de Aplicativos II (Informática)",
        url: "https://etecdenovaodessa.com.br/wp-content/uploads/2022/03/234-06-2022-PSS-DEFERIMENTO_INDEFERIMENTO-SEM-PPI.pdf",
        tipo: "processo-seletivo",
        situacao: "resultado",
        ano: 2022,
        semestre: 1
    },


    {
        ano: 2022,
        semestre: 0,
        label: "ETIM Desenvolvimento de Sistemas",
        numero: "12",
        situacao: "encerrado",
        tipo: "vagas-remancentes",
        url: "https://etecdenovaodessa.com.br/wp-content/uploads/2021/12/Edital-12-VAGAS-REMANESCENTES-ETIM-DESENV.-SISTEMAS.pdf"
    },
    {
        ano: 2022,
        semestre: 0,
        label: "ETIM Desenvolvimento de Sistemas",
        numero: "12",
        situacao: "resultado",
        tipo: "vagas-remancentes",
        url: "https://etecdenovaodessa.com.br/wp-content/uploads/2021/12/Edital-12-VAGAS-REMANESCENTES-ETIM-DESENV.-SISTEMAS.pdf"
    },
]

const newData = editalData.reduce((acc, obj) => {
    let key = obj.tipo
    if (!acc[key]) {
        acc[key] = []
    }

    acc[key].push(obj)
    return acc
}, {})
