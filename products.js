const products = [

    {
        title: 'Sekiro',
        description: ' Sekiro: Shadows Die Twice is an action-adventure video game developed by FromSoftware and published by Activision. The game takes place in the Sengoku period in Japan, and follows a shinobi known as Wolf as he attempts to take revenge on a samurai clan who attacked him and kidnapped his lord.',
        price: '59',
        genre: 'rpg',
        age: '16' ,
        img: '/images/game1.jpg',
        id: '1',
      },

      {
        title: 'Dark Souls III',
        description: 'Dark Souls 3 takes place in a transitory place, revolving around the first flame and the cycle of fire and dark. You play as a protagonist whose goal is to find and return the five Lords of Cinder to their thrones at Firelink Shrine in order to link the flame again.',
        price: '39U',
        genre:'souls',
        age: '18',
        img: '/images/game2.jpg',
        id: '2',
      },

      {
        title: 'Blood Borne',
        description: 'Bloodborne is an action role-playing game played from a third-person perspective and features elements similar to those found in the Souls series of games, particularly Demons Souls and Dark Souls.',
        price: '59',
        genre:'souls',
        age: '18',
        img: '/images/game3.jpg',
        id: '3',
      },

      {
        title: 'Red Dead Redemption',
        description: 'Red Dead Redemption is set during the decline of the American frontier in the year 1911 and follows John Marston, a former outlaw whose wife and son are taken hostage by the government in ransom for his services as a hired gun.',
        price: '39',
        genre:'rpg',
        age: '18',
        img: '/images/game4.jpg',
        id: '4',
      },

      {
        title: 'Assasins Creed Origins',
        description: 'Assassins Creed Origins is an action-adventure video game developed by Ubisoft Montreal and published by Ubisoft. ... The game is set in Ancient Egypt near the end of the Ptolemaic period (49–47 BCE) and recounts the secret fictional history of real-world events.',
        price: '19',
        genre:'rpg',
        age: '12',
        img: '/images/game5.jpg',
        id: '5',
      },

      {
        title: 'Assasins Creed Syndicate',
        description: 'Assassins Creed Syndicate is an action-adventure video game developed by Ubisoft Quebec and published by Ubisoft. ... Players control the two lead protagonists—twins Jacob and Evie Frye—throughout the games story, switching between them both during and outside of missions.',
        price: '19',
        genre:'rpg',
        age: '12',
        img: '/images/game6.jpg',
        id: '6',
      },

      {
        title: 'Assasins Creed Unity',
        description: 'Assassins Creed® Unity tells the story of Arno, a young man who embarks upon an extraordinary journey to expose the true powers behind the French Revolution. In the brand new co-op mode, you and your friends will also be thrown in the middle of a ruthless struggle for the fate of a nation.',
        price: '59USD',
        genre:'rpg',
        age: '12',
        img: '/images/game7.jpg',
        id: '7',
      },

      {
        title: 'Assasins Creed Odyssey',
        description: 'Assassins Creed Odyssey is an action role-playing video game developed by Ubisoft Quebec and published by Ubisoft. It is the eleventh major installment, and 21st overall, in the Assassins Creed series and the successor to 2017s Assassins Creed Origins',
        price: '29USD',
        genre:'rpg',
        age: '12',
        img: '/images/game8.jpg',
        id: '8',
      },

      {
        title: 'Nier: Automata',
        description: 'Nier: Automata is an action role-playing game in which players take the role of combat androids from the YoRHa units across an open world environment. ... As with the previous game, during navigation in some environments, the camera shifts from its standard third-person perspective to an overhead or side-scrolling view.',
        price: '29USD',
        genre:'rpg',
        age: '16',
        img: '/images/game9.jpg',
        id: '9',
      },

      {
        title: 'Dark Souls II',
        description: 'The story of Dark Souls II begins with a human who has become Undead, cursed to never die and doomed to eventually become a Hollow, a zombie-like being with no memories or purpose.',
        price: '39USD',
        genre:'souls',
        age: '18',
        img: '/images/game10.jpg',
        id: '10',
      },

      {
        title: 'Dark Souls',
        description: 'A spiritual successor to FromSoftwares Demons Souls, the game is the second instalment in the Souls series. Dark Souls takes place in the fictional kingdom of Lordran, where players assume the role of a cursed undead character who begins a pilgrimage to discover the fate of their kind.',
        price: '19USD',
        genre:'souls',
        age: '18',
        img: '/images/game11.jpg',
        id: '11',
      },

      {
        title: 'Tomb Raider',
        description: 'Tomb Raider is an action-adventure video game developed by Crystal Dynamics and published by Square Enix. It is the tenth title in the Tomb Raider franchise, and operates as a reboot that reconstructs the origins of Lara Croft.',
        price: '59USD',
        genre:'rpg',
        age: '16',
        img: '/images/game12.jpg',
        id: '12',
      },

      {
        title: 'Yakuza',
        description: 'Yakuza is an action-adventure video game developed and published by Sega for the PlayStation 2. It was released in 2005 in Japan and in September 2006 elsewhere. ... The game takes place in Kamurocho, a realistic recreation of Tokyos Kabukicho district.',
        price: '39USD',
        genre:'rpg',
        age: '18',
        img: '/images/game13.jpg',
        id: '13',
      },

      {
        title: 'The Last of Us',
        description: 'The Last of Us is a 2013 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. Players control Joel, a smuggler tasked with escorting a teenage girl, Ellie, across a post-apocalyptic United States. The Last of Us is played from a third-person perspective.',
        price: '29USD',
        genre:'rpg',
        age: '16',
        img: '/images/game14.jpg',
        id: '14',
      },

      {
        title: 'Resident Evil',
        description: 'Resident Evil is a survival horror video game developed and released by Capcom originally for the PlayStation in 1996, and is the first game in the Resident Evil series. ... Resident Evil was very well received critically and commercially, and is often credited for defining the survival horror genre.',
        price: '59USD',
        genre:'survival horror',
        age: '18',
        img: '/images/game15.jpg',
        id: '1',
      },

      {
        title: 'Demon souls',
        description: 'The Outer Worlds is a new single-player first-person sci-fi RPG from Obsidian Entertainment and Private Division. ... As you explore the furthest reaches of space and encounter various factions, all vying for power, the character you decide to become will determine how this player-driven story unfolds.',
        price: '29USD',
        genre:'rpg',
        age: '12',
        img: '/images/game16.jpg',
        id: '16',
      },

      {
        title: 'Far Cry',
        description: 'The Outer Worlds is a new single-player first-person sci-fi RPG from Obsidian Entertainment and Private Division. ... As you explore the furthest reaches of space and encounter various factions, all vying for power, the character you decide to become will determine how this player-driven story unfolds.',
        price: '39USD',
        genre:'open world',
        age: '16',
        img: '/images/game17.jpg',
        id: '17',
      },

      {
        title: 'Doom',
        description: 'Doom is a 1993 first-person shooter developed by id Software for MS-DOS. Players assume the role of a space marine, popularly known as "Doomguy", fighting his way through hordes of invading demons from Hell. ... Doom has been ported to numerous platforms.',
        price: '19USD',
        genre:'open world',
        age: '18',
        img: '/images/game18.jpg',
        id: '18',
      },

      {
        title: 'Persona 5',
        description: 'Persona 5 is the sixth game in the Persona series. It is a role-playing game developed by Atlus P-Studio. Persona 5 is a fantasy based on reality which follows a group of troubled high school students: the protagonist and a collection of compatriots he meets along the way.',
        price: '59USD',
        genre:'rpg',
        age: '12',
        img: '/images/game19.jpg',
        id: '19',
      },

      {
        title: 'Persona 4',
        description: 'Persona 4 follows a group of high school students dealing with a mysterious TV channel dedicated to distorting and exaggerating the truth of who they are and their identities. A string of bizarre murders related to the TV channel begins shaking their once peaceful town.',
        price: '29USD',
        genre:'rpg',
        age: '12',
        img: '/images/game20.jpg',
        id: '20',
      },

      
];
module.exports = products;