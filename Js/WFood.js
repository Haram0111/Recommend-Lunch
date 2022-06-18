let w_Name = [""];
let w_address = [""];
let w_phone = [""];
let w_place = [""];
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v2/local/search/keyword.json?y=35.134080249513474&x=129.10317348438963&radius=20000",
    data: { query: "양식", category_group_code: 'FD6'},
    headers: {Authorization: "KakaoAK cbf18629496639b728ece4b1fcbb27f2"}
})
    .done(function (data) {
        all = data.documents
        for (var i = 0; i < 4; i++){
            var w_name_id = "w_name" + i
            var w_address_id = "w_address" + i
            var w_phone_id = "w_phone" + i
            var w_place_id = "w_place" + i
            w_Name[i] = all[i].place_name;              
            w_address[i] = all[i].road_address_name;                  
            w_phone[i] = all[i].phone;             
            w_place[i] = [all[i].x , all[i].y];                  
            document.getElementById(w_name_id).innerHTML=w_Name[i];
            document.getElementById(w_address_id).innerHTML=w_address[i];
            document.getElementById(w_phone_id).innerHTML=w_phone[i];
            document.getElementById(w_place_id).innerHTML=w_place[i];
        }
    });