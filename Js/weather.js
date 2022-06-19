var total_name = [];
var total_address = [];
var total_phone = [];
var total_place = [];

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35.1028&lon=129.0403&lang=kr&appid=39cecfff4fc160b196d696e6671bfbb5&units=metric';
    dataPane = document.getElementById("weather");
    fetch(url)
    .then(res => res.json())
    .then(resJson => {
        temp = resJson.main.temp;
        weather = resJson.weather[0].main;
        description = resJson.weather[0].description;
        des = "현재온도: " + resJson.main.temp;
        des = des + "\t날씨: "+ resJson.weather[0].main;
        document.getElementById("weather").innerHTML=des;
        
        description = resJson.weather[0].description;

        writeWeather();
    })

function writeWeather() {
    console.log('온도: ' + temp);
    if(weather == 'Clear') {
        weatherFoods = ['밀면', '초밥', '회', '덮밥'];
        for(i=0;i<4;i++) {
            var keyid = "foodmenu" + i
            document.getElementById(keyid).innerHTML=weatherFoods[i];
            getimformaton(i, weatherFoods[i])
        }
    }
    else if(weather == 'Clouds') {
        weatherFoods = ['국밥', '리조또', '마라탕', '칼국수'];
        for(i=0;i<4;i++) {
            var keyid = "foodmenu" + i
            document.getElementById(keyid).innerHTML=weatherFoods[i];
            getimformaton(i, weatherFoods[i])
        }
    }
    else if(weather == 'Rain') {
        weatherFoods = ['파전', '김치전', '전골', '수제비'];
        for(i=0;i<4;i++) {
            var keyid = "foodmenu" + i
            document.getElementById(keyid).innerHTML=weatherFoods[i];
            getimformaton(i, weatherFoods[i])
        }
    }
    else if(weather == 'Drizzle') {
        weatherFoods = ['파전', '김치전', '보쌈', '라멘'];
        for(i=0;i<4;i++) {
            var keyid = "foodmenu" + i
            document.getElementById(keyid).innerHTML=weatherFoods[i];
            getimformaton(i, weatherFoods[i])
        }
    }
    else if(weather == 'Thunderstorm') {
        weatherFoods = ['전골', '수제비', '아구찜', '짬뽕'];
        for(i=0;i<4;i++) {
            var keyid = "foodmenu" + i
            document.getElementById(keyid).innerHTML=weatherFoods[i];
            getimformaton(i, weatherFoods[i])
        }
    }
    else if(weather == 'Snow') {
        weatherFoods = ['파스타', '스테이크', '닭발', '치킨'];
        for(i=0;i<4;i++) {
            var keyid = "foodmenu" + i
            document.getElementById(keyid).innerHTML=weatherFoods[i];
            getimformaton(i, weatherFoods[i])
        }
    }
    else if(weather == 'Atmosphere') {
        weatherFoods = ['국밥', '리조또', '마라탕', '칼국수'];
        for(i=0;i<4;i++) {
            var keyid = "foodmenu" + i
            document.getElementById(keyid).innerHTML=weatherFoods[i];
            getimformaton(i, weatherFoods[i])
        }
    }
    else {document.write('날씨를 가져 올 수 없습니다.');}
}
function getimformaton(num, food){
    let j_Name = [""];
    let j_address = [""];
    let j_phone = [""];
    let j_place = [""];
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v2/local/search/keyword.json?y=35.134080249513474&x=129.10317348438963&radius=20000",
        data: { query: food, category_group_code: 'FD6'},
        headers: {Authorization: "KakaoAK cbf18629496639b728ece4b1fcbb27f2"}
    })
        .done(function (data) {
            all = data.documents
            for (var i = 0; i < 4; i++){
                var j_name_id = num+ "_name" + i
                var j_address_id = num+"_address" + i
                var j_phone_id = num+"_phone" + i
                var j_place_id = num+"_place" + i
                j_Name[i] = all[i].place_name;              
                j_address[i] = all[i].road_address_name;                  
                j_phone[i] = all[i].phone;             
                j_place[i] = [all[i].x , all[i].y];                  
                document.getElementById(j_name_id).innerHTML=j_Name[i];
                document.getElementById(j_address_id).innerHTML=j_address[i];
                document.getElementById(j_phone_id).innerHTML=j_phone[i];
                document.getElementById(j_place_id).innerHTML=j_place[i];
            }
            total_name.push(j_Name)
            total_address.push(j_address)
            total_phone.push(j_phone)
            total_place.push(j_place)
            console.log(total_place)
        });
}
function sendFunc(clicked_id){ //3_name2
    var Kk = clicked_id;
    n1 = Kk[Kk.length -1]; //index
    n2 = Kk[0]; //분류
    if (n2 === "0"){
        lat = total_place[n2][n1][0]
        lot = total_place[n2][n1][1]
        var con = document.getElementById("0mappop");
        con.style.display = (con.style.display != 'none') ? "none" : "block";
                
    }else if(n2 === "1"){
        lat = total_place[n2][n1][0]
        lot = total_place[n2][n1][1]
        var con = document.getElementById("1mappop");
        con.style.display = (con.style.display != 'none') ? "none" : "block";
    }else if(n2 === "2"){
        lat = total_place[n2][n1][0]
        lot = total_place[n2][n1][1]
        var con = document.getElementById("2mappop");
        con.style.display = (con.style.display != 'none') ? "none" : "block";
    }else if(n2 === "3"){
        lat = total_place[n2][n1][0]
        lot = total_place[n2][n1][1]
        var con = document.getElementById("3mappop");
        con.style.display = (con.style.display != 'none') ? "none" : "block";
    }
    var text = n2 + "map"
    console.log(text);
    var mapContainer = document.getElementById(text), // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(lot, lat), // 지도의 중심좌표
                level: 3, // 지도의 확대 레벨
                mapTypeId: kakao.maps.MapTypeId.ROADMAP // 지도종류
            };
    var map = new kakao.maps.Map(mapContainer, mapOption);
    var currentPos = new kakao.maps.LatLng(lot, lat); 
    var marker = new kakao.maps.Marker({
        position: currentPos
    });
    marker.setMap(map);
}