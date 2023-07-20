export default function Background(data) {
    let id = 0;
    if (data && data.weather) {
      id = data.weather[0].id;
    }
    function getImageUrl(weatherId) {
      if(weatherId===0)
      {
        return '';
      }
      if (weatherId >= 200 && weatherId < 300) {
        return 'https://i.gifer.com/Rnim.gif'; 
      } else if (weatherId >= 300 && weatherId < 400) {
        return 'https://i.gifer.com/Rhhw.gif';
      } else if (weatherId >= 500 && weatherId < 600) {
        return 'https://i.gifer.com/7scx.gif';
      } else if (weatherId >= 600 && weatherId < 700) {
        return 'https://i.gifer.com/YY5R.gif'; 
      } else if (weatherId >= 700 && weatherId < 800) {
        return 'https://i.gifer.com/604.gif'; 
      } else if (weatherId === 800) {
        return 'https://i.gifer.com/Lx0q.gif'; 
      } else {
        return 'https://i.gifer.com/fyCe.gif'; 
      }
    }
    return getImageUrl(Number(id));
  }
  
