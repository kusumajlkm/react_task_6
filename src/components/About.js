import './allstyle.css';

export function About() {
    return (
        <div className="bg-white">
            <section className="py-5 mt-5" id='About'>
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-7">
                            <div className="my-5">
                                <h2 className="display-4 fw-bolder text-center"><span className="text-primary d-inline">About Me</span></h2><br /><br />
                                <p className=" fs-4 m-4 text-center">Hello! My name is Kusuma Shanthi </p>
                                <p className="about">
                                    I am currently learning web stack development,web scrapping and some topics realted to text to speech recognition as well.
                                    My academic journey has been complemented by my extracurricular interests, such as playing Throwball,participating in hackathons,sports and by enjoying music.
                                    I've had the opportunity to explore programming,including Java and Python basics, which have equipped me with a strong foundation in coding. As I continue to
                                    progress through my college education, I am dedicated to further enhancing my skills in web development, excited about the potential for innovative projects and future opportunities in this field.
                                </p>
                                <br/>
                                <br/>
                                <div className="row">
                                    <ul className="col-12 col-xxl-6 list-group">
                                        
                                    <li className="list-group-item"><span className="fw-bold">Full Name: </span>G Kusuma Shanthi</li>
                                        <li className="list-group-item"><span className="fw-bold">Birthday: </span>19th September 2003</li>
                                        <li className="list-group-item"><span className="fw-bold">City: </span>Kurnool-Adoni</li>
                                    </ul>
                                    <ul className="col-12 col-xxl-6 list-group">
                                        <li className="list-group-item"><span className="fw-bold">Git Profile: </span><a className="link" href="https://github.com/kusumajlkm">Click Here</a></li>
                                        <li className="list-group-item"><span className="fw-bold">Age: </span>19</li>
                                        <li className="list-group-item"><span className="fw-bold">Education: </span>B.Tech till 2025</li>
                                    </ul>
                                </div>
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
