import React from 'react';
import fanpage from "../../assets/projects/fanpage.jpeg";
import runbuddy from "../../assets/projects/runbuddy.png";
import codeRefactor from "../../assets/projects/digital-marketing-meeting.jpg";
import eatApp from "../../assets/projects/eat.png";
import vFriend from "../../assets/projects/vFriend.png";
import foodFestival from "../../assets/projects/foodFestival.png";
import note from "../../assets/projects/backend-note.png";
import freddyfress from "../../assets/projects/freddyfress.png"

function Project() {
    return (
        <section id="works">
            <h2>Projects</h2>
            <section id="portfolio">
                <div class="container1">
                    <div class="imgcontainer">
                        <a href="https://github.com/ncp9988/myfirstfanpage.git">
                            <img class="photo" src={fanpage} alt="Fan Page" /> </a>
                    </div>
                    <div class="pic">
                        <h3>First fanpage</h3>
                    </div>
                </div>
                <div class="container1">
                    <div class="imgcontainer">
                        <a href="https://github.com/ncp9988/run-buddy.git">
                            <img class="photo" src={runbuddy} alt="Run-Buddy" /></a>
                    </div>
                    <div class="pic">
                        <h3>Run-Buddy</h3>
                    </div>
                </div>
                <div class="container1">
                    <div class="imgcontainer">
                        <a href="https://github.com/ncp9988/coderefactor.git">
                            <img class="photo" src={codeRefactor} alt="Code Refactor" />
                        </a>
                    </div>
                    <div class="pic">
                        <h3>Code Refactor</h3>
                    </div>
                </div>
                <div class="container1">
                    <div class="imgcontainer">
                        <a href="https://github.com/ncp9988/Eat-Eat-Eat.git">
                            <img class="photo" src={eatApp} alt="Eat-Eat-Eat" />
                        </a>
                    </div>
                    <div class="pic">
                        <h3>Eat-Eat-Eat</h3>
                    </div>
                </div>
                <div class="container1">
                    <div class="imgcontainer">
                        <a href="https://github.com/Arcanaut/Group-Project-2.git">
                            <img class="photo" src={vFriend} alt="vFriend" />
                        </a>
                    </div>
                    <div class="pic">
                        <h3><a href="https://peaceful-river-67746.herokuapp.com/">vFriend</a></h3>

                    </div>
                </div>
                <div class="container1">
                    <div class="imgcontainer">
                        <a href="https://github.com/ncp9988/food-festival.git">
                            <img class="photo" src={foodFestival} alt="food-festival" />
                        </a>
                    </div>
                    <div class="pic">
                        <h3>Food-Festival</h3>
                    </div>
                </div>
                <div class="container1">
                    <div class="imgcontainer">
                        <a href="https://github.com/ncp9988/backEnd-noteTaker.git">
                            <img class="photo" src={note} alt="backend-noteTaker" />
                        </a>
                    </div>
                    <div class="pic">
                        <h3>Note-Taker</h3>
                    </div>
                </div>
                <div class="container1">
                    <div class="imgcontainer">
                        <a href="https://github.com/Arcanaut/Freddys-Fresh-Produce.git">
                            <img class="photo" src={freddyfress} alt="backend-noteTaker" />
                        </a>
                    </div>
                    <div class="pic">
                        <h3><a href="https://freddy-fress.herokuapp.com/">Freddys-Fresh-Product</a></h3>


                    </div>
                </div>

            </section>
        </section>
    );
}
export default Project;