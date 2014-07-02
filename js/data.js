//function onLoad(){


// ************************BIOGRAFI JOKOWI id biojokowi************************
$.ajax({
            url: "http://api.pemiluapi.org/calonpresiden/api/caleg/jw?apiKey=f9b3ae01cce10bf7be79ab0a6e4a4e3d",					
            dataType: "text",
            success: function(data) {
                var json = $.parseJSON(data);
                var caleg = json.data.results.caleg;
				$.each(caleg, function(i, item) {
				    $('#biojokowi').append('<strong>Nama : </strong>' + caleg[i].nama + '<br />');
					$('#biojokowi').append('<strong>Agama : </strong>' + caleg[i].agama + '<br />');
					$('#biojokowi').append('<strong>Tempat Lahir : </strong>' + caleg[i].tempat_lahir + '<br />');
					$('#biojokowi').append('<strong>Tanggal Lahir : </strong>' + caleg[i].tanggal_lahir + '<br />');
					$('#biojokowi').append('<strong>Nama Istri : </strong>' + caleg[i].nama_pasangan + '<br />');
					$('#biojokowi').append('<strong>Jumlah Anak : </strong>' + caleg[i].jumlah_anak + '<br />');
					$('#biojokowi').append('<strong>Tinggal di Daerah : </strong>' + caleg[i].kab_kota_tinggal + '<br />'+ '<br />');				
				    $('#biojokowi').append('<strong>Biografi : </strong>' + caleg[i].biografi + '<br />'+ '<br />');
                    $('#biojokowi').append('<strong>Partai : </strong>' + caleg[i].partai.nama + '<br />');	
                    
                });						 
            }
        });
// $(document).ready(function()
// 	{ 
// 		var url="http://api.pemiluapi.org/calonpresiden/api/caleg?apiKey=fea6f7d9ec0b31e256a673114792cb17"; 
// 		$("#jsondata tbody").html(""); 
// 		$.getJSON(url,function(data)
// 			{ 
// 				$.each(data.data.results.caleg, function(i,data)
// 					{ var newRow = "<tr>" +"<td>"+data.id+"</td>" +"<td>"+
// 					data.nama+"</td>" +"<td>"+data.kab_kota_tinggal+"</td>" +
// 					"<td>"+data.provinsi_tinggal+"</td>" +"<td>"+data.role+
// 					"</td>" +"<td><a href='#' id='button' 
// 					onclick='get_detail("+data.id+")'>detail</a></td>" 
// 					+"</tr>" ; $(newRow).appendTo("#jsondata tbody"); }); }); });

// ************************BIOGRAFI PRABOWO id bioprabowo************************
     $.ajax({
            url: "http://api.pemiluapi.org/calonpresiden/api/caleg/ps?apiKey=f9b3ae01cce10bf7be79ab0a6e4a4e3d",                 
            dataType: "text",
   //          type:'POST',
			// data:term,
			// dataType:'json',
			// error:function(jqXHR,text_status,strError){
			// alert(“no connection”);},
			// timeout:60000,
            success: function(data) {
                var json = $.parseJSON(data);
                var caleg = json.data.results.caleg;
                $.each(caleg, function(i, item) {
                    $('#bioprabowo').append('<strong>Nama : </strong>' + caleg[i].nama + '<br />');
                    $('#bioprabowo').append('<strong>Agama : </strong>' + caleg[i].agama + '<br />');
                    $('#bioprabowo').append('<strong>Tempat Lahir : </strong>' + caleg[i].tempat_lahir + '<br />');
                    $('#bioprabowo').append('<strong>Tanggal Lahir : </strong>' + caleg[i].tanggal_lahir + '<br />');
                    $('#bioprabowo').append('<strong>Jumlah Anak : </strong>' + caleg[i].jumlah_anak + '<br />');
                    $('#bioprabowo').append('<strong>Tinggal di Daerah : </strong>' + caleg[i].kab_kota_tinggal + '<br />');
                    $('#bioprabowo').append('<strong>Kelurahan Tinggal : </strong>' + caleg[i].kelurahan_tinggal + '<br />');
                    $('#bioprabowo').append('<strong>Kecamatan Tinggal : </strong>' + caleg[i].kecamatan_tinggal + '<br />' + '<br />');
                    $('#bioprabowo').append('<strong>Biografi : </strong>' + caleg[i].biografi + '<br /></br />');
                    $('#bioprabowo').append('<strong>Partai : </strong>' + caleg[i].partai.nama + '<br />'); 
                    
                });                      
            }
        });
// function connect(e)
// {
// var term= {button:e};
// $.ajax({
// url:'http://www.indiageeks.in/tutorials/reply.php',
// type:'POST',
// data:term,
// dataType:'json',
// error:function(jqXHR,text_status,strError){
// alert(“no connection”);},
// timeout:60000,
// success:function(data){
// $("#result").html("");
// for(var i in data){
// $("#result").append("<li>"+data[i]+"</li>");
// }
// }
// });}
// ************************BIOGRAFI HATTARA JASSA id biohatta************************
$.ajax({
    url: "http://api.pemiluapi.org/calonpresiden/api/caleg/hr?apiKey=f9b3ae01cce10bf7be79ab0a6e4a4e3d",                 
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        var caleg = json.data.results.caleg;
        $.each(caleg, function(i, item) {
            $('#biohatta').append('<strong>Nama : </strong>' + caleg[i].nama + '<br />');
            $('#biohatta').append('<strong>Agama : </strong>' + caleg[i].agama + '<br />');
            $('#biohatta').append('<strong>Tempat Lahir : </strong>' + caleg[i].tempat_lahir + '<br />');
            $('#biohatta').append('<strong>Tanggal Lahir : </strong>' + caleg[i].tanggal_lahir + '<br />');   
            $('#biohatta').append('<strong>Nama Istri : </strong>' + caleg[i].nama_pasangan + '<br />');
            $('#biohatta').append('<strong>Jumlah Anak : </strong>' + caleg[i].jumlah_anak + '<br />');
            $('#biohatta').append('<strong>Tinggal di Daerah : </strong>' + caleg[i].kab_kota_tinggal + '<br />' + '<br />');  
            $('#biohatta').append('<strong>Biografi : </strong>' + caleg[i].biografi + '<br /></br />');
            $('#biohatta').append('<strong>Partai : </strong>' + caleg[i].partai.nama + '<br />'); 
    
        });                      
    }
});
// ************************BIOGRAFI JK id biojk************************
$.ajax({
    url: "http://api.pemiluapi.org/calonpresiden/api/caleg/jk?apiKey=f9b3ae01cce10bf7be79ab0a6e4a4e3d",                 
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        var caleg = json.data.results.caleg;
        $.each(caleg, function(i, item) {
            $('#biojk').append('<strong>Nama : </strong>' + caleg[i].nama + '<br />');
            $('#biojk').append('<strong>Agama : </strong>' + caleg[i].agama + '<br />' );
            $('#biojk').append('<strong>Tempat Lahir : </strong>' + caleg[i].tempat_lahir + '<br />' );
            $('#biojk').append('<strong>Tanggal Lahir : </strong>' + caleg[i].tanggal_lahir + '<br />');
            $('#biojk').append('<strong>Jumlah Anak : </strong>'+ caleg[i].jumlah_anak + '<br />' );
            $('#biojk').append('<strong>Tinggal di Daerah : </strong>' + caleg[i].kab_kota_tinggal + '<br />' + '<br />');
            $('#biojk').append('<strong>Biografi : </strong>' + caleg[i].biografi + '<br /></br />');
            $('#biojk').append('<strong>Partai : </strong>' + caleg[i].partai.nama + '<br />');  
            });                      
    }
});

