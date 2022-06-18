let h_Name = [""];
let h_address = [""];
let h_phone = [""];
let h_place = [""];
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v2/local/search/keyword.json?y=35.134080249513474&x=129.10317348438963&radius=20000",
    data: { query: "한식", category_group_code: 'FD6'},
    headers: {Authorization: "KakaoAK cbf18629496639b728ece4b1fcbb27f2"}
})
    .done(function (data) {
        all = data.documents
        for (var i = 0; i < 4; i++){
            var h_name_id = "h_name" + i
            var h_address_id = "h_address" + i
            var h_phone_id = "h_phone" + i
            var h_place_id = "h_place" + i
            h_Name[i] = all[i].place_name;              
            h_address[i] = all[i].road_address_name;                  
            h_phone[i] = all[i].phone;             
            h_place[i] = [all[i].x , all[i].y];                 
            document.getElementById(h_name_id).innerHTML=h_Name[i];
            document.getElementById(h_address_id).innerHTML=h_address[i];
            document.getElementById(h_phone_id).innerHTML=h_phone[i];
            document.getElementById(h_place_id).innerHTML=h_place[i];
        }
    });