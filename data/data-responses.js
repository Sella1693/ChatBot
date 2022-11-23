const current = new Date();
             // By default US English uses 12hr time with AM/PM
const time = current.toLocaleTimeString("en-US");
console.log(time);

var date=current.toDateString(); 
const currentYear = current.getFullYear();
console.log(currentYear); 

const currentMonth = current.getMonth() + 1; 


var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum&#39;at', 'Sabtu'];

var thisDay = current.getDay(),

    thisDay = myDays[thisDay];

// data templates or responses
const templates = '{\
	"name":"Kamu nanya. Kamu bertanya-tanya. Call me, DormBot.", \
	"hobby":"Haha.. saya suka membaca pikiran kamu :).", \
	"human":"Saya adalah chatbot, dapat memberikan informasi.",\
	"okey":"Okey, kamu luar biasa. Salam sukses !!!",\
	"greetings":"hallo, semoga kamu baik-baik saja.",\
	"thanks":"Iya, sama-sama ya.",\
	"hi":"Hi juga. Semoga harimu menyenangkan.",\
	"condition":"Saya adalah chatbot. Pastinya saya sehat.",\
	"kasar":"waduhh.. stop toxic",\
	"tanya":"Univeritas Klabat adalah pusat pendidikan tinggi yang didirikan oleh Gereja Masehi Advent Hari Ketujuh untuk menyediakan mahasiswa bagi pelayanan di Indonesia dan tempat lainnya. Universitas ini didirikan pada tahun 1965 dengan nama Perguruan Tinggi Klabat dan saat ini berubah status dengan nama Universitas Klabat berusaha menyediakan pendidikan Kristen yang bermutu dalam tradisi Gereja Masehi Advent Hari Ketujuh.  Tradisi ini bertujuan untuk mengembangkan keseluruhan potensi insani di dalam diri para mahasiswa dan menghentarkan mereka pada keserasian dengan sang Pencipta dan sesama manusia.",\
	"fakultas":"Ada 8 Fakultas",\
	"kaprodiTI":"Sir. Green Mandias",\
	"kaprodiSI":"Sir. Stenly Pungus",\
	"dekan":"Sir. Andrew Liem",\
	"sekretaris":"Maam. Wilma",\
	"dosenAI":"Sir. Green Sandag",\
	"dosenITSM":"Sir. Juan Mambu",\
	"dosencomvis":"Sir. Semmy Taju",\
	"dosenBO":"Maam. Vivi Tuuk",\
	"dosenRegis":"Maam. Tapi",\
	"rektor":"Sir.Denny Rantung",\
	"warek1":"Sir. Walean",\
	"warek2":"Sir. Lule",\
	"warek3":"Sir. Tauran",\
	"bidangIT":"Sir. Douglas Rasuh",\
	"time":"'+time+'",\
	"day":"'+thisDay+'",\
	"month":"'+currentMonth+'",\
	"year":"'+currentYear+'",\
	"date":"'+date+'"\
}';

// parse to json object
const data_responses = JSON.parse(templates);