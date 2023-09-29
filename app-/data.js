const imgCount = 36;
const sampleCount = 100;

module.exports = () => {
    const data = { users: [] }
    for (let i = 0; i < sampleCount; i++) {
      data.users.push(
        {
            id:i,
            firstName: words[randomWordIndex()],
            lastName: words[randomWordIndex()],
            profilePic: `/pic (${random37()}).jfif`,
            description: Lorem,
            friendsIds: randomFriends()
        },
      );
    }
    return data
  }

  const Lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, necessitatibus deleniti ea a vel aut autem beatae reprehenderit non. Inventore";
  const stringWords =  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, necessitatibus deleniti ea a vel aut autem beatae reprehenderit non. Inventore, ex deserunt delectus tempora unde corrupti architecto eum pariatur enim Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, necessitatibus deleniti ea a vel aut autem beatae reprehenderit non. Inventore, ex deserunt delectus tempora unde corrupti architecto eum pariatur enim';
  const words = stringWords.split(' ');
  const randomWordIndex =function(){
    return Math.floor(Math.random() * (words.length-1));
  }
  const random37 =function(){
    return Math.floor(Math.random() * imgCount+1);
  }
  const coinFlip = function(val =0.7){
    return Math.random() > val;
  }
  const randomDescription = function(){
    let arr =stringWords.split(' ');
    return arr.reduce((sum, currentValue) => sum +' '+ coinFlip() ? currentValue : '', '');
  }
  const randomFriends = function(){
    const arr = [];
    for(let i =0; i<sampleCount; i++){
        if(coinFlip(0.85))arr.push(i);
    }
    return arr;
  }