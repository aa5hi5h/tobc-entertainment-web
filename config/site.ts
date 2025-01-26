export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "TOBC Entertainment",
  description:
    "Match your brand with the perfect influencer. Find the right influencer for your brand and start building your brand influencer marketing strategy today.",
  mainNav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Service", href: "/service" },
    { title: "Our Work", href: "/work" },
    { title: "Casting", href: "/casting" },
    { title: "Gallery", href: "/gallery" },
    { title: "Blog", href: "/blog" },
    { title: "Case Studies", href: "/case-studies" },
    { title: "Contact Us", href: "/contact-us" },
  ],
  mainNavGroups: {
    primaryLinks: [
      { title: "Home", href: "/" },
      { title: "About", href: "/about" },
      { title: "Service", href: "/service" },
      { title: "Our Work", href: "/work" },
    ],
    footerLinks: [
      { title: "Casting", href: "/casting" },
      { title: "Gallery", href: "/gallery" },
      { title: "Blog", href: "/blog" },
      { title: "Case Studies", href: "/case-studies" },
      { title: "Contact Us", href: "/contact-us" },
    ],
  },
  links: {
    twitter: "https://x.com/HarjjotSinghh",
    github: "https://github.com/HarjjotSingh",
    docs: "https://harjot.pro",
  },
}

export const celebreties = [
  {
    name: "Sonu Sood",
    imageSrc: "/celebrities/1.webp",
    tag: "@sonu_sood",
  },
  {
    name: "Randeep Hooda",
    imageSrc: "/celebrities/2.webp",
    tag: "@randeephooda",
  },
  {
    name: "Rohit Suresh Saraf",
    imageSrc: "/celebrities/3.webp",
    tag: "@rohitsaraf",
  },
  {
    name: "Vaani Kapoor",
    imageSrc: "/celebrities/4.webp",
    tag: "@vaanikapoor",
  },
  {
    name: "Ali Fazal",
    imageSrc: "/celebrities/5.webp",
    tag: "@alifazal9",
  },
  {
    name: "Raghav Juyal",
    imageSrc: "/celebrities/6.webp",
    tag: "@raghavjuyal",
  },
  {
    name: "Sunil Grover",
    imageSrc: "/celebrities/7.webp",
    tag: "@whosunilgrover",
  },
  {
    name: "Sonali Bendre",
    imageSrc: "/celebrities/8.webp",
    tag: "@iamsonalibendre",
  },
  {
    name: "Adah Sharma",
    imageSrc: "/celebrities/9.webp",
    tag: "@adah_ki_adah",
  },
  {
    name: "Malaika Arora",
    imageSrc: "/celebrities/10.webp",
    tag: "@malaikaaroraofficial",
  },
  {
    name: "Neha Sharma",
    imageSrc: "/celebrities/11.webp",
    tag: "@nehasharmaofficial",
  },
  {
    name: "Richa Chadha",
    imageSrc: "/celebrities/12.webp",
    tag: "@the_richa_chadha",
  },
]

