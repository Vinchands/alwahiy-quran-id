import './ChapterToolbar.css'

export default function ChapterToolbar({ children }) {
    return (
        <div className='chapter-toolbar'>
            <div className='toolbar-body'>
                { children }
            </div>
        </div>
    )
}
