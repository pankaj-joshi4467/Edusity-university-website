import React, { useRef } from "react";
import "./Testimonial.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonial = () => {
    const slider = useRef();
    let tx =0;
    const slideForward=()=>{
        if(tx >-50){
            tx-=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }
    const slideBackward=()=>{
        if(tx < 0){
            tx+=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
        
    }

  return (
    <div className="testimonial">
      <img src={next_icon} alt="" className="next-btn"  onClick={slideForward}/>
      <img src={back_icon} alt="" className="back-btn"  onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt=""  />
                <div>
                    <h3>Jones Noa</h3>
                    <span>Edusity,New york</span>
                </div>
              </div>
              <p>Choosing Edusity means embracing a holistic educational experience. With our commitment to excellence, innovative research, and a supportive community, you'll gain the knowledge, skills, and connections needed to thrive in your future career.</p>
            </div>
          </li>


          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt=""  />
                <div>
                    <h3>William Jackson</h3>
                    <span>Edusity,New york</span>
                </div>
              </div>
              <p>Edusity has provided me with incredible opportunities to grow both academically and personally. The faculty here are genuinely invested in our success, offering guidance and support every step of the way. I feel well-prepared for my future career thanks to their mentorship.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt=""  />
                <div>
                    <h3>Miller Wren</h3>
                    <span>Edusity,New york</span>
                </div>
              </div>
              <p>Choosing Edusity was the best decision I've made. The cutting-edge research facilities and supportive environment have truly prepared me for my future career. The connections I've made and the hands-on experience I've gained are invaluable.</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt=""  />
                <div>
                    <h3>Windsor Grey</h3>
                    <span>Edusity,New york</span>
                </div>
              </div>
              <p>The campus life at Edusity is vibrant and inclusive, making it easy to find friends and get involved in activities that I’m passionate about. From cultural festivals to academic clubs, there's always something exciting happening here, and it truly feels like a second home..</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
