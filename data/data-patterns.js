// data patterns
const trainingPhrases = [
  {phrase: "what is your name?", result: {name: 1}},
  {phrase: "your name?", result: {name: 1}},
  {phrase: "nama", result: {name: 1}},
  {phrase: "siapa nama kamu", result: {name: 1}},
  {phrase: "nama kamu siapa", result: {name: 1}},
  {phrase: "apa hobby kamu?", result: {hobby: 1}},
  {phrase: "hobby?", result: {hobby: 1}},
  {phrase: "apa hobi kamu?", result: {hobby: 1}},
  {phrase: "hobi kamu?", result: {hobby: 1}},
  {phrase: "kamu suka bermain apa?", result: {hobby: 1}},
  {phrase: "kamu suka apa?", result: {hobby: 1}},
  {phrase: "kamu manusia atau robot?", result: {human: 1}},
  {phrase: "manusia atau robot?", result: {human: 1}},
  {phrase: "apakah kamu manusia?", result: {human: 1}},
  {phrase: "apakah kamu robot?", result: {human: 1}},
  {phrase: "kamu pasti robot?", result: {human: 1}},
  {phrase: "kamu seperti manusia?", result: {human: 1}},
  {phrase: "Selamat pagi.", result: {greetings: 1}},
  {phrase: "selamat siang.", result: {greetings: 1}},
  {phrase: "selamat sore", result: {greetings: 1}},
  {phrase: "selamat malam?", result: {greetings: 1}},
  {phrase: "good morning.", result: {greetings: 1}},
  {phrase: "hari yang indah.", result: {greetings: 1}},
  {phrase: "bye", result: {greetings: 1}},
  {phrase: "sampai jumpa", result: {greetings: 1}},
  {phrase: "dadah", result: {greetings: 1}},
  {phrase: "hari ini sangat indah.", result: {greetings: 1}},
  {phrase: "terima kasih", result: {thanks: 1}},
  {phrase: "thank you", result: {thanks: 1}},
  {phrase: "thanks", result: {thanks: 1}},
  {phrase: "mantap sekali", result: {okey: 1}},
  {phrase: "mantap", result: {okey: 1}},
  {phrase: "good", result: {okey: 1}},
  {phrase: "pintar", result: {okey: 1}},
  {phrase: "ok ok", result: {okey: 1}},
  {phrase: "oke", result: {okey: 1}},
  {phrase: "Okey", result: {okey: 1}},
  {phrase: "hi", result: {hi: 1}},
  {phrase: "helo", result: {hi: 1}},
  {phrase: "hello", result: {hi: 1}},
  {phrase: "hi bro", result: {hi: 1}},
  {phrase: "hi there", result: {hi: 1}},
  {phrase: "kabar?", result: {condition: 1}},
  {phrase: "apa kabar kamu?", result: {condition: 1}},
  {phrase: "how are you?", result: {condition: 1}},
  {phrase: "fuck", result: {kasar: 1}},
  {phrase: "anjing", result: {kasar: 1}},
  {phrase: "anjirr", result: {kasar: 1}},
  {phrase: "anjritt", result: {kasar: 1}},
  {phrase: "babi", result: {kasar: 1}},
  {phrase: "gak ngontak", result: {kasar: 1}},
  {phrase: "bego", result: {kasar: 1}},
  {phrase: "bitch", result: {kasar: 1}},
  {phrase: "tolol", result: {kasar: 1}},
  {phrase: "bacot", result: {kasar: 1}},
  {phrase: "apa itu universitas klabat?", result: {tanya: 1}},
  {phrase: "unklab itu apa ya?", result: {tanya: 1}},
  {phrase: "seperti apa unklab itu?", result: {tanya: 1}},
  {phrase: "unklab?", result: {tanya: 1}},
  {phrase: "apa itu unklab?", result: {tanya: 1}},
  {phrase: "jam berapa sekarang?", result: {time: 1}},
  {phrase: "ini jam berapa?", result: {time: 1}},
  {phrase: "bulan apa sekarang?", result: {month: 1}},
  {phrase: "ini bulan apa?", result: {month: 1}},
  {phrase: "tahun berapa sekarang?", result: {year: 1}},
  {phrase: "ini tahun berapa?", result: {year: 1}},
  {phrase: "tanggal berapa sekarang?", result: {date: 1}},
  {phrase: "ini tanggal berapa?", result: {date: 1}},
  {phrase: "ini hari apa?", result: {day: 1}},
  {phrase: "sekarang hari apa?", result: {day: 1}},
  {phrase: "apa hari ini?", result: {day: 1}},
  {phrase: "hari apa sekarang?", result: {day: 1}},
  {phrase: "ada berapa fakultas di UNKLAB?", result: {fakultas: 1}},
  {phrase: "fakultas di UNKLAB ada berapa?", result: {fakultas: 1}},
  {phrase: "di UNKLAB ada berapa fakultas?", result: {fakultas: 1}},
  {phrase: "siapa kaprodi Sistem informasi?", result: {kaprodiSI: 1}},
  {phrase: "kaprodi Sistem informasi siapa?", result: {kaprodiSI: 1}},
  {phrase: "siapa kaprodi informatika?", result: {kaprodiTI: 1}},
  {phrase: "kaprodi informatika siapa?", result: {kaprodiTI: 1}},
  {phrase: "siapa dekan fik unklab?", result: {dekan: 1}},
  {phrase: "dekan fik unklab siapa?", result: {dekan: 1}},
  {phrase: "siapa sekretaris fik unklab?", result: {sekretaris: 1}},
  {phrase: "sekretaris fik unklab siapa?", result: {sekretaris: 1}},
  {phrase: "siapa rektor unklab?", result: {rektor: 1}},
  {phrase: "rektor unklab siapa?", result: {rektor: 1}},
  {phrase: "siapa wakil 1 rektor unklab?", result: {warek1: 1}},
  {phrase: "wakil rektor 1 unklab siapa?", result: {warek1: 1}},
  {phrase: "siapa wakil 2 rektor unklab?", result: {warek2: 1}},
  {phrase: "wakil rektor 2 unklab siapa?", result: {warek2: 1}},
  {phrase: "siapa wakil 3 rektor unklab?", result: {warek3: 1}},
  {phrase: "wakil rektor 3 unklab siapa?", result: {warek3: 1}},
  {phrase: "siapa dosen BO unklab?", result: {dosenBO: 1}},
  {phrase: "Dosen BO unklab siapa?", result: {dosenBO: 1}},
  {phrase: "siapa dosen mata kuliah comvis?", result: {dosencomvis: 1}},
  {phrase: "dosen mata kuliah comvis siapa?", result: {dosencomvis: 1}},
  {phrase: "siapa dosen mata kuliah AI?", result: {dosenAI: 1}},
  {phrase: "dosen mata kuliah AI siapa?", result: {dosenAI: 1}}
];