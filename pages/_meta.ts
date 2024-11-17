export default {
  index: {
    type: 'page',
    title: 'Nextra',
    display: 'hidden',
    theme: {
      layout: 'raw'
    }
  },
  'promo-tile': {
    type: 'page',
    title: 'Promo Tile',
    display: 'hidden',
    theme: {
      layout: 'raw'
    }
  },
  docs: {
    type: 'page',
    title: 'Documentation'
  },
  // tags: {
  //   display: "children",
  //   theme: {
  //     layout: "raw",
  //   },
  // },
  blog: {
    type: "page",
    title: "Blog",
    theme: {
      layout: "raw",
      typesetting: "article",
      timestamp: false,
    }
  },
  404: {
    type: 'page',
    theme: {
      timestamp: false,
      typesetting: 'article'
    }
  }
}
