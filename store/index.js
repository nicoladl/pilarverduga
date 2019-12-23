export const state = () => ({
  bio: 'bla bla bla bla bla bla bla bla bla bla bla bla',
  menu: [
    {
      label: '<span>A</span>b<span></span><span>o</span><span>u</span>t m<span>e</span>',
      slug: 'cv'
    },
    {
      label: 'W<span>o</span>rks',
      slug: 'work'
    },
    {
      label: 'C<span>o</span>nt<span>a</span>ct',
      slug: 'contact'
    },
    {
      label: '©2019',
      slug: 'footer'
    }
  ],
  works: [
    {
      label: 'Progetto 1',
      year: '019.',
      category: ['E-Commerce', 'SEO'],
      image: './images/aprilteatro.jpg',
      href: '#'
    },
    {
      label: 'Progetto 2',
      year: '019.',
      category: ['E-Commerce', 'SEO'],
      image: './images/aprilteatro.jpg',
      href: '#'
    }
  ],
  contacts: [
    {
      label: 'Social',
      content: [
        {
          label: 'Behance',
          href: '#'
        },
        {
          label: 'LinkedIn',
          href: '#'
        },
        {
          label: 'Twitter',
          href: '#'
        },
        {
          label: 'Instagram',
          href: '#'
        }
      ]
    },
    {
      label: 'E—<br>mail',
      content: [
        {
          label: 'email@<br>gmail.com',
          href: 'mailto:#'
        }
      ]
    }
  ]
})
