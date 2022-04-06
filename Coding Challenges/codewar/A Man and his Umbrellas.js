function minUmbrellas(weather){
    let home = 0, work = 0;
    for (let i = 0; i<weather.length; i++) {
        if(weather[i] == "rainy" || weather[i] == "thunderstorms"){
            if(i%2==0){
                work ++
                if(home) home --
            } else { 
                home ++
                if(work) work--
            }
        }
    }
    return Math.abs(home+work)
}
minUmbrellas(["sunny","rainy","cloudy","rainy","cloudy","cloudy","thunderstorms","cloudy","sunny","clear" ]) //2
minUmbrellas(["sunny","cloudy","rainy","rainy","rainy","rainy","thunderstorms","rainy","cloudy","rainy"]) //2
minUmbrellas(["rainy", "clear", "rainy", "cloudy"])//2
minUmbrellas(["sunny", "windy", "sunny", "clear"]) // 0
minUmbrellas(["rainy", "rainy", "rainy", "rainy", "thunderstorms", "rainy"])//1
minUmbrellas(["windy","rainy","cloudy","thunderstorms","rainy","windy","thunderstorms","rainy","cloudy","thunderstorms"]) // 2
minUmbrellas(["rainy","sunny","sunny","clear","sunny","clear","sunny","windy","sunny","sunny","thunderstorms","sunny","sunny","clear","clear","clear","clear","windy","clear","windy","sunny","clear","clear","clear","cloudy","clear","windy","clear","windy","windy","windy","clear","clear","cloudy","clear","windy","windy","clear","clear","sunny","clear","windy","clear","cloudy","sunny","sunny","sunny","cloudy","clear","clear","clear","clear","clear","rainy","sunny","windy","windy","rainy","clear","rainy","thunderstorms","windy","sunny","sunny","clear","rainy","sunny","cloudy","clear","sunny","sunny","clear","cloudy","thunderstorms","windy","windy","thunderstorms","clear","clear","windy","rainy","clear","cloudy","sunny","clear","clear","clear","windy","clear","thunderstorms","rainy","clear","windy","sunny","rainy","clear","windy","windy","clear","clear" ]) //4