// ************************PRESTASI JK id awardjk************************
 $.ajax({
    url: "http://api.pemiluapi.org/calonpresiden/api/caleg/jk?apiKey=f9b3ae01cce10bf7be79ab0a6e4a4e3d",                 
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        var caleg = json.data.results.caleg;
        $.each(caleg, function(i, item) {
            $('#awardjk').append('1. Penghargaan  : ' + caleg[i].riwayat_penghargaan[0].ringkasan  + '<br />' + '<br />');  
            $('#awardjk').append('Institusi  : ' + caleg[i].riwayat_penghargaan[0].institusi  + '<br />' + '<br />');   
            $('#awardjk').append('Tahun  : ' + caleg[i].riwayat_penghargaan[0].tanggal  + '<br />' + '<br />' + '<br />');  
           
            $('#awardjk').append('2. Penghargaan  : ' + caleg[i].riwayat_penghargaan[1].ringkasan  + '<br />' + '<br />');  
            $('#awardjk').append('Institusi  : ' + caleg[i].riwayat_penghargaan[1].institusi  + '<br />' + '<br />');   
            $('#awardjk').append('Tahun  : ' + caleg[i].riwayat_penghargaan[1].tanggal  + '<br />' + '<br />'  + '<br />'); 
           
           $('#awardjk').append('3. Penghargaan  : ' + caleg[i].riwayat_penghargaan[2].ringkasan  + '<br />' + '<br />');   
            $('#awardjk').append('Institusi  : ' + caleg[i].riwayat_penghargaan[2].institusi  + '<br />' + '<br />');   
            $('#awardjk').append('Tahun  : ' + caleg[i].riwayat_penghargaan[2].tanggal  + '<br />' + '<br />' + '<br />');  
           
            $('#awardjk').append('4. Penghargaan  : ' + caleg[i].riwayat_penghargaan[3].ringkasan  + '<br />' + '<br />');  
            $('#awardjk').append('Institusi  : ' + caleg[i].riwayat_penghargaan[3].institusi  + '<br />' + '<br />');   
            $('#awardjk').append('Tahun  : ' + caleg[i].riwayat_penghargaan[3].tanggal  + '<br />' + '<br />'  + '<br />'); 
           
           $('#awardjk').append('5. Penghargaan  : ' + caleg[i].riwayat_penghargaan[4].ringkasan  + '<br />' + '<br />');   
            $('#awardjk').append('Institusi  : ' + caleg[i].riwayat_penghargaan[4].institusi  + '<br />' + '<br />');   
            $('#awardjk').append('Tahun  : ' + caleg[i].riwayat_penghargaan[4].tanggal  + '<br />' + '<br />' + '<br />');  
           
            $('#awardjk').append('6. Penghargaan  : ' + caleg[i].riwayat_penghargaan[5].ringkasan  + '<br />' + '<br />');  
            $('#awardjk').append('Institusi  : ' + caleg[i].riwayat_penghargaan[5].institusi  + '<br />' + '<br />');   
            $('#awardjk').append('Tahun  : ' + caleg[i].riwayat_penghargaan[5].tanggal  + '<br />' + '<br />'  + '<br />'); 
           
           $('#awardjk').append('7. Penghargaan  : ' + caleg[i].riwayat_penghargaan[6].ringkasan  + '<br />' + '<br />');   
            $('#awardjk').append('Institusi  : ' + caleg[i].riwayat_penghargaan[6].institusi  + '<br />' + '<br />');   
            $('#awardjk').append('Tahun  : ' + caleg[i].riwayat_penghargaan[6].tanggal  + '<br />' + '<br />' + '<br />');  
           
            $('#awardjk').append('8. Penghargaan  : ' + caleg[i].riwayat_penghargaan[7].ringkasan  + '<br />' + '<br />');  
            $('#awardjk').append('Institusi  : ' + caleg[i].riwayat_penghargaan[7].institusi  + '<br />' + '<br />');   
            $('#awardjk').append('Tahun  : ' + caleg[i].riwayat_penghargaan[7].tanggal  + '<br />' + '<br />'  + '<br />'); 
           
             $('#awardjk').append('9. Penghargaan  : ' + caleg[i].riwayat_penghargaan[8].ringkasan  + '<br />' + '<br />'); 
            $('#awardjk').append('Institusi  : ' + caleg[i].riwayat_penghargaan[8].institusi  + '<br />' + '<br />');   
            $('#awardjk').append('Tahun  : ' + caleg[i].riwayat_penghargaan[8].tanggal  + '<br />' + '<br />' + '<br />');  
           
            $('#awardjk').append('10. Penghargaan  : ' + caleg[i].riwayat_penghargaan[9].ringkasan  + '<br />' + '<br />'); 
            $('#awardjk').append('Institusi  : ' + caleg[i].riwayat_penghargaan[9].institusi  + '<br />' + '<br />');   
            $('#awardjk').append('Tahun  : ' + caleg[i].riwayat_penghargaan[9].tanggal  + '<br />' + '<br />'  + '<br />'); 
          
      });                        
    }
});

