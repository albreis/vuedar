module.exports = {
    title: 'Vuedar',
    description: 'Criador de Calendário',
    base: '/vuedar/',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/src/vuedar.html' },
        { text: 'Documentação', link: '/src/vuedar.html' },
        { text: 'Exemplos', link: '/exemplos/index.html' },
        { text: 'Contato', link: 'https://wa.me/5551981108038' }
      ],
      sidebar: {
        '/exemplos/': [
            '',
        ]
      },
      activeHeaderLinks: true,
      displayAllHeaders: true,
      // sidebarDepth: 2,
      repo: 'albreis/vuedar',
      repoLabel: 'Github',
      // docsRepo: 'vuejs/vuepress',
      docsDir: 'docs',
      docsBranch: 'master',
      editLinks: true,
      editLinkText: 'Algo errado? Ajude-nos a corrigir!'
    }
  }