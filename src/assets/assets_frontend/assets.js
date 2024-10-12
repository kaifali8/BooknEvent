import booking from './booking.png'
import band_concert from './band_concert.png'
import event_planning from './event_planning.png'
import profile_pic from './profile.png'
import upload_area from './upload_area.png'
import logo from './logo.png'
import location_pin from './location_pin.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import edit from './edit.png'
import bookmark from './bookmark.png'
import bookmarked from './bookmarked.png'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'

import abhishek_poster from './abhishek_upmanyu_poster.jpeg'
import abhishek_cover from './abhishek_upmanyu_cover.jpeg'
import jubin_poster from './jubin_poster.jpeg'
import jubin_cover from './jubin_cover.jpeg'
import zakir_poster from './zakir_khan_live_poster.jpeg'
import zakir_cover from './zakir_khan_live_cover.jpeg'
import pratik_poster from './prateek-k_poster.jpeg'
import pratik_cover from './prateek-k_cover.jpeg'
import shaan_poster from './shaan_live_poster.jpeg'
import shaan_cover from './shaan_live_cover.jpeg'
import rahul_cover from './rahul_dua_cover.jpeg'
import rahul_poster from './rahul_dua_poster.jpeg'
import sunburn_cover from './sunburn_arena_cover.jpeg'
import sunburn_poster from './sunburn_arena_poster.jpeg'
import fluid_cover from './fluid_art_cover.jpeg'
import fluid_poster from './fluid_art_poster.jpeg'
import pottery_cover from './pottery_painting_cover.jpeg'
import pottery_poster from './pottery_painting_poster.jpeg'
import karunesh_cover from './karunesh_talwar_cover.jpeg'
import karunesh_poster from './karunesh_talwar_poster.jpeg'
import pizza_cover from './diy_pizza_cover.jpeg'
import pizza_poster from './diy_pizza_poster.jpeg'
import summit_cover from './under_25_summit_cover.jpeg'
import summit_poster from './under_25_summit_poster.jpeg'
import infinity_cover from './infinity_mirrored_room_cover.jpeg'
import infinity_poster from './infinity_mirrored_room_poster.jpeg'
import birdbox_cover from './birdbox_launch_cover.jpeg'
import birdbox_poster from './birdbox_launch_poster.jpeg'
import vocal_cover from './vocal_workshop_cover.jpeg'
import vocal_poster from './vocal_workshop_poster.jpeg'



export const assets = {
    booking,
    band_concert,
    location_pin,
    event_planning,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    bookmark,
    bookmarked,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    upload_area,
    edit,
    stripe_logo,
    razorpay_logo
}

