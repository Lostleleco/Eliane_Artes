import { NavContainer } from "./styles";

const NavBar = () => {
    return (
        <NavContainer className="flex flex-col md:flex-row items-center justify-between p-4">
            <h1 className="text-2xl md:font-serif text-blue-500 text-center md:text-left mb-4 md:mb-0">
                Seja muito bem-vindo <br />
                Eliane Artesanatos, aqui você pensa e nós bordamos!
            </h1>
            <div className="flex space-x-4">
                <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded">
                    Usuário
                </button>
                <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded">
                    Administrador
                </button>
            </div>
        </NavContainer>
    );
}

export default NavBar;