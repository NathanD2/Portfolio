
const HighlightProjectData = [
    {
      id: 0,
      projectImageName: "portfolio.png",
      projectTitle: "Web Portfolio",
      tags: [
        {tag: 'Javascript', color: 'lightgreen'},
        {tag: 'React', color: 'lightblue'},
        {tag: 'Sass', color: 'pink'},
        {tag: 'CSS', color: 'pink'},
        {tag: 'HTML5', color: 'lightblue'}
      ],
      links: [
        {
          name: "Github",
          link: "https://github.com/NathanD2/Portfolio",
          active: true
        },
        {
          name: "Live",
          link: "https://nathandong.herokuapp.com/",
          active: true
        }
      ],
      desc: "Web Development Portfolio created to extablish online presence. Implemented using React, Express and Sass.",
      descLong: "Web Development Portfolio created to extablish online presence. Implemented using React, Express and Sass."
    },
    {
      id: 1,
      projectImageName: "craigslist-rental-data.png",
      projectTitle: "Craigslist Rental Data",
      tags: [{tag: 'Python', color: 'LemonChiffon'}, {tag: 'Numpy', color: 'lightgreen'}, {tag: 'pandas', color: 'grey'}, {tag: 'seaborn', color: 'cadetblue'}],
      links: [
        {
          name: "Github",
          link: "",
          active: false
        }
      ],
      desc: "Generated Vancouver Rental price dataset using Craigslist web scrapping, pre-processed/cleaned the dataset and analyzed the dataset. Implemented using Python, NumPy, pandas, Seaborn and matplotlib.",
      descLong: "Generated Vancouver Rental price dataset using Craigslist web scrapping, pre-processed/cleaned the dataset and analyzed the dataset. Implemented using Python, NumPy, pandas, Seaborn and matplotlib."
    },
    {
      id: 2,
      projectImageName: "bank-fam-system.jpg",
      projectTitle: "Bank FAM System",
      links: [
        {
          name: "Github",
          link: "https://github.com/NathanD2/bank_fam_system",
          active: true
        }
      ],
      tags: [{tag: 'Python', color: 'LemonChiffon'}, {tag: 'Object-Oriented Programming', color: 'lightblue'}],
      desc: "The FAM system is a parental control lock on an individual's bank account. The system can register users, keep track of all spending/transactions of their bank accounts and lock accounts if certain conditions are met.",
      descLong: "The FAM system is a parental control lock on an individual's bank account. The system can register users, keep track of all spending/transactions of their bank accounts and lock accounts if certain conditions are met. Different account types provide differing levels of moderation in addition to each having allocated budgets to 4 categories (Games and Entertainment, Clothing and Accessories, Eating Out, and Miscellaneous)"
    }
  ];


