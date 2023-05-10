import { createSignal } from 'solid-js';

const DropdownMenu = ({ options, onSelect, placeholder }) => {
    const [selectedOption, setSelectedOption] = createSignal(null); 
    const [isOpen, setIsOpen] = createSignal(false);
    
    const handleOptionClick = (option: any) => {
        setSelectedOption(option); setIsOpen(false);
        onSelect && onSelect(option);
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div class="dropdown-menu">
            <div class="dropdown-menu__trigger" onClick={toggleMenu}>
                {selectedOption ? selectedOption.label : placeholder || 'Select an option'}
            </div>
            {isOpen() && (
                <ul class="dropdown-menu＿_options">
                    {options.map((option: any) => (
                        <li key={option.value} onClick={() => handleOptionClick(option)}> {option.label}
                        </li>
                    ))})
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;