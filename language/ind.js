exports.wait = () => {
	return`*「 AGUARDE 」 ESTAMOS PROCESSANDO*`
}

exports.succes = () => {
	return`*「 SUCCESO 」*`
}

exports.lvlon = () => {
	return`*「 ATIVO 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DESATIVADO 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 FACA SEU REGISTRO」*\n\n*obrigado por usar nosso bot${prefix} antes de usar
nosso menu se registre\n* digite #daftar nama|umur
Contoh #daftar affis|17  apos isso ${prefix} digite #help*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*sim falhou tente repetir mais alguns momentos*`
}

exports.linkga = () => {
	return`*desculpe link inválido*`
}

exports.groupo = () => {
	return`*「GRUPO APENAS」*`
}

exports.ownerb = () => {
	return`*「PROPRIETARIO DO BOT APENAS」*`
}

exports.ownerg = () => {
	return`*「PROPRIETARIO DO BOT APENAS」*`
}

exports.admin = () => {
	return`*「ADMIN GRUPO APENAS」*`
}

exports.badmin = () => {
	return`*「BOT DEVE SER ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW NAO ATIVO*`
}

exports.bug = () => {
	return`*O problema foi relatado ao proprietário do BOT, relatório falso/main2 Nao sera respondido*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Successo*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DADOS DO PAIS 」*\n\nvoce se registrou com os dados \n\n┏━⊱nome\n┗⊱${nomeUser}\n┏━⊱numero\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱este\n┗⊱${esteUser}\n┏━⊱hora  do registron\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTA : jangan não se esqueça deste número porque é importante:v`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.antilinker = (pushname) => {
	return`*Maaf ${pushname}*\n*anda di kick dari group karena telah mengirim link group lain*`
}

exports.detectorOnAlready = () => {
	return`*SEBELUM NYA ANTILINK SUDAH AKTIF*`
}

exports.antilinkOn = (groupName) => {
	return`*「 ANTILINK 」*\n\n*atencaondo grupo${groupName} telah mengaktifkan fitur antilink*\n*jika kalian mengirimkan link group maka akan di kick otomatis*`
}

exports.antilinkOf = () => {
	return`*「 ANTILINK 」NON AKTIF*`
}