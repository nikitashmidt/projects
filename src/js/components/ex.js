class GraphAccordion {
	constructor(selector, options) {
		let defaultOptions = {
			isOpen: () => {},
			isClose: () => {},
			speed: 300
		};
		this.options = Object.assign(defaultOptions, options);
		this.accordion = document.querySelector(selector);
		this.control = this.accordion.querySelector('.accordion__control');
		this.content = this.accordion.querySelector('.accordion__content');
		this.event();
	}
	event() {
		if (this.accordion) {
			this.accordion.addEventListener('click', (e) => {
				this.accordion.classList.toggle('open');
				if (this.accordion.classList.contains('open')) {
					this.open();
				} else {
					this.close();
				}
			});
		}
	}
	open() {
		this.accordion.style.setProperty('--accordion-time', `${this.options.speed / 1000}s`);
		this.accordion.classList.add('is-open');
		this.control.setAttribute('aria-expanded', true);
		this.content.setAttribute('aria-hidden', false);
		this.content.style.maxHeight = this.content.scrollHeight + 'px';
		this.options.isOpen(this);
	}
	close() {
		this.accordion.classList.remove('is-open');
		this.control.setAttribute('aria-expanded', false);
		this.content.setAttribute('aria-hidden', true);
		this.content.style.maxHeight = null;
		this.options.isClose(this);
	}
}


if (document.querySelector('.accordion')) {

  const accordion1 = new GraphAccordion('.accordion-1', {
    speed: 500
  });
  const accordion2 = new GraphAccordion('.accordion-2', {
    speed: 500
  });
  const accordion3 = new GraphAccordion('.accordion-3', {
    speed: 500
  });
  const accordion4 = new GraphAccordion('.accordion-4', {
    speed: 500
  });
  const accordion5 = new GraphAccordion('.accordion-5', {
    speed: 500
  });
  const accordion6 = new GraphAccordion('.accordion-6', {
    speed: 500
  });
  const accordion7 = new GraphAccordion('.accordion-7', {
    speed: 500
  });
  const accordion8 = new GraphAccordion('.accordion-8', {
    speed: 500
  });
  const accordion9 = new GraphAccordion('.accordion-9', {
    speed: 500
  });
  const accordion10 = new GraphAccordion('.accordion-10', {
    speed: 500
  });
  const accordion11 = new GraphAccordion('.accordion-11', {
    speed: 500
  });
  const accordion12 = new GraphAccordion('.accordion-12', {
    speed: 500
  });
  const accordion13 = new GraphAccordion('.accordion-13', {
    speed: 500
  });

 }

