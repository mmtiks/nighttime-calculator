      async function getTime(){
    //https://sunrise-sunset.org/api
    const url = 'https://api.sunrise-sunset.org/json?lat='+ document.getElementById("xtext").value + '&lng='+document.getElementById("ytext").value+
     '&date='+ document.getElementById("year").value+'-'+ document.getElementById("month").value+'-' + document.getElementById("day").value;
    console.log(url);
    
    const response = await fetch(url);
    const data = await response.json();

    let valuestart = moment.duration("24:00:00", "HH:mm:ss");
    let valuestop = moment.duration(data.results.day_length, "HH:mm:ss");
    let difference = valuestart.subtract(valuestop);

    document.getElementById("night").innerHTML= "night duration: "+ difference.hours() + ":" + difference.minutes()+ ":" + difference.seconds()
    document.getElementById("dawn").innerHTML=  "astronomical twilight: " +data.results.astronomical_twilight_begin;
    document.getElementById("sunset").innerHTML= "sunset: " + data.results.sunset;
}
