/**
 * This file contains saved block HTML from older versions.
 * These will be tested if they pass migration.
 * This will be built into the dist folder as `deprecation-tests.json`
 */

module.exports = [
	{
		block: 'Feature Grid',
		version: '1.17.3',
		description: 'Default block',
		html: `<!-- wp:ugb/feature-grid -->
		<div class="wp-block-ugb-feature-grid ugb-feature-grid ugb-feature-grid--columns-3"><div class="ugb-feature-grid__item"><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Title</h5><p class="ugb-feature-grid__description">Description for this block. You can use this space for describing your block.</p><div><a class="ugb-button ugb-button--align-center ugb-button--size-normal ugb-button--design-link" href=""><span class="">Button text</span></a></div></div></div><div class="ugb-feature-grid__item"><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Title</h5><p class="ugb-feature-grid__description">Description for this block. You can use this space for describing your block.</p><div><a class="ugb-button ugb-button--align-center ugb-button--size-normal ugb-button--design-link" href=""><span class="">Button text</span></a></div></div></div><div class="ugb-feature-grid__item"><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Title</h5><p class="ugb-feature-grid__description">Description for this block. You can use this space for describing your block.</p><div><a class="ugb-button ugb-button--align-center ugb-button--size-normal ugb-button--design-link" href=""><span class="">Button text</span></a></div></div></div></div>
		<!-- /wp:ugb/feature-grid -->`,
	},
	{
		block: 'Feature Grid',
		version: '1.17.3',
		description: 'Modified block',
		html: `<!-- wp:ugb/feature-grid {"imageID1":17,"imageID2":25,"imageID3":24,"imageUrl1":"http://localhost2:8888/wp-content/uploads/2019/08/premium-header-bg.jpg","imageUrl2":"http://localhost2:8888/wp-content/uploads/2019/08/groomsman3.jpg","imageUrl3":"http://localhost2:8888/wp-content/uploads/2019/08/Screen-Shot-2019-08-31-at-3.06.35-PM.jpg","imageAlt1":"","imageAlt2":"","imageAlt3":""} -->
		<div class="wp-block-ugb-feature-grid ugb-feature-grid ugb-feature-grid--columns-3"><div class="ugb-feature-grid__item"><div class="ugb-feature-grid__image"><img src="http://localhost2:8888/wp-content/uploads/2019/08/premium-header-bg.jpg" style="width:100%" alt=""/></div><div class="ugb-feature-grid__content"><p class="ugb-feature-grid__description">Description for this block. You can use this space for describing your block.1</p></div></div><div class="ugb-feature-grid__item"><div class="ugb-feature-grid__image"><img src="http://localhost2:8888/wp-content/uploads/2019/08/groomsman3.jpg" style="width:100%" alt="Title2"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Title2</h5><div><a class="ugb-button ugb-button--align-center ugb-button--size-normal ugb-button--design-link" href=""><span class="">Button 22text</span></a></div></div></div><div class="ugb-feature-grid__item"><div class="ugb-feature-grid__image"><img src="http://localhost2:8888/wp-content/uploads/2019/08/Screen-Shot-2019-08-31-at-3.06.35-PM.jpg" style="width:100%" alt="Title3"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Title3</h5><p class="ugb-feature-grid__description">Description for this block. You can use this space for describing your block.33</p></div></div></div>
		<!-- /wp:ugb/feature-grid -->`,
	},
	{
		block: 'Feature Grid',
		version: '1.17.3',
		description: 'Modified heavily block',
		html: `<!-- wp:ugb/feature-grid {"columns":2,"imageSize":53,"buttonColor":"#cf2e2e","buttonTextColor":"#fcb900","buttonSize":"large","buttonBorderRadius":50,"buttonDesign":"basic","buttonIcon":"fab-wordpress-simple","borderRadius":50,"shadow":8} -->
		<div class="wp-block-ugb-feature-grid ugb-feature-grid ugb-feature-grid--columns-2"><div class="ugb-feature-grid__item ugb--shadow-8" style="border-radius:50px"><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Title1111</h5><p class="ugb-feature-grid__description">Description for this block. You can use this space for describing your block.</p><div><a class="ugb-button ugb-button--align-center ugb-button--size-large ugb-button--has-icon" href="" style="border-radius:50px;background-color:#cf2e2e;color:#fcb900"><svg aria-hidden="true" data-icon="wordpress-simple" class="svg-inline--fa ugbfa-wordpress-simple fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512" style="color:#fcb900" value="fab-wordpress-simple"><path fill="currentColor" d="M256 8C119.3 8 8 119.2 8 256c0 136.7 111.3 248 248 248s248-111.3 248-248C504 119.2 392.7 8 256 8zM33 256c0-32.3 6.9-63 19.3-90.7l106.4 291.4C84.3 420.5 33 344.2 33 256zm223 223c-21.9 0-43-3.2-63-9.1l66.9-194.4 68.5 187.8c.5 1.1 1 2.1 1.6 3.1-23.1 8.1-48 12.6-74 12.6zm30.7-327.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-21.9 0-58.7-2.8-58.7-2.8-12-.7-13.4 17.7-1.4 18.4 0 0 11.4 1.4 23.4 2.1l34.7 95.2L200.6 393l-81.2-241.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-4.2 0-9.1-.1-14.4-.3C109.6 73 178.1 33 256 33c58 0 110.9 22.2 150.6 58.5-1-.1-1.9-.2-2.9-.2-21.9 0-37.4 19.1-37.4 39.6 0 18.4 10.6 33.9 21.9 52.3 8.5 14.8 18.4 33.9 18.4 61.5 0 19.1-7.3 41.2-17 72.1l-22.2 74.3-80.7-239.6zm81.4 297.2l68.1-196.9c12.7-31.8 17-57.2 17-79.9 0-8.2-.5-15.8-1.5-22.9 17.4 31.8 27.3 68.2 27.3 107 0 82.3-44.6 154.1-110.9 192.7z"></path></svg><span class="ugb-button--inner" style="color:#fcb900">Button text</span></a></div></div></div><div class="ugb-feature-grid__item ugb--shadow-8" style="border-radius:50px"><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Title22222</h5><p class="ugb-feature-grid__description">Description for this block. You can use this space for describing your block.</p><div><a class="ugb-button ugb-button--align-center ugb-button--size-large ugb-button--has-icon" href="http://google.com" style="border-radius:50px;background-color:#cf2e2e;color:#fcb900" target="_blank" rel="noopener noreferrer"><svg aria-hidden="true" data-icon="wordpress-simple" class="svg-inline--fa ugbfa-wordpress-simple fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512" style="color:#fcb900" value="fab-wordpress-simple"><path fill="currentColor" d="M256 8C119.3 8 8 119.2 8 256c0 136.7 111.3 248 248 248s248-111.3 248-248C504 119.2 392.7 8 256 8zM33 256c0-32.3 6.9-63 19.3-90.7l106.4 291.4C84.3 420.5 33 344.2 33 256zm223 223c-21.9 0-43-3.2-63-9.1l66.9-194.4 68.5 187.8c.5 1.1 1 2.1 1.6 3.1-23.1 8.1-48 12.6-74 12.6zm30.7-327.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-21.9 0-58.7-2.8-58.7-2.8-12-.7-13.4 17.7-1.4 18.4 0 0 11.4 1.4 23.4 2.1l34.7 95.2L200.6 393l-81.2-241.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-4.2 0-9.1-.1-14.4-.3C109.6 73 178.1 33 256 33c58 0 110.9 22.2 150.6 58.5-1-.1-1.9-.2-2.9-.2-21.9 0-37.4 19.1-37.4 39.6 0 18.4 10.6 33.9 21.9 52.3 8.5 14.8 18.4 33.9 18.4 61.5 0 19.1-7.3 41.2-17 72.1l-22.2 74.3-80.7-239.6zm81.4 297.2l68.1-196.9c12.7-31.8 17-57.2 17-79.9 0-8.2-.5-15.8-1.5-22.9 17.4 31.8 27.3 68.2 27.3 107 0 82.3-44.6 154.1-110.9 192.7z"></path></svg><span class="ugb-button--inner" style="color:#fcb900">Button text</span></a></div></div></div></div>
		<!-- /wp:ugb/feature-grid -->`,
	},
	{
		block: 'Feature Grid',
		version: '1.17.3',
		description: 'From Demo',
		html: `<!-- wp:ugb/feature-grid {"design":"plain","imageID1":2928,"imageID2":2929,"imageID3":2930,"imageUrl1":"https://wpstackable.com/wp-content/uploads/2019/04/Laptop-Feature-Grid.jpg","imageUrl2":"https://wpstackable.com/wp-content/uploads/2019/04/Table-Feature-Grid.jpg","imageUrl3":"https://wpstackable.com/wp-content/uploads/2019/04/Office-Feature-Grid.jpg","imageAlt1":"","imageAlt2":"","imageAlt3":"","borderRadius":8} -->
		<div class="wp-block-ugb-feature-grid ugb-feature-grid ugb-feature-grid--columns-3 ugb-feature-grid--design-plain"><div class="ugb-feature-grid__item"><div class="ugb-feature-grid__image"><img src="https://wpstackable.com/wp-content/uploads/2019/04/Laptop-Feature-Grid.jpg" style="width:100%" alt="Research"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Research</h5><p class="ugb-feature-grid__description">We help in doing the spade work to come up with the data required to be acquired to prepare the project.</p><div><a class="ugb-button ugb-button--align-center ugb-button--size-normal ugb-button--design-link" href=""><span class="">View details</span></a></div></div></div><div class="ugb-feature-grid__item"><div class="ugb-feature-grid__image"><img src="https://wpstackable.com/wp-content/uploads/2019/04/Table-Feature-Grid.jpg" style="width:100%" alt="Documentation"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Documentation</h5><p class="ugb-feature-grid__description">We come up with the base project documents and ensure that all the requirements are included in the contract.</p><div><a class="ugb-button ugb-button--align-center ugb-button--size-normal ugb-button--design-link" href=""><span class="">View details</span></a></div></div></div><div class="ugb-feature-grid__item"><div class="ugb-feature-grid__image"><img src="https://wpstackable.com/wp-content/uploads/2019/04/Office-Feature-Grid.jpg" style="width:100%" alt="Presentation"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Presentation</h5><p class="ugb-feature-grid__description">We present the project package to all stakeholders to encourage support and complete project delivery.</p><div><a class="ugb-button ugb-button--align-center ugb-button--size-normal ugb-button--design-link" href=""><span class="">View details</span></a></div></div></div></div>
		<!-- /wp:ugb/feature-grid -->`,
	},
	{
		block: 'Feature Grid',
		version: '1.17.3',
		description: 'From Demo',
		html: `<!-- wp:ugb/feature-grid {"imageSize":50,"imageID1":2931,"imageID2":2932,"imageID3":2933,"imageUrl1":"https://wpstackable.com/wp-content/uploads/2019/04/Waffles-Feature-Grid.png","imageUrl2":"https://wpstackable.com/wp-content/uploads/2019/04/Cupcake-Feature-Grid.png","imageUrl3":"https://wpstackable.com/wp-content/uploads/2019/04/Cake-Feature-Grid.png","imageAlt1":"","imageAlt2":"","imageAlt3":"","buttonColor":"#7bdcb5","buttonSize":"tiny","buttonBorderRadius":50,"buttonDesign":"basic"} -->
		<div class="wp-block-ugb-feature-grid ugb-feature-grid ugb-feature-grid--columns-3"><div class="ugb-feature-grid__item"><div class="ugb-feature-grid__image"><img src="https://wpstackable.com/wp-content/uploads/2019/04/Waffles-Feature-Grid.png" style="width:50%" alt="Waffles"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Waffles</h5><div><a class="ugb-button ugb-button--align-center ugb-button--size-tiny" href="" style="border-radius:50px;background-color:#7bdcb5"><span class="ugb-button--inner">Order</span></a></div></div></div><div class="ugb-feature-grid__item"><div class="ugb-feature-grid__image"><img src="https://wpstackable.com/wp-content/uploads/2019/04/Cupcake-Feature-Grid.png" style="width:50%" alt="Cupcakes"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Cupcakes</h5><div><a class="ugb-button ugb-button--align-center ugb-button--size-tiny" href="" style="border-radius:50px;background-color:#7bdcb5"><span class="ugb-button--inner">Order</span></a></div></div></div><div class="ugb-feature-grid__item"><div class="ugb-feature-grid__image"><img src="https://wpstackable.com/wp-content/uploads/2019/04/Cake-Feature-Grid.png" style="width:50%" alt="Chocolate Mousse"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Chocolate Mousse</h5><div><a class="ugb-button ugb-button--align-center ugb-button--size-tiny" href="" style="border-radius:50px;background-color:#7bdcb5"><span class="ugb-button--inner">Order</span></a></div></div></div></div>
		<!-- /wp:ugb/feature-grid -->`,
	},
	{
		block: 'Feature Grid',
		version: '1.17.3',
		description: 'From Demo',
		html: `<!-- wp:ugb/feature-grid {"imageSize":50,"imageID1":2937,"imageID2":2940,"imageID3":2941,"imageUrl1":"https://wpstackable.com/wp-content/uploads/2019/04/Chocolate-Feature-Grid.png","imageUrl2":"https://wpstackable.com/wp-content/uploads/2019/04/Cake-Roll-Feature-Grid-02.png","imageUrl3":"https://wpstackable.com/wp-content/uploads/2019/04/Donut-Feature-Grid.png","imageAlt1":"","imageAlt2":"","imageAlt3":"","buttonColor":"#7bdcb5","buttonSize":"tiny","buttonBorderRadius":50,"buttonDesign":"basic"} -->
		<div class="wp-block-ugb-feature-grid ugb-feature-grid ugb-feature-grid--columns-3"><div class="ugb-feature-grid__item"><div class="ugb-feature-grid__image"><img src="https://wpstackable.com/wp-content/uploads/2019/04/Chocolate-Feature-Grid.png" style="width:50%" alt="Chocolates"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Chocolates</h5><div><a class="ugb-button ugb-button--align-center ugb-button--size-tiny" href="" style="border-radius:50px;background-color:#7bdcb5"><span class="ugb-button--inner">Order</span></a></div></div></div><div class="ugb-feature-grid__item"><div class="ugb-feature-grid__image"><img src="https://wpstackable.com/wp-content/uploads/2019/04/Cake-Roll-Feature-Grid-02.png" style="width:50%" alt="Cake Roll"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Cake Roll</h5><div><a class="ugb-button ugb-button--align-center ugb-button--size-tiny" href="" style="border-radius:50px;background-color:#7bdcb5"><span class="ugb-button--inner">Order</span></a></div></div></div><div class="ugb-feature-grid__item"><div class="ugb-feature-grid__image"><img src="https://wpstackable.com/wp-content/uploads/2019/04/Donut-Feature-Grid.png" style="width:50%" alt="Doughnuts"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Doughnuts</h5><div><a class="ugb-button ugb-button--align-center ugb-button--size-tiny" href="" style="border-radius:50px;background-color:#7bdcb5"><span class="ugb-button--inner">Order</span></a></div></div></div></div>
		<!-- /wp:ugb/feature-grid -->`,
	},
	{
		block: 'Feature Grid',
		version: '1.17.3',
		description: 'From Demo',
		html: `<!-- wp:ugb/feature-grid {"columns":2,"borderRadius":0} -->
		<div class="wp-block-ugb-feature-grid ugb-feature-grid ugb-feature-grid--columns-2"><div class="ugb-feature-grid__item" style="border-radius:0"><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Goldfish</h5><p class="ugb-feature-grid__description">A fish in the family of Cyprinidae<br><br>The most commonly kept aquarium fish worldwide<br></p><div><a class="ugb-button ugb-button--align-center ugb-button--size-normal ugb-button--design-link" href=""><span class="">Learn more</span></a></div></div></div><div class="ugb-feature-grid__item" style="border-radius:0"><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Guppy</h5><p class="ugb-feature-grid__description">AKA millionfish or rainbowfish<br><br>One of the most widely distributed tropical fish<br></p><div><a class="ugb-button ugb-button--align-center ugb-button--size-normal ugb-button--design-link" href=""><span class="">Learn more</span></a></div></div></div></div>
		<!-- /wp:ugb/feature-grid -->`,
	},
	{
		block: 'Feature Grid',
		version: '1.17.3',
		description: 'From Demo',
		html: `<!-- wp:ugb/feature-grid {"imageSize":50,"imageID1":2944,"imageID2":2943,"imageID3":2942,"imageUrl1":"https://wpstackable.com/wp-content/uploads/2019/04/Teach-Feature-Grid.png","imageUrl2":"https://wpstackable.com/wp-content/uploads/2019/04/Participate.png","imageUrl3":"https://wpstackable.com/wp-content/uploads/2019/04/Collaborate-Feature.png","imageAlt1":"","imageAlt2":"","imageAlt3":"","buttonColor":"#0072bc","buttonSize":"small","buttonBorderRadius":1,"buttonDesign":"ghost","buttonIcon":"fas-asterisk","borderRadius":50,"shadow":9} -->
		<div class="wp-block-ugb-feature-grid ugb-feature-grid ugb-feature-grid--columns-3"><div class="ugb-feature-grid__item ugb--shadow-9" style="border-radius:50px"><div class="ugb-feature-grid__image"><img src="https://wpstackable.com/wp-content/uploads/2019/04/Teach-Feature-Grid.png" style="width:50%" alt="Teach"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Teach</h5><div><a class="ugb-button ugb-button--align-center ugb-button--size-small ugb-button--design-ghost ugb-button--has-icon" href="" style="border-radius:1px;border-color:#0072bc;color:#0072bc"><svg aria-hidden="true" data-icon="asterisk" class="svg-inline--fa ugbfa-asterisk fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512" style="color:#0072bc" value="fas-asterisk"><path fill="currentColor" d="M478.21 334.093L336 256l142.21-78.093c11.795-6.477 15.961-21.384 9.232-33.037l-19.48-33.741c-6.728-11.653-21.72-15.499-33.227-8.523L296 186.718l3.475-162.204C299.763 11.061 288.937 0 275.48 0h-38.96c-13.456 0-24.283 11.061-23.994 24.514L216 186.718 77.265 102.607c-11.506-6.976-26.499-3.13-33.227 8.523l-19.48 33.741c-6.728 11.653-2.562 26.56 9.233 33.037L176 256 33.79 334.093c-11.795 6.477-15.961 21.384-9.232 33.037l19.48 33.741c6.728 11.653 21.721 15.499 33.227 8.523L216 325.282l-3.475 162.204C212.237 500.939 223.064 512 236.52 512h38.961c13.456 0 24.283-11.061 23.995-24.514L296 325.282l138.735 84.111c11.506 6.976 26.499 3.13 33.227-8.523l19.48-33.741c6.728-11.653 2.563-26.559-9.232-33.036z"></path></svg><span class="ugb-button--inner" style="color:#0072bc">Join now</span></a></div></div></div><div class="ugb-feature-grid__item ugb--shadow-9" style="border-radius:50px"><div class="ugb-feature-grid__image"><img src="https://wpstackable.com/wp-content/uploads/2019/04/Participate.png" style="width:50%" alt="Participate"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Participate</h5><div><a class="ugb-button ugb-button--align-center ugb-button--size-small ugb-button--design-ghost ugb-button--has-icon" href="" style="border-radius:1px;border-color:#0072bc;color:#0072bc"><svg aria-hidden="true" data-icon="asterisk" class="svg-inline--fa ugbfa-asterisk fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512" style="color:#0072bc" value="fas-asterisk"><path fill="currentColor" d="M478.21 334.093L336 256l142.21-78.093c11.795-6.477 15.961-21.384 9.232-33.037l-19.48-33.741c-6.728-11.653-21.72-15.499-33.227-8.523L296 186.718l3.475-162.204C299.763 11.061 288.937 0 275.48 0h-38.96c-13.456 0-24.283 11.061-23.994 24.514L216 186.718 77.265 102.607c-11.506-6.976-26.499-3.13-33.227 8.523l-19.48 33.741c-6.728 11.653-2.562 26.56 9.233 33.037L176 256 33.79 334.093c-11.795 6.477-15.961 21.384-9.232 33.037l19.48 33.741c6.728 11.653 21.721 15.499 33.227 8.523L216 325.282l-3.475 162.204C212.237 500.939 223.064 512 236.52 512h38.961c13.456 0 24.283-11.061 23.995-24.514L296 325.282l138.735 84.111c11.506 6.976 26.499 3.13 33.227-8.523l19.48-33.741c6.728-11.653 2.563-26.559-9.232-33.036z"></path></svg><span class="ugb-button--inner" style="color:#0072bc">Join now</span></a></div></div></div><div class="ugb-feature-grid__item ugb--shadow-9" style="border-radius:50px"><div class="ugb-feature-grid__image"><img src="https://wpstackable.com/wp-content/uploads/2019/04/Collaborate-Feature.png" style="width:50%" alt="Collaborate"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Collaborate</h5><div><a class="ugb-button ugb-button--align-center ugb-button--size-small ugb-button--design-ghost ugb-button--has-icon" href="" style="border-radius:1px;border-color:#0072bc;color:#0072bc"><svg aria-hidden="true" data-icon="asterisk" class="svg-inline--fa ugbfa-asterisk fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512" style="color:#0072bc" value="fas-asterisk"><path fill="currentColor" d="M478.21 334.093L336 256l142.21-78.093c11.795-6.477 15.961-21.384 9.232-33.037l-19.48-33.741c-6.728-11.653-21.72-15.499-33.227-8.523L296 186.718l3.475-162.204C299.763 11.061 288.937 0 275.48 0h-38.96c-13.456 0-24.283 11.061-23.994 24.514L216 186.718 77.265 102.607c-11.506-6.976-26.499-3.13-33.227 8.523l-19.48 33.741c-6.728 11.653-2.562 26.56 9.233 33.037L176 256 33.79 334.093c-11.795 6.477-15.961 21.384-9.232 33.037l19.48 33.741c6.728 11.653 21.721 15.499 33.227 8.523L216 325.282l-3.475 162.204C212.237 500.939 223.064 512 236.52 512h38.961c13.456 0 24.283-11.061 23.995-24.514L296 325.282l138.735 84.111c11.506 6.976 26.499 3.13 33.227-8.523l19.48-33.741c6.728-11.653 2.563-26.559-9.232-33.036z"></path></svg><span class="ugb-button--inner" style="color:#0072bc">Join now</span></a></div></div></div></div>
		<!-- /wp:ugb/feature-grid -->`,
	},
	{
		block: 'Feature Grid',
		version: '1.17.3',
		description: 'Custom CSS',
		plan: 'Premium',
		html: `<!-- wp:ugb/feature-grid {"customCSSUniqueID":"ugb-0b29175","customCSS":"/* Feature Grid container */\n.ugb-feature-grid {\n\t\n}\n\n/* Feature Grid item */\n.ugb-feature-grid .ugb-feature-grid__item {\n\tbackground: red;\n}\n\n/* Feature Grid content wrapper */\n.ugb-feature-grid .ugb-feature-grid__content {\n\t\n}\n\n/* Feature Grid image wrapper */\n.ugb-feature-grid .ugb-feature-grid__image {\n\t\n}\n\n/* Feature Grid image */\n.ugb-feature-grid .ugb-feature-grid__image img {\n\t\n}\n\n/* Feature Grid title */\n.ugb-feature-grid .ugb-feature-grid__title {\n\t\n}\n\n/* Feature Grid description */\n.ugb-feature-grid .ugb-feature-grid__description {\n\t\n}\n\n/* Feature Grid button */\n.ugb-feature-grid .ugb-button {\n\t\n}\n\n/* Feature Grid button text */\n.ugb-feature-grid .ugb-button span {\n\t\n}","customCSSCompiled":".ugb-0b29175.ugb-feature-grid .ugb-feature-grid__item{background:red !important}"} -->
		<div class="wp-block-ugb-feature-grid ugb-feature-grid ugb-feature-grid--columns-3 ugb-0b29175"><style>.ugb-0b29175.ugb-feature-grid .ugb-feature-grid__item{background:red !important}</style><div class="ugb-feature-grid__item"><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Title</h5><p class="ugb-feature-grid__description">Description for this block. You can use this space for describing your block.</p><div><a class="ugb-button ugb-button--align-center ugb-button--size-normal ugb-button--design-link" href=""><span class="">Button text</span></a></div></div></div><div class="ugb-feature-grid__item"><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Title</h5><p class="ugb-feature-grid__description">Description for this block. You can use this space for describing your block.</p><div><a class="ugb-button ugb-button--align-center ugb-button--size-normal ugb-button--design-link" href=""><span class="">Button text</span></a></div></div></div><div class="ugb-feature-grid__item"><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Title</h5><p class="ugb-feature-grid__description">Description for this block. You can use this space for describing your block.</p><div><a class="ugb-button ugb-button--align-center ugb-button--size-normal ugb-button--design-link" href=""><span class="">Button text</span></a></div></div></div></div>
		<!-- /wp:ugb/feature-grid -->`,
	},
	{
		block: 'Feature Grid',
		version: '1.17.3',
		description: 'From Premium Demo',
		plan: 'Premium',
		html: `<!-- wp:ugb/feature-grid {"design":"large-mid","imageSize":99,"imageID1":524,"imageID2":525,"imageID3":523,"imageUrl1":"https://demo.wpstackable.com/wp-content/uploads/2019/02/Tiger-Feature-Grid.jpg","imageUrl2":"https://demo.wpstackable.com/wp-content/uploads/2019/02/Koala-Feature-Grid.jpg","imageUrl3":"https://demo.wpstackable.com/wp-content/uploads/2019/02/Zebra-Feature-Grid.jpg","imageAlt1":"","imageAlt2":"","imageAlt3":"","shadow":8,"hoverEffect":"lift-shadow-staggered"} -->
		<div class="wp-block-ugb-feature-grid ugb-feature-grid ugb-feature-grid--columns-3 ugb-feature-grid--design-large-mid"><div class="ugb-feature-grid__item ugb--shadow-0 ugb--hover-lift-shadow-staggered"><div class="ugb-feature-grid__image"><img src="https://demo.wpstackable.com/wp-content/uploads/2019/02/Tiger-Feature-Grid.jpg" style="width:99%" alt="Feature 1"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Feature 1</h5><p class="ugb-feature-grid__description">Use this block to display your growing portfolio.</p><div><a class="ugb-button ugb-button--align-center ugb-button--size-normal ugb-button--design-link" href=""><span class="">Check it out</span></a></div></div></div><div class="ugb-feature-grid__item ugb--shadow-8 ugb--hover-lift-shadow-staggered"><div class="ugb-feature-grid__image"><img src="https://demo.wpstackable.com/wp-content/uploads/2019/02/Koala-Feature-Grid.jpg" style="width:99%" alt="Feature 2"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Feature 2</h5><p class="ugb-feature-grid__description">Use this block to display your growing portfolio.</p><div><a class="ugb-button ugb-button--align-center ugb-button--size-normal ugb-button--design-link" href=""><span class="">Check it out</span></a></div></div></div><div class="ugb-feature-grid__item ugb--shadow-0 ugb--hover-lift-shadow-staggered"><div class="ugb-feature-grid__image"><img src="https://demo.wpstackable.com/wp-content/uploads/2019/02/Zebra-Feature-Grid.jpg" style="width:99%" alt="Feature 3"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Feature 3</h5><p class="ugb-feature-grid__description">Use this block to display your growing portfolio.</p><div><a class="ugb-button ugb-button--align-center ugb-button--size-normal ugb-button--design-link" href=""><span class="">Check it out</span></a></div></div></div></div>
		<!-- /wp:ugb/feature-grid -->`,
	},
	{
		block: 'Feature Grid',
		version: '1.17.3',
		description: 'From Premium Demo',
		plan: 'Premium',
		html: `<!-- wp:ugb/feature-grid {"design":"zigzag","columns":2,"imageSize":50,"imageID1":2944,"imageID2":2943,"imageID3":2942,"imageUrl1":"https://wpstackable.com/wp-content/uploads/2019/04/Teach-Feature-Grid.png","imageUrl2":"https://wpstackable.com/wp-content/uploads/2019/04/Participate.png","imageUrl3":"https://wpstackable.com/wp-content/uploads/2019/04/Collaborate-Feature.png","imageAlt1":"","imageAlt2":"","imageAlt3":"","buttonColor":"#0072bc","buttonSize":"small","buttonBorderRadius":1,"buttonDesign":"ghost","buttonIcon":"fas-asterisk","borderRadius":50,"shadow":9,"hoverEffect":"lower"} -->
		<div class="wp-block-ugb-feature-grid ugb-feature-grid ugb-feature-grid--columns-2 ugb-feature-grid--design-zigzag"><div class="ugb-feature-grid__item ugb--shadow-9 ugb--hover-lower" style="border-radius:50px"><div class="ugb-feature-grid__image"><img src="https://wpstackable.com/wp-content/uploads/2019/04/Teach-Feature-Grid.png" style="width:50%" alt="Teach"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Teach</h5><div><a class="ugb-button ugb-button--align-center ugb-button--size-small ugb-button--design-ghost ugb-button--has-icon" href="" style="border-radius:1px;border-color:#0072bc;color:#0072bc"><svg aria-hidden="true" data-icon="asterisk" class="svg-inline--fa ugbfa-asterisk fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512" style="color:#0072bc" value="fas-asterisk"><path fill="currentColor" d="M478.21 334.093L336 256l142.21-78.093c11.795-6.477 15.961-21.384 9.232-33.037l-19.48-33.741c-6.728-11.653-21.72-15.499-33.227-8.523L296 186.718l3.475-162.204C299.763 11.061 288.937 0 275.48 0h-38.96c-13.456 0-24.283 11.061-23.994 24.514L216 186.718 77.265 102.607c-11.506-6.976-26.499-3.13-33.227 8.523l-19.48 33.741c-6.728 11.653-2.562 26.56 9.233 33.037L176 256 33.79 334.093c-11.795 6.477-15.961 21.384-9.232 33.037l19.48 33.741c6.728 11.653 21.721 15.499 33.227 8.523L216 325.282l-3.475 162.204C212.237 500.939 223.064 512 236.52 512h38.961c13.456 0 24.283-11.061 23.995-24.514L296 325.282l138.735 84.111c11.506 6.976 26.499 3.13 33.227-8.523l19.48-33.741c6.728-11.653 2.563-26.559-9.232-33.036z"></path></svg><span class="ugb-button--inner" style="color:#0072bc">Join now</span></a></div></div></div><div class="ugb-feature-grid__item ugb--shadow-9 ugb--hover-lower" style="border-radius:50px"><div class="ugb-feature-grid__image"><img src="https://wpstackable.com/wp-content/uploads/2019/04/Participate.png" style="width:50%" alt="Participate"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Participate</h5><div><a class="ugb-button ugb-button--align-center ugb-button--size-small ugb-button--design-ghost ugb-button--has-icon" href="" style="border-radius:1px;border-color:#0072bc;color:#0072bc"><svg aria-hidden="true" data-icon="asterisk" class="svg-inline--fa ugbfa-asterisk fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512" style="color:#0072bc" value="fas-asterisk"><path fill="currentColor" d="M478.21 334.093L336 256l142.21-78.093c11.795-6.477 15.961-21.384 9.232-33.037l-19.48-33.741c-6.728-11.653-21.72-15.499-33.227-8.523L296 186.718l3.475-162.204C299.763 11.061 288.937 0 275.48 0h-38.96c-13.456 0-24.283 11.061-23.994 24.514L216 186.718 77.265 102.607c-11.506-6.976-26.499-3.13-33.227 8.523l-19.48 33.741c-6.728 11.653-2.562 26.56 9.233 33.037L176 256 33.79 334.093c-11.795 6.477-15.961 21.384-9.232 33.037l19.48 33.741c6.728 11.653 21.721 15.499 33.227 8.523L216 325.282l-3.475 162.204C212.237 500.939 223.064 512 236.52 512h38.961c13.456 0 24.283-11.061 23.995-24.514L296 325.282l138.735 84.111c11.506 6.976 26.499 3.13 33.227-8.523l19.48-33.741c6.728-11.653 2.563-26.559-9.232-33.036z"></path></svg><span class="ugb-button--inner" style="color:#0072bc">Join now</span></a></div></div></div></div>
		<!-- /wp:ugb/feature-grid -->`,
	},
	{
		block: 'Feature Grid',
		version: '1.17.3',
		description: 'From Premium Demo',
		plan: 'Premium',
		html: `<!-- wp:ugb/feature-grid {"design":"zigzag","imageSize":85,"imageID1":537,"imageID2":536,"imageID3":535,"imageUrl1":"https://demo.wpstackable.com/wp-content/uploads/2019/02/Waffles-Feature-Grid-02.png","imageUrl2":"https://demo.wpstackable.com/wp-content/uploads/2019/02/Chocolate-Feature-Grid-02.png","imageUrl3":"https://demo.wpstackable.com/wp-content/uploads/2019/02/Doughnut-Feature-Grid-02.png","imageAlt1":"","imageAlt2":"","imageAlt3":"","buttonColor":"#7bdcb5","buttonSize":"tiny","buttonBorderRadius":50,"buttonDesign":"basic","hoverEffect":"scale-shadow"} -->
		<div class="wp-block-ugb-feature-grid ugb-feature-grid ugb-feature-grid--columns-3 ugb-feature-grid--design-zigzag"><div class="ugb-feature-grid__item ugb--hover-scale-shadow"><div class="ugb-feature-grid__image"><img src="https://demo.wpstackable.com/wp-content/uploads/2019/02/Waffles-Feature-Grid-02.png" style="width:85%" alt="Waffles"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Waffles</h5><div><a class="ugb-button ugb-button--align-center ugb-button--size-tiny" href="" style="border-radius:50px;background-color:#7bdcb5"><span class="ugb-button--inner">Order</span></a></div></div></div><div class="ugb-feature-grid__item ugb--hover-scale-shadow"><div class="ugb-feature-grid__image"><img src="https://demo.wpstackable.com/wp-content/uploads/2019/02/Chocolate-Feature-Grid-02.png" style="width:85%" alt="Chocolates"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Chocolates</h5><div><a class="ugb-button ugb-button--align-center ugb-button--size-tiny" href="" style="border-radius:50px;background-color:#7bdcb5"><span class="ugb-button--inner">Order</span></a></div></div></div><div class="ugb-feature-grid__item ugb--hover-scale-shadow"><div class="ugb-feature-grid__image"><img src="https://demo.wpstackable.com/wp-content/uploads/2019/02/Doughnut-Feature-Grid-02.png" style="width:85%" alt="Doughnuts"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Doughnuts</h5><div><a class="ugb-button ugb-button--align-center ugb-button--size-tiny" href="" style="border-radius:50px;background-color:#7bdcb5"><span class="ugb-button--inner">Order</span></a></div></div></div></div>
		<!-- /wp:ugb/feature-grid -->`,
	},
	{
		block: 'Feature Grid',
		version: '1.17.3',
		description: 'From Premium Demo',
		plan: 'Premium',
		html: `<!-- wp:ugb/feature-grid {"design":"zigzag","imageSize":85,"imageID1":538,"imageID2":539,"imageID3":540,"imageUrl1":"https://demo.wpstackable.com/wp-content/uploads/2019/02/Croissant-Feature-Grid-02.png","imageUrl2":"https://demo.wpstackable.com/wp-content/uploads/2019/02/Macarons-Feature-Grid-02.png","imageUrl3":"https://demo.wpstackable.com/wp-content/uploads/2019/02/Cupcake-Feature-Grid-02.png","imageAlt1":"","imageAlt2":"","imageAlt3":"","buttonColor":"#7bdcb5","buttonSize":"tiny","buttonBorderRadius":50,"buttonDesign":"basic","hoverEffect":"scale-shadow"} -->
		<div class="wp-block-ugb-feature-grid ugb-feature-grid ugb-feature-grid--columns-3 ugb-feature-grid--design-zigzag"><div class="ugb-feature-grid__item ugb--hover-scale-shadow"><div class="ugb-feature-grid__image"><img src="https://demo.wpstackable.com/wp-content/uploads/2019/02/Croissant-Feature-Grid-02.png" style="width:85%" alt="Croissant"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Croissant</h5><div><a class="ugb-button ugb-button--align-center ugb-button--size-tiny" href="" style="border-radius:50px;background-color:#7bdcb5"><span class="ugb-button--inner">Order</span></a></div></div></div><div class="ugb-feature-grid__item ugb--hover-scale-shadow"><div class="ugb-feature-grid__image"><img src="https://demo.wpstackable.com/wp-content/uploads/2019/02/Macarons-Feature-Grid-02.png" style="width:85%" alt="Macarons"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Macarons</h5><div><a class="ugb-button ugb-button--align-center ugb-button--size-tiny" href="" style="border-radius:50px;background-color:#7bdcb5"><span class="ugb-button--inner">Order</span></a></div></div></div><div class="ugb-feature-grid__item ugb--hover-scale-shadow"><div class="ugb-feature-grid__image"><img src="https://demo.wpstackable.com/wp-content/uploads/2019/02/Cupcake-Feature-Grid-02.png" style="width:85%" alt="Cupcakes"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Cupcakes</h5><div><a class="ugb-button ugb-button--align-center ugb-button--size-tiny" href="" style="border-radius:50px;background-color:#7bdcb5"><span class="ugb-button--inner">Order</span></a></div></div></div></div>
		<!-- /wp:ugb/feature-grid -->`,
	},
	{
		block: 'Feature Grid',
		version: '1.17.3',
		description: 'From Premium Demo',
		plan: 'Premium',
		html: `<!-- wp:ugb/feature-grid {"design":"horizontal","columns":2,"imageID1":542,"imageID2":543,"imageID3":2930,"imageUrl1":"https://demo.wpstackable.com/wp-content/uploads/2019/02/Office-02-Feature-Grid.jpg","imageUrl2":"https://demo.wpstackable.com/wp-content/uploads/2019/02/Office-01-Feature-Grid.jpg","imageUrl3":"https://wpstackable.com/wp-content/uploads/2019/04/Office-Feature-Grid.jpg","imageAlt1":"","imageAlt2":"","imageAlt3":"","borderRadius":8,"shadow":4,"hoverEffect":"lift"} -->
		<div class="wp-block-ugb-feature-grid ugb-feature-grid ugb-feature-grid--columns-2 ugb-feature-grid--design-horizontal"><div class="ugb-feature-grid__item ugb--shadow-4 ugb--hover-lift" style="border-radius:8px"><div class="ugb-feature-grid__image"><img src="https://demo.wpstackable.com/wp-content/uploads/2019/02/Office-02-Feature-Grid.jpg" alt="Research"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Research</h5><p class="ugb-feature-grid__description">We do the spade work to get the data to be acquired for the project.</p><div><a class="ugb-button ugb-button--align-center ugb-button--size-normal ugb-button--design-link" href=""><span class="">View details</span></a></div></div></div><div class="ugb-feature-grid__item ugb--shadow-4 ugb--hover-lift" style="border-radius:8px"><div class="ugb-feature-grid__image"><img src="https://demo.wpstackable.com/wp-content/uploads/2019/02/Office-01-Feature-Grid.jpg" alt="Documentation"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Documentation</h5><p class="ugb-feature-grid__description">We come up with project documents and ensure that the requirements are in the contract.<br></p><div><a class="ugb-button ugb-button--align-center ugb-button--size-normal ugb-button--design-link" href=""><span class="">View details</span></a></div></div></div></div>
		<!-- /wp:ugb/feature-grid -->`,
	},
	{
		block: 'Feature Grid',
		version: '1.17.3',
		description: 'From Premium Demo',
		plan: 'Premium',
		html: `<!-- wp:ugb/feature-grid {"design":"horizontal","columns":1,"imageID1":541,"imageID2":2929,"imageID3":2930,"imageUrl1":"https://demo.wpstackable.com/wp-content/uploads/2019/02/Office-03-Feature-Grid.jpg","imageUrl2":"https://wpstackable.com/wp-content/uploads/2019/04/Table-Feature-Grid.jpg","imageUrl3":"https://wpstackable.com/wp-content/uploads/2019/04/Office-Feature-Grid.jpg","imageAlt1":"","imageAlt2":"","imageAlt3":"","borderRadius":8,"shadow":5,"hoverEffect":"lift"} -->
		<div class="wp-block-ugb-feature-grid ugb-feature-grid ugb-feature-grid--columns-1 ugb-feature-grid--design-horizontal"><div class="ugb-feature-grid__item ugb--shadow-5 ugb--hover-lift" style="border-radius:8px"><div class="ugb-feature-grid__image"><img src="https://demo.wpstackable.com/wp-content/uploads/2019/02/Office-03-Feature-Grid.jpg" alt="Presentation"/></div><div class="ugb-feature-grid__content"><h5 class="ugb-feature-grid__title">Presentation</h5><p class="ugb-feature-grid__description">We help in doing the spade work to come up with the data required to be acquired to prepare the project.</p><div><a class="ugb-button ugb-button--align-center ugb-button--size-normal ugb-button--design-link" href=""><span class="">View details</span></a></div></div></div></div>
		<!-- /wp:ugb/feature-grid -->`,
	},
]