// ************************PRESTASI JK id awardjokowi************************
$.ajax({
    url: "http://api.pemiluapi.org/calonpresiden/api/caleg/jw?apiKey=f9b3ae01cce10bf7be79ab0a6e4a4e3d",                 
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        var caleg = json.data.results.caleg;
        $.each(caleg, function(i, item) {
            $('#awardjokowi').append('1. Penghargaan  : ' + caleg[i].riwayat_penghargaan[0].ringkasan  + '<br />' + '<br />');  
            $('#awardjokowi').append('Institusi  : ' + caleg[i].riwayat_penghargaan[0].institusi  + '<br />' + '<br />');   
            $('#awardjokowi').append('Tahun  : ' + caleg[i].riwayat_penghargaan[0].tanggal  + '<br />' + '<br />' + '<br />');  
           
            $('#awardjokowi').append('2. Penghargaan  : ' + caleg[i].riwayat_penghargaan[1].ringkasan  + '<br />' + '<br />');  
            $('#awardjokowi').append('Institusi  : ' + caleg[i].riwayat_penghargaan[1].institusi  + '<br />' + '<br />');   
            $('#awardjokowi').append('Tahun  : ' + caleg[i].riwayat_penghargaan[1].tanggal  + '<br />' + '<br />'  + '<br />'); 
           
           $('#awardjokowi').append('3. Penghargaan  : ' + caleg[i].riwayat_penghargaan[2].ringkasan  + '<br />' + '<br />');   
            $('#awardjokowi').append('Institusi  : ' + caleg[i].riwayat_penghargaan[2].institusi  + '<br />' + '<br />');   
            $('#awardjokowi').append('Tahun  : ' + caleg[i].riwayat_penghargaan[2].tanggal  + '<br />' + '<br />' + '<br />');  
           
            $('#awardjokowi').append('4. Penghargaan  : ' + caleg[i].riwayat_penghargaan[3].ringkasan  + '<br />' + '<br />');  
            $('#awardjokowi').append('Institusi  : ' + caleg[i].riwayat_penghargaan[3].institusi  + '<br />' + '<br />');   
            $('#awardjokowi').append('Tahun  : ' + caleg[i].riwayat_penghargaan[3].tanggal  + '<br />' + '<br />'  + '<br />'); 
           
           $('#awardjokowi').append('5. Penghargaan  : ' + caleg[i].riwayat_penghargaan[4].ringkasan  + '<br />' + '<br />');   
            $('#awardjokowi').append('Institusi  : ' + caleg[i].riwayat_penghargaan[4].institusi  + '<br />' + '<br />');   
            $('#awardjokowi').append('Tahun  : ' + caleg[i].riwayat_penghargaan[4].tanggal  + '<br />' + '<br />' + '<br />');  
           
            $('#awardjokowi').append('6. Penghargaan  : ' + caleg[i].riwayat_penghargaan[5].ringkasan  + '<br />' + '<br />');  
            $('#awardjokowi').append('Institusi  : ' + caleg[i].riwayat_penghargaan[5].institusi  + '<br />' + '<br />');   
            $('#awardjokowi').append('Tahun  : ' + caleg[i].riwayat_penghargaan[5].tanggal  + '<br />' + '<br />'  + '<br />'); 
           
           $('#awardjokowi').append('7. Penghargaan  : ' + caleg[i].riwayat_penghargaan[6].ringkasan  + '<br />' + '<br />');   
            $('#awardjokowi').append('Institusi  : ' + caleg[i].riwayat_penghargaan[6].institusi  + '<br />' + '<br />');   
            $('#awardjokowi').append('Tahun  : ' + caleg[i].riwayat_penghargaan[6].tanggal  + '<br />' + '<br />' + '<br />');  
           
            $('#awardjokowi').append('8. Penghargaan  : ' + caleg[i].riwayat_penghargaan[7].ringkasan  + '<br />' + '<br />');  
            $('#awardjokowi').append('Institusi  : ' + caleg[i].riwayat_penghargaan[7].institusi  + '<br />' + '<br />');   
            $('#awardjokowi').append('Tahun  : ' + caleg[i].riwayat_penghargaan[7].tanggal  + '<br />' + '<br />'  + '<br />'); 
           
             $('#awardjokowi').append('9. Penghargaan  : ' + caleg[i].riwayat_penghargaan[8].ringkasan  + '<br />' + '<br />'); 
            $('#awardjokowi').append('Institusi  : ' + caleg[i].riwayat_penghargaan[8].institusi  + '<br />' + '<br />');   
            $('#awardjokowi').append('Tahun  : ' + caleg[i].riwayat_penghargaan[8].tanggal  + '<br />' + '<br />' + '<br />');  
           
            $('#awardjokowi').append('10. Penghargaan  : ' + caleg[i].riwayat_penghargaan[9].ringkasan  + '<br />' + '<br />'); 
            $('#awardjokowi').append('Institusi  : ' + caleg[i].riwayat_penghargaan[9].institusi  + '<br />' + '<br />');   
            $('#awardjokowi').append('Tahun  : ' + caleg[i].riwayat_penghargaan[9].tanggal  + '<br />' + '<br />'  + '<br />'); 
          
      });                        
    }
});
// ************************PRESTASI prabowo id awardprabowo************************
$.ajax({
    url: "http://api.pemiluapi.org/calonpresiden/api/caleg/ps?apiKey=f9b3ae01cce10bf7be79ab0a6e4a4e3d",                 
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        var caleg = json.data.results.caleg;
        $.each(caleg, function(i, item) {
            $('#awardprabowo').append('1. Penghargaan  : ' + caleg[i].riwayat_penghargaan[0].ringkasan  + '<br />');  
            $('#awardprabowo').append('Institusi  : ' + caleg[i].riwayat_penghargaan[0].institusi  + '<br />');    
            $('#awardprabowo').append('Tahun  : ' + caleg[i].riwayat_penghargaan[0].tanggal  + '<br />');   
           
            $('#awardprabowo').append('2. Penghargaan  : ' + caleg[i].riwayat_penghargaan[1].ringkasan  + '<br />');   
            $('#awardprabowo').append('Institusi  : ' + caleg[i].riwayat_penghargaan[1].institusi  + '<br />');    
            $('#awardprabowo').append('Tahun  : ' + caleg[i].riwayat_penghargaan[1].tanggal  + '<br />');  
           
           $('#awardprabowo').append('3. Penghargaan  : ' + caleg[i].riwayat_penghargaan[2].ringkasan  +  '<br />');    
            $('#awardprabowo').append('Institusi  : ' + caleg[i].riwayat_penghargaan[2].institusi + '<br />');    
            $('#awardprabowo').append('Tahun  : ' + caleg[i].riwayat_penghargaan[2].tanggal  + '<br />');   
           
            $('#awardprabowo').append('4. Penghargaan  : ' + caleg[i].riwayat_penghargaan[3].ringkasan  + '<br />');   
            $('#awardprabowo').append('Institusi  : ' + caleg[i].riwayat_penghargaan[3].institusi  + '<br />');    
            $('#awardprabowo').append('Tahun  : ' + caleg[i].riwayat_penghargaan[3].tanggal  + '<br />');  
           
           $('#awardprabowo').append('5. Penghargaan  : ' + caleg[i].riwayat_penghargaan[4].ringkasan  + '<br />');    
            $('#awardprabowo').append('Institusi  : ' + caleg[i].riwayat_penghargaan[4].institusi  + '<br />');    
            $('#awardprabowo').append('Tahun  : ' + caleg[i].riwayat_penghargaan[4].tanggal  + '<br />');   
           
            $('#awardprabowo').append('6. Penghargaan  : ' + caleg[i].riwayat_penghargaan[5].ringkasan  + '<br />');   
            $('#awardprabowo').append('Institusi  : ' + caleg[i].riwayat_penghargaan[5].institusi  + '<br />');    
            $('#awardprabowo').append('Tahun  : ' + caleg[i].riwayat_penghargaan[5].tanggal  + '<br />');  
           
           $('#awardprabowo').append('7. Penghargaan  : ' + caleg[i].riwayat_penghargaan[6].ringkasan  + '<br />');    
            $('#awardprabowo').append('Institusi  : ' + caleg[i].riwayat_penghargaan[6].institusi  + '<br />');    
            $('#awardprabowo').append('Tahun  : ' + caleg[i].riwayat_penghargaan[6].tanggal  +'<br />');   
           
            $('#awardprabowo').append('8. Penghargaan  : ' + caleg[i].riwayat_penghargaan[7].ringkasan  + '<br />');   
            $('#awardprabowo').append('Institusi  : ' + caleg[i].riwayat_penghargaan[7].institusi  + '<br />');    
            $('#awardprabowo').append('Tahun  : ' + caleg[i].riwayat_penghargaan[7].tanggal  + '<br />' + '<br />' );  
           
             $('#awardprabowo').append('9. Penghargaan  : ' + caleg[i].riwayat_penghargaan[8].ringkasan  + '<br />');  
            $('#awardprabowo').append('Institusi  : ' + caleg[i].riwayat_penghargaan[8].institusi  + '<br />' );    
            $('#awardprabowo').append('Tahun  : ' + caleg[i].riwayat_penghargaan[8].tanggal  + '<br />' + '<br />');   
           
            $('#awardprabowo').append('10. Penghargaan  : ' + caleg[i].riwayat_penghargaan[9].ringkasan  + '<br />');  
            $('#awardprabowo').append('Institusi  : ' + caleg[i].riwayat_penghargaan[9].institusi  + '<br />' );    
            $('#awardprabowo').append('Tahun  : ' + caleg[i].riwayat_penghargaan[9].tanggal  + '<br />');  
          
      });                        
    }
});

// ************************PRESTASI hatta id awardhatta************************
$.ajax({
    url: "http://api.pemiluapi.org/calonpresiden/api/caleg/hr?apiKey=f9b3ae01cce10bf7be79ab0a6e4a4e3d",                 
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        var caleg = json.data.results.caleg;
        $.each(caleg, function(i, item) {
            $('#awardhatta').append('1. Penghargaan  : ' + caleg[i].riwayat_penghargaan[0].ringkasan  + '<br />');  
            $('#awardhatta').append('Institusi  : ' + caleg[i].riwayat_penghargaan[0].institusi  + '<br />');   
            $('#awardhatta').append('Tahun  : ' + caleg[i].riwayat_penghargaan[0].tanggal  + '<br />'); 
           
            $('#awardhatta').append('2. Penghargaan  : ' + caleg[i].riwayat_penghargaan[1].ringkasan  + '<br />');  
            $('#awardhatta').append('Institusi  : ' + caleg[i].riwayat_penghargaan[1].institusi  + '<br />');   
            $('#awardhatta').append('Tahun  : ' + caleg[i].riwayat_penghargaan[1].tanggal  + '<br />'); 
           
           $('#awardhatta').append('3. Penghargaan  : ' + caleg[i].riwayat_penghargaan[2].ringkasan  + '<br />');   
            $('#awardhatta').append('Institusi  : ' + caleg[i].riwayat_penghargaan[2].institusi  + '<br />');   
            $('#awardhatta').append('Tahun  : ' + caleg[i].riwayat_penghargaan[2].tanggal  + '<br />'); 
           
            $('#awardhatta').append('4. Penghargaan  : ' + caleg[i].riwayat_penghargaan[3].ringkasan  + '<br />');  
            $('#awardhatta').append('Institusi  : ' + caleg[i].riwayat_penghargaan[3].institusi  + '<br />');   
            $('#awardhatta').append('Tahun  : ' + caleg[i].riwayat_penghargaan[3].tanggal  + '<br />'); 
           
           $('#awardhatta').append('5. Penghargaan  : ' + caleg[i].riwayat_penghargaan[4].ringkasan  + '<br />');   
            $('#awardhatta').append('Institusi  : ' + caleg[i].riwayat_penghargaan[4].institusi  + '<br />');   
            $('#awardhatta').append('Tahun  : ' + caleg[i].riwayat_penghargaan[4].tanggal  + '<br />' );    
           
            $('#awardhatta').append('6. Penghargaan  : ' + caleg[i].riwayat_penghargaan[5].ringkasan  + '<br />');  
            $('#awardhatta').append('Institusi  : ' + caleg[i].riwayat_penghargaan[5].institusi  + '<br />');   
            $('#awardhatta').append('Tahun  : ' + caleg[i].riwayat_penghargaan[5].tanggal + '<br />');  
           
           $('#awardhatta').append('7. Penghargaan  : ' + caleg[i].riwayat_penghargaan[6].ringkasan  + '<br />');   
            $('#awardhatta').append('Institusi  : ' + caleg[i].riwayat_penghargaan[6].institusi + '<br />');    
            $('#awardhatta').append('Tahun  : ' + caleg[i].riwayat_penghargaan[6].tanggal + '<br />');  
           
            $('#awardhatta').append('8. Penghargaan  : ' + caleg[i].riwayat_penghargaan[7].ringkasan  + '<br />');  
            $('#awardhatta').append('Institusi  : ' + caleg[i].riwayat_penghargaan[7].institusi + '<br />');    
            $('#awardhatta').append('Tahun  : ' + caleg[i].riwayat_penghargaan[7].tanggal  + '<br />'); 
           
             $('#awardhatta').append('9. Penghargaan  : ' + caleg[i].riwayat_penghargaan[8].ringkasan  + '<br />'); 
            $('#awardhatta').append('Institusi  : ' + caleg[i].riwayat_penghargaan[8].institusi  + '<br />');   
            $('#awardhatta').append('Tahun  : ' + caleg[i].riwayat_penghargaan[8].tanggal  + '<br />'); 
           
            $('#awardhatta').append('10. Penghargaan  : ' + caleg[i].riwayat_penghargaan[9].ringkasan  + '<br />'); 
            $('#awardhatta').append('Institusi  : ' + caleg[i].riwayat_penghargaan[9].institusi + '<br />');    
            $('#awardhatta').append('Tahun  : ' + caleg[i].riwayat_penghargaan[9].tanggal  + '<br />'); 
          
      });                        
    }
});

