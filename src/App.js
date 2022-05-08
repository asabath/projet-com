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
        { value: 2, label: 'Traits de personnalité', trigger: '3' },
        { value: 3, label: 'Compétences pro', trigger: '3' },
        { value: 4, label: 'Parcours pro', trigger: '3' },
        { value: 5, label: "Centres d'intérêt", trigger: '3' },
        { value: 6, label: 'Motivations socio-pro', trigger: '3' },
        { value: 7, label: 'Formations complémentaires', trigger: '3' },

      ],
    },
    {
      id: '4',
      component: (
        <div> This is an example component </div>
      ),
      trigger: '5',
    },
    {
      id: '5',
      options:[
        {value: 1, label: 'Retour', trigger: '3'}
      ]
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
