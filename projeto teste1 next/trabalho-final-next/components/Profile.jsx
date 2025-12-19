

function Profile() {
  return (
    <div className="perfil-card">
      {}
      <img 
        src="/assets/imagemdeperfil.jpg" 
        alt="Foto" 
        className="foto-perfil" 
      />
      <p className="nome-usuario">@fulano de tal</p>
    </div>
  );
}

export default Profile;