export const caseStudies = [
  {
    id: "product-launch",
    title: "Product Launch",
    description:
      "Innovative social media campaign for a tech startup's product launch.",
    image:
      "https://png.pngtree.com/png-clipart/20231001/original/pngtree-flat-vector-illustration-of-advertising-campaign-for-social-media-marketing-concept-png-image_12928867.png",
    client: "TechNova Inc.",
    challenge: "Launch a new AI-powered smart home device in a crowded market.",
    solution:
      "We orchestrated a multi-phase influencer campaign, leveraging tech enthusiasts and lifestyle bloggers to create buzz and demonstrate the product's unique features.",
    results: [
      "Reached over 5 million potential customers",
      "Generated 100,000+ pre-orders",
      "Achieved a 300% increase in brand mentions across social media platforms",
    ],
    testimonial: {
      quote:
        "The campaign exceeded our expectations. TOBC's strategy was crucial to our successful launch.",
      author: "Sarah Chen, CMO of TechNova Inc.",
    },
  },
  {
    id: "awareness-campaign",
    title: "Awareness Campaign",
    description:
      "Impactful influencer-driven awareness campaign for a non-profit organization.",
    image:
      "https://png.pngtree.com/png-clipart/20231001/original/pngtree-flat-vector-illustration-of-advertising-campaign-for-social-media-marketing-concept-png-image_12928867.png",
    client: "Ocean Guardian Foundation",
    challenge:
      "Raise awareness about ocean pollution and promote a global clean-up initiative.",
    solution:
      "We partnered with environmental activists, celebrities, and micro-influencers to create a viral challenge that encouraged followers to participate in local beach clean-ups.",
    results: [
      "Campaign hashtag used over 1 million times",
      "Organized 500+ beach clean-up events worldwide",
      "Raised $2 million in donations for ocean conservation efforts",
    ],
    testimonial: {
      quote:
        "TOBC's campaign transformed our reach and impact. We're grateful for their expertise and passion.",
      author: "Dr. Marina Waves, Founder of Ocean Guardian Foundation",
    },
  },
  {
    id: "brand-relaunch",
    title: "Brand Relaunch",
    description:
      "Strategic influencer partnerships to reposition a legacy brand for a younger audience.",
    image:
      "https://png.pngtree.com/png-clipart/20231001/original/pngtree-flat-vector-illustration-of-advertising-campaign-for-social-media-marketing-concept-png-image_12928867.png",
    client: "ClassicWear Apparel",
    challenge:
      "Revitalize a 50-year-old clothing brand to appeal to millennials and Gen Z without alienating existing customers.",
    solution:
      "We curated a diverse group of fashion influencers to showcase modern styling of classic pieces, emphasizing quality and sustainability.",
    results: [
      "40% increase in sales among under-30 demographic",
      "200% growth in Instagram followers",
      "Featured in 5 major fashion publications",
    ],
    testimonial: {
      quote:
        "TOBC brilliantly bridged the gap between our heritage and the desires of younger consumers.",
      author: "Marcus Threadgood, CEO of ClassicWear Apparel",
    },
  },
  {
    id: "product-collaboration",
    title: "Product Collaboration",
    description:
      "Successful influencer product collaboration for a beauty brand.",
    image:
      "https://png.pngtree.com/png-clipart/20231001/original/pngtree-flat-vector-illustration-of-advertising-campaign-for-social-media-marketing-concept-png-image_12928867.png",
    client: "Glow Cosmetics",
    challenge:
      "Create and launch a limited-edition makeup palette with a top beauty influencer.",
    solution:
      "We managed the entire collaboration process, from influencer selection and product development to marketing strategy and launch execution.",
    results: [
      "Sold out within 2 hours of launch",
      "Generated $1.5 million in revenue",
      "Increased brand's social media engagement by 500%",
    ],
    testimonial: {
      quote:
        "TOBC's expertise made this collaboration seamless and incredibly successful. They're true partners in every sense.",
      author: "Lila Shine, Founder of Glow Cosmetics",
    },
  },
  {
    id: "event-promotion",
    title: "Event Promotion",
    description:
      "High-impact influencer campaign to promote a major music festival.",
    image:
      "https://png.pngtree.com/png-clipart/20231001/original/pngtree-flat-vector-illustration-of-advertising-campaign-for-social-media-marketing-concept-png-image_12928867.png",
    client: "SoundWave Festival",
    challenge:
      "Boost ticket sales and create excitement for a new music festival in a competitive market.",
    solution:
      "We implemented a tiered influencer strategy, combining celebrity musicians, lifestyle influencers, and micro-influencers to create a comprehensive content campaign.",
    results: [
      "Achieved 95% ticket sell-out rate",
      "Generated 50 million impressions across social platforms",
      "Trended #1 on Twitter during the event weekend",
    ],
    testimonial: {
      quote:
        "TOBC's campaign was instrumental in making SoundWave a must-attend event from its very first year.",
      author: "Alex Rhythm, Director of SoundWave Festival",
    },
  },
  {
    id: "social-cause",
    title: "Social Cause Campaign",
    description:
      "Emotive influencer-led campaign to support mental health awareness.",
    image:
      "https://png.pngtree.com/png-clipart/20231001/original/pngtree-flat-vector-illustration-of-advertising-campaign-for-social-media-marketing-concept-png-image_12928867.png",
    client: "MindfulNow Foundation",
    challenge:
      "Destigmatize conversations around mental health and promote support resources.",
    solution:
      "We coordinated with a diverse range of influencers, from celebrities to healthcare professionals, to share personal stories and expert advice, creating a supportive online community.",
    results: [
      "Reached over 20 million people with campaign message",
      "Increased calls to mental health helplines by 30%",
      "Garnered support from 5 major corporations for ongoing initiatives",
    ],
    testimonial: {
      quote:
        "TOBC's sensitive and strategic approach helped us create a movement of openness and support around mental health.",
      author: "Dr. Sam Goodmind, CEO of MindfulNow Foundation",
    },
  },
]

