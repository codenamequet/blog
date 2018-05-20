module.exports = {
  base: 'blog',
  title: 'Marquet Reid\'s Blog',
  description: 'my blog site',

  themeConfig: {
    nav: [
      { text: 'Home', link: 'http://marquetreid.com' },
      { text: 'About', link: 'http://marquetreid.com/#about' },
      { text: 'Portfolio', link: 'http://marquetreid.com/#portfolio' },
      { text: 'Skills', link: 'http://marquetreid.com/#skills' },
      { text: 'Contact', link: 'http://marquetreid.com/#contact' }
    ],
    sidebar: [
      {
        title: 'April 2018',
        collapsable: false,
        children: [
          '/',
          '/VuePressPost',
          '/FeastOfManyBeast',
          '/MaximumMultiple',
          'TransformToPrime'
        ] 
      }
      // {
      //   title: 'May 2018',
      //   collapsable: false,
      //   children: [
      //     '/Post-1',
      //     '/Post-2',
      //   ]
      // },
      // {
      //   title: 'June 2018',
      //   collapsable: false,
      //   children: [
      //     '/AllSummer18'
      //   ]
      // }
    ]
  }
}
