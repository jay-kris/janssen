'use strict';
$(window).load(function(){ /*This allows to execute your code after the  page is rendered fully */ 
    $.get("get_csvusingphp.json", function(data){
     var barchart1_data = data;
	// console.log(barchart1_data);
	 bargraph1(barchart1_data.barchart_arr,barchart1_data.data_labels);
	 piechart1(barchart1_data.piechart1_arr);
	 piechart2(barchart1_data.piechart2_arr);
	 zytig_data(barchart1_data.zytig_data);
	 xtandi_data(barchart1_data.education_arr);
	 mfs6months(barchart1_data.mfs6months_arr);
	 education(barchart1_data.education_arr);
	 montreal_atten(barchart1_data.montreal_atten);
	 toranto_attend(barchart1_data.toranto_attend);
	 compare_bar(barchart1_data.compare_bar);
	 //console.log(barchart1_data.compare_bar);
    });
})

$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});


function zytig_data(zytig_data_arr) {
    // var text = 'BCP MEDICATIONS SEIZURE, DRUGS,PAIN,BONE,STROKES ANTI-ARRHYTHIMIC,COUMADIN,FALLS DEMENTIA FATIFUE CNS DEPRESSION ACV/CVA DEPRESSED APPETITE IRL (CRF) QT INCREASED';
	var text = zytig_data_arr;
    var lines = text.split(/[,\. ]+/g),
        data = Highcharts.reduce(lines, function (arr, word) {
            var obj = Highcharts.find(arr, function (obj) {
                return obj.name === word;
            });
            if (obj) {
                obj.weight += 1;
            } else {
                obj = {
                    name: word,
                    weight: 1
                };
                arr.push(obj);
            }
            return arr;
        }, []);

    Highcharts.chart('container', {
        series: [{
            type: 'wordcloud',
            data: data,
            name: 'Occurrences'
        }],
        title: {
            text: 'ZYTIGA® (abiraterone)',
            x: 10,
            align: "left"
        }
    });
};


function xtandi_data(xtandi_data_str) {
    //var text = 'WEAK SOCIAL NETWORK SUPER FIT DIABETES VISCERAL METS MOBILITY COMPLIANCE PPI CVD RISK LIVER IMPAIRMENT INCREASED LEFTS/HEPATITIS';
	
	var text = xtandi_data_str;
    var lines = text.split(/[,\. ]+/g),
        data = Highcharts.reduce(lines, function (arr, word) {
            var obj = Highcharts.find(arr, function (obj) {
                return obj.name === word;
            });
            if (obj) {
                obj.weight += 1;
            } else {
                obj = {
                    name: word,
                    weight: 1
                };
                arr.push(obj);
            }
            return arr;
        }, []);

    Highcharts.chart('container1', {
        series: [{
            type: 'wordcloud',
            data: data,
            name: 'Occurrences'
        }],
        title: {
            text: 'XANDI® (enzalutamide)',
            x: 5,
            align: "left"
        }
    });
};

function mfs6months(mfs6months_data) {
    // var text = 'BCP MEDICATIONS SEIZURE, DRUGS,PAIN,BONE,STROKES ANTI-ARRHYTHIMIC,COUMADIN,FALLS DEMENTIA FATIFUE CNS DEPRESSION ACV/CVA DEPRESSED APPETITE IRL (CRF) QT INCREASED';
	var text = mfs6months_data;
    var lines = text.split(/[,\. ]+/g),
        data = Highcharts.reduce(lines, function (arr, word) {
            var obj = Highcharts.find(arr, function (obj) {
                return obj.name === word;
            });
            if (obj) {
                obj.weight += 1;
            } else {
                obj = {
                    name: word,
                    weight: 1
                };
                arr.push(obj);
            }
            return arr;
        }, []);

    Highcharts.chart('6month_div', {
        series: [{
            type: 'wordcloud',
            data: data,
            name: 'Occurrences'
        }],
        title: {
            text: 'MFS',
            x: 10,
            align: "left"
        }
    });
};

function education(education_data) {
    // var text = 'BCP MEDICATIONS SEIZURE, DRUGS,PAIN,BONE,STROKES ANTI-ARRHYTHIMIC,COUMADIN,FALLS DEMENTIA FATIFUE CNS DEPRESSION ACV/CVA DEPRESSED APPETITE IRL (CRF) QT INCREASED';
	var text = education_data;
    var lines = text.split(/[,\. ]+/g),
        data = Highcharts.reduce(lines, function (arr, word) {
            var obj = Highcharts.find(arr, function (obj) {
                return obj.name === word;
            });
            if (obj) {
                obj.weight += 1;
            } else {
                obj = {
                    name: word,
                    weight: 1
                };
                arr.push(obj);
            }
            return arr;
        }, []);

    Highcharts.chart('education_div', {
        series: [{
            type: 'wordcloud',
            data: data,
            name: 'Occurrences'
        }],
        title: {
            text: 'MFS',
            x: 10,
            align: "left"
        }
    });
};
function bargraph1(data,data_labels){ //console.log(data);
    var chart = bb.generate({
		"data": {
			"x":"x",
            "columns": [
            data,
			data_labels
            ],
            "type": "bar",
			"labels":true
        },
        // data: {
            // columns: [
            // data
            // ],
            // type: "bar"
        // },
        color: {
            pattern: [
                "#68dfbf"
            ]
        },
		"grid": {
                    "x": {
                        "show": true
                    },
                    "y": {
                        "show": true
                    }
                },
                "axis": {
                    "x": {
                        "type": "category",
                    }
                },
        bar: {
            width: {
                ratio: 0.5
            }
        },
        bindto: "#BarChart"
    });
};