// ************************PENDIDIKAN JOKOWI id edujokowi************************
$.ajax({
    url: "http://api.pemiluapi.org/calonpresiden/api/caleg/jw?apiKey=f9b3ae01cce10bf7be79ab0a6e4a4e3d",                 
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        var caleg = json.data.results.caleg;
        $.each(caleg, function(i, item) {
            $('#edujokowi').append('1 SD  : ' + caleg[i].riwayat_pendidikan[0].ringkasan  + '<br />');  
            $('#edujokowi').append('Awal Pendidikan  : ' + caleg[i].riwayat_pendidikan[0].tanggal_mulai  + '<br />');   
            $('#edujokowi').append('Akhir Penedidikan : ' + caleg[i].riwayat_pendidikan[0].tanggal_selesai  + '<br />');    
            
             $('#edujokowi').append('2. SMP  : ' + caleg[i].riwayat_pendidikan[1].ringkasan  + '<br />');   
            $('#edujokowi').append('Awal Pendidikan  : ' + caleg[i].riwayat_pendidikan[1].tanggal_mulai  + '<br />');   
            $('#edujokowi').append('Akhir Penedidikan : ' + caleg[i].riwayat_pendidikan[1].tanggal_selesai  + '<br />');    
            
             $('#edujokowi').append('3. SMA  : ' + caleg[i].riwayat_pendidikan[2].ringkasan  + '<br />');   
            $('#edujokowi').append('Awal Pendidikan  : ' + caleg[i].riwayat_pendidikan[2].tanggal_mulai  + '<br />');   
            $('#edujokowi').append('Akhir Penedidikan : ' + caleg[i].riwayat_pendidikan[2].tanggal_selesai  + '<br />');    
            
             $('#edujokowi').append('4. Kuliah : ' + caleg[i].riwayat_pendidikan[3].ringkasan  + '<br />'); 
            $('#edujokowi').append('Awal Pendidikan  : ' + caleg[i].riwayat_pendidikan[3].tanggal_mulai  + '<br />');   
            $('#edujokowi').append('Akhir Penedidikan : ' + caleg[i].riwayat_pendidikan[3].tanggal_selesai  + '<br />');    
        });                      
    }
});

// ************************PENDIDIKAN PRABOWO id eduprabowo************************
$.ajax({
    url: "http://api.pemiluapi.org/calonpresiden/api/caleg/ps?apiKey=f9b3ae01cce10bf7be79ab0a6e4a4e3d",                 
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        var caleg = json.data.results.caleg;
        $.each(caleg, function(i, item) {
            $('#eduprabowo').append('1 SD  : ' + caleg[i].riwayat_pendidikan[0].ringkasan  + '<br />' + '<br />');  
            $('#eduprabowo').append('Awal Pendidikan  : ' + caleg[i].riwayat_pendidikan[0].tanggal_mulai  + '<br />' + '<br />');   
            $('#eduprabowo').append('Akhir Penedidikan : ' + caleg[i].riwayat_pendidikan[0].tanggal_selesai  + '<br />' + '<br />'+ '<br />');  
            
             $('#eduprabowo').append('2. SMP  : ' + caleg[i].riwayat_pendidikan[1].ringkasan  + '<br />' + '<br />');   
            $('#eduprabowo').append('Awal Pendidikan  : ' + caleg[i].riwayat_pendidikan[1].tanggal_mulai  + '<br />' + '<br />');   
            $('#eduprabowo').append('Akhir Penedidikan : ' + caleg[i].riwayat_pendidikan[1].tanggal_selesai  + '<br />' + '<br />'+ '<br />');  
            
             $('#eduprabowo').append('3. SMA  : ' + caleg[i].riwayat_pendidikan[2].ringkasan  + '<br />' + '<br />');   
            $('#eduprabowo').append('Awal Pendidikan  : ' + caleg[i].riwayat_pendidikan[2].tanggal_mulai  + '<br />' + '<br />');   
            $('#eduprabowo').append('Akhir Penedidikan : ' + caleg[i].riwayat_pendidikan[2].tanggal_selesai  + '<br />' + '<br />'+ '<br />');  
            
             $('#eduprabowo').append('4. Kuliah : ' + caleg[i].riwayat_pendidikan[3].ringkasan  + '<br />' + '<br />'); 
            $('#eduprabowo').append('Awal Pendidikan  : ' + caleg[i].riwayat_pendidikan[3].tanggal_mulai  + '<br />' + '<br />');   
            $('#eduprabowo').append('Akhir Penedidikan : ' + caleg[i].riwayat_pendidikan[3].tanggal_selesai  + '<br />' + '<br />');        
        });                      
    }
});
// ************************PENDIDIKAN HATTARA JASSA id eduhatta************************
$.ajax({
            url: "http://api.pemiluapi.org/calonpresiden/api/caleg/hr?apiKey=f9b3ae01cce10bf7be79ab0a6e4a4e3d",                 
            dataType: "text",
            success: function(data) {
                var json = $.parseJSON(data);
                var caleg = json.data.results.caleg;
                $.each(caleg, function(i, item) {
                    $('#eduhatta').append('1 SD  : ' + caleg[i].riwayat_pendidikan[0].ringkasan  + '<br />' + '<br />');    
                    $('#eduhatta').append('Awal Pendidikan  : ' + caleg[i].riwayat_pendidikan[0].tanggal_mulai  + '<br />' + '<br />'); 
                    $('#eduhatta').append('Akhir Penedidikan : ' + caleg[i].riwayat_pendidikan[0].tanggal_selesai  + '<br />' + '<br />'+ '<br />');    
                    
                     $('#eduhatta').append('2. SMP  : ' + caleg[i].riwayat_pendidikan[1].ringkasan  + '<br />' + '<br />'); 
                    $('#eduhatta').append('Awal Pendidikan  : ' + caleg[i].riwayat_pendidikan[1].tanggal_mulai  + '<br />' + '<br />'); 
                    $('#eduhatta').append('Akhir Penedidikan : ' + caleg[i].riwayat_pendidikan[1].tanggal_selesai  + '<br />' + '<br />'+ '<br />');    
                    
                     $('#eduhatta').append('3. SMA  : ' + caleg[i].riwayat_pendidikan[2].ringkasan  + '<br />' + '<br />'); 
                    $('#eduhatta').append('Awal Pendidikan  : ' + caleg[i].riwayat_pendidikan[2].tanggal_mulai  + '<br />' + '<br />'); 
                    $('#eduhatta').append('Akhir Penedidikan : ' + caleg[i].riwayat_pendidikan[2].tanggal_selesai  + '<br />' + '<br />'+ '<br />');    
                    
                     $('#eduhatta').append('4. Kuliah : ' + caleg[i].riwayat_pendidikan[3].ringkasan  + '<br />' + '<br />');   
                    $('#eduhatta').append('Awal Pendidikan  : ' + caleg[i].riwayat_pendidikan[3].tanggal_mulai  + '<br />' + '<br />'); 
                    $('#eduhatta').append('Akhir Penedidikan : ' + caleg[i].riwayat_pendidikan[3].tanggal_selesai  + '<br />' + '<br />');     
                });                      
            }
        });

