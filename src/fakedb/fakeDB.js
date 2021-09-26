let db = [
    {
        key: 1,
        name: 'Yen-Thanh Le',
        username: '@yenthanh132',
        country: 'United States',
        education: 'Ho Chi Minh City University of Natural Sciences, Ho Chi Minh City',
        badges: 'problemSolving',
        xp: 2508,
        img: 'https://hrcdn.net/s3_pub/hr-avatars/ce538d93-74c4-412c-99d3-acf58bfdd914/150x150.png'
    },
    {
        key: 3,
        name: 'Ke Shen',
        username: '@xiper',
        country: 'China',
        education: 'University of Electronic Science and Technology of China',
        badges: 'problemSolving, Java, Python, Sql',
        xp: 2842,
        img: 'https://hrcdn.net/s3_pub/hr-avatars/30c13c87-f5a6-4be7-8671-e7e6f2c46634/150x150.png'
    },
    {
        key: 4,
        name: 'Alexey Zayakin',
        username: '@Alex_2oo8',
        country: 'Latvia',
        education: 'University of Latvia, Rīga',
        badges: 'problemSolving',
        xp: 2754,
        img: 'https://hrcdn.net/s3_pub/hr-avatars/5d32e4e3-fd45-442e-8cfd-386d82a1daad/150x150.png'
    },
    {
        key: 5,
        name: 'Roberto Sales',
        username: '@rsalesc',
        country: 'Brazil',
        education: 'Universidade Federal da Bahia',
        badges: 'problemSolving', 
        xp: 2505,
        img: 'https://secure.gravatar.com/avatar/14e7faf56e67b96e2f82850fa59eef6e?d=https://d1ce3iv5vajdy.cloudfront.net/hackerrank/assets/gravatar.jpg&s=150'
    },
    {
        key: 2,
        name: 'Shahed Shahriar',
        username: '@Z0RRO',
        country: 'Bangladesh',
        education: 'University of Dhaka',
        badges: 'problemSolving, Python, Sql ',
        xp: 2548,
        img: 'https://hrcdn.net/s3_pub/hr-avatars/d4dfd888-b5dc-424b-8c41-68445adc6844/150x150.png'
    },
    {
        key: 6,
        name: 'Ivan Kazmenko',
        username: '@Gassa',
        country: 'Russian Federation',
        education: 'St. Petersburg State University',
        badges: 'problemSolving, Sql',
        xp: 2504,
        img: 'https://secure.gravatar.com/avatar/b09d4a96700cad15ebfa201e6b8c89df?d=https://d1ce3iv5vajdy.cloudfront.net/hackerrank/assets/gravatar.jpg&s=150'
    },
    {
        key: 7,
        name: 'Joshua Simmons',
        username: '@kadoban',
        country: 'United States',
        education: 'Rochester Institute if Technology,Rochester',
        badges: 'problemSolving',
        xp: 2500,
        img: 'https://secure.gravatar.com/avatar/6acf272cf32a76cf4fc26a5e292c03de?d=https://d1ce3iv5vajdy.cloudfront.net/hackerrank/assets/gravatar.jpg&s=150'
    },
    {
        key: 8,
        name: 'Vernon Gutierrez',
        username: '@verngutz',
        country: 'Philippines',
        education: 'Ateneo de Manila University',
        badges: 'problemSolving',
        xp: 2497,
        img: 'https://hrcdn.net/s3_pub/hr-avatars/b186126c-b198-4cd8-9b0f-e5ebbad706ba/150x150.png'
    },
    {
        key: 9,
        name: 'Welton Cardoso',
        username: '@wellvolks',
        country: 'Brazil',
        education: 'Universidade Federal de Goiás',
        badges: 'problemSolving',
        xp: 1743,
        img: 'https://hrcdn.net/s3_pub/hr-avatars/e1c7b6d4-e197-43c2-b394-dbac68ed2a2a/150x150.png'
    },
    {
        key: 10,
        name: 'Andrii Omelianenko',
        username: '@Omelianenko',
        country: 'Ukraine',
        education: 'Taras Shevchenko National University of Kyiv',
        badges: 'problemSolving',
        xp: 24790,
        img: 'https://hrcdn.net/s3_pub/hr-avatars/ac36b204-6ce4-4c5c-b4bd-e08208958193/150x150.png'
    },
    {
        key: 11,
        name: 'Vladimir Smykalov',
        username: '@enot',
        country: 'Russian Federation',
        education: 'ITMO University',
        badges: 'problemSolving',
        xp: 2505,
        img: 'https://hrcdn.net/s3_pub/hr-avatars/99bf9b2b-3024-4976-8d35-479622e33bd9/150x150.png'
    },
    {
        key: 12,
        name: 'Percy Wong',
        username: '@percywtc',
        country: 'Hong Kong',
        education: 'The Chinese University of Hong Kong (CUHK), Hong Kong',
        badges: 'problemSolving, Java',
        xp: 2510,
        img: 'https://hrcdn.net/s3_pub/hr-avatars/b09b207d-3228-403d-bdc7-31ec197ebada/150x150.png'
    },
    {
        key: 13,
        name: 'Yuri Zarubin',
        username: '@yzarubin',
        country: 'Canada',
        education: 'Taras Shevchenko National University of Kyiv',
        badges: 'problemSolving',
        xp: 251,
        img: 'https://hrcdn.net/s3_pub/hr-avatars/a16d43e9-a075-40e6-ba42-035558f4cfc0/150x150.png'
    },
    {
        key: 14,
        name: 'Nurlykhan Kairly',
        username: '@nurlykhank',
        country: 'Kazakhstan',
        education: 'Aktobe KTL',
        badges: 'problemSolving, Sql',
        xp: 2514,
        img: 'https://hrcdn.net/s3_pub/hr-avatars/19d5976a-9221-47c7-949e-18b26c263115/150x150.png'
    },
    {
        key: 15,
        name: 'Quimey Vivas',
        username: '@quimey',
        country: 'Spain',
        education: 'Universidad de Buenos Aires',
        badges: 'problemSolving',
        xp: 2516,
        img: 'https://hrcdn.net/s3_pub/hr-avatars/e75567f6-5d1c-4d62-bfff-7e37537e43e2/150x150.png'
    }
]