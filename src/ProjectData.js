
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
      descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum sapien vitae augue rhoncus viverra. Vestibulum faucibus tincidunt leo eu semper. Donec pharetra erat in metus mollis elementum. Praesent convallis imperdiet ex, ut mollis lorem euismod ut. Ut et consectetur turpis. Vivamus finibus, nibh eget porta finibus, purus magna dictum tortor, a pulvinar ex justo ut lectus. Integer pulvinar tellus sem. Integer vestibulum justo sed hendrerit posuere. Curabitur facilisis, justo quis euismod lacinia, nisl urna euismod risus, a gravida magna nisi vitae erat. Nulla tempus ultricies nisi a finibus. Proin in elit fringilla, porta sapien sed, congue dolor. Vivamus commodo ex neque, non maximus magna posuere ut. Quisque eu eros urna. Mauris mollis lorem eget felis tincidunt, quis lobortis tellus efficitur. Nunc suscipit ex condimentum sapien rutrum, ut condimentum mi malesuada. Suspendisse semper volutpat quam, sed tincidunt ipsum aliquam sit amet. Curabitur at lacus finibus lectus cursus bibendum ut a dolor. Mauris rhoncus fermentum dolor vel vehicula. Duis rutrum ex a tellus molestie malesuada nec eu felis. Etiam venenatis, turpis sit amet condimentum aliquam, nisi tortor imperdiet magna, nec pulvinar libero urna vel leo. Fusce id molestie eros, ac mattis neque. Fusce aliquam, augue eget ultricies bibendum, tellus felis interdum nibh, feugiat blandit sem justo et mi. Aliquam sed diam sit amet lorem posuere aliquam non a mi. Praesent eget nisi sit amet sem egestas volutpat ac molestie felis. Curabitur at molestie nulla. Pellentesque ut viverra tortor, et scelerisque nibh. Proin tristique condimentum magna, in sollicitudin libero tincidunt et. Morbi gravida dui vitae nunc rhoncus, id condimentum velit sagittis. Cras vitae odio tincidunt, rhoncus sem id, euismod dolor. Aliquam ullamcorper, ex nec molestie sodales, nulla neque tincidunt augue, ac auctor ipsum elit ac arcu. Fusce in magna neque. Mauris non felis ut felis finibus semper."
    },
    {
      id: 1,
      projectImageName: "van-light.jpg",
      projectTitle: "Title",
      tags: [{tag: 'Javascript', color: 'lightgreen'}, {tag: 'React', color: 'lightblue'}, {tag: 'Javascript', color: 'pink'}],
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
      desc: "Excepteur reprehenderit non dolor excepteur. Deserunt ea voluptate deserunt consectetur aliquip nulla commodo. Ex reprehenderit commodo aliqua non qui laboris sit. Voluptate nostrud fugiat deserunt proident ut eiusmod in pariatur ad occaecat Lorem aliqua cillum esse.",
      descLong: "Long description"
    },
    {
      id: 2,
      projectTitle: "Title",
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
      tags: [{tag: 'Javascript', color: 'lightgreen'}, {tag: 'React', color: 'lightblue'}, {tag: 'Javascript', color: 'pink'}],
      desc: "Excepteur reprehenderit non dolor excepteur. Deserunt ea voluptate deserunt consectetur aliquip nulla commodo. Ex reprehenderit commodo aliqua non qui laboris sit. Voluptate nostrud fugiat deserunt proident ut eiusmod in pariatur ad occaecat Lorem aliqua cillum esse.",
      descLong: "Long description"
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
    projectImageName: "van-light.jpg",
    projectTitle: "Title",
    tags: [{tag: 'Javascript', color: 'lightgreen'}, {tag: 'React', color: 'lightblue'}, {tag: 'Javascript', color: 'pink'}],
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
    desc: "Excepteur reprehenderit non dolor excepteur. Deserunt ea voluptate deserunt consectetur aliquip nulla commodo. Ex reprehenderit commodo aliqua non qui laboris sit. Voluptate nostrud fugiat deserunt proident ut eiusmod in pariatur ad occaecat Lorem aliqua cillum esse.",
    descLong: "Long description"
  },
  {
    id: 2,
    projectTitle: "Title",
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
    tags: [{tag: 'Javascript', color: 'lightgreen'}, {tag: 'React', color: 'lightblue'}, {tag: 'Javascript', color: 'pink'}],
    desc: "Excepteur reprehenderit non dolor excepteur. Deserunt ea voluptate deserunt consectetur aliquip nulla commodo. Ex reprehenderit commodo aliqua non qui laboris sit. Voluptate nostrud fugiat deserunt proident ut eiusmod in pariatur ad occaecat Lorem aliqua cillum esse.",
    descLong: "Long description"
  }
];;

// export function HighlightProjectData() {
//     return highlightProjectData;
// }

// export function ProjectData() {
//     return projectData;
// }

  
export {
    HighlightProjectData,
    ProjectData
};