// ************************PENDIDIKAN JK id edujk************************
$.ajax({
    url: "http://api.pemiluapi.org/calonpresiden/api/caleg/jk?apiKey=f9b3ae01cce10bf7be79ab0a6e4a4e3d",                 
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        var caleg = json.data.results.caleg;
        $.each(caleg, function(i, item) {
            $('#edujk').append('1 SD  : ' + caleg[i].riwayat_pendidikan[0].ringkasan  + '<br />' + '<br />');   
            $('#edujk').append('Awal Pendidikan  : ' + caleg[i].riwayat_pendidikan[0].tanggal_mulai  + '<br />' + '<br />');    
            $('#edujk').append('Akhir Penedidikan : ' + caleg[i].riwayat_pendidikan[0].tanggal_selesai  + '<br />' + '<br />'+ '<br />');   
            
             $('#edujk').append('2. SMP  : ' + caleg[i].riwayat_pendidikan[1].ringkasan  + '<br />' + '<br />');    
            $('#edujk').append('Awal Pendidikan  : ' + caleg[i].riwayat_pendidikan[1].tanggal_mulai  + '<br />' + '<br />');    
            $('#edujk').append('Akhir Penedidikan : ' + caleg[i].riwayat_pendidikan[1].tanggal_selesai  + '<br />' + '<br />'+ '<br />');   
            
             $('#edujk').append('3. SMA  : ' + caleg[i].riwayat_pendidikan[2].ringkasan  + '<br />' + '<br />');    
            $('#edujk').append('Awal Pendidikan  : ' + caleg[i].riwayat_pendidikan[2].tanggal_mulai  + '<br />' + '<br />');    
            $('#edujk').append('Akhir Penedidikan : ' + caleg[i].riwayat_pendidikan[2].tanggal_selesai  + '<br />' + '<br />'+ '<br />');   
            
             $('#edujk').append('4. Kuliah : ' + caleg[i].riwayat_pendidikan[3].ringkasan  + '<br />' + '<br />');  
            $('#edujk').append('Awal Pendidikan  : ' + caleg[i].riwayat_pendidikan[3].tanggal_mulai  + '<br />' + '<br />');    
            $('#edujk').append('Akhir Penedidikan : ' + caleg[i].riwayat_pendidikan[3].tanggal_selesai  + '<br />' + '<br />');
        });                      
    }
});

