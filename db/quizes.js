const {v4:uuid}=require("uuid");

const quizzes={
    "data":[
        {
            id:uuid(),
            category:"BTS",
            title:"BTS Members",
            image:"https://wallpaper.dog/large/10821108.jpg",
            description:"About BTS members",
            //questions and ans
            quiz:[
                {
                    id:uuid(),
                    question:"Who is the leader of the BTS?",
                    options:[
                        {id:uuid(),option:"Kim Soekjin",isCorrect:false},
                        {id:uuid(),option:"Kim Taehyung",isCorrect:false},
                        {id:uuid(),option:"Jeon Jungkook",isCorrect:false},
                        {id:uuid(),option:"Kim Namjoon",isCorrect:true}
                        
                    ]

                },
                {
                    id:uuid(),
                    question:"Who is the eldest member in BTS?",
                    options:[
                        {id:uuid(),option:"Kim Taehyung",isCorrect:false},
                        {id:uuid(),option:"Kim Namjoon",isCorrect:false},
                        {id:uuid(),option:"Kim Soekjin",isCorrect:true},
                        {id:uuid(),option:"Min Yoongi",isCorrect:false}

                    ]
                },
                {
                    id:uuid(),
                    question:"Who is the youngest member in BTS?",
                    options:[
                        {id:uuid(),option:"Kim Taehyung",isCorrect:false},
                        {id:uuid(),option:"Kim Namjoon",isCorrect:false},
                        {id:uuid(),option:"Jeon Jungkook",isCorrect:true},
                        {id:uuid(),option:"Park Jimin",isCorrect:false}

                    ]

                },
                {
                    id:uuid(),
                    question:"Filter is by which memeber of BTS?",
                    options:[
                        {id:uuid(),option:"Min Yoongi",isCorrect:false},
                        {id:uuid(),option:"Kim Namjoon",isCorrect:false},
                        {id:uuid(),option:"Jung Hoseok",isCorrect:false},
                        {id:uuid(),option:"Park Jimin",isCorrect:true}

                    ]

                },
                {
                    id:uuid(),
                    question:`which member says "IM YOUR HOPE YOU ARE MY HOPE IM J-HOPE"?`,
                    options:[
                        {id:uuid(),option:"Kim Taehyung",isCorrect:false},
                        {id:uuid(),option:"Kim Namjoon",isCorrect:false},
                        {id:uuid(),option:"Jeon Jungkook",isCorrect:false},
                        {id:uuid(),option:"Jung Hoseok",isCorrect:true}

                    ]

                },
                {
                    id:uuid(),
                    question:"Which member got the most wedding proposals from ARMY?",
                    options:[
                        {id:uuid(),option:"Kim Taehyung",isCorrect:false},
                        {id:uuid(),option:"Min Yoongi",isCorrect:true},
                        {id:uuid(),option:"Jeon Jungkook",isCorrect:false},
                        {id:uuid(),option:"Park Jimin",isCorrect:false}

                    ]

                },
                {
                    id:uuid(),
                    question:`"I'M GOOD BOY" who always says this?`,
                    options:[
                        {id:uuid(),option:"Kim Taehyung",isCorrect:true},
                        {id:uuid(),option:"Kim Namjoon",isCorrect:false},
                        {id:uuid(),option:"Jeon Jungkook",isCorrect:false},
                        {id:uuid(),option:"Park Jimin",isCorrect:false}

                    ]

                }
            ]
        

        },
        {
            id:uuid(),
            category:"IPL",
            title:"IPL",
            image:"https://tse1.mm.bing.net/th?id=OIP.b9uk4Q7V61_LeqFOuN431gHaEH&pid=Api&P=0&h=180",
            description:"Indian Premeir League",
            quiz:[
                {
                    id:uuid(),
                    question:"who was the winner of 2023 IPL?",
                    options:[
                        {id:uuid(),option:"CSK",isCorrect:true},
                        {id:uuid(),option:"MI",isCorrect:false},
                        {id:uuid(),option:"DC",isCorrect:false},
                        {id:uuid(),option:"SRH",isCorrect:false}

                    ]
                },
                {
                    id:uuid(),
                    question:"how many cups SRH have won?",
                    options:[
                        {id:uuid(),option:"4",isCorrect:false},
                        {id:uuid(),option:"2",isCorrect:false},
                        {id:uuid(),option:"0",isCorrect:false},
                        {id:uuid(),option:"1",isCorrect:true}
                    ]
                },
                {
                    id:uuid(),
                    question:"who was the winner of 2022 IPL?",
                    options:[
                        {id:uuid(),option:"CSK",isCorrect:false},
                        {id:uuid(),option:"MI",isCorrect:false},
                        {id:uuid(),option:"GT",isCorrect:true},
                        {id:uuid(),option:"SRH",isCorrect:false}

                    ] 
                },
            ]
        }
    ]
}


module.exports=quizzes;