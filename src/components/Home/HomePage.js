import videoHomaPage from '../../assets/video-homepage.mp4'
const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay loop muted >
                <source
                    src={videoHomaPage}
                    type='video/mp4'
                >
                </source>
            </video>
            <div className='homepage-content'>
                <div className='homepage-title'>Build forms at the drop of a prompt</div>
                <div className='homepage-desc'>Put a seasoned form expert to work with Typeform AI. It structures and designs at your command. Just type to build and edit.</div>
                <div  className='homepage-btn'>
                    <button>See plans</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage