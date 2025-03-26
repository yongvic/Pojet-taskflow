 import '../styles/home.css'
 import collaboration from '../assets/collaboration.png'
 import real_time from '../assets/real_time.png'
 import timeline from '../assets/timeline.png'
 
 function Home() {
    return(
      <>
      <div className='pub'>
        <h2 className='boost'>Boostez votre workflow : organisation et collaboration en temps réel.</h2>
        <h3 className='phrase_home'>Connectez vous pour en profiter pleinement😊</h3>
        <button className='btn_start'>Commencer</button>
      </div>

      <div className='fonctions'>

        <div className='fonctionnalites'>
          <div className='mini_div'>
            <img src={collaboration} alt="Collaboration" className='img' />
            <h3>Collaboration</h3>
          </div>

          <div className='mini_div'>
            <img src={real_time} alt="Real_time" className='img' />
            <h3>Real_time</h3>
          </div>

          <div className='mini_div'>
            <img src={timeline} alt="Time_line" className='img' />
            <h3>Time_line</h3>
          </div>
        </div>

        <div className='detail'>

          <div className='explication1'>
          <h4>
            Travaillez ensemble sans friction ! Assignez des tâches, laissez des commentaires, mentionnez vos collègues et suivez l’avancement en temps réel. La communication et la productivité réunies au même endroit.
          </h4>
          </div>

          <div className='explication2'>
            <h4>
             Plus besoin de rafraîchir la page ! Toutes les actions sont mises à jour instantanément, que ce soit l’ajout d’une tâche, la modification d’un statut ou l’assignation d’un membre. Restez toujours synchronisé avec votre équipe
            </h4>
          </div>

          <div className='explication3'>
            <h4>
              Travaillez ensemble sans friction ! Assignez des tâches, laissez des commentaires, mentionnez vos collègues et suivez l’avancement en temps réel. La communication et la productivité réunies au même endroit. 
            </h4>
          </div>


        </div>
      </div>
      </>
    )
  }

  export default Home  