import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
  {
    routeLink: 'dashboard',
    icon: 'fa fa-home',
    label: 'Dashboard'
  },

  {
    routeLink: 'cadastro',
    icon: 'fa fa-box-open',
    label: 'Cadastro',
    items: [
      {
        routeLink: 'cadastro/morador',
        label: 'Morador',
        items: [
          {
            routeLink: 'cadastro/morador/teste1',
            label: 'teste1'
          },
          {
            routeLink: 'cadastro/morador/teste2',
            label: 'teste2'
          }
        ]
      },
      {
        routeLink: 'cadastro/medidor',
        label: 'Medidor'
      },
      {
        routeLink: 'cadastro/produto',
        label: 'Produto'
      },
    ]
  },

  {
    routeLink: 'medicao',
    icon: 'fa fa-camera',
    label: 'Medição'
  },

  {
    routeLink: 'financeiro',
    icon: 'fa fa-chart-bar',
    label: 'Financeiro'
  },

  {
    routeLink: 'configuracoes',
    icon: 'fa fa-cog',
    label: 'Configurações'
  }

];