export const blogPosts = [
  {
    id: "1",
    title: "The Rise of Influencer Marketing",
    description:
      "Influencer marketing has become a powerful tool for brands to reach their target audience. This blog post explores the reasons behind its popularity and effectiveness.",
    imageSrc:
      "https://www.collectivealternative.com/wp-content/uploads/2023/06/Influencer-Marketing-Indianapolis.jpg",
    content: `# The Rise of Influencer Marketing

## Introduction

Influencer marketing has become a powerful tool for brands to reach their target audience. This blog post explores the reasons behind its popularity and effectiveness.

### Key Points

- *Authenticity*: Influencers build trust with their followers
- **Targeted Reach**: Access to niche audiences
- Increased Engagement: Higher interaction rates compared to traditional advertisings
`,
  },
  {
    id: "2",
    title: "The Future of AI in Marketing",
    description:
      "AI is revolutionizing marketing. This blog post explores the latest trends and technologies in AI-powered marketing.",
    imageSrc: "https://images.mktw.net/im-65389404?width=1260&height=876",
    content: `# The Future of AI in Marketing

## Introduction

AI is revolutionizing marketing. This blog post explores the latest trends and technologies in AI-powered marketing.

### Key Points

- **Personalization**: AI enables personalized marketing experiences
- **Automation**: Reduces manual work and increases efficiency
- **Data Insights**: Provides valuable insights from data analysis

`,
  },
  {
    id: "3",
    title: "The Importance of UX in Marketing",
    description:
      "User experience is crucial in marketing. This blog post explores the importance of user experience in marketing.",
    imageSrc:
      "https://images.wondershare.com/mockitt/ux-beginner/marketing-ux-logo.jpg",
    content: `# The Importance of User Experience in Marketing

## Introduction

User experience is crucial in marketing. This blog post explores the importance of user experience in marketing.

### Key Points

- **User-Centric**: Focus on user needs and preferences
- **Engagement**: Higher user engagement and retention
- **Brand Loyalty**: Strong user experience leads to brand loyalty
`,
  },
]

