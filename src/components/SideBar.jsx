import React from 'react'

export default function SideBar(props) {
  const{handleToggleModal} = props
  return (
    <div className='sidebar'>
      <div className='bgOverlay' onClick={handleToggleModal}></div>
      <div className='sidebarContents'>
        <h2>The Brutal Martian Landscape</h2>
        <div>
          <p>Description</p>
          <p>f2knve2lvbn2elv wrmw mkmkewqme wqeqwe wqe qwmkmwqkmfmqw klmklqwm 
            qwfqwfqwfqwfqwfwq
          </p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      
    </div>
  )
}
