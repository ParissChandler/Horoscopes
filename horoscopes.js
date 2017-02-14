document.getElementById("result").onclick=run;

function run(e){
  e.preventDefault();
  var monthEntered= document.getElementById("monthEntered").value;
  var dayEntered= document.getElementById("dayEntered").value;
  if( (monthEntered =="april" && dayEntered >= 20) || (monthEntered== "may" && dayEntered <=20) ){
    var sign = "taurus";
    var horoscope = "Learn to have a sense of humor.";
  }
  else if( (monthEntered == "may" && dayEntered >=21) || (monthEntered == "june" && dayEntered <=21) ){
    var sign = "gemini";
    var horoscope = "You're a crazy bitch but they love you!";
  }
  else if( (monthEntered == "march" && dayEntered >=21) || (monthEntered == "april" && dayEntered <=19) ){
    var sign = "aries";
    var horoscope = "eh.";
  }
  else if( (monthEntered == "june" && dayEntered >=21) || (monthEntered == "july" && dayEntered <=22) ){
    var sign = "cancer";
    var horoscope = "fuck no.";
  }
  else if ((monthEntered == "september" && dayEntered >=23) || (monthEntered == "october" && dayEntered <=22) ){
    var sign = "libra";
    var horoscope = "you're okay. Nothing special.";
  }
  else if((monthEntered == "july" && dayEntered >=22) || (monthEntered== "august" && dayEntered <=23) ){
    var sign = "leo";
    var horoscope = "Guess what? You don't know it all. Sorry.";
  }
  else if((monthEntered == "december" && dayEntered >=22) || (monthEntered == "January" && dayEntered <=19) ){
    var sign = "capricorn";
    var horoscope = "Your zodiac name sounds like an STD.";
  }
  else if((monthEntered == "october" && dayEntered >=23) || (monthEntered == "November" && dayEntered <=21) ){
    var sign = "scorpio";
    var horoscope = "Your selfish and most people hate you.";
  }
  else if ((monthEntered == "february" && dayEntered >=19) || (monthEntered == "march" && dayEntered <=20) ){
    var sign = "pisces";
    var horoscope = "The fuck is a pisces?";
  }
  else if ((monthEntered == "january" && dayEntered >=20) || (monthEntered == "february" && dayEntered <=18) ){
    var sign = "aquarius";
    var horoscope = "Ass kisser.";
  }
  else if ((monthEntered == "november" && dayEntered >=19) || (monthEntered == "december" && dayEntered <=21) ){
    var sign = "Sagittarius";
    var horoscope = "You can't keep a solid relationship because you're way too damn sensitive.";
  }
  else if ((monthEntered == "august" && dayEntered >=23) || (monthEntered == "september" && dayEntered <=22) ){
    var sign = "virgo";
    var horoscope = "Put a smile on your damn face, jeesh!";
  }
  document.getElementById("sign").innerHTML = sign;
  document.getElementById("horoscope").innerHTML = horoscope;
}