export const advertisements = [
  {
    id: "nike-just-do-it",
    title: "Nike - Just Do It",
    description: "A powerful campaign celebrating athletes and determination",
    client: "Nike International",
    year: 2023,
    category: "Sports & Lifestyle",
    coverImage: "https://c.pxhere.com/photos/64/23/brick_wall_brick_wall_house_texture_background_stone_pattern-1292681.jpg!d",
    gallery: [
      "https://example.com/nike1.jpg",
      "https://example.com/nike2.jpg",
    ],
    results: {
      reach: "50M+ views",
      engagement: "2.5M interactions",
      conversion: "35% increase in sales",
    },
    testimonial: {
      quote: "TOBC delivered beyond our expectations",
      author: "John Smith, Marketing Director at Nike",
    },
    details: "Comprehensive campaign details here...",
  },
  {
    id: "coca-cola-share-happiness",
    title: "Coca-Cola - Share Happiness",
    description: "A heartwarming campaign about sharing moments of joy",
    client: "Coca-Cola India",
    year: 2023,
    category: "Beverages",
    coverImage: "https://c.pxhere.com/photos/89/d9/abstract_art_backdrop_background_beige_blank_board_box-801964.jpg!d",
    gallery: [
      "https://c.pxhere.com/photos/89/d9/abstract_art_backdrop_background_beige_blank_board_box-801964.jpg!d",
      "https://c.pxhere.com/photos/89/d9/abstract_art_backdrop_background_beige_blank_board_box-801964.jpg!d",
    ],
    results: {
      reach: "75M+ views",
      engagement: "3.8M interactions",
      conversion: "28% increase in sales",
    },
    testimonial: {
      quote: "TOBC captured our brand essence perfectly",
      author: "Sarah Johnson, Brand Manager at Coca-Cola",
    },
    details: "Detailed campaign information here...",
  },
  {
    id: "samsung-innovation",
    title: "Samsung - Future of Innovation",
    description: "Showcasing cutting-edge technology and innovation",
    client: "Samsung Electronics",
    year: 2023,
    category: "Technology",
    coverImage: "https://c.pxhere.com/photos/43/2d/blue_wood_wooden_slats_painted_background_texture_image-1022813.jpg!d",
    gallery: [
      "https://c.pxhere.com/photos/43/2d/blue_wood_wooden_slats_painted_background_texture_image-1022813.jpg!d",
      "https://c.pxhere.com/photos/43/2d/blue_wood_wooden_slats_painted_background_texture_image-1022813.jpg!d",
    ],
    results: {
      reach: "40M+ views",
      engagement: "1.8M interactions",
      conversion: "42% increase in inquiries",
    },
    testimonial: {
      quote: "Outstanding creative execution",
      author: "Michael Lee, CMO at Samsung",
    },
    details: "In-depth campaign analysis...",
  },
  {
    id: "airbnb-belong-anywhere",
    title: "Airbnb - Belong Anywhere",
    description: "Celebrating global community and unique travel experiences",
    client: "Airbnb Global",
    year: 2023,
    category: "Travel & Hospitality",
    coverImage: "https://c.pxhere.com/photos/d7/69/wall_background_wallpaper_background_image_desktop_desktop_background_abstract_structure-1078396.jpg!d",
    gallery: [
      "https://c.pxhere.com/photos/d7/69/wall_background_wallpaper_background_image_desktop_desktop_background_abstract_structure-1078396.jpg!d",
      "https://c.pxhere.com/photos/d7/69/wall_background_wallpaper_background_image_desktop_desktop_background_abstract_structure-1078396.jpg!d",
    ],
    results: {
      reach: "30M+ views",
      engagement: "1.5M interactions",
      conversion: "45% increase in bookings",
    },
    testimonial: {
      quote: "Beautifully captured our mission",
      author: "Emma White, Marketing Head at Airbnb",
    },
    details: "Complete campaign overview...",
  },
  {
    id: "zara-fashion-forward",
    title: "Zara - Fashion Forward",
    description: "A cutting-edge fashion campaign showcasing latest trends",
    client: "Zara International",
    year: 2023,
    category: "Fashion",
    coverImage: "https://c.pxhere.com/photos/03/9c/sea_lighthouse_ocean_water_rock-1410392.jpg!d",
    gallery: [
      "https://c.pxhere.com/photos/03/9c/sea_lighthouse_ocean_water_rock-1410392.jpg!d",
      "https://c.pxhere.com/photos/03/9c/sea_lighthouse_ocean_water_rock-1410392.jpg!d",
    ],
    results: {
      reach: "25M+ views",
      engagement: "2.2M interactions",
      conversion: "38% increase in online sales",
    },
    testimonial: {
      quote: "Exceptional creative direction",
      author: "Carlos Rodriguez, Creative Director at Zara",
    },
    details: "Detailed campaign metrics...",
  },
  {
    id: "spotify-music-for-everyone",
    title: "Spotify - Music For Everyone",
    description: "Celebrating diversity in music and listeners",
    client: "Spotify",
    year: 2023,
    category: "Entertainment",
    coverImage: "https://c.pxhere.com/photos/37/44/rain_falling_black_effect_dark_surface_pouring_wet-1105749.jpg!d",
    gallery: [
      "https://c.pxhere.com/photos/37/44/rain_falling_black_effect_dark_surface_pouring_wet-1105749.jpg!d",
      "https://c.pxhere.com/photos/37/44/rain_falling_black_effect_dark_surface_pouring_wet-1105749.jpg!d",
    ],
    results: {
      reach: "60M+ views",
      engagement: "4.1M interactions",
      conversion: "32% increase in subscriptions",
    },
    testimonial: {
      quote: "Perfectly aligned with our vision",
      author: "Lisa Chen, Global Marketing at Spotify",
    },
    details: "Full campaign breakdown...",
  }
]

