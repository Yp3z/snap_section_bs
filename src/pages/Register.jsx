import React from 'react'

export const Register = () => {
    return (
        <>

{

    <div 
      style={{
        backgroundImage: "url('./public/register.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}

      className="d-flex align-items-center justify-content-start p-5 ms-5"
    >
<div className="p-4 me-5" style={{ width: "350px", background: "transparent" }}>
    
        <h3 className="mb-4 text-center">Crea una Cuenta! <br /> (´･ω･`)</h3>
        <div className="mb-3">
          <label className="form-label">Nombre de Usuario</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input type="password" className="form-control" />
        </div>
        <p className='text-center text small'>Enviaremos un codigo de verificación a tu correo.</p>
        <div className="form-check mb-4">
            <input className="form-check-input" type="checkbox" id="check2" />
            <label className="form-check-label text-secondary small" htmlFor="check2">
              Me gustaria recibir emails con noticias y promociónes nuevas de la web.
            </label>
          </div>
        <button className="btn btn-primary w-100">Registrarse</button>
      </div>
    </div>
}
        </>

        
    )
}