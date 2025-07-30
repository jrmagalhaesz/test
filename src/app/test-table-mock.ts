/**
 * Mock data for grupos table
 * This file contains sample data that matches the structure shown in the table
 */

export interface GrupoTableItem {
  id: string
  nomeGrupo: string
  nivel: number
  responsavel: string
  lateralidadeAtual: {
    codigo: string
    funcionario: string
  }
  unidadeJuridica: string
  ativo: boolean
  dataUltimaModificacao: Date
}

export interface GruposTableData {
  items: GrupoTableItem[]
  totalItems: number
  currentPage: number
  itemsPerPage: number
  totalPages: number
}

/**
 * Creates mock data for the grupos table
 * This simulates what would come from an API endpoint
 */
export function createGruposTableMock(): GruposTableData {
  const mockItems: GrupoTableItem[] = [
    // Original 8 items
    {
      id: "1",
      nomeGrupo: "ADTRO 2",
      nivel: 1,
      responsavel: "F1234567",
      lateralidadeAtual: {
        codigo: "F1234568",
        funcionario: "JOHN DOE",
      },
      unidadeJuridica: "8443 - DIBUR",
      ativo: true,
      dataUltimaModificacao: new Date("2024-01-15"),
    },
    {
      id: "2",
      nomeGrupo: "BRAVO A",
      nivel: 2,
      responsavel: "F7654321",
      lateralidadeAtual: {
        codigo: "F7654322",
        funcionario: "JANE SMITH",
      },
      unidadeJuridica: "2291 - JURIDICO SUL",
      ativo: true,
      dataUltimaModificacao: new Date("2024-02-20"),
    },
    {
      id: "3",
      nomeGrupo: "CHARLIE 5",
      nivel: 3,
      responsavel: "F3333333",
      lateralidadeAtual: {
        codigo: "F3333334",
        funcionario: "MARIA OLIVEIRA",
      },
      unidadeJuridica: "3150 - NUCLEO CENTRO",
      ativo: false,
      dataUltimaModificacao: new Date("2024-03-10"),
    },
    {
      id: "4",
      nomeGrupo: "DELTA X",
      nivel: 1,
      responsavel: "F5555555",
      lateralidadeAtual: {
        codigo: "F5555556",
        funcionario: "CARLOS SANTOS",
      },
      unidadeJuridica: "1200 - ADMINISTRATIVO",
      ativo: true,
      dataUltimaModificacao: new Date("2024-03-25"),
    },
    {
      id: "5",
      nomeGrupo: "ECHO 9",
      nivel: 2,
      responsavel: "F9999999",
      lateralidadeAtual: {
        codigo: "F9999998",
        funcionario: "ANA COSTA",
      },
      unidadeJuridica: "4567 - CONTENCIOSO",
      ativo: true,
      dataUltimaModificacao: new Date("2024-04-01"),
    },
    {
      id: "6",
      nomeGrupo: "FOXTROT 7",
      nivel: 3,
      responsavel: "F7777777",
      lateralidadeAtual: {
        codigo: "F7777778",
        funcionario: "LUCAS FERREIRA",
      },
      unidadeJuridica: "9876 - TRIBUTARIO",
      ativo: true,
      dataUltimaModificacao: new Date("2024-04-15"),
    },
    {
      id: "7",
      nomeGrupo: "GOLF 3",
      nivel: 1,
      responsavel: "F1111111",
      lateralidadeAtual: {
        codigo: "F1111112",
        funcionario: "PATRICIA LIMA",
      },
      unidadeJuridica: "5432 - TRABALHISTA",
      ativo: false,
      dataUltimaModificacao: new Date("2024-03-30"),
    },
    {
      id: "8",
      nomeGrupo: "HOTEL 8",
      nivel: 2,
      responsavel: "F8888888",
      lateralidadeAtual: {
        codigo: "F8888889",
        funcionario: "ROBERTO SILVA",
      },
      unidadeJuridica: "6789 - CIVIL",
      ativo: true,
      dataUltimaModificacao: new Date("2024-04-20"),
    },
    // Additional items for pagination
    {
      id: "9",
      nomeGrupo: "INDIA 4",
      nivel: 1,
      responsavel: "F2222222",
      lateralidadeAtual: {
        codigo: "F2222223",
        funcionario: "FERNANDA ROCHA",
      },
      unidadeJuridica: "3456 - PENAL",
      ativo: true,
      dataUltimaModificacao: new Date("2024-05-01"),
    },
    {
      id: "10",
      nomeGrupo: "JULIET 6",
      nivel: 3,
      responsavel: "F4444444",
      lateralidadeAtual: {
        codigo: "F4444445",
        funcionario: "RICARDO MENDES",
      },
      unidadeJuridica: "7890 - AMBIENTAL",
      ativo: false,
      dataUltimaModificacao: new Date("2024-05-05"),
    },
    {
      id: "11",
      nomeGrupo: "KILO 1",
      nivel: 2,
      responsavel: "F6666666",
      lateralidadeAtual: {
        codigo: "F6666667",
        funcionario: "AMANDA TORRES",
      },
      unidadeJuridica: "2345 - CONSUMIDOR",
      ativo: true,
      dataUltimaModificacao: new Date("2024-05-10"),
    },
    {
      id: "12",
      nomeGrupo: "LIMA 9",
      nivel: 1,
      responsavel: "F3333334",
      lateralidadeAtual: {
        codigo: "F3333335",
        funcionario: "BRUNO ALVES",
      },
      unidadeJuridica: "5678 - EMPRESARIAL",
      ativo: true,
      dataUltimaModificacao: new Date("2024-05-15"),
    },
    {
      id: "13",
      nomeGrupo: "MIKE 2",
      nivel: 3,
      responsavel: "F5555556",
      lateralidadeAtual: {
        codigo: "F5555557",
        funcionario: "CAMILA SANTOS",
      },
      unidadeJuridica: "8901 - IMOBILIARIO",
      ativo: false,
      dataUltimaModificacao: new Date("2024-05-20"),
    },
    {
      id: "14",
      nomeGrupo: "NOVEMBER 7",
      nivel: 2,
      responsavel: "F7777778",
      lateralidadeAtual: {
        codigo: "F7777779",
        funcionario: "DIEGO FERREIRA",
      },
      unidadeJuridica: "1234 - BANCARIO",
      ativo: true,
      dataUltimaModificacao: new Date("2024-05-25"),
    },
    {
      id: "15",
      nomeGrupo: "OSCAR 5",
      nivel: 1,
      responsavel: "F9999990",
      lateralidadeAtual: {
        codigo: "F9999991",
        funcionario: "ELIANA COSTA",
      },
      unidadeJuridica: "4567 - PREVIDENCIARIO",
      ativo: true,
      dataUltimaModificacao: new Date("2024-06-01"),
    },
    {
      id: "16",
      nomeGrupo: "PAPA 3",
      nivel: 3,
      responsavel: "F1111113",
      lateralidadeAtual: {
        codigo: "F1111114",
        funcionario: "FABIO LIMA",
      },
      unidadeJuridica: "7891 - INTERNACIONAL",
      ativo: false,
      dataUltimaModificacao: new Date("2024-06-05"),
    },
    {
      id: "17",
      nomeGrupo: "QUEBEC 8",
      nivel: 2,
      responsavel: "F2222224",
      lateralidadeAtual: {
        codigo: "F2222225",
        funcionario: "GABRIELA ROCHA",
      },
      unidadeJuridica: "2346 - FAMILIA",
      ativo: true,
      dataUltimaModificacao: new Date("2024-06-10"),
    },
    {
      id: "18",
      nomeGrupo: "ROMEO 1",
      nivel: 1,
      responsavel: "F4444446",
      lateralidadeAtual: {
        codigo: "F4444447",
        funcionario: "HENRIQUE MENDES",
      },
      unidadeJuridica: "5679 - SUCESSOES",
      ativo: true,
      dataUltimaModificacao: new Date("2024-06-15"),
    },
    {
      id: "19",
      nomeGrupo: "SIERRA 4",
      nivel: 3,
      responsavel: "F6666668",
      lateralidadeAtual: {
        codigo: "F6666669",
        funcionario: "ISABELA TORRES",
      },
      unidadeJuridica: "8902 - PROPRIEDADE",
      ativo: false,
      dataUltimaModificacao: new Date("2024-06-20"),
    },
    {
      id: "20",
      nomeGrupo: "TANGO 6",
      nivel: 2,
      responsavel: "F8888890",
      lateralidadeAtual: {
        codigo: "F8888891",
        funcionario: "JOAO ALVES",
      },
      unidadeJuridica: "1235 - CONTRATOS",
      ativo: true,
      dataUltimaModificacao: new Date("2024-06-25"),
    },
    {
      id: "21",
      nomeGrupo: "UNIFORM 9",
      nivel: 1,
      responsavel: "F1010101",
      lateralidadeAtual: {
        codigo: "F1010102",
        funcionario: "KELLY SANTOS",
      },
      unidadeJuridica: "4568 - LICITACOES",
      ativo: true,
      dataUltimaModificacao: new Date("2024-07-01"),
    },
    {
      id: "22",
      nomeGrupo: "VICTOR 2",
      nivel: 3,
      responsavel: "F2020202",
      lateralidadeAtual: {
        codigo: "F2020203",
        funcionario: "LEONARDO FERREIRA",
      },
      unidadeJuridica: "7892 - REGULATORIO",
      ativo: false,
      dataUltimaModificacao: new Date("2024-07-05"),
    },
    {
      id: "23",
      nomeGrupo: "WHISKEY 7",
      nivel: 2,
      responsavel: "F3030303",
      lateralidadeAtual: {
        codigo: "F3030304",
        funcionario: "MARIANA COSTA",
      },
      unidadeJuridica: "2347 - COMPLIANCE",
      ativo: true,
      dataUltimaModificacao: new Date("2024-07-10"),
    },
    {
      id: "24",
      nomeGrupo: "XRAY 5",
      nivel: 1,
      responsavel: "F4040404",
      lateralidadeAtual: {
        codigo: "F4040405",
        funcionario: "NICOLAS LIMA",
      },
      unidadeJuridica: "5680 - SOCIETARIO",
      ativo: true,
      dataUltimaModificacao: new Date("2024-07-15"),
    },
    {
      id: "25",
      nomeGrupo: "YANKEE 3",
      nivel: 3,
      responsavel: "F5050505",
      lateralidadeAtual: {
        codigo: "F5050506",
        funcionario: "OLIVIA ROCHA",
      },
      unidadeJuridica: "8903 - FUSOES",
      ativo: false,
      dataUltimaModificacao: new Date("2024-07-20"),
    },
    {
      id: "26",
      nomeGrupo: "ZULU 8",
      nivel: 2,
      responsavel: "F6060606",
      lateralidadeAtual: {
        codigo: "F6060607",
        funcionario: "PEDRO MENDES",
      },
      unidadeJuridica: "1236 - RECUPERACAO",
      ativo: true,
      dataUltimaModificacao: new Date("2024-07-25"),
    },
    {
      id: "27",
      nomeGrupo: "ALPHA 1",
      nivel: 1,
      responsavel: "F7070707",
      lateralidadeAtual: {
        codigo: "F7070708",
        funcionario: "QUEILA TORRES",
      },
      unidadeJuridica: "4569 - FALENCIA",
      ativo: true,
      dataUltimaModificacao: new Date("2024-07-30"),
    },
    {
      id: "28",
      nomeGrupo: "BETA 4",
      nivel: 3,
      responsavel: "F8080808",
      lateralidadeAtual: {
        codigo: "F8080809",
        funcionario: "RAFAEL ALVES",
      },
      unidadeJuridica: "7893 - ARBITRAGEM",
      ativo: false,
      dataUltimaModificacao: new Date("2024-08-01"),
    },
    {
      id: "29",
      nomeGrupo: "GAMMA 6",
      nivel: 2,
      responsavel: "F9090909",
      lateralidadeAtual: {
        codigo: "F9090910",
        funcionario: "SOFIA SANTOS",
      },
      unidadeJuridica: "2348 - MEDIACAO",
      ativo: true,
      dataUltimaModificacao: new Date("2024-08-05"),
    },
    {
      id: "30",
      nomeGrupo: "DELTA 9",
      nivel: 1,
      responsavel: "F1212121",
      lateralidadeAtual: {
        codigo: "F1212122",
        funcionario: "THIAGO FERREIRA",
      },
      unidadeJuridica: "5681 - CONCILIACAO",
      ativo: true,
      dataUltimaModificacao: new Date("2024-08-10"),
    },
    {
      id: "31",
      nomeGrupo: "EPSILON 2",
      nivel: 3,
      responsavel: "F2323232",
      lateralidadeAtual: {
        codigo: "F2323233",
        funcionario: "URSULA COSTA",
      },
      unidadeJuridica: "8904 - CONSULTIVO",
      ativo: false,
      dataUltimaModificacao: new Date("2024-08-15"),
    },
    {
      id: "32",
      nomeGrupo: "ZETA 7",
      nivel: 2,
      responsavel: "F3434343",
      lateralidadeAtual: {
        codigo: "F3434344",
        funcionario: "VITOR LIMA",
      },
      unidadeJuridica: "1237 - CONTENCIOSO",
      ativo: true,
      dataUltimaModificacao: new Date("2024-08-20"),
    },
  ]

  const itemsPerPage = 8
  const totalPages = Math.ceil(mockItems.length / itemsPerPage)

  return {
    items: mockItems,
    totalItems: mockItems.length,
    currentPage: 1,
    itemsPerPage,
    totalPages,
  }
}

