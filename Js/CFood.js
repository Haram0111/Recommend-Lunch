let c_Name = [""];
let c_address = [""];
let c_phone = [""];
let c_place = [""];
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v2/local/search/keyword.json?y=35.134080249513474&x=129.10317348438963&radius=20000",
    data: { query: "중식", category_group_code: 'FD6'},
    headers: {Authorization: "KakaoAK cbf18629496639b728ece4b1fcbb27f2"}
})
    .done(function (data) {
        all = data.documents
        for (var i = 0; i < 4; i++){
            var c_name_id = "c_name" + i
            var c_address_id = "c_address" + i
            var c_phone_id = "c_phone" + i
            var c_place_id = "c_place" + i
            c_Name[i] = all[i].place_name;              
            c_address[i] = all[i].road_address_name;                  
            c_phone[i] = all[i].phone;             
            c_place[i] = [all[i].x , all[i].y];                  
            document.getElementById(c_name_id).innerHTML=c_Name[i];
            document.getElementById(c_address_id).innerHTML=c_address[i];
            document.getElementById(c_phone_id).innerHTML=c_phone[i];
            document.getElementById(c_place_id).innerHTML=c_place[i];
        }
    });