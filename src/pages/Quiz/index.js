import React,{Component} from 'react';


export default function New() {
  return (
    <div className='container'>
      <>
        <div className='InfoPerguntas'>
          <div className='ContagemPerguntas'>
            <span>Pergunta 1/15</span>
          </div>
          <div className='pergunta'>Qual a idade de Adão?</div>
          <div className='respota'>
            <div className='grupoResposta'>
              <span>A</span>
              <button>10</button>
            </div>
            <div className='grupoResposta'>
              <span>B</span>
              <button>20</button>
            </div>
            <div className='grupoResposta'>
              <span>C</span>
              <button>30</button>
            </div>
            <div className='grupoResposta'>
              <span>D</span>
              <button>40</button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
