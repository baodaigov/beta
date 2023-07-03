import { FiSearch } from "react-icons/fi";

export default function InputBar({ value, onChange, onKeyDown, onSearch }){
    return (
        <div className='flex bg-neutral-100 hover:bg-neutral-200'>
            <input className='border-none outline-none appearance-none w-full bg-transparent px-6 py-4 pr-0 placeholder:text-neutral-400 text-base max-lg:text-sm' placeholder='Tìm kiếm...' value={value} autoFocus={true} spellCheck={false} onChange={onChange} onKeyDown={onKeyDown}/>
            <div className='cursor-pointer bg-transparent px-5 py-4 flex items-center' onClick={onSearch}>
                <FiSearch className='text-lg max-lg:text-base'/>
            </div>
        </div>
    )
}