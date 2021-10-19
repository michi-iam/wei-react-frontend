

const Link = ({ link} ) => {
    return <div className="row mb-2 ">
        <a target="_blank" rel="noopener noreferrer" className="btn btn-info shadow-lg" href={ link.href }>{ link.name }</a>
    </div>
}



export default Link;