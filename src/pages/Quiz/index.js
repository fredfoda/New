import React from 'react'

export default function New() {
  return (
    <div className='container'>
        <>
        <div className='InfoPerguntas'>
             <div className='ContagemPerguntas'>
                <span>Pegunta 1/15</span>
             </div>
             <div className='pergunta'>Qual a idade de adão
             </div>
             <div className='respota'>
                <div className='grupoResposta'>
                <span>A</span>
                <button>12</button>
                </div>

                <div className='grupoResposta'>
                <span>B</span>
                <button>12</button>
                </div>

                <div className='grupoResposta'>
                <span>C</span>
                <button>12</button>
                </div>

                <div className='grupoResposta'>
                <span>D</span>
                <button>12</button>
                </div>
            </div>
        </div>
        </>
    </div>
    );
  }