let b_Name = [""];
let b_address = [""];
let b_phone = [""];
let b_place = [""];
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v2/local/search/keyword.json?y=35.134080249513474&x=129.10317348438963&radius=20000",
    data: { query: "분식", category_group_code: 'FD6'},
    headers: {Authorization: "KakaoAK cbf18629496639b728ece4b1fcbb27f2"}
})
    .done(function (data) {
        all = data.documents
        for (var i = 0; i < 4; i++){
            var b_name_id = "b_name" + i
            var b_address_id = "b_address" + i
            var b_phone_id = "b_phone" + i
            var b_place_id = "b_place" + i
            b_Name[i] = all[i].place_name;              
            b_address[i] = all[i].road_address_name;                  
            b_phone[i] = all[i].phone;             
            b_place[i] = [all[i].x , all[i].y];                     
            document.getElementById(b_name_id).innerHTML=b_Name[i];
            document.getElementById(b_address_id).innerHTML=b_address[i];
            document.getElementById(b_phone_id).innerHTML=b_phone[i];
            document.getElementById(b_place_id).innerHTML=b_place[i];
        }
    });