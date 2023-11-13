import './styles/Project.css'

interface Props{
  title: string[];
  image: string[];
  paragraph: string[];
  link: string[];
}

function Project(prop: Props){
    return(
        <div className='projects'>
            <div className='col projectcol'>
                <div className="card text-bg-secondary h-100 projectcard ">
                    <img src={prop.image[0]} className="card-img-top projectimage" alt="..." />
                    <div className="card-body text-bg-secondary">
                        <h5 className="card-title text-bg-secondary">{prop.title[0]}</h5>
                        <p className="card-text text-bg-secondary">{prop.paragraph[0]}</p>
                    </div>
                    <div className="card-footer"><a href={prop.link[0]} className="btn btn-primary" target='_blank'>Github</a></div>
                </div>
            </div>
            <div className='col projectcol'>
                <div className="card text-bg-secondary h-100 projectcard ">
                    <img src={prop.image[1]} className="card-img-top projectimage" alt="..." />
                    <div className="card-body text-bg-secondary">
                        <h5 className="card-title text-bg-secondary">{prop.title[1]}</h5>
                        <p className="card-text text-bg-secondary">{prop.paragraph[1]}</p>
                    </div>
                    <div className="card-footer"><a href={prop.link[1]} className="btn btn-primary" target='_blank'>Github</a></div>
                </div>
            </div><div className='col projectcol'>
                <div className="card text-bg-secondary h-100 projectcard ">
                    <img src={prop.image[2]} className="card-img-top projectimage" alt="..." />
                    <div className="card-body text-bg-secondary">
                        <h5 className="card-title text-bg-secondary">{prop.title[2]}</h5>
                        <p className="card-text text-bg-secondary">{prop.paragraph[2]}</p>
                    </div>
                    <div className="card-footer"><a href={prop.link[2]} className="btn btn-primary" target='_blank'>Github</a></div>
                </div>
            </div>
            
        </div>
    )
}

export default Project;