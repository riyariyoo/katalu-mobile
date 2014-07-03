$(document).ready(function() {

$('#loading').show();

get_data();

function get_data(){
	var AmbilData;
	$.ajax({
				type : 'GET',
				url : 'http://172.16.11.19/kotaksuara/ConnectDB.php',
				async: true,
				beforeSend: function(x) {
					if(x && x.overrideMimeType) {
      					 x.overrideMimeType("application/j-son;charset=UTF-8");
      				}
				},
				dataType : 'json',
				success : function(data){
						AmbilData = data.items;
							$('#loading').hide();
							$('#tampilData').show();
							$.each(AmbilData, function(index, loaddata) {
							$('#dataSuara').append(
								'<li data-role="list-divider" data-theme="a" class="listview-custom"><a onClick="alert(\''+ loaddata.nama_kategori + '\');" data-ajax="false">'+ loaddata.nama_kategori + '</a></li>');
							});
							$('#dataSuara').append(
								'<strong>'+loaddata.pilihan.length +'</strong><p> memilih Prabowo-Hatta'+loaddata.pilihan.length + ' memilih Prabowo-Hatta</p>');
							});
				},
				error: function(jqXHR, exception) {
					$('#loading').hide();
					$('#gagal').show();
				}
		});	
}
	

});









