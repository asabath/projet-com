import './App.css';


import ChatBot from 'react-simple-chatbot';


function App() {

  const steps=[
    {
      id: '1',
      message: 'Bonjour, je suis Antoine Sabathier, je suis ici pour répondre à vos questions.',
      trigger: '2',
    },
    {
      id: '2',
      message: 'Que voulez-vous savoir ?',
      trigger: '3',
    },
    {
      id: '3',
      options: [
        { value: 1, label: 'CV', trigger: '4' },
        { value: 2, label: 'Traits de personnalité', trigger: '6' },
        { value: 3, label: 'Compétences pro', trigger: '9' },
        { value: 4, label: 'Parcours pro', trigger: '2' },
        { value: 5, label: "Centres d'intérêt", trigger: '2' },
        { value: 6, label: 'Motivations socio-pro', trigger: '2' },
        { value: 7, label: 'Formations complémentaires', trigger: '2' },

      ],
    },
    {
      id: '4',
      component: (
        <a target='_blank' href='https://mega.nz/file/aO5nlSbT#hahFnH7JJ-OshnQmHMp0RFZFJjuRPrisQlJ3Izd8dnA' > CV </a>
      ),
      trigger: '5',
    },
    {
      id: '5',
      options:[
        {value: 1, label: 'Retour', trigger: '2'}
      ]
    },
    {
      id: '6',
      message: "Mon premier trait de personnalité est que je suis pédagogue. En effet, depuis tout petit j'ai toujours aimé transmettre mes connaissance aux autres et a les aider. De plus cela fais 5 ans que je donne des cours particulier en mathématiques pour des élèves allant de la 6ème à la terminal. Pour finir en entreprise j'aide souvent les personnes avec qui je travail.",
      trigger: '7',
    },
    {
      id: '7',
      message: "Je suis quelqu'un de logique et rationnel, j'ai toujours aimé les mathématiques et la façon dont on proccède pour résoudre un problème. Donc en entreprise je vais souvent faire marché cet esprit logique plutot que de prendre des décisions sous l'influence de mes émotions.",
      trigger: '8',
    },
    {
      id: '8',
      message: "Je suis une personne ayant l'esprit ouvert, je vais souvent aller vers les autres sans jugement. Je suis aussi une personne souvent à l'écoute des problèmes des autres, et je vais essayé de les aidés.",
      trigger: '2',
    },
    {
      id: '9',
      message: "Je pense être autonome. Durant mon parcours notamment durant mon premier stage j'ai pu travailler sur ce point. En effet, j'étais le seul développeur dans une équipe de scientifique, je devais programmé une application pour les aidés sans l'aide de personne, j'avais juste 4 mois pour faire ça, je devais gérer mon temps tout seul. J'ai donc énormément appris durant ce stage.",
      trigger: '2',
    },
    {
      id: '10000',
      message: 'Awesome! You are a telepath!',
      end: true,
    },
  ]
  return (
    <div className="App" style={{'display':'flex'}}>
        
        <ChatBot
          style={{'width':'100%'}}
          steps={steps}
        />
    </div>
  );
}

export default App;
