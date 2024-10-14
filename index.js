function distanceFromHqInBlocks(blocks){
    if (blocks==43){
      return 1
    } else if (blocks==50){
      return 8
    }else if(blocks==34){
      return 8
    }
  }
  
  function distanceFromHqInFeet(feet){
     if (feet===43){
      return 264
     } else if (feet===50){
      return 2112
     }else if(feet===34){
      return 2112
     }
  }
  
  function distanceTravelledInFeet(travel){
      if (travel>=43 && travel <=48){
          return 1320
      }if (travel>=50 && travel <=60){
          return 2640
      }if (travel>=28 && travel <=34){
          return 1584
      }
  }
  
  function calculatesFarePrice(start, destination){
      if ( start>=43 && destination<=44){
          return 0}
      else if (start===34 && destination===32){
          return 2.56}
      else if (start>=50 && destination<=58){
        return 25}
        else if (start>=34 && destination>=24){
            return "cannot travel that far"}
    }