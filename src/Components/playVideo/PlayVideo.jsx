/* eslint-disable react/react-in-jsx-scope */
import './PlayVideo.css';
import video1 from '../../assets/Images/video.mp4';
import like from '../../assets/Images/like.png';
import dislike from '../../assets/Images/dislike.png';
import share from '../../assets/Images/share.png';
import save from '../../assets/Images/save.png';
import jack from '../../assets/Images/jack.png';
import user_profile from '../../assets/Images/user_profile.jpg';
const PlayVideo = () => {
    return (
        <>
            <div className='play-video'>
                <video src={video1} controls autoPlay muted></video>
                <h1>Best YouTube Channel To Learn Web Development</h1>
                <div className='play-video-info'>
                    <p>1525 Views &bull; 2 days ago</p>
                    <div>
                        <span><img src={like} alt="like" />125</span>
                        <span><img src={dislike} alt="like" />5</span>
                        <span><img src={share} alt="share" />share</span>
                        <span><img src={save} alt="like" />125</span>
                    </div>
                </div>
                <hr />
                <div className="publisher">
                    <img src={jack} alt="jack" />
                    <div>
                        <p>GreatStack</p>
                        <span>1M Subscribers</span>
                    </div>
                    <button>Subscribed</button>
                </div>
                <div className='vid-description'>
                    <p>Channel that makes learning easy</p>
                    <p>Subscibe Greatstack to Watch More Tutorial on web development</p>
                    <hr />
                    <h4>130 Comments</h4>
                    <div className="comment">
                        <img src={user_profile} alt="user_profile" />
                        <div>
                            <h3>Histesh Chaudary <span>1 day ago</span></h3>
                            <p>A global computer network providing a varity of information and knowledge of interconnected network using standardized communication protocols.</p>
                            <div className='comment-action'>
                                <img src={like} alt="like" />
                                <span>244</span>
                                <img src={dislike} alt="dislike" />
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <img src={user_profile} alt="user_profile" />
                        <div>
                            <h3>Histesh Chaudary <span>1 day ago</span></h3>
                            <p>A global computer network providing a varity of information and knowledge of interconnected network using standardized communication protocols.</p>
                            <div className='comment-action'>
                                <img src={like} alt="like" />
                                <span>244</span>
                                <img src={dislike} alt="dislike" />
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <img src={user_profile} alt="user_profile" />
                        <div>
                            <h3>Histesh Chaudary <span>1 day ago</span></h3>
                            <p>A global computer network providing a varity of information and knowledge of interconnected network using standardized communication protocols.</p>
                            <div className='comment-action'>
                                <img src={like} alt="like" />
                                <span>244</span>
                                <img src={dislike} alt="dislike" />
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <img src={user_profile} alt="user_profile" />
                        <div>
                            <h3>Histesh Chaudary <span>1 day ago</span></h3>
                            <p>A global computer network providing a varity of information and knowledge of interconnected network using standardized communication protocols.</p>
                            <div className='comment-action'>
                                <img src={like} alt="like" />
                                <span>244</span>
                                <img src={dislike} alt="dislike" />
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <img src={user_profile} alt="user_profile" />
                        <div>
                            <h3>Histesh Chaudary <span>1 day ago</span></h3>
                            <p>A global computer network providing a varity of information and knowledge of interconnected network using standardized communication protocols.</p>
                            <div className='comment-action'>
                                <img src={like} alt="like" />
                                <span>244</span>
                                <img src={dislike} alt="dislike" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PlayVideo;