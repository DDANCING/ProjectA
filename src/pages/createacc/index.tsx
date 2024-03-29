import { InputForm } from './label';

function Createacc() {
  // Função para fechar a aba de login
  const handleClose = () => {
    // Adicione aqui o código para fechar a aba de login
    // Por exemplo, você pode ocultar o elemento com JavaScript ou remover o elemento do DOM
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center text-muted-foreground ">
      <main className="bg-secondary p-4 rounded-lg shadow-lg box-content border-2 border-primary">
        <div className="justify-end flex">
          {/* Botão "X" para fechar a aba */}
          <button className="flex" onClick={handleClose}>
            X
          </button>
        </div>
        <div>
          <InputForm />
        </div>
      </main>
    </div>
  );
}

export default Createacc;
