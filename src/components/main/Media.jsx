import video from '../../assets/video/background.mp4'
import video2 from '../../assets/video/ink.mp4'

const Media = () => {
  return (
      <>
          <div className={'media'}>
              <video className={'media__video _full-screen'}  autoPlay muted>
                  <source src={video2} type="video/mp4"></source>
              </video>
          </div>
      </>
  )
}

export default Media;