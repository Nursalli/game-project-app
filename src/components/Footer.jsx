import React from 'react'
import "./gameComponent/GameComponent.css"
function Footer() {
  return (
    <>
      <div className='d-flex justify-content-center position-absolute pageFooter' style={{width: "100%"}}>
        <footer className="flex-shrink-0 py-4 bg-white border m-1 pt-2 pb-2" style={{width: "99%"}}>
          <div className="container text-center">
            <small>Copyright &copy; Game Project</small>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer