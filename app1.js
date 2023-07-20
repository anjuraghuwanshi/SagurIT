function splitScroll(){
	const controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
		duration: '100%',	
		triggerElement: '.b1',
		triggerHook: 0,

	})
	.setPin('.b1')
	.addTo(controller);
}

splitScroll();
