# SovaLineups (Valorant website)







This site is made as a personal project, as well as help others learn important lineups in RiotGame's fps shooter, Valorant. It's a site build with React, and uses Context API for state management. Here you'll find updates to date lineups across all the current maps. 





[![Netlify Status](https://api.netlify.com/api/v1/badges/3136dde7-1155-401a-83a5-19da2c14294f/deploy-status)](https://app.netlify.com/sites/sovalineups/deploys)

### Demo







[Live Site](https://sovalineups.com/)



![alt Example](https://i.imgur.com/KFe5cFW.png)



### General Use







Simply pick a map from the bottom or navigation bar on the top. Pick a line up from the list on the left. Because of React Router, refreshing the page outside of the home screen won't work. 







### Future plans







Many future plans, the first one would be QOL improvements. I also want to work on refactoring some code and cleaning it up a bit. Then add more stuff related to content. Whether it be more maps, or adding shock darts and ultimate wall bangs.







### Takeaway







This project was super fun for me, not only because I'm already passionate about the game, but because I learned much from this. Both from a design perspective, as well as learning a lot on how Riot makes their websites. Many hours were spent under the hood of Riot's own [website](https://playvalorant.com/en-us/), and I was always amazed on how efficient and clean their structure was. I'm glad that all the content froms [here](https://github.com/brandonjoe/ValorantApp/tree/master/src/Data), an array of Javascript objects. So updating and removing becomes really easy. 

Here's an example of how simple the syntax is for adding, removing or editing: 

```javascript

{

		id: 10,

		title: 'Grass from C link',

		isActive: false,

		difficulty: 'Medium',

		side: 'Defending',

		essential: true,

		video: "430529895",

		bounces: 1,

		charges: 2,

		image1: "https://i.imgur.com/KykLPwu.png",

		image2: "https://i.imgur.com/v8Xttiw.png",

		map: "https://i.imgur.com/OwavSsG.jpg",

		info:

			'Very useful dart for catching the garage pushers off guard, while also holding courtyard for your mid player. It reveals a lot of grass, while also potentially revealing into their spawn. Move along the back wall until you see a small opening where you see the wall at mid. Aim very slightly above the shadow. Careful for the tiny red on the map, but this arrow lands so fast, it should get a pulse off before they move. '

	}



```

I think having a very simple way to edit the site is important to keeping it updated, and I'm really glad it's structured this way. 





### Inspiration



The majority of the inspiration came from [playValorant.com](https://playvalorant.com/en-us/), as well as [Dmitry Kiiashco](https://dribbble.com/UnEpicKid). I took a few media assets from him to help with the design. A lot of inspiration for the content/darts inside the site came from u/KhigenNA, big thanks to them. Also, big thanks to blitz.gg for the images of the map!



### Tech 







```



HTML/CSS, Javascript/React



```

