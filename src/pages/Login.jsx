import React from 'react'

export const Login = () => {
    return (
        <>

{

    <div 
      style={{
        backgroundImage: "url('./public/login.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}

      className="d-flex align-items-center justify-content-end p-5"
    >
      <div className="card p-4 shadow me-5" style={{ width: "300px" }}>
        <h3 className="mb-4 text-center">Iniciar sesión</h3>
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input type="password" className="form-control" />
        </div>
        <button className="btn btn-primary w-100">Entrar</button>
      </div>
    </div>
}
        </>

        
    )
}