export const musicProjects = [
  {
    id: "harmony-dreams",
    title: "Harmony Dreams",
    artist: "Luna Eclipse",
    genre: "Pop/Electronic",
    releaseYear: 2023,
    type: "Album",
    coverArt: "https://c.pxhere.com/images/07/08/a7cf8807dffc7e6868454d28af98-1633783.jpg!d",
    tracks: [
      { title: "Midnight Dance", duration: "3:45" },
      { title: "Starlight", duration: "4:12" },
    ],
    streams: "2.5M",
    awards: ["Best Pop Album 2023"],
    description: "A groundbreaking fusion of pop and electronic music...",
    credits: {
      producer: "TOBC Studios",
      engineers: ["Jane Doe", "John Smith"],
    },
  },
  {
    id: "urban-beats",
    title: "Urban Beats",
    artist: "Rhythm Kings",
    genre: "Hip-Hop",
    releaseYear: 2023,
    type: "Album",
    coverArt: "https://c.pxhere.com/photos/3a/48/blackandwhite_bw_film_vancouver_georgia_office_coatofarms_branch-393107.jpg!d",
    tracks: [
      { title: "City Lights", duration: "3:30" },
      { title: "Street Life", duration: "4:00" },
    ],
    streams: "3.1M",
    awards: ["Best Hip-Hop Production 2023"],
    description: "Raw urban sounds with powerful lyrics...",
    credits: {
      producer: "TOBC Studios",
      engineers: ["Mike Wilson", "Sarah Brown"],
    },
  },
  {
    id: "acoustic-soul",
    title: "Acoustic Soul",
    artist: "Emma Rivers",
    genre: "Folk/Acoustic",
    releaseYear: 2023,
    type: "EP",
    coverArt: "https://c.pxhere.com/photos/dc/d2/acoustic_guitar_hippie_guitar_painted_60ies_art_artist_music-928401.jpg!d",
    tracks: [
      { title: "Mountain Song", duration: "4:15" },
      { title: "River Flow", duration: "3:50" },
    ],
    streams: "1.8M",
    awards: ["Best Folk EP 2023"],
    description: "Soulful acoustic melodies...",
    credits: {
      producer: "TOBC Studios",
      engineers: ["Tom Black", "Amy Green"],
    },
  },
  {
    id: "electric-dreams",
    title: "Electric Dreams",
    artist: "Neon Pulse",
    genre: "Electronic",
    releaseYear: 2023,
    type: "Album",
    coverArt: "https://c.pxhere.com/photos/64/68/music_guitar_sound_instrument-700467.jpg!d",
    tracks: [
      { title: "Digital Love", duration: "5:20" },
      { title: "Cyber Night", duration: "4:45" },
    ],
    streams: "2.9M",
    awards: ["Best Electronic Production 2023"],
    description: "Futuristic electronic soundscapes...",
    credits: {
      producer: "TOBC Studios",
      engineers: ["David Chen", "Laura White"],
    },
  },
  {
    id: "jazz-fusion",
    title: "Jazz Fusion",
    artist: "The Blue Notes",
    genre: "Jazz/Fusion",
    releaseYear: 2023,
    type: "Album",
    coverArt: "https://c.pxhere.com/photos/bf/65/music_cd_entertainment_cd_cover_digital-658360.jpg!d",
    tracks: [
      { title: "Midnight Jazz", duration: "6:15" },
      { title: "Blue Skies", duration: "5:30" },
    ],
    streams: "1.5M",
    awards: ["Best Jazz Album 2023"],
    description: "Modern jazz with fusion elements...",
    credits: {
      producer: "TOBC Studios",
      engineers: ["Robert Johnson", "Maria Garcia"],
    },
  },
  {
    id: "rock-revolution",
    title: "Rock Revolution",
    artist: "Thunder Strike",
    genre: "Rock",
    releaseYear: 2023,
    type: "Album",
    coverArt: "https://c.pxhere.com/photos/ab/81/silhouettes_personal_man_woman_youth_city_skyline_tower-979361.jpg!d",
    tracks: [
      { title: "Electric Thunder", duration: "4:30" },
      { title: "Rock Anthem", duration: "5:00" },
    ],
    streams: "2.2M",
    awards: ["Best Rock Album 2023"],
    description: "High-energy rock with modern production...",
    credits: {
      producer: "TOBC Studios",
      engineers: ["Jack Wilson", "Kate Brown"],
    },
  }
]

