export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },

  {
    text: 'Voter Information',
    icon: 'folder',
    items: [
      {
        text: 'State Voter List',
        path: '/voterData'
      },      
    ] 
  },

  {
    text: 'Race Information',
    icon: 'folder',
    items: [
      {
        text: 'Federal Races',
        path: '/federalraceData'
      },      {
        text: 'NV State Races',
        path: '/stateraceData'
      },      {
        text: 'NV Senate Races',
        path: '/senraceData'
      },      {
        text: 'NV Assembly Races',
        path: '/asmraceData'
      },
    ]
  },

  {
    text: 'NWPac Administration',
    icon: 'folder',
    items: [
      {
        text: 'User Administration',
        path: '/memberData'
      },      {
        text: 'Fund Raising',
        path: '/fundraisingData'
      },      {
        text: 'Fiinancial Information',
        path: '/financialData'
      },      
    
    ]
  }
  ];
