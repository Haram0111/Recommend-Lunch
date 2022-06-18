let j_Name = [""];
let j_address = [""];
let j_phone = [""];
let j_place = [""];
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v2/local/search/keyword.json?y=35.134080249513474&x=129.10317348438963&radius=20000",
    data: { query: "일식", category_group_code: 'FD6'},
    headers: {Authorization: "KakaoAK cbf18629496639b728ece4b1fcbb27f2"}
})
    .done(function (data) {
        all = data.documents
        for (var i = 0; i < 4; i++){
            var j_name_id = "j_name" + i
            var j_address_id = "j_address" + i
            var j_phone_id = "j_phone" + i
            var j_place_id = "j_place" + i
            j_Name[i] = all[i].place_name;              
            j_address[i] = all[i].road_address_name;                  
            j_phone[i] = all[i].phone;             
            j_place[i] = [all[i].x , all[i].y];                  
            document.getElementById(j_name_id).innerHTML=j_Name[i];
            document.getElementById(j_address_id).innerHTML=j_address[i];
            document.getElementById(j_phone_id).innerHTML=j_phone[i];
            document.getElementById(j_place_id).innerHTML=j_place[i];
        }
    });