// ************************ORGANISASI JOKOWI id orgjokowi************************
$.ajax({
    url: "http://api.pemiluapi.org/calonpresiden/api/caleg/jw?apiKey=f9b3ae01cce10bf7be79ab0a6e4a4e3d",                 
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        var caleg = json.data.results.caleg;
        $.each(caleg, function(i, item) {
            $('#orgjokowi').append('1. Organisasi  : ' + caleg[i].riwayat_organisasi[0].ringkasan  + '<br />' + '<br />');  
            $('#orgjokowi').append('Jabatan  : ' + caleg[i].riwayat_organisasi[0].jabatan  + '<br />' + '<br />');  
            $('#orgjokowi').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[0].tanggal_mulai  + '<br />' + '<br />');  
            $('#orgjokowi').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[0].tanggal_selesai  + '<br />' + '<br />'+ '<br />'); 
            
             $('#orgjokowi').append('2. Organisasi  : ' + caleg[i].riwayat_organisasi[1].ringkasan  + '<br />' + '<br />'); 
            $('#orgjokowi').append('Jabatan  : ' + caleg[i].riwayat_organisasi[1].jabatan  + '<br />' + '<br />');  
            $('#orgjokowi').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[1].tanggal_mulai  + '<br />' + '<br />');  
            $('#orgjokowi').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[1].tanggal_selesai  + '<br />' + '<br />'+ '<br />');
            
            
      });                        
    }
});
// ************************ORGANISASI PRABOWO id orgprabowo************************
$.ajax({
    url: "http://api.pemiluapi.org/calonpresiden/api/caleg/ps?apiKey=f9b3ae01cce10bf7be79ab0a6e4a4e3d",                 
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        var caleg = json.data.results.caleg;
        $.each(caleg, function(i, item) {
            $('#orgprabowo').append('1. Organisasi  : ' + caleg[i].riwayat_organisasi[0].ringkasan  + '<br />' + '<br />'); 
            $('#orgprabowo').append('Jabatan  : ' + caleg[i].riwayat_organisasi[0].jabatan  + '<br />' + '<br />'); 
            $('#orgprabowo').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[0].tanggal_mulai  + '<br />' + '<br />'); 
            $('#orgprabowo').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[0].tanggal_selesai  + '<br />' + '<br />'+ '<br />');    
            
             $('#orgprabowo').append('2. Organisasi  : ' + caleg[i].riwayat_organisasi[1].ringkasan  + '<br />' + '<br />');    
            $('#orgprabowo').append('Jabatan  : ' + caleg[i].riwayat_organisasi[1].jabatan  + '<br />' + '<br />'); 
            $('#orgprabowo').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[1].tanggal_mulai  + '<br />' + '<br />'); 
            $('#orgprabowo').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[1].tanggal_selesai  + '<br />' + '<br />'+ '<br />');
            
             $('#orgprabowo').append('3. Organisasi  : ' + caleg[i].riwayat_organisasi[2].ringkasan  + '<br />' + '<br />');    
            $('#orgprabowo').append('Jabatan  : ' + caleg[i].riwayat_organisasi[2].jabatan  + '<br />' + '<br />'); 
            $('#orgprabowo').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[2].tanggal_mulai  + '<br />' + '<br />'); 
            $('#orgprabowo').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[2].tanggal_selesai  + '<br />' + '<br />'+ '<br />');
            
             $('#orgprabowo').append('4. Organisasi  : ' + caleg[i].riwayat_organisasi[3].ringkasan  + '<br />' + '<br />');    
            $('#orgprabowo').append('Jabatan  : ' + caleg[i].riwayat_organisasi[3].jabatan  + '<br />' + '<br />'); 
            $('#orgprabowo').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[3].tanggal_mulai  + '<br />' + '<br />'); 
            $('#orgprabowo').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[3].tanggal_selesai  + '<br />' + '<br />'+ '<br />');
            
             $('#orgprabowo').append('5. Organisasi  : ' + caleg[i].riwayat_organisasi[4].ringkasan  + '<br />' + '<br />');    
            $('#orgprabowo').append('Jabatan  : ' + caleg[i].riwayat_organisasi[4].jabatan  + '<br />' + '<br />'); 
            $('#orgprabowo').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[4].tanggal_mulai  + '<br />' + '<br />'); 
            $('#orgprabowo').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[4].tanggal_selesai  + '<br />' + '<br />'+ '<br />');
            
            
      });                        
    }
});
// ************************ORGANISASI HATTARA JASA id orghatta************************
$.ajax({
    url: "http://api.pemiluapi.org/calonpresiden/api/caleg/hr?apiKey=f9b3ae01cce10bf7be79ab0a6e4a4e3d",                 
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        var caleg = json.data.results.caleg;
        $.each(caleg, function(i, item) {
            $('#orghatta').append('1. Organisasi  : ' + caleg[i].riwayat_organisasi[0].ringkasan  + '<br />' + '<br />');   
            $('#orghatta').append('Jabatan  : ' + caleg[i].riwayat_organisasi[0].jabatan  + '<br />' + '<br />');   
            $('#orghatta').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[0].tanggal_mulai  + '<br />' + '<br />');   
            $('#orghatta').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[0].tanggal_selesai  + '<br />' + '<br />'+ '<br />');  
            
             $('#orghatta').append('2. Organisasi  : ' + caleg[i].riwayat_organisasi[1].ringkasan  + '<br />' + '<br />');  
            $('#orghatta').append('Jabatan  : ' + caleg[i].riwayat_organisasi[1].jabatan  + '<br />' + '<br />');   
            $('#orghatta').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[1].tanggal_mulai  + '<br />' + '<br />');   
            $('#orghatta').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[1].tanggal_selesai  + '<br />' + '<br />'+ '<br />');
            
             $('#orghatta').append('3. Organisasi  : ' + caleg[i].riwayat_organisasi[2].ringkasan  + '<br />' + '<br />');  
            $('#orghatta').append('Jabatan  : ' + caleg[i].riwayat_organisasi[2].jabatan  + '<br />' + '<br />');   
            $('#orghatta').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[2].tanggal_mulai  + '<br />' + '<br />');   
            $('#orghatta').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[2].tanggal_selesai  + '<br />' + '<br />'+ '<br />');
            
             $('#orghatta').append('4. Organisasi  : ' + caleg[i].riwayat_organisasi[3].ringkasan  + '<br />' + '<br />');  
            $('#orghatta').append('Jabatan  : ' + caleg[i].riwayat_organisasi[3].jabatan  + '<br />' + '<br />');   
            $('#orghatta').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[3].tanggal_mulai  + '<br />' + '<br />');   
            $('#orghatta').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[3].tanggal_selesai  + '<br />' + '<br />'+ '<br />');
            
             $('#orghatta').append('5. Organisasi  : ' + caleg[i].riwayat_organisasi[4].ringkasan  + '<br />' + '<br />');  
            $('#orghatta').append('Jabatan  : ' + caleg[i].riwayat_organisasi[4].jabatan  + '<br />' + '<br />');   
            $('#orghatta').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[4].tanggal_mulai  + '<br />' + '<br />');   
            $('#orghatta').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[4].tanggal_selesai  + '<br />' + '<br />'+ '<br />');
            
             $('#orghatta').append('6. Organisasi  : ' + caleg[i].riwayat_organisasi[5].ringkasan  + '<br />' + '<br />');  
            $('#orghatta').append('Jabatan  : ' + caleg[i].riwayat_organisasi[5].jabatan  + '<br />' + '<br />');   
            $('#orghatta').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[5].tanggal_mulai  + '<br />' + '<br />');   
            $('#orghatta').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[5].tanggal_selesai  + '<br />' + '<br />'+ '<br />');  
            
             $('#orghatta').append('7. Organisasi  : ' + caleg[i].riwayat_organisasi[6].ringkasan  + '<br />' + '<br />');  
            $('#orghatta').append('Jabatan  : ' + caleg[i].riwayat_organisasi[6].jabatan  + '<br />' + '<br />');   
            $('#orghatta').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[6].tanggal_mulai  + '<br />' + '<br />');   
            $('#orghatta').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[6].tanggal_selesai  + '<br />' + '<br />'+ '<br />');
            
             $('#orghatta').append('8. Organisasi  : ' + caleg[i].riwayat_organisasi[7].ringkasan  + '<br />' + '<br />');  
            $('#orghatta').append('Jabatan  : ' + caleg[i].riwayat_organisasi[7].jabatan  + '<br />' + '<br />');   
            $('#orghatta').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[7].tanggal_mulai  + '<br />' + '<br />');   
            $('#orghatta').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[7].tanggal_selesai  + '<br />' + '<br />'+ '<br />');
            
             $('#orghatta').append('9. Organisasi  : ' + caleg[i].riwayat_organisasi[8].ringkasan  + '<br />' + '<br />');  
            $('#orghatta').append('Jabatan  : ' + caleg[i].riwayat_organisasi[8].jabatan  + '<br />' + '<br />');   
            $('#orghatta').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[8].tanggal_mulai  + '<br />' + '<br />');   
            $('#orghatta').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[8].tanggal_selesai  + '<br />' + '<br />'+ '<br />');
            
             $('#orghatta').append('10. Organisasi  : ' + caleg[i].riwayat_organisasi[9].ringkasan  + '<br />' + '<br />'); 
            $('#orghatta').append('Jabatan  : ' + caleg[i].riwayat_organisasi[9].jabatan  + '<br />' + '<br />');   
            $('#orghatta').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[9].tanggal_mulai  + '<br />' + '<br />');   
            $('#orghatta').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[9].tanggal_selesai  + '<br />' + '<br />'+ '<br />');  
      });                        
    }
});
// ************************ORGANISASI JK id orgjk************************
$.ajax({
    url: "http://api.pemiluapi.org/calonpresiden/api/caleg/jk?apiKey=f9b3ae01cce10bf7be79ab0a6e4a4e3d",                 
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        var caleg = json.data.results.caleg;
        $.each(caleg, function(i, item) {
            $('#orgjk').append('1. Organisasi  : ' + caleg[i].riwayat_organisasi[0].ringkasan  + '<br />' + '<br />');  
            $('#orgjk').append('Jabatan  : ' + caleg[i].riwayat_organisasi[0].jabatan  + '<br />' + '<br />');  
            $('#orgjk').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[0].tanggal_mulai  + '<br />' + '<br />');  
            $('#orgjk').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[0].tanggal_selesai  + '<br />' + '<br />'+ '<br />'); 
            
             $('#orgjk').append('2. Organisasi  : ' + caleg[i].riwayat_organisasi[1].ringkasan  + '<br />' + '<br />'); 
            $('#orgjk').append('Jabatan  : ' + caleg[i].riwayat_organisasi[1].jabatan  + '<br />' + '<br />');  
            $('#orgjk').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[1].tanggal_mulai  + '<br />' + '<br />');  
            $('#orgjk').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[1].tanggal_selesai  + '<br />' + '<br />'+ '<br />');
            
             $('#orgjk').append('3. Organisasi  : ' + caleg[i].riwayat_organisasi[2].ringkasan  + '<br />' + '<br />'); 
            $('#orgjk').append('Jabatan  : ' + caleg[i].riwayat_organisasi[2].jabatan  + '<br />' + '<br />');  
            $('#orgjk').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[2].tanggal_mulai  + '<br />' + '<br />');  
            $('#orgjk').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[2].tanggal_selesai  + '<br />' + '<br />'+ '<br />');
            
             $('#orgjk').append('4. Organisasi  : ' + caleg[i].riwayat_organisasi[3].ringkasan  + '<br />' + '<br />'); 
            $('#orgjk').append('Jabatan  : ' + caleg[i].riwayat_organisasi[3].jabatan  + '<br />' + '<br />');  
            $('#orgjk').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[3].tanggal_mulai  + '<br />' + '<br />');  
            $('#orgjk').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[3].tanggal_selesai  + '<br />' + '<br />'+ '<br />');
            
             $('#orgjk').append('5. Organisasi  : ' + caleg[i].riwayat_organisasi[4].ringkasan  + '<br />' + '<br />'); 
            $('#orgjk').append('Jabatan  : ' + caleg[i].riwayat_organisasi[4].jabatan  + '<br />' + '<br />');  
            $('#orgjk').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[4].tanggal_mulai  + '<br />' + '<br />');  
            $('#orgjk').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[4].tanggal_selesai  + '<br />' + '<br />'+ '<br />');
            
             $('#orgjk').append('6. Organisasi  : ' + caleg[i].riwayat_organisasi[5].ringkasan  + '<br />' + '<br />'); 
            $('#orgjk').append('Jabatan  : ' + caleg[i].riwayat_organisasi[5].jabatan  + '<br />' + '<br />');  
            $('#orgjk').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[5].tanggal_mulai  + '<br />' + '<br />');  
            $('#orgjk').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[5].tanggal_selesai  + '<br />' + '<br />'+ '<br />'); 
            
             $('#orgjk').append('7. Organisasi  : ' + caleg[i].riwayat_organisasi[6].ringkasan  + '<br />' + '<br />'); 
            $('#orgjk').append('Jabatan  : ' + caleg[i].riwayat_organisasi[6].jabatan  + '<br />' + '<br />');  
            $('#orgjk').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[6].tanggal_mulai  + '<br />' + '<br />');  
            $('#orgjk').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[6].tanggal_selesai  + '<br />' + '<br />'+ '<br />');
            
             $('#orgjk').append('8. Organisasi  : ' + caleg[i].riwayat_organisasi[7].ringkasan  + '<br />' + '<br />'); 
            $('#orgjk').append('Jabatan  : ' + caleg[i].riwayat_organisasi[7].jabatan  + '<br />' + '<br />');  
            $('#orgjk').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[7].tanggal_mulai  + '<br />' + '<br />');  
            $('#orgjk').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[7].tanggal_selesai  + '<br />' + '<br />'+ '<br />');
            
             $('#orgjk').append('9. Organisasi  : ' + caleg[i].riwayat_organisasi[8].ringkasan  + '<br />' + '<br />'); 
            $('#orgjk').append('Jabatan  : ' + caleg[i].riwayat_organisasi[8].jabatan  + '<br />' + '<br />');  
            $('#orgjk').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[8].tanggal_mulai  + '<br />' + '<br />');  
            $('#orgjk').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[8].tanggal_selesai  + '<br />' + '<br />'+ '<br />');
            
             $('#orgjk').append('10. Organisasi  : ' + caleg[i].riwayat_organisasi[9].ringkasan  + '<br />' + '<br />');    
            $('#orgjk').append('Jabatan  : ' + caleg[i].riwayat_organisasi[9].jabatan  + '<br />' + '<br />');  
            $('#orgjk').append('Awal Menjabat  : ' + caleg[i].riwayat_organisasi[9].tanggal_mulai  + '<br />' + '<br />');  
            $('#orgjk').append('Akhir Menjabat  : ' + caleg[i].riwayat_organisasi[9].tanggal_selesai  + '<br />' + '<br />'+ '<br />');
            
            
      });                        
    }
});
// ************************JANJI JOKOWI id janjijokowi************************
$.ajax({
    url: "http://api.pemiluapi.org/calonpresiden/api/promises?apiKey=f9b3ae01cce10bf7be79ab0a6e4a4e3d&id_calon=jw",                 
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        var promises = json.data.results.promises;
        $.each(promises, function(i, item) {
            $('#janjijokowi').append('<strong>' + promises[i].context_janji  + '</strong>' + '<br />'+ '<br />');   
            $('#janjijokowi').append('Janji Beliau  : ' + promises[i].janji  + '<br />'); 
            $('#janjijokowi').append('<small> Sumber  : ' +  promises[i].url_sumber  + '</small>' + '<br />');    
            $('#janjijokowi').append('Tanggal  : ' + promises[i].tanggal + '<br />');
            $('#janjijokowi').append('<hr size = 5% noshade color:#333>');         
      });                        
    }
});
// ************************JANJI PRABOWO id janjiprabowo************************
$.ajax({
    url: "http://api.pemiluapi.org/calonpresiden/api/promises?apiKey=f9b3ae01cce10bf7be79ab0a6e4a4e3d&id_calon=ps",                 
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        var promises = json.data.results.promises;
        $.each(promises, function(i, item) {
            $('#janjiprabowo').append('<strong>' + promises[i].context_janji  + '</strong>' + '<br />'+ '<br />');  
            $('#janjiprabowo').append('Janji Beliau  : ' + promises[i].janji  + '<br />');    
            $('#janjiprabowo').append('<small>Sumber  : ' +  promises[i].url_sumber  + '</small>' + '<br />');   
            $('#janjiprabowo').append('Tanggal  : ' + promises[i].tanggal + '<br />');
            $('#janjiprabowo').append('<hr size = 5% noshade>');    
            
          
      });                        
    }
});
// ************************JANJI HATTA id janjihatta************************
$.ajax({
    url: "http://api.pemiluapi.org/calonpresiden/api/promises?apiKey=f9b3ae01cce10bf7be79ab0a6e4a4e3d&id_calon=hr",                 
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        var promises = json.data.results.promises;
        $.each(promises, function(i, item) {
            $('#janjihatta').append('<strong>' + promises[i].context_janji  + '</strong>' + '<br />'+ '<br />');    
            $('#janjihatta').append('Janji Beliau  : ' + promises[i].janji  + '<br />');  
            $('#janjihatta').append('<small>Sumber  : ' +  promises[i].url_sumber  + '</small>' + '<br />'); 
            $('#janjihatta').append('Tanggal  : ' + promises[i].tanggal + '<br />'); 
            $('#janjihatta').append('<hr size = 5% noshade>');
      });                        
    }
});
// ************************JANJI JK id janjijk************************
$.ajax({
    url: "http://api.pemiluapi.org/calonpresiden/api/promises?apiKey=f9b3ae01cce10bf7be79ab0a6e4a4e3d&id_calon=jk",                 
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        var promises = json.data.results.promises;
        $.each(promises, function(i, item) {
            $('#janjijk').append('<strong>' + promises[i].context_janji  + '</strong>' + '<br />'+ '<br />');   
            $('#janjijk').append('Janji Beliau  : ' + promises[i].janji  + '<br />' + '<br />'+ '<br />'); 
            $('#janjijk').append('<small>Sumber  : ' +  promises[i].url_sumber  + '</small>' + '<br />');    
            $('#janjijk').append('Tanggal  : ' + promises[i].tanggal + '<br />');
            $('#janjijk').append('<hr size = 5% noshade>');
      });                        
    }
});

