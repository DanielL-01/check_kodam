document.addEventListener("DOMContentLoaded",() =>{

    document.querySelector(".button_1").onclick = () => {
        if (document.querySelector(".name_input").value != ""){
            var khodam = [
                'Penguin Polkadot',
                'Beruang Bubblegum',
                'Koala Kusut',
                'Kanguru Kompak',
                'Singa Sinting',
                'Gajah Gembira',
                'Zebra Zany',
                'Jerapah Jentik',
                'Panda Pikir',
                'Canguru Ceria',
                'Kura-kura Kocak',
                'Kambing Kawaii',
                'Kepiting Konyol',
                'Kodok Kelereng',
                'Kucing Kecil',
                'Koala Kocak',
                'Kupu-kupu Kebab',
                'Kerbau Keren',
                'Kucing Kusut',
                'Kelinci Kece',
                'Badak Bobrok',
                'Bebek Bodoh',
                'Belalang Bening',
                'Bunglon Binal',
                'Burung Bajingan',
                'Buaya Bobrok',
                'Bisonte Bodoh',
                'Babi Bengkok',
                'Lumba-lumba Lucu',
                'Landak Lengket',
                'Lalat Lucu',
                'Lebah Licin',
                'Lobster Lucu',
                'Lipan Lebih',
                'Ikan Idiot',
                'Iguana Istimewa',
                'Anjing Aneh',
                'Ayam Ajaib',
                'Armadillo Ajaib',
                'Angsa Anggun',
                'Anoa Asli',
                'Alpaka Aneh',
                'Ular Unik',
                'Ikan Terbang Terbang',
                'Gajah Gagah',
                'Zebra Zany',
                'Jerapah Jentik',
                'Panda Pikir',
                'Canggung Ceria',
                'Kura-kura Kocak',
                'Kambing Kawaii',
                'Kepiting Konyol',
                'Kodok Kelereng',
                'Kucing Kecil',
                'Koala Kocak',
                'Kupu-kupu Kebab',
                'Kerbau Keren',
                'Kucing Kusut',
                'Kelinci Kece',
                'Badak Bobrok',
                'Bebek Bodoh',
                'Belalang Bening',
                'Bunglon Binal',
                'Burung Bajingan',
                'Buaya Bobrok',
                'Bisonte Bodoh',
                'Babi Bengkok',
                'Lumba-lumba Lucu',
                'Landak Lengket',
                'Lalat Lucu',
                'Lebah Licin',
                'Lobster Lucu',
                'Lipan Lebih',
                'Ikan Idiot',
                'Iguana Istimewa',
                'Anjing Aneh',
                'Ayam Ajaib',
                'Armadillo Ajaib',
                'Angsa Anggun',
                'Anoa Asli',
                'Alpaka Aneh',
                'Ular Unik',
                'Ikan Terbang Terbang',
                'Gajah Gagah',
                'Zebra Zany',
                'Jerapah Jentik',
                'Panda Pikir',
                'Canggung Ceria',
                'Kura-kura Kocak',
                'Kambing Kawaii',
                'Kepiting Konyol',
                'Kodok Kelereng',
                'Kucing Kecil',
                'Koala Kocak',
                'Kupu-kupu Kebab',
                'Kerbau Keren',
                'Kucing Kusut',
                'Kelinci Kece',
                'Badak Bobrok',
                'Bebek Bodoh',
                'Belalang Bening',
                'Bunglon Binal',
                'Burung Bajingan',
                'Buaya Bobrok',
                'Bisonte Bodoh',
                'Babi Bengkok',
                'Lumba-lumba Lucu',
                'Landak Lengket',
                'Lalat Lucu',
                'Lebah Licin',
                'Lobster Lucu',
                'Lipan Lebih',
                'Ikan Idiot',
                'Pisau Pencetak Perut',
                'Sikat Gigi Suka-suka',
                'Topi Terbang Tertawa',
                'Kacamata Kusut',
                'Payung Pecah Pelangi',
                'Penghapus Pengertian',
                'Gembok Goyang Gempa',
                'Lampu Lilin Lompat',
                'Sabun Seru-seruan',
                'Sikat Rambut Riang',
                'Sikat Gigi Superhero',
                'Pisau Kupu-kupu',
                'Topi Terbang Tertawa',
                'Payung Pelangi',
                'Kacamata Kacamata',
                'Kursi Kurcaci',
                'Selimut Sombong',
                'Botol Botol',
                'Jam Jepit',
                'Sarung Tangan Setan',
                'Sepatu Sandal',
                'Tas Tidur',
                'Kacamata Kacamata',
                'Topi Terbang Tertawa',
                'Sarung Tangan Superhero',
                'Pisau Kupu-kupu',
                'Topi Terbang Tertawa',
                'Payung Pelangi',
                'Kacamata Kacamata',
                'Kursi Kurcaci',
                'Selimut Sombong',
                'Botol Botol',
                'Jam Jepit',
                'Sarung Tangan Setan',
                'Sepatu Sandal',
                'Tas Tidur',
                'Kacamata Kacamata',
                'Topi Terbang Tertawa',
                'Sarung Tangan Superhero',
                'Pisau Kupu-kupu',
                'Topi Terbang Tertawa',
                'Payung Pelangi',
                'Kacamata Kacamata',
                'Kursi Kurcaci',
                'Selimut Sombong',
                'Botol Botol',
                'Jam Jepit',
                'Sarung Tangan Setan',
                'Sepatu Sandal',
                'Tas Tidur',
                'Kacamata Kacamata',
                'Topi Terbang Tertawa',
                'Sarung Tangan Superhero',
                'Pisau Kupu-kupu',
                'Topi Terbang Tertawa',
                'Payung Pelangi',
                'Kacamata Kacamata',
                'Kursi Kurcaci',
                'Selimut Sombong',
                'Botol Botol',
                'Jam Jepit',
                'Sarung Tangan Setan',
                'Sepatu Sandal',
                'Tas Tidur',
                'Kacamata Kacamata',
                'Topi Terbang Tertawa',
                'Sarung Tangan Superhero',
                'Pisau Kupu-kupu',
                'Topi Terbang Tertawa',
                'Payung Pelangi',
                'Kacamata Kacamata',
                'Kursi Kurcaci',
                'Selimut Sombong',
                'Botol Botol',
                'Jam Jepit',
                'Sarung Tangan Setan',
                'Sepatu Sandal',
                'Tas Tidur',
                'Kacamata Kacamata',
                'Topi Terbang Tertawa',
                'Sarung Tangan Superhero',
                'Pisau Kupu-kupu',
                'Topi Terbang Tertawa',
                'Payung Pelangi',
                'Kacamata Kacamata',
                'Kursi Kurcaci',
                'Selimut Sombong',
                'Botol Botol',
                'Jam Jepit',
                'Sarung Tangan Setan',
                'Sepatu Sandal',
                'Tas Tidur',
                'Kacamata Kacamata',
                'Topi Terbang Tertawa',
                'Sarung Tangan Superhero',
                'Pisau Kupu-kupu',
                'Topi Terbang Tertawa',
                'Payung Pelangi',
                'Kacamata Kacamata',
                'Kursi Kurcaci',
                'Selimut Sombong',
                'Botol Botol',
                'Jam Jepit',
                'Sarung Tangan Setan',
                'Sepatu Sandal',
                'Tas Tidur',
                'Kacamata Kacamata',
                'Topi Terbang Tertawa',
                'Sarung Tangan Superhero',
                'Pisau Kupu-kupu',
                'Topi Terbang Tertawa',
                'Payung Pelangi',
                'Kacamata Kacamata',
                'Kursi Kurcaci',
                'Selimut Sombong',
                'Botol Botol',
                'Jam Jepit',
                'Sarung Tangan Setan',
                'Sepatu Sandal',
                'Tas Tidur',
                'Kacamata Kacamata',
                'Topi Terbang Tertawa',
                'Sarung Tangan Superhero',
                'Pisau Kupu-kupu',
                'Topi Terbang Tertawa',
                'Payung Pelangi',
                'Kacamata Kacamata',
                'Kursi Kurcaci',
                'Selimut Sombong',
                'Botol Botol',
                'Jam Jepit',
                'Sarung Tangan Setan',
                'Sepatu Sandal',
                'Tas Tidur',
                'Kacamata Kacamata',
                'Topi Terbang Tertawa',
                'Sarung Tangan Superhero',
                'Pisau Kupu-kupu',
                'Topi Terbang Tertawa',
                'Payung Pelangi',
                'Kacamata Kacamata',
                'Kursi Kurcaci',
                'Selimut Sombong',
                'Botol Botol',
                'Jam Jepit',
                'Sarung Tangan Setan',
                'Sepatu Sandal',
                'Tas Tidur',
                'Kacamata Kacamata',
                'Topi Terbang Tertawa',
                'Sarung Tangan Superhero',
                'Pisau Kupu-kupu',
                'Topi Terbang Tertawa',
                'Payung Pelangi',
                'Kacamata Kacamata',
                'Kursi Kurcaci',
                'Selimut Sombong',
                'Botol Botol',
                'Jam Jepit',
                'Sarung Tangan Setan',
                'Sepatu Sandal',
                'Tas Tidur',
                'Kacamata Kacamata',
                'Topi Terbang Tertawa',
                'Sarung Tangan Superhero',
                'Pisau Kupu-kupu',
                'Topi Terbang Tertawa',
                'Payung Pelangi',
                'Kacamata Kacamata',
                'Kursi Kurcaci',
                'Selimut Sombong',
                'Botol Botol',
                'Jam Jepit',
                'Sarung Tangan Setan',
                'Sepatu Sandal',
                'Tas Tidur',
                'Kacamata Kacamata',
                'Topi Terbang Tertawa',
                'Sarung Tangan Superhero',
                'Pisau Kupu-kupu',
                'Topi Terbang Tertawa',
                'Payung Pelangi',
                'Kacamata Kacamata',
                'Kursi Kurcaci',
                'Selimut Sombong',
                'Botol Botol',
                'Jam Jepit',
                'Sarung Tangan Setan',
                'Sepatu Sandal',
                'Tas Tidur',
                'Kacamata Kacamata',
                'Topi Terbang Tertawa',
                'Sarung Tangan Superhero',
                'Pisau Kupu-kupu',
                'Topi Terbang Tertawa',
                'Payung Pelangi',
                'Kacamata Kacamata',
                'Kursi Kurcaci',
                'Selimut Sombong',
                'Botol Botol',
                'Jam Jepit',
                'Sarung Tangan Setan',
                'Sepatu Sandal',
                'Tas Tidur',
                'Kacamata Kacamata',
                'Topi Terbang Tertawa',
                'Sarung Tangan Superhero',
                'Pisau Kupu-kupu',
                'Topi Terbang Tertawa',
                'Payung Pelangi',
                'Kacamata Kacamata',
                'Kursi Kurcaci',
                'Selimut Sombong',
                'Botol Botol',
                'Jam Jepit',
                'Sarung Tangan Setan',
                'Sepatu Sandal',
                'Tas Tidur',
                'Kacamata Kacamata',
                'Topi Terbang Tertawa',
                'Sarung Tangan Superhero',
                'Pisau Kupu-kupu',
                'Topi Terbang Tertawa',
                'Payung Pelangi',
                'Kacamata Kacamata',
                'Kursi Kurcaci',
                'Selimut Sombong',
                'Botol Botol',
                'Jam Jepit',
                'Sarung Tangan Setan',
                'Sepatu Sandal',
                'Tas Tidur',
                'Kacamata Kacamata',
                'Topi Terbang Tertawa',
                'Sarung Tangan Superhero',
                'Pisau Kupu-kupu' ]
               
              

            document.querySelector("#text-hasil").innerHTML = "Kodam " + document.querySelector(".name_input").value + " adalah"
            document.querySelector("#kodam-hasil").innerHTML = khodam[Math.floor(Math.random()*khodam.length)]
            document.querySelector(".name_input").value = ""
        }
        
    }
})