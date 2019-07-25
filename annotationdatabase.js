$(document).ready(function(){
    
    $("#submitDatabase").click(function(){
        return getDatabase();
    });
    
});

function getDatabase(){
    var annotation = $("#annotation").val();
    
    if(annotation != ''){
         
        $.ajax({
            
            url: 'https://api.myjson.com/bins/uee8r' +annotation,
            type: "GET",
            dataType: "json",
            success: function(data){
            
            var table = '';
                
            for(var i = 0; i < data.list.length; i++){
                    table += "<tr>";
                
                    table += "<td>" + data.list[i].path + "</td>";
                    table += "<td>" + data.list[i].type + "</td>";
                    table += "<td>" + data.list[i].name + "</td>";
                    table += "<td>" + data.list[i].version + "</td>";
                    table += "<td>" + data.list[i].reference_genome + "</td>";
                    table += "<td>" + data.list[i].gene_key + "</td>";
                    table += "<td>" + data.list[i].n_rows + "</td>";
                    table += "<td>" + data.list[i].n_cols + "</td>";
                    table += "<td>" + data.list[i].n_partitions + "</td>";
                    
                    table += "</tr>";
                }
                
                $("#annotationData").html(table);
                
                $("#annotation").val('');
            }
        });
    }
}