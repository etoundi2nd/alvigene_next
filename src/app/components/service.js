export default function Service({ path_icon, title, description }) {
    return (
        <div className="box-info">
            <i className={path_icon}></i>
            <div className="infos">
                <span>{title}</span>
                <br />
                <small>{description}</small>
            </div>
        </div>
    )
}
