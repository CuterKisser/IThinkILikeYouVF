const episodes = [
    { value: '47.jpg', text: '47# Espionnage innocent', description: 'i think i like you VF episode 47' },
    { value: '46.jpg', text: '46# Protégé', description: 'i think i like you VF episode 46' },
    { value: '45.jpg', text: '45# Pas de cette façon', description: 'i think i like you VF episode 45' },
    { value: '44.jpg', text: '44# Je crois que je te connais', description: 'i think i like you VF episode 44' },
    { value: '', text: '/\\ Saison 2  /\\', description: 'i think i like you VF saison 2', disabled: true },
    { value: '43.jpg', text: '43# Spécial DnD - Part 4 - Célébration', description: 'i think i like you VF episode 43' },
    { value: '42.jpg', text: '42# Spécial DnD - Part 3 - Château de la mort', description: 'i think i like you VF episode 42' },
    { value: '41.jpg', text: '41# Spécial DnD - Part 2 - Le Pacte', description: 'i think i like you VF episode 41' },
    { value: '40.jpg', text: "40# Spécial DnD - Part 1 - L'aventure commence !", description: 'i think i like you VF episode 40' },
    { value: '39.jpg', text: '39# Halloween', description: 'i think i like you VF episode 39' },
    { value: '38.jpg', text: "38# Je t'aime", description: 'i think i like you VF episode 38' },
    { value: '37.jpg', text: "37# Je crois que je t'aime", description: 'i think i like you VF episode 37' },
    { value: '36.jpg', text: '36# Limite dépassée', description: 'i think i like you VF episode 36' },
    { value: '35.jpg', text: '35# Limite atteinte', description: 'i think i like you VF episode 35' },
    { value: '34.jpg', text: "34# Ray, l'Omniscient", description: 'i think i like you VF episode 34' },
    { value: '33.jpg', text: '33# Réception du colis à temps', description: 'i think i like you VF episode 33' },
    { value: '32.jpg', text: '32# Rival Blessé', description: 'i think i like you VF episode 32' },
    { value: '31.jpg', text: '31# Intervention', description: 'i think i like you VF episode 31' },
    { value: '30.jpg', text: '30# Spécial Roadtrip - Part 6 - Excellente compagnie', description: 'i think i like you VF episode 30' },
    { value: '29.jpg', text: '29# Spécial Roadtrip - Part 5 - Bonne compagnie', description: 'i think i like you VF episode 29' },
    { value: '28.jpg', text: '28# Spécial Roadtrip - Part 4 - Compagnie', description: 'i think i like you VF episode 28' },
    { value: '27.jpg', text: '27# Spécial Roadtrip - Part 3 - Bonne nuit', description: 'i think i like you VF episode 27' },
    { value: '26.jpg', text: '26# Spécial Roadtrip - Part 2 - Camping', description: 'i think i like you VF episode 26' },
    { value: '25.jpg', text: '25# Spécial Roadtrip - Part 1 - Roadtrip', description: 'i think i like you VF episode 25' },
    { value: '24.jpg', text: '24# En retard', description: 'i think i like you VF episode 24' },
    { value: '23.jpg', text: '23# Soirée entre potes - Part 2', description: 'i think i like you VF episode 23' },
    { value: '22.jpg', text: '22# Soirée entre potes - Part 1', description: 'i think i like you VF episode 22' },
    { value: '21.jpg', text: '21# Dev déteste', description: 'i think i like you VF episode 21' },
    { value: '20.jpg', text: '20# Pride - Part 2', description: 'i think i like you VF episode 20' },
    { value: '19.jpg', text: '19# Pride - Part 1', description: 'i think i like you VF episode 19' },
    { value: '18.jpg', text: '18# Escapade à la plage - Part 2', description: 'i think i like you VF episode 18' },
    { value: '17.jpg', text: '17# Escapade à la plage - Part 1', description: 'i think i like you VF episode 17' },
    { value: '16.jpg', text: '16# Brunch', description: 'i think i like you VF episode 16' },
    { value: '15.jpg', text: '15# Rivalité', description: 'i think i like you VF episode 15' },
    { value: '14.jpg', text: '14# Un ami', description: 'i think i like you VF episode 14' },
    { value: '13.jpg', text: '13# Expression Impassible', description: 'i think i like you VF episode 13' },
    { value: '12.jpg', text: '12# Partage de loisirs', description: 'i think i like you VF episode 12' },
    { value: '11.jpg', text: '11# I think I craft you', description: 'i think i like you VF episode 11' },
    { value: '10.jpg', text: '10# Jour pluvieux', description: 'i think i like you VF episode 10' },
    { value: '9.jpg', text: '9# Café', description: 'i think i like you VF episode 9' },
    { value: '8.jpg', text: '8# Sortie entre potes', description: 'i think i like you VF episode 8' },
    { value: '7.jpg', text: "7# Salut ! Moi, c'est...", description: 'i think i like you VF episode 7' },
    { value: '6.jpg', text: '6# Reste sur tes gardes', description: 'i think i like you VF episode 6' },
    { value: '5.jpg', text: '5# Quelle coïncidence!', description: 'i think i like you VF episode 5' },
    { value: '4.jpg', text: '4# Livraison retardée - Ça en valait la peine !', description: 'i think i like you VF episode 4' },
    { value: '3.jpg', text: '3# Évaluez votre livraison - Très insatisfait', description: 'i think i like you VF episode 3' },
    { value: '2.jpg', text: '2# Statut de livraison - de retour sur le planning', description: 'i think i like you VF episode 2' },
    { value: '1.jpg', text: '1# Livraison de colis', description: 'i think i like you VF episode 1' },
    { value: '', text: '/\\ Saison 1  /\\', description: 'i think i like you VF saison 1', disabled: true },
];