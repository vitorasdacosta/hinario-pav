const hinosData = [
    {
        "nome": "A Ele a Gloria",
        "banda": "Nani Azevedo",
        "tom_fem": "C",
        "tom_masc": "D",
        "cifra": "https://www.cifraclub.com.br/nani-azevedo/a-ele-gloria/",
        "youtube": "https://www.youtube.com/watch?v=ZRtYLcJGSS4"
    },
    {
        "nome": "A paz do Senhor é que nós",
        "banda": "Corinhos",
        "tom_fem": "C",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/ministerio-de-louvor-iecvp/a-paz-do-senhor/",
        "youtube": "https://www.youtube.com/watch?v=zC67TsJAu3c"
    },
    {
        "nome": "Agnus dei",
        "banda": "David Quilan",
        "tom_fem": "F",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/david-quinlan/agnus-dei/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=2Kl8_eLqXnQ"
    },
    {
        "nome": "Água da Vida",
        "banda": "PAV",
        "tom_fem": "E",
        "tom_masc": "E",
        "cifra": "https://drive.google.com/file/d/1-pZqrEolT978TGXnnFzxQA-e5GOMNJhE/view",
        "youtube": ""
    },
    {
        "nome": "Águas Cristalinas",
        "banda": "Marquinhos Gomes",
        "tom_fem": "C",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/marquinhos-gomes/aguas-cristalinas/",
        "youtube": "https://www.youtube.com/watch?v=cEpDy3QlYJ4"
    },
    {
        "nome": "Águas purificadoras",
        "banda": "Diante do trono",
        "tom_fem": "D",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/diante-do-trono/aguas-purificadoras/",
        "youtube": "https://www.youtube.com/watch?v=ziR49ui-G28"
    },
    {
        "nome": "Aleluia Hosana",
        "banda": "Min. trazendo a arca",
        "tom_fem": "D",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/toque-no-altar/aleluia-hosana/",
        "youtube": "https://www.youtube.com/watch?v=3GtFSFcQ4FU"
    },
    {
        "nome": "Alfa e Ômega",
        "banda": "Asaph borba",
        "tom_fem": "G",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/eli-soares/alfa-e-omega/",
        "youtube": "https://youtu.be/PLdigF7JTwM?si=ZAC93xWs31GKVD1F"
    },
    {
        "nome": "Aliança",
        "banda": "Minst Koinonya Louvor",
        "tom_fem": "G",
        "tom_masc": "C",
        "cifra": "https://www.cifraclub.com.br/ministerio-koinonya-de-louvor/alianca/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=7XNFu7mA_JM"
    },
    {
        "nome": "Alto preço",
        "banda": "Asaph borba",
        "tom_fem": "A",
        "tom_masc": "C",
        "cifra": "https://www.cifraclub.com.br/asaph-borba/alto-preco/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=4MFsMX0Hf-g"
    },
    {
        "nome": "Alvo mais que a neve",
        "banda": "Harpa Cristã",
        "tom_fem": "C",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/fernandinho/alvo-mais-que-a-neve/",
        "youtube": "https://www.youtube.com/watch?v=dlEOFHgtE14"
    },
    {
        "nome": "Ao erguermos as mãos",
        "banda": "Aline Barros",
        "tom_fem": "C",
        "tom_masc": "C",
        "cifra": "https://www.cifraclub.com.br/aline-barros/ao-erguermos-as-maos/",
        "youtube": "https://www.youtube.com/watch?v=prKARWDrwEo"
    },
    {
        "nome": "Ao único que é digno",
        "banda": "Aline Barros",
        "tom_fem": "C",
        "tom_masc": "D",
        "cifra": "https://www.cifraclub.com.br/aline-barros/ao-unico/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=60CuZyzGf5U"
    },
    {
        "nome": "Aos pés da cruz",
        "banda": "Kléber Lucas",
        "tom_fem": "D",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/kleber-lucas/aos-pes-da-cruz/",
        "youtube": "https://youtu.be/IPlYNQqBJAw?si=xaShdkSG_Z_u6Wm0"
    },
    {
        "nome": "Aquele que está feliz",
        "banda": "Com. Nilópolis",
        "tom_fem": "G",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/comunidade-de-nilopolis/aquele-que-esta-feliz/",
        "youtube": "https://www.youtube.com/watch?v=x6WOuUJNQ2s"
    },
    {
        "nome": "Atos 2",
        "banda": "Gabriela Rocha",
        "tom_fem": "G",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/gabriela-rocha/atos-2/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=WWrU6LC_4ho"
    },
    {
        "nome": "Autor da minha fé",
        "banda": "Grupo Logos",
        "tom_fem": "A",
        "tom_masc": "C",
        "cifra": "https://docs.google.com/document/d/17vAl-rtKFdVPE321-q1I2X9y_kpDH0R4/edit?usp=drivesdk&ouid=112037201329645072355&rtpof=true&sd=true",
        "youtube": "https://www.youtube.com/watch?v=l_4YjO4FHA8"
    },
    {
        "nome": "Autoridade e poder",
        "banda": "Marcos Goes",
        "tom_fem": "E",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/marcos-goes/autoridade-poder/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=L1jyMgQ7wZw"
    },
    {
        "nome": "Bem aventurado é o que está",
        "banda": "Aline Barros",
        "tom_fem": "F",
        "tom_masc": "A",
        "cifra": "",
        "youtube": "https://www.youtube.com/watch?v=MNldodUlYsk"
    },
    {
        "nome": "Bem querer",
        "banda": "Marcos Goes",
        "tom_fem": "D",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/marcos-goes/bem-querer/",
        "youtube": "https://www.youtube.com/watch?v=aIrALNV2ZZY"
    },
    {
        "nome": "Bondade de Deus",
        "banda": "Ibab",
        "tom_fem": "A",
        "tom_masc": "D",
        "cifra": "https://www.cifraclub.com.br/ibab-celebracao/bondade-de-deus/",
        "youtube": "https://www.youtube.com/watch?v=ScEN3eh-bnE"
    },
    {
        "nome": "Calmo, sereno, tranquilo",
        "banda": "Grupo Elo",
        "tom_fem": "D",
        "tom_masc": "D",
        "cifra": "https://www.cifraclub.com.br/grupo-elo/calmo-sereno-tranquilo/",
        "youtube": "https://youtu.be/-RSRH5wO-vU?si=KPCMaFVzhbOMBnMR"
    },
    {
        "nome": "Caminho no deserto",
        "banda": "Nivea Soares",
        "tom_fem": "D",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/nivea-soares/caminho-no-deserto/",
        "youtube": "https://www.youtube.com/watch?v=n3qTisl_Unk"
    },
    {
        "nome": "Canção do Apocalipse",
        "banda": "Diante do trono",
        "tom_fem": "G",
        "tom_masc": "B",
        "cifra": "https://www.cifraclub.com.br/diante-do-trono/cancao-do-apocalipse/",
        "youtube": "https://www.youtube.com/watch?v=G9BRa5e_T5g"
    },
    {
        "nome": "Canta minh'alma",
        "banda": "Ibab",
        "tom_fem": "A",
        "tom_masc": "D",
        "cifra": "https://www.cifraclub.com.br/ibab-celebracao/canta-minh-alma/",
        "youtube": "https://www.youtube.com/watch?v=0IV1EHl_6VA"
    },
    {
        "nome": "Cântico de vitória",
        "banda": "PAV",
        "tom_fem": "E",
        "tom_masc": "G",
        "cifra": "https://drive.google.com/file/d/1-pZqrEolT978TGXnnFzxQA-e5GOMNJhE/view",
        "youtube": "https://www.youtube.com/watch?v=nhXBk6Z_9XM"
    },
    {
        "nome": "Celebrai a Cristo, Celebrai",
        "banda": "Corinhos",
        "tom_fem": "E",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/ministerio-koinonya-de-louvor/celebrai-cristocelebrai/",
        "youtube": "https://youtu.be/EG2T7SWMu_s?si=JSTL640ycSRGsM8i"
    },
    {
        "nome": "Compromisso",
        "banda": "Corinhos",
        "tom_fem": "G",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/kadoshi/compromisso/",
        "youtube": "https://www.youtube.com/watch?v=sKivG4vx9OM"
    },
    {
        "nome": "Compromisso",
        "banda": "PAV",
        "tom_fem": "F",
        "tom_masc": "A",
        "cifra": "https://drive.google.com/file/d/1-pZqrEolT978TGXnnFzxQA-e5GOMNJhE/view?usp=sharing",
        "youtube": "https://www.youtube.com/watch?v=rlGE7S0yT2M"
    },
    {
        "nome": "Comunhão (Vinho e pão)",
        "banda": "Kléber Lucas",
        "tom_fem": "D",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/kleber-lucas/comunhao/",
        "youtube": "https://www.youtube.com/watch?v=zCnoLxCZdSU"
    },
    {
        "nome": "Confiarei em Ti Senhor",
        "banda": "Comunidade Zona Sul",
        "tom_fem": "G",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/comunidade-da-zona-sul/confiarei/",
        "youtube": "https://www.youtube.com/watch?v=x9LtADSqDUU"
    },
    {
        "nome": "Consagração",
        "banda": "Aline Barros",
        "tom_fem": "A",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/aline-barros/consagracao/",
        "youtube": "https://www.youtube.com/watch?v=9WklxuZ6UKQ"
    },
    {
        "nome": "Coração igual ao teu",
        "banda": "Diante do trono",
        "tom_fem": "E",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/diante-do-trono/coracao-igual-ao-teu/#key=7",
        "youtube": ""
    },
    {
        "nome": "Cordeiro e o leão",
        "banda": "Marcus sales",
        "tom_fem": "C",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/marcus-salles/leao-e-cordeiro/#instrument=guitar",
        "youtube": "https://www.youtube.com/watch?v=lc8kQHrw2bk"
    },
    {
        "nome": "Creio que Tu és a cura",
        "banda": "Gabriela Rocha",
        "tom_fem": "E",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/gabriela-rocha/creio-que-tu-es-a-cura/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=6TcAMUOU-VY"
    },
    {
        "nome": "Cria em mim",
        "banda": "Com. Nilópolis",
        "tom_fem": "G",
        "tom_masc": "C",
        "cifra": "https://www.cifraclub.com.br/comunidade-de-nilopolis/cria-em-mim/",
        "youtube": "https://www.youtube.com/watch?v=6XQrYQujlbs"
    },
    {
        "nome": "Cristo é rei",
        "banda": "PIB trindade",
        "tom_fem": "A",
        "tom_masc": "C",
        "cifra": "https://www.cifraclub.com.br/pib-em-trindade/cristo-rei/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=lxWsc-yunVw"
    },
    {
        "nome": "Descansarei",
        "banda": "Comu. Ev. Maringá",
        "tom_fem": "C",
        "tom_masc": "C",
        "cifra": "https://www.cifraclub.com.br/comunidade-evangelica-de-maringa/descansarei/",
        "youtube": "https://youtu.be/bP8SReGJlgk?si=Yn9pp_W_5g8c2fMB"
    },
    {
        "nome": "Deus do impossível",
        "banda": "Aline Barros",
        "tom_fem": "G",
        "tom_masc": "C",
        "cifra": "",
        "youtube": ""
    },
    {
        "nome": "Deus é Deus",
        "banda": "Delino Marçal",
        "tom_fem": "C",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/delino-marcal/deus--deus/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=JPqitveFAGo"
    },
    {
        "nome": "Deus forte",
        "banda": "Kléber Lucas",
        "tom_fem": "D",
        "tom_masc": "G",
        "cifra": "",
        "youtube": ""
    },
    {
        "nome": "Dez mil razões",
        "banda": "Jr Neguebe",
        "tom_fem": "D",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/junior-neguebe/10000-razoes/",
        "youtube": "https://www.youtube.com/watch?v=jIYtJAn1sbM"
    },
    {
        "nome": "Digno de glória",
        "banda": "Asaph Borba",
        "tom_fem": "",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/asaph-borba/digno-de-gloria/#google_vignette",
        "youtube": "https://www.youtube.com/watch?v=pQju8cyof8k"
    },
    {
        "nome": "Digno é o Senhor",
        "banda": "Aline Barros",
        "tom_fem": "G",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/aline-barros/digno-o-senhor--/",
        "youtube": "https://www.youtube.com/watch?v=ptqPgzAbpGc"
    },
    {
        "nome": "Doce presença",
        "banda": "Corinhos",
        "tom_fem": "D",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/sergio-saas/doce-presenca/",
        "youtube": "https://www.youtube.com/watch?v=vKBbG05v6Gk"
    },
    {
        "nome": "Dono das estrelas",
        "banda": "Trazendo a arca",
        "tom_fem": "A",
        "tom_masc": "C",
        "cifra": "https://www.cifraclub.com.br/trazendo-arca/dono-das-estrelas/",
        "youtube": "https://www.youtube.com/watch?v=cufg8G6dAaU"
    },
    {
        "nome": "É de coração",
        "banda": "P. C. Baruk",
        "tom_fem": "C",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/paulo-cesar-baruk/-de-coracao/",
        "youtube": "https://youtu.be/POWjv4Eejss?si=MKaZocbaOX3bWIye"
    },
    {
        "nome": "É o teu povo",
        "banda": "Ipalpha",
        "tom_fem": "G",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/ipalpha/e-o-teu-povo/",
        "youtube": "https://www.youtube.com/watch?v=7DH_tKN_n-g"
    },
    {
        "nome": "Ele é exaltado",
        "banda": "Adhemar de Campos",
        "tom_fem": "E",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/adhemar-de-campos/ele-exaltado/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=22c5Flzd8Iw"
    },
    {
        "nome": "Ele é leão da tribo de judá",
        "banda": "Adhemar de campos",
        "tom_fem": "C",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/adhemar-de-campos/leao-da-tribo-de-juda/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=vfuFvmoTO1o"
    },
    {
        "nome": "Ele vem",
        "banda": "Gabriel Guedes",
        "tom_fem": "F",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/gabriel-guedes/ele-vem-part-gabriela-rocha/",
        "youtube": "https://www.youtube.com/watch?v=YudXB8MZRTs"
    },
    {
        "nome": "Ele vive",
        "banda": "Juliano son",
        "tom_fem": "G",
        "tom_masc": "C",
        "cifra": "https://www.cifraclub.com.br/juliano-son/ele-vive-porque-ele-vive-pot-pourri/",
        "youtube": "https://www.youtube.com/watch?v=8h-v6wzviOU"
    },
    {
        "nome": "Elevo os olhos para os montes",
        "banda": "PAV",
        "tom_fem": "G",
        "tom_masc": "G",
        "cifra": "https://drive.google.com/file/d/1-pZqrEolT978TGXnnFzxQA-e5GOMNJhE/view",
        "youtube": "https://www.youtube.com/watch?v=inL7ocqL-aM"
    },
    {
        "nome": "Em espírito, em verdade",
        "banda": "Harpa Cristã",
        "tom_fem": "G",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/harpa-crista/em-espirito-em-verdade/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=g6MsbSN6Ylc"
    },
    {
        "nome": "Em teus braços",
        "banda": "Laura",
        "tom_fem": "C",
        "tom_masc": "D",
        "cifra": "https://www.cifraclub.com.br/laura-souguellis/em-teus-bracos/",
        "youtube": "https://www.youtube.com/watch?v=V5ixXXGYdPE"
    },
    {
        "nome": "Emaús",
        "banda": "Morada",
        "tom_fem": "D",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/ministerio-morada/emaus/#key=0",
        "youtube": ""
    },
    {
        "nome": "Entrego a Ti a minha oração",
        "banda": "Bati. Nova Jerusalém",
        "tom_fem": "G",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/igreja-batista-nova-jerusalem/seguranca/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=OdN2HuqA83A"
    },
    {
        "nome": "Escape",
        "banda": "Renascer",
        "tom_fem": "C",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/renascer-praise/escape/#key=0",
        "youtube": "https://youtu.be/Q7f_4cn9gJk?si=vP3FQWsGvBZkt3zI"
    },
    {
        "nome": "Espírito de Deus",
        "banda": "PIB trindade",
        "tom_fem": "C",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/1o-igreja-batista-em-trindade/espirito-de-deus/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=WdNMtV1MVzQ"
    },
    {
        "nome": "Espírito enche a minha vida",
        "banda": "Harpa Cristã",
        "tom_fem": "C",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/harpa-crista/espirito-enche-minha-vida/",
        "youtube": "https://www.youtube.com/watch?v=cTTS8ZaBxYg"
    },
    {
        "nome": "Espírito Santo",
        "banda": "Fernanda Brum",
        "tom_fem": "A",
        "tom_masc": "C",
        "cifra": "https://www.cifraclub.com.br/fernanda-brum/espirito-santo/",
        "youtube": "https://www.youtube.com/watch?v=pE-7PnL8dUc"
    },
    {
        "nome": "Estamos de Pé",
        "banda": "Marcus Salles",
        "tom_fem": "E",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/marcus-salles/estamos-de-pe/",
        "youtube": "https://www.youtube.com/watch?v=4x-yrCz1D9g"
    },
    {
        "nome": "Estrela da manhã",
        "banda": "Corinhos",
        "tom_fem": "A",
        "tom_masc": "D",
        "cifra": "https://www.cifraclub.com.br/arianne/estrela-da-manha/",
        "youtube": "https://www.youtube.com/watch?v=nC11wNNfgsI"
    },
    {
        "nome": "Eterno Deus",
        "banda": "Ibab",
        "tom_fem": "G",
        "tom_masc": "C",
        "cifra": "https://www.cifraclub.com.br/paulo-cesar-baruk/eterno-deus-everlasting-god/",
        "youtube": "https://www.youtube.com/watch?v=0VPAX9LxXQ0"
    },
    {
        "nome": "Eu e minha casa",
        "banda": "André Valadão",
        "tom_fem": "E",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/andre-valadao/eu-minha-casa/#key=7",
        "youtube": "https://youtu.be/1dzv1eq5CtU?si=sHm2DmQN1Kz6sGWK"
    },
    {
        "nome": "Eu me alegro em Ti",
        "banda": "Ibab",
        "tom_fem": "A",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/ibab-celebracao/eu-me-alegro-em-ti/",
        "youtube": "https://www.youtube.com/watch?v=CgFhsjN82RE"
    },
    {
        "nome": "Eu me rendo",
        "banda": "Renascer",
        "tom_fem": "C",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/renascer-praise/eu-me-rendo/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=qmRVarX4X1M"
    },
    {
        "nome": "Eu te agradeço",
        "banda": "Kleber Lucas",
        "tom_fem": "C",
        "tom_masc": "F",
        "cifra": "https://www.cifraclub.com.br/kleber-lucas/te-agradeco/",
        "youtube": "https://www.youtube.com/watch?v=QTJBkoh5uk8"
    },
    {
        "nome": "Eu te louvarei",
        "banda": "Ronaldo B.",
        "tom_fem": "D",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/ronaldo-bezerra/eu-te-louvarei-meu-bom-jesus/",
        "youtube": "https://www.youtube.com/watch?v=_xVuItEPVQE"
    },
    {
        "nome": "Eu vou construir",
        "banda": "Nivea Soares",
        "tom_fem": "D",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/nivea-soares/eu-vou-construir/",
        "youtube": "https://www.youtube.com/watch?v=bFoIro0Zl2Y"
    },
    {
        "nome": "Exaltamos Yahweh",
        "banda": "Fhop Music",
        "tom_fem": "E",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/casa-de-oracao-liberdade-rio/exaltamos-yahweh/",
        "youtube": "https://youtu.be/ENW5PIXKb_E?si=GUWBhVYmZ9dkW55U"
    },
    {
        "nome": "Filho do Deus vivo",
        "banda": "Nívea Soares",
        "tom_fem": "E",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/nivea-soares/filho-do-deus-vivo/",
        "youtube": "https://www.youtube.com/watch?v=PdJoTcOgwUA"
    },
    {
        "nome": "Firme nas promessas",
        "banda": "Harpa Cristã",
        "tom_fem": "E",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/andre-valadao/firme-nas-promessas/",
        "youtube": "https://www.youtube.com/watch?v=Enl22m3Z07U"
    },
    {
        "nome": "Firmeza (Em nada ponho a )",
        "banda": "Cantor cristão",
        "tom_fem": "E",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/cantor-cristao/366-firmeza/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=w_T_fG30TFw"
    },
    {
        "nome": "Foi na cruz",
        "banda": "Harpa",
        "tom_fem": "E",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/andre-valadao/foi-na-cruz/",
        "youtube": "https://www.youtube.com/watch?v=zj5aoAtkj5Y"
    },
    {
        "nome": "Glorifica",
        "banda": "V. Nova Irajá",
        "tom_fem": "D",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/projeto-vida-nova-de-iraja/glorifica/",
        "youtube": "https://www.youtube.com/watch?v=uhCjUn3XSEQ"
    },
    {
        "nome": "Grande Deus",
        "banda": "Geraldo G.",
        "tom_fem": "D",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/geraldo-guimaraes/grande-deus/",
        "youtube": "https://www.youtube.com/watch?v=Fr3n_nNMe5M"
    },
    {
        "nome": "Grande é o Senhor",
        "banda": "Adhemar de campos",
        "tom_fem": "G",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/adhemar-de-campos/grande-o-senhor/",
        "youtube": "https://www.youtube.com/watch?v=4_rv9Jmgc78"
    },
    {
        "nome": "Grandes coisas",
        "banda": "Batista Atitude",
        "tom_fem": "C",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/igreja-batista-atitude-central-da-barra/grandes-coisas/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=xXqyHHrSAEA"
    },
    {
        "nome": "Grato sou",
        "banda": "Lagoinha",
        "tom_fem": "D",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/lagoinha-worship/grato-sou-greateful/",
        "youtube": "https://youtu.be/uZsP18zGaDI?si=-pQ2BH1zgLcSWOGE"
    },
    {
        "nome": "Infinitamente mais",
        "banda": "Asaph borba",
        "tom_fem": "G",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/asaph-borba/infinitamente-mais/",
        "youtube": "https://www.youtube.com/watch?v=EDp-AKOzI1g"
    },
    {
        "nome": "Isaías 9",
        "banda": "Rodolfo Abrantes",
        "tom_fem": "A",
        "tom_masc": "D",
        "cifra": "https://www.cifraclub.com.br/rodolfo-abrantes/isaias-9/",
        "youtube": "https://www.youtube.com/watch?v=d6pflSCLIao"
    },
    {
        "nome": "Jeová Jireh",
        "banda": "Aline Barros",
        "tom_fem": "G",
        "tom_masc": "B",
        "cifra": "https://www.cifraclub.com.br/aline-barros/jeova-jireh/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=YyFd_dXy494"
    },
    {
        "nome": "Jesus é o centro",
        "banda": "Davi Sacer",
        "tom_fem": "C",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/davi-sacer/jesus-e-o-centro/",
        "youtube": "https://www.youtube.com/watch?v=1OM7kAt07gA"
    },
    {
        "nome": "Jesus em tua presença",
        "banda": "Asaph borba",
        "tom_fem": "D",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/asaph-borba/jesus-em-tua-presenca/",
        "youtube": "https://www.youtube.com/watch?v=0oventhqIPc"
    },
    {
        "nome": "Jesus filho de Deus",
        "banda": "Fernandinho",
        "tom_fem": "E",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/fernandinho/jesus-filho-de-deus/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=_G_xbDaSDEQ"
    },
    {
        "nome": "Jesus soberano",
        "banda": "PIB Trindade",
        "tom_fem": "G",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/1-igreja-batista-em-trindade/jesus-soberano/",
        "youtube": "https://youtu.be/KyYVfGxcdeg?si=mdOTRFRz18EdV_GY"
    },
    {
        "nome": "Jesus virá",
        "banda": "Ariane",
        "tom_fem": "E",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/arianne/jesus-vira/",
        "youtube": "https://www.youtube.com/watch?v=C-1OwvC8qeQ"
    },
    {
        "nome": "Jesus, plano melhor",
        "banda": "Renascer",
        "tom_fem": "A",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/renascer-praise/jesus-plano-melhor/",
        "youtube": "https://www.youtube.com/watch?v=lxX54kSq9gg"
    },
    {
        "nome": "Leão de Judá",
        "banda": "Corinhos",
        "tom_fem": "C",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/corinhos-evangelicos/leao-de-juda/",
        "youtube": "https://youtu.be/s2fVee9Us4k?si=UB323tCWgSP62Jd4"
    },
    {
        "nome": "Leva-me além",
        "banda": "Trazendo a arca",
        "tom_fem": "A",
        "tom_masc": "D",
        "cifra": "https://www.cifraclub.com.br/trazendo-arca/leva-me-alem/",
        "youtube": "https://www.youtube.com/watch?v=1x_a0tO7Esg"
    },
    {
        "nome": "Louve",
        "banda": "Lu Alone",
        "tom_fem": "C",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/lu-alone/louve/",
        "youtube": "https://youtu.be/7rSOppdclBM?si=OAVONDd_R5IQw91F"
    },
    {
        "nome": "Louvemos ao Senhor",
        "banda": "Adhemar de Campos",
        "tom_fem": "E",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/adhemar-de-campos/louvemos-ao-senhor/",
        "youtube": "https://www.youtube.com/watch?v=76S1BZ9EN2k"
    },
    {
        "nome": "Louvor e honra",
        "banda": "Ron Kenoly",
        "tom_fem": "A",
        "tom_masc": "D",
        "cifra": "https://www.cifraclub.com.br/ron-kenoly/ancient-of-days/",
        "youtube": "https://www.youtube.com/watch?v=43O3ecWRQFE"
    },
    {
        "nome": "Magnificar",
        "banda": "Cláudio Claro",
        "tom_fem": "C",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/claudio-claro/magnificar/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=6OnzjoborSY"
    },
    {
        "nome": "Manancial",
        "banda": "Aline Barros",
        "tom_fem": "C",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/aline-barros/manancial-eu-tenho-sede-de-ti/",
        "youtube": "https://www.youtube.com/watch?v=PImC9mXBMdI"
    },
    {
        "nome": "Maranata (Tu és a minha luz)",
        "banda": "Avivah",
        "tom_fem": "D",
        "tom_masc": "D",
        "cifra": "https://www.cifraclub.com.br/ministerio-avivah/maranata/",
        "youtube": "https://www.youtube.com/watch?v=iS6GXPbhCwU"
    },
    {
        "nome": "Maravilhosa graça",
        "banda": "Geraldo Guimarães",
        "tom_fem": "G",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/geraldo-guimaraes/maravilhosa-graca/",
        "youtube": "https://www.youtube.com/watch?v=Jlg3g30E6S0"
    },
    {
        "nome": "Maravilhosa Graça, teu amor que não falha",
        "banda": "GC Sede",
        "tom_fem": "D",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/drops-gl-adolescentes/maravilhosa-graca/",
        "youtube": "https://youtu.be/XjZQHVjJO8E?si=7d1K3ygVfG7l144A"
    },
    {
        "nome": "Maravilhoso é estar em tua pres",
        "banda": "Min.Koinona",
        "tom_fem": "E",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/ministerio-koinonya-de-louvor/maravilhoso-s/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=QT0Cn5X2h1I"
    },
    {
        "nome": "Me derramar",
        "banda": "Vineyard",
        "tom_fem": "E",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/vineyard/me-derramar/",
        "youtube": "https://www.youtube.com/watch?v=LJyK6vZRFSw"
    },
    {
        "nome": "Me esvaziar",
        "banda": "Nívea Soares",
        "tom_fem": "D",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/nivea-soares/quero-me-esvaziar/#google_vignette",
        "youtube": ""
    },
    {
        "nome": "Meu alvo é Cristo",
        "banda": "Kléber Lucas",
        "tom_fem": "F",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/kleber-lucas/meu-alvo/",
        "youtube": "https://www.youtube.com/watch?v=faRYpkO3v3A"
    },
    {
        "nome": "Nada além do sangue",
        "banda": "Fernandinho",
        "tom_fem": "G",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/fernandinho/nada-alem-do-sangue/",
        "youtube": "https://www.youtube.com/watch?v=csPaNdL6ndA"
    },
    {
        "nome": "Nada Temerei",
        "banda": "Batista Atitude",
        "tom_fem": "F",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/igreja-batista-atitude-central-da-barra/nada-temerei/",
        "youtube": "https://www.youtube.com/watch?v=olKvv9DEXVQ"
    },
    {
        "nome": "Não há Deus como tú",
        "banda": "Elizeu",
        "tom_fem": "C",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/elizeu-gomes/nao-ha-deus-como-tu/",
        "youtube": "https://www.youtube.com/watch?v=aakY6BuNKL8"
    },
    {
        "nome": "Não há Deus maior",
        "banda": "Comunidade Nilópolis",
        "tom_fem": "D",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/comunidade-de-nilopolis/nao-ha-deus-maior/",
        "youtube": "https://www.youtube.com/watch?v=DJQkbmLZzew"
    },
    {
        "nome": "Não há um outro nome igual",
        "banda": "Avivah",
        "tom_fem": "D",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/ministerio-avivah/nao-ha-um-nome-igual/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=yxLq1rZlYYY"
    },
    {
        "nome": "Não seremos abalados",
        "banda": "Nivea Soares",
        "tom_fem": "E",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/nivea-soares/nao-seremos-abalados-we-will-not-be-shaken/",
        "youtube": "https://www.youtube.com/watch?v=5Tjn2l6ELN0"
    },
    {
        "nome": "Não tenhas sobre Ti",
        "banda": "Paulo César Baruk",
        "tom_fem": "F",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/paulo-cesar-baruk/nao-tenhas-sobre-ti/",
        "youtube": "https://www.youtube.com/watch?v=v0vbOLiKGTI"
    },
    {
        "nome": "Nome sobre todo nome",
        "banda": "Casa de Davi",
        "tom_fem": "E",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/casa-de-davi/nome-sobre-todo-nome-52474/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=w4Gvsu2z6go"
    },
    {
        "nome": "Nossa esperança",
        "banda": "Harpa",
        "tom_fem": "A",
        "tom_masc": "C",
        "cifra": "https://www.cifraclub.com.br/harpa-crista/300-nossa-esperanca-/#key=3",
        "youtube": "https://youtu.be/SbG8A96Zg9g?si=ltB7S8ZyZvDQQS15"
    },
    {
        "nome": "Nosso Deus é poderoso",
        "banda": "adoração adoradores",
        "tom_fem": "F",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/adoracao-e-adoradores/nosso-deus-e-poderoso-god-is-able/",
        "youtube": "https://www.youtube.com/watch?v=6Gw9DBgXgvo"
    },
    {
        "nome": "Nosso Deus é soberano",
        "banda": "corinhos",
        "tom_fem": "F",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/aline-barros/nosso-deus-e-soberano/",
        "youtube": "https://www.youtube.com/watch?v=SacFg6uq_EE"
    },
    {
        "nome": "O espírito de Deus está aqui",
        "banda": "Asaph Borba",
        "tom_fem": "A",
        "tom_masc": "A",
        "cifra": "https://bananacifras.com/simplificada/a/arianne/o-espirito-de-deus-esta-aqui",
        "youtube": "https://youtu.be/MIhYL7w98Rw?si=059H3N00xS7vjK4y"
    },
    {
        "nome": "O espírito do Senhor",
        "banda": "Kléber Lucas",
        "tom_fem": "C",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/kleber-lucas/o-espirito-do-senhor/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=3OSnfOdGREY"
    },
    {
        "nome": "O nosso general é Cristo",
        "banda": "Adhemar",
        "tom_fem": "C",
        "tom_masc": "C",
        "cifra": "https://www.cifraclub.com.br/adhemar-de-campos/o-nosso-general-e-cristo/",
        "youtube": "https://www.youtube.com/watch?v=XKFHXLzsZ5Q"
    },
    {
        "nome": "O Senhor é bom",
        "banda": "Comunidade Zona Sul",
        "tom_fem": "G",
        "tom_masc": "B",
        "cifra": "https://www.cifraclub.com.br/comunidade-da-zona-sul/o-senhor--bom-/",
        "youtube": "https://www.youtube.com/watch?v=r5aJLQrQ6yU"
    },
    {
        "nome": "O Senhor é bom fonte eterna",
        "banda": "Ron Kenoly",
        "tom_fem": "E",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/ron-kenoly/o-senhor-e-bom/",
        "youtube": "https://www.youtube.com/watch?v=PKcUgxmjbi0&list=RDPKcUgxmjbi0&start_radio=1"
    },
    {
        "nome": "Óh quão lindo esse nome é",
        "banda": "Ana Nóbrega",
        "tom_fem": "D",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/ana-nobrega/oh-quao-lindo-esse-nome-/",
        "youtube": "https://www.youtube.com/watch?v=mTPgy4VuXyo"
    },
    {
        "nome": "Olhando pra Cruz",
        "banda": "Aline Couto",
        "tom_fem": "G",
        "tom_masc": "G",
        "cifra": "https://docs.google.com/document/d/1Z6LfuzOpHgOdj8LFykIrbgUPYCH0uSxM/edit?usp=drivesdk&ouid=112037201329645072355&rtpof=true&sd=true",
        "youtube": "https://www.youtube.com/watch?v=OxQnBcvIprg"
    },
    {
        "nome": "Ora Vem (Maranata)",
        "banda": "Sarando T. Ferida",
        "tom_fem": "E",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/ministerio-sarando-terra-ferida/ora-vem-maranata/",
        "youtube": "https://www.youtube.com/watch?v=QuyJcaH0Sro"
    },
    {
        "nome": "Pão da vida",
        "banda": "Cláudio Claro",
        "tom_fem": "B",
        "tom_masc": "D",
        "cifra": "https://www.cifraclub.com.br/claudio-claro/pao-da-vida/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=Cd9Ua1T5sPc"
    },
    {
        "nome": "Para te adorar",
        "banda": "PAV",
        "tom_fem": "A",
        "tom_masc": "A",
        "cifra": "https://drive.google.com/file/d/1-pZqrEolT978TGXnnFzxQA-e5GOMNJhE/view",
        "youtube": "https://youtu.be/QciV3GELwh0?si=O7nQDO8tXSIpxWu0"
    },
    {
        "nome": "Pela fé",
        "banda": "PAV",
        "tom_fem": "C",
        "tom_masc": "C",
        "cifra": "https://drive.google.com/file/d/1-pZqrEolT978TGXnnFzxQA-e5GOMNJhE/view",
        "youtube": "https://www.youtube.com/watch?v=M2R2axbQs9k"
    },
    {
        "nome": "Perdão",
        "banda": "Kléber Lucas",
        "tom_fem": "C",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/kleber-lucas/perdao/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=tVjbAh4j3yg"
    },
    {
        "nome": "Perdoado",
        "banda": "Kleber Lucas",
        "tom_fem": "F",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/kleber-lucas/perdoado/",
        "youtube": "https://www.youtube.com/watch?v=yZb6cr8eWuE"
    },
    {
        "nome": "Poder pra salvar",
        "banda": "Hillsong",
        "tom_fem": "E",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/hillsong-brasil/poder-para-salvar/",
        "youtube": "https://youtu.be/u5i4X1v__4Y?si=IywcmRaKwHhIfjJh"
    },
    {
        "nome": "Posso clamar",
        "banda": "Eyshila",
        "tom_fem": "G",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/eyshila/posso-clamar/",
        "youtube": "https://youtu.be/4zQGnfPAe-k?si=9FFGm5KB1tHuyM9b"
    },
    {
        "nome": "Pra sempre",
        "banda": "Avivah",
        "tom_fem": "G",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/ministerio-avivah/pra-sempre-forever/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=ishM2o8LW94"
    },
    {
        "nome": "Pra te adorar",
        "banda": "Batista Atitude",
        "tom_fem": "G",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/igreja-batista-atitude-central-da-barra/pra-te-adorar/",
        "youtube": "https://www.youtube.com/watch?v=uXUEyw47DTM"
    },
    {
        "nome": "Preciso de Ti",
        "banda": "Diante do trono",
        "tom_fem": "",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/diante-do-trono/preciso-de-ti/#",
        "youtube": "https://www.youtube.com/watch?v=Hy6QJ6LJW2I"
    },
    {
        "nome": "Proteção",
        "banda": "RM6",
        "tom_fem": "C",
        "tom_masc": "D",
        "cifra": "https://www.cifraclub.com.br/rm6/protecao/",
        "youtube": "https://youtu.be/qlbYmmlaVjE?si=CIrVG2fjrFuoUO1c"
    },
    {
        "nome": "Quão Grande é o meu Deus",
        "banda": "Soraya",
        "tom_fem": "G",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/soraya-moraes/quao-grande-o-meu-deus/",
        "youtube": "https://www.youtube.com/watch?v=XZQMHB827Ak"
    },
    {
        "nome": "Que Ele cresça",
        "banda": "Deigma Marques",
        "tom_fem": "A",
        "tom_masc": "D",
        "cifra": "https://www.cifraclub.com.br/deigma-marques/que-ele-cresca/",
        "youtube": "https://youtu.be/DZQfsSygjWo?si=PPokMScRb6cqWgXx"
    },
    {
        "nome": "Quebrantado",
        "banda": "Vineyard",
        "tom_fem": "D",
        "tom_masc": "C",
        "cifra": "https://www.cifraclub.com.br/vineyard/quebrantado/",
        "youtube": "https://youtu.be/QbnmpJo3DiI?si=kjN0qEWMGM_Kx4CF"
    },
    {
        "nome": "Quem é esse?",
        "banda": "Julliany Souza",
        "tom_fem": "E",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/julliany-souza/quem-e-esse/",
        "youtube": "https://youtu.be/0ZF5em0MTwY?si=jhTtk8sMgGrY1Uqu"
    },
    {
        "nome": "Quero louvar-te sempre mais e mais",
        "banda": "PC Baruk",
        "tom_fem": "D",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/paulo-cesar-baruk/quero-louvar-te/",
        "youtube": "https://www.youtube.com/watch?v=XbcgHnF9uig"
    },
    {
        "nome": "Quero te obedecer",
        "banda": "Fernandinho",
        "tom_fem": "D",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/fernandinho/quero-te-obedecer/",
        "youtube": "https://www.youtube.com/watch?v=E-lNtcE1Qnk"
    },
    {
        "nome": "Rei da glória",
        "banda": "Aline Barros",
        "tom_fem": "D",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/aline-barros/rei-da-gloria/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=4uNid1SCJkk"
    },
    {
        "nome": "Rei das nações",
        "banda": "Vencedores por Cristo",
        "tom_fem": "F",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/vencedores-por-cristo/rei-das-nacoes/",
        "youtube": "https://www.youtube.com/watch?v=HhOf7Ri6hqE"
    },
    {
        "nome": "Reina em mim",
        "banda": "Vineyard",
        "tom_fem": "F",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/vineyard/reina-em-mim/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=bpabvrhSJ6Y"
    },
    {
        "nome": "Rendido estou",
        "banda": "Aline Barros",
        "tom_fem": "D",
        "tom_masc": "D",
        "cifra": "https://www.cifraclub.com.br/aline-barros/rendido-estou/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=J-qDkZArRrM"
    },
    {
        "nome": "Rio de Vida",
        "banda": "Kléber Lucas",
        "tom_fem": "",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/kleber-lucas/rio-de-vida/",
        "youtube": "https://www.youtube.com/watch?v=Up5FImWcc1g"
    },
    {
        "nome": "Rocha inabalável",
        "banda": "Davi Sacer",
        "tom_fem": "",
        "tom_masc": "C",
        "cifra": "https://www.cifraclub.com.br/davi-sacer/rocha-inabalavel/#instrument=guitar",
        "youtube": "https://www.youtube.com/watch?v=tL0_ZF56yXI"
    },
    {
        "nome": "Rude cruz",
        "banda": "Cantor cristão",
        "tom_fem": "F",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/fernandinho/rude-cruz/",
        "youtube": "https://www.youtube.com/watch?v=jAIEtnzlNNM"
    },
    {
        "nome": "Sacrifício de Louvor",
        "banda": "PIB de Trindade",
        "tom_fem": "",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/pib-em-trindade/sacrificio-de-louvor/#",
        "youtube": "https://www.youtube.com/watch?v=APXh8lnaFtU"
    },
    {
        "nome": "Salmo 96 (Cantai ao Senhor)",
        "banda": "Vencedores por Cristo",
        "tom_fem": "G",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/vencedores-por-cristo/salmo-96/",
        "youtube": "https://www.youtube.com/watch?v=JIkSQwRWfPQ"
    },
    {
        "nome": "Santo pra sempre",
        "banda": "Gabriel Guedes",
        "tom_fem": "G",
        "tom_masc": "B",
        "cifra": "https://www.cifraclub.com.br/gabriel-guedes/santo-pra-sempre/",
        "youtube": "https://www.youtube.com/watch?v=jISXz3xMcfU"
    },
    {
        "nome": "Santo, Santo",
        "banda": "Vineyard",
        "tom_fem": "C",
        "tom_masc": "D",
        "cifra": "https://www.cifraclub.com.br/vineyard/santo/",
        "youtube": "https://www.youtube.com/watch?v=zsAsdDlFvCU"
    },
    {
        "nome": "Santo, Santo, Santo",
        "banda": "Renascer",
        "tom_fem": "C",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/renascer-praise/santo-santo-santo/",
        "youtube": "https://www.youtube.com/watch?v=7D--TqO-dEs"
    },
    {
        "nome": "Se não for pra te adorar",
        "banda": "Fernandinho",
        "tom_fem": "C",
        "tom_masc": "D",
        "cifra": "https://www.cifraclub.com.br/fernandinho/se-nao-for-pra-te-adorar/",
        "youtube": "https://www.youtube.com/watch?v=T1Cq7O0-b_U"
    },
    {
        "nome": "Segura na mão de Deus",
        "banda": "Harpa",
        "tom_fem": "E",
        "tom_masc": "C",
        "cifra": "https://www.cifraclub.com.br/kleber-lucas/segura-na-mao-de-deus/#key=3",
        "youtube": "https://youtu.be/w8wQvzIu_Xs?si=MoNL46b9ZX4lvNBm"
    },
    {
        "nome": "Seja adorado aquele",
        "banda": "M. Sarando Terra Ferida",
        "tom_fem": "",
        "tom_masc": "D",
        "cifra": "https://www.cifraclub.com.br/ministerio-sarando-terra-ferida/seja-adorado/",
        "youtube": "https://www.youtube.com/watch?v=eL7chQAdDPQ"
    },
    {
        "nome": "Senhor e rei",
        "banda": "Trazendo a arca",
        "tom_fem": "",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/toque-no-altar/senhor-rei/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=W5BBzdzvY0w"
    },
    {
        "nome": "Senhor formoso és",
        "banda": "Marcos Góes",
        "tom_fem": "C",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/marcos-goes/senhor-formoso-es/",
        "youtube": "https://www.youtube.com/watch?v=bysVyTHexhQ"
    },
    {
        "nome": "Senhor te quero",
        "banda": "Vineyard",
        "tom_fem": "E",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/vineyard/senhor-te-quero/",
        "youtube": "https://www.youtube.com/watch?v=JMV-K0d1QYQ"
    },
    {
        "nome": "Senhor tu és bom , te adorarei",
        "banda": "Adoração adoradores",
        "tom_fem": "",
        "tom_masc": "C",
        "cifra": "https://www.cifraclub.com.br/adoracao-e-adoradores/tu-es-bom/",
        "youtube": "https://www.youtube.com/watch?v=BZCb92bivGA"
    },
    {
        "nome": "Seu nome é",
        "banda": "Frutos do espírito",
        "tom_fem": "",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/frutos-do-espirito/seu-nome-e/",
        "youtube": "https://www.youtube.com/watch?v=L0TEhRpstoA"
    },
    {
        "nome": "Só tu és Santo",
        "banda": "Morada",
        "tom_fem": "E",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/ministerio-morada/so-tu-s-santo/",
        "youtube": "https://www.youtube.com/watch?v=Kh14SNPaHco"
    },
    {
        "nome": "Sou do meu amado e Ele é meu",
        "banda": "",
        "tom_fem": "A",
        "tom_masc": "C",
        "cifra": "https://www.cifraclub.com.br/igreja-batista-nova-jerusalem/sou-do-meu-amado/",
        "youtube": "https://www.youtube.com/watch?v=LA3UKcoupcg"
    },
    {
        "nome": "Te adorar Senhor é o meu prazer",
        "banda": "Aline Barros",
        "tom_fem": "D",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/aline-barros/te-adorar-o-meu-prazer/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=ef-ADl6_PsY"
    },
    {
        "nome": "Te agradeço",
        "banda": "Diante do trono",
        "tom_fem": "D",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/diante-do-trono/te-agradeco/",
        "youtube": "https://www.youtube.com/watch?v=JxelK0iWXpw"
    },
    {
        "nome": "Te louvarei não importa",
        "banda": "Trazendo a arca",
        "tom_fem": "",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/trazendo-arca/perto-quero-estar/",
        "youtube": "https://www.youtube.com/watch?v=bXnyNJ7Bb1A"
    },
    {
        "nome": "Temos que ser um",
        "banda": "Fernandinho",
        "tom_fem": "E",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/fernandinho/temos-que-ser/",
        "youtube": "https://www.youtube.com/watch?v=hD_pasYr5qA&feature=emb_rel_pause"
    },
    {
        "nome": "Teu amor não falha",
        "banda": "Nívea Soares",
        "tom_fem": "D",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/nivea-soares/teu-amor-nao-falha/",
        "youtube": "https://www.youtube.com/watch?v=3q-pRKf-VaQ"
    },
    {
        "nome": "Teu reino",
        "banda": "Cristo vivo",
        "tom_fem": "C",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/ministerio-cristo-vivo/teu-reino/",
        "youtube": "https://youtu.be/BVUSOPvfCXw?si=8WLDpkVwSamZFb_3"
    },
    {
        "nome": "Teu santo nome",
        "banda": "Gabriela Rocha",
        "tom_fem": "G",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/gabriela-rocha/teu-santo-nome/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=founBXufLYg"
    },
    {
        "nome": "Todas as coisas",
        "banda": "Fernandinho",
        "tom_fem": "",
        "tom_masc": "D",
        "cifra": "https://www.cifraclub.com.br/fernandinho/todas-as-coisas/",
        "youtube": "https://www.youtube.com/watch?v=HW7_r-BLYKE"
    },
    {
        "nome": "Todavia Me Alegrarei",
        "banda": "Paola Carla",
        "tom_fem": "A",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/paola-carla/todavia-me-alegrarei/",
        "youtube": "https://www.youtube.com/watch?v=nnrOh7x5aE0"
    },
    {
        "nome": "Todo som",
        "banda": "Resgate",
        "tom_fem": "",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/resgate/todo-som/",
        "youtube": "https://www.youtube.com/watch?v=rIQqFgb07E8"
    },
    {
        "nome": "Toma o meu coração",
        "banda": "Prisma",
        "tom_fem": "E",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/prisma-brasil/toma-meu-coracao/",
        "youtube": "https://www.youtube.com/watch?v=EWf3R77jqMg"
    },
    {
        "nome": "Tributo a Yeoah",
        "banda": "Adhemar de Campos",
        "tom_fem": "D",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/adhemar-de-campos/tributo-iehovah/jpppgg.html",
        "youtube": "https://www.youtube.com/watch?v=D1JxVNbHcM0&feature=emb_rel_pause"
    },
    {
        "nome": "Trindade Santíssima",
        "banda": "Ipalpha",
        "tom_fem": "",
        "tom_masc": "D",
        "cifra": "https://www.cifraclub.com.br/ipalpha/trindade-santissima/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=z3nPTt2NiUo"
    },
    {
        "nome": "Tu é Santo",
        "banda": "Ronaldo B.",
        "tom_fem": "E",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/ronaldo-bezerra/tu-es-santo/",
        "youtube": "https://www.youtube.com/watch?v=mFB-r2aIjnQ"
    },
    {
        "nome": "Tu és + Águas purificadoras",
        "banda": "Fhop",
        "tom_fem": "D",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/florianopolis-house-of-prayer/tu-es-aguas-purificadoras/",
        "youtube": "https://www.youtube.com/watch?v=YXnQ02HYB1w"
    },
    {
        "nome": "Tú és bom",
        "banda": "Vineyard",
        "tom_fem": "G",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/vineyard/tu-s-bom/",
        "youtube": "https://www.youtube.com/watch?v=eQH0A4QVZE8"
    },
    {
        "nome": "Tú és Deus (A Ele)",
        "banda": "O canto das igrejas",
        "tom_fem": "G",
        "tom_masc": "C",
        "cifra": "https://www.cifraclub.com.br/o-canto-das-igrejas/tu-es-deus-a-ele/",
        "youtube": "https://youtu.be/gS0Y4ID0HbY?si=HLH8ucQSJwACJYnd"
    },
    {
        "nome": "Tú és meu abrigo",
        "banda": "Davi Sacer",
        "tom_fem": "G",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/davi-sacer/tu-s-meu-abrigo/",
        "youtube": "https://www.youtube.com/watch?v=gomqkILKc50"
    },
    {
        "nome": "Tu és soberano sobre a terra",
        "banda": "Corinhos",
        "tom_fem": "C",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/asaph-borba/tu-es-soberano/",
        "youtube": "https://www.youtube.com/watch?v=22eOg-PTi2o"
    },
    {
        "nome": "Tua igreja canta",
        "banda": "Israel Salazar",
        "tom_fem": "F",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/israel-salazar/tua-igreja-canta/",
        "youtube": "https://www.youtube.com/watch?v=aWxHH2qtnyY"
    },
    {
        "nome": "Tua palavra é luz para o meu",
        "banda": "Aline Barros",
        "tom_fem": "E",
        "tom_masc": "E",
        "cifra": "https://www.cifraclub.com.br/aline-barros/tua-palavra-e-luz-para-o-meu-caminho/#tabs=false&instrument=keyboard",
        "youtube": "https://www.youtube.com/watch?v=-FztPC64FeI"
    },
    {
        "nome": "Vem",
        "banda": "Vineyard",
        "tom_fem": "D",
        "tom_masc": "D",
        "cifra": "https://www.cifraclub.com.br/vineyard/vem/",
        "youtube": "https://www.youtube.com/watch?v=7j5aLkEe_vE"
    },
    {
        "nome": "Vem espírito de Deus",
        "banda": "Corinhos",
        "tom_fem": "D",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/harpa-crista/aqui-eu-vim-dizer/",
        "youtube": "https://www.youtube.com/watch?v=yPvvuwGRhfc"
    },
    {
        "nome": "Vem me buscar",
        "banda": "Suelen e Jef",
        "tom_fem": "G",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/jefferson-e-suellen/vem-me-buscar/",
        "youtube": "https://www.youtube.com/watch?v=t6Pd8gXIASU"
    },
    {
        "nome": "Venha o teu reino",
        "banda": "Davi sacer",
        "tom_fem": "C",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/davi-sacer/venha-o-teu-reino/",
        "youtube": "https://youtu.be/dtYKIBAF7n8?si=Ou5L74HEazrahmOz"
    },
    {
        "nome": "Vimos adorar",
        "banda": "Kléber Lucas",
        "tom_fem": "C",
        "tom_masc": "G",
        "cifra": "https://www.cifraclub.com.br/kleber-lucas/viemos-adorar/",
        "youtube": "https://www.youtube.com/watch?v=5Gv5s-8gMEY"
    },
    {
        "nome": "Vitorioso És",
        "banda": "Gabriel Guedes",
        "tom_fem": "",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/gabriel-guedes/vitorioso-es/",
        "youtube": "https://www.youtube.com/watch?v=k7tGP-vidwc"
    },
    {
        "nome": "Vive o Senhor",
        "banda": "PAV",
        "tom_fem": "D",
        "tom_masc": "D",
        "cifra": "https://drive.google.com/file/d/1-pZqrEolT978TGXnnFzxQA-e5GOMNJhE/view",
        "youtube": "https://www.youtube.com/watch?v=IyLwMxxk2Os&list=PLX6PHyHyL4MDyaU3GoQTpOoUc55SwtDBD&index=4"
    },
    {
        "nome": "Viver para Deus",
        "banda": "PAV",
        "tom_fem": "G",
        "tom_masc": "A",
        "cifra": "https://www.cifraclub.com.br/aline-couto/viver-para-deus/",
        "youtube": "https://www.youtube.com/watch?v=Nv1EXW0GEBo"
    },
    {
        "nome": "Vou seguir com fé",
        "banda": "Kléber Lucas",
        "tom_fem": "D",
        "tom_masc": "",
        "cifra": "https://www.cifraclub.com.br/kleber-lucas/vou-seguir-com-fe/#key=5",
        "youtube": "https://youtu.be/kThZpQdeX0E?si=ZVQAwpavrn7EaoTo"
    }
];