export const events = [
    {
        _id: 1,
        name: 'Sunburn Arena Ft. Alan Walker - Bengaluru',
        poster: sunburn_poster,
        cover:sunburn_cover,
        category: 'Music Show',
        total_seats: 1500,
        city: 'Bengaluru',
        description: 'Hey India, get set cause Alan Walker s tour is about to hit you like a storm!\n\nKolkata, Shillong, Delhi NCR, Ahmedabad, Bengaluru, Kochi, Chennai, Pune, Mumbai and Hyderabad.\n\nImagine nights where Faded isnt just a track, but the anthem of your memories, where every Alone moment feels like a shared pulse with thousands.\nThis tour is your playlist come to life. Feel the "Spectre" of beats haunting every corner of your mind, and when "Darkside" hits, that is when you know it is real – the music, the crowd, Join the movement, feel the music, be the beat. Alan Walker is calling, and this is the journey you don’t wanna miss!\n\n Book your Tickets Now!',
        date: '04 Oct 2024',
        time: '4:00 PM',
        price: 500,
        address: {
            line1: 'Nice Grounds'
        }
    },
    {
        _id: '2',
        name: 'Zakir Khan Live',
        poster: zakir_poster,
        cover:zakir_cover,
        category: 'Comedy Show',
        total_seats: 800,
        city: 'Mumbai',
        description: "A Brand New Stand up Special By Zakir Khan The show is a dive into all Zakir's shenanigans where he shares stories about being very consistently careless. He talks about how it always lands him in tough circumstances that would otherwise be butter easy. The show is called 'Survival Instinct' because now he has evolved into a higher species by adapting to his own flaw of being supremely low on conscientiousness. It's basically him showing off at how good he is in moonwalking his way out of situations which he is to blame for. Some of these events have occurred while he was on a train to Delhi and one is from a time when he decided to watch a movie at the cinemas. Being a pro in this genre, Zakir also shares idiosyncrasies of couples, and mannerisms of young love. The biggest face of Indian Stand up Comedy is back with his cockiest material. If you miss this, the loss is real.",
        date: '25 Oct 2024',
        time: '8:00 PM',
        price: 799,
        address: {
            line1: 'Shanmukhananda Mall'
        }
    },
    {
        _id: '3',
        name: 'Rahul Dua Live - A Standup Comedy Show',
        poster: rahul_poster,
        cover:rahul_cover,
        category: 'Comedy Show',
        total_seats: 400,
        city: 'Mumbai',
        description: "Dua, one of India’s topmost stand-comedians, carries a lot of weight on his head. That’s because there are way too many feathers on his cap. Actor, writer, comedian, creator, host for Comicstaan Season 3 Finale, host for SharkTank Season 2 & 3, having toured over 10 countries, selling over 50,000 tickets, having worked with over a 100 brands, with a community of over 600k on IG and over a million on YouTube, there are very few things that Rahul hasn’t dipped his toes into.\n One of the finest comedians on the block, he boasts of executing one of the biggest stand-up tours in the country, selling over 40,000 tickets and compassing over 25 cities. As a brand favourite, he’s worked with over a 100 brands, delivering quality content and seamlessly driving home their objectives, while having his followers praise the work he’s put up as a part of branded collaborations. Having acted his heart out in commercials for CultFit, Freecharge & the likes, he’s a total actor at wish.\n There’s seldom an emotion that Rahul isn’t able to summon at will. In 2025, Rahul will be touring over 40 cities in India, over 45 Internationally, with his new show “Padhai Likhai. From being a runner up for the first edition of Amazon Prime’s Comicstaan in 2018, to hosting the 2nd & the 3rd season of SharkTank India, Dua saab has scaled up the ranks at a pace that leaves us spellbound.",
        date: '19 Oct 2024',
        time: '7:30 PM',
        price: 499,
        address: {
            line1: 'Hotel Rang Sharda',
        }
    },
    {
        _id: '4',
        name: 'Abhishek Upmanyu Live - Nagpur',
        poster: abhishek_poster,
        cover:abhishek_cover,
        category: 'Comedy Show',
        total_seats: 500,
        city: 'Nagpur',
        description: "In \"Abhishek Upmanyu Live,\" Abhishek takes you on a hilarious journey through the everyday quirks and absurdities of life. With his unique observational humor, he takes everything from relationships and technology to Indian culture and more, offering a fresh perspective on the world we live in.",
        date: '14 Dec 2024',
        time: '8:30 PM',
        price: 590,
        address: {
            line1: 'Kavivarya Suresh Bhat Auditorium'
        }
    },
    {
        _id: '5',
        name: 'Karunesh Talwar Live 2024',
        poster: karunesh_poster,
        cover:karunesh_cover,
        category: 'Comedy Show',
        total_seats: 300,
        city: 'Bengaluru',
        description: "In Karunesh Talwar Live, Karunesh takes you on a hilarious journey through the everyday quirks and absurdities of life. Whether you`re a die-hard comedy fan or just looking for a night of pure entertainment, Karunesh Talwars` Live 2024 promises an unforgettable experience that will leave you in stitches.",
        date: '08 Nov 2024',
        time: '8:00 PM',
        price: 599,
        address: {
            line1: 'Prabath Kala Sambrama',
            line2: 'Mother Tekla Auditorium'
        }
    },
    {
        _id: '6',
        name: 'Shaan Live',
        poster: shaan_poster,
        cover:shaan_cover,
        category: 'Music Show',
        total_seats: 2000,
        city: 'Mumbai',
        description: "Shaan is bringing his iconic voice to Jio World Drive on 18th October for an unforgettable live concert, celebrating the Jio World Drive anniversary. His heartwarming voice and hits like Chand Sifarish, Jab Se Tere Naina , and many more have created history in the Bollywood Industry. Enjoy an evening full of music and nostalgia in a vibrant setting. Come sing along and make it a night to remember..",
        date: '18 Oct 2024',
        time: '7:00 PM',
        price: 2299,
        address: {
            line1: 'Jio World Drive'
        }
    },
    {
        _id: '7',
        name: 'JUBIN NAUTIYAL LIVE IN MUMBAI',
        poster: jubin_poster,
        cover:jubin_cover,
        category: 'Music Show',
        total_seats: 2000,
        city: 'Mumbai',
        description: "For the first time ever, Jubin Nautiyal will perform live in Mumbai, brought to you by Shreya Entertainment in collaboration with Next Stage Experience and ITP Experience. Join us on 20th October at SVP Stadium, Dome, for an unforgettable night of music, where world-class lighting, sound, stage, and SFX will come together to create a mesmerizing experience. Don’t miss out—book your tickets now and be part of a night that promises to be truly unforgettable!",
        date: '20 Oct 2024',
        time: '6:30 PM',
        price: 1180,
        address: {
            line1: 'DOME, NSCI, SVP Stadium, Worli'
        }
    },
    {
        _id: '8',
        name: 'Prateek Kuhad Silhouettes Tour - Pune',
        poster: pratik_poster,
        cover:pratik_cover,
        category: 'Music Show',
        total_seats: 1000,
        city: 'Pune',
        description: "Singer, songwriter, and producer Prateek Kuhad has that rare ability to sing back to you what you’ve been feeling. He achieves this by turning intensely personal experiences into universal tales that effortlessly capture the headiness of romance and the hurt of heartbreak - as heard on chart-toppers “Cold Mess” and “Kasoor” and fan favorites such as  “Dil Beparwah” and “Oh Love”. Equally eloquent in both English and Hindi, Prateek’s evocative storytelling has garnered him widespread critical acclaim and a global following that flocks to his shows and streams his tunes in the millions. This year will see a series of single releases from the bilingual Indian star, and his most extensive run of transcontinental gigs yet. Prateek’s Silhouettes world tour will start in North America, travel to Australia, the UK, Europe, and West Asia, and culminate in India. Ultimately, his aim with every track is to connect deeply with listeners. “I just want to write songs that really impact people,” he says. “I want to make songs that move you.”",
        date: '16 Nov 2024',
        time: '6:00 PM',
        price: 999,
        address: {
            line1: 'Mayfield Eva Garden'
        }
    },
    {
        _id: '9',
        name: 'Pottery Painting',
        poster: pottery_poster,
        cover:pottery_cover,
        category: 'Workshop',
        total_seats: 200,
        city: 'Noida',
        description: "Get your hands dirty and unleash your inner artist at our Pottery Painting Workshop! 🎨🌈 Dive into a world of colorful ceramics and creative expression as you transform a pot into personalized masterpieces. Whether you`re a seasoned artist or a beginner, our experienced instructors will guide you through the process, teaching you techniques and sharing tips along the way. 🎉🌟 Bring your friends, unleash your imagination, and create ceramic wonders that will make you proud. Get ready for a fun-filled session of laughter, paint splatters, and pottery perfection! 🎉🎨✨",
        date: '29 Sept 2024',
        time: '2:00 PM',
        price: 799,
        address: {
            line1: 'Duty Free Courtyard',
        }
    },
    {
        _id: '10',
        name: 'Fluid Art',
        poster: fluid_poster,
        cover:fluid_cover,
        category: 'Workshop',
        total_seats: 150,
        city: 'Mumbai',
        description: "Fluid art opens up a lot of possibilities and is definitely worth exploring and adding to your artist tool belt. In this course, I will teach you everything you will need to become a paint pouring artist. I will share with you:* Please Note! If you like a lot of talking this course may not be for you. When I create art I get in a trance-like state and talking interrupts my flow. I do some and descriptions here and there but this course is heavy on visual content. I do a lot of pop-ups on the screen that are full of helpful information and descriptions and I supply you resources as well. How to set up your paint pouring studio on a budget, complete supplies list, share all the techniques that I use like; dirty pour a flip cup, puddle pours, swipe technique and more. I will show you how to properly handle and care for your art",
        date: '04 Oct 2024',
        time: '12:00 PM',
        price: 1499,
        address: {
            line1: 'Shobha\'s Art Studio'
        }
    },
    {
        _id: '11',
        name: 'Vocal Workshop',
        poster: vocal_poster,
        cover:vocal_cover,
        category: 'Workshop',
        total_seats: 50,
        city: 'Mumbai',
        description: "Hi! I am Ravi Ahire Welcome 🙏 you to join my 1 day vocal workshop. Which is designed to help you sing your favorite song`s melody with Ease. In my 2hrs vocal workshop, I`ll take to through music orientation and teach you how to sing and play the main melody of your favorite song on harmonium. I`ve been singing and performing for last 38 plus years at National and international venues across the globe 🌎. I`ve completed Sangeet visharad in Hindustani classical. I am Looking forward to see you`ll at the workshop. Wish you`ll happy singing always.",
        date: '02 Oct 2024',
        time: '12:00 PM',
        price: 500,
        address: {
            line1: 'Conwood Astoria'
        }
    },
    {
        _id: '12',
        name: 'DIY Pizza workshop',
        poster: pizza_poster,
        cover:pizza_cover,
        category: 'Workshop',
        total_seats: 30,
        city: 'Pune',
        description: "As we guide you through each step of pizza making, stretch your dough and your imagination. Select mindful topping options and bake the dough. Learn the secrets of rolling out the dough and topping techniques. Learn to bake a perfect classic or thin crust pizza in your home oven. Learn to store the dough and some other quick fix tips. Topping available: Veg: Olives, Corn, Onion, Mushroom / Bell Peppers. Non Veg: Olives, Corn, Onion, Chicken. Anyone with basic kitchen skills can bake pizza. This workshop is for beginners .",
        date: '02 Oct 2024',
        time: '10:00 PM',
        price: 798,
        address: {
            line1: 'Cafe Al Forno, Viman Nagar'
        }
    },
    {
        _id: '13',
        name: 'Birdbox Launch Fest',
        poster: birdbox_poster,
        cover:birdbox_cover,
        category: 'Exhibition',
        total_seats: 150,
        city: 'Delhi',
        description: "The Birdbox Project is holding a store launch exhibition at it`s Saket Store, along with exciting curated festivities! Join us on the 6th of October at The Birdbox Project Store.",
        date: '06 Oct 2024',
        time: '4:00 PM',
        price: 50,
        address: {
            line1: 'The birdbox Project'
        }
    },
    {
        _id: '14',
        name: 'Infinity Mirrored Room',
        poster: infinity_poster,
        cover:infinity_cover,
        category: 'Exhibition',
        total_seats: 100,
        city: 'Mumbai',
        description: "Step into the iconic Japanese artist Yayoi Kusama’s Infinity Mirror Room – a universe of breathtaking optical illusions and endless imagination – in India for the first time. NMACC presents, for the very first time in India, ‘Infinity Mirrored Room―The Eternally Infinite Light of the Universe Illuminating the Quest for Truth, 2020’. The scintillating room-sized installation is the work of the pathbreaking Japanese artist Yayoi Kusama. The pioneer of contemporary art has consistently leveraged the combined power of numerous disciplines, including performance, painting, and sculpture, in ways that are stunningly original. Part of the Infinity Mirror Rooms – the artist’s landmark series that was initiated in 1965 – this immersive work holds the distinction of being one of the largest infinity rooms by Kusama, scattered around the world. What to expect? A breathtaking, mirror-panelled room with hundreds of LED lights suspended at varying heights from the ceiling. The lights flicker on and off, producing a rhythmic illumination of the space that never remains constant - creating a world of limitless, ethereal optical illusions. The myriad reflections afforded by the mirrors, which include the viewer’s image, eradicate the sense of a fixed perspective and offer the impression of a seemingly infinite universe where nothing is as it seems. The prestigious artwork, part of a permanent art collection at the Nita Mukesh Ambani Cultural Centre, joins Kusama’s famed Clouds at the venue. Visitors can also view the public art installation of 90 organically shaped stainless-steel clouds to round out their Kusama experience. Besides Clouds, the Centre has nine other unique installations dotted around its concourses. The installation will remain closed from October 23 to December 1. Bookings are open for slots starting December 2.",
        date: '03 Nov 2024',
        time: '4:00 PM',
        price: 100,
        address: {
            line1: 'Infinity Room, Nita Mukesh Ambani Cultural Centre'
        }
    },
    {
        _id: '15',
        name: 'The Under 25 Summit',
        poster: summit_poster,
        cover:summit_cover,
        category: 'Exhibition',
        total_seats: 100,
        city: 'Pune',
        description: "The Under 25 Summit is the world’s leading youth festival that brings together students, creators, performers and thought leaders, to celebrate the infinite potential of youngsters. Having had over ten editions in the past, the Summit is among the most successful edutainment IPs in India having had over 100,000 students walk in through our gates! Here are five things you will experience at The Under 25 Summit 2024! A star-studded line up Discovery of new talent Immersive art installations Diverse culinary experiences Interactive workshops",
        date: '14 Dec 2024',
        time: '11:00 AM', 
        price: 799,
        address: {
            line1: 'Royal Palms'
        }
    },
]