// ************************PEKERJAAN JOKOWI id kerjajokowi************************
$.ajax({
    url: "http://api.pemiluapi.org/calonpresiden/api/caleg/jw?apiKey=f9b3ae01cce10bf7be79ab0a6e4a4e3d",                 
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        var caleg = json.data.results.caleg;
        $.each(caleg, function(i, item) {
            $('#kerjajokowi').append('1. Jabatan  : ' + caleg[i].riwayat_pekerjaan[0].ringkasan  + '<br />');    
            $('#kerjajokowi').append('Karier  : ' + caleg[i].riwayat_pekerjaan[0].tanggal_mulai);   
            $('#kerjajokowi').append(' - ' + caleg[i].riwayat_pekerjaan[0].tanggal_selesai  +'<br />' + '<br />');    
            
            $('#kerjajokowi').append('2. Jabatan  : ' + caleg[i].riwayat_pekerjaan[1].ringkasan  + '<br />');    
            $('#kerjajokowi').append('<small>Karier  : ' + caleg[i].riwayat_pekerjaan[1].tanggal_mulai +' - ' + caleg[i].riwayat_pekerjaan[1].tanggal_selesai  + '</small>'+ '<br />' + '<br />'); 
            
            $('#kerjajokowi').append('3. Jabatan  : ' + caleg[i].riwayat_pekerjaan[2].ringkasan  + '<br />');    
            $('#kerjajokowi').append('Karier  : ' + caleg[i].riwayat_pekerjaan[2].tanggal_mulai);   
            $('#kerjajokowi').append(' - ' + caleg[i].riwayat_pekerjaan[2].tanggal_selesai  + '<br />' + '<br />');    
            
            $('#kerjajokowi').append('4. Jabatan  : ' + caleg[i].riwayat_pekerjaan[3].ringkasan  +'<br />');    
            $('#kerjajokowi').append('Karier  : ' + caleg[i].riwayat_pekerjaan[3].tanggal_mulai);   
            $('#kerjajokowi').append(' - ' + caleg[i].riwayat_pekerjaan[3].tanggal_selesai  + '<br />' + '<br />');    
            
        });                      
    }
});
// ************************PEKERJAAN PRABOWO id kerjaprabowo************************
$.ajax({
    url: "http://api.pemiluapi.org/calonpresiden/api/caleg/ps?apiKey=f9b3ae01cce10bf7be79ab0a6e4a4e3d",                 
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        var caleg = json.data.results.caleg;
        $.each(caleg, function(i, item) {
            $('#kerjaprabowo').append('1. Jabatan  : ' + caleg[i].riwayat_pekerjaan[0].ringkasan  + '<br />');   
            $('#kerjaprabowo').append('Karier  : ' + caleg[i].riwayat_pekerjaan[0].tanggal_mulai);  
            $('#kerjaprabowo').append(' - ' + caleg[i].riwayat_pekerjaan[0].tanggal_selesai  + '<br />' + '<br />');   
            
            $('#kerjaprabowo').append('2. Jabatan  : ' + caleg[i].riwayat_pekerjaan[1].ringkasan  + '<br />');   
            $('#kerjaprabowo').append('Karier: ' + caleg[i].riwayat_pekerjaan[1].tanggal_mulai);  
            $('#kerjaprabowo').append(' - ' + caleg[i].riwayat_pekerjaan[1].tanggal_selesai  + '<br />' + '<br />');   
            
            $('#kerjaprabowo').append('3. Jabatan  : ' + caleg[i].riwayat_pekerjaan[2].ringkasan  + '<br />');   
            $('#kerjaprabowo').append('Karier: ' + caleg[i].riwayat_pekerjaan[2].tanggal_mulai);  
            $('#kerjaprabowo').append(' - ' + caleg[i].riwayat_pekerjaan[2].tanggal_selesai  + '<br />' + '<br />');   
            
            $('#kerjaprabowo').append('4. Jabatan  : ' + caleg[i].riwayat_pekerjaan[3].ringkasan  + '<br />');   
            $('#kerjaprabowo').append('Karier: ' + caleg[i].riwayat_pekerjaan[3].tanggal_mulai);  
            $('#kerjaprabowo').append(' - ' + caleg[i].riwayat_pekerjaan[3].tanggal_selesai  + '<br />' + '<br />');   
            
             $('#kerjaprabowo').append('5. Jabatan  : ' + caleg[i].riwayat_pekerjaan[4].ringkasan  + '<br />' );  
            $('#kerjaprabowo').append('Karier: ' + caleg[i].riwayat_pekerjaan[4].tanggal_mulai);  
            $('#kerjaprabowo').append(' - ' + caleg[i].riwayat_pekerjaan[4].tanggal_selesai  + '<br />' + '<br />');   
            
            $('#kerjaprabowo').append('6. Jabatan  : ' + caleg[i].riwayat_pekerjaan[5].ringkasan  + '<br />');   
            $('#kerjaprabowo').append('Karier: ' + caleg[i].riwayat_pekerjaan[5].tanggal_mulai);  
            $('#kerjaprabowo').append(' - ' + caleg[i].riwayat_pekerjaan[5].tanggal_selesai  + '<br />' + '<br />');   
            
            $('#kerjaprabowo').append('7. Jabatan  : ' + caleg[i].riwayat_pekerjaan[6].ringkasan  + '<br />');   
            $('#kerjaprabowo').append('Karier: ' + caleg[i].riwayat_pekerjaan[6].tanggal_mulai);  
            $('#kerjaprabowo').append(' - ' + caleg[i].riwayat_pekerjaan[6].tanggal_selesai  + '<br />' + '<br />');   
            
            $('#kerjaprabowo').append('8. Jabatan  : ' + caleg[i].riwayat_pekerjaan[7].ringkasan  + '<br />');   
            $('#kerjaprabowo').append('Karier: ' + caleg[i].riwayat_pekerjaan[7].tanggal_mulai);  
            $('#kerjaprabowo').append(' - ' + caleg[i].riwayat_pekerjaan[7].tanggal_selesai  + '<br />' + '<br />');   
            
            $('#kerjaprabowo').append('9. Jabatan  : ' + caleg[i].riwayat_pekerjaan[8].ringkasan  + '<br />');   
            $('#kerjaprabowo').append('Karier: ' + caleg[i].riwayat_pekerjaan[8].tanggal_mulai);  
            $('#kerjaprabowo').append(' - ' + caleg[i].riwayat_pekerjaan[8].tanggal_selesai  + '<br />' + '<br />');   
            
            $('#kerjaprabowo').append('10. Jabatan  : ' + caleg[i].riwayat_pekerjaan[9].ringkasan  + '<br />');  
            $('#kerjaprabowo').append('Karier: ' + caleg[i].riwayat_pekerjaan[9].tanggal_mulai);  
            $('#kerjaprabowo').append(' - ' + caleg[i].riwayat_pekerjaan[9].tanggal_selesai  + '<br />' + '<br />');   
            
        });                      
    }
});
// ************************PEKERJAAN HATTARA JASA id kerjahatta************************
$.ajax({
    url: "http://api.pemiluapi.org/calonpresiden/api/caleg/hr?apiKey=f9b3ae01cce10bf7be79ab0a6e4a4e3d",                 
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        var caleg = json.data.kerjahattas.caleg;
        $.each(caleg, function(i, item) {
             $('#kerjahatta').append('1. Jabatan  : ' + caleg[i].riwayat_pekerjaan[0].ringkasan  + '<br />');    
            $('#kerjahatta').append('Karier: ' + caleg[i].riwayat_pekerjaan[0].tanggal_mulai);    
            $('#kerjahatta').append(' - ' + caleg[i].riwayat_pekerjaan[0].tanggal_selesai  + '<br />' + '<br />'); 
            
            $('#kerjahatta').append('2. Jabatan  : ' + caleg[i].riwayat_pekerjaan[1].ringkasan  + '<br />'); 
            $('#kerjahatta').append('Karier: ' + caleg[i].riwayat_pekerjaan[1].tanggal_mulai);    
            $('#kerjahatta').append(' - ' + caleg[i].riwayat_pekerjaan[1].tanggal_selesai  + '<br />' + '<br />'); 
            
            $('#kerjahatta').append('3. Jabatan  : ' + caleg[i].riwayat_pekerjaan[2].ringkasan  + '<br />'); 
            $('#kerjahatta').append('Karier: ' + caleg[i].riwayat_pekerjaan[2].tanggal_mulai);    
            $('#kerjahatta').append(' - ' + caleg[i].riwayat_pekerjaan[2].tanggal_selesai  + '<br />' + '<br />'); 
            
            $('#kerjahatta').append('4. Jabatan  : ' + caleg[i].riwayat_pekerjaan[3].ringkasan + '<br />'); 
            $('#kerjahatta').append('Karier: ' + caleg[i].riwayat_pekerjaan[3].tanggal_mulai);    
            $('#kerjahatta').append(' - ' + caleg[i].riwayat_pekerjaan[3].tanggal_selesai  + '<br />' + '<br />'); 
            
             $('#kerjahatta').append('5. Jabatan  : ' + caleg[i].riwayat_pekerjaan[4].ringkasan  + '<br />');    
            $('#kerjahatta').append('Karier: ' + caleg[i].riwayat_pekerjaan[4].tanggal_mulai);    
            $('#kerjahatta').append(' - ' + caleg[i].riwayat_pekerjaan[4].tanggal_selesai  + '<br />' + '<br />'); 
            
            $('#kerjahatta').append('6. Jabatan  : ' + caleg[i].riwayat_pekerjaan[5].ringkasan  + '<br />'); 
            $('#kerjahatta').append('Karier: ' + caleg[i].riwayat_pekerjaan[5].tanggal_mulai  );    
            $('#kerjahatta').append(' - ' + caleg[i].riwayat_pekerjaan[5].tanggal_selesai  + '<br />' + '<br />'); 
            
            $('#kerjahatta').append('7. Jabatan  : ' + caleg[i].riwayat_pekerjaan[6].ringkasan  + '<br />'); 
            $('#kerjahatta').append('Karier: ' + caleg[i].riwayat_pekerjaan[6].tanggal_mulai );    
            $('#kerjahatta').append(' - ' + caleg[i].riwayat_pekerjaan[6].tanggal_selesai  + '<br />' + '<br />'); 
            
            $('#kerjahatta').append('8. Jabatan  : ' + caleg[i].riwayat_pekerjaan[7].ringkasan  + '<br />'); 
            $('#kerjahatta').append('Karier: ' + caleg[i].riwayat_pekerjaan[7].tanggal_mulai);    
            $('#kerjahatta').append(' - ' + caleg[i].riwayat_pekerjaan[7].tanggal_selesai  + '<br />' + '<br />'); 
            
            $('#kerjahatta').append('9. Jabatan  : ' + caleg[i].riwayat_pekerjaan[8].ringkasan + '<br />'); 
            $('#kerjahatta').append('Karier: ' + caleg[i].riwayat_pekerjaan[8].tanggal_mulai );    
            $('#kerjahatta').append(' - ' + caleg[i].riwayat_pekerjaan[8].tanggal_selesai  + '<br />' + '<br />'); 
            
            $('#kerjahatta').append('10. Jabatan  : ' + caleg[i].riwayat_pekerjaan[9].ringkasan  + '<br />');    
            $('#kerjahatta').append('Karier: ' + caleg[i].riwayat_pekerjaan[9].tanggal_mulai);    
            $('#kerjahatta').append(' -   : ' + caleg[i].riwayat_pekerjaan[9].tanggal_selesai  + '<br />' + '<br />'); 
            
        });                      
    }
});
// ************************PEKERJAAN JK id kerjajK************************
$.ajax({
    url: "http://api.pemiluapi.org/calonpresiden/api/caleg/jk?apiKey=f9b3ae01cce10bf7be79ab0a6e4a4e3d",                 
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        var caleg = json.data.results.caleg;
        $.each(caleg, function(i, item) {
            $('#kerjajk').append('1. Jabatan  : ' + caleg[i].riwayat_pekerjaan[0].ringkasan + '<br />');    
            $('#kerjajk').append('Karier: ' + caleg[i].riwayat_pekerjaan[0].tanggal_mulai  );   
            $('#kerjajk').append(' - ' + caleg[i].riwayat_pekerjaan[0].tanggal_selesai  + '<br />' + '<br />');    
            
            $('#kerjajk').append('2. Jabatan  : ' + caleg[i].riwayat_pekerjaan[1].ringkasan  + '<br />');    
            $('#kerjajk').append('Karier: ' + caleg[i].riwayat_pekerjaan[1].tanggal_mulai);   
            $('#kerjajk').append(' -   : ' + caleg[i].riwayat_pekerjaan[1].tanggal_selesai  + '<br />' + '<br />');    
            
            $('#kerjajk').append('3. Jabatan  : ' + caleg[i].riwayat_pekerjaan[2].ringkasan  + '<br />');    
            $('#kerjajk').append('Karier: ' + caleg[i].riwayat_pekerjaan[2].tanggal_mulai);   
            $('#kerjajk').append(' -   : ' + caleg[i].riwayat_pekerjaan[2].tanggal_selesai  + '<br />' + '<br />');    
            
            $('#kerjajk').append('4. Jabatan  : ' + caleg[i].riwayat_pekerjaan[3].ringkasan  + '<br />');    
            $('#kerjajk').append('Karier: ' + caleg[i].riwayat_pekerjaan[3].tanggal_mulai );   
            $('#kerjajk').append(' -   : ' + caleg[i].riwayat_pekerjaan[3].tanggal_selesai  + '<br />' + '<br />');    
            
        });                      
    }
});

//event
$.ajax({
    url: "http://api.pemiluapi.org/calonpresiden/api/events?apiKey=f9b3ae01cce10bf7be79ab0a6e4a4e3d",                   
    dataType: "text",
    success: function(data) {
        var json = $.parseJSON(data);
        var caleg = json.data.results.events;
        $.each(caleg, function(i, item) {
            $('#event').append('<strong><h4>Judul Wacana : ' + caleg[i].judul  + '</h4></strong><br />' + '<br />'); 
            $('#event').append('<strong>Deskripsi Wacana  : </strong>' + caleg[i].deskripsi  + '<br />');   
            $('#event').append('<strong>Tanggal Mulai : </strong>' + caleg[i].tanggal_mulai  + '<br />');   
            $('#event').append('<strong>Tanggal Selesai : </strong>' + caleg[i].tanggal_selesai  + '<br />' + '<br /><hr/>');  
        });                      
    }
});
//}