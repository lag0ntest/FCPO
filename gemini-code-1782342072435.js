// Local Player Database Array (Can be expanded safely)
const playersDatabase = [
    {
        name: "Mbappé",
        rating: 91,
        position: "ST",
        flag: "https://flagcdn.com/w40/fr.png",
        image: "https://ratings-images-prod.asindcpp.ea.com/fctw24/player-portraits/p231747.png",
        stats: { pac: 97, sho: 90, pas: 80, dri: 92, def: 36, phy: 78 }
    },
    {
        name: "De Bruyne",
        rating: 91,
        position: "CM",
        flag: "https://flagcdn.com/w40/be.png",
        image: "https://ratings-images-prod.asindcpp.ea.com/fctw24/player-portraits/p192883.png",
        stats: { pac: 72, sho: 88, pas: 94, dri: 87, def: 65, phy: 78 }
    },
    {
        name: "Haaland",
        rating: 91,
        position: "ST",
        flag: "https://flagcdn.com/w40/no.png",
        image: "https://ratings-images-prod.asindcpp.ea.com/fctw24/player-portraits/p239085.png",
        stats: { pac: 89, sho: 93, pas: 66, dri: 80, def: 45, phy: 88 }
    },
    {
        name: "Messi",
        rating: 90,
        position: "CF",
        flag: "https://flagcdn.com/w40/ar.png",
        image: "https://ratings-images-prod.asindcpp.ea.com/fctw24/player-portraits/p158023.png",
        stats: { pac: 80, sho: 87, pas: 90, dri: 94, def: 33, phy: 64 }
    },
    {
        name: "Bellingham",
        rating: 88,
        position: "CAM",
        flag: "https://flagcdn.com/w40/gb-eng.png",
        image: "https://ratings-images-prod.asindcpp.ea.com/fctw24/player-portraits/p252371.png",
        stats: { pac: 83, sho: 85, pas: 85, dri: 88, def: 78, phy: 82 }
    },
    {
        name: "Vini Jr.",
        rating: 89,
        position: "LW",
        flag: "https://flagcdn.com/w40/br.png",
        image: "https://ratings-images-prod.asindcpp.ea.com/fctw24/player-portraits/p238794.png",
        stats: { pac: 95, sho: 82, pas: 78, dri: 90, def: 29, phy: 68 }
    }
];

function openPack(packType) {
    // Hide Store, Show Reveal Window
    document.getElementById('store').classList.add('hidden');
    const revealScreen = document.getElementById('reveal-screen');
    revealScreen.classList.remove('hidden');
    
    const animSection = document.getElementById('pack-anim');
    const cardDisplay = document.getElementById('card-display');
    
    animSection.classList.remove('hidden');
    cardDisplay.classList.add('hidden');

    // Choose random player item from dataset
    const randomPlayer = playersDatabase[Math.floor(Math.random() * playersDatabase.length)];

    // Inject content into DOM structure
    document.getElementById('player-name').innerText = randomPlayer.name;
    document.getElementById('player-rating').innerText = randomPlayer.rating;
    document.getElementById('player-pos').innerText = randomPlayer.position;
    document.getElementById('player-nation').src = randomPlayer.flag;
    document.getElementById('player-img').src = randomPlayer.image;
    
    // Inject Stats
    document.getElementById('stat-pac').innerText = randomPlayer.stats.pac;
    document.getElementById('stat-sho').innerText = randomPlayer.stats.sho;
    document.getElementById('stat-pas').innerText = randomPlayer.stats.pas;
    document.getElementById('stat-dri').innerText = randomPlayer.stats.dri;
    document.getElementById('stat-def').innerText = randomPlayer.stats.def;
    document.getElementById('stat-phy').innerText = randomPlayer.stats.phy;

    // Simulate opening wait time delay (2 seconds)
    setTimeout(() => {
        animSection.classList.add('hidden');
        cardDisplay.classList.remove('hidden');
    }, 2000);
}

function resetStore() {
    document.getElementById('reveal-screen').classList.add('hidden');
    document.getElementById('store').classList.remove('hidden');
}