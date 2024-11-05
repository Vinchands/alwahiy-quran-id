import './SwitchButton.css'

export default function SwitchButton({ onCheck, isChecked }) {
    return (
        <label className="flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="hidden"
                checked={ isChecked }
                onChange={ onCheck } />
            <div className="relative">
                <div className={`w-10 h-5 rounded-full shadow-inner ${ isChecked ? 'bg-cyan-700' : 'bg-gray-300'}`}></div>
                <div className={`dot absolute left-0 top-0 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ease-in-out transform ${isChecked ? 'translate-x-5' : ''}`}></div>
            </div>
        </label>
    )
}