/**
 * Simulates API delay for more realistic testing
 */
export function getGruposTableDataAsync(page = 1, itemsPerPage = 8): Promise<GruposTableData> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const allData = createGruposTableMock()
      const startIndex = (page - 1) * itemsPerPage
      const endIndex = startIndex + itemsPerPage
      const paginatedItems = allData.items.slice(startIndex, endIndex)

      resolve({
        items: paginatedItems,
        totalItems: allData.totalItems,
        currentPage: page,
        itemsPerPage,
        totalPages: Math.ceil(allData.totalItems / itemsPerPage),
      })
    }, 500) // Simulate 500ms API delay
  })
}

/**
 * Get filtered and paginated data
 */
export function getFilteredGruposTableDataAsync(
  page = 1,
  itemsPerPage = 8,
  searchTerm = "",
  statusFilter: "all" | "active" | "inactive" = "all",
): Promise<GruposTableData> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const allData = createGruposTableMock()
      let filteredItems = [...allData.items]

      // Apply search filter
      if (searchTerm.trim()) {
        const searchLower = searchTerm.toLowerCase()
        filteredItems = filteredItems.filter(
          (item) =>
            item.nomeGrupo.toLowerCase().includes(searchLower) ||
            item.responsavel.toLowerCase().includes(searchLower) ||
            item.lateralidadeAtual.funcionario.toLowerCase().includes(searchLower) ||
            item.unidadeJuridica.toLowerCase().includes(searchLower),
        )
      }

      // Apply status filter
      if (statusFilter !== "all") {
        filteredItems = filteredItems.filter((item) => (statusFilter === "active" ? item.ativo : !item.ativo))
      }

      const totalFilteredItems = filteredItems.length
      const totalPages = Math.ceil(totalFilteredItems / itemsPerPage)
      const startIndex = (page - 1) * itemsPerPage
      const endIndex = startIndex + itemsPerPage
      const paginatedItems = filteredItems.slice(startIndex, endIndex)

      resolve({
        items: paginatedItems,
        totalItems: totalFilteredItems,
        currentPage: page,
        itemsPerPage,
        totalPages,
      })
    }, 500)
  })
}
