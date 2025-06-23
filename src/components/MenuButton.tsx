const MenuButton = ({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) => (
  <button
    className="relative w-8 h-8 flex flex-col justify-center items-center md:hidden"
    onClick={toggle}
  >
    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
      isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
    }`} />
    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
      isOpen ? 'opacity-0' : 'opacity-100'
    }`} />
    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
      isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
    }`} />
  </button>
);

export default MenuButton; 