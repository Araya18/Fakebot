const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
    return [
        "Perkenalkan nama saya raybot. siapa nama kamu?",
        `Halo ${data?.nama}, Berapa usia kamu?`,
        `Oh ${data?.usia}, Hobi kamu apa?`,
        `Wahh ko bisa sama ${data?.hobi}, Oh iya pekerjaan kamu apa?`,
        `Tetap disyukuri aja ya ${data?.pekerjaan}, Btw keseharian kamu ngapain aja ni?`,
        `Oh tetap produktif ya ${data?.keseharian}, Yaudah kalo gitu. Aku pamit undur diri ya...`,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let userData = []

function botStart() {
    if(jawaban.value.length < 1) return alert("Silakan isi jawaban dulu")
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value })
    } else if (init === 2) {
        botDelay({ usia: jawaban.value })
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value })
    } else if (init === 4) {
        botDelay({ pekerjaan: jawaban.value })
    } else if (init === 5) {
        botDelay({ keseharian: jawaban.value })
    } else if (init === 6) {
        finishing()
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    loaders.style.display = "none"
    container[0].style.filter = "none"
    }, [1000])
    userData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Thankyu ya ${userData[0]} udah main ke raybot 😉, Kali-kali kita main ${userData[2]} Bareng ya!`
    jawaban.value = "Siap thanks juga!"
}

function botEnd() {
    alert(`Terimakasih ${userData[0]} sudah berkunjung, anda akan diarahkan ke halaman utama.`)
   window.location.reload()
}