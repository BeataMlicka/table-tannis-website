import $ from 'jquery';

class MobileMenu {
    
    constructor() {
        this.menuIcon = $(".nav--menu-icon");
        
        console.log("Menu icon" + this.menuIcon);
        this.siteHeader = $(".site_header"); 
        this.events();
    }
    
    events(){
        this.menuIcon.on('click', function(){
            
            console.log(this);
            this.menuIcon.toggleClass('.yl');
        });
        
        
        /*
            $("button").click(function(){
                $("p").toggleClass("main");
            });
        */
        
        /*console.log("EV - " + this);
        this.menuIcon.click(this.toggleTheMenu.bind(this)); 
        */
        //to co w nawiasie bind() zostanie to przekazane do funkcji poniżej po użyciu click jako this  
    }
    
    /*
    toggleTheMenu(){
        console.log("TG - " + this);
        this.remove();
        this.siteHeader.toggleClass(".site_header--is-expended");
    }*/
}

export default MobileMenu;



/*




  constructor() {
    this.siteHeader = $(".site-header");
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    this.siteHeader.toggleClass("site-header--is-expanded");
  }
}

export default MobileMenu;

*/