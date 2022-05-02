  // grab card
  let card = document.getElementById('b-card');

  // grab button
  let button = document.getElementById('show-hide');

  button.addEventListener('click', function(){
      if(card.style.display==='none'){
          card.style.display = 'block'
      }else{
          card.style.display = 'none'
      }
  });


/** Bonus Implementation */

/**class UIActions {
    constructor(){
        this.card = document.getElementById('b-card');
        this.button = document.getElementById('show-hide');
    }

    showHideCard(){
        this.button.addEventListener('click', ()=>{
            if(this.card.style.display==='none'){
                this.card.style.display = 'block';
            }else{
                this.card.style.display = 'none';
            }
        });
    }
}

const uiEvents = new UIActions(); // instance
uiEvents.showHideCard(); // calling a function on the instance **/

const userData = window.userData;

const data = userData.map((user)=>{
    return {name: user.name, address: user.address, email: user.email, gender: user.gender, friends: user.friends};
});





