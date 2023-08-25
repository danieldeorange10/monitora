var map = L.map('map').setView([-23.43394427683397, -45.081851484942035,], 3);

// Criar o mapa usando um provedor de tile
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

// Criar os dois grupos de camadas para escolas e praças
var escolasLayer = L.layerGroup();
var pracasLayer = L.layerGroup();

// Adicionar o controle de camadas ao mapa
L.control.layers(null, { "Escolas": escolasLayer, "Praças": pracasLayer }).addTo(map);

 // Lista de coordenadas, nomes e imagens dos marcadores
var localization = [

    { lat: -28.04800, lng: -48.62572, nome: 'E. M. E. F. JANDIRA LUISA DA SILVA', imagem: 'https://gazeta24h.com/wp-content/uploads/2023/05/Projeto_Despertar-860x573.jpg', informacoes: "Quadra de Futebol, Basquete e Vôlei. Horário: 10h as 19h somente aos finais de semana.", informacoes2: "Horários: 8:00", icone: 'https://imgur.com/lNEFVcq.png'},
    { lat: -28.03770, lng: -48.60796, nome: 'Praia da Silveira', imagem: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/2a/40/3b/visao-do-alto-do-morro.jpg?w=1200&h=-1&s=1', informacoes: "Monitorada pela: E. M. E. F. JANDIRA LUISA DA SILVA", informacoes2: "1 TURMA", icone: 'https://imgur.com/Fb8bVYx.png'},
    
    { lat: -28.08650, lng: -48.68315, nome: 'E.M.E.F. JANUÁRIO DOMINGOS FERREIRA', imagem: 'https://gazeta24h.com/wp-content/uploads/2023/05/Projeto_Despertar-860x573.jpg', informacoes: "Escola", icone: 'https://imgur.com/lNEFVcq.png'},
    { lat: -28.08701, lng: -48.63202, nome: 'Praia da Barra', imagem: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/2a/40/3b/visao-do-alto-do-morro.jpg?w=1200&h=-1&s=1', informacoes: "MONITORADO PELA - E.M.E.F JANUÁRIO DOMINGOS FERREIRA", informacoes2: "2 Turma", icone: 'https://imgur.com/Fb8bVYx.png'},

    { lat: -28.04424, lng: -48.64931, nome: 'Escola Municipal Paula Martins', imagem: 'https://gazeta24h.com/wp-content/uploads/2023/05/Projeto_Despertar-860x573.jpg', informacoes: "Escola", icone: 'https://imgur.com/lNEFVcq.png'},
    { lat: -28.07832, lng: -48.62840, nome: 'Praia da Ferrugem', imagem: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/2a/40/3b/visao-do-alto-do-morro.jpg?w=1200&h=-1&s=1', informacoes: "MONITORADO PELA - E.M.E.F JANUÁRIO DOMINGOS FERREIRA", informacoes2: "2 Turma", icone: 'https://imgur.com/Fb8bVYx.png'},

    { lat: -28.11295, lng: -48.65416, nome: 'C.E.M. VICE PREFEITO CECÍLIO COUTO SILVEIRA', imagem: 'https://gazeta24h.com/wp-content/uploads/2023/05/Projeto_Despertar-860x573.jpg', informacoes: "Escola", icone: 'https://imgur.com/lNEFVcq.png'},
    { lat: -28.10797, lng: -48.63550, nome: 'Praia do Ouvidor', imagem: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/2a/40/3b/visao-do-alto-do-morro.jpg?w=1200&h=-1&s=1', informacoes: "MONITORADO PELA - E.M.E.F JANUÁRIO DOMINGOS FERREIRA", informacoes2: "2 Turma", icone: 'https://imgur.com/Fb8bVYx.png'},

    { lat: -28.07156, lng: -48.66300, nome: 'EMEF NORBERTO - ENCANTADA', imagem: 'https://gazeta24h.com/wp-content/uploads/2023/05/Projeto_Despertar-860x573.jpg', informacoes: "Escola", icone: 'https://imgur.com/lNEFVcq.png'},
    { lat: -28.08701, lng: -48.63202, nome: 'Praia da Barra', imagem: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/2a/40/3b/visao-do-alto-do-morro.jpg?w=1200&h=-1&s=1', informacoes: "MONITORADO PELA - E.M.E.F JANUÁRIO DOMINGOS FERREIRA", informacoes2: "2 Turma", icone: 'https://imgur.com/Fb8bVYx.png'},

    { lat: -28.03063, lng: -48.62457, nome: 'E.M.E.F. PINGUIRITO', imagem: 'https://gazeta24h.com/wp-content/uploads/2023/05/Projeto_Despertar-860x573.jpg', informacoes: "Escola", icone: 'https://imgur.com/lNEFVcq.png'},
    { lat: -28.02089, lng: -48.62178, nome: 'Praia Garopaba', imagem: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/2a/40/3b/visao-do-alto-do-morro.jpg?w=1200&h=-1&s=1', informacoes: "MONITORADO PELA - E.M.E.F JANUÁRIO DOMINGOS FERREIRA", informacoes2: "2 Turma", icone: 'https://imgur.com/Fb8bVYx.png'},

    { lat: -28.06647, lng: -48.62567, nome: 'E. M. E. F. AGOSTINHO BOTELHO', imagem: 'https://gazeta24h.com/wp-content/uploads/2023/05/Projeto_Despertar-860x573.jpg', informacoes: "Escola", icone: 'https://imgur.com/lNEFVcq.png'},
    { lat: -28.07832, lng: -48.62840, nome: 'Praia da Ferrugem', imagem: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/2a/40/3b/visao-do-alto-do-morro.jpg?w=1200&h=-1&s=1', informacoes: "MONITORADO PELA - E.M.E.F JANUÁRIO DOMINGOS FERREIRA", informacoes2: "2 Turma", icone: 'https://imgur.com/Fb8bVYx.png'},

    { lat: -28.11295, lng: -48.65416, nome: 'C.E.M. VICE PREFEITO CECÍLIO COUTO SILVEIRA', imagem: 'https://gazeta24h.com/wp-content/uploads/2023/05/Projeto_Despertar-860x573.jpg', informacoes: "Escola", icone: 'https://imgur.com/lNEFVcq.png'},
    { lat: -28.10797, lng: -48.63550, nome: 'Praia do Ouvidor', imagem: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/2a/40/3b/visao-do-alto-do-morro.jpg?w=1200&h=-1&s=1', informacoes: "MONITORADO PELA - E.M.E.F JANUÁRIO DOMINGOS FERREIRA", informacoes2: "2 Turma", icone: 'https://imgur.com/Fb8bVYx.png'},

    { lat: -28.11295, lng: -48.65416, nome: 'C.E.M. VICE PREFEITO CECÍLIO COUTO SILVEIRA', imagem: 'https://gazeta24h.com/wp-content/uploads/2023/05/Projeto_Despertar-860x573.jpg', informacoes: "Escola", icone: 'https://imgur.com/lNEFVcq.png'},
    { lat: -28.10797, lng: -48.63550, nome: 'Praia do Ouvidor', imagem: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/2a/40/3b/visao-do-alto-do-morro.jpg?w=1200&h=-1&s=1', informacoes: "MONITORADO PELA - E.M.E.F JANUÁRIO DOMINGOS FERREIRA", informacoes2: "2 Turma", icone: 'https://imgur.com/Fb8bVYx.png'},

    { lat: -28.11295, lng: -48.65416, nome: 'C.E.M. VICE PREFEITO CECÍLIO COUTO SILVEIRA', imagem: 'https://gazeta24h.com/wp-content/uploads/2023/05/Projeto_Despertar-860x573.jpg', informacoes: "Escola", icone: 'https://imgur.com/lNEFVcq.png'},
    { lat: -28.10797, lng: -48.63550, nome: 'Praia do Ouvidor', imagem: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/2a/40/3b/visao-do-alto-do-morro.jpg?w=1200&h=-1&s=1', informacoes: "MONITORADO PELA - E.M.E.F JANUÁRIO DOMINGOS FERREIRA", informacoes2: "2 Turma", icone: 'https://imgur.com/Fb8bVYx.png'},

    { lat: -28.11295, lng: -48.65416, nome: 'C.E.M. VICE PREFEITO CECÍLIO COUTO SILVEIRA', imagem: 'https://gazeta24h.com/wp-content/uploads/2023/05/Projeto_Despertar-860x573.jpg', informacoes: "Escola", icone: 'https://imgur.com/lNEFVcq.png'},
    { lat: -28.10797, lng: -48.63550, nome: 'Praia do Ouvidor', imagem: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/2a/40/3b/visao-do-alto-do-morro.jpg?w=1200&h=-1&s=1', informacoes: "MONITORADO PELA - E.M.E.F JANUÁRIO DOMINGOS FERREIRA", informacoes2: "2 Turma", icone: 'https://imgur.com/Fb8bVYx.png'},

    { lat: -28.11295, lng: -48.65416, nome: 'C.E.M. VICE PREFEITO CECÍLIO COUTO SILVEIRA', imagem: 'https://gazeta24h.com/wp-content/uploads/2023/05/Projeto_Despertar-860x573.jpg', informacoes: "Escola", icone: 'https://imgur.com/lNEFVcq.png'},
    { lat: -28.10797, lng: -48.63550, nome: 'Praia do Ouvidor', imagem: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/2a/40/3b/visao-do-alto-do-morro.jpg?w=1200&h=-1&s=1', informacoes: "MONITORADO PELA - E.M.E.F JANUÁRIO DOMINGOS FERREIRA", informacoes2: "2 Turma", icone: 'https://imgur.com/Fb8bVYx.png'},
];  

// Adicionar marcadores no mapa com nomes e imagens
localization.forEach(function(coord) {
    var icon = L.icon({
        iconUrl: coord.icone,
        iconSize: [30, 30],
        popupAnchor: [0, -20]
    });

var marker = L.marker([coord.lat, coord.lng], { icon: icon }).addTo(map);
marker.bindPopup(coord.nome);

marker.on('click', function() {
var imagemOverlay = document.getElementById('imagem-overlay');
var imagem = document.getElementById('imagem');
var informacoes = document.getElementById("p");
var informacoes2 = document.getElementById("p2")
imagem.src = coord.imagem;
informacoes2.textContent = coord.informacoes2;
informacoes.textContent = coord.informacoes;
imagemOverlay.style.display = 'block';
    });
        });

map.on('click', function(event) {
var imagemOverlay = document.getElementById('imagem-overlay');
if (event.originalEvent.target.id !== 'imagem-overlay') {
imagemOverlay.style.display = 'none';
    }
        });
