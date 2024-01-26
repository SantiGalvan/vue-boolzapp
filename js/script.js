console.log('Vue OK', Vue);

// Attivo Vue
const { createApp } = Vue;
const app = createApp({
    data: () => ({
        name: 'Boolzapp',
        user: {
            name: 'Nome Utente',
            avatar: '_io'
        },
        contacts: [
            {
                id: 1,
                name: 'Michele',
                avatar: '_1',
                messages: [
                    {
                        id: 1,
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        id: 2,
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        id: 3,
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                id: 2,
                name: 'Fabio',
                avatar: '_2',
                messages: [
                    {
                        id: 1,
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        id: 2,
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        id: 3,
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                id: 3,
                name: 'Samuele',
                avatar: '_3',
                messages: [
                    {
                        id: 1,
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        id: 2,
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        id: 3,
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                id: 4,
                name: 'Alessandro B.',
                avatar: '_4',
                messages: [
                    {
                        id: 1,
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        id: 2,
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                id: 5,
                name: 'Alessandro L.',
                avatar: '_5',
                messages: [
                    {
                        id: 1,
                        date: '10/01/2020 15:30:55',
                        text: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        id: 2,
                        date: '10/01/2020 15:50:00',
                        text: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                id: 6,
                name: 'Claudia',
                avatar: '_6',
                messages: [
                    {
                        id: 1,
                        date: '10/01/2020 15:30:55',
                        text: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        id: 2,
                        date: '10/01/2020 15:50:00',
                        text: 'Non ancora',
                        status: 'received'
                    },
                    {
                        id: 3,
                        date: '10/01/2020 15:51:00',
                        text: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                id: 7,
                name: 'Federico',
                avatar: '_7',
                messages: [
                    {
                        id: 1,
                        date: '10/01/2020 15:30:55',
                        text: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        id: 2,
                        date: '10/01/2020 15:50:00',
                        text: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                id: 8,
                name: 'Davide',
                avatar: '_8',
                messages: [
                    {
                        id: 1,
                        date: '10/01/2020 15:30:55',
                        text: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        id: 2,
                        date: '10/01/2020 15:50:00',
                        text: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        id: 3,
                        date: '10/01/2020 15:51:00',
                        text: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],
        activeId: 1,
        newMessageText: '',
        searchContact: '',
        activeMessage: 1,
        isShow: false
    }),
    computed: {

        // Creo una computed per sapere qual è il contatto da visualizzare
        currentContact() {
            return this.contacts.find((contact) => contact.id === this.activeId)
        },

        // Creo una computed per sapere qual è la chat da visualizzare
        currentChat() {
            return this.currentContact.messages
        },

        // Creo una computed per poter filtrare in tempo reale i contatti
        filteredContacts() {

            // Creo una nuova variabile per mettere il toLowerCase qui
            const searchTerm = this.searchContact.toLowerCase();

            // Creo un nuovo array con gli elementi filtrati
            return this.contacts.filter((contact) => contact.name.toLowerCase().includes(searchTerm))
        },

        // Creo una computed per vedere qual è il messaggio selezionato
        currentMessage() {
            return this.currentChat.find((message) => message.id === this.activeMessage)
        }
    },
    methods: {

        // Metodo per ricavare la foto dei contatti
        getAvataUrl({ avatar }) {
            return `img/avatar${avatar}.jpg`
        },

        // Metodo per settare l'id attivo con quello del contatto
        setActiveId(id) {
            this.activeId = id;
        },

        // Metodo per creare il nuovo messaggio, verrà richiamata solo all'interno del metodo sendNewMessage
        addNewMessage(text, status) {

            // Creo il nuovo oggetto (messaggio)
            const newMessage = {
                id: new Date().toISOString(),
                date: new Date().toLocaleString(),
                text,
                status
            };

            // Pusho l'oggetto
            this.currentChat.push(newMessage);
        },

        // Metodo per inviare il nuovo messaggio
        sendNewMessage() {

            // Verifico che l'input sia vuoto
            if (!this.newMessageText) return

            // Stampo il messaggio in pagina
            this.addNewMessage(this.newMessageText, 'sent')

            // Svuoto l'input
            this.newMessageText = '';

            // Auto risposta dopo 1 secondo
            setTimeout(() => {

                // Stampo il messaggio in pagina
                this.addNewMessage('Ok', 'received')
            }, 1000);
        },

        // Creo un metodo per far apparire il drop-down
        changeShow(id) {

            // Creo il toogle al click
            this.isShow = !this.isShow;

            // Setto l'activeId con l'id del messaggio cliccato
            this.activeMessage = id;

            // Stampo in console l'id del messaggio attivo
            console.log(this.activeMessage);
        }
    }
});
app.mount('#root');