function piechart1 (piechart1_data) {
    var chart = bb.generate({
        data: {
            columns: piechart1_data,
            type: "pie",
            onclick: function (d, i) { console.log("onclick", d, i); },
            onover: function (d, i) { console.log("onover", d, i); },
            onout: function (d, i) { console.log("onout", d, i); }
        },
        color: {
            pattern: [
                "#1dc2c8",
                "#9788e3",
                "#ffce12",
                "#5aefc7",
            ]
        },
        bindto: "#PieChart"
    });
};


function piechart2(piechart2_data) {
    var chart = bb.generate({
        data: {
            columns: piechart2_data,
            type: "pie",
            onclick: function (d, i) { console.log("onclick", d, i); },
            onover: function (d, i) { console.log("onover", d, i); },
            onout: function (d, i) { console.log("onout", d, i); }
        },
        color: {
            pattern: [
                "#1dc2c8",
                "#ffce12"
            ]
        },
        bindto: "#PieChart1"
    });
};

function montreal_atten(montreal_atten_list){
	jQuery.each( montreal_atten_list, function( i, val ) {
		
		if(val=='Ricardo Rendon'){ 
			$( "#mont_chair1" ).append( '<li><a href="#">'+val+' (Co-chair)</a></li>' );
		}else if(val=='Lorne Aaron'){
			$( "#mont_chair2" ).append( '<li><a href="#">'+val+' (Co-chair)</a></li>' );
		}else{
			$( "#Montreal_Meeting" ).append( '<li><a href="#">'+val+' </a></li>' );
		}
  
});
}

function toranto_attend(toranto_attend_list){
	jQuery.each( toranto_attend_list, function( i, val ) {
		if(val=='Andrew Feifer'){ 
			$( "#tor_chair1" ).append( '<li><a href="#">'+val+' (Co-chair)</a></li>' );
		}else if(val=='Jason Izard'){
			$( "#tor_chair2" ).append( '<li><a href="#">'+val+' (Co-chair)</a></li>' );
		}else{
			$( "#Toranto_Meeting" ).append( '<li><a href="#">'+val+' </a></li>' );
		}
  
});
}

function compare_bar(compare_bar_data) {
    var chart = bb.generate({
        "data": {
			"x":"x",
            "columns": [
            compare_bar_data,
			["x","pre-meeting","post-meeting"]
            ],
            "type": "bar",
			"labels":true
        },
        "color": {
            pattern: [
                "#68dfbf"
            ]
        },
		"grid": {
                    "x": {
                        "show": true
                    },
                    "y": {
                        "show": true
                    }
                },
                "axis": {
                    "x": {
                        "type": "category",
                    }
                },
        bar: {
            width: {
                ratio: 0.5
            }
        },
        bindto: "#BarChart1"
    });
};

$("#select_meeting").change(function(){
	var selected_val = $(this).val();
	if(selected_val=='Montreal Meeting'){
	$.ajax({
	type: "POST",
	url: 'montreal_quick.json',
	//data: {selected_val: selected_val},
	success: function(data){
		console.log(data);
	//var show_data = JSON.parse(data)
	var show_data = data;
	bargraph1(show_data.barchart_arr,show_data.data_labels);
	piechart1(show_data.piechart1_arr);
	piechart2(show_data.piechart2_arr);
	compare_bar(show_data.compare_bar);

		$('#ACT_TORONTOMEETING').hide();
		$('#tor_chair1').hide();
		$('#tor_chair2').hide();
		$('#Toranto_Meeting').hide();
		$('#ACT_MontrealMeeting').show();
		
		$('#mont_chair1').show();
		$('#mont_chair2').show();
		$('#Montreal_Meeting').show();
	}
	});
	}else if(selected_val=='Toronto Meeting'){
			$.ajax({
		type: "POST",
		url: 'toronto_quick.json',
		//data: {selected_val: selected_val},
		success: function(data){
			console.log(data);
		//var show_data = JSON.parse(data)
		var show_data = data;
		bargraph1(show_data.barchart_arr,show_data.data_labels);
		piechart1(show_data.piechart1_arr);
		piechart2(show_data.piechart2_arr);
		compare_bar(show_data.compare_bar);

			$('#ACT_MontrealMeeting').hide();
			$('#mont_chair1').hide();
			$('#mont_chair2').hide();
			$('#Montreal_Meeting').hide();
			$('#ACT_TORONTOMEETING').show();
			$('#tor_chair1').show();
			$('#tor_chair2').show();
			$('#Toranto_Meeting').show();
		}
		});
	}else{
		$.ajax({
	type: "POST",
	url: 'get_csvusingphp.json',
	//data: {selected_val: selected_val},
	success: function(data){
		console.log(data);
	//var show_data = JSON.parse(data)
	var show_data = data;
	bargraph1(show_data.barchart_arr,show_data.data_labels);
	piechart1(show_data.piechart1_arr);
	piechart2(show_data.piechart2_arr);
	compare_bar(show_data.compare_bar);

		$('#ACT_MontrealMeeting').show();
		$('#mont_chair1').show();
		$('#mont_chair2').show();
		$('#Montreal_Meeting').show();
		$('#ACT_TORONTOMEETING').show();
		$('#tor_chair1').show();
		$('#tor_chair2').show();
		$('#Toranto_Meeting').show();
	}
	});
		
	}
});
