const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="text-2xl font-semibold">Tu Aplicación</div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Agregar Archivos
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