const ProjectData = [
  {
    id: 0,
    projectImageName: "portfolio.png",
    projectTitle: "Web Portfolio",
    tags: [
      {tag: 'Javascript', color: 'lightgreen'},
      {tag: 'React', color: 'lightblue'},
      {tag: 'Sass', color: 'pink'},
      {tag: 'CSS', color: 'pink'},
      {tag: 'HTML5', color: 'lightblue'}
    ],
    links: [
      {
        name: "Github",
        link: "https://github.com/NathanD2/Portfolio",
        active: true
      },
      {
        name: "Live",
        link: "https://nathandong.herokuapp.com/",
        active: true
      }
    ],
    desc: "Web Development Portfolio created to extablish online presence. Implemented using React, Express and Sass.",
    descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum sapien vitae augue rhoncus viverra. Vestibulum faucibus tincidunt leo eu semper. Donec pharetra erat in metus mollis elementum. Praesent convallis imperdiet ex, ut mollis lorem euismod ut. Ut et consectetur turpis. Vivamus finibus, nibh eget porta finibus, purus magna dictum tortor, a pulvinar ex justo ut lectus. Integer pulvinar tellus sem. Integer vestibulum justo sed hendrerit posuere. Curabitur facilisis, justo quis euismod lacinia, nisl urna euismod risus, a gravida magna nisi vitae erat. Nulla tempus ultricies nisi a finibus. Proin in elit fringilla, porta sapien sed, congue dolor. Vivamus commodo ex neque, non maximus magna posuere ut. Quisque eu eros urna. Mauris mollis lorem eget felis tincidunt, quis lobortis tellus efficitur. Nunc suscipit ex condimentum sapien rutrum, ut condimentum mi malesuada. Suspendisse semper volutpat quam, sed tincidunt ipsum aliquam sit amet. Curabitur at lacus finibus lectus cursus bibendum ut a dolor. Mauris rhoncus fermentum dolor vel vehicula. Duis rutrum ex a tellus molestie malesuada nec eu felis. Etiam venenatis, turpis sit amet condimentum aliquam, nisi tortor imperdiet magna, nec pulvinar libero urna vel leo. Fusce id molestie eros, ac mattis neque. Fusce aliquam, augue eget ultricies bibendum, tellus felis interdum nibh, feugiat blandit sem justo et mi. Aliquam sed diam sit amet lorem posuere aliquam non a mi. Praesent eget nisi sit amet sem egestas volutpat ac molestie felis. Curabitur at molestie nulla. Pellentesque ut viverra tortor, et scelerisque nibh. Proin tristique condimentum magna, in sollicitudin libero tincidunt et. Morbi gravida dui vitae nunc rhoncus, id condimentum velit sagittis. Cras vitae odio tincidunt, rhoncus sem id, euismod dolor. Aliquam ullamcorper, ex nec molestie sodales, nulla neque tincidunt augue, ac auctor ipsum elit ac arcu. Fusce in magna neque. Mauris non felis ut felis finibus semper."
  },
  {
    id: 1,
    projectImageName: "craigslist-rental-data.png",
    projectTitle: "Craigslist Rental Data",
    tags: [{tag: 'Python', color: 'LemonChiffon'}, {tag: 'Numpy', color: 'lightgreen'}, {tag: 'pandas', color: 'grey'}, {tag: 'seaborn', color: 'cadetblue'}],
    links: [
      {
        name: "Github",
        link: "",
        active: false
      }
    ],
    desc: "Generated Vancouver Rental price dataset using Craigslist web scrapping, pre-processed/cleaned the dataset and analyzed the dataset. Implemented using Python, NumPy, pandas, Seaborn and matplotlib.",
    descLong: "Long description"
  },
  {
    id: 2,
    projectImageName: "bank-fam-system.jpg",
    projectTitle: "Bank FAM System",
    links: [
      {
        name: "Github",
        link: "https://github.com/NathanD2/bank_fam_system",
        active: true
      }
    ],
    tags: [{tag: 'Python', color: 'LemonChiffon'}, {tag: 'Object-Oriented Programming', color: 'lightblue'}],
    desc: "The FAM system is a parental control lock on an individual's bank account. The system can register users, keep track of all spending/transactions of their bank accounts and lock accounts if certain conditions are met.",
    descLong: "The FAM system is a parental control lock on an individual's bank account. The system can register users, keep track of all spending/transactions of their bank accounts and lock accounts if certain conditions are met. Different account types provide differing levels of moderation in addition to each having allocated budgets to 4 categories (Games and Entertainment, Clothing and Accessories, Eating Out, and Miscellaneous)"
  },
  {
    id: 3,
    projectImageName: "pokeretriever.png",
    projectTitle: "PokeRetriever",
    links: [
      {
        name: "Github",
        link: "https://github.com/NathanD2/pokeretriever",
        active: true
      }
    ],
    tags: [{tag: 'Python', color: 'LemonChiffon'}, {tag: 'Object-Oriented Programming', color: 'lightblue'}],
    desc: "Uses Object-Oriented programming with command-line parsing for asynchronous HTTP requests to PokeAPI. API data transformed into Python objects with information presented via console or output txt file.",
    descLong: "Uses Object-Oriented programming with command-line parsing for asynchronous HTTP requests to PokeAPI. API data transformed into Python objects with information presented via console or output txt file. API Information: https://pokeapi.co/docs/v2"
  }
];

  
export {
    HighlightProjectData,
    ProjectData
};
