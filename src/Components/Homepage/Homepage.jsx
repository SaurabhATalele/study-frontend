import React from "react";
import styles from "./Homepage.module.css";
const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.top}>
        <div className={styles.top__left}>
          <button className={styles.back__button}>
            <span class="material-symbols-outlined">arrow_back_ios_new</span>
          </button>

          <h2>Basic Mathematics 101</h2>
        </div>
        <div className={styles.top__right}>
          <button className={styles.support__buttons}>
            <span className={styles.call__teacher}>
              <span class="material-symbols-outlined">call</span>
            </span>{" "}
            Call Teacher
          </button>
          <button className={styles.support__buttons}>
            <span className={styles.support__button}>
              <span class="material-symbols-outlined">support_agent</span>
            </span>{" "}
            Support
          </button>
        </div>
      </div>
      <div className={styles.top__2}>
        <ul className={styles.links}>
          <li>Classroom</li>
          <li>Whiteboard</li>
          <li className={styles.active}>Videos</li>
          <li>Slide Show</li>
          <li>Documents</li>
          <li>Doc.cam</li>
        </ul>
      </div>

      <div className={styles.main}>
        <div className={styles.main__left}>
            <div className={styles.student__card}>
                <img src="https://fileserver.teachstarter.com/thumbnails/36170-10-ways-to-improve-student-concentration-us-thumbnail-0-600x400.png" alt="student" />
            </div>
            <div className={styles.student__card}>
                <img src="https://resilienteducator.com/wp-content/uploads/2014/11/math-teacher.jpg" alt="student" />
                </div>

                <div className={styles.actions}>
                    <button className={styles.action__button}>
                        <span class="material-symbols-outlined">video_camera_front</span>
                    </button>
                    <button className={styles.action__button}>
                        <span class="material-symbols-outlined">mic</span>
                    </button>
                    <button className={styles.action__button}>
                        <span class="material-symbols-outlined">share</span>
                    </button>
                    <button className={styles.action__button}>
                        <span class="material-symbols-outlined">chat</span>
                    </button>
                    <button className={styles.action__button__leave}>
                        <span class="material-symbols-outlined">logout</span>
                    </button>
                </div>
            
        </div>
        <div className={styles.main__right}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/otccLdpg27s?si=bYVjS6iIgjx9zBKi"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
