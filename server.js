// this is the server side code, you can put this in a server and still get the same features

let express = require('express');
let app = express();
let PORT = 8000;
let SingersList = {
    'sonu nigam': [
        '1. Abhi Mujh Mein Kahin (Agneepath)',
        '2. Mujhe Raat Din (Sangharsh)',
        '3. Sapna Jahan (Brothers)',
        '4. Maa Sherawaliye (Khiladiyon Ka Khiladi)',
        '5. Kal Ho Na Ho (Kal Ho Naa Ho)',
        '6. Yeh Dil Deewana (Pardes)',
        '7. Pal Pal Har Pal (Lage Raho Munna Bhai)',
        '8. Main Hoon Na (Main Hoon Na)',
        '9. Sandese Aate Hai (Border)',
        '10. Pehli Pehli Baar Baliye (Sangharsh)',
        '11. Saathiya (Saathiya)',
        '12. Piyu Bole (Parineeta)',
        '13. Tumse Milke Dilka Jo Haal (Main Hoon Na)',
        '14. Sarfaroshi Ki Tamanna (The Legend of Bhagat Singh)',
        '15. Deewana Tera',
        '16. Suraj Hua Maddham (Kabhi Khushi Kabhie Gham…)',
        '17. Main Agar Kahoon (Om Shanti Om)',
        '18. Do Pal (Veer-Zaara)',
        '19. Soniyo (Raaz: The Mystery Continues)',
        '20. Maana Ke Hum Yaar Nahin (Meri Pyaari Bindu)',
        '21. Satrangi Re (Dil Se)',
        '22. Mere Haath Mein (Fanaa)',
        '23. Sun Zara (Lucky: No Time for Love)',
        '24. Dil Dooba (Khakee)',
        '25. Hamen Jab Se Mohabbat (Border)'
    ],
    'javed akhtar': [
        '1. Tum Tak (Raanjhanaa)',
        '2. Gale Lag Jaa (De Dana Dan)',
        '3. Aa Jao Meri Tamanna (Ajab Prem Ki Ghazab Kahani)',
        '4. Tu Hi Haqeeqat (Tum Mile)',
        '5. Ek Din Teri Raahon Mein (Naqaab)',
        '6. Kun Faya Kun (Rockstar)',
        '7. Nagada Nagada (Jab We Met)',
        '8. Arziyan (Delhi-6)',
        '9. Jashn-E-Bahaara (Jodhaa Akbar)',
        '10. Guzarish (Ghajini)',
        '11. Tu Jo Mila – Dekhna Na Mud Ke (Bajrangi Bhaijaan)',
        '12. Jashn-e-Ishqa (Gunday)',
        '13. Galat Baat Hai (Main Tera Hero)',
        '14. Tinku Jiya (Yamla Pagla Deewana)',
        '15. Tum Mile (Tum Mile)'
    ],
    'arjit singh':[
        'Aabaad Barbaad आबाद बर्बाद – Ludo (2020)',
        'Aahista आहिस्ता – Laila Majnu (2018) ',
        'Aashiqui Aa Gayi आशिकी आ गयी – Radhe Shyam (2021) ',
        'Aa Jao Na आ जाओ ना – Veere Di Wedding ',
        'Aaj Phir आज फिर – Hate Story 2 ',
        'Aa Raat Bhar आ रात भर – Heropanti ',
        'Aaj Se Teri आज से तेरी – Padman ',
        'Aaj Zid आज जिद – ',
        'Aksar 2 Kasam कसम – Babloo Bachelor (2020) ',
        'Aasan Nahin Yahan आसं नहीं यहाँ – Aashiqui 2 ',
        'Aayat आयात – Bajirao Mastani ',
        'Ab Raat अब रात – Dobaara'
    ]
}


// this line below is done because i want to run the script.js file and i dont know how it works so dont bother it for now you will know later on so have patience and enjoy
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
}).listen(PORT, () => {
    console.log(`The server is running at Port ${PORT}. Go check it out.`);
})



app.get('/api/:singerName', (req, res) => {  //':'before singername shows that it is dynamic route
    // req.params refers to items with a ':' in the URL and req.query refers to items associated with the '?'
    const singerName=req.params.singerName.toLocaleLowerCase() ; 
        res.json(SingersList[singerName]);

})
app.get('/api/:singerName/:index', (req, res) => {
    const singerName=req.params.singerName.toLocaleLowerCase() ; 
    const index=req.params.index
    res.json(SingersList[singerName][index]);
})