export const filmProjects = [
  {
    id: "beyond-horizons",
    title: "Beyond Horizons",
    director: "Sarah Chen",
    genre: "Sci-Fi Drama",
    releaseYear: 2023,
    duration: "2h 15m",
    poster: "https://c.pxhere.com/photos/b2/7b/movie_starwars_space_adventure_nostalgic-392736.jpg!d",
    trailer: "https://youtube.com/watch?v=xxx",
    cast: ["Actor 1", "Actor 2"],
    synopsis: "A thought-provoking journey through space and time...",
    awards: ["Best Cinematography 2023"],
    boxOffice: "$50M",
    rating: "PG-13",
  },
  {
    id: "urban-tales",
    title: "Urban Tales",
    director: "Michael Rodriguez",
    genre: "Drama",
    releaseYear: 2023,
    duration: "1h 55m",
    poster: "https://c.pxhere.com/photos/c9/fa/urban_streetart_120_film_mural_paint_sacramento_portra160-393741.jpg!d",
    trailer: "https://youtube.com/watch?v=yyy",
    cast: ["Actor 3", "Actor 4"],
    synopsis: "Interweaving stories of city life and human connections...",
    awards: ["Best Screenplay 2023"],
    boxOffice: "$35M",
    rating: "R",
  },
  {
    id: "lost-kingdom",
    title: "Lost Kingdom",
    director: "James Wilson",
    genre: "Adventure",
    releaseYear: 2023,
    duration: "2h 30m",
    poster: "https://c.pxhere.com/photos/eb/b3/cinema_movie_theater_movies_input_posters_doors_facade_scene-818035.jpg!d",
    trailer: "https://youtube.com/watch?v=zzz",
    cast: ["Actor 5", "Actor 6"],
    synopsis: "An epic adventure in search of a legendary kingdom...",
    awards: ["Best Visual Effects 2023"],
    boxOffice: "$75M",
    rating: "PG-13",
  },
  {
    id: "midnight-mystery",
    title: "Midnight Mystery",
    director: "Emma Thompson",
    genre: "Thriller",
    releaseYear: 2023,
    duration: "2h 05m",
    poster: "https://c.pxhere.com/photos/8d/2a/ocean_sea_film_vancouver_market_edited_granvilleisland_canonae1-282026.jpg!d",
    trailer: "https://youtube.com/watch?v=aaa",
    cast: ["Actor 7", "Actor 8"],
    synopsis: "A gripping thriller that keeps you guessing...",
    awards: ["Best Editing 2023"],
    boxOffice: "$45M",
    rating: "R",
  },
  {
    id: "summer-dreams",
    title: "Summer Dreams",
    director: "David Brown",
    genre: "Romance",
    releaseYear: 2023,
    duration: "1h 45m",
    poster: "https://c.pxhere.com/photos/6d/74/film_poster_k1000_doubleexposure_analogue_unicorn_commercialdrive_vancouverbc-282418.jpg!d",
    trailer: "https://youtube.com/watch?v=bbb",
    cast: ["Actor 9", "Actor 10"],
    synopsis: "A heartwarming summer romance story...",
    awards: ["Best Original Score 2023"],
    boxOffice: "$30M",
    rating: "PG-13",
  },
  {
    id: "comedy-club",
    title: "Comedy Club",
    director: "Lisa Martinez",
    genre: "Comedy",
    releaseYear: 2023,
    duration: "1h 40m",
    poster: "https://c.pxhere.com/photos/03/ab/blackandwhite_bw_monochrome_germany_blackwhite_alemania_sw_schwarzweiss-443387.jpg!d",
    trailer: "https://youtube.com/watch?v=ccc",
    cast: ["Actor 11", "Actor 12"],
    synopsis: "A hilarious look at the world of stand-up comedy...",
    awards: ["Best Comedy Film 2023"],
    boxOffice: "$40M",
    rating: "PG-